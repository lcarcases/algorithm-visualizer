from typing import List, Optional


class Tracer:
    def __init__(self):
        self.events = []

    def emit(self, line, action, message="", i=None, j=None, start=None, end=None,
             intersections=None, result=None):
        self.events.append({
            "line": line, "action": action, "message": message,
            "i": i, "j": j, "start": start, "end": end,
            "intersections": list(intersections) if intersections is not None else None,
            "result": result,
        })


def intervals_intersection(interval_list_a: List[List[int]], interval_list_b: List[List[int]],
                            T: Tracer) -> List[List[int]]:
    size_a, size_b = len(interval_list_a), len(interval_list_b)
    T.emit(1, "enter", f"ENTER intervals_intersection({interval_list_a}, {interval_list_b})")

    # To store all intersecting intervals.
    intersections: List[List[int]] = []
    T.emit(2, "init_result", "intersections = []", intersections=intersections)

    # Index i iterates over interval_list_a, index j over interval_list_b.
    i = j = 0
    T.emit(3, "init_index", "i = j = 0", i=0, j=0, intersections=intersections)

    # The loop breaks whenever either of the lists ends.
    while i < size_a and j < size_b:
        T.emit(4, "loop", f"Check i={i} < len(a)={size_a} and j={j} < len(b)={size_b}",
               i=i, j=j, intersections=intersections)

        # start - the potential startpoint of the intersection.
        start = max(interval_list_a[i][0], interval_list_b[j][0])
        T.emit(5, "compute_start",
               f"start = max(a[{i}][0]={interval_list_a[i][0]}, b[{j}][0]={interval_list_b[j][0]}) -> {start}",
               i=i, j=j, start=start, intersections=intersections)

        # end - the potential endpoint of the intersection.
        end = min(interval_list_a[i][1], interval_list_b[j][1])
        T.emit(6, "compute_end",
               f"end = min(a[{i}][1]={interval_list_a[i][1]}, b[{j}][1]={interval_list_b[j][1]}) -> {end}",
               i=i, j=j, start=start, end=end, intersections=intersections)

        T.emit(7, "check", f"Check start={start} <= end={end}",
               i=i, j=j, start=start, end=end, intersections=intersections)

        if start <= end:  # if this is an actual intersection
            intersections.append([start, end])
            T.emit(8, "add", f"Intersection found; intersections.append([{start}, {end}])",
                   i=i, j=j, start=start, end=end, intersections=intersections)

        # Move forward in the list whose interval ends earlier.
        T.emit(9, "advance_check",
               f"Check a[{i}][1]={interval_list_a[i][1]} < b[{j}][1]={interval_list_b[j][1]}",
               i=i, j=j, start=start, end=end, intersections=intersections)

        if interval_list_a[i][1] < interval_list_b[j][1]:
            i += 1
            T.emit(10, "advance_i", f"i += 1 -> {i}", i=i, j=j, intersections=intersections)
        else:
            j += 1
            T.emit(11, "advance_j", f"j += 1 -> {j}", i=i, j=j, intersections=intersections)

    T.emit(4, "loop_end", "Reached the end of one of the lists; stop",
           i=i, j=j, intersections=intersections)

    T.emit(12, "return", f"return intersections -> {intersections}",
           i=i, j=j, intersections=intersections, result=intersections)
    return intersections


SCENARIOS = {
    "example1": {
        "label": "[[1,4],[5,6],[9,15]] ∩ [[2,4],[5,7],[9,15]]",
        "a": [[1, 4], [5, 6], [9, 15]], "b": [[2, 4], [5, 7], [9, 15]],
    },
    "example2": {
        "label": "[[3,6],[8,16],[17,25]] ∩ [[2,3],[10,15],[18,23]]",
        "a": [[3, 6], [8, 16], [17, 25]], "b": [[2, 3], [10, 15], [18, 23]],
    },
    "example3": {
        "label": "[[4,7],[9,16],[17,28],[39,50],[55,66],[70,89]] ∩ [[3,6],[7,8],[9,10],[14,19],[23,33],[35,40],[45,59],[60,64],[68,76]]",
        "a": [[4, 7], [9, 16], [17, 28], [39, 50], [55, 66], [70, 89]],
        "b": [[3, 6], [7, 8], [9, 10], [14, 19], [23, 33], [35, 40], [45, 59], [60, 64], [68, 76]],
    },
}
DEFAULT_SCENARIO = "example1"


def run(scenario: Optional[str] = None):
    scenario = scenario if scenario in SCENARIOS else DEFAULT_SCENARIO
    cfg = SCENARIOS[scenario]
    T = Tracer()
    result = intervals_intersection(cfg["a"], cfg["b"], T)
    return {
        "kind": "intervals", "list_a": cfg["a"], "list_b": cfg["b"],
        "result": result, "events": T.events, "scenario": scenario,
    }


PROBLEM = {
    "slug": "interval-list-intersections",
    "title": "Interval List Intersections",
    "category": "Intervals",
    "description": (
        "Given two lists of closed intervals, interval_list_a and interval_list_b, return "
        "the intersection of the two interval lists.\n\n"
        "Each interval in the lists has its own start and end time and is represented as "
        "[start, end]. The intersection of two closed intervals i and j is either an empty "
        "set, if they do not overlap, or a closed interval [max(start_i, start_j), "
        "min(end_i, end_j)] if they do overlap. Each list of intervals is pairwise disjoint "
        "and in sorted order.\n\n"
        "Example:\n"
        "Input: interval_list_a = [[1,4],[5,6],[9,15]], "
        "interval_list_b = [[2,4],[5,7],[9,15]]\n"
        "Output: [[2,4],[5,6],[9,15]]\n\n"
        "This implementation is a two-pointer merge over both sorted lists: pointers i and "
        "j each point at the current interval of their own list, and on every step it "
        "computes the overlap of interval_list_a[i] and interval_list_b[j] as "
        "[max(starts), min(ends)] — a valid intersection only when that start is not past "
        "that end. Whichever of the two current intervals ends earlier can't possibly "
        "overlap anything further along in the other list, so its pointer is the one that "
        "advances. It runs in O(n + m) time, where n and m are the two list lengths, with "
        "O(1) extra space besides the output."
    ),
    "scenarios": [{"id": key, "label": cfg["label"]} for key, cfg in SCENARIOS.items()],
    "run": run,
}
