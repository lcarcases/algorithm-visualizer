import heapq
from copy import deepcopy
from typing import List


class Tracer:
    def __init__(self):
        self.events = []

    def emit(self, line, action, message="", idx=None, min_heap=None, max_heap=None,
             available_capital=None, consumed=None, k_total=None, k_done=None, result=None):
        self.events.append({
            "line": line, "action": action, "message": message, "idx": idx,
            "min_heap": [c for c, p, i in min_heap] if min_heap is not None else None,
            "max_heap": [-p for p, i in max_heap] if max_heap is not None else None,
            "available_capital": available_capital,
            "consumed": deepcopy(consumed) if consumed is not None else None,
            "k_total": k_total, "k_done": k_done, "result": result,
        })


def find_max_capital(k: int, capital: List[int], profits: List[int], w: int, T: Tracer) -> int:
    n = len(capital)
    min_capital_heap = []
    T.emit(1, "init", "min_capital_heap = []", min_heap=min_capital_heap)

    for i in range(n):
        T.emit(2, "loop_build", f"Push capital[{i}]={capital[i]} into min_capital_heap",
               idx=i, min_heap=min_capital_heap)
        heapq.heappush(min_capital_heap, (capital[i], profits[i], i))
        T.emit(3, "push_capital", f"heapq.heappush(min_capital_heap, ({capital[i]}, idx={i}))",
               idx=i, min_heap=min_capital_heap)

    max_profit_heap = []
    T.emit(4, "init_max", "max_profit_heap = []", min_heap=min_capital_heap, max_heap=max_profit_heap)

    available_capital = w
    T.emit(5, "init_capital", f"available_capital = {w}", min_heap=min_capital_heap,
           max_heap=max_profit_heap, available_capital=available_capital, consumed=[])

    consumed = []
    for sel in range(k):
        T.emit(6, "loop_select", f"Select project {sel + 1} of {k}", min_heap=min_capital_heap,
               max_heap=max_profit_heap, available_capital=available_capital, consumed=consumed,
               k_total=k, k_done=sel)

        while min_capital_heap and min_capital_heap[0][0] <= available_capital:
            T.emit(7, "check_afford",
                   f"Check min_capital_heap top capital={min_capital_heap[0][0]} <= "
                   f"available_capital={available_capital}",
                   min_heap=min_capital_heap, max_heap=max_profit_heap,
                   available_capital=available_capital, consumed=consumed, k_total=k, k_done=sel)
            c, p, i = heapq.heappop(min_capital_heap)
            consumed = consumed + [i]
            T.emit(8, "pop_capital", f"Pop capital={c} (project idx={i})",
                   idx=i, min_heap=min_capital_heap, max_heap=max_profit_heap,
                   available_capital=available_capital, consumed=consumed, k_total=k, k_done=sel)
            heapq.heappush(max_profit_heap, (-p, i))
            T.emit(9, "push_profit", f"heapq.heappush(max_profit_heap, -{p})",
                   idx=i, min_heap=min_capital_heap, max_heap=max_profit_heap,
                   available_capital=available_capital, consumed=consumed, k_total=k, k_done=sel)

        T.emit(7, "check_afford_fail",
               f"min_capital_heap is empty or its top capital > available_capital={available_capital}; "
               "stop popping",
               min_heap=min_capital_heap, max_heap=max_profit_heap,
               available_capital=available_capital, consumed=consumed, k_total=k, k_done=sel)

        if not max_profit_heap:
            T.emit(10, "no_options", "max_profit_heap is empty; break",
                   min_heap=min_capital_heap, max_heap=max_profit_heap,
                   available_capital=available_capital, consumed=consumed, k_total=k, k_done=sel)
            break

        neg_p, i = heapq.heappop(max_profit_heap)
        T.emit(11, "pop_profit", f"Pop best profit={-neg_p} (project idx={i}) from max_profit_heap",
               idx=i, min_heap=min_capital_heap, max_heap=max_profit_heap,
               available_capital=available_capital, consumed=consumed, k_total=k, k_done=sel)

        available_capital += -neg_p
        T.emit(12, "add_capital", f"available_capital += {-neg_p} -> {available_capital}",
               idx=i, min_heap=min_capital_heap, max_heap=max_profit_heap,
               available_capital=available_capital, consumed=consumed, k_total=k, k_done=sel + 1)

    T.emit(13, "return", f"return available_capital ({available_capital})",
           min_heap=min_capital_heap, max_heap=max_profit_heap,
           available_capital=available_capital, consumed=consumed, k_total=k, k_done=k,
           result=available_capital)
    return available_capital


SCENARIOS = {
    "example": {
        "label": "capital=[1,2,2,3], profits=[2,4,6,8], k=2, w=1",
        "capital": [1, 2, 2, 3], "profits": [2, 4, 6, 8], "k": 2, "w": 1,
    },
    "larger": {
        "label": "capital=[1,2,3], profits=[1,2,3], k=1, w=2",
        "capital": [1, 2, 3], "profits": [1, 2, 3], "k": 1, "w": 2,
    },
}
DEFAULT_SCENARIO = "example"


def run(scenario=None):
    scenario = scenario if scenario in SCENARIOS else DEFAULT_SCENARIO
    cfg = SCENARIOS[scenario]
    T = Tracer()
    result = find_max_capital(cfg["k"], cfg["capital"], cfg["profits"], cfg["w"], T)
    return {
        "kind": "ipo", "capital": cfg["capital"], "profits": cfg["profits"], "k": cfg["k"],
        "w": cfg["w"], "result": result, "events": T.events, "scenario": scenario,
    }


PROBLEM = {
    "slug": "ipo",
    "title": "IPO",
    "category": "Heaps",
    "description": (
        "An investor is looking to maximize their capital by undertaking a set of "
        "profitable projects. Due to limited time and resources, they can complete at "
        "most k distinct projects.\n\n"
        "There are n available projects. Each project i has a profit of profits[i] "
        "earned upon completion, and a minimum capital requirement of capital[i] needed "
        "to start the project. The investor starts with an initial capital of w. After "
        "completing a project, its profit is immediately added to the investor's current "
        "capital.\n\n"
        "The goal is to choose up to k different projects in a way that maximizes the "
        "investor's final capital. Return the maximum capital achievable after completing "
        "these projects. It is guaranteed that the answer fits within a 32-bit signed "
        "integer.\n\n"
        "Example:\n"
        "Input: capital = [1, 2, 2, 3], profits = [2, 4, 6, 8], k = 2, w = 1\n"
        "Output: 11\n\n"
        "This implementation uses a two-heap approach: every project's capital "
        "requirement is pushed into a min-heap, so the cheapest project to start is "
        "always on top. For each of the k projects to pick, every currently affordable "
        "project (its min-heap top capital <= current available capital) is popped out of "
        "the min-heap and its profit is pushed into a max-heap. Once nothing affordable "
        "is left, the most profitable of those affordable projects is popped from the "
        "max-heap and its profit is added to the available capital, growing it for the "
        "next round. It runs in O(n log n + k log n) time."
    ),
    "scenarios": [{"id": key, "label": cfg["label"]} for key, cfg in SCENARIOS.items()],
    "run": run,
}
