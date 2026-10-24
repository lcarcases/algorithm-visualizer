from copy import deepcopy
from typing import List


class Tracer:
    def __init__(self):
        self.events = []

    def emit(self, line, action, i, candies, phase, cmp, res, message=""):
        self.events.append({
            "line": line, "action": action,
            "i": i,
            "candies": deepcopy(candies),
            "phase": phase,
            "cmp": cmp,
            "res": res,
            "message": message,
        })


def candies(ratings: List[int], T: Tracer) -> int:
    n = len(ratings)
    T.emit(1, "statement", None, [], None, None, None, f"n = len(ratings) = {n}")

    candies = [1] * n
    T.emit(2, "init", None, candies, None, None, None, "candies = [1] * n (everyone starts with 1)")

    for i in range(1, n):
        T.emit(3, "loop", i, candies, "pass1", None, None, f"Pass 1 (left -> right): i = {i}")
        cmp = ratings[i] > ratings[i - 1]
        T.emit(4, "condition", i, candies, "pass1", cmp, None,
               f"Check ratings[{i}]={ratings[i]} > ratings[{i - 1}]={ratings[i - 1]}")
        if cmp:
            candies[i] = candies[i - 1] + 1
            T.emit(5, "assign", i, candies, "pass1", cmp, None,
                   f"candies[{i}] = candies[{i - 1}] + 1 = {candies[i]}")

    for i in range(n - 2, -1, -1):
        T.emit(6, "loop", i, candies, "pass2", None, None, f"Pass 2 (right -> left): i = {i}")
        cmp = ratings[i] > ratings[i + 1]
        T.emit(7, "condition", i, candies, "pass2", cmp, None,
               f"Check ratings[{i}]={ratings[i]} > ratings[{i + 1}]={ratings[i + 1]}")
        if cmp:
            candies[i] = max(candies[i], candies[i + 1] + 1)
            T.emit(8, "assign", i, candies, "pass2", cmp, None,
                   f"candies[{i}] = max(candies[{i}], candies[{i + 1}] + 1) = {candies[i]}")

    result = sum(candies)
    T.emit(9, "return", None, candies, "done", None, result, f"return sum(candies) = {result}")
    return result


def run(scenario=None):
    T = Tracer()
    ratings = [4, 3, 2, 4, 5, 1]
    result = candies(ratings, T)
    return {"kind": "candies", "ratings": ratings, "result": result, "events": T.events}


PROBLEM = {
    "slug": "candies",
    "title": "Candies",
    "category": "Greedy",
    "description": (
        "You teach a class of children sitting in a row, each of whom has a rating based on "
        "their performance. You want to distribute candies to the children while abiding by "
        "the following rules:\n"
        "1. Each child must receive at least one candy.\n"
        "2. If two children sit next to each other, the child with the higher rating must "
        "receive more candies.\n\n"
        "Determine the minimum number of candies you need to distribute to satisfy these "
        "conditions.\n\n"
        "Example:\n"
        "Input: ratings = [4, 3, 2, 4, 5, 1]\n"
        "Output: 12\n"
        "Explanation: You can distribute candies to each child as follows: [3, 2, 1, 2, 3, 1].\n\n"
        "This implementation makes two passes: left to right, a child with a higher rating "
        "than their left neighbor gets one more candy than that neighbor; then right to left, "
        "a child with a higher rating than their right neighbor gets at least one more candy "
        "than that neighbor, keeping the larger amount."
    ),
    "run": run,
}
