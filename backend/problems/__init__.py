from . import permutations
from . import prerequisites

# Sidebar category order. A category stays in the list (shown empty) even
# before any problem is registered under it, so the frontend can render it
# as a "coming soon" placeholder.
CATEGORY_ORDER = ["Two Pointers", "Sliding Window", "Backtracking", "Graphs", "Heaps"]

# Register new problems here as they're added.
PROBLEMS = [permutations.PROBLEM, prerequisites.PROBLEM]


def get_problem(slug: str):
    return next((p for p in PROBLEMS if p["slug"] == slug), None)
