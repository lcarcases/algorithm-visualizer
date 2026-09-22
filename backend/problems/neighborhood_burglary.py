from copy import deepcopy
from typing import List


class Tracer:
    def __init__(self):
        self.events = []

    def emit(self, line, action, i, dp, res, message=""):
        self.events.append({
            "line": line, "action": action,
            "i": i,
            "dp": deepcopy(dp),
            "res": res,
            "message": message,
        })


def neighborhood_burglary(houses: List[int], T: Tracer) -> int:
    T.emit(1, "condition", None, [], None, "Check if not houses")
    if not houses:
        T.emit(2, "return", None, [], 0, "Empty list; return 0")
        return 0

    T.emit(3, "condition", None, [], None, "Check if len(houses) == 1")
    if len(houses) == 1:
        T.emit(4, "return", None, [], houses[0], f"Only one house; return {houses[0]}")
        return houses[0]

    dp = [0] * len(houses)
    T.emit(5, "statement", None, dp, None, "dp = [0] * len(houses)")

    dp[0] = houses[0]
    T.emit(6, "base_case", 0, dp, None, f"dp[0] = houses[0] = {dp[0]}")

    dp[1] = max(houses[0], houses[1])
    T.emit(7, "base_case", 1, dp, None, f"dp[1] = max(houses[0], houses[1]) = {dp[1]}")

    T.emit(8, "loop", None, dp, None, "for i in range(2, len(houses))")
    for i in range(2, len(houses)):
        T.emit(8, "loop", i, dp, None, f"for i in range(2, len(houses)) -> i = {i}")
        dp[i] = max(dp[i - 1], houses[i] + dp[i - 2])
        T.emit(9, "fill", i, dp, None,
               f"dp[{i}] = max(dp[{i - 1}]={dp[i - 1]}, houses[{i}]+dp[{i - 2}]="
               f"{houses[i]}+{dp[i - 2]}) = {dp[i]}")

    result = dp[len(houses) - 1]
    T.emit(10, "return", None, dp, result, f"return dp[{len(houses) - 1}] ({result})")
    return result


def run(scenario=None):
    T = Tracer()
    houses = [200, 300, 200, 50]
    result = neighborhood_burglary(houses, T)
    return {"kind": "burglary", "houses": houses, "result": result, "events": T.events}


PROBLEM = {
    "slug": "neighborhood-burglary",
    "title": "Neighborhood Burglary",
    "category": "Dynamic Programming",
    "description": (
        "You plan to rob houses in a street where each house stores a certain amount of "
        "money. The neighborhood has a security system that sets off an alarm when two "
        "adjacent houses are robbed. Return the maximum amount of cash that can be stolen "
        "without triggering the alarms.\n\n"
        "Example:\n"
        "Input: houses = [200, 300, 200, 50]\n"
        "Output: 400\n\n"
        "This implementation solves it bottom-up: dp[i] is the most cash obtainable "
        "considering only the first i + 1 houses. At each house we either skip it "
        "(carrying over dp[i - 1]) or rob it (its own value plus dp[i - 2], since the "
        "adjacent house couldn't have been robbed), taking whichever is larger."
    ),
    "run": run,
}
