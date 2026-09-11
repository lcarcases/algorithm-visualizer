from copy import deepcopy
from typing import List


class Tracer:
    def __init__(self):
        self.events = []
        self.stack = []

    def emit(self, line, action, i, curr_subset, res, node_id=None, message=""):
        self.events.append({
            "line": line, "action": action,
            "i": i,
            "curr_subset": deepcopy(curr_subset),
            "res": deepcopy(res),
            "call_stack": deepcopy(self.stack),
            "node_id": node_id, "message": message,
        })


def find_all_subsets(nums: List[int], T: Tracer) -> List[List[int]]:
    res = []
    T.emit(1, "statement", None, [], res, message="Create result list: res = []")
    T.emit(2, "statement", None, [], res, message="Prepare recursive call")
    T.emit(3, "call", 0, [], res, "root", "CALL backtrack(0, [], nums, res)")
    T.stack.append("backtrack(0, [])")
    backtrack(0, [], nums, res, "root", T)
    T.stack.pop()
    T.emit(4, "return", None, [], res, message="Top-level backtrack returned; return res")
    return res


def backtrack(i: int, curr_subset: List[int], nums: List[int],
              res: List[List[int]], node_id: str, T: Tracer) -> None:
    T.emit(5, "enter", i, curr_subset, res, node_id, f"ENTER backtrack(i={i}, curr_subset={curr_subset})")
    T.emit(7, "statement", i, curr_subset, res, node_id, "Check if i == len(nums)")

    if i == len(nums):
        T.emit(8, "condition_true", i, curr_subset, res, node_id, "Base case is TRUE")
        res.append(curr_subset[:])
        T.emit(9, "append", i, curr_subset, res, node_id, f"Append {curr_subset} to res")
        T.emit(10, "return", i, curr_subset, res, node_id, "RETURN from this recursive call")
        return

    curr_subset.append(nums[i])
    T.emit(12, "append", i, curr_subset, res, node_id, f"curr_subset.append(nums[{i}]) -> {curr_subset}")
    incl_child = node_id + "-1"
    T.emit(13, "call", i, curr_subset, res, node_id, f"CALL backtrack({i + 1}, {curr_subset}) [include]")
    T.stack.append(f"backtrack({i + 1}, {curr_subset})")
    backtrack(i + 1, curr_subset, nums, res, incl_child, T)
    T.stack.pop()

    curr_subset.pop()
    T.emit(14, "pop", i, curr_subset, res, node_id, f"curr_subset.pop() -> {curr_subset}")
    excl_child = node_id + "-0"
    T.emit(16, "call", i, curr_subset, res, node_id, f"CALL backtrack({i + 1}, {curr_subset}) [exclude]")
    T.stack.append(f"backtrack({i + 1}, {curr_subset})")
    backtrack(i + 1, curr_subset, nums, res, excl_child, T)
    T.stack.pop()


def run(scenario=None):
    T = Tracer()
    nums = [4, 5, 6]
    result = find_all_subsets(nums, T)
    return {"kind": "subsets", "nums": nums, "result": result, "events": T.events}


PROBLEM = {
    "slug": "find-all-subsets",
    "title": "Find All Subsets",
    "category": "Backtracking",
    "description": (
        "Return all possible subsets of a given set of unique integers. Each subset can "
        "be ordered in any way, and the subsets can be returned in any order.\n\n"
        "Example:\n"
        "Input: nums = [4, 5, 6]\n"
        "Output: [[], [4], [4, 5], [4, 5, 6], [4, 6], [5], [5, 6], [6]]"
    ),
    "run": run,
}
