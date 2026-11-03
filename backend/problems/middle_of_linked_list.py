from typing import List, Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Tracer:
    """Pointers are reported as positions in the drawing: 1..len(values) = list
    nodes in original order, len(values) + 1 = NULL."""

    def __init__(self, positions, null_pos):
        self.events = []
        self.positions = positions
        self.null_pos = null_pos

    def pos(self, node):
        return self.null_pos if node is None else self.positions[id(node)]

    def emit(self, line, action, message="", ptrs=None, result=None):
        # ptrs is (fast, slow); either may be None before that pointer exists.
        self.events.append({
            "line": line, "action": action, "message": message,
            "fast": None if ptrs is None or ptrs[0] is None else self.pos(ptrs[0]),
            "slow": None if ptrs is None or ptrs[1] is None else self.pos(ptrs[1]),
            "result": result,
        })


def middle_node(head: Optional[ListNode], T: Tracer) -> Optional[ListNode]:
    T.emit(1, "enter", "ENTER middle_node(head)")
    slow = head
    T.emit(2, "init_slow", "slow = head", ptrs=(None, slow))
    fast = head
    T.emit(3, "init_fast", "fast = head", ptrs=(fast, slow))

    while fast and fast.next:
        T.emit(4, "loop", f"Check fast ({fast.val}) and fast.next are not NULL", ptrs=(fast, slow))
        slow = slow.next
        T.emit(5, "advance_slow", f"slow = slow.next -> {slow.val}", ptrs=(fast, slow))
        fast = fast.next.next
        T.emit(6, "advance_fast", f"fast = fast.next.next -> {'NULL' if fast is None else fast.val}",
               ptrs=(fast, slow))
    T.emit(4, "loop_end", "fast is NULL or fast.next is NULL; slow is at the middle", ptrs=(fast, slow))

    T.emit(7, "return", f"return slow -> {slow.val}", ptrs=(fast, slow), result=slow.val)
    return slow


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
    "odd": {"label": "Odd length: [3,4,5,6,5,4,3]", "values": [3, 4, 5, 6, 5, 4, 3]},
    "even": {"label": "Even length: [1,2,3,4,5,6]", "values": [1, 2, 3, 4, 5, 6]},
    "single": {"label": "Single node: [10]", "values": [10]},
}
DEFAULT_SCENARIO = "odd"


def run(scenario=None):
    scenario = scenario if scenario in SCENARIOS else DEFAULT_SCENARIO
    values = SCENARIOS[scenario]["values"]
    head, list_nodes = build_list(values)
    T = Tracer({id(node): k + 1 for k, node in enumerate(list_nodes)}, len(values) + 1)
    result_node = middle_node(head, T)
    return {
        "kind": "middle_list", "values": values, "result": result_node.val,
        "events": T.events, "scenario": scenario,
    }


PROBLEM = {
    "slug": "middle-of-the-linked-list",
    "title": "Middle of the Linked List",
    "category": "Fast and Slow Pointers",
    "description": (
        "Given the head of a singly linked list, return the middle node of the linked "
        "list. If the number of nodes in the linked list is even, there will be two "
        "middle nodes, so return the second one.\n\n"
        "Example:\n"
        "Input: 3 -> 4 -> 5 -> 6 -> 5 -> 4 -> 3\n"
        "Output: 6\n\n"
        "This implementation uses the fast and slow pointers technique: both pointers "
        "start at the head, and on each step slow advances one node while fast advances "
        "two. By the time fast reaches the last node or NULL, it has traveled twice as "
        "far as slow, so slow is sitting right at the middle — the second of the two "
        "middle nodes when the list has an even length. It runs in O(n) time with O(1) "
        "extra space in a single pass."
    ),
    "scenarios": [{"id": key, "label": cfg["label"]} for key, cfg in SCENARIOS.items()],
    "run": run,
}
