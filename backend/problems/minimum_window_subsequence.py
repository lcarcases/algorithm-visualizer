INF = float("inf")


class Tracer:
    def __init__(self):
        self.events = []

    def emit(self, line, action, message="", index_s1=None, index_s2=None,
             start=None, end=None, length=None, min_subsequence=None, result=None):
        self.events.append({
            "line": line, "action": action, "message": message,
            "index_s1": index_s1, "index_s2": index_s2,
            "start": start, "end": end,
            "length": length, "min_subsequence": min_subsequence,
            "result": result,
        })


def min_window(s1: str, s2: str, T: Tracer) -> str:
    size1, size2 = len(s1), len(s2)
    T.emit(1, "enter", f"ENTER min_window({s1!r}, {s2!r})")

    length = INF
    T.emit(2, "init_length", "length = infinity", length=None, min_subsequence="")

    min_subsequence = ""
    T.emit(3, "init_result", 'min_subsequence = ""', length=None, min_subsequence="")

    index_s1 = index_s2 = 0
    T.emit(4, "init_index", "index_s1 = index_s2 = 0", index_s1=0, index_s2=0,
           length=None, min_subsequence="")

    while index_s1 < size1:
        T.emit(5, "loop", f"Check index_s1={index_s1} < len(s1)={size1}",
               index_s1=index_s1, index_s2=index_s2,
               length=None if length == INF else length, min_subsequence=min_subsequence)

        T.emit(6, "compare",
               f"Compare s1[{index_s1}]='{s1[index_s1]}' with s2[{index_s2}]='{s2[index_s2]}'",
               index_s1=index_s1, index_s2=index_s2,
               length=None if length == INF else length, min_subsequence=min_subsequence)

        if s1[index_s1] == s2[index_s2]:
            index_s2 += 1
            T.emit(7, "match", f"Matched; index_s2 += 1 -> {index_s2}",
                   index_s1=index_s1, index_s2=index_s2,
                   length=None if length == INF else length, min_subsequence=min_subsequence)

            T.emit(8, "found_check", f"Check index_s2={index_s2} == len(s2)={size2}",
                   index_s1=index_s1, index_s2=index_s2,
                   length=None if length == INF else length, min_subsequence=min_subsequence)

            if index_s2 == size2:
                start = end = index_s1
                index_s2 -= 1
                T.emit(9, "found",
                       f"s2 fully matched here; start = end = index_s1 ({index_s1}); "
                       f"index_s2 -= 1 -> {index_s2}",
                       index_s1=index_s1, index_s2=index_s2, start=start, end=end,
                       length=None if length == INF else length, min_subsequence=min_subsequence)

                while index_s2 >= 0:
                    T.emit(10, "back_loop", f"Check index_s2={index_s2} >= 0",
                           index_s1=index_s1, index_s2=index_s2, start=start, end=end,
                           length=None if length == INF else length, min_subsequence=min_subsequence)

                    T.emit(11, "back_compare",
                           f"Compare s1[{start}]='{s1[start]}' with s2[{index_s2}]='{s2[index_s2]}'",
                           index_s1=index_s1, index_s2=index_s2, start=start, end=end,
                           length=None if length == INF else length, min_subsequence=min_subsequence)

                    if s1[start] == s2[index_s2]:
                        index_s2 -= 1
                        T.emit(12, "back_match", f"Matched; index_s2 -= 1 -> {index_s2}",
                               index_s1=index_s1, index_s2=index_s2, start=start, end=end,
                               length=None if length == INF else length, min_subsequence=min_subsequence)

                    start -= 1
                    T.emit(13, "back_advance", f"start -= 1 -> {start}",
                           index_s1=index_s1, index_s2=index_s2, start=start, end=end,
                           length=None if length == INF else length, min_subsequence=min_subsequence)

                T.emit(10, "back_loop_end", "index_s2 < 0; backward scan complete",
                       index_s1=index_s1, index_s2=index_s2, start=start, end=end,
                       length=None if length == INF else length, min_subsequence=min_subsequence)

                start += 1
                T.emit(14, "back_done", f"start += 1 -> {start}",
                       index_s1=index_s1, index_s2=index_s2, start=start, end=end,
                       length=None if length == INF else length, min_subsequence=min_subsequence)

                T.emit(15, "update_check",
                       f"Check (end-start+1)={end - start + 1} < length="
                       f"{'infinity' if length == INF else length}",
                       index_s1=index_s1, index_s2=index_s2, start=start, end=end,
                       length=None if length == INF else length, min_subsequence=min_subsequence)

                if (end - start + 1) < length:
                    length = end - start + 1
                    T.emit(16, "update", f"New best length -> {length}",
                           index_s1=index_s1, index_s2=index_s2, start=start, end=end,
                           length=length, min_subsequence=min_subsequence)

                    min_subsequence = s1[start:end + 1]
                    T.emit(17, "update", f"min_subsequence -> '{min_subsequence}'",
                           index_s1=index_s1, index_s2=index_s2, start=start, end=end,
                           length=length, min_subsequence=min_subsequence)

                index_s1 = start
                index_s2 = 0
                T.emit(18, "resume", f"index_s1 = start ({start}); index_s2 = 0",
                       index_s1=index_s1, index_s2=index_s2, start=start, end=end,
                       length=None if length == INF else length, min_subsequence=min_subsequence)

        index_s1 += 1
        T.emit(19, "advance", f"index_s1 += 1 -> {index_s1}",
               index_s1=index_s1, index_s2=index_s2,
               length=None if length == INF else length, min_subsequence=min_subsequence)

    T.emit(5, "loop_end", f"index_s1={index_s1} reached len(s1)={size1}; stop",
           index_s1=index_s1, index_s2=index_s2,
           length=None if length == INF else length, min_subsequence=min_subsequence)

    T.emit(20, "return", f"return min_subsequence -> '{min_subsequence}'",
           index_s1=index_s1, index_s2=index_s2,
           length=None if length == INF else length, min_subsequence=min_subsequence,
           result=min_subsequence)
    return min_subsequence


