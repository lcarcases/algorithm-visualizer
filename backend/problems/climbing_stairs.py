from copy import deepcopy
from typing import Dict


class Tracer:
    def __init__(self):
        self.events = []
        self.stack = []

    def emit(self, line, action, n, memo, res, node_id=None, message=""):
        self.events.append({
            "line": line, "action": action,
            "n": n,
            "memo": sorted(memo.items()),
            "res": res,
            "call_stack": deepcopy(self.stack),
            "node_id": node_id, "message": message,
        })


def climbing_stairs_top_down(n: int, memo: Dict[int, int], node_id: str, T: Tracer) -> int:
    T.emit(3, "enter", n, memo, None, node_id, f"ENTER climbing_stairs_top_down(n={n})")
    T.emit(5, "condition", n, memo, None, node_id, "Check if n <= 2")

    if n <= 2:
        T.emit(6, "base_case", n, memo, n, node_id, f"Base case: return {n}")
        return n

    T.emit(8, "condition", n, memo, None, node_id, f"Check if {n} in memo")
    if n in memo:
        T.emit(9, "memo_hit", n, memo, memo[n], node_id, f"Already solved: return memo[{n}] = {memo[n]}")
        return memo[n]

    left_id = node_id + "-0"
    T.emit(12, "call", n, memo, None, node_id, f"CALL climbing_stairs_top_down({n - 1})")
    T.stack.append(f"cs({n - 1})")
    left = climbing_stairs_top_down(n - 1, memo, left_id, T)
    T.stack.pop()

    right_id = node_id + "-1"
    T.emit(13, "call", n, memo, None, node_id, f"CALL climbing_stairs_top_down({n - 2})")
    T.stack.append(f"cs({n - 2})")
    right = climbing_stairs_top_down(n - 2, memo, right_id, T)
    T.stack.pop()

    memo[n] = left + right
    T.emit(11, "memoize", n, memo, memo[n], node_id, f"memo[{n}] = {left} + {right} = {memo[n]}")
    T.emit(15, "return", n, memo, memo[n], node_id, f"return memo[{n}] ({memo[n]})")
    return memo[n]


def run(scenario=None):
    T = Tracer()
    n = 6
    memo = {}
    T.emit(1, "statement", None, memo, None, message="Create memo = {}")
    result = climbing_stairs_top_down(n, memo, "root", T)
    return {"kind": "memo", "n": n, "result": result, "events": T.events}


PROBLEM = {
    "slug": "climbing-stairs",
    "title": "Climbing Stairs",
    "category": "Dynamic Programming",
    "description": (
        "Determine the number of distinct ways to climb a staircase of n steps by taking "
        "either 1 or 2 steps at a time.\n\n"
        "Example:\n"
        "Input: n = 6\n"
        "Output: 13\n\n"
        "This implementation solves it top-down with memoization: it recursively breaks n "
        "into the subproblems n - 1 and n - 2, storing each subproblem's result in a hash "
        "map. The tree shown below is the full naive recursion tree (every subproblem's "
        "position, whether or not it actually gets recomputed); nodes highlighted in orange "
        "are subproblems (like cs(4) and cs(3)) that recur later in the tree and get "
        "answered instantly from the memo instead of being recomputed from scratch."
    ),
    "run": run,
}
