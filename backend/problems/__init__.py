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
from . import jump_to_the_end
from . import gas_stations
from . import candies
from . import sort_linked_list
from . import sort_array
from . import kth_largest_integer
from . import kth_largest_integer_quickselect
from . import spiral_matrix
from . import reverse_32_bit_integer

# Sidebar category order. A category stays in the list (shown empty) even
# before any problem is registered under it, so the frontend can render it
# as a "coming soon" placeholder.
CATEGORY_ORDER = ["Two Pointers", "Sliding Window", "Backtracking", "Graphs", "Heaps",
                   "Dynamic Programming", "Greedy", "Sort and Search", "Math and Geometry"]

# Register new problems here as they're added.
PROBLEMS = [permutations.PROBLEM, subsets.PROBLEM, n_queens.PROBLEM, prerequisites.PROBLEM,
            climbing_stairs.PROBLEM, min_coin_combination.PROBLEM, matrix_pathways.PROBLEM,
            neighborhood_burglary.PROBLEM, longest_common_subsequence.PROBLEM,
            maximum_subarray_sum.PROBLEM, knapsack.PROBLEM, jump_to_the_end.PROBLEM,
            gas_stations.PROBLEM, candies.PROBLEM, sort_linked_list.PROBLEM, sort_array.PROBLEM,
            kth_largest_integer.PROBLEM, kth_largest_integer_quickselect.PROBLEM,
            spiral_matrix.PROBLEM, reverse_32_bit_integer.PROBLEM]


def get_problem(slug: str):
    return next((p for p in PROBLEMS if p["slug"] == slug), None)
