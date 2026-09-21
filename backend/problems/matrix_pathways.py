from copy import deepcopy


class Tracer:
    def __init__(self):
        self.events = []

    def emit(self, line, action, r, c, dp, res, message=""):
        self.events.append({
            "line": line, "action": action,
            "r": r, "c": c,
            "dp": deepcopy(dp),
            "res": res,
            "message": message,
        })


def matrix_pathways(m: int, n: int, T: Tracer) -> int:
    dp = [[1] * n for _ in range(m)]
    T.emit(1, "init", None, None, dp, None, "Initialize dp table: row 0 and column 0 = 1")

    for r in range(1, m):
        T.emit(2, "loop", r, None, dp, None, f"for r in range(1, m) -> r = {r}")
        for c in range(1, n):
            T.emit(3, "loop", r, c, dp, None, f"for c in range(1, n) -> c = {c}")
            dp[r][c] = dp[r - 1][c] + dp[r][c - 1]
            T.emit(4, "fill", r, c, dp, None,
                   f"dp[{r}][{c}] = dp[{r - 1}][{c}] + dp[{r}][{c - 1}] = "
                   f"{dp[r - 1][c]} + {dp[r][c - 1]} = {dp[r][c]}")

    result = dp[m - 1][n - 1]
    T.emit(5, "return", None, None, dp, result, f"return dp[{m - 1}][{n - 1}] ({result})")
    return result


def run(scenario=None):
    T = Tracer()
    m, n = 3, 3
    result = matrix_pathways(m, n, T)
    return {"kind": "grid", "m": m, "n": n, "result": result, "events": T.events}


PROBLEM = {
    "slug": "matrix-pathways",
    "title": "Matrix Pathways",
    "category": "Dynamic Programming",
    "description": (
        "You are positioned at the top-left corner of a m x n matrix, and can only move "
        "downward or rightward through the matrix. Determine the number of unique "
        "pathways you can take to reach the bottom-right corner of the matrix.\n\n"
        "Example:\n"
        "Input: m = 3, n = 3\n"
        "Output: 6\n\n"
        "This implementation solves it bottom-up: every cell in row 0 or column 0 can only "
        "be reached one way (a straight line of moves), so those are initialized to 1. "
        "Every other cell's path count is the sum of the cell above it and the cell to its "
        "left, since those are the only two directions a path could have arrived from."
    ),
    "run": run,
}
