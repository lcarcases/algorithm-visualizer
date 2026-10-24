from copy import deepcopy
from typing import List


class Tracer:
    def __init__(self):
        self.events = []

    def emit(self, line, action, row, col, top, bottom, left, right, result, res, message=""):
        self.events.append({
            "line": line, "action": action,
            "row": row, "col": col,
            "top": top, "bottom": bottom, "left": left, "right": right,
            "result": deepcopy(result),
            "res": res, "message": message,
        })


def spiral_matrix(matrix: List[List[int]], T: Tracer) -> List[int]:
    T.emit(1, "condition", None, None, None, None, None, None, [], None, "Check if not matrix")
    if not matrix:
        T.emit(2, "base_case", None, None, None, None, None, None, [], [], "Empty matrix; return []")
        return []

    result: List[int] = []
    T.emit(3, "statement", None, None, None, None, None, None, result, None, "result = []")
    top, bottom = 0, len(matrix) - 1
    T.emit(4, "statement", None, None, top, bottom, None, None, result, None, f"top, bottom = 0, {bottom}")
    left, right = 0, len(matrix[0]) - 1
    T.emit(5, "statement", None, None, top, bottom, left, right, result, None, f"left, right = 0, {right}")

    while top <= bottom and left <= right:
        T.emit(6, "loop", None, None, top, bottom, left, right, result, None,
               f"Check top={top} <= bottom={bottom} and left={left} <= right={right}")

        T.emit(7, "loop_row", None, None, top, bottom, left, right, result, None,
               f"for i in range(left={left}, right+1={right + 1}) -> top row")
        for i in range(left, right + 1):
            result.append(matrix[top][i])
            T.emit(8, "visit", top, i, top, bottom, left, right, result, None,
                   f"result.append(matrix[{top}][{i}]) = {matrix[top][i]}")
        top += 1
        T.emit(9, "statement", None, None, top, bottom, left, right, result, None, f"top += 1 -> {top}")

        T.emit(10, "loop_col", None, None, top, bottom, left, right, result, None,
               f"for i in range(top={top}, bottom+1={bottom + 1}) -> right column")
        for i in range(top, bottom + 1):
            result.append(matrix[i][right])
            T.emit(11, "visit", i, right, top, bottom, left, right, result, None,
                   f"result.append(matrix[{i}][{right}]) = {matrix[i][right]}")
        right -= 1
        T.emit(12, "statement", None, None, top, bottom, left, right, result, None, f"right -= 1 -> {right}")

        T.emit(13, "condition", None, None, top, bottom, left, right, result, None,
               f"Check top={top} <= bottom={bottom}")
        if top <= bottom:
            T.emit(14, "loop_row", None, None, top, bottom, left, right, result, None,
                   f"for i in range(right={right}, left-1={left - 1}, -1) -> bottom row")
            for i in range(right, left - 1, -1):
                result.append(matrix[bottom][i])
                T.emit(15, "visit", bottom, i, top, bottom, left, right, result, None,
                       f"result.append(matrix[{bottom}][{i}]) = {matrix[bottom][i]}")
            bottom -= 1
            T.emit(16, "statement", None, None, top, bottom, left, right, result, None,
                   f"bottom -= 1 -> {bottom}")

        T.emit(17, "condition", None, None, top, bottom, left, right, result, None,
               f"Check left={left} <= right={right}")
        if left <= right:
            T.emit(18, "loop_col", None, None, top, bottom, left, right, result, None,
                   f"for i in range(bottom={bottom}, top-1={top - 1}, -1) -> left column")
            for i in range(bottom, top - 1, -1):
                result.append(matrix[i][left])
                T.emit(19, "visit", i, left, top, bottom, left, right, result, None,
                       f"result.append(matrix[{i}][{left}]) = {matrix[i][left]}")
            left += 1
            T.emit(20, "statement", None, None, top, bottom, left, right, result, None,
                   f"left += 1 -> {left}")

    T.emit(21, "return", None, None, top, bottom, left, right, result, result, f"return result ({result})")
    return result


def run(scenario=None):
    T = Tracer()
    matrix = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
    ]
    result = spiral_matrix(matrix, T)
    return {"kind": "spiral", "matrix": matrix, "result": result, "events": T.events}


PROBLEM = {
    "slug": "spiral-matrix",
    "title": "Matrix Spiral Traversal",
    "category": "Math and Geometry",
    "description": (
        "Return the elements of a matrix in clockwise spiral order.\n\n"
        "Example:\n"
        "Input: matrix = [[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19]]\n"
        "Output: [0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11]\n\n"
        "This implementation tracks four shrinking boundaries (top, bottom, left, right) "
        "instead of a hash set of visited cells. It repeats: sweep right along the top "
        "boundary then push top down, sweep down along the right boundary then pull right "
        "in, sweep left along the bottom boundary then pull bottom up, sweep up along the "
        "left boundary then push left in — checking before the bottom and left sweeps that "
        "their boundary hasn't already crossed, so a single row or column isn't revisited."
    ),
    "run": run,
}
