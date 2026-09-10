from copy import deepcopy
from typing import List, Set


class Tracer:
    def __init__(self):
        self.events = []
        self.stack = []

    def emit(self, line, action, candidate, used, res, node_id=None, message=""):
        self.events.append({
            "line": line, "action": action,
            "candidate": deepcopy(candidate),
            "used": sorted(used),
            "res": deepcopy(res),
            "call_stack": deepcopy(self.stack),
            "node_id": node_id, "message": message
        })


def find_all_permutations(nums: List[int], T: Tracer) -> List[List[int]]:
    res = []
    T.emit(1, "statement", [], set(), res, message="Create result list: res = []")
    T.emit(2, "statement", [], set(), res, message="Prepare recursive call")
    T.stack.append("backtrack([])")
    T.emit(3, "call", [], set(), res, "root", "CALL backtrack(nums, [], set(), res)")
    backtrack(nums, [], set(), res, "root", T)
    T.emit(4, "return", [], set(), res, message="Top-level backtrack returned; return res")
    return res


def backtrack(nums: List[int], candidate: List[int], used: Set[int],
              res: List[List[int]], node_id: str, T: Tracer) -> None:
    T.emit(5, "enter", candidate, used, res, node_id, f"ENTER backtrack({candidate})")
    T.emit(6, "statement", candidate, used, res, node_id, "Check if len(candidate) == len(nums)")

    if len(candidate) == len(nums):
        T.emit(8, "condition_true", candidate, used, res, node_id, "Base case is TRUE")
        res.append(candidate[:])
        T.emit(9, "append", candidate, used, res, node_id, f"Append {candidate} to res")
        T.emit(10, "return", candidate, used, res, node_id, "RETURN from this recursive call")
        T.stack.pop()
        return

    T.emit(12, "loop", candidate, used, res, node_id, "for num in nums")
    for num in nums:
        T.emit(13, "condition", candidate, used, res, node_id, f"Check: {num} not in used")
        if num not in used:
            candidate.append(num)
            T.emit(14, "append", candidate, used, res, node_id, f"candidate.append({num})")
            used.add(num)
            T.emit(15, "add", candidate, used, res, node_id, f"used.add({num})")
            T.emit(17, "call", candidate, used, res, node_id, f"CALL backtrack({candidate})")
            child = f"{node_id}-{num}"
            T.stack.append(f"backtrack({candidate})")
            backtrack(nums, candidate, used, res, child, T)
            T.emit(19, "pop", candidate, used, res, node_id, "Back from child; candidate.pop()")
            candidate.pop()
            T.emit(20, "remove", candidate, used, res, node_id, f"used.remove({num})")
            used.remove(num)


def run():
    T = Tracer()
    nums = [1, 2, 3]
    result = find_all_permutations(nums, T)
    return {"nums": nums, "result": result, "events": T.events}


PROBLEM = {
    "slug": "find-all-permutations",
    "title": "Find All Permutations",
    "category": "Backtracking",
    "description": (
        "Given an array of distinct integers, return all the possible permutations "
        "in any order. This implementation solves it with backtracking: it builds a "
        "candidate permutation one number at a time, tracks which numbers are already "
        "used, and once the candidate is the same length as the input it records it as "
        "a full permutation. After exploring a choice, it backtracks — undoing that "
        "choice (candidate.pop(), used.remove(num)) — before trying the next one, so "
        "every ordering gets explored exactly once."
    ),
    "run": run,
}
