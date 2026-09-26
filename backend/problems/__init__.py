from . import permutations
from . import prerequisites
from . import subsets
from . import n_queens
from . import climbing_stairs
from . import min_coin_combination
from . import matrix_pathways
from . import neighborhood_burglary
from . import longest_common_subsequence
from . import maximum_subarray_sum
from . import knapsack

# Sidebar category order. A category stays in the list (shown empty) even
# before any problem is registered under it, so the frontend can render it
# as a "coming soon" placeholder.
CATEGORY_ORDER = ["Two Pointers", "Sliding Window", "Backtracking", "Graphs", "Heaps",
                   "Dynamic Programming"]

# Register new problems here as they're added.
PROBLEMS = [permutations.PROBLEM, subsets.PROBLEM, n_queens.PROBLEM, prerequisites.PROBLEM,
            climbing_stairs.PROBLEM, min_coin_combination.PROBLEM, matrix_pathways.PROBLEM,
            neighborhood_burglary.PROBLEM, longest_common_subsequence.PROBLEM,
            maximum_subarray_sum.PROBLEM, knapsack.PROBLEM]


def get_problem(slug: str):
    return next((p for p in PROBLEMS if p["slug"] == slug), None)
