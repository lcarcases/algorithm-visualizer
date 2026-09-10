from copy import deepcopy
from collections import defaultdict, deque
from typing import List


class Tracer:
    def __init__(self):
        self.events = []

    def emit(self, line, action, in_degrees, queue, enrolled_courses, processed,
              current_node=None, neighbor=None, message=""):
        self.events.append({
            "line": line, "action": action,
            "in_degrees": deepcopy(in_degrees),
            "queue": deepcopy(list(queue)),
            "enrolled_courses": enrolled_courses,
            "processed": deepcopy(processed),
            "current_node": current_node,
            "neighbor": neighbor,
            "message": message,
        })


def prerequisites(n: int, prerequisites: List[List[int]], T: Tracer) -> bool:
    graph = defaultdict(list)
    in_degrees = [0] * n
    processed = []
    T.emit(1, "enter", in_degrees, [], 0, processed,
           message=f"ENTER prerequisites(n={n}, prerequisites={prerequisites})")
    T.emit(2, "statement", in_degrees, [], 0, processed,
           message="graph = defaultdict(list)")
    T.emit(3, "statement", in_degrees, [], 0, processed,
           message="in_degrees = [0] * n")

    for prerequisite, course in prerequisites:
        T.emit(4, "loop", in_degrees, [], 0, processed,
               message=f"for (prerequisite, course) in prerequisites -> ({prerequisite}, {course})")
        graph[prerequisite].append(course)
        T.emit(5, "append", in_degrees, [], 0, processed,
               message=f"graph[{prerequisite}].append({course})")
        in_degrees[course] += 1
        T.emit(6, "increment", in_degrees, [], 0, processed,
               message=f"in_degrees[{course}] += 1 (now {in_degrees[course]})")

    queue = deque()
    T.emit(7, "statement", in_degrees, list(queue), 0, processed,
           message="queue = deque()")

    for i in range(n):
        T.emit(8, "loop", in_degrees, list(queue), 0, processed, current_node=i,
               message=f"for i in range(n) -> i = {i}")
        if in_degrees[i] == 0:
            T.emit(9, "condition_true", in_degrees, list(queue), 0, processed, current_node=i,
                   message=f"in_degrees[{i}] == 0")
            queue.append(i)
            T.emit(10, "enqueue", in_degrees, list(queue), 0, processed, current_node=i,
                   message=f"queue.append({i})")

    enrolled_courses = 0
    T.emit(11, "statement", in_degrees, list(queue), enrolled_courses, processed,
           message="enrolled_courses = 0")

    while queue:
        T.emit(12, "loop", in_degrees, list(queue), enrolled_courses, processed,
               message="while queue:")
        node = queue.popleft()
        T.emit(13, "dequeue", in_degrees, list(queue), enrolled_courses, processed, current_node=node,
               message=f"node = queue.popleft() -> {node}")
        enrolled_courses += 1
        T.emit(14, "increment", in_degrees, list(queue), enrolled_courses, processed, current_node=node,
               message=f"enrolled_courses += 1 (now {enrolled_courses})")

        for neighbor in graph[node]:
            T.emit(15, "loop", in_degrees, list(queue), enrolled_courses, processed, current_node=node,
                   neighbor=neighbor, message=f"for neighbor in graph[{node}] -> {neighbor}")
            in_degrees[neighbor] -= 1
            T.emit(16, "decrement", in_degrees, list(queue), enrolled_courses, processed, current_node=node,
                   neighbor=neighbor, message=f"in_degrees[{neighbor}] -= 1 (now {in_degrees[neighbor]})")
            if in_degrees[neighbor] == 0:
                T.emit(17, "condition_true", in_degrees, list(queue), enrolled_courses, processed, current_node=node,
                       neighbor=neighbor, message=f"in_degrees[{neighbor}] == 0")
                queue.append(neighbor)
                T.emit(18, "enqueue", in_degrees, list(queue), enrolled_courses, processed, current_node=node,
                       neighbor=neighbor, message=f"queue.append({neighbor})")

        processed = processed + [node]

    T.emit(19, "return", in_degrees, list(queue), enrolled_courses, processed,
           message=f"return enrolled_courses ({enrolled_courses}) == n ({n})")

    return enrolled_courses == n


SCENARIOS = {
    "solvable": {
        "label": "Solvable (no cycle)",
        "n": 6,
        "edges": [[0, 1], [0, 2], [3, 2], [1, 4], [2, 4], [4, 5]],
    },
    "cyclic": {
        "label": "Unsolvable (has a cycle)",
        "n": 6,
        "edges": [[0, 1], [0, 2], [3, 2], [1, 4], [2, 4], [4, 5], [5, 2]],
    },
}
DEFAULT_SCENARIO = "solvable"


def run(scenario=None):
    scenario = scenario if scenario in SCENARIOS else DEFAULT_SCENARIO
    cfg = SCENARIOS[scenario]
    T = Tracer()
    n = cfg["n"]
    edges = cfg["edges"]
    result = prerequisites(n, [pair[:] for pair in edges], T)
    return {
        "kind": "graph", "n": n, "edges": edges, "result": result, "events": T.events,
        "scenario": scenario,
    }


PROBLEM = {
    "slug": "prerequisites",
    "title": "Prerequisites",
    "category": "Graphs",
    "description": (
        "Given an integer n representing the number of courses labeled from 0 to n - 1, "
        "and an array of prerequisite pairs, determine if it's possible to enroll in all "
        "courses.\n\n"
        "Each prerequisite is represented as a pair [a, b], indicating that course a must "
        "be taken before course b.\n\n"
        "Example:\n"
        "Input: n = 6, prerequisites = [[0, 1], [0, 2], [3, 2], [1, 4], [2, 4], [4, 5]]\n"
        "Output: True\n\n"
        "This implementation solves it with Kahn's algorithm (BFS topological sort): it "
        "builds an adjacency list and an in-degree count for every course, then repeatedly "
        "enrolls (dequeues) courses whose in-degree is 0 and decrements the in-degree of "
        "their dependents. If every course gets enrolled this way, there's no cyclic "
        "dependency and enrolling in all courses is possible."
    ),
    "scenarios": [{"id": key, "label": cfg["label"]} for key, cfg in SCENARIOS.items()],
    "run": run,
}
