import random
from copy import deepcopy
from typing import List


class Tracer:
    def __init__(self):
        self.events = []

    def emit(self, line, action, left, right, i, lo, pivot, array, res, message=""):
        self.events.append({
            "line": line, "action": action,
            "left": left, "right": right, "i": i, "lo": lo, "pivot": pivot,
            "array": deepcopy(array),
            "res": res, "message": message,
        })


def kth_largest_integer_quickselect(nums: List[int], k: int, T: Tracer) -> int:
    T.emit(1, "call", 0, len(nums) - 1, None, None, None, nums, None,
           f"CALL quickselect(nums, 0, {len(nums) - 1}, k={k})")
    return quickselect(nums, 0, len(nums) - 1, k, T)


def quickselect(nums: List[int], left: int, right: int, k: int, T: Tracer) -> int:
    n = len(nums)
    T.emit(2, "enter", left, right, None, None, None, nums, None,
           f"ENTER quickselect(left={left}, right={right}); n = {n}")
    T.emit(3, "condition", left, right, None, None, None, nums, None,
           f"Check if left={left} >= right={right}")
    if left >= right:
        T.emit(4, "base_case", left, right, None, None, None, nums, nums[left],
               f"return nums[{left}] ({nums[left]})")
        return nums[left]

    random_index = random.randint(left, right)
    T.emit(5, "statement", left, right, random_index, None, None, nums, None,
           f"random_index = random.randint({left}, {right}) -> {random_index}")
    nums[random_index], nums[right] = nums[right], nums[random_index]
    T.emit(6, "swap_pivot", left, right, random_index, None, nums[right], nums, None,
           f"Swap nums[{random_index}] and nums[{right}] to move the pivot to the rightmost index")

    T.emit(7, "call_partition", left, right, None, None, nums[right], nums, None,
           f"CALL partition(nums, {left}, {right})")
    pivot_index = partition(nums, left, right, T)

    target = n - k
    T.emit(8, "condition", left, right, None, pivot_index, None, nums, None,
           f"Check if pivot_index={pivot_index} < n-k={target}")
    if pivot_index < target:
        T.emit(9, "call_right", left, right, None, pivot_index, None, nums, None,
               f"CALL quickselect(nums, {pivot_index + 1}, {right}, k)")
        return quickselect(nums, pivot_index + 1, right, k, T)

    T.emit(10, "condition", left, right, None, pivot_index, None, nums, None,
           f"Check if pivot_index={pivot_index} > n-k={target}")
    if pivot_index > target:
        T.emit(11, "call_left", left, right, None, pivot_index, None, nums, None,
               f"CALL quickselect(nums, {left}, {pivot_index - 1}, k)")
        return quickselect(nums, left, pivot_index - 1, k, T)

    T.emit(12, "found", left, right, None, pivot_index, None, nums, nums[pivot_index],
           f"pivot_index == n-k; return nums[{pivot_index}] ({nums[pivot_index]})")
    return nums[pivot_index]


def partition(nums: List[int], left: int, right: int, T: Tracer) -> int:
    pivot = nums[right]
    T.emit(13, "enter", left, right, None, None, pivot, nums, None,
           f"ENTER partition(left={left}, right={right}); pivot = nums[{right}] = {pivot}")
    lo = left
    T.emit(14, "statement", left, right, None, lo, pivot, nums, None, f"lo = left = {lo}")

    for i in range(left, right):
        T.emit(15, "loop", left, right, i, lo, pivot, nums, None, f"for i in range(left, right) -> i = {i}")
        T.emit(16, "condition", left, right, i, lo, pivot, nums, None,
               f"Check nums[{i}]={nums[i]} < pivot={pivot}")
        if nums[i] < pivot:
            nums[lo], nums[i] = nums[i], nums[lo]
            T.emit(17, "swap", left, right, i, lo, pivot, nums, None, f"Swap nums[{lo}] and nums[{i}]")
            lo += 1
            T.emit(18, "increment", left, right, i, lo, pivot, nums, None, f"lo += 1 -> {lo}")

    nums[lo], nums[right] = nums[right], nums[lo]
    T.emit(19, "finalize", left, right, None, lo, pivot, nums, None,
           f"Swap pivot into place: nums[{lo}] and nums[{right}]")
    T.emit(20, "return_partition", left, right, None, lo, pivot, nums, lo, f"return lo ({lo})")
    return lo


def run(scenario=None):
    random.seed(4)
    T = Tracer()
    nums = [5, 2, 4, 3, 1, 6]
    k = 3
    original = list(nums)
    result = kth_largest_integer_quickselect(nums, k, T)
    return {"kind": "quickselect", "nums": original, "k": k, "result": result, "events": T.events}


PROBLEM = {
    "slug": "kth-largest-integer-quickselect",
    "title": "Kth Largest Integer - Quickselect",
    "category": "Sort and Search",
    "description": (
        "Return the kth largest integer in an array.\n\n"
        "Example:\n"
        "Input: nums = [5, 2, 4, 3, 1, 6], k = 3\n"
        "Output: 4\n\n"
        "This implementation uses quickselect, which leverages the partition step of "
        "quicksort to position only one value correctly instead of sorting everything. "
        "The kth largest integer is equivalent to the (n - k)th smallest, so after each "
        "partition, if the pivot lands before index n - k, quickselect recurses only on "
        "the right part; if it lands after, only on the left part; if it lands exactly at "
        "n - k, the pivot itself is the answer. This narrows the search to one side at "
        "each step, running in O(n) time on average instead of quicksort's O(n log(n))."
    ),
    "run": run,
}
