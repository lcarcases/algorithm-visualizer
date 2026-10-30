from typing import List, Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Tracer:
    """Pointers are reported as positions in the drawing: 0 = dummy,
    1..len(values) = list nodes in original order, len(values) + 1 = NULL."""

    def __init__(self, positions, null_pos):
        self.events = []
        self.positions = positions
        self.null_pos = null_pos

    def pos(self, node):
        return self.null_pos if node is None else self.positions[id(node)]

    def emit(self, line, action, message="", ptrs=None, step=None, removed=None, result=None):
        # ptrs is (fast, slow) once the pointers exist; fast may be None (NULL).
        self.events.append({
            "line": line, "action": action, "message": message,
            "fast": None if ptrs is None else self.pos(ptrs[0]),
            "slow": None if ptrs is None else self.pos(ptrs[1]),
            "step": step, "removed": removed, "result": result,
        })


def remove_nth_last_node(head: Optional[ListNode], n: int, T: Tracer) -> Optional[ListNode]:
    T.emit(1, "enter", f"ENTER remove_nth_last_node(head, n={n})")
    dummy = ListNode(0, head)
    T.positions[id(dummy)] = 0
    T.emit(2, "dummy", "Create a dummy node with value 0 whose next points to head")
    fast = slow = dummy
    T.emit(3, "init", "Initialize slow and fast to the dummy node", ptrs=(fast, slow))

    for i in range(n + 1):
        T.emit(4, "loop", f"for step {i + 1} of n + 1 = {n + 1}", ptrs=(fast, slow), step=i + 1)
        fast = fast.next
        T.emit(5, "advance_fast", f"fast = fast.next -> {'NULL' if fast is None else fast.val}",
               ptrs=(fast, slow), step=i + 1)
    T.emit(4, "loop_end", f"fast is now n + 1 = {n + 1} steps ahead of slow", ptrs=(fast, slow))

    while fast:
        T.emit(6, "loop", f"Check fast ({fast.val}) is not NULL", ptrs=(fast, slow))
        fast = fast.next
        T.emit(7, "advance_fast", f"fast = fast.next -> {'NULL' if fast is None else fast.val}",
               ptrs=(fast, slow))
        slow = slow.next
        T.emit(8, "advance_slow", f"slow = slow.next -> {slow.val}", ptrs=(fast, slow))
    T.emit(6, "loop_end", "fast is NULL; slow is right before the target node", ptrs=(fast, slow))

    target = slow.next
    slow.next = slow.next.next
    T.emit(9, "remove", f"slow.next = slow.next.next (bypass node {target.val})",
           ptrs=(fast, slow), removed=T.pos(target))

    result = []
    node = dummy.next
    while node:
        result.append(node.val)
        node = node.next
    T.emit(10, "return", f"return dummy.next -> {result}",
           ptrs=(fast, slow), removed=T.pos(target), result=result)
    return dummy.next


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
    "middle": {"label": "[1..7], n = 3", "values": [1, 2, 3, 4, 5, 6, 7], "n": 3},
    "head": {"label": "Remove head: [1..5], n = 5", "values": [1, 2, 3, 4, 5], "n": 5},
    "tail": {"label": "Remove tail: [10..50], n = 1", "values": [10, 20, 30, 40, 50], "n": 1},
}
DEFAULT_SCENARIO = "middle"


def run(scenario=None):
    scenario = scenario if scenario in SCENARIOS else DEFAULT_SCENARIO
    cfg = SCENARIOS[scenario]
    values, n = cfg["values"], cfg["n"]
    head, nodes = build_list(values)
    T = Tracer({id(node): k + 1 for k, node in enumerate(nodes)}, len(values) + 1)
    new_head = remove_nth_last_node(head, n, T)
    result = []
    while new_head:
        result.append(new_head.val)
        new_head = new_head.next
    return {
        "kind": "linked_list", "values": values, "n": n, "result": result,
        "events": T.events, "scenario": scenario,
    }


PROBLEM = {
    "slug": "remove-nth-node-from-end-of-list",
    "title": "Remove Nth Node from End of List",
    "category": "Two Pointers",
    "description": (
        "Given a singly linked list and an integer n, remove the nth node from the end of "
        "the list and return the head of the modified list.\n\n"
        "Example:\n"
        "Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7, n = 3\n"
        "Output: 1 -> 2 -> 3 -> 4 -> 6 -> 7\n\n"
        "This implementation uses two pointers with a fixed gap between them. A dummy node "
        "is placed before the head so that removing the head itself needs no special case. "
        "Both pointers start at the dummy; fast first moves n + 1 steps ahead, then both "
        "move one step at a time until fast becomes NULL. At that point slow sits right "
        "before the target node, so setting slow.next = slow.next.next bypasses it. "
        "Finally, dummy.next is returned as the new head. It runs in O(n) time with O(1) "
        "extra space and a single pass through the list."
    ),
    "run": run,
    "scenarios": [{"id": key, "label": cfg["label"]} for key, cfg in SCENARIOS.items()],
}
