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


def sort_array(nums: List[int], T: Tracer) -> List[int]:
    T.emit(1, "call", 0, len(nums) - 1, None, None, None, nums, None,
           f"CALL quicksort_optimized(nums, 0, {len(nums) - 1})")
    quicksort_optimized(nums, 0, len(nums) - 1, T)
    T.emit(2, "return", None, None, None, None, None, nums, nums, f"return nums ({nums})")
    return nums


def quicksort_optimized(nums: List[int], left: int, right: int, T: Tracer) -> None:
    T.emit(3, "condition", left, right, None, None, None, nums, None,
           f"Check if left={left} >= right={right}")
    if left >= right:
        T.emit(4, "base_case", left, right, None, None, None, nums, None,
               "Range has 0 or 1 elements; already sorted")
        return

    random_index = random.randint(left, right)
    T.emit(5, "statement", left, right, random_index, None, None, nums, None,
           f"random_index = random.randint({left}, {right}) -> {random_index}")
    nums[random_index], nums[right] = nums[right], nums[random_index]
    T.emit(6, "swap_pivot", left, right, random_index, None, nums[right], nums, None,
           f"Swap nums[{random_index}] and nums[{right}] to move the pivot to the rightmost index")

    T.emit(7, "call_partition", left, right, None, None, nums[right], nums, None,
           f"CALL partition(nums, {left}, {right})")
    pivot_index = partition(nums, left, right, T)

    T.emit(8, "call_left", left, right, None, pivot_index, None, nums, None,
           f"CALL quicksort_optimized(nums, {left}, {pivot_index - 1})")
    quicksort_optimized(nums, left, pivot_index - 1, T)
    T.emit(9, "call_right", left, right, None, pivot_index, None, nums, None,
           f"CALL quicksort_optimized(nums, {pivot_index + 1}, {right})")
    quicksort_optimized(nums, pivot_index + 1, right, T)


def partition(nums: List[int], left: int, right: int, T: Tracer) -> int:
    pivot = nums[right]
    T.emit(10, "enter", left, right, None, None, pivot, nums, None,
           f"ENTER partition(left={left}, right={right}); pivot = nums[{right}] = {pivot}")
    lo = left
    T.emit(11, "statement", left, right, None, lo, pivot, nums, None, f"lo = left = {lo}")

    for i in range(left, right):
        T.emit(12, "loop", left, right, i, lo, pivot, nums, None, f"for i in range(left, right) -> i = {i}")
        T.emit(13, "condition", left, right, i, lo, pivot, nums, None,
               f"Check nums[{i}]={nums[i]} < pivot={pivot}")
        if nums[i] < pivot:
            nums[lo], nums[i] = nums[i], nums[lo]
            T.emit(14, "swap", left, right, i, lo, pivot, nums, None, f"Swap nums[{lo}] and nums[{i}]")
            lo += 1
            T.emit(15, "increment", left, right, i, lo, pivot, nums, None, f"lo += 1 -> {lo}")

    nums[lo], nums[right] = nums[right], nums[lo]
    T.emit(16, "finalize", left, right, None, lo, pivot, nums, None,
           f"Swap pivot into place: nums[{lo}] and nums[{right}]")
    T.emit(17, "return_partition", left, right, None, lo, pivot, nums, lo, f"return lo ({lo})")
    return lo


def run(scenario=None):
    random.seed(9)
    T = Tracer()
    nums = [6, 8, 4, 2, 7, 3, 1, 5]
    original = list(nums)
    result = sort_array(nums, T)
    return {"kind": "quicksort", "nums": original, "result": result, "events": T.events}


PROBLEM = {
    "slug": "sort-array",
    "title": "Sort Array",
    "category": "Sort and Search",
    "description": (
        "Given an integer array, sort it in ascending order.\n\n"
        "Example:\n"
        "Input: nums = [6, 8, 4, 2, 7, 3, 1, 5]\n"
        "Output: [1, 2, 3, 4, 5, 6, 7, 8]\n\n"
        "This implementation uses quicksort: it picks a pivot at a random index, "
        "partitions the array so every number less than the pivot ends up to its left and "
        "every number greater than or equal to it ends up to its right, placing the pivot "
        "in its final sorted position, then recursively sorts the two sides. Randomizing "
        "the pivot avoids the O(n^2) worst case a fixed-pivot quicksort hits on already "
        "sorted or adversarial input, giving O(n log(n)) time on average."
    ),
    "run": run,
}
