import math
from typing import List, Optional


def _finite(value):
    return None if value is not None and math.isinf(value) else value


class Tracer:
    def __init__(self):
        self.events = []

    def emit(self, line, action, i, num, curr_sum, max_sum, curr_start, best_start,
              best_end, res, message=""):
        self.events.append({
            "line": line, "action": action,
            "i": i, "num": num,
            "curr_sum": _finite(curr_sum), "max_sum": _finite(max_sum),
            "curr_start": curr_start, "best_start": best_start, "best_end": best_end,
            "res": res, "message": message,
        })


def maximum_subarray_sum(nums: List[int], T: Tracer) -> int:
    T.emit(1, "condition", None, None, None, None, None, None, None, None,
           "Check if not nums")
    if not nums:
        T.emit(2, "return", None, None, None, None, None, None, None, 0,
               "Empty list; return 0")
        return 0

    max_sum = current_sum = float("-inf")
    curr_start: Optional[int] = None
    best_start: Optional[int] = None
    best_end: Optional[int] = None
    T.emit(4, "statement", None, None, current_sum, max_sum, None, None, None, None,
           "max_sum = current_sum = -inf")

    for i, num in enumerate(nums):
        T.emit(6, "loop", i, num, current_sum, max_sum, curr_start, best_start, best_end,
               None, f"for num in nums -> nums[{i}] = {num}")

        continue_sum = current_sum + num
        restart_sum = num
        if continue_sum >= restart_sum:
            current_sum = continue_sum
            T.emit(7, "continue", i, num, current_sum, max_sum, curr_start, best_start,
                   best_end, None, f"current_sum = max(current_sum + num, num) -> continue, {current_sum}")
        else:
            current_sum = restart_sum
            curr_start = i
            T.emit(7, "restart", i, num, current_sum, max_sum, curr_start, best_start,
                   best_end, None, f"current_sum = max(current_sum + num, num) -> restart, {current_sum}")

        if current_sum > max_sum:
            max_sum = current_sum
            best_start, best_end = curr_start, i
        T.emit(8, "update_max", i, num, current_sum, max_sum, curr_start, best_start,
               best_end, None, f"max_sum = max(max_sum, current_sum) = {max_sum}")

    T.emit(9, "return", None, None, current_sum, max_sum, curr_start, best_start, best_end,
           max_sum, f"return max_sum ({max_sum})")
    return max_sum


def run(scenario=None):
    T = Tracer()
    nums = [3, 1, -6, 2, -1, 4, -9]
    result = maximum_subarray_sum(nums, T)
    return {"kind": "kadane", "nums": nums, "result": result, "events": T.events}


PROBLEM = {
    "slug": "maximum-subarray-sum",
    "title": "Maximum Subarray Sum",
    "category": "Dynamic Programming",
    "description": (
        "Given an array of integers, return the sum of the subarray with the largest "
        "sum.\n\n"
        "Example:\n"
        "Input: nums = [3, 1, -6, 2, -1, 4, -9]\n"
        "Output: 5\n"
        "Explanation: subarray [2, -1, 4] has the largest sum of 5.\n\n"
        "This implementation solves it with Kadane's algorithm: for each number, it "
        "decides whether to continue the current subarray (add the number to the running "
        "sum) or restart a new subarray at that number, whichever gives a larger sum, "
        "tracking the best sum seen at every step."
    ),
    "run": run,
}
