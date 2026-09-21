from copy import deepcopy
from typing import Dict, List


class Tracer:
    def __init__(self):
        self.events = []
        self.stack = []

    def emit(self, line, action, target, memo, res, node_id=None, message=""):
        self.events.append({
            "line": line, "action": action,
            "target": target,
            "memo": sorted(memo.items()),
            "res": res,
            "call_stack": deepcopy(self.stack),
            "node_id": node_id, "message": message,
        })


def _finite(value):
    return None if value == float("inf") else value


def min_coin_combination_top_down(coins: List[int], target: int, T: Tracer) -> int:
    memo = {}
    T.emit(1, "call", None, memo, None, "root", f"CALL top_down_dp(target={target})")
    res = top_down_dp(coins, target, memo, "root", T)
    result = -1 if res == float("inf") else res
    T.emit(2, "return", None, memo, result, message=f"return -1 if res == inf else res -> {result}")
    return result


def top_down_dp(coins: List[int], target: int, memo: Dict[int, int], node_id: str, T: Tracer) -> int:
    T.emit(3, "enter", target, memo, None, node_id, f"ENTER top_down_dp(target={target})")
    T.emit(4, "condition", target, memo, None, node_id, "Check if target == 0")

    if target == 0:
        T.emit(5, "base_case", target, memo, 0, node_id, "Base case: return 0")
        return 0

    T.emit(6, "condition", target, memo, None, node_id, f"Check if {target} in memo")
    if target in memo:
        T.emit(7, "memo_hit", target, memo, _finite(memo[target]), node_id,
               f"Already solved: return memo[{target}] = {memo[target]}")
        return memo[target]

    min_coins = float("inf")
    T.emit(8, "statement", target, memo, None, node_id, "min_coins = inf")

    T.emit(9, "loop", target, memo, None, node_id, "for coin in coins")
    for idx, coin in enumerate(coins):
        child_id = f"{node_id}-{idx}"
        T.emit(10, "condition", target, memo, None, node_id, f"Check if coin {coin} <= target {target}")
        if coin > target:
            T.emit(11, "pruned", target - coin, memo, None, child_id,
                   f"coin {coin} > target {target}; skip (would go negative)")
            continue

        T.emit(12, "call", target, memo, None, node_id, f"CALL top_down_dp(target={target - coin})")
        T.stack.append(f"dp({target - coin})")
        sub = top_down_dp(coins, target - coin, memo, child_id, T)
        T.stack.pop()
        min_coins = min(min_coins, 1 + sub)
        T.emit(13, "statement", target, memo, None, node_id,
               f"min_coins = min(min_coins, 1 + {sub}) = {min_coins}")

    memo[target] = min_coins
    T.emit(14, "memoize", target, memo, _finite(min_coins), node_id, f"memo[{target}] = {min_coins}")
    T.emit(15, "return", target, memo, _finite(min_coins), node_id, f"return memo[{target}] ({min_coins})")
    return min_coins


def run(scenario=None):
    T = Tracer()
    coins = [1, 2, 3]
    target = 5
    result = min_coin_combination_top_down(coins, target, T)
    return {"kind": "coins", "coins": coins, "target": target, "result": result, "events": T.events}


PROBLEM = {
    "slug": "min-coin-combination",
    "title": "Minimum Coin Combination",
    "category": "Dynamic Programming",
    "description": (
        "You are given an array of coin values and a target amount of money. Return the "
        "minimum number of coins needed to total the target amount. If this isn't "
        "possible, return -1. You may assume there's an unlimited supply of each coin.\n\n"
        "Example:\n"
        "Input: coins = [1, 2, 3], target = 5\n"
        "Output: 2\n\n"
        "This implementation solves it top-down with memoization: for a target, it tries "
        "every coin and recurses on the remaining amount, taking the best (fewest-coins) "
        "option, memoizing each target's result. A branch where a coin is larger than the "
        "remaining target is pruned immediately (shown with an X below); a target that "
        "recurs elsewhere in the tree (like target=2 or target=1) is looked up from the "
        "memo instead of being recomputed (shown in orange)."
    ),
    "run": run,
}
