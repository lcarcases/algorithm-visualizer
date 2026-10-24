import math


class Tracer:
    def __init__(self):
        self.events = []

    def emit(self, line, action, n, reversed_n, digit, res, message=""):
        self.events.append({
            "line": line, "action": action,
            "n": n, "reversed_n": reversed_n, "digit": digit,
            "res": res, "message": message,
        })


def reverse_32_bit_integer(n: int, T: Tracer) -> int:
    INT_MAX = 2 ** 31 - 1
    T.emit(1, "statement", n, None, None, None, f"INT_MAX = 2**31 - 1 = {INT_MAX}")
    INT_MIN = -2 ** 31
    T.emit(2, "statement", n, None, None, None, f"INT_MIN = -2**31 = {INT_MIN}")
    reversed_n = 0
    T.emit(3, "statement", n, reversed_n, None, None, "reversed_n = 0")

    while n != 0:
        T.emit(4, "loop", n, reversed_n, None, None, f"Check n={n} != 0")
        digit = int(math.fmod(n, 10))
        T.emit(5, "extract", n, reversed_n, digit, None,
               f"digit = int(math.fmod({n}, 10)) = {digit}")
        n = int(n / 10)
        T.emit(6, "statement", n, reversed_n, digit, None, f"n = int(n / 10) -> {n}")
        T.emit(7, "condition", n, reversed_n, digit, None,
               f"Check reversed_n={reversed_n} > INT_MAX//10 or reversed_n < INT_MIN//10")
        if reversed_n > int(INT_MAX / 10) or reversed_n < int(INT_MIN / 10):
            T.emit(8, "overflow", n, reversed_n, digit, 0, "Overflow/underflow detected; return 0")
            return 0
        reversed_n = reversed_n * 10 + digit
        T.emit(9, "append", n, reversed_n, digit, None,
               f"reversed_n = reversed_n * 10 + digit = {reversed_n}")

    T.emit(10, "return", n, reversed_n, None, reversed_n, f"return reversed_n ({reversed_n})")
    return reversed_n


def run(scenario=None):
    T = Tracer()
    n = -15
    result = reverse_32_bit_integer(n, T)
    return {"kind": "reverse_int", "n": n, "result": result, "events": T.events}


PROBLEM = {
    "slug": "reverse-32-bit-integer",
    "title": "Reverse 32-Bit Integer",
    "category": "Math and Geometry",
    "description": (
        "Reverse the digits of a signed 32-bit integer. If the reversed integer overflows "
        "(i.e., is outside the range [-2^31, 2^31 - 1]), return 0. Assume the environment "
        "only allows you to store integers within the signed 32-bit integer range.\n\n"
        "Example:\n"
        "Input: n = -15\n"
        "Output: -51\n\n"
        "This implementation builds the reversed number one digit at a time: each "
        "iteration extracts n's last digit with the modulus operator, removes it from n "
        "with integer division, and appends it to reversed_n (reversed_n * 10 + digit). "
        "Before appending, it checks whether reversed_n is already past INT_MAX // 10 or "
        "INT_MIN // 10 — if so, one more digit would overflow a 32-bit integer, so it "
        "returns 0 immediately instead of letting the overflow happen."
    ),
    "run": run,
}
