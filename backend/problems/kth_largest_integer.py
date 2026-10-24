import heapq
from copy import deepcopy
from typing import List


class Tracer:
    def __init__(self):
        self.events = []

    def emit(self, line, action, i, num, heap, res, message=""):
        self.events.append({
            "line": line, "action": action,
            "i": i, "num": num,
            "heap": deepcopy(heap),
            "res": res, "message": message,
        })


def kth_largest_integer_min_heap(nums: List[int], k: int, T: Tracer) -> int:
    min_heap = []
    T.emit(1, "init", None, None, min_heap, None, "min_heap = []")
    heapq.heapify(min_heap)
    T.emit(2, "statement", None, None, min_heap, None, "heapq.heapify(min_heap)")

    for i, num in enumerate(nums):
        T.emit(3, "loop", i, num, min_heap, None, f"for num in nums -> nums[{i}] = {num}")
        T.emit(4, "condition", i, num, min_heap, None, f"Check len(min_heap)={len(min_heap)} < k={k}")
        if len(min_heap) < k:
            heapq.heappush(min_heap, num)
            T.emit(5, "push", i, num, min_heap, None, f"heapq.heappush(min_heap, {num})")
        else:
            T.emit(6, "condition", i, num, min_heap, None,
                   f"Check num={num} > min_heap[0]={min_heap[0]}")
            if num > min_heap[0]:
                popped = heapq.heappop(min_heap)
                T.emit(7, "pop", i, num, min_heap, None, f"heapq.heappop(min_heap) -> removed {popped}")
                heapq.heappush(min_heap, num)
                T.emit(8, "push", i, num, min_heap, None, f"heapq.heappush(min_heap, {num})")
            else:
                T.emit(6, "skip", i, num, min_heap, None, f"num={num} <= min_heap[0]={min_heap[0]}; skip")

    result = min_heap[0]
    T.emit(9, "return", None, None, min_heap, result, f"return min_heap[0] ({result})")
    return result


def run(scenario=None):
    T = Tracer()
    nums = [5, 2, 4, 3, 1, 6]
    k = 3
    result = kth_largest_integer_min_heap(nums, k, T)
    return {"kind": "heap", "nums": nums, "k": k, "result": result, "events": T.events}


PROBLEM = {
    "slug": "kth-largest-integer-min-heap",
    "title": "Kth Largest Integer - Min Heap",
    "category": "Sort and Search",
    "description": (
        "Return the kth largest integer in an array.\n\n"
        "Example:\n"
        "Input: nums = [5, 2, 4, 3, 1, 6], k = 3\n"
        "Output: 4\n\n"
        "This implementation maintains a min-heap of at most k integers: the top k largest "
        "integers seen so far, with the smallest of them always at the top of the heap. "
        "For each number, if the heap isn't full yet it's pushed in directly; otherwise, if "
        "it's larger than the heap's smallest integer, that smallest integer is popped and "
        "the new number is pushed in its place. Once every number has been considered, the "
        "top of the heap is the kth largest integer."
    ),
    "run": run,
}
