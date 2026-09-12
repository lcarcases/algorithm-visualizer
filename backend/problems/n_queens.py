from copy import deepcopy
from typing import List, Set


class Tracer:
    def __init__(self):
        self.events = []
        self.stack = []

    def emit(self, line, action, r, cols, diagonals, anti_diagonals, res,
              node_id=None, message=""):
        self.events.append({
            "line": line, "action": action,
            "r": r,
            "cols": sorted(cols),
            "diagonals": sorted(diagonals),
            "anti_diagonals": sorted(anti_diagonals),
            "res": res,
            "call_stack": deepcopy(self.stack),
            "node_id": node_id, "message": message,
        })


def n_queens(n: int, T: Tracer) -> int:
    res = [0]
    T.emit(1, "statement", None, set(), set(), set(), res[0], message="Create counter: res = 0")
    T.emit(2, "statement", None, set(), set(), set(), res[0], message="Prepare recursive call")
    T.emit(3, "call", 0, set(), set(), set(), res[0], "root", "CALL dfs(0, {}, {}, {}, n)")
    T.stack.append("dfs(0)")
    dfs(0, set(), set(), set(), n, "root", res, T)
    T.stack.pop()
    T.emit(4, "return", None, set(), set(), set(), res[0], message="dfs returned; return res")
    return res[0]


def dfs(r: int, diagonals_set: Set[int], anti_diagonals_set: Set[int],
        cols_set: Set[int], n: int, node_id: str, res: List[int], T: Tracer) -> None:
    T.emit(5, "enter", r, cols_set, diagonals_set, anti_diagonals_set, res[0], node_id,
           f"ENTER dfs(r={r})")
    T.emit(7, "condition", r, cols_set, diagonals_set, anti_diagonals_set, res[0], node_id,
           "Check if r == n")

    if r == n:
        res[0] += 1
        T.emit(8, "solution", r, cols_set, diagonals_set, anti_diagonals_set, res[0], node_id,
               f"All {n} queens placed; res += 1 (now {res[0]})")
        T.emit(9, "return", r, cols_set, diagonals_set, anti_diagonals_set, res[0], node_id,
               "RETURN from this recursive call")
        return

    T.emit(11, "loop", r, cols_set, diagonals_set, anti_diagonals_set, res[0], node_id,
           "for c in range(n)")
    for c in range(n):
        curr_diagonal = r - c
        T.emit(12, "statement", r, cols_set, diagonals_set, anti_diagonals_set, res[0], node_id,
               f"curr_diagonal = {r} - {c} = {curr_diagonal}")
        curr_anti_diagonal = r + c
        T.emit(13, "statement", r, cols_set, diagonals_set, anti_diagonals_set, res[0], node_id,
               f"curr_anti_diagonal = {r} + {c} = {curr_anti_diagonal}")
        child = f"{node_id}-{c}"
        T.emit(14, "condition", r, cols_set, diagonals_set, anti_diagonals_set, res[0], node_id,
               f"Check column/diagonal conflict for c={c}")
        if (c in cols_set or curr_diagonal in diagonals_set
                or curr_anti_diagonal in anti_diagonals_set):
            T.emit(16, "pruned", r, cols_set, diagonals_set, anti_diagonals_set, res[0], child,
                   f"Column/diagonal conflict at c={c}; skip")
            continue

        cols_set.add(c)
        T.emit(17, "add", r, cols_set, diagonals_set, anti_diagonals_set, res[0], node_id,
               f"cols_set.add({c})")
        diagonals_set.add(curr_diagonal)
        T.emit(18, "add", r, cols_set, diagonals_set, anti_diagonals_set, res[0], node_id,
               f"diagonals_set.add({curr_diagonal})")
        anti_diagonals_set.add(curr_anti_diagonal)
        T.emit(19, "add", r, cols_set, diagonals_set, anti_diagonals_set, res[0], node_id,
               f"anti_diagonals_set.add({curr_anti_diagonal})")
        T.emit(20, "call", r, cols_set, diagonals_set, anti_diagonals_set, res[0], node_id,
               f"CALL dfs(r={r + 1})")
        T.stack.append(f"dfs({r + 1})")
        dfs(r + 1, diagonals_set, anti_diagonals_set, cols_set, n, child, res, T)
        T.stack.pop()

        cols_set.remove(c)
        T.emit(21, "remove", r, cols_set, diagonals_set, anti_diagonals_set, res[0], node_id,
               f"cols_set.remove({c})")
        diagonals_set.remove(curr_diagonal)
        T.emit(22, "remove", r, cols_set, diagonals_set, anti_diagonals_set, res[0], node_id,
               f"diagonals_set.remove({curr_diagonal})")
        anti_diagonals_set.remove(curr_anti_diagonal)
        T.emit(23, "remove", r, cols_set, diagonals_set, anti_diagonals_set, res[0], node_id,
               f"anti_diagonals_set.remove({curr_anti_diagonal})")


def run(scenario=None):
    T = Tracer()
    n = 4
    result = n_queens(n, T)
    return {"kind": "queens", "n": n, "result": result, "events": T.events}


PROBLEM = {
    "slug": "n-queens",
    "title": "N Queens",
    "category": "Backtracking",
    "description": (
        "There is a chessboard of size n x n. Your goal is to place n queens on the board "
        "such that no two queens attack each other. Return the number of distinct "
        "configurations where this is possible.\n\n"
        "Example:\n"
        "Input: n = 4\n"
        "Output: 2"
    ),
    "run": run,
}
