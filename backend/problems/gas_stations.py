from typing import List


class Tracer:
    def __init__(self):
        self.events = []

    def emit(self, line, action, i, tank, start, res, message=""):
        self.events.append({
            "line": line, "action": action,
            "i": i, "tank": tank, "start": start,
            "res": res, "message": message,
        })


def gas_stations(gas: List[int], cost: List[int], T: Tracer) -> int:
    total_gas, total_cost = sum(gas), sum(cost)
    T.emit(1, "condition", None, None, None, None,
           f"Check if sum(gas)={total_gas} < sum(cost)={total_cost}")
    if total_gas < total_cost:
        T.emit(2, "return", None, None, None, -1, "Impossible; return -1")
        return -1

    start = tank = 0
    T.emit(3, "statement", None, tank, start, None, "start = tank = 0")

    for i in range(len(gas)):
        T.emit(4, "loop", i, tank, start, None, f"for i in range(len(gas)) -> i = {i}")
        tank += gas[i] - cost[i]
        T.emit(5, "add", i, tank, start, None,
               f"tank += gas[{i}]-cost[{i}] = {gas[i]}-{cost[i]} -> tank={tank}")
        T.emit(6, "condition", i, tank, start, None, f"Check if tank={tank} < 0")
        if tank < 0:
            start, tank = i + 1, 0
            T.emit(7, "reset", i, tank, start, None, f"Reset: start={start}, tank=0")

    T.emit(8, "return", None, tank, start, start, f"return start ({start})")
    return start


def run(scenario=None):
    T = Tracer()
    gas = [3, 2, 1, 3, 3, 2, 3, 4]
    cost = [2, 1, 4, 1, 2, 6, 0, 3]
    result = gas_stations(gas, cost, T)
    return {"kind": "gas", "gas": gas, "cost": cost, "result": result, "events": T.events}


PROBLEM = {
    "slug": "gas-stations",
    "title": "Gas Stations",
    "category": "Greedy",
    "description": (
        "There's a circular route which contains gas stations. At each station, you can "
        "fill your car with a certain amount of gas, and moving from that station to the "
        "next one consumes some fuel.\n\n"
        "Find the index of the gas station you would need to start at, in order to "
        "complete the circuit without running out of gas. Assume your car starts with an "
        "empty tank. If it's not possible to complete the circuit, return -1. If it's "
        "possible, assume only one solution exists.\n\n"
        "Example:\n"
        "Input: gas = [3, 2, 1, 3, 3, 2, 3, 4], cost = [2, 1, 4, 1, 2, 6, 0, 3]\n"
        "Output: 6\n\n"
        "This implementation solves it greedily in one left-to-right pass: it tracks a "
        "running tank total (gas[i] - cost[i] at each station), and if the tank ever goes "
        "negative, none of the stations tried so far could have been a valid start, so it "
        "resets the tank to 0 and tries the very next station as the new candidate start."
    ),
    "run": run,
}
