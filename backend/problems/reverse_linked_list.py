from typing import List, Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Tracer:
    """Pointers are reported as positions in the drawing: 1..len(values) = list
    nodes in original left-to-right order, len(values) + 1 = NULL."""

    def __init__(self, positions, null_pos):
        self.events = []
        self.positions = positions
        self.null_pos = null_pos

    def pos(self, node):
        return self.null_pos if node is None else self.positions[id(node)]

    def emit(self, line, action, message="", prev=None, curr=None, nxt=None,
             reversed_upto=0, result=None):
        self.events.append({
            "line": line, "action": action, "message": message,
            "prev": self.pos(prev), "curr": self.pos(curr), "next": self.pos(nxt),
            "reversed_upto": reversed_upto, "result": result,
        })


def reverse(head: Optional[ListNode], T: Tracer) -> Optional[ListNode]:
    T.emit(1, "enter", "ENTER reverse(head)", curr=head)

    # initialize prev and next pointer to NULL
    prev = None
    T.emit(2, "init_prev", "prev = None", prev=prev, curr=head)
    nxt = None
    T.emit(3, "init_next", "next = None", prev=prev, curr=head, nxt=nxt)

    # set current pointer to the head node
    curr = head
    T.emit(4, "init_curr", "curr = head", prev=prev, curr=curr, nxt=nxt)

    reversed_count = 0
    # while the current pointer is not NULL
    while curr is not None:
        T.emit(5, "loop", "Check curr is not NULL",
               prev=prev, curr=curr, nxt=nxt, reversed_upto=reversed_count)

        # set the next pointer to the next node in the list
        nxt = curr.next
        T.emit(6, "save_next", "next = curr.next",
               prev=prev, curr=curr, nxt=nxt, reversed_upto=reversed_count)

        # reverse the current node's pointer to point to the previous node
        curr.next = prev
        reversed_count += 1
        T.emit(7, "reverse_ptr", "curr.next = prev",
               prev=prev, curr=curr, nxt=nxt, reversed_upto=reversed_count)

        # set the previous pointer to the current node
        prev = curr
        T.emit(8, "advance_prev", "prev = curr",
               prev=prev, curr=curr, nxt=nxt, reversed_upto=reversed_count)

        # move the current pointer to the next node
        curr = nxt
        T.emit(9, "advance_curr", "curr = next",
               prev=prev, curr=curr, nxt=nxt, reversed_upto=reversed_count)

    T.emit(5, "loop_end", "curr is NULL; stop",
           prev=prev, curr=curr, nxt=nxt, reversed_upto=reversed_count)

    # set the head pointer to the last node, which is the new first node after reversal
    head = prev
    T.emit(10, "set_head", "head = prev", prev=prev, curr=curr, nxt=nxt,
           reversed_upto=reversed_count)

    # return the new head pointer
    T.emit(11, "return", "return head", prev=prev, curr=curr, nxt=nxt,
           reversed_upto=reversed_count, result=None if head is None else head.val)
    return head


def build_list(values: List[int]):
    dummy = ListNode(0)
    current = dummy
    nodes = []
    for val in values:
        current.next = ListNode(val)
        current = current.next
        nodes.append(current)
    return dummy.next, nodes


SCENARIOS = {
    "example": {"label": "[3, 4, 5] (textbook example)", "values": [3, 4, 5]},
    "driver1": {"label": "[1, 2, 3, 4, 5]", "values": [1, 2, 3, 4, 5]},
    "driver2": {"label": "[1, 2, 3, 4, 5, 6]", "values": [1, 2, 3, 4, 5, 6]},
    "driver3": {"label": "[3, 2, 1]", "values": [3, 2, 1]},
    "driver4": {"label": "[10] (single node)", "values": [10]},
    "driver5": {"label": "[1, 2]", "values": [1, 2]},
}
DEFAULT_SCENARIO = "example"


def run(scenario=None):
    scenario = scenario if scenario in SCENARIOS else DEFAULT_SCENARIO
    values = SCENARIOS[scenario]["values"]
    head, list_nodes = build_list(values)
    T = Tracer({id(node): k + 1 for k, node in enumerate(list_nodes)}, len(values) + 1)
    reverse(head, T)
    return {
        "kind": "reverse_list", "values": values, "result": values[::-1],
        "events": T.events, "scenario": scenario,
    }


PROBLEM = {
    "slug": "reverse-linked-list",
    "title": "Reverse Linked List",
    "category": "Merge Intervals",
    "description": (
        "Given the head of a singly linked list, reverse the linked list and return its "
        "updated head.\n\n"
        "Constraints:\n"
        "Let n be the number of nodes in a linked list.\n"
        "1 <= n <= 500\n"
        "-5000 <= Node.value <= 5000\n\n"
        "Example:\n"
        "Input: 3 -> 4 -> 5 -> NULL\n"
        "Output: 5 -> 4 -> 3 -> NULL\n\n"
        "This implementation reverses the list in place in a single pass, using three "
        "pointers: prev (initially NULL), curr (initially head), and a temporary next. On "
        "each step it saves curr.next before overwriting it, points curr.next backward at "
        "prev, then slides prev and curr one step forward using the saved next. Once curr "
        "falls off the end of the list, prev is sitting on the old last node, which is now "
        "the new head. It runs in O(n) time with O(1) extra space."
    ),
    "scenarios": [{"id": key, "label": cfg["label"]} for key, cfg in SCENARIOS.items()],
    "run": run,
}
