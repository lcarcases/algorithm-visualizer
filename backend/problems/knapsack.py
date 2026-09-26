from copy import deepcopy
from typing import List


class Tracer:
    def __init__(self):
        self.events = []

    def emit(self, line, action, i, c, dp, res, dep_c=None, message=""):
        self.events.append({
            "line": line, "action": action,
            "i": i, "c": c,
            "dep_c": dep_c,
            "dp": deepcopy(dp),
            "res": res,
            "message": message,
        })


def knapsack(cap: int, weights: List[int], values: List[int], T: Tracer) -> int:
    n = len(values)
    T.emit(1, "statement", None, None, None, None, message=f"n = len(values) = {n}")

    dp = [[0 for _ in range(cap + 1)] for _ in range(n + 1)]
    T.emit(2, "init", None, None, dp, None,
           message="Initialize dp table with 0s (column 0 and row n are the base case)")

    for i in range(n - 1, -1, -1):
        T.emit(3, "loop", i, None, dp, None, message=f"for i in range(n - 1, -1, -1) -> i = {i}")
        for c in range(1, cap + 1):
            T.emit(4, "loop", i, c, dp, None, message=f"for c in range(1, cap + 1) -> c = {c}")
            T.emit(5, "condition", i, c, dp, None,
                   message=f"Check if weights[{i}]={weights[i]} <= c={c}")
            if weights[i] <= c:
                dep_c = c - weights[i]
                dp[i][c] = max(values[i] + dp[i + 1][dep_c], dp[i + 1][c])
                T.emit(6, "fill_fit", i, c, dp, None, dep_c,
                       f"dp[{i}][{c}] = max(values[{i}]+dp[{i + 1}][{dep_c}], dp[{i + 1}][{c}]) = "
                       f"max({values[i]}+{dp[i + 1][dep_c]}, {dp[i + 1][c]}) = {dp[i][c]}")
            else:
                dp[i][c] = dp[i + 1][c]
                T.emit(8, "fill_nofit", i, c, dp, None,
                       message=f"dp[{i}][{c}] = dp[{i + 1}][{c}] = {dp[i][c]}")

    result = dp[0][cap]
    T.emit(9, "return", None, None, dp, result, message=f"return dp[0][{cap}] ({result})")
    return result


def run(scenario=None):
    T = Tracer()
    cap = 7
    weights = [5, 3, 4, 1]
    values = [70, 50, 40, 10]
    result = knapsack(cap, weights, values, T)
    return {"kind": "knapsack", "cap": cap, "weights": weights, "values": values,
            "result": result, "events": T.events}


PROBLEM = {
    "slug": "knapsack",
    "title": "0/1 Knapsack",
    "category": "Dynamic Programming",
    "description": (
        "You are a thief planning to rob a store. However, you can only carry a knapsack "
        "with a maximum capacity of cap units. Each item (i) in the store has a weight "
        "(weights[i]) and a value (values[i]). Find the maximum total value of items you "
        "can carry in your knapsack.\n\n"
        "Example:\n"
        "Input: cap = 7, weights = [5, 3, 4, 1], values = [70, 50, 40, 10]\n"
        "Output: 90\n"
        "Explanation: The most valuable combination of items that can fit in the knapsack "
        "together are items 1 and 2. These items have a combined value of 50 + 40 = 90 and "
        "a total weight of 3 + 4 = 7, which fits within the knapsack's capacity.\n\n"
        "This implementation solves it bottom-up: dp[i][c] is the max value obtainable "
        "from items i..n-1 with capacity c, so column 0 (no capacity) and row n (no items "
        "left) are the base case, 0. If item i fits (weights[i] <= c), dp[i][c] is the "
        "larger of including it (its value plus dp[i+1][c-weights[i]]) or excluding it "
        "(dp[i+1][c]); otherwise it must be excluded."
    ),
    "run": run,
}
