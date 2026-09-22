// Per-problem frontend source mirror + line->src-index map (see CLAUDE.md
// "Key coupling to watch"). Add an entry here whenever a new backend problem
// is registered in backend/problems/ so its source panel/highlighting works;
// problems without an entry still run, just without a source-code panel.
const PROBLEM_UI={
"find-all-permutations":{
 langs:{
  python:{
   src:[
"def find_all_permutations(nums: List[int]) -> List[List[int]]:",
"    res = []","    backtrack(nums, [], set(), res)","    return res","",
"def backtrack(nums: List[int], candidate: List[int], used: Set[int],",
"              res: List[List[int]]) -> None:",
"    if len(candidate) == len(nums):","        res.append(candidate[:])","        return","",
"    for num in nums:","        if num not in used:","            candidate.append(num)",
"            used.add(num)","            backtrack(nums, candidate, used, res)",
"            candidate.pop()","            used.remove(num)"
   ],
   map:{1:1,2:2,3:2,4:3,5:5,6:7,8:7,9:8,10:9,12:11,13:12,14:13,15:14,17:15,19:16,20:17}
  },
  javascript:{
   src:[
"function findAllPermutations(nums) {",
"  const res = [];","  backtrack(nums, [], new Set(), res);","  return res;","}","",
"function backtrack(nums, candidate, used, res) {",
"  if (candidate.length === nums.length) {","    res.push([...candidate]);","    return;","  }","",
"  for (const num of nums) {","    if (!used.has(num)) {","      candidate.push(num);",
"      used.add(num);","      backtrack(nums, candidate, used, res);",
"      candidate.pop();","      used.delete(num);","    }","  }","}"
   ],
   map:{1:1,2:2,3:2,4:3,5:6,6:7,8:7,9:8,10:9,12:12,13:13,14:14,15:15,17:16,19:17,20:18}
  },
  java:{
   src:[
"public static List<List<Integer>> findAllPermutations(int[] nums) {",
"    List<List<Integer>> res = new ArrayList<>();",
"    backtrack(nums, new ArrayList<>(), new HashSet<>(), res);","    return res;","}","",
"public static void backtrack(int[] nums, List<Integer> candidate, Set<Integer> used,",
"                              List<List<Integer>> res) {",
"    if (candidate.size() == nums.length) {","        res.add(new ArrayList<>(candidate));","        return;","    }","",
"    for (int num : nums) {","        if (!used.contains(num)) {","            candidate.add(num);",
"            used.add(num);","            backtrack(nums, candidate, used, res);",
"            candidate.remove(candidate.size() - 1);","            used.remove(num);","        }","    }","}"
   ],
   map:{1:1,2:2,3:2,4:3,5:6,6:8,8:8,9:9,10:10,12:13,13:14,14:15,15:16,17:17,19:18,20:19}
  },
  csharp:{
   src:[
"public static List<List<int>> FindAllPermutations(int[] nums) {",
"    var res = new List<List<int>>();",
"    Backtrack(nums, new List<int>(), new HashSet<int>(), res);","    return res;","}","",
"public static void Backtrack(int[] nums, List<int> candidate, HashSet<int> used,",
"                              List<List<int>> res) {",
"    if (candidate.Count == nums.Length) {","        res.Add(new List<int>(candidate));","        return;","    }","",
"    foreach (int num in nums) {","        if (!used.Contains(num)) {","            candidate.Add(num);",
"            used.Add(num);","            Backtrack(nums, candidate, used, res);",
"            candidate.RemoveAt(candidate.Count - 1);","            used.Remove(num);","        }","    }","}"
   ],
   map:{1:1,2:2,3:2,4:3,5:6,6:8,8:8,9:9,10:10,12:13,13:14,14:15,15:16,17:17,19:18,20:19}
  }
 }
},
"find-all-subsets":{
 langs:{
  python:{
   src:[
"def find_all_subsets(nums: List[int]) -> List[List[int]]:",
"    res = []","    backtrack(0, [], nums, res)","    return res","",
"def backtrack(i: int, curr_subset: List[int], nums: List[int],",
"              res: List[List[int]]) -> None:",
"    if i == len(nums):","        res.append(curr_subset[:])","        return","",
"    curr_subset.append(nums[i])","    backtrack(i + 1, curr_subset, nums, res)",
"    curr_subset.pop()","    backtrack(i + 1, curr_subset, nums, res)"
   ],
   map:{1:1,2:2,3:2,4:3,5:5,7:7,8:7,9:8,10:9,12:11,13:12,14:13,16:14}
  },
  javascript:{
   src:[
"function findAllSubsets(nums) {",
"  const res = [];","  backtrack(0, [], nums, res);","  return res;","}","",
"function backtrack(i, currSubset, nums, res) {",
"  if (i === nums.length) {","    res.push([...currSubset]);","    return;","  }","",
"  currSubset.push(nums[i]);","  backtrack(i + 1, currSubset, nums, res);",
"  currSubset.pop();","  backtrack(i + 1, currSubset, nums, res);","}"
   ],
   map:{1:1,2:2,3:2,4:3,5:6,7:7,8:7,9:8,10:9,12:11,13:12,14:13,16:14}
  },
  java:{
   src:[
"public static List<List<Integer>> findAllSubsets(int[] nums) {",
"    List<List<Integer>> res = new ArrayList<>();",
"    backtrack(0, new ArrayList<>(), nums, res);","    return res;","}","",
"public static void backtrack(int i, List<Integer> currSubset, int[] nums,",
"                              List<List<Integer>> res) {",
"    if (i == nums.length) {","        res.add(new ArrayList<>(currSubset));","        return;","    }","",
"    currSubset.add(nums[i]);","    backtrack(i + 1, currSubset, nums, res);",
"    currSubset.remove(currSubset.size() - 1);","    backtrack(i + 1, currSubset, nums, res);","}"
   ],
   map:{1:1,2:2,3:2,4:3,5:6,7:8,8:8,9:9,10:10,12:12,13:13,14:14,16:15}
  },
  csharp:{
   src:[
"public static List<List<int>> FindAllSubsets(int[] nums) {",
"    var res = new List<List<int>>();",
"    Backtrack(0, new List<int>(), nums, res);","    return res;","}","",
"public static void Backtrack(int i, List<int> currSubset, int[] nums,",
"                              List<List<int>> res) {",
"    if (i == nums.Length) {","        res.Add(new List<int>(currSubset));","        return;","    }","",
"    currSubset.Add(nums[i]);","    Backtrack(i + 1, currSubset, nums, res);",
"    currSubset.RemoveAt(currSubset.Count - 1);","    Backtrack(i + 1, currSubset, nums, res);","}"
   ],
   map:{1:1,2:2,3:2,4:3,5:6,7:8,8:8,9:9,10:10,12:12,13:13,14:14,16:15}
  }
 }
},
"n-queens":{
 langs:{
  python:{
   src:[
"def n_queens(n: int) -> int:",
"    res = 0","    dfs(0, set(), set(), set(), n)","    return res","",
"def dfs(r: int, diagonals_set: Set[int], anti_diagonals_set: Set[int],",
"        cols_set: Set[int], n: int) -> None:",
"    if r == n:","        res += 1","        return","",
"    for c in range(n):","        curr_diagonal = r - c","        curr_anti_diagonal = r + c",
"        if (c in cols_set or curr_diagonal in diagonals_set or",
"                curr_anti_diagonal in anti_diagonals_set):","            continue",
"        cols_set.add(c)","        diagonals_set.add(curr_diagonal)","        anti_diagonals_set.add(curr_anti_diagonal)",
"        dfs(r + 1, diagonals_set, anti_diagonals_set, cols_set, n)",
"        cols_set.remove(c)","        diagonals_set.remove(curr_diagonal)","        anti_diagonals_set.remove(curr_anti_diagonal)"
   ],
   map:{1:1,2:2,3:2,4:3,5:5,7:7,8:8,9:9,11:11,12:12,13:13,14:14,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23}
  },
  javascript:{
   src:[
"function nQueens(n) {",
"  const counter = { res: 0 };","  dfs(0, new Set(), new Set(), new Set(), n, counter);","  return counter.res;","}","",
"function dfs(r, diagonalsSet, antiDiagonalsSet, colsSet, n, counter) {",
"  if (r === n) {","    counter.res += 1;","    return;","  }","",
"  for (let c = 0; c < n; c++) {","    const currDiagonal = r - c;","    const currAntiDiagonal = r + c;",
"    if (colsSet.has(c) || diagonalsSet.has(currDiagonal) || antiDiagonalsSet.has(currAntiDiagonal)) {",
"      continue;","    }",
"    colsSet.add(c);","    diagonalsSet.add(currDiagonal);","    antiDiagonalsSet.add(currAntiDiagonal);",
"    dfs(r + 1, diagonalsSet, antiDiagonalsSet, colsSet, n, counter);",
"    colsSet.delete(c);","    diagonalsSet.delete(currDiagonal);","    antiDiagonalsSet.delete(currAntiDiagonal);",
"  }","}"
   ],
   map:{1:1,2:2,3:2,4:3,5:6,7:7,8:8,9:9,11:12,12:13,13:14,14:15,16:16,17:18,18:19,19:20,20:21,21:22,22:23,23:24}
  },
  java:{
   src:[
"public static int nQueens(int n) {",
"    int[] res = new int[1];","    dfs(0, new HashSet<>(), new HashSet<>(), new HashSet<>(), n, res);","    return res[0];","}","",
"public static void dfs(int r, Set<Integer> diagonalsSet, Set<Integer> antiDiagonalsSet,",
"                        Set<Integer> colsSet, int n, int[] res) {",
"    if (r == n) {","        res[0] += 1;","        return;","    }","",
"    for (int c = 0; c < n; c++) {","        int currDiagonal = r - c;","        int currAntiDiagonal = r + c;",
"        if (colsSet.contains(c) || diagonalsSet.contains(currDiagonal) || antiDiagonalsSet.contains(currAntiDiagonal)) {",
"            continue;","        }",
"        colsSet.add(c);","        diagonalsSet.add(currDiagonal);","        antiDiagonalsSet.add(currAntiDiagonal);",
"        dfs(r + 1, diagonalsSet, antiDiagonalsSet, colsSet, n, res);",
"        colsSet.remove(c);","        diagonalsSet.remove(currDiagonal);","        antiDiagonalsSet.remove(currAntiDiagonal);",
"    }","}"
   ],
   map:{1:1,2:2,3:2,4:3,5:6,7:8,8:9,9:10,11:13,12:14,13:15,14:16,16:17,17:19,18:20,19:21,20:22,21:23,22:24,23:25}
  },
  csharp:{
   src:[
"public static int NQueens(int n) {",
"    var res = new int[1];","    Dfs(0, new HashSet<int>(), new HashSet<int>(), new HashSet<int>(), n, res);","    return res[0];","}","",
"public static void Dfs(int r, HashSet<int> diagonalsSet, HashSet<int> antiDiagonalsSet,",
"                        HashSet<int> colsSet, int n, int[] res) {",
"    if (r == n) {","        res[0] += 1;","        return;","    }","",
"    for (int c = 0; c < n; c++) {","        int currDiagonal = r - c;","        int currAntiDiagonal = r + c;",
"        if (colsSet.Contains(c) || diagonalsSet.Contains(currDiagonal) || antiDiagonalsSet.Contains(currAntiDiagonal)) {",
"            continue;","        }",
"        colsSet.Add(c);","        diagonalsSet.Add(currDiagonal);","        antiDiagonalsSet.Add(currAntiDiagonal);",
"        Dfs(r + 1, diagonalsSet, antiDiagonalsSet, colsSet, n, res);",
"        colsSet.Remove(c);","        diagonalsSet.Remove(currDiagonal);","        antiDiagonalsSet.Remove(currAntiDiagonal);",
"    }","}"
   ],
   map:{1:1,2:2,3:2,4:3,5:6,7:8,8:9,9:10,11:13,12:14,13:15,14:16,16:17,17:19,18:20,19:21,20:22,21:23,22:24,23:25}
  }
 }
},
"longest-common-subsequence":{
 langs:{
  python:{
   src:[
"def longest_common_subsequence(s1: str, s2: str) -> int:",
"    # Base case: Set the last row and last column to 0 by",
"    # initializing the entire DP table with 0s.",
"    dp = [[0] * (len(s2) + 1) for _ in range(len(s1) + 1)]",
"    # Populate the DP table.",
"    for i in range(len(s1) - 1, -1, -1):",
"        for j in range(len(s2) - 1, -1, -1):",
"            # If the characters match, the length of the LCS at",
"            # 'dp[i][j]' is 1 + the LCS length of the remaining",
"            # substrings.",
"            if s1[i] == s2[j]:",
"                dp[i][j] = 1 + dp[i + 1][j + 1]",
"            # If the characters don't match, the LCS length at",
"            # 'dp[i][j]' can be found by either:",
"            # 1. Excluding the current character of s1.",
"            # 2. Excluding the current character of s2.",
"            else:",
"                dp[i][j] = max(dp[i + 1][j], dp[i][j + 1])",
"    return dp[0][0]"
   ],
   map:{1:3,2:5,3:6,4:10,5:11,6:17,7:18}
  },
  javascript:{
   src:[
"function longestCommonSubsequence(s1, s2) {",
"  // Base case: Set the last row and last column to 0 by",
"  // initializing the entire DP table with 0s.",
"  const dp = Array.from({ length: s1.length + 1 }, () => Array(s2.length + 1).fill(0));",
"  // Populate the DP table.",
"  for (let i = s1.length - 1; i >= 0; i--) {",
"    for (let j = s2.length - 1; j >= 0; j--) {",
"      // If the characters match, the length of the LCS at",
"      // dp[i][j] is 1 + the LCS length of the remaining",
"      // substrings.",
"      if (s1[i] === s2[j]) {",
"        dp[i][j] = 1 + dp[i + 1][j + 1];",
"      } else {",
"        // If the characters don't match, the LCS length at",
"        // dp[i][j] can be found by either:",
"        // 1. Excluding the current character of s1.",
"        // 2. Excluding the current character of s2.",
"        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);",
"      }","    }","  }",
"  return dp[0][0];","}"
   ],
   map:{1:3,2:5,3:6,4:10,5:11,6:17,7:21}
  },
  java:{
   src:[
"public static int longestCommonSubsequence(String s1, String s2) {",
"    // Base case: Set the last row and last column to 0 by",
"    // initializing the entire DP table with 0s.",
"    int[][] dp = new int[s1.length() + 1][s2.length() + 1];",
"    // Populate the DP table.",
"    for (int i = s1.length() - 1; i >= 0; i--) {",
"        for (int j = s2.length() - 1; j >= 0; j--) {",
"            // If the characters match, the length of the LCS at",
"            // dp[i][j] is 1 + the LCS length of the remaining",
"            // substrings.",
"            if (s1.charAt(i) == s2.charAt(j)) {",
"                dp[i][j] = 1 + dp[i + 1][j + 1];",
"            } else {",
"                // If the characters don't match, the LCS length at",
"                // dp[i][j] can be found by either:",
"                // 1. Excluding the current character of s1.",
"                // 2. Excluding the current character of s2.",
"                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);",
"            }","        }","    }",
"    return dp[0][0];","}"
   ],
   map:{1:3,2:5,3:6,4:10,5:11,6:17,7:21}
  },
  csharp:{
   src:[
"public static int LongestCommonSubsequence(string s1, string s2) {",
"    // Base case: Set the last row and last column to 0 by",
"    // initializing the entire DP table with 0s.",
"    var dp = new int[s1.Length + 1, s2.Length + 1];",
"    // Populate the DP table.",
"    for (int i = s1.Length - 1; i >= 0; i--) {",
"        for (int j = s2.Length - 1; j >= 0; j--) {",
"            // If the characters match, the length of the LCS at",
"            // dp[i, j] is 1 + the LCS length of the remaining",
"            // substrings.",
"            if (s1[i] == s2[j]) {",
"                dp[i, j] = 1 + dp[i + 1, j + 1];",
"            } else {",
"                // If the characters don't match, the LCS length at",
"                // dp[i, j] can be found by either:",
"                // 1. Excluding the current character of s1.",
"                // 2. Excluding the current character of s2.",
"                dp[i, j] = Math.Max(dp[i + 1, j], dp[i, j + 1]);",
"            }","        }","    }",
"    return dp[0, 0];","}"
   ],
   map:{1:3,2:5,3:6,4:10,5:11,6:17,7:21}
  }
 }
},
"neighborhood-burglary":{
 langs:{
  python:{
   src:[
"def neighborhood_burglary(houses: List[int]) -> int:",
"    if not houses:","        return 0",
"    if len(houses) == 1:","        return houses[0]",
"    dp = [0] * len(houses)",
"    dp[0] = houses[0]",
"    dp[1] = max(houses[0], houses[1])",
"    for i in range(2, len(houses)):",
"        dp[i] = max(dp[i - 1], houses[i] + dp[i - 2])",
"    return dp[len(houses) - 1]"
   ],
   map:{1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10}
  },
  javascript:{
   src:[
"function neighborhoodBurglary(houses) {",
"  if (houses.length === 0) {","    return 0;","  }",
"  if (houses.length === 1) {","    return houses[0];","  }",
"  const dp = new Array(houses.length).fill(0);",
"  dp[0] = houses[0];",
"  dp[1] = Math.max(houses[0], houses[1]);",
"  for (let i = 2; i < houses.length; i++) {",
"    dp[i] = Math.max(dp[i - 1], houses[i] + dp[i - 2]);",
"  }",
"  return dp[houses.length - 1];","}"
   ],
   map:{1:1,2:2,3:4,4:5,5:7,6:8,7:9,8:10,9:11,10:13}
  },
  java:{
   src:[
"public static int neighborhoodBurglary(int[] houses) {",
"    if (houses.length == 0) {","        return 0;","    }",
"    if (houses.length == 1) {","        return houses[0];","    }",
"    int[] dp = new int[houses.length];",
"    dp[0] = houses[0];",
"    dp[1] = Math.max(houses[0], houses[1]);",
"    for (int i = 2; i < houses.length; i++) {",
"        dp[i] = Math.max(dp[i - 1], houses[i] + dp[i - 2]);",
"    }",
"    return dp[houses.length - 1];","}"
   ],
   map:{1:1,2:2,3:4,4:5,5:7,6:8,7:9,8:10,9:11,10:13}
  },
  csharp:{
   src:[
"public static int NeighborhoodBurglary(int[] houses) {",
"    if (houses.Length == 0) {","        return 0;","    }",
"    if (houses.Length == 1) {","        return houses[0];","    }",
"    var dp = new int[houses.Length];",
"    dp[0] = houses[0];",
"    dp[1] = Math.Max(houses[0], houses[1]);",
"    for (int i = 2; i < houses.Length; i++) {",
"        dp[i] = Math.Max(dp[i - 1], houses[i] + dp[i - 2]);",
"    }",
"    return dp[houses.Length - 1];","}"
   ],
   map:{1:1,2:2,3:4,4:5,5:7,6:8,7:9,8:10,9:11,10:13}
  }
 }
},
"matrix-pathways":{
 langs:{
  python:{
   src:[
"def matrix_pathways(m: int, n: int) -> int:",
"    dp = [[1] * n for _ in range(m)]",
"    for r in range(1, m):",
"        for c in range(1, n):",
"            dp[r][c] = dp[r - 1][c] + dp[r][c - 1]",
"    return dp[m - 1][n - 1]"
   ],
   map:{1:1,2:2,3:3,4:4,5:5}
  },
  javascript:{
   src:[
"function matrixPathways(m, n) {",
"  const dp = Array.from({ length: m }, () => Array(n).fill(1));",
"  for (let r = 1; r < m; r++) {",
"    for (let c = 1; c < n; c++) {",
"      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];",
"    }","  }",
"  return dp[m - 1][n - 1];","}"
   ],
   map:{1:1,2:2,3:3,4:4,5:7}
  },
  java:{
   src:[
"public static int matrixPathways(int m, int n) {",
"    int[][] dp = new int[m][n];",
"    for (int[] row : dp) Arrays.fill(row, 1);",
"    for (int r = 1; r < m; r++) {",
"        for (int c = 1; c < n; c++) {",
"            dp[r][c] = dp[r - 1][c] + dp[r][c - 1];",
"        }","    }",
"    return dp[m - 1][n - 1];","}"
   ],
   map:{1:2,2:3,3:4,4:5,5:8}
  },
  csharp:{
   src:[
"public static int MatrixPathways(int m, int n) {",
"    var dp = new int[m, n];",
"    for (int c = 0; c < n; c++) dp[0, c] = 1;",
"    for (int r = 0; r < m; r++) dp[r, 0] = 1;",
"    for (int r = 1; r < m; r++) {",
"        for (int c = 1; c < n; c++) {",
"            dp[r, c] = dp[r - 1, c] + dp[r, c - 1];",
"        }","    }",
"    return dp[m - 1, n - 1];","}"
   ],
   map:{1:3,2:4,3:5,4:6,5:9}
  }
 }
},
"min-coin-combination":{
 langs:{
  python:{
   src:[
"def min_coin_combination_top_down(coins: List[int], target: int) -> int:",
"    res = top_down_dp(coins, target, {})",
"    return -1 if res == float('inf') else res","",
"def top_down_dp(coins: List[int], target: int,",
"                 memo: Dict[int, int]) -> int:",
"    if target == 0:","        return 0",
"    if target in memo:","        return memo[target]",
"    min_coins = float('inf')",
"    for coin in coins:",
"        if coin <= target:",
"            min_coins = min(min_coins,",
"                             1 + top_down_dp(coins, target - coin, memo))",
"    memo[target] = min_coins",
"    return memo[target]"
   ],
   map:{1:1,2:2,3:4,4:6,5:7,6:8,7:9,8:10,9:11,10:12,11:12,12:13,13:14,14:15,15:16}
  },
  javascript:{
   src:[
"function minCoinCombinationTopDown(coins, target) {",
"  const res = topDownDp(coins, target, {});",
"  return res === Infinity ? -1 : res;","}","",
"function topDownDp(coins, target, memo) {",
"  if (target === 0) {","    return 0;","  }",
"  if (target in memo) {","    return memo[target];","  }",
"  let minCoins = Infinity;",
"  for (const coin of coins) {",
"    if (coin <= target) {",
"      minCoins = Math.min(minCoins,",
"        1 + topDownDp(coins, target - coin, memo));","    }","  }",
"  memo[target] = minCoins;","  return memo[target];","}"
   ],
   map:{1:1,2:2,3:5,4:6,5:7,6:9,7:10,8:12,9:13,10:14,11:14,12:15,13:16,14:19,15:20}
  },
  java:{
   src:[
"public static int minCoinCombinationTopDown(int[] coins, int target) {",
"    int res = topDownDp(coins, target, new HashMap<>());",
"    return res == Integer.MAX_VALUE ? -1 : res;","}","",
"public static int topDownDp(int[] coins, int target, Map<Integer, Integer> memo) {",
"    if (target == 0) {","        return 0;","    }",
"    if (memo.containsKey(target)) {","        return memo.get(target);","    }",
"    int minCoins = Integer.MAX_VALUE;",
"    for (int coin : coins) {",
"        if (coin <= target) {",
"            minCoins = Math.min(minCoins,",
"                1 + topDownDp(coins, target - coin, memo));","        }","    }",
"    memo.put(target, minCoins);","    return memo.get(target);","}"
   ],
   map:{1:1,2:2,3:5,4:6,5:7,6:9,7:10,8:12,9:13,10:14,11:14,12:15,13:16,14:19,15:20}
  },
  csharp:{
   src:[
"public static int MinCoinCombinationTopDown(int[] coins, int target) {",
"    int res = TopDownDp(coins, target, new Dictionary<int, int>());",
"    return res == int.MaxValue ? -1 : res;","}","",
"public static int TopDownDp(int[] coins, int target, Dictionary<int, int> memo) {",
"    if (target == 0) {","        return 0;","    }",
"    if (memo.ContainsKey(target)) {","        return memo[target];","    }",
"    int minCoins = int.MaxValue;",
"    foreach (int coin in coins) {",
"        if (coin <= target) {",
"            minCoins = Math.Min(minCoins,",
"                1 + TopDownDp(coins, target - coin, memo));","        }","    }",
"    memo[target] = minCoins;","    return memo[target];","}"
   ],
   map:{1:1,2:2,3:5,4:6,5:7,6:9,7:10,8:12,9:13,10:14,11:14,12:15,13:16,14:19,15:20}
  }
 }
},
"climbing-stairs":{
 langs:{
  python:{
   src:[
"memo = {}","",
"def climbing_stairs_top_down(n: int) -> int:",
"    if n <= 2:","        return n",
"    if n in memo:","        return memo[n]",
"    memo[n] = (",
"        climbing_stairs_top_down(n - 1) +",
"        climbing_stairs_top_down(n - 2)",
"    )",
"    return memo[n]"
   ],
   map:{1:0,3:2,5:3,6:4,8:5,9:6,11:7,12:8,13:9,15:11}
  },
  javascript:{
   src:[
"const memo = {};","",
"function climbingStairsTopDown(n) {",
"  if (n <= 2) {","    return n;","  }",
"  if (n in memo) {","    return memo[n];","  }",
"  memo[n] = (",
"    climbingStairsTopDown(n - 1) +",
"    climbingStairsTopDown(n - 2)",
"  );",
"  return memo[n];","}"
   ],
   map:{1:0,3:2,5:3,6:4,8:6,9:7,11:9,12:10,13:11,15:13}
  },
  java:{
   src:[
"static Map<Integer, Integer> memo = new HashMap<>();","",
"public static int climbingStairsTopDown(int n) {",
"    if (n <= 2) {","        return n;","    }",
"    if (memo.containsKey(n)) {","        return memo.get(n);","    }",
"    int left = climbingStairsTopDown(n - 1);",
"    int right = climbingStairsTopDown(n - 2);",
"    memo.put(n, left + right);",
"    return memo.get(n);","}"
   ],
   map:{1:0,3:2,5:3,6:4,8:6,9:7,11:11,12:9,13:10,15:12}
  },
  csharp:{
   src:[
"static Dictionary<int, int> memo = new Dictionary<int, int>();","",
"public static int ClimbingStairsTopDown(int n) {",
"    if (n <= 2) {","        return n;","    }",
"    if (memo.ContainsKey(n)) {","        return memo[n];","    }",
"    int left = ClimbingStairsTopDown(n - 1);",
"    int right = ClimbingStairsTopDown(n - 2);",
"    memo[n] = left + right;",
"    return memo[n];","}"
   ],
   map:{1:0,3:2,5:3,6:4,8:6,9:7,11:11,12:9,13:10,15:12}
  }
 }
},
"prerequisites":{
 langs:{
  python:{
   src:[
"def prerequisites(n: int, prerequisites: List[List[int]]) -> bool:",
"    graph = defaultdict(list)","    in_degrees = [0] * n",
"    for prerequisite, course in prerequisites:",
"        graph[prerequisite].append(course)","        in_degrees[course] += 1",
"    queue = deque()",
"    for i in range(n):","        if in_degrees[i] == 0:","            queue.append(i)",
"    enrolled_courses = 0",
"    while queue:","        node = queue.popleft()","        enrolled_courses += 1",
"        for neighbor in graph[node]:","            in_degrees[neighbor] -= 1",
"            if in_degrees[neighbor] == 0:","                queue.append(neighbor)",
"    return enrolled_courses == n"
   ],
   map:{1:0,2:1,3:2,4:3,5:4,6:5,7:6,8:7,9:8,10:9,11:10,12:11,13:12,14:13,15:14,16:15,17:16,18:17,19:18}
  },
  javascript:{
   src:[
"function prerequisites(n, prerequisites) {",
"  const graph = new Map();","  const inDegrees = new Array(n).fill(0);",
"  for (const [prerequisite, course] of prerequisites) {",
"    if (!graph.has(prerequisite)) graph.set(prerequisite, []);",
"    graph.get(prerequisite).push(course);","    inDegrees[course] += 1;","  }",
"  const queue = [];",
"  for (let i = 0; i < n; i++) {","    if (inDegrees[i] === 0) {","      queue.push(i);","    }","  }",
"  let enrolledCourses = 0;",
"  while (queue.length) {","    const node = queue.shift();","    enrolledCourses += 1;",
"    for (const neighbor of graph.get(node) ?? []) {","      inDegrees[neighbor] -= 1;",
"      if (inDegrees[neighbor] === 0) {","        queue.push(neighbor);","      }","    }","  }",
"  return enrolledCourses === n;","}"
   ],
   map:{1:0,2:1,3:2,4:3,5:5,6:6,7:8,8:9,9:10,10:11,11:14,12:15,13:16,14:17,15:18,16:19,17:20,18:21,19:25}
  },
  java:{
   src:[
"public static boolean prerequisites(int n, int[][] prerequisites) {",
"    Map<Integer, List<Integer>> graph = new HashMap<>();","    int[] inDegrees = new int[n];",
"    for (int[] pair : prerequisites) {",
"        int prerequisite = pair[0], course = pair[1];",
"        graph.computeIfAbsent(prerequisite, k -> new ArrayList<>()).add(course);",
"        inDegrees[course] += 1;","    }",
"    Deque<Integer> queue = new ArrayDeque<>();",
"    for (int i = 0; i < n; i++) {","        if (inDegrees[i] == 0) {","            queue.add(i);","        }","    }",
"    int enrolledCourses = 0;",
"    while (!queue.isEmpty()) {","        int node = queue.poll();","        enrolledCourses += 1;",
"        for (int neighbor : graph.getOrDefault(node, List.of())) {","            inDegrees[neighbor] -= 1;",
"            if (inDegrees[neighbor] == 0) {","                queue.add(neighbor);","            }","        }","    }",
"    return enrolledCourses == n;","}"
   ],
   map:{1:0,2:1,3:2,4:3,5:5,6:6,7:8,8:9,9:10,10:11,11:14,12:15,13:16,14:17,15:18,16:19,17:20,18:21,19:25}
  },
  csharp:{
   src:[
"public static bool Prerequisites(int n, int[][] prerequisites) {",
"    var graph = new Dictionary<int, List<int>>();","    var inDegrees = new int[n];",
"    foreach (var pair in prerequisites) {",
"        int prerequisite = pair[0], course = pair[1];",
"        if (!graph.ContainsKey(prerequisite)) graph[prerequisite] = new List<int>();",
"        graph[prerequisite].Add(course);","        inDegrees[course] += 1;","    }",
"    var queue = new Queue<int>();",
"    for (int i = 0; i < n; i++) {","        if (inDegrees[i] == 0) {","            queue.Enqueue(i);","        }","    }",
"    int enrolledCourses = 0;",
"    while (queue.Count > 0) {","        int node = queue.Dequeue();","        enrolledCourses += 1;",
"        foreach (int neighbor in graph.GetValueOrDefault(node, new List<int>())) {","            inDegrees[neighbor] -= 1;",
"            if (inDegrees[neighbor] == 0) {","                queue.Enqueue(neighbor);","            }","        }","    }",
"    return enrolledCourses == n;","}"
   ],
   map:{1:0,2:1,3:2,4:3,5:6,6:7,7:9,8:10,9:11,10:12,11:15,12:16,13:17,14:18,15:19,16:20,17:21,18:22,19:26}
  }
 }
}
};
let events=[],i=0,playing=false,timer,nums=[1,2,3],nodes=new Map(),currentMap={},currentSlug=null,currentLang="python",kind="tree",gN=0,gEdges=[],queensSolved=new Set(),memoResolved=new Set(),memoHitNodes=new Set(),gridFinalized=new Set();
function esc(s){return s.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]))}
function el(n,a={}){let x=document.createElementNS("http://www.w3.org/2000/svg",n);for(let[k,v]of Object.entries(a))x.setAttribute(k,v);return x}
function renderSource(slug){
 currentSlug=slug;
 let ui=PROBLEM_UI[slug],variant=ui?.langs?.[currentLang];
 langSelect.disabled=!ui;
 currentMap=variant?variant.map:{};
 let src=variant?variant.src:["# No source preview available for this problem yet."];
 code.innerHTML=src.map((x,idx)=>`<span class="line" data-n="${idx+1}" data-i="${idx}">${esc(x)}</span>`).join("");
 if(i>0)highlightLine(events[i-1].line);
}
function highlightLine(line){
 document.querySelectorAll(".line").forEach(x=>x.classList.remove("active"));
 document.querySelector(`.line[data-i="${currentMap[line]}"]`)?.classList.add("active");
}
function build(){
 svg.innerHTML="";nodes.clear();let levels=[];
 function add(id,path,parent=null){let d=path.length;(levels[d]??=[]).push({id,path,parent});nodes.set(id,{id,path,parent,d});if(d<nums.length)for(let n of nums)if(!path.includes(n))add(id+"-"+n,[...path,n],id)}
 add("root",[]);let pos=new Map(),H=530;
 levels.forEach((lv,d)=>lv.forEach((n,k)=>pos.set(n.id,{x:1000*(k+1)/(lv.length+1),y:35+d*H/nums.length})));
 for(let n of nodes.values())if(n.parent){let a=pos.get(n.parent),b=pos.get(n.id);svg.appendChild(el("line",{x1:a.x,y1:a.y,x2:b.x,y2:b.y,class:"edge","data-to":n.id}))}
 for(let n of nodes.values()){let p=pos.get(n.id),g=el("g",{class:"node","data-id":n.id});g.append(el("circle",{cx:p.x,cy:p.y,r:24}));let t=el("text",{x:p.x,y:p.y});t.textContent="["+n.path.join(", ")+"]";g.append(t);svg.append(g)}
}
function buildSubsetTree(){
 svg.innerHTML="";nodes.clear();let levels=[];
 function add(id,path,d,parent=null){(levels[d]??=[]).push({id,path,parent});nodes.set(id,{id,path,parent,d});if(d<nums.length){add(id+"-1",[...path,nums[d]],d+1,id);add(id+"-0",[...path],d+1,id)}}
 add("root",[],0);let pos=new Map(),H=530;
 levels.forEach((lv,d)=>lv.forEach((n,k)=>pos.set(n.id,{x:1000*(k+1)/(lv.length+1),y:35+d*H/nums.length})));
 for(let n of nodes.values())if(n.parent){let a=pos.get(n.parent),b=pos.get(n.id);svg.appendChild(el("line",{x1:a.x,y1:a.y,x2:b.x,y2:b.y,class:"edge","data-to":n.id}))}
 for(let n of nodes.values()){let p=pos.get(n.id),g=el("g",{class:"node","data-id":n.id});g.append(el("circle",{cx:p.x,cy:p.y,r:24}));let t=el("text",{x:p.x,y:p.y});t.textContent="["+n.path.join(", ")+"]";g.append(t);svg.append(g)}
}
function buildQueensTree(evs){
 svg.innerHTML="";nodes.clear();let pruned=new Set();
 for(const e of evs){
  if(!e.node_id)continue;
  if(!nodes.has(e.node_id)){
   let path=e.node_id==="root"?[]:e.node_id.split("-").slice(1).map(Number);
   let parent=e.node_id==="root"?null:e.node_id.slice(0,e.node_id.lastIndexOf("-"));
   nodes.set(e.node_id,{id:e.node_id,path,parent,d:path.length});
  }
  if(e.action==="pruned")pruned.add(e.node_id);
 }
 let levels=[];
 for(const n of nodes.values())(levels[n.d]??=[]).push(n);
 let pos=new Map(),H=530,maxD=Math.max(levels.length-1,1);
 levels.forEach((lv,d)=>lv&&lv.forEach((n,k)=>pos.set(n.id,{x:1000*(k+1)/(lv.length+1),y:35+d*H/maxD})));
 for(const n of nodes.values())if(n.parent){let a=pos.get(n.parent),b=pos.get(n.id);svg.appendChild(el("line",{x1:a.x,y1:a.y,x2:b.x,y2:b.y,class:"edge","data-to":n.id}))}
 for(const n of nodes.values()){
  let p=pos.get(n.id),isPruned=pruned.has(n.id);
  let g=el("g",{class:"node"+(isPruned?" pruned":""),"data-id":n.id});
  g.append(el("circle",{cx:p.x,cy:p.y,r:isPruned?14:24}));
  let t=el("text",{x:p.x,y:p.y});t.textContent=isPruned?"✕":"["+n.path.join(",")+"]";
  g.append(t);svg.append(g);
 }
}
function buildClimbingTree(n){
 svg.innerHTML="";nodes.clear();let levels=[];
 function add(id,val,depth,parent){(levels[depth]??=[]).push({id});nodes.set(id,{id,val,parent,d:depth});if(val>2){add(id+"-0",val-1,depth+1,id);add(id+"-1",val-2,depth+1,id)}}
 add("root",n,0,null);
 let pos=new Map(),H=530,maxD=Math.max(levels.length-1,1);
 levels.forEach((lv,d)=>lv&&lv.forEach((nd,k)=>pos.set(nd.id,{x:1000*(k+1)/(lv.length+1),y:35+d*H/maxD})));
 for(const nd of nodes.values())if(nd.parent){let a=pos.get(nd.parent),b=pos.get(nd.id);svg.appendChild(el("line",{x1:a.x,y1:a.y,x2:b.x,y2:b.y,class:"edge","data-to":nd.id}))}
 for(const nd of nodes.values()){let p=pos.get(nd.id),g=el("g",{class:"node","data-id":nd.id});g.append(el("circle",{cx:p.x,cy:p.y,r:22}));let t=el("text",{x:p.x,y:p.y});t.textContent="cs("+nd.val+")";g.append(t);svg.append(g)}
}
function buildCoinTree(coins,target){
 svg.innerHTML="";nodes.clear();let levels=[];
 function add(id,tgt,depth,parent){(levels[depth]??=[]).push({id});nodes.set(id,{id,tgt,parent,d:depth});if(tgt>0){coins.forEach((c,idx)=>add(id+"-"+idx,tgt-c,depth+1,id))}}
 add("root",target,0,null);
 let pos=new Map(),H=530,maxD=Math.max(levels.length-1,1);
 levels.forEach((lv,d)=>lv&&lv.forEach((nd,k)=>pos.set(nd.id,{x:1000*(k+1)/(lv.length+1),y:35+d*H/maxD})));
 for(const nd of nodes.values())if(nd.parent){let a=pos.get(nd.parent),b=pos.get(nd.id);svg.appendChild(el("line",{x1:a.x,y1:a.y,x2:b.x,y2:b.y,class:"edge","data-to":nd.id}))}
 for(const nd of nodes.values()){
  let p=pos.get(nd.id),isInvalid=nd.tgt<0;
  let g=el("g",{class:"node"+(isInvalid?" pruned":""),"data-id":nd.id});
  g.append(el("circle",{cx:p.x,cy:p.y,r:isInvalid?14:22}));
  let t=el("text",{x:p.x,y:p.y});t.textContent=isInvalid?"✕":"t="+nd.tgt;
  g.append(t);svg.append(g);
 }
}
function buildMatrixGrid(m,n){
 svg.innerHTML="";nodes.clear();
 let W=1000,H=560,pad=50;
 let cw=Math.min((W-2*pad)/n,(H-2*pad)/m,110);
 let gw=cw*n,gh=cw*m,ox=(W-gw)/2,oy=(H-gh)/2+15;
 for(let r=0;r<m;r++)for(let c=0;c<n;c++){
  let id=r+"-"+c,x=ox+c*cw,y=oy+r*cw;
  nodes.set(id,{id,r,c});
  let g=el("g",{class:"cell","data-id":id});
  g.append(el("rect",{x,y,width:cw-4,height:cw-4,rx:6}));
  let t=el("text",{x:x+(cw-4)/2,y:y+(cw-4)/2,class:"cell-val"});
  g.append(t);svg.append(g);
 }
}
function buildHouseArray(houses){
 svg.innerHTML="";nodes.clear();
 let n=houses.length,W=1000,H=560,pad=50;
 let cw=Math.min((W-2*pad)/n,140);
 let gw=cw*n,ox=(W-gw)/2,oy=H/2-40;
 for(let i=0;i<n;i++){
  let id=""+i,x=ox+i*cw,y=oy;
  nodes.set(id,{id,i});
  let g=el("g",{class:"cell","data-id":id});
  g.append(el("rect",{x,y,width:cw-6,height:cw-6,rx:6}));
  let h=el("text",{x:x+(cw-6)/2,y:y+(cw-6)/2-14,class:"cell-sub"});h.textContent="$"+houses[i];
  let t=el("text",{x:x+(cw-6)/2,y:y+(cw-6)/2+10,class:"cell-val"});
  g.append(h);g.append(t);svg.append(g);
 }
}
function buildLCSGrid(s1,s2){
 svg.innerHTML="";nodes.clear();
 let m=s1.length+1,n=s2.length+1;
 let W=1000,H=560,padTop=55,padLeft=60,padRight=30,padBottom=15;
 let cw=Math.min((W-padLeft-padRight)/n,(H-padTop-padBottom)/m,72);
 let ox=padLeft,oy=padTop;
 for(let j=0;j<n;j++){
  let ch=j<s2.length?s2[j]:"''",x=ox+j*cw+cw/2;
  let t1=el("text",{x,y:oy-20,class:"hdr-char"});t1.textContent=ch;
  let t2=el("text",{x,y:oy-7,class:"hdr-idx"});t2.textContent=j;
  svg.append(t1);svg.append(t2);
 }
 for(let i=0;i<m;i++){
  let ch=i<s1.length?s1[i]:"''",y=oy+i*cw+cw/2;
  let t1=el("text",{x:ox-26,y,class:"hdr-char"});t1.textContent=ch;
  let t2=el("text",{x:ox-11,y,class:"hdr-idx"});t2.textContent=i;
  svg.append(t1);svg.append(t2);
 }
 for(let i=0;i<m;i++)for(let j=0;j<n;j++){
  let id=i+"-"+j,x=ox+j*cw,y=oy+i*cw;
  nodes.set(id,{id,i,j});
  let g=el("g",{class:"cell","data-id":id});
  g.append(el("rect",{x,y,width:cw-4,height:cw-4,rx:5}));
  let t=el("text",{x:x+(cw-4)/2,y:y+(cw-4)/2,class:"cell-val"});
  g.append(t);svg.append(g);
 }
}
function buildGraph(){
 svg.innerHTML=`<defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="21" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#4a6280"/></marker></defs>`;
 nodes.clear();
 let indeg=new Array(gN).fill(0),adj=Array.from({length:gN},()=>[]);
 gEdges.forEach(([a,b])=>{adj[a].push(b);indeg[b]++});
 let level=new Array(gN).fill(-1),remaining=new Set(Array.from({length:gN},(_,k)=>k)),deg=indeg.slice(),wave=0;
 while(remaining.size){
  let layer=[...remaining].filter(v=>deg[v]===0);
  if(layer.length===0){[...remaining].forEach(v=>level[v]=wave);break}
  layer.forEach(v=>{level[v]=wave;remaining.delete(v)});
  layer.forEach(v=>adj[v].forEach(w=>{if(remaining.has(w))deg[w]--}));
  wave++;
 }
 let maxLevel=Math.max(0,...level),byLevel=[];
 for(let v=0;v<gN;v++)(byLevel[level[v]]??=[]).push(v);
 let pos=new Map(),W=1000,H=560;
 byLevel.forEach((vs,lv)=>vs.forEach((v,k)=>pos.set(v,{x:maxLevel>0?70+lv*(W-140)/maxLevel:W/2,y:(k+1)*H/(vs.length+1)})));
 gEdges.forEach(([a,b])=>{let p=pos.get(a),q=pos.get(b);svg.appendChild(el("line",{x1:p.x,y1:p.y,x2:q.x,y2:q.y,class:"edge","data-from":a,"data-to":b,"marker-end":"url(#arrow)"}))});
 for(let v=0;v<gN;v++){
  let p=pos.get(v),g=el("g",{class:"node","data-id":"n"+v});
  g.append(el("circle",{cx:p.x,cy:p.y,r:22}));
  let t=el("text",{x:p.x,y:p.y});t.textContent=v;g.append(t);
  let badge=el("text",{x:p.x+15,y:p.y-15,class:"indeg","data-node":v});badge.textContent=indeg[v];g.append(badge);
  svg.append(g);nodes.set("n"+v,{id:"n"+v});
 }
}
function applyKindUI(){
 if(kind==="graph"){
  lblA.textContent="queue";lblB.textContent="in-degrees";lblC.textContent="processed";lblD.textContent="enrolled / n";
  treeTitle.textContent="COURSE GRAPH";
  legend.innerHTML="🔴 current course　 🔵 queued　 ⬛ enrolled (removed)　 🟠 in-degree";
 }else if(kind==="subsets"){
  lblA.textContent="curr_subset";lblB.textContent="index i";lblC.textContent="res";lblD.textContent="call stack";
  treeTitle.textContent="SUBSET TREE";
  legend.innerHTML="🔴 current call　 🟢 complete subset　 🔵 visited";
 }else if(kind==="queens"){
  lblA.textContent="row r";lblB.textContent="cols used";lblC.textContent="solutions (res)";lblD.textContent="call stack";
  treeTitle.textContent="STATE SPACE TREE";
  legend.innerHTML="🔴 current call　 🟢 solution　 🔵 visited　 ✕ pruned";
 }else if(kind==="memo"){
  lblA.textContent="n";lblB.textContent="memo";lblC.textContent="res";lblD.textContent="call stack";
  treeTitle.textContent="RECURSION TREE (MEMOIZED)";
  legend.innerHTML="🔴 current call　 🟢 resolved　 🔵 visited　 🟠 memo hit (reused)";
 }else if(kind==="coins"){
  lblA.textContent="target";lblB.textContent="memo";lblC.textContent="res";lblD.textContent="call stack";
  treeTitle.textContent="RECURSION TREE (MEMOIZED)";
  legend.innerHTML="🔴 current call　 🟢 resolved　 🔵 visited　 🟠 memo hit (reused)　 ✕ pruned (negative target)";
 }else if(kind==="grid"){
  lblA.textContent="row r";lblB.textContent="col c";lblC.textContent="res";lblD.textContent="status";
  treeTitle.textContent="DP TABLE";
  legend.innerHTML="🔴 current cell　 🔵 dependency (top/left)　 🟢 filled";
 }else if(kind==="burglary"){
  lblA.textContent="index i";lblB.textContent="—";lblC.textContent="res";lblD.textContent="status";
  treeTitle.textContent="DP ARRAY";
  legend.innerHTML="🔴 current index　 🔵 dependency (i-1, i-2)　 🟢 filled";
 }else if(kind==="lcs"){
  lblA.textContent="i";lblB.textContent="j";lblC.textContent="res";lblD.textContent="status";
  treeTitle.textContent="DP TABLE (LCS)";
  legend.innerHTML="🔴 current cell　 🔵 dependency　 🟢 filled";
 }else{
  lblA.textContent="candidate";lblB.textContent="used";lblC.textContent="res";lblD.textContent="call stack";
  treeTitle.textContent="RECURSION TREE";
  legend.innerHTML="🔴 current call　 🟢 complete permutation　 🔵 visited";
 }
}
function render(e){
 action.textContent=e.message;progress.textContent=`${i} / ${events.length}`;
 highlightLine(e.line);
 if(kind==="graph"){
  candidate.textContent="["+e.queue.join(", ")+"]";
  used.textContent="["+e.in_degrees.join(", ")+"]";
  res.textContent="["+e.processed.join(", ")+"]";
  stack.textContent=`${e.enrolled_courses} / ${gN}`;
  document.querySelectorAll(".node").forEach(x=>x.classList.remove("current","queued","removed"));
  document.querySelectorAll(".edge").forEach(x=>x.classList.remove("active"));
  e.processed.forEach(v=>document.querySelector(`.node[data-id="n${v}"]`)?.classList.add("removed"));
  e.queue.forEach(v=>document.querySelector(`.node[data-id="n${v}"]`)?.classList.add("queued"));
  if(e.current_node!=null)document.querySelector(`.node[data-id="n${e.current_node}"]`)?.classList.add("current");
  document.querySelectorAll(".indeg").forEach(b=>b.textContent=e.in_degrees[+b.dataset.node]);
  if(e.current_node!=null&&e.neighbor!=null)document.querySelector(`.edge[data-from="${e.current_node}"][data-to="${e.neighbor}"]`)?.classList.add("active");
 }else if(kind==="subsets"){
  candidate.textContent=JSON.stringify(e.curr_subset);used.textContent=e.i==null?"—":e.i;res.textContent=JSON.stringify(e.res);stack.textContent=e.call_stack.join(" → ")||"—";
  document.querySelectorAll(".node").forEach(x=>x.classList.remove("current","complete","visited"));
  for(let n of nodes.values())if(n.d===nums.length&&e.res.some(r=>JSON.stringify(r)===JSON.stringify(n.path)))document.querySelector(`.node[data-id="${CSS.escape(n.id)}"]`)?.classList.add("complete");
  if(e.node_id){let n=document.querySelector(`.node[data-id="${CSS.escape(e.node_id)}"]`);n?.classList.add("current");let c=e.node_id;while(c){document.querySelector(`.node[data-id="${CSS.escape(c)}"]`)?.classList.add("visited");c=nodes.get(c)?.parent}}
 }else if(kind==="queens"){
  candidate.textContent=e.r==null?"—":e.r;used.textContent=e.cols.length?"{"+e.cols.join(", ")+"}":"∅";res.textContent=e.res;stack.textContent=e.call_stack.join(" → ")||"—";
  if(e.action==="solution")queensSolved.add(e.node_id);
  document.querySelectorAll(".node").forEach(x=>x.classList.remove("current","complete","visited"));
  queensSolved.forEach(id=>document.querySelector(`.node[data-id="${CSS.escape(id)}"]`)?.classList.add("complete"));
  if(e.node_id){let n=document.querySelector(`.node[data-id="${CSS.escape(e.node_id)}"]`);n?.classList.add("current");let c=e.node_id;while(c){document.querySelector(`.node[data-id="${CSS.escape(c)}"]`)?.classList.add("visited");c=nodes.get(c)?.parent}}
 }else if(kind==="memo"){
  candidate.textContent=e.n==null?"—":e.n;
  used.textContent=e.memo.length?"{"+e.memo.map(([k,v])=>`${k}:${v}`).join(", ")+"}":"∅";
  res.textContent=e.res==null?"—":e.res;
  stack.textContent=e.call_stack.join(" → ")||"—";
  if(e.action==="memo_hit")memoHitNodes.add(e.node_id);
  else if(e.action==="base_case"||e.action==="return")memoResolved.add(e.node_id);
  document.querySelectorAll(".node").forEach(x=>x.classList.remove("current","complete","visited","memo-hit"));
  memoResolved.forEach(id=>document.querySelector(`.node[data-id="${CSS.escape(id)}"]`)?.classList.add("complete"));
  memoHitNodes.forEach(id=>document.querySelector(`.node[data-id="${CSS.escape(id)}"]`)?.classList.add("memo-hit"));
  if(e.node_id){let n=document.querySelector(`.node[data-id="${CSS.escape(e.node_id)}"]`);n?.classList.add("current");let c=e.node_id;while(c){document.querySelector(`.node[data-id="${CSS.escape(c)}"]`)?.classList.add("visited");c=nodes.get(c)?.parent}}
 }else if(kind==="coins"){
  candidate.textContent=e.target==null?"—":e.target;
  used.textContent=e.memo.length?"{"+e.memo.map(([k,v])=>`${k}:${v}`).join(", ")+"}":"∅";
  res.textContent=e.res==null?"—":e.res;
  stack.textContent=e.call_stack.join(" → ")||"—";
  if(e.action==="memo_hit")memoHitNodes.add(e.node_id);
  else if(e.action==="base_case"||e.action==="return")memoResolved.add(e.node_id);
  document.querySelectorAll(".node").forEach(x=>x.classList.remove("current","complete","visited","memo-hit"));
  memoResolved.forEach(id=>document.querySelector(`.node[data-id="${CSS.escape(id)}"]`)?.classList.add("complete"));
  memoHitNodes.forEach(id=>document.querySelector(`.node[data-id="${CSS.escape(id)}"]`)?.classList.add("memo-hit"));
  if(e.node_id){let n=document.querySelector(`.node[data-id="${CSS.escape(e.node_id)}"]`);n?.classList.add("current");let c=e.node_id;while(c){document.querySelector(`.node[data-id="${CSS.escape(c)}"]`)?.classList.add("visited");c=nodes.get(c)?.parent}}
 }else if(kind==="grid"){
  candidate.textContent=e.r==null?"—":e.r;
  used.textContent=e.c==null?"—":e.c;
  res.textContent=e.res==null?"—":e.res;
  stack.textContent=e.action;
  if(e.action==="init"){for(let c=0;c<e.dp[0].length;c++)gridFinalized.add("0-"+c);for(let r=0;r<e.dp.length;r++)gridFinalized.add(r+"-0")}
  else if(e.action==="fill")gridFinalized.add(e.r+"-"+e.c);
  document.querySelectorAll(".cell").forEach(x=>x.classList.remove("current","filled","dep"));
  gridFinalized.forEach(id=>{
   let cell=nodes.get(id);
   let val=document.querySelector(`.cell[data-id="${CSS.escape(id)}"] .cell-val`);
   if(val)val.textContent=e.dp[cell.r][cell.c];
   document.querySelector(`.cell[data-id="${CSS.escape(id)}"]`)?.classList.add("filled");
  });
  if(e.action==="fill"){
   document.querySelector(`.cell[data-id="${(e.r-1)+"-"+e.c}"]`)?.classList.add("dep");
   document.querySelector(`.cell[data-id="${e.r+"-"+(e.c-1)}"]`)?.classList.add("dep");
   document.querySelector(`.cell[data-id="${e.r+"-"+e.c}"]`)?.classList.add("current");
  }
 }else if(kind==="burglary"){
  candidate.textContent=e.i==null?"—":e.i;
  used.textContent="—";
  res.textContent=e.res==null?"—":e.res;
  stack.textContent=e.action;
  if(e.action==="base_case"||e.action==="fill")gridFinalized.add(""+e.i);
  document.querySelectorAll(".cell").forEach(x=>x.classList.remove("current","filled","dep"));
  gridFinalized.forEach(id=>{
   let val=document.querySelector(`.cell[data-id="${CSS.escape(id)}"] .cell-val`);
   if(val)val.textContent=e.dp[+id];
   document.querySelector(`.cell[data-id="${CSS.escape(id)}"]`)?.classList.add("filled");
  });
  if(e.action==="fill"){
   document.querySelector(`.cell[data-id="${e.i-1}"]`)?.classList.add("dep");
   document.querySelector(`.cell[data-id="${e.i-2}"]`)?.classList.add("dep");
  }
  if((e.action==="fill"||e.action==="base_case")&&e.i!=null){
   document.querySelector(`.cell[data-id="${e.i}"]`)?.classList.add("current");
  }
 }else if(kind==="lcs"){
  candidate.textContent=e.i==null?"—":e.i;
  used.textContent=e.j==null?"—":e.j;
  res.textContent=e.res==null?"—":e.res;
  stack.textContent=e.action;
  if(e.action==="init"){
   let m=e.dp.length,n=e.dp[0].length;
   for(let j=0;j<n;j++)gridFinalized.add((m-1)+"-"+j);
   for(let r=0;r<m;r++)gridFinalized.add(r+"-"+(n-1));
  }else if(e.action==="fill_match"||e.action==="fill_nomatch"){
   gridFinalized.add(e.i+"-"+e.j);
  }
  document.querySelectorAll(".cell").forEach(x=>x.classList.remove("current","filled","dep"));
  gridFinalized.forEach(id=>{
   let cell=nodes.get(id);
   let val=document.querySelector(`.cell[data-id="${CSS.escape(id)}"] .cell-val`);
   if(val)val.textContent=e.dp[cell.i][cell.j];
   document.querySelector(`.cell[data-id="${CSS.escape(id)}"]`)?.classList.add("filled");
  });
  if(e.action==="fill_match"){
   document.querySelector(`.cell[data-id="${(e.i+1)+"-"+(e.j+1)}"]`)?.classList.add("dep");
   document.querySelector(`.cell[data-id="${e.i+"-"+e.j}"]`)?.classList.add("current");
  }else if(e.action==="fill_nomatch"){
   document.querySelector(`.cell[data-id="${(e.i+1)+"-"+e.j}"]`)?.classList.add("dep");
   document.querySelector(`.cell[data-id="${e.i+"-"+(e.j+1)}"]`)?.classList.add("dep");
   document.querySelector(`.cell[data-id="${e.i+"-"+e.j}"]`)?.classList.add("current");
  }
 }else{
  candidate.textContent=JSON.stringify(e.candidate);used.textContent=e.used.length?"{"+e.used.join(", ")+"}":"∅";res.textContent=JSON.stringify(e.res);stack.textContent=e.call_stack.join(" → ")||"—";
  document.querySelectorAll(".node").forEach(x=>x.classList.remove("current","complete","visited"));
  for(let n of nodes.values())if(n.path.length===nums.length&&e.res.some(r=>JSON.stringify(r)===JSON.stringify(n.path)))document.querySelector(`.node[data-id="${CSS.escape(n.id)}"]`)?.classList.add("complete");
  if(e.node_id){let n=document.querySelector(`.node[data-id="${CSS.escape(e.node_id)}"]`);n?.classList.add("current");let c=e.node_id;while(c){document.querySelector(`.node[data-id="${CSS.escape(c)}"]`)?.classList.add("visited");c=nodes.get(c)?.parent}}
 }
}
function next(){if(i>=events.length){stop();return}render(events[i++]);if(i>=events.length)stop()}
function play(){if(playing)return;playing=true;document.getElementById("play").textContent="⏸ Pause";(function tick(){if(!playing)return;next();if(playing)timer=setTimeout(tick,+speed.value)})()}
function stop(){playing=false;clearTimeout(timer);document.getElementById("play").textContent="▶ Play"}
function reset(){
 stop();i=0;progress.textContent=`0 / ${events.length}`;action.textContent="Ready.";
 document.querySelectorAll(".line").forEach(x=>x.classList.remove("active"));
 if(kind==="graph"){
  candidate.textContent="[]";used.textContent="[]";res.textContent="[]";stack.textContent=`0 / ${gN}`;
  buildGraph();
 }else if(kind==="subsets"){
  candidate.textContent="[]";used.textContent="—";res.textContent="[]";stack.textContent="—";
  document.querySelectorAll(".node").forEach(x=>x.classList.remove("current","complete","visited"));
 }else if(kind==="queens"){
  candidate.textContent="—";used.textContent="∅";res.textContent="0";stack.textContent="—";
  queensSolved=new Set();
  document.querySelectorAll(".node").forEach(x=>x.classList.remove("current","complete","visited"));
 }else if(kind==="memo"){
  candidate.textContent="—";used.textContent="∅";res.textContent="—";stack.textContent="—";
  memoResolved=new Set();memoHitNodes=new Set();
  document.querySelectorAll(".node").forEach(x=>x.classList.remove("current","complete","visited","memo-hit"));
 }else if(kind==="coins"){
  candidate.textContent="—";used.textContent="∅";res.textContent="—";stack.textContent="—";
  memoResolved=new Set();memoHitNodes=new Set();
  document.querySelectorAll(".node").forEach(x=>x.classList.remove("current","complete","visited","memo-hit"));
 }else if(kind==="grid"){
  candidate.textContent="—";used.textContent="—";res.textContent="—";stack.textContent="—";
  gridFinalized=new Set();
  document.querySelectorAll(".cell").forEach(x=>{x.classList.remove("current","filled","dep");let v=x.querySelector(".cell-val");if(v)v.textContent=""});
 }else if(kind==="burglary"){
  candidate.textContent="—";used.textContent="—";res.textContent="—";stack.textContent="—";
  gridFinalized=new Set();
  document.querySelectorAll(".cell").forEach(x=>{x.classList.remove("current","filled","dep");let v=x.querySelector(".cell-val");if(v)v.textContent=""});
 }else if(kind==="lcs"){
  candidate.textContent="—";used.textContent="—";res.textContent="—";stack.textContent="—";
  gridFinalized=new Set();
  document.querySelectorAll(".cell").forEach(x=>{x.classList.remove("current","filled","dep");let v=x.querySelector(".cell-val");if(v)v.textContent=""});
 }else{
  candidate.textContent="[]";used.textContent="∅";res.textContent="[]";stack.textContent="—";
  document.querySelectorAll(".node").forEach(x=>x.classList.remove("current","complete","visited"));
 }
}
function applyTraceData(d,slug){
 kind=d.kind||"tree";events=d.events;i=0;
 applyKindUI();
 if(kind==="graph"){gN=d.n;gEdges=d.edges;renderSource(slug);buildGraph()}
 else if(kind==="subsets"){nums=d.nums;renderSource(slug);buildSubsetTree()}
 else if(kind==="queens"){renderSource(slug);buildQueensTree(events)}
 else if(kind==="memo"){renderSource(slug);buildClimbingTree(d.n)}
 else if(kind==="coins"){renderSource(slug);buildCoinTree(d.coins,d.target)}
 else if(kind==="grid"){renderSource(slug);buildMatrixGrid(d.m,d.n)}
 else if(kind==="burglary"){renderSource(slug);buildHouseArray(d.houses)}
 else if(kind==="lcs"){renderSource(slug);buildLCSGrid(d.s1,d.s2)}
 else{nums=d.nums;renderSource(slug);build()}
 reset();
 document.getElementById("descText").textContent=d.description||"No description available for this problem yet.";
 let scenarios=d.scenarios||[];
 if(scenarios.length>1){
  scenarioSelect.innerHTML=scenarios.map(s=>`<option value="${s.id}">${esc(s.label)}</option>`).join("");
  scenarioSelect.value=d.scenario||scenarios[0].id;
  scenarioSelect.hidden=false;
 }else{
  scenarioSelect.hidden=true;
 }
}
function loadProblem(slug,title,category){
 stop();
 currentSlug=slug;
 fetch(`/api/trace/${slug}`).then(r=>r.json()).then(d=>{
  applyTraceData(d,slug);
  document.querySelectorAll(".problem-item").forEach(x=>x.classList.toggle("active",x.dataset.slug===slug));
  document.getElementById("problemTitle").textContent=title;
  document.getElementById("problemSubtitle").textContent=`${category} · ${kind==="graph"?"Graph Traversal":"Recursion Tree"}`;
 });
}
function buildSidebar(categories){
 let nav=document.getElementById("problemNav");nav.innerHTML="";
 let collapsed=new Set(JSON.parse(localStorage.getItem("pv_collapsed_categories")||"[]"));
 categories.forEach(cat=>{
  let wrap=document.createElement("div");
  wrap.className="category"+(collapsed.has(cat.name)?"":" open");
  let head=document.createElement("div");
  head.className="category-head";
  head.innerHTML=`<span>${esc(cat.name)}</span><span class="chev">▸</span>`;
  head.onclick=()=>{
   wrap.classList.toggle("open");
   let set=new Set(JSON.parse(localStorage.getItem("pv_collapsed_categories")||"[]"));
   if(wrap.classList.contains("open"))set.delete(cat.name);else set.add(cat.name);
   localStorage.setItem("pv_collapsed_categories",JSON.stringify([...set]));
  };
  let items=document.createElement("div");
  items.className="category-items";
  if(cat.problems.length===0){
   let empty=document.createElement("div");
   empty.className="category-empty";empty.textContent="No problems yet";
   items.append(empty);
  }else{
   cat.problems.forEach(p=>{
    let item=document.createElement("div");
    item.className="problem-item";item.textContent=p.title;item.dataset.slug=p.slug;
    item.onclick=()=>loadProblem(p.slug,p.title,cat.name);
    items.append(item);
   });
  }
  wrap.append(head,items);nav.append(wrap);
 });
}
langSelect.value=currentLang;
langSelect.onchange=()=>{currentLang=langSelect.value;renderSource(currentSlug)};
scenarioSelect.onchange=()=>{
 fetch(`/api/trace/${currentSlug}?scenario=${encodeURIComponent(scenarioSelect.value)}`).then(r=>r.json()).then(d=>applyTraceData(d,currentSlug));
};
document.getElementById("reset").onclick=reset;step.onclick=()=>next();playBtn=document.getElementById("play");playBtn.onclick=()=>playing?stop():play();
document.getElementById("sidebarToggle").onclick=()=>{
 let s=document.getElementById("sidebar");
 s.classList.toggle("collapsed");
 localStorage.setItem("pv_sidebar_collapsed",s.classList.contains("collapsed")?"1":"0");
};
if(localStorage.getItem("pv_sidebar_collapsed")==="1")document.getElementById("sidebar").classList.add("collapsed");
document.getElementById("descToggle").onclick=()=>{
 let p=document.getElementById("descPanel");
 p.classList.toggle("open");
 localStorage.setItem("pv_description_collapsed",p.classList.contains("open")?"0":"1");
};
if(localStorage.getItem("pv_description_collapsed")==="1")document.getElementById("descPanel").classList.remove("open");
fetch("/api/problems").then(r=>r.json()).then(d=>{
 buildSidebar(d.categories);
 let first=d.categories.flatMap(c=>c.problems.map(p=>({...p,category:c.name})))[0];
 if(first)loadProblem(first.slug,first.title,first.category);
});
