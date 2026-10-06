from typing import List


class Tracer:
    def __init__(self):
        self.events = []

    def emit(self, line, action, i, destination, reachable, res, message=""):
        self.events.append({
            "line": line, "action": action,
            "i": i, "destination": destination,
            "reachable": reachable,
            "res": res, "message": message,
        })


def jump_to_the_end(nums: List[int], T: Tracer) -> bool:
    destination = len(nums) - 1
    T.emit(1, "statement", None, destination, None, None,
           f"destination = len(nums) - 1 = {destination}")

    for i in range(len(nums) - 1, -1, -1):
        T.emit(2, "loop", i, destination, None, None,
               f"for i in range(len(nums) - 1, -1, -1) -> i = {i}")
        reachable = i + nums[i] >= destination
        T.emit(3, "condition", i, destination, reachable, None,
               f"Check if i+nums[i] = {i}+{nums[i]} = {i + nums[i]} >= destination={destination}")
        if reachable:
            destination = i
            T.emit(4, "update", i, destination, reachable, None, f"destination = i = {i}")

    result = destination == 0
    T.emit(5, "return", None, destination, None, result, f"return destination == 0 -> {result}")
    return result


def run(scenario=None):
    T = Tracer()
    nums = [3, 2, 0, 2, 5]
    result = jump_to_the_end(nums, T)
    return {"kind": "jump", "nums": nums, "result": result, "events": T.events}


PROBLEM = {
    "slug": "jump-to-the-end",
    "title": "Jump to the End",
    "category": "Greedy",
    "description": (
        "You are given an integer array in which you're originally positioned at index 0. "
        "Each number in the array represents the maximum jump distance from the current "
        "index. Determine if it's possible to reach the end of the array.\n\n"
        "Example:\n"
        "Input: nums = [3, 2, 0, 2, 5]\n"
        "Output: True\n\n"
        "This implementation solves it greedily, working backward from the end: "
        "'destination' starts as the last index, and for each index i (scanned right to "
        "left), if i can jump at least as far as the current destination "
        "(i + nums[i] >= destination), destination is pulled back to i. If destination "
        "ends up at index 0, the start can reach the end."
    ),
    "run": run,
}
