from copy import deepcopy


class Tracer:
    def __init__(self):
        self.events = []

    def emit(self, line, action, i, j, dp, res, message=""):
        self.events.append({
            "line": line, "action": action,
            "i": i, "j": j,
            "dp": deepcopy(dp),
            "res": res,
            "message": message,
        })


def longest_common_subsequence(s1: str, s2: str, T: Tracer) -> int:
    dp = [[0] * (len(s2) + 1) for _ in range(len(s1) + 1)]
    T.emit(1, "init", None, None, dp, None,
           "Initialize dp table with 0s (last row and column are the base case)")

    for i in range(len(s1) - 1, -1, -1):
        T.emit(2, "loop", i, None, dp, None, f"for i in range(len(s1) - 1, -1, -1) -> i = {i}")
        for j in range(len(s2) - 1, -1, -1):
            T.emit(3, "loop", i, j, dp, None, f"for j in range(len(s2) - 1, -1, -1) -> j = {j}")
            T.emit(4, "condition", i, j, dp, None, f"Check if s1[{i}]='{s1[i]}' == s2[{j}]='{s2[j]}'")
            if s1[i] == s2[j]:
                dp[i][j] = 1 + dp[i + 1][j + 1]
                T.emit(5, "fill_match", i, j, dp, None,
                       f"dp[{i}][{j}] = 1 + dp[{i + 1}][{j + 1}] = 1 + {dp[i + 1][j + 1]} = {dp[i][j]}")
            else:
                dp[i][j] = max(dp[i + 1][j], dp[i][j + 1])
                T.emit(6, "fill_nomatch", i, j, dp, None,
                       f"dp[{i}][{j}] = max(dp[{i + 1}][{j}], dp[{i}][{j + 1}]) = "
                       f"max({dp[i + 1][j]}, {dp[i][j + 1]}) = {dp[i][j]}")

    result = dp[0][0]
    T.emit(7, "return", None, None, dp, result, f"return dp[0][0] ({result})")
    return result


def run(scenario=None):
    T = Tracer()
    s1, s2 = "acabac", "aebab"
    result = longest_common_subsequence(s1, s2, T)
    return {"kind": "lcs", "s1": s1, "s2": s2, "result": result, "events": T.events}


PROBLEM = {
    "slug": "longest-common-subsequence",
    "title": "Longest Common Subsequence",
    "category": "Dynamic Programming",
    "description": (
        "Given two strings, find the length of their longest common subsequence (LCS). A "
        "subsequence is a sequence of characters that can be derived from a string by "
        "deleting zero or more elements, without changing the order of the remaining "
        "elements.\n\n"
        "Example:\n"
        "Input: s1 = \"acabac\", s2 = \"aebab\"\n"
        "Output: 3\n\n"
        "This implementation solves it bottom-up: dp[i][j] holds the LCS length of the "
        "suffixes s1[i:] and s2[j:], so the last row and column (empty suffixes) are the "
        "base case, 0. The table fills from the bottom-right corner up to the top-left, "
        "where s1[i] == s2[j] means dp[i][j] = 1 + dp[i+1][j+1], and otherwise dp[i][j] is "
        "the larger of dp[i+1][j] and dp[i][j+1]."
    ),
    "run": run,
}
