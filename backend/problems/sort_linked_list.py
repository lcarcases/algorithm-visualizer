from copy import deepcopy
from typing import List, Tuple


class Tracer:
    def __init__(self):
        self.events = []

    def emit(self, line, action, node_id, message="", **fields):
        payload = {"line": line, "action": action, "node_id": node_id, "message": message}
        for key in ("list", "slow", "fast", "l1", "l2", "merged"):
            payload[key] = deepcopy(fields.get(key))
        self.events.append(payload)


def sort_linked_list(values: List[int], node_id: str, T: Tracer) -> List[int]:
    T.emit(1, "enter", node_id, f"ENTER sort_linked_list({values})", list=values)
    T.emit(2, "condition", node_id, "Check if list is empty or has only one element", list=values)
    if len(values) <= 1:
        T.emit(3, "base_case", node_id, f"Already sorted: {values}", list=values)
        return values

    T.emit(4, "call_split", node_id, "second_head = split_list(head)", list=values)
    first_half, second_half = split_list(values, node_id, T)

    left_id, right_id = node_id + "-0", node_id + "-1"
    T.emit(5, "call_left", node_id, f"CALL sort_linked_list({first_half})", list=first_half)
    first_sorted = sort_linked_list(first_half, left_id, T)
    T.emit(6, "call_right", node_id, f"CALL sort_linked_list({second_half})", list=second_half)
    second_sorted = sort_linked_list(second_half, right_id, T)

    T.emit(7, "call_merge", node_id, f"CALL merge({first_sorted}, {second_sorted})",
           l1=first_sorted, l2=second_sorted)
    merged = merge(first_sorted, second_sorted, node_id, T)
    T.emit(8, "merged", node_id, f"return merge result: {merged}", list=merged)
    return merged


def split_list(values: List[int], node_id: str, T: Tracer) -> Tuple[List[int], List[int]]:
    n = len(values)
    slow = fast = 0
    T.emit(9, "enter", node_id, "ENTER split_list", list=values, slow=slow, fast=fast)
    T.emit(10, "statement", node_id, "slow = fast = head", list=values, slow=slow, fast=fast)

    while fast + 1 < n and fast + 2 < n:
        T.emit(11, "loop", node_id, f"Check fast.next and fast.next.next (fast={fast})",
               list=values, slow=slow, fast=fast)
        slow += 1
        T.emit(12, "advance_slow", node_id, f"slow = slow.next -> {slow}", list=values, slow=slow, fast=fast)
        fast += 2
        T.emit(13, "advance_fast", node_id, f"fast = fast.next.next -> {fast}", list=values, slow=slow, fast=fast)
    T.emit(11, "loop_end", node_id, "fast.next and fast.next.next is False; stop",
           list=values, slow=slow, fast=fast)

    second_head = slow + 1
    T.emit(14, "statement", node_id, f"second_head = slow.next -> index {second_head}",
           list=values, slow=slow, fast=fast)
    first_half, second_half = values[:second_head], values[second_head:]
    T.emit(15, "statement", node_id, "slow.next = None (cut the list)", list=first_half, slow=slow, fast=fast)
    T.emit(16, "return", node_id, f"return second_head -> {second_half}", list=first_half)
    return first_half, second_half


def merge(l1: List[int], l2: List[int], node_id: str, T: Tracer) -> List[int]:
    T.emit(17, "enter", node_id, f"ENTER merge({l1}, {l2})", l1=l1, l2=l2, merged=[])
    merged: List[int] = []
    T.emit(18, "statement", node_id, "dummy = ListNode(0)", l1=l1, l2=l2, merged=merged)
    T.emit(19, "statement", node_id, "tail = dummy", l1=l1, l2=l2, merged=merged)

    i = j = 0
    while i < len(l1) and j < len(l2):
        T.emit(20, "loop", node_id, "Check l1 and l2 both have nodes remaining",
               l1=l1[i:], l2=l2[j:], merged=merged)
        T.emit(21, "condition", node_id, f"Check l1[0]={l1[i]} < l2[0]={l2[j]}",
               l1=l1[i:], l2=l2[j:], merged=merged)
        if l1[i] < l2[j]:
            T.emit(22, "take_left", node_id, f"tail.next = l1 ({l1[i]})", l1=l1[i:], l2=l2[j:], merged=merged)
            merged.append(l1[i])
            i += 1
            T.emit(23, "advance_l1", node_id, f"l1 = l1.next -> {l1[i:]}", l1=l1[i:], l2=l2[j:], merged=merged)
        else:
            T.emit(24, "take_right", node_id, f"tail.next = l2 ({l2[j]})", l1=l1[i:], l2=l2[j:], merged=merged)
            merged.append(l2[j])
            j += 1
            T.emit(25, "advance_l2", node_id, f"l2 = l2.next -> {l2[j:]}", l1=l1[i:], l2=l2[j:], merged=merged)
        T.emit(26, "statement", node_id, f"tail = tail.next; merged so far = {merged}",
               l1=l1[i:], l2=l2[j:], merged=merged)

    T.emit(20, "loop_end", node_id, "l1 or l2 is exhausted; stop", l1=l1[i:], l2=l2[j:], merged=merged)
    remaining = l1[i:] or l2[j:]
    merged = merged + remaining
    T.emit(27, "statement", node_id, f"tail.next = l1 or l2 -> attach {remaining}",
           l1=[], l2=[], merged=merged)
    T.emit(28, "return", node_id, f"return merged: {merged}", l1=[], l2=[], merged=merged)
    return merged


def run(scenario=None):
    T = Tracer()
    values = [3, 2, 4, 5, 1]
    result = sort_linked_list(values, "root", T)
    return {"kind": "merge", "values": values, "result": result, "events": T.events}


PROBLEM = {
    "slug": "sort-linked-list",
    "title": "Sort Linked List",
    "category": "Sort and Search",
    "description": (
        "Given the head of a singly linked list, sort the linked list in ascending "
        "order.\n\n"
        "Example:\n"
        "Input: 3 -> 2 -> 4 -> 5 -> 1\n"
        "Output: 1 -> 2 -> 3 -> 4 -> 5\n\n"
        "This implementation uses merge sort: it splits the list into two halves with the "
        "fast and slow pointer technique, recursively sorts each half, and merges the two "
        "sorted halves back together. It runs in O(n log(n)) time without needing random "
        "access, which is why merge sort (unlike quicksort) works well on linked lists."
    ),
    "run": run,
}