def run(scenario=None):
    T = Tracer()
    s1, s2 = "azssstaszaztf", "saz"
    result = min_window(s1, s2, T)
    return {
        "kind": "min_window_subseq", "s1": s1, "s2": s2,
        "result": result, "events": T.events,
    }


PROBLEM = {
    "slug": "minimum-window-subsequence",
    "title": "Minimum Window Subsequence",
    "category": "Sliding Window",
    "description": (
        "Given two strings, s1 and s2, find and return the shortest substring of s1 in "
        "which all the characters of s2 appear in the same order, but not necessarily "
        "next to each other (i.e., s2 should be a subsequence of the substring).\n\n"
        "If no such substring exists, return an empty string \"\". If there are multiple "
        "shortest substrings, return the one that appears first in s1 (i.e., with the "
        "left-most starting index).\n\n"
        "Example:\n"
        "Input: s1 = \"azssstaszaztf\", s2 = \"saz\"\n"
        "Output: \"szaz\"\n\n"
        "This implementation uses an expand-and-contract two-pointer scan: index_s1 "
        "sweeps forward through s1 while index_s2 tracks how much of s2 has been matched "
        "in order. Whenever index_s2 reaches the end of s2 (a full match of s2 has just "
        "been completed, ending at index_s1), a second pointer walks backward from that "
        "position matching s2 in reverse to find the tightest possible start of the "
        "window. Any window shorter than the current best replaces it, and the forward "
        "scan then resumes just past that tightened start rather than from index_s1 + 1, "
        "which avoids re-discovering a longer window containing the same shorter one. It "
        "runs in O(n * m) time, where n = len(s1) and m = len(s2), with O(1) extra space "
        "besides the result."
    ),
    "run": run,
}
