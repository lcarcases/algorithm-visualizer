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
"remove-nth-node-from-end-of-list":{
 langs:{
  python:{
   src:[
"def remove_nth_last_node(head: ListNode, n: int) -> ListNode:",
"    # A dummy node points to the head of the linked list.",
"    dummy = ListNode(0, head)",
"    fast = slow = dummy",
"    # Move fast n + 1 steps ahead.",
"    for _ in range(n + 1):",
"        fast = fast.next",
"    # Move both pointers until fast reaches the end.",
"    while fast:",
"        fast = fast.next",
"        slow = slow.next",
"    # slow is now one node before the target. Bypass it.",
"    slow.next = slow.next.next",
"    return dummy.next"
   ],
   map:{1:0,2:2,3:3,4:5,5:6,6:8,7:9,8:10,9:12,10:13}
  },
  javascript:{
   src:[
"function removeNthLastNode(head, n) {",
"  // A dummy node points to the head of the linked list.",
"  const dummy = new ListNode(0, head);",
"  let fast = dummy, slow = dummy;",
"  // Move fast n + 1 steps ahead.",
"  for (let i = 0; i < n + 1; i++) {",
"    fast = fast.next;","  }",
"  // Move both pointers until fast reaches the end.",
"  while (fast !== null) {",
"    fast = fast.next;",
"    slow = slow.next;","  }",
"  // slow is now one node before the target. Bypass it.",
"  slow.next = slow.next.next;",
"  return dummy.next;","}"
   ],
   map:{1:0,2:2,3:3,4:5,5:6,6:9,7:10,8:11,9:14,10:15}
  },
  java:{
   src:[
"public ListNode removeNthLastNode(ListNode head, int n) {",
"    // A dummy node points to the head of the linked list.",
"    ListNode dummy = new ListNode(0, head);",
"    ListNode fast = dummy;","    ListNode slow = dummy;",
"    // Move fast n + 1 steps ahead.",
"    for (int i = 0; i < n + 1; i++) {",
"        fast = fast.next;","    }",
"    // Move both pointers until fast reaches the end.",
"    while (fast != null) {",
"        fast = fast.next;",
"        slow = slow.next;","    }",
"    // slow is now one node before the target. Bypass it.",
"    slow.next = slow.next.next;",
"    return dummy.next;","}"
   ],
   map:{1:0,2:2,3:3,4:6,5:7,6:10,7:11,8:12,9:15,10:16}
  },
  csharp:{
   src:[
"public ListNode RemoveNthLastNode(ListNode head, int n) {",
"    // A dummy node points to the head of the linked list.",
"    ListNode dummy = new ListNode(0, head);",
"    ListNode fast = dummy;","    ListNode slow = dummy;",
"    // Move fast n + 1 steps ahead.",
"    for (int i = 0; i < n + 1; i++) {",
"        fast = fast.next;","    }",
"    // Move both pointers until fast reaches the end.",
"    while (fast != null) {",
"        fast = fast.next;",
"        slow = slow.next;","    }",
"    // slow is now one node before the target. Bypass it.",
"    slow.next = slow.next.next;",
"    return dummy.next;","}"
   ],
   map:{1:0,2:2,3:3,4:6,5:7,6:10,7:11,8:12,9:15,10:16}
  }
 }
},
"reverse-32-bit-integer":{
 langs:{
  python:{
   src:[
"def reverse_32_bit_integer(n: int) -> int:",
"    INT_MAX = 2**31 - 1","    INT_MIN = -2**31","    reversed_n = 0",
"    # Keep looping until we've added all digits of 'n' to 'reversed_n'",
"    # in reverse order.",
"    while n != 0:",
"        # digit = n % 10",
"        digit = int(math.fmod(n, 10))",
"        # n = n // 10",
"        n = int(n / 10)",
"        # Check for integer overflow or underflow.",
"        if (reversed_n > int(INT_MAX / 10)",
"                or reversed_n < int(INT_MIN / 10)):",
"            return 0",
"        # Add the current digit to 'reversed_n'.",
"        reversed_n = reversed_n * 10 + digit",
"    return reversed_n"
   ],
   map:{1:1,2:2,3:3,4:6,5:8,6:10,7:12,8:14,9:16,10:17}
  },
  javascript:{
   src:[
"function reverse32BitInteger(n) {",
"  const INT_MAX = 2 ** 31 - 1;","  const INT_MIN = -(2 ** 31);","  let reversedN = 0;",
"  // Keep looping until we've added all digits of 'n' to 'reversedN'",
"  // in reverse order.",
"  while (n !== 0) {",
"    const digit = n % 10;",
"    n = Math.trunc(n / 10);",
"    // Check for integer overflow or underflow.",
"    if (reversedN > Math.trunc(INT_MAX / 10) ||",
"        reversedN < Math.trunc(INT_MIN / 10)) {",
"      return 0;","    }",
"    // Add the current digit to 'reversedN'.",
"    reversedN = reversedN * 10 + digit;",
"  }","  return reversedN;","}"
   ],
   map:{1:1,2:2,3:3,4:6,5:7,6:8,7:10,8:12,9:15,10:17}
  },
  java:{
   src:[
"public static int reverse32BitInteger(int n) {",
"    int INT_MAX = Integer.MAX_VALUE;","    int INT_MIN = Integer.MIN_VALUE;","    int reversedN = 0;",
"    // Keep looping until we've added all digits of 'n' to 'reversedN'",
"    // in reverse order.",
"    while (n != 0) {",
"        int digit = n % 10;","        n = n / 10;",
"        // Check for integer overflow or underflow.",
"        if (reversedN > INT_MAX / 10 || reversedN < INT_MIN / 10) {",
"            return 0;","        }",
"        // Add the current digit to 'reversedN'.",
"        reversedN = reversedN * 10 + digit;",
"    }","    return reversedN;","}"
   ],
   map:{1:1,2:2,3:3,4:6,5:7,6:8,7:10,8:11,9:14,10:16}
  },
  csharp:{
   src:[
"public static int Reverse32BitInteger(int n) {",
"    int INT_MAX = int.MaxValue;","    int INT_MIN = int.MinValue;","    int reversedN = 0;",
"    // Keep looping until we've added all digits of 'n' to 'reversedN'",
"    // in reverse order.",
"    while (n != 0) {",
"        int digit = n % 10;","        n = n / 10;",
"        // Check for integer overflow or underflow.",
"        if (reversedN > INT_MAX / 10 || reversedN < INT_MIN / 10) {",
"            return 0;","        }",
"        // Add the current digit to 'reversedN'.",
"        reversedN = reversedN * 10 + digit;",
"    }","    return reversedN;","}"
   ],
   map:{1:1,2:2,3:3,4:6,5:7,6:8,7:10,8:11,9:14,10:16}
  }
 }
},
"spiral-matrix":{
 langs:{
  python:{
   src:[
"def spiral_matrix(matrix: List[List[int]]) -> List[int]:",
"    if not matrix:","        return []",
"    result = []",
"    # Initialize the matrix boundaries.",
"    top, bottom = 0, len(matrix) - 1",
"    left, right = 0, len(matrix[0]) - 1",
"    # Traverse the matrix in spiral order.",
"    while top <= bottom and left <= right:",
"        # Move from left to right along the top boundary.",
"        for i in range(left, right + 1):",
"            result.append(matrix[top][i])","        top += 1",
"        # Move from top to bottom along the right boundary.",
"        for i in range(top, bottom + 1):",
"            result.append(matrix[i][right])","        right -= 1",
"        # Check that the bottom boundary hasn't passed the top boundary",
"        # before moving from right to left along the bottom boundary.",
"        if top <= bottom:",
"            for i in range(right, left - 1, -1):",
"                result.append(matrix[bottom][i])","            bottom -= 1",
"        # Check that the left boundary hasn't passed the right boundary",
"        # before moving from bottom to top along the left boundary.",
"        if left <= right:",
"            for i in range(bottom, top - 1, -1):",
"                result.append(matrix[i][left])","            left += 1",
"    return result"
   ],
   map:{1:1,2:2,3:3,4:5,5:6,6:8,7:10,8:11,9:12,10:14,11:15,12:16,13:19,14:20,15:21,16:22,17:25,18:26,19:27,20:28,21:29}
  },
  javascript:{
   src:[
"function spiralMatrix(matrix) {",
"  if (matrix.length === 0) {","    return [];","  }",
"  const result = [];",
"  // Initialize the matrix boundaries.",
"  let top = 0, bottom = matrix.length - 1;",
"  let left = 0, right = matrix[0].length - 1;",
"  // Traverse the matrix in spiral order.",
"  while (top <= bottom && left <= right) {",
"    // Move from left to right along the top boundary.",
"    for (let i = left; i <= right; i++) {",
"      result.push(matrix[top][i]);","    }","    top++;",
"    // Move from top to bottom along the right boundary.",
"    for (let i = top; i <= bottom; i++) {",
"      result.push(matrix[i][right]);","    }","    right--;",
"    // Check that the bottom boundary hasn't passed the top boundary",
"    // before moving from right to left along the bottom boundary.",
"    if (top <= bottom) {",
"      for (let i = right; i >= left; i--) {",
"        result.push(matrix[bottom][i]);","      }","      bottom--;","    }",
"    // Check that the left boundary hasn't passed the right boundary",
"    // before moving from bottom to top along the left boundary.",
"    if (left <= right) {",
"      for (let i = bottom; i >= top; i--) {",
"        result.push(matrix[i][left]);","      }","      left++;","    }",
"  }","  return result;","}"
   ],
   map:{1:1,2:2,3:4,4:6,5:7,6:9,7:11,8:12,9:14,10:16,11:17,12:19,13:22,14:23,15:24,16:26,17:30,18:31,19:32,20:34,21:37}
  },
  java:{
   src:[
"public static List<Integer> spiralMatrix(int[][] matrix) {",
"    if (matrix.length == 0) {","        return new ArrayList<>();","    }",
"    List<Integer> result = new ArrayList<>();",
"    // Initialize the matrix boundaries.",
"    int top = 0, bottom = matrix.length - 1;",
"    int left = 0, right = matrix[0].length - 1;",
"    // Traverse the matrix in spiral order.",
"    while (top <= bottom && left <= right) {",
"        // Move from left to right along the top boundary.",
"        for (int i = left; i <= right; i++) {",
"            result.add(matrix[top][i]);","        }","        top++;",
"        // Move from top to bottom along the right boundary.",
"        for (int i = top; i <= bottom; i++) {",
"            result.add(matrix[i][right]);","        }","        right--;",
"        // Check that the bottom boundary hasn't passed the top boundary",
"        // before moving from right to left along the bottom boundary.",
"        if (top <= bottom) {",
"            for (int i = right; i >= left; i--) {",
"                result.add(matrix[bottom][i]);","            }","            bottom--;","        }",
"        // Check that the left boundary hasn't passed the right boundary",
"        // before moving from bottom to top along the left boundary.",
"        if (left <= right) {",
"            for (int i = bottom; i >= top; i--) {",
"                result.add(matrix[i][left]);","            }","            left++;","        }",
"    }","    return result;","}"
   ],
   map:{1:1,2:2,3:4,4:6,5:7,6:9,7:11,8:12,9:14,10:16,11:17,12:19,13:22,14:23,15:24,16:26,17:30,18:31,19:32,20:34,21:37}
  },
  csharp:{
   src:[
"public static List<int> SpiralMatrix(int[][] matrix) {",
"    if (matrix.Length == 0) {","        return new List<int>();","    }",
"    var result = new List<int>();",
"    // Initialize the matrix boundaries.",
"    int top = 0, bottom = matrix.Length - 1;",
"    int left = 0, right = matrix[0].Length - 1;",
"    // Traverse the matrix in spiral order.",
"    while (top <= bottom && left <= right) {",
"        // Move from left to right along the top boundary.",
"        for (int i = left; i <= right; i++) {",
"            result.Add(matrix[top][i]);","        }","        top++;",
"        // Move from top to bottom along the right boundary.",
"        for (int i = top; i <= bottom; i++) {",
"            result.Add(matrix[i][right]);","        }","        right--;",
"        // Check that the bottom boundary hasn't passed the top boundary",
"        // before moving from right to left along the bottom boundary.",
"        if (top <= bottom) {",
"            for (int i = right; i >= left; i--) {",
"                result.Add(matrix[bottom][i]);","            }","            bottom--;","        }",
"        // Check that the left boundary hasn't passed the right boundary",
"        // before moving from bottom to top along the left boundary.",
"        if (left <= right) {",
"            for (int i = bottom; i >= top; i--) {",
"                result.Add(matrix[i][left]);","            }","            left++;","        }",
"    }","    return result;","}"
   ],
   map:{1:1,2:2,3:4,4:6,5:7,6:9,7:11,8:12,9:14,10:16,11:17,12:19,13:22,14:23,15:24,16:26,17:30,18:31,19:32,20:34,21:37}
  }
 }
},
"kth-largest-integer-quickselect":{
 langs:{
  python:{
   src:[
"def kth_largest_integer_quickselect(nums: List[int], k: int) -> int:",
"    return quickselect(nums, 0, len(nums) - 1, k)","",
"def quickselect(nums: List[int], left: int, right: int, k: int) -> int:",
"    n = len(nums)",
"    if left >= right:","        return nums[left]",
"    random_index = random.randint(left, right)",
"    nums[random_index], nums[right] = nums[right], nums[random_index]",
"    pivot_index = partition(nums, left, right)",
"    # If the pivot comes before 'n - k', the ('n - k')th smallest",
"    # integer is somewhere to its right. Perform quickselect on the",
"    # right part.",
"    if pivot_index < n - k:",
"        return quickselect(nums, pivot_index + 1, right, k)",
"    # If the pivot comes after 'n - k', the ('n - k')th smallest integer",
"    # is somewhere to its left. Perform quickselect on the left part.",
"    elif pivot_index > n - k:",
"        return quickselect(nums, left, pivot_index - 1, k)",
"    # If the pivot is at index 'n - k', it's the ('n - k')th smallest",
"    # integer.",
"    else:","        return nums[pivot_index]","",
"def partition(nums: List[int], left: int, right: int) -> int:",
"    pivot = nums[right]","    lo = left",
"    for i in range(left, right):",
"        if nums[i] < pivot:",
"            nums[lo], nums[i] = nums[i], nums[lo]","            lo += 1",
"    nums[lo], nums[right] = nums[right], nums[lo]","    return lo"
   ],
   map:{1:1,2:4,3:5,4:6,5:7,6:8,7:9,8:13,9:14,10:17,11:18,12:22,13:25,14:26,15:27,16:28,17:29,18:30,19:31,20:32}
  },
  javascript:{
   src:[
"function kthLargestIntegerQuickselect(nums, k) {",
"  return quickselect(nums, 0, nums.length - 1, k);","}","",
"function quickselect(nums, left, right, k) {",
"  const n = nums.length;",
"  if (left >= right) {","    return nums[left];","  }",
"  const randomIndex = left + Math.floor(Math.random() * (right - left + 1));",
"  [nums[randomIndex], nums[right]] = [nums[right], nums[randomIndex]];",
"  const pivotIndex = partition(nums, left, right);",
"  // If the pivot comes before 'n - k', the ('n - k')th smallest",
"  // integer is somewhere to its right. Perform quickselect on the",
"  // right part.",
"  if (pivotIndex < n - k) {",
"    return quickselect(nums, pivotIndex + 1, right, k);",
"  // If the pivot comes after 'n - k', the ('n - k')th smallest integer",
"  // is somewhere to its left. Perform quickselect on the left part.",
"  } else if (pivotIndex > n - k) {",
"    return quickselect(nums, left, pivotIndex - 1, k);",
"  // If the pivot is at index 'n - k', it's the ('n - k')th smallest",
"  // integer.",
"  } else {","    return nums[pivotIndex];","  }","}","",
"function partition(nums, left, right) {",
"  const pivot = nums[right];","  let lo = left;",
"  for (let i = left; i < right; i++) {",
"    if (nums[i] < pivot) {",
"      [nums[lo], nums[i]] = [nums[i], nums[lo]];","      lo++;","    }","  }",
"  [nums[lo], nums[right]] = [nums[right], nums[lo]];","  return lo;","}"
   ],
   map:{1:1,2:5,3:6,4:7,5:9,6:10,7:11,8:15,9:16,10:19,11:20,12:24,13:29,14:30,15:31,16:32,17:33,18:34,19:37,20:38}
  },
  java:{
   src:[
"public static int kthLargestIntegerQuickselect(int[] nums, int k) {",
"    return quickselect(nums, 0, nums.length - 1, k);","}","",
"public static int quickselect(int[] nums, int left, int right, int k) {",
"    int n = nums.length;",
"    if (left >= right) {","        return nums[left];","    }",
"    int randomIndex = left + new Random().nextInt(right - left + 1);",
"    int temp = nums[randomIndex];","    nums[randomIndex] = nums[right];","    nums[right] = temp;",
"    int pivotIndex = partition(nums, left, right);",
"    // If the pivot comes before 'n - k', the ('n - k')th smallest",
"    // integer is somewhere to its right. Perform quickselect on the",
"    // right part.",
"    if (pivotIndex < n - k) {",
"        return quickselect(nums, pivotIndex + 1, right, k);",
"    // If the pivot comes after 'n - k', the ('n - k')th smallest integer",
"    // is somewhere to its left. Perform quickselect on the left part.",
"    } else if (pivotIndex > n - k) {",
"        return quickselect(nums, left, pivotIndex - 1, k);",
"    // If the pivot is at index 'n - k', it's the ('n - k')th smallest",
"    // integer.",
"    } else {","        return nums[pivotIndex];","    }","}","",
"public static int partition(int[] nums, int left, int right) {",
"    int pivot = nums[right];","    int lo = left;",
"    for (int i = left; i < right; i++) {",
"        if (nums[i] < pivot) {",
"            int temp = nums[lo];","            nums[lo] = nums[i];","            nums[i] = temp;",
"            lo++;","        }","    }",
"    int temp = nums[lo];","    nums[lo] = nums[right];","    nums[right] = temp;",
"    return lo;","}"
   ],
   map:{1:1,2:5,3:6,4:7,5:9,6:10,7:13,8:17,9:18,10:21,11:22,12:26,13:31,14:32,15:33,16:34,17:35,18:38,19:41,20:44}
  },
  csharp:{
   src:[
"public static int KthLargestIntegerQuickselect(int[] nums, int k) {",
"    return Quickselect(nums, 0, nums.Length - 1, k);","}","",
"public static int Quickselect(int[] nums, int left, int right, int k) {",
"    int n = nums.Length;",
"    if (left >= right) {","        return nums[left];","    }",
"    int randomIndex = left + new Random().Next(right - left + 1);",
"    (nums[randomIndex], nums[right]) = (nums[right], nums[randomIndex]);",
"    int pivotIndex = Partition(nums, left, right);",
"    // If the pivot comes before 'n - k', the ('n - k')th smallest",
"    // integer is somewhere to its right. Perform quickselect on the",
"    // right part.",
"    if (pivotIndex < n - k) {",
"        return Quickselect(nums, pivotIndex + 1, right, k);",
"    // If the pivot comes after 'n - k', the ('n - k')th smallest integer",
"    // is somewhere to its left. Perform quickselect on the left part.",
"    } else if (pivotIndex > n - k) {",
"        return Quickselect(nums, left, pivotIndex - 1, k);",
"    // If the pivot is at index 'n - k', it's the ('n - k')th smallest",
"    // integer.",
"    } else {","        return nums[pivotIndex];","    }","}","",
"public static int Partition(int[] nums, int left, int right) {",
"    int pivot = nums[right];","    int lo = left;",
"    for (int i = left; i < right; i++) {",
"        if (nums[i] < pivot) {",
"            (nums[lo], nums[i]) = (nums[i], nums[lo]);","            lo++;","        }","    }",
"    (nums[lo], nums[right]) = (nums[right], nums[lo]);","    return lo;","}"
   ],
   map:{1:1,2:5,3:6,4:7,5:9,6:10,7:11,8:15,9:16,10:19,11:20,12:24,13:29,14:30,15:31,16:32,17:33,18:34,19:37,20:38}
  }
 }
},
"kth-largest-integer-min-heap":{
 langs:{
  python:{
   src:[
"def kth_largest_integer_min_heap(nums: List[int], k: int) -> int:",
"    min_heap = []","    heapq.heapify(min_heap)",
"    for num in nums:",
"        # Ensure the heap has at least 'k' integers.",
"        if len(min_heap) < k:","            heapq.heappush(min_heap, num)",
"        # If 'num' is greater than the smallest integer in the heap, pop",
"        # off this smallest integer from the heap and push in 'num'.",
"        elif num > min_heap[0]:",
"            heapq.heappop(min_heap)","            heapq.heappush(min_heap, num)",
"    return min_heap[0]"
   ],
   map:{1:1,2:2,3:3,4:5,5:6,6:9,7:10,8:11,9:12}
  },
  javascript:{
   src:[
"function kthLargestIntegerMinHeap(nums, k) {",
"  const minHeap = new MinHeap();",
"  for (const num of nums) {",
"    // Ensure the heap has at least 'k' integers.",
"    if (minHeap.size() < k) {","      minHeap.push(num);",
"    // If 'num' is greater than the smallest integer in the heap, pop",
"    // off this smallest integer from the heap and push in 'num'.",
"    } else if (num > minHeap.top()) {",
"      minHeap.pop();","      minHeap.push(num);","    }","  }",
"  return minHeap.top();","}"
   ],
   map:{1:1,2:1,3:2,4:4,5:5,6:8,7:9,8:10,9:13}
  },
  java:{
   src:[
"public static int kthLargestIntegerMinHeap(int[] nums, int k) {",
"    PriorityQueue<Integer> minHeap = new PriorityQueue<>();",
"    for (int num : nums) {",
"        // Ensure the heap has at least 'k' integers.",
"        if (minHeap.size() < k) {","            minHeap.offer(num);",
"        // If 'num' is greater than the smallest integer in the heap, pop",
"        // off this smallest integer from the heap and push in 'num'.",
"        } else if (num > minHeap.peek()) {",
"            minHeap.poll();","            minHeap.offer(num);","        }","    }",
"    return minHeap.peek();","}"
   ],
   map:{1:1,2:1,3:2,4:4,5:5,6:8,7:9,8:10,9:13}
  },
  csharp:{
   src:[
"public static int KthLargestIntegerMinHeap(int[] nums, int k) {",
"    var minHeap = new PriorityQueue<int, int>();",
"    foreach (int num in nums) {",
"        // Ensure the heap has at least 'k' integers.",
"        if (minHeap.Count < k) {","            minHeap.Enqueue(num, num);",
"        // If 'num' is greater than the smallest integer in the heap, pop",
"        // off this smallest integer from the heap and push in 'num'.",
"        } else if (num > minHeap.Peek()) {",
"            minHeap.Dequeue();","            minHeap.Enqueue(num, num);","        }","    }",
"    return minHeap.Peek();","}"
   ],
   map:{1:1,2:1,3:2,4:4,5:5,6:8,7:9,8:10,9:13}
  }
 }
},
"sort-array":{
 langs:{
  python:{
   src:[
"def sort_array(nums: List[int]) -> List[int]:",
"    quicksort_optimized(nums, 0, len(nums) - 1)",
"    return nums","",
"def quicksort_optimized(nums: List[int], left: int, right: int) -> None:",
"    if left >= right:","        return",
"    # Choose a pivot at a random index.",
"    random_index = random.randint(left, right)",
"    # Swap the randomly chosen pivot with the rightmost element to",
"    # position the pivot at the rightmost index.",
"    nums[random_index], nums[right] = nums[right], nums[random_index]",
"    pivot_index = partition(nums, left, right)",
"    quicksort_optimized(nums, left, pivot_index - 1)",
"    quicksort_optimized(nums, pivot_index + 1, right)","",
"def partition(nums: List[int], left: int, right: int) -> int:",
"    pivot = nums[right]","    lo = left",
"    # Move all numbers less than the pivot to the left, which",
"    # consequently positions all numbers greater than or equal to the",
"    # pivot to the right.",
"    for i in range(left, right):",
"        if nums[i] < pivot:",
"            nums[lo], nums[i] = nums[i], nums[lo]","            lo += 1",
"    # After partitioning, 'lo' will be positioned where the pivot should",
"    # be. So, swap the pivot number with the number at the 'lo' pointer.",
"    nums[lo], nums[right] = nums[right], nums[lo]","    return lo"
   ],
   map:{1:1,2:2,3:5,4:6,5:8,6:11,7:12,8:13,9:14,10:17,11:18,12:22,13:23,14:24,15:25,16:28,17:29}
  },
  javascript:{
   src:[
"function sortArray(nums) {",
"  quicksortOptimized(nums, 0, nums.length - 1);","  return nums;","}","",
"function quicksortOptimized(nums, left, right) {",
"  if (left >= right) {","    return;","  }",
"  // Choose a pivot at a random index.",
"  const randomIndex = left + Math.floor(Math.random() * (right - left + 1));",
"  // Swap the randomly chosen pivot with the rightmost element to",
"  // position the pivot at the rightmost index.",
"  [nums[randomIndex], nums[right]] = [nums[right], nums[randomIndex]];",
"  const pivotIndex = partition(nums, left, right);",
"  quicksortOptimized(nums, left, pivotIndex - 1);",
"  quicksortOptimized(nums, pivotIndex + 1, right);","}","",
"function partition(nums, left, right) {",
"  const pivot = nums[right];","  let lo = left;",
"  // Move all numbers less than the pivot to the left, which",
"  // consequently positions all numbers greater than or equal to the",
"  // pivot to the right.",
"  for (let i = left; i < right; i++) {",
"    if (nums[i] < pivot) {",
"      [nums[lo], nums[i]] = [nums[i], nums[lo]];","      lo++;","    }","  }",
"  // After partitioning, 'lo' will be positioned where the pivot should",
"  // be. So, swap the pivot number with the number at the 'lo' pointer.",
"  [nums[lo], nums[right]] = [nums[right], nums[lo]];","  return lo;","}"
   ],
   map:{1:1,2:2,3:6,4:7,5:10,6:13,7:14,8:15,9:16,10:20,11:21,12:25,13:26,14:27,15:28,16:33,17:34}
  },
  java:{
   src:[
"public static int[] sortArray(int[] nums) {",
"    quicksortOptimized(nums, 0, nums.length - 1);","    return nums;","}","",
"public static void quicksortOptimized(int[] nums, int left, int right) {",
"    if (left >= right) {","        return;","    }",
"    // Choose a pivot at a random index.",
"    int randomIndex = left + new Random().nextInt(right - left + 1);",
"    // Swap the randomly chosen pivot with the rightmost element to",
"    // position the pivot at the rightmost index.",
"    int temp = nums[randomIndex];","    nums[randomIndex] = nums[right];","    nums[right] = temp;",
"    int pivotIndex = partition(nums, left, right);",
"    quicksortOptimized(nums, left, pivotIndex - 1);",
"    quicksortOptimized(nums, pivotIndex + 1, right);","}","",
"public static int partition(int[] nums, int left, int right) {",
"    int pivot = nums[right];","    int lo = left;",
"    // Move all numbers less than the pivot to the left, which",
"    // consequently positions all numbers greater than or equal to the",
"    // pivot to the right.",
"    for (int i = left; i < right; i++) {",
"        if (nums[i] < pivot) {",
"            int temp = nums[lo];","            nums[lo] = nums[i];","            nums[i] = temp;",
"            lo++;","        }","    }",
"    // After partitioning, 'lo' will be positioned where the pivot should",
"    // be. So, swap the pivot number with the number at the 'lo' pointer.",
"    int temp = nums[lo];","    nums[lo] = nums[right];","    nums[right] = temp;",
"    return lo;","}"
   ],
   map:{1:1,2:2,3:6,4:7,5:10,6:13,7:16,8:17,9:18,10:22,11:23,12:27,13:28,14:29,15:32,16:37,17:40}
  },
  csharp:{
   src:[
"public static int[] SortArray(int[] nums) {",
"    QuicksortOptimized(nums, 0, nums.Length - 1);","    return nums;","}","",
"public static void QuicksortOptimized(int[] nums, int left, int right) {",
"    if (left >= right) {","        return;","    }",
"    // Choose a pivot at a random index.",
"    int randomIndex = left + new Random().Next(right - left + 1);",
"    // Swap the randomly chosen pivot with the rightmost element to",
"    // position the pivot at the rightmost index.",
"    (nums[randomIndex], nums[right]) = (nums[right], nums[randomIndex]);",
"    int pivotIndex = Partition(nums, left, right);",
"    QuicksortOptimized(nums, left, pivotIndex - 1);",
"    QuicksortOptimized(nums, pivotIndex + 1, right);","}","",
"public static int Partition(int[] nums, int left, int right) {",
"    int pivot = nums[right];","    int lo = left;",
"    // Move all numbers less than the pivot to the left, which",
"    // consequently positions all numbers greater than or equal to the",
"    // pivot to the right.",
"    for (int i = left; i < right; i++) {",
"        if (nums[i] < pivot) {",
"            (nums[lo], nums[i]) = (nums[i], nums[lo]);","            lo++;","        }","    }",
"    // After partitioning, 'lo' will be positioned where the pivot should",
"    // be. So, swap the pivot number with the number at the 'lo' pointer.",
"    (nums[lo], nums[right]) = (nums[right], nums[lo]);","    return lo;","}"
   ],
   map:{1:1,2:2,3:6,4:7,5:10,6:13,7:14,8:15,9:16,10:20,11:21,12:25,13:26,14:27,15:28,16:33,17:34}
  }
 }
},
"sort-linked-list":{
 langs:{
  python:{
   src:[
"def sort_linked_list(head: ListNode) -> ListNode:",
"    # If the linked list is empty or has only one element, it's already",
"    # sorted.",
"    if not head or not head.next:","        return head",
"    # Split the linked list into halves using the fast and slow pointer",
"    # technique.",
"    second_head = split_list(head)",
"    # Recursively sort both halves.",
"    first_half_sorted = sort_linked_list(head)",
"    second_half_sorted = sort_linked_list(second_head)",
"    # Merge the sorted sublists.",
"    return merge(first_half_sorted, second_half_sorted)","",
"def split_list(head: ListNode) -> ListNode:",
"    slow = fast = head",
"    while fast.next and fast.next.next:",
"        slow = slow.next","        fast = fast.next.next",
"    second_head = slow.next","    slow.next = None","    return second_head","",
"def merge(l1: ListNode, l2: ListNode) -> ListNode:",
"    dummy = ListNode(0)",
"    # This pointer will be used to append nodes to the tail of the",
"    # merged linked list.",
"    tail = dummy",
"    # Continually append the node with the smaller value from each",
"    # linked list to the merged linked list until one of the linked",
"    # lists has no more nodes to merge.",
"    while l1 and l2:",
"        if l1.val < l2.val:","            tail.next = l1","            l1 = l1.next",
"        else:","            tail.next = l2","            l2 = l2.next",
"        tail = tail.next",
"    # One of the two linked lists could still have nodes remaining.",
"    # Attach those nodes to the end of the merged linked list.",
"    tail.next = l1 or l2","    return dummy.next"
   ],
   map:{1:0,2:3,3:4,4:7,5:9,6:10,7:12,8:12,9:14,10:15,11:16,12:17,13:18,14:19,15:20,16:21,17:23,18:24,19:27,20:31,21:32,22:33,23:34,24:36,25:37,26:38,27:41,28:42}
  },
  javascript:{
   src:[
"function sortLinkedList(head) {",
"  // If the linked list is empty or has only one element, it's already",
"  // sorted.",
"  if (!head || !head.next) {","    return head;","  }",
"  // Split the linked list into halves using the fast and slow pointer",
"  // technique.",
"  const secondHead = splitList(head);",
"  // Recursively sort both halves.",
"  const firstHalfSorted = sortLinkedList(head);",
"  const secondHalfSorted = sortLinkedList(secondHead);",
"  // Merge the sorted sublists.",
"  return merge(firstHalfSorted, secondHalfSorted);","}","",
"function splitList(head) {",
"  let slow = head, fast = head;",
"  while (fast.next && fast.next.next) {",
"    slow = slow.next;","    fast = fast.next.next;","  }",
"  const secondHead = slow.next;","  slow.next = null;","  return secondHead;","}","",
"function merge(l1, l2) {",
"  const dummy = new ListNode(0);",
"  // This pointer will be used to append nodes to the tail of the",
"  // merged linked list.",
"  let tail = dummy;",
"  // Continually append the node with the smaller value from each",
"  // linked list to the merged linked list until one of the linked",
"  // lists has no more nodes to merge.",
"  while (l1 && l2) {",
"    if (l1.val < l2.val) {","      tail.next = l1;","      l1 = l1.next;",
"    } else {","      tail.next = l2;","      l2 = l2.next;","    }",
"    tail = tail.next;","  }",
"  // One of the two linked lists could still have nodes remaining.",
"  // Attach those nodes to the end of the merged linked list.",
"  tail.next = l1 || l2;","  return dummy.next;","}"
   ],
   map:{1:0,2:3,3:4,4:8,5:10,6:11,7:13,8:13,9:16,10:17,11:18,12:19,13:20,14:22,15:23,16:24,17:27,18:28,19:31,20:35,21:36,22:37,23:38,24:40,25:41,26:43,27:47,28:48}
  },
  java:{
   src:[
"public static ListNode sortLinkedList(ListNode head) {",
"    // If the linked list is empty or has only one element, it's already",
"    // sorted.",
"    if (head == null || head.next == null) {","        return head;","    }",
"    // Split the linked list into halves using the fast and slow pointer",
"    // technique.",
"    ListNode secondHead = splitList(head);",
"    // Recursively sort both halves.",
"    ListNode firstHalfSorted = sortLinkedList(head);",
"    ListNode secondHalfSorted = sortLinkedList(secondHead);",
"    // Merge the sorted sublists.",
"    return merge(firstHalfSorted, secondHalfSorted);","}","",
"public static ListNode splitList(ListNode head) {",
"    ListNode slow = head, fast = head;",
"    while (fast.next != null && fast.next.next != null) {",
"        slow = slow.next;","        fast = fast.next.next;","    }",
"    ListNode secondHead = slow.next;","    slow.next = null;","    return secondHead;","}","",
"public static ListNode merge(ListNode l1, ListNode l2) {",
"    ListNode dummy = new ListNode(0);",
"    // This pointer will be used to append nodes to the tail of the",
"    // merged linked list.",
"    ListNode tail = dummy;",
"    // Continually append the node with the smaller value from each",
"    // linked list to the merged linked list until one of the linked",
"    // lists has no more nodes to merge.",
"    while (l1 != null && l2 != null) {",
"        if (l1.val < l2.val) {","            tail.next = l1;","            l1 = l1.next;",
"        } else {","            tail.next = l2;","            l2 = l2.next;","        }",
"        tail = tail.next;","    }",
"    // One of the two linked lists could still have nodes remaining.",
"    // Attach those nodes to the end of the merged linked list.",
"    tail.next = (l1 != null) ? l1 : l2;","    return dummy.next;","}"
   ],
   map:{1:0,2:3,3:4,4:8,5:10,6:11,7:13,8:13,9:16,10:17,11:18,12:19,13:20,14:22,15:23,16:24,17:27,18:28,19:31,20:35,21:36,22:37,23:38,24:40,25:41,26:43,27:47,28:48}
  },
  csharp:{
   src:[
"public static ListNode SortLinkedList(ListNode head) {",
"    // If the linked list is empty or has only one element, it's already",
"    // sorted.",
"    if (head == null || head.Next == null) {","        return head;","    }",
"    // Split the linked list into halves using the fast and slow pointer",
"    // technique.",
"    ListNode secondHead = SplitList(head);",
"    // Recursively sort both halves.",
"    ListNode firstHalfSorted = SortLinkedList(head);",
"    ListNode secondHalfSorted = SortLinkedList(secondHead);",
"    // Merge the sorted sublists.",
"    return Merge(firstHalfSorted, secondHalfSorted);","}","",
"public static ListNode SplitList(ListNode head) {",
"    ListNode slow = head, fast = head;",
"    while (fast.Next != null && fast.Next.Next != null) {",
"        slow = slow.Next;","        fast = fast.Next.Next;","    }",
"    ListNode secondHead = slow.Next;","    slow.Next = null;","    return secondHead;","}","",
"public static ListNode Merge(ListNode l1, ListNode l2) {",
"    ListNode dummy = new ListNode(0);",
"    // This pointer will be used to append nodes to the tail of the",
"    // merged linked list.",
"    ListNode tail = dummy;",
"    // Continually append the node with the smaller value from each",
"    // linked list to the merged linked list until one of the linked",
"    // lists has no more nodes to merge.",
"    while (l1 != null && l2 != null) {",
"        if (l1.Val < l2.Val) {","            tail.Next = l1;","            l1 = l1.Next;",
"        } else {","            tail.Next = l2;","            l2 = l2.Next;","        }",
"        tail = tail.Next;","    }",
"    // One of the two linked lists could still have nodes remaining.",
"    // Attach those nodes to the end of the merged linked list.",
"    tail.Next = l1 ?? l2;","    return dummy.Next;","}"
   ],
   map:{1:0,2:3,3:4,4:8,5:10,6:11,7:13,8:13,9:16,10:17,11:18,12:19,13:20,14:22,15:23,16:24,17:27,18:28,19:31,20:35,21:36,22:37,23:38,24:40,25:41,26:43,27:47,28:48}
  }
 }
},
"candies":{
 langs:{
  python:{
   src:[
"def candies(ratings: List[int]) -> int:",
"    n = len(ratings)",
"    candies = [1] * n",
"    for i in range(1, n):",
"        if ratings[i] > ratings[i - 1]:",
"            candies[i] = candies[i - 1] + 1",
"    for i in range(n - 2, -1, -1):",
"        if ratings[i] > ratings[i + 1]:",
"            candies[i] = max(candies[i], candies[i + 1] + 1)",
"    return sum(candies)"
   ],
   map:{1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9}
  },
  javascript:{
   src:[
"function candies(ratings) {",
"  const n = ratings.length;",
"  const candies = new Array(n).fill(1);",
"  for (let i = 1; i < n; i++) {",
"    if (ratings[i] > ratings[i - 1]) {",
"      candies[i] = candies[i - 1] + 1;",
"    }","  }",
"  for (let i = n - 2; i >= 0; i--) {",
"    if (ratings[i] > ratings[i + 1]) {",
"      candies[i] = Math.max(candies[i], candies[i + 1] + 1);",
"    }","  }",
"  return candies.reduce((a, b) => a + b, 0);","}"
   ],
   map:{1:1,2:2,3:3,4:4,5:5,6:8,7:9,8:10,9:13}
  },
  java:{
   src:[
"public static int candies(int[] ratings) {",
"    int n = ratings.length;",
"    int[] candies = new int[n];",
"    Arrays.fill(candies, 1);",
"    for (int i = 1; i < n; i++) {",
"        if (ratings[i] > ratings[i - 1]) {",
"            candies[i] = candies[i - 1] + 1;",
"        }","    }",
"    for (int i = n - 2; i >= 0; i--) {",
"        if (ratings[i] > ratings[i + 1]) {",
"            candies[i] = Math.max(candies[i], candies[i + 1] + 1);",
"        }","    }",
"    int total = 0;",
"    for (int c : candies) total += c;",
"    return total;","}"
   ],
   map:{1:1,2:3,3:4,4:5,5:6,6:9,7:10,8:11,9:16}
  },
  csharp:{
   src:[
"public static int Candies(int[] ratings) {",
"    int n = ratings.Length;",
"    var candies = new int[n];",
"    Array.Fill(candies, 1);",
"    for (int i = 1; i < n; i++) {",
"        if (ratings[i] > ratings[i - 1]) {",
"            candies[i] = candies[i - 1] + 1;",
"        }","    }",
"    for (int i = n - 2; i >= 0; i--) {",
"        if (ratings[i] > ratings[i + 1]) {",
"            candies[i] = Math.Max(candies[i], candies[i + 1] + 1);",
"        }","    }",
"    return candies.Sum();","}"
   ],
   map:{1:1,2:3,3:4,4:5,5:6,6:9,7:10,8:11,9:14}
  }
 }
},
"gas-stations":{
 langs:{
  python:{
   src:[
"def gas_stations(gas: List[int], cost: List[int]) -> int:",
"    if sum(gas) < sum(cost):","        return -1",
"    start = tank = 0",
"    for i in range(len(gas)):",
"        tank += gas[i] - cost[i]",
"        if tank < 0:",
"            start, tank = i + 1, 0",
"    return start"
   ],
   map:{1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8}
  },
  javascript:{
   src:[
"function gasStations(gas, cost) {",
"  const totalGas = gas.reduce((a, b) => a + b, 0);",
"  const totalCost = cost.reduce((a, b) => a + b, 0);",
"  if (totalGas < totalCost) {","    return -1;","  }",
"  let start = 0, tank = 0;",
"  for (let i = 0; i < gas.length; i++) {",
"    tank += gas[i] - cost[i];",
"    if (tank < 0) {",
"      start = i + 1;","      tank = 0;","    }","  }",
"  return start;","}"
   ],
   map:{1:3,2:4,3:6,4:7,5:8,6:9,7:10,8:14}
  },
  java:{
   src:[
"public static int gasStations(int[] gas, int[] cost) {",
"    int totalGas = 0, totalCost = 0;",
"    for (int i = 0; i < gas.length; i++) {",
"        totalGas += gas[i];","        totalCost += cost[i];","    }",
"    if (totalGas < totalCost) {","        return -1;","    }",
"    int start = 0, tank = 0;",
"    for (int i = 0; i < gas.length; i++) {",
"        tank += gas[i] - cost[i];",
"        if (tank < 0) {",
"            start = i + 1;","            tank = 0;","        }","    }",
"    return start;","}"
   ],
   map:{1:6,2:7,3:9,4:10,5:11,6:12,7:13,8:17}
  },
  csharp:{
   src:[
"public static int GasStations(int[] gas, int[] cost) {",
"    int totalGas = 0, totalCost = 0;",
"    for (int i = 0; i < gas.Length; i++) {",
"        totalGas += gas[i];","        totalCost += cost[i];","    }",
"    if (totalGas < totalCost) {","        return -1;","    }",
"    int start = 0, tank = 0;",
"    for (int i = 0; i < gas.Length; i++) {",
"        tank += gas[i] - cost[i];",
"        if (tank < 0) {",
"            start = i + 1;","            tank = 0;","        }","    }",
"    return start;","}"
   ],
   map:{1:6,2:7,3:9,4:10,5:11,6:12,7:13,8:17}
  }
 }
},
"jump-to-the-end":{
 langs:{
  python:{
   src:[
"def jump_to_the_end(nums: List[int]) -> bool:",
"    destination = len(nums) - 1",
"    for i in range(len(nums) - 1, -1, -1):",
"        if i + nums[i] >= destination:",
"            destination = i",
"    return destination == 0"
   ],
   map:{1:1,2:2,3:3,4:4,5:5}
  },
  javascript:{
   src:[
"function jumpToTheEnd(nums) {",
"  let destination = nums.length - 1;",
"  for (let i = nums.length - 1; i >= 0; i--) {",
"    if (i + nums[i] >= destination) {",
"      destination = i;",
"    }","  }",
"  return destination === 0;","}"
   ],
   map:{1:1,2:2,3:3,4:4,5:7}
  },
  java:{
   src:[
"public static boolean jumpToTheEnd(int[] nums) {",
"    int destination = nums.length - 1;",
"    for (int i = nums.length - 1; i >= 0; i--) {",
"        if (i + nums[i] >= destination) {",
"            destination = i;",
"        }","    }",
"    return destination == 0;","}"
   ],
   map:{1:1,2:2,3:3,4:4,5:7}
  },
  csharp:{
   src:[
"public static bool JumpToTheEnd(int[] nums) {",
"    int destination = nums.Length - 1;",
"    for (int i = nums.Length - 1; i >= 0; i--) {",
"        if (i + nums[i] >= destination) {",
"            destination = i;",
"        }","    }",
"    return destination == 0;","}"
   ],
   map:{1:1,2:2,3:3,4:4,5:7}
  }
 }
},
"knapsack":{
 langs:{
  python:{
   src:[
"def knapsack(cap: int, weights: List[int], values: List[int]) -> int:",
"    n = len(values)",
"    dp = [[0 for _ in range(cap + 1)] for _ in range(n + 1)]",
"    for i in range(n - 1, -1, -1):",
"        for c in range(1, cap + 1):",
"            if weights[i] <= c:",
"                dp[i][c] = max(values[i] + dp[i + 1][c - weights[i]], dp[i + 1][c])",
"            else:",
"                dp[i][c] = dp[i + 1][c]",
"    return dp[0][cap]"
   ],
   map:{1:1,2:2,3:3,4:4,5:5,6:6,8:8,9:9}
  },
  javascript:{
   src:[
"function knapsack(cap, weights, values) {",
"  const n = values.length;",
"  const dp = Array.from({ length: n + 1 }, () => Array(cap + 1).fill(0));",
"  for (let i = n - 1; i >= 0; i--) {",
"    for (let c = 1; c <= cap; c++) {",
"      if (weights[i] <= c) {",
"        dp[i][c] = Math.max(values[i] + dp[i + 1][c - weights[i]], dp[i + 1][c]);",
"      } else {",
"        dp[i][c] = dp[i + 1][c];",
"      }","    }","  }",
"  return dp[0][cap];","}"
   ],
   map:{1:1,2:2,3:3,4:4,5:5,6:6,8:8,9:12}
  },
  java:{
   src:[
"public static int knapsack(int cap, int[] weights, int[] values) {",
"    int n = values.length;",
"    int[][] dp = new int[n + 1][cap + 1];",
"    for (int i = n - 1; i >= 0; i--) {",
"        for (int c = 1; c <= cap; c++) {",
"            if (weights[i] <= c) {",
"                dp[i][c] = Math.max(values[i] + dp[i + 1][c - weights[i]], dp[i + 1][c]);",
"            } else {",
"                dp[i][c] = dp[i + 1][c];",
"            }","        }","    }",
"    return dp[0][cap];","}"
   ],
   map:{1:1,2:2,3:3,4:4,5:5,6:6,8:8,9:12}
  },
  csharp:{
   src:[
"public static int Knapsack(int cap, int[] weights, int[] values) {",
"    int n = values.Length;",
"    var dp = new int[n + 1, cap + 1];",
"    for (int i = n - 1; i >= 0; i--) {",
"        for (int c = 1; c <= cap; c++) {",
"            if (weights[i] <= c) {",
"                dp[i, c] = Math.Max(values[i] + dp[i + 1, c - weights[i]], dp[i + 1, c]);",
"            } else {",
"                dp[i, c] = dp[i + 1, c];",
"            }","        }","    }",
"    return dp[0, cap];","}"
   ],
   map:{1:1,2:2,3:3,4:4,5:5,6:6,8:8,9:12}
  }
 }
},
"maximum-subarray-sum":{
 langs:{
  python:{
   src:[
"def maximum_subarray_sum(nums: List[int]) -> int:",
"    if not nums:","        return 0",
"    max_sum = current_sum = float('-inf')",
"    for num in nums:",
"        current_sum = max(current_sum + num, num)",
"        max_sum = max(max_sum, current_sum)",
"    return max_sum"
   ],
   map:{1:1,2:2,4:3,6:4,7:5,8:6,9:7}
  },
  javascript:{
   src:[
"function maximumSubarraySum(nums) {",
"  if (nums.length === 0) {","    return 0;","  }",
"  let maxSum = -Infinity, currentSum = -Infinity;",
"  for (const num of nums) {",
"    currentSum = Math.max(currentSum + num, num);",
"    maxSum = Math.max(maxSum, currentSum);",
"  }",
"  return maxSum;","}"
   ],
   map:{1:1,2:2,4:4,6:5,7:6,8:7,9:9}
  },
  java:{
   src:[
"public static int maximumSubarraySum(int[] nums) {",
"    if (nums.length == 0) {","        return 0;","    }",
"    int maxSum = Integer.MIN_VALUE, currentSum = Integer.MIN_VALUE;",
"    for (int num : nums) {",
"        currentSum = Math.max(currentSum + num, num);",
"        maxSum = Math.max(maxSum, currentSum);",
"    }",
"    return maxSum;","}"
   ],
   map:{1:1,2:2,4:4,6:5,7:6,8:7,9:9}
  },
  csharp:{
   src:[
"public static int MaximumSubarraySum(int[] nums) {",
"    if (nums.Length == 0) {","        return 0;","    }",
"    int maxSum = int.MinValue, currentSum = int.MinValue;",
"    foreach (int num in nums) {",
"        currentSum = Math.Max(currentSum + num, num);",
"        maxSum = Math.Max(maxSum, currentSum);",
"    }",
"    return maxSum;","}"
   ],
   map:{1:1,2:2,4:4,6:5,7:6,8:7,9:9}
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
let mergeResolved=new Set(),mergeFinal=null,quickSorted=new Set(),quickLen=0,quickOriginal=[];
let heapTreeG=null;
function paintHeap(heapArr,highlightTop){
 heapTreeG.innerHTML="";
 let n=heapArr.length;
 if(n===0){
  let t=el("text",{x:500,y:320,class:"ax-label"});t.textContent="(empty heap)";
  heapTreeG.append(t);return;
 }
 let top=190,levelH=85,pos=new Array(n);
 function layout(i,xMin,xMax,depth){
  if(i>=n)return;
  let x=(xMin+xMax)/2,y=top+depth*levelH;
  pos[i]={x,y};
  layout(2*i+1,xMin,x,depth+1);
  layout(2*i+2,x,xMax,depth+1);
 }
 layout(0,60,940,0);
 for(let i=1;i<n;i++){
  let p=pos[i],pp=pos[Math.floor((i-1)/2)];
  heapTreeG.appendChild(el("line",{x1:pp.x,y1:pp.y,x2:p.x,y2:p.y,class:"edge"}));
 }
 for(let i=0;i<n;i++){
  let p=pos[i],g=el("g",{class:"node"+(i===0&&highlightTop?" current":"")});
  g.append(el("circle",{cx:p.x,cy:p.y,r:22}));
  let t=el("text",{x:p.x,y:p.y});t.textContent=heapArr[i];
  g.append(t);heapTreeG.append(g);
 }
}
let spiralBoundary=null,spiralVisited=new Set();
function paintSpiralBoundaries(e){
 let s=spiralBoundary,hasRow=e.top!=null&&e.bottom!=null&&e.top<=e.bottom,hasCol=e.left!=null&&e.right!=null&&e.left<=e.right;
 s.top.style.display=hasRow?"":"none";
 if(hasRow){s.top.setAttribute("x",s.ox+s.n*s.cw/2);s.top.setAttribute("y",s.oy+e.top*s.cw-12);s.top.textContent="top";}
 s.bottom.style.display=hasRow?"":"none";
 if(hasRow){s.bottom.setAttribute("x",s.ox+s.n*s.cw/2);s.bottom.setAttribute("y",s.oy+(e.bottom+1)*s.cw+16);s.bottom.textContent="bottom";}
 s.left.style.display=hasCol?"":"none";
 if(hasCol){s.left.setAttribute("x",s.ox+e.left*s.cw-30);s.left.setAttribute("y",s.oy+s.m*s.cw/2);s.left.textContent="left";}
 s.right.style.display=hasCol?"":"none";
 if(hasCol){s.right.setAttribute("x",s.ox+(e.right+1)*s.cw+30);s.right.setAttribute("y",s.oy+s.m*s.cw/2);s.right.textContent="right";}
}
let reverseN_G=null,reverseR_G=null,reverseInitialN=0;
function paintDigitRow(g,value,y,highlight){
 g.innerHTML="";
 let s=String(value),neg=s.startsWith("-"),digits=(neg?s.slice(1):s).split("");
 let cw=54,total=(digits.length+(neg?1:0))*cw,ox=500-total/2,x=ox;
 if(neg){
  let t=el("text",{x:x+cw/2,y,class:"cell-val"});t.textContent="-";g.append(t);x+=cw;
 }
 digits.forEach((d,i)=>{
  let isLast=i===digits.length-1,cur=highlight==="last"&&isLast;
  let cell=el("g",{class:"cell"+(cur?" current":"")});
  cell.append(el("rect",{x,y:y-22,width:cw-6,height:44,rx:6}));
  let t=el("text",{x:x+(cw-6)/2,y,class:"cell-val"});t.textContent=d;
  cell.append(t);g.append(cell);x+=cw;
 });
}
function buildReverseDigits(n){
 svg.innerHTML="";nodes.clear();
 let lblN=el("text",{x:500,y:130,class:"ax-label"});lblN.textContent="n";
 let lblR=el("text",{x:500,y:300,class:"ax-label"});lblR.textContent="reversed_n";
 svg.append(lblN);svg.append(lblR);
 reverseN_G=el("g");reverseR_G=el("g");
 svg.append(reverseN_G);svg.append(reverseR_G);
 reverseInitialN=n;
 paintDigitRow(reverseN_G,n,190,"last");
 paintDigitRow(reverseR_G,0,360,null);
}
// Linked list (two pointers): slots 0 = dummy, 1..L = nodes, L+1 = NULL.
// Pointer labels are <g> elements moved with CSS transforms so they slide.
let llVals=[],llN=0,llG=null,llRowY=270,llDrop=110;
function llX(k){let slots=llVals.length+2,w=Math.min(110,920/slots);return (1000-slots*w)/2+w*k+w/2}
function llBoxW(){return Math.min(76,920/(llVals.length+2)-32)}
function llPtr(name,cls){
 let g=el("g",{class:"ll-ptr ll-move "+cls,"data-ptr":name});
 llG.append(g);return g;
}
function paintPtr(g,text,x,side,extra,visible){
 g.style.opacity=visible?1:0;
 g.style.transform=`translate(${x}px,0px)`;
 let key=text+"|"+side+"|"+extra;
 if(g.dataset.key===key)return;
 g.dataset.key=key;g.innerHTML="";
 let w=18+text.length*11,h=38,sign=side==="above"?-1:1;
 let near=llRowY+sign*30,labelEdge=llRowY+sign*(96+extra),cy=labelEdge+sign*h/2;
 g.append(el("line",{x1:0,y1:labelEdge,x2:0,y2:near+sign*4,class:"ll-ptr-line","marker-end":"url(#llArrow)"}));
 g.append(el("rect",{x:-w/2,y:cy-h/2,width:w,height:h,rx:6}));
 let t=el("text",{x:0,y:cy});t.textContent=text;g.append(t);
}
function buildLinkedList(values,n){
 svg.innerHTML="";nodes.clear();llVals=values;llN=n;
 let defs=el("defs"),m=el("marker",{id:"llArrow",viewBox:"0 0 10 10",refX:9,refY:5,markerWidth:7,markerHeight:7,orient:"auto-start-reverse"});
 m.append(el("path",{d:"M0,0 L10,5 L0,10 z",class:"ll-arrowhead"}));defs.append(m);svg.append(defs);
 llG=el("g");svg.append(llG);
 let bw=llBoxW(),L=values.length;
 for(let k=0;k<=L;k++){
  let end=k===L?llX(k+1)-32:llX(k+1)-bw/2-3;
  llG.append(el("line",{x1:llX(k)+bw/2,y1:llRowY,x2:end,y2:llRowY,class:"ll-edge","data-from":k,"marker-end":"url(#llArrow)"}));
 }
 for(let k=0;k<=L;k++){
  let g=el("g",{class:"ll-node ll-move"+(k===0?" dummy":""),"data-slot":k});
  g.append(el("rect",{x:llX(k)-bw/2,y:llRowY-28,width:bw,height:56,rx:8}));
  let t=el("text",{x:llX(k),y:llRowY});t.textContent=k===0?"0":values[k-1];g.append(t);
  llG.append(g);
 }
 let nt=el("text",{x:llX(L+1),y:llRowY,class:"ll-null"});nt.textContent="NULL";llG.append(nt);
 let nb=el("g",{class:"ll-nbox"});
 nb.append(el("rect",{x:40,y:500,width:110,height:52,class:"ll-nbox-key"}));
 nb.append(el("rect",{x:150,y:500,width:76,height:52,class:"ll-nbox-val"}));
 let k1=el("text",{x:95,y:526});k1.textContent="n";let k2=el("text",{x:188,y:526});k2.textContent=n;
 nb.append(k1,k2);llG.append(nb);
 let st=el("text",{x:252,y:526,class:"ll-step"});llG.append(st);
 llPtr("head","head");llPtr("slow","slow");llPtr("fast","fast");
 paintLinkedList(null);
}
function paintLinkedList(e){
 let L=llVals.length,bw=llBoxW();
 let started=e&&e.action!=="enter",removed=e?e.removed:null,target=null;
 if(e&&e.line===6&&e.action==="loop_end"&&e.slow!=null)target=e.slow+1;
 if(removed!=null)target=removed;
 llG.querySelectorAll(".ll-node").forEach(g=>{
  let k=+g.dataset.slot;
  g.classList.toggle("hidden",k===0&&!started);
  g.classList.toggle("target",k===target&&removed==null);
  g.classList.toggle("removed",k===removed);
  g.style.transform=k===removed?`translate(0px,${llDrop}px)`:"translate(0px,0px)";
 });
 llG.querySelectorAll(".ll-edge").forEach(ln=>{
  let k=+ln.dataset.from;
  ln.classList.toggle("hidden",(k===0&&!started)||k===removed);
  let to=removed!=null&&k===removed-1?k+2:k+1;
  ln.setAttribute("x2",to===L+1?llX(to)-32:llX(to)-bw/2-3);
  ln.classList.toggle("bypass",removed!=null&&k===removed-1);
 });
 let ptr=n=>llG.querySelector(`[data-ptr="${n}"]`);
 let ret=e&&e.action==="return",headSlot=ret?(removed===1?2:1):1;
 paintPtr(ptr("head"),ret?"dummy.next":"head",llX(headSlot),"above",0,true);
 let hasP=e&&e.slow!=null;
 let slowSide=hasP&&e.slow===0?"above":"below";
 paintPtr(ptr("slow"),"slow",llX(hasP?e.slow:0),slowSide,0,hasP);
 let stack=hasP&&slowSide==="below"&&e.fast===e.slow?60:0;
 paintPtr(ptr("fast"),"fast",llX(hasP?e.fast:0),"below",stack,hasP);
 llG.querySelector(".ll-step").textContent=e&&e.step!=null?`fast step ${e.step} / n + 1 = ${llN+1}`:"";
}
function llDescribe(p){return p==null?"—":p===0?"dummy (0)":p===llVals.length+1?"NULL":String(llVals[p-1])}
function llListText(removed){return llVals.filter((_,k)=>k+1!==removed).concat("NULL").join(" → ")}
function buildSpiralGrid(matrix){
 svg.innerHTML="";nodes.clear();
 let m=matrix.length,n=matrix[0].length;
 let W=1000,H=560,pad=60;
 let cw=Math.min((W-2*pad)/n,(H-2*pad)/m,80);
 let gw=cw*n,gh=cw*m,ox=(W-gw)/2,oy=(H-gh)/2+10;
 for(let r=0;r<m;r++)for(let c=0;c<n;c++){
  let id=r+"-"+c,x=ox+c*cw,y=oy+r*cw;
  nodes.set(id,{id,r,c});
  let g=el("g",{class:"cell","data-id":id});
  g.append(el("rect",{x,y,width:cw-4,height:cw-4,rx:5}));
  let t=el("text",{x:x+(cw-4)/2,y:y+(cw-4)/2,class:"cell-val"});t.textContent=matrix[r][c];
  g.append(t);svg.append(g);
 }
 spiralBoundary={ox,oy,cw,m,n,
  top:el("text",{class:"ax-label"}),bottom:el("text",{class:"ax-label"}),
  left:el("text",{class:"ax-label"}),right:el("text",{class:"ax-label"})};
 svg.append(spiralBoundary.top);svg.append(spiralBoundary.bottom);
 svg.append(spiralBoundary.left);svg.append(spiralBoundary.right);
 spiralVisited=new Set();
 paintSpiralBoundaries({top:null,bottom:null,left:null,right:null});
}
function buildHeapView(nums){
 svg.innerHTML="";nodes.clear();
 let n=nums.length,W=1000,pad=50;
 let cw=Math.min((W-2*pad)/n,110);
 let gw=cw*n,ox=(W-gw)/2,oy=55;
 for(let i=0;i<n;i++){
  let id="a"+i,x=ox+i*cw,y=oy;
  nodes.set(id,{id,i});
  let g=el("g",{class:"cell","data-id":id});
  g.append(el("rect",{x,y,width:cw-6,height:cw-6,rx:6}));
  let t=el("text",{x:x+(cw-6)/2,y:y+(cw-6)/2,class:"cell-val"});t.textContent=nums[i];
  g.append(t);svg.append(g);
 }
 let lbl=el("text",{x:ox+gw/2,y:oy-14,class:"ax-label"});lbl.textContent="nums";
 heapTreeG=el("g",{id:"heapTreeG"});
 svg.append(heapTreeG);
 paintHeap([],false);
}
function buildMergeTree(evs){
 svg.innerHTML="";nodes.clear();
 let initial=new Map();
 for(const e of evs){
  if(!e.node_id)continue;
  if(!nodes.has(e.node_id)){
   let parent=e.node_id==="root"?null:e.node_id.slice(0,e.node_id.lastIndexOf("-"));
   let d=e.node_id==="root"?0:e.node_id.split("-").length-1;
   nodes.set(e.node_id,{id:e.node_id,parent,d});
  }
  if(e.action==="enter"&&e.list&&!initial.has(e.node_id))initial.set(e.node_id,e.list);
 }
 let levels=[];
 for(const n of nodes.values())(levels[n.d]??=[]).push(n);
 let pos=new Map(),H=480,maxD=Math.max(levels.length-1,1);
 levels.forEach((lv,d)=>lv&&lv.forEach((n,k)=>pos.set(n.id,{x:1000*(k+1)/(lv.length+1),y:35+d*H/maxD})));
 for(const n of nodes.values())if(n.parent){let a=pos.get(n.parent),b=pos.get(n.id);svg.appendChild(el("line",{x1:a.x,y1:a.y,x2:b.x,y2:b.y,class:"edge","data-to":n.id}))}
 for(const n of nodes.values()){
  let p=pos.get(n.id),txt="["+(initial.get(n.id)||[]).join(",")+"]";
  let rx=Math.max(26,txt.length*4.2);
  let g=el("g",{class:"node","data-id":n.id});
  g.append(el("ellipse",{cx:p.x,cy:p.y,rx,ry:22}));
  let t=el("text",{x:p.x,y:p.y,class:"node-list"});t.textContent=txt;
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
function buildKnapsackGrid(n,cap){
 svg.innerHTML="";nodes.clear();
 let m=n+1,cCount=cap+1;
 let W=1000,H=560,padTop=45,padLeft=50,padRight=20,padBottom=15;
 let cw=Math.min((W-padLeft-padRight)/cCount,(H-padTop-padBottom)/m,64);
 let ox=padLeft,oy=padTop;
 for(let c=0;c<cCount;c++){
  let x=ox+c*cw+cw/2;
  let t=el("text",{x,y:oy-14,class:"hdr-idx"});t.textContent=c;
  svg.append(t);
 }
 for(let i=0;i<m;i++){
  let y=oy+i*cw+cw/2;
  let t=el("text",{x:ox-16,y,class:"hdr-idx"});t.textContent=i;
  svg.append(t);
 }
 for(let i=0;i<m;i++)for(let c=0;c<cCount;c++){
  let id=i+"-"+c,x=ox+c*cw,y=oy+i*cw;
  nodes.set(id,{id,i,c});
  let g=el("g",{class:"cell","data-id":id});
  g.append(el("rect",{x,y,width:cw-4,height:cw-4,rx:5}));
  let t=el("text",{x:x+(cw-4)/2,y:y+(cw-4)/2,class:"cell-val"});
  g.append(t);svg.append(g);
 }
}
let candyEls=null;
function paintCandies(c){
 let s=candyEls;
 s.line.setAttribute("points",c.map((v,k)=>`${s.ox+k*s.stepX+s.stepX/2},${s.oy-(v/s.maxC)*s.span}`).join(" "));
 c.forEach((v,k)=>{let y=s.oy-(v/s.maxC)*s.span;s.dots[k].setAttribute("cy",y);s.vals[k].setAttribute("y",y-14);s.vals[k].textContent=v});
}
function buildCandyChart(ratings,maxC){
 svg.innerHTML="";nodes.clear();
 let n=ratings.length,W=1000,H=560,ox=110,oy=H-90,span=H-190,stepX=(W-ox-60)/n;
 let yOf=v=>oy-(v/maxC)*span;
 candyEls={oy,span,maxC,ox,stepX,dots:[],vals:[]};
 svg.append(el("line",{x1:ox-20,y1:oy,x2:ox-20,y2:oy-span-30,class:"axis"}));
 svg.append(el("line",{x1:ox-20,y1:oy,x2:W-40,y2:oy,class:"axis"}));
 for(let v=0;v<=maxC;v++){let t=el("text",{x:ox-34,y:yOf(v)+4,class:"ax-tick"});t.textContent=v;svg.append(t)}
 let ylab=el("text",{x:ox-60,y:oy-span/2,class:"ax-label"});ylab.textContent="candies";svg.append(ylab);
 let xlab=el("text",{x:(ox+W-40)/2,y:oy+70,class:"ax-label"});xlab.textContent="ratings";svg.append(xlab);
 candyEls.line=el("polyline",{class:"candy-line",fill:"none"});svg.append(candyEls.line);
 for(let k=0;k<n;k++){
  let x=ox+k*stepX+stepX/2;
  nodes.set(""+k,{id:""+k,x});
  let r=el("text",{x,y:oy+26,class:"ax-val"});r.textContent=ratings[k];
  let idx=el("text",{x,y:oy+42,class:"ax-idx"});idx.textContent=k;
  svg.append(r);svg.append(idx);
  let d=el("circle",{cx:x,cy:yOf(1),r:6,class:"cdot"});svg.append(d);candyEls.dots.push(d);
  let v=el("text",{x,y:yOf(1)-14,class:"cval"});v.textContent=1;svg.append(v);candyEls.vals.push(v);
 }
 candyEls.cmp=el("text",{class:"cmp"});svg.append(candyEls.cmp);
 candyEls.ptrLine=el("line",{class:"cptr-line"});svg.append(candyEls.ptrLine);
 candyEls.ptr=el("g",{class:"cptr"});
 let box=el("rect",{x:-16,y:0,width:32,height:24,rx:5});
 let bt=el("text",{x:0,y:12,class:"cptr-txt"});bt.textContent="i";
 candyEls.ptr.append(box);candyEls.ptr.append(bt);svg.append(candyEls.ptr);
 paintCandies(new Array(n).fill(1));
}
function buildGasCells(gas,cost){
 svg.innerHTML="";nodes.clear();
 let n=gas.length,W=1000,H=560,pad=50;
 let cw=Math.min((W-2*pad)/n,130);
 let gw=cw*n,ox=(W-gw)/2,oy=H/2-40;
 for(let i=0;i<n;i++){
  let id=""+i,x=ox+i*cw,y=oy,net=gas[i]-cost[i];
  nodes.set(id,{id,i,cx:x+(cw-6)/2,cy:y});
  let g=el("g",{class:"cell","data-id":id});
  g.append(el("rect",{x,y,width:cw-6,height:cw-6,rx:6}));
  let h=el("text",{x:x+(cw-6)/2,y:y+(cw-6)/2-14,class:"cell-sub"});h.textContent="+"+gas[i]+" -"+cost[i];
  let t=el("text",{x:x+(cw-6)/2,y:y+(cw-6)/2+10,class:"cell-val"});t.textContent=(net>=0?"+":"")+net;
  g.append(h);g.append(t);svg.append(g);
 }
}
function buildSubarrayCells(nums){
 svg.innerHTML="";nodes.clear();
 let n=nums.length,W=1000,H=560,pad=50;
 let cw=Math.min((W-2*pad)/n,120);
 let gw=cw*n,ox=(W-gw)/2,oy=H/2-30;
 for(let i=0;i<n;i++){
  let id=""+i,x=ox+i*cw,y=oy;
  nodes.set(id,{id,i,cx:x+(cw-6)/2,cy:y});
  let g=el("g",{class:"cell","data-id":id});
  g.append(el("rect",{x,y,width:cw-6,height:cw-6,rx:6}));
  let t=el("text",{x:x+(cw-6)/2,y:y+(cw-6)/2,class:"cell-val"});t.textContent=nums[i];
  g.append(t);svg.append(g);
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
 }else if(kind==="kadane"){
  lblA.textContent="index i";lblB.textContent="curr_sum";lblC.textContent="max_sum";lblD.textContent="status";
  treeTitle.textContent="ARRAY SCAN";
  legend.innerHTML="🔴 current index　 🔵 current subarray　 🟢 best subarray";
 }else if(kind==="knapsack"){
  lblA.textContent="item i";lblB.textContent="cap c";lblC.textContent="res";lblD.textContent="status";
  treeTitle.textContent="DP TABLE (KNAPSACK)";
  legend.innerHTML="🔴 current cell　 🔵 dependency　 🟢 filled";
 }else if(kind==="jump"){
  lblA.textContent="index i";lblB.textContent="destination";lblC.textContent="res";lblD.textContent="status";
  treeTitle.textContent="ARRAY SCAN (RIGHT TO LEFT)";
  legend.innerHTML="🔴 current index　 🟡 destination　 🟢 can reach　 🔴 can't reach";
 }else if(kind==="candies"){
  lblA.textContent="index i";lblB.textContent="candies";lblC.textContent="res";lblD.textContent="status";
  treeTitle.textContent="CANDY CHART";
  legend.innerHTML="🔴 current child　 📈 candies per child";
 }else if(kind==="merge"){
  lblA.textContent="list / l1";lblB.textContent="slow,fast / l2";lblC.textContent="merged";lblD.textContent="status";
  treeTitle.textContent="MERGE SORT TREE";
  legend.innerHTML="🔴 current call　 🟢 sorted (resolved)　 🔵 visited";
 }else if(kind==="quicksort"){
  lblA.textContent="i";lblB.textContent="lo";lblC.textContent="result";lblD.textContent="status";
  treeTitle.textContent="QUICKSORT ARRAY";
  legend.innerHTML="🔴 scanning (i)　 🔵 boundary (lo)　 🟡 pivot　 🟢 in final position";
 }else if(kind==="quickselect"){
  lblA.textContent="i";lblB.textContent="lo";lblC.textContent="result";lblD.textContent="status";
  treeTitle.textContent="QUICKSELECT ARRAY";
  legend.innerHTML="🔴 scanning (i)　 🔵 boundary (lo)　 🟡 pivot　 🟢 in final position";
 }else if(kind==="heap"){
  lblA.textContent="index i";lblB.textContent="num";lblC.textContent="res";lblD.textContent="status";
  treeTitle.textContent="MIN-HEAP (top k largest)";
  legend.innerHTML="🔴 scanning index / heap top　 ⚪ heap node";
 }else if(kind==="spiral"){
  lblA.textContent="row";lblB.textContent="col";lblC.textContent="result";lblD.textContent="status";
  treeTitle.textContent="SPIRAL TRAVERSAL";
  legend.innerHTML="🔴 current cell　 🟢 visited";
 }else if(kind==="reverse_int"){
  lblA.textContent="n";lblB.textContent="digit";lblC.textContent="res";lblD.textContent="status";
  treeTitle.textContent="DIGIT REVERSAL";
  legend.innerHTML="🔴 digit just extracted";
 }else if(kind==="linked_list"){
  lblA.textContent="slow";lblB.textContent="fast";lblC.textContent="list (from dummy.next)";lblD.textContent="status";
  treeTitle.textContent="LINKED LIST · TWO POINTERS";
  legend.innerHTML="🟢 head　 🟣 slow　 🔵 fast　 ⬜ dummy　 🔴 node to remove";
 }else if(kind==="gas"){
  lblA.textContent="index i";lblB.textContent="tank";lblC.textContent="start";lblD.textContent="status";
  treeTitle.textContent="ARRAY SCAN (LEFT TO RIGHT)";
  legend.innerHTML="🔴 current index　 🟡 start candidate　 🔵 current window";
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
 }else if(kind==="kadane"){
  candidate.textContent=e.i==null?"—":e.i;
  used.textContent=e.curr_sum==null?"—":e.curr_sum;
  res.textContent=e.max_sum==null?"—":e.max_sum;
  stack.textContent=e.action;
  document.querySelectorAll(".cell").forEach(x=>x.classList.remove("current","in-current","in-best"));
  if(e.curr_start!=null&&e.i!=null)for(let k=e.curr_start;k<=e.i;k++)document.querySelector(`.cell[data-id="${k}"]`)?.classList.add("in-current");
  if(e.best_start!=null&&e.best_end!=null)for(let k=e.best_start;k<=e.best_end;k++)document.querySelector(`.cell[data-id="${k}"]`)?.classList.add("in-best");
  if(e.i!=null)document.querySelector(`.cell[data-id="${e.i}"]`)?.classList.add("current");
 }else if(kind==="knapsack"){
  candidate.textContent=e.i==null?"—":e.i;
  used.textContent=e.c==null?"—":e.c;
  res.textContent=e.res==null?"—":e.res;
  stack.textContent=e.action;
  if(e.action==="init"){
   let m=e.dp.length,cCount=e.dp[0].length;
   for(let r=0;r<m;r++)gridFinalized.add(r+"-0");
   for(let cc=0;cc<cCount;cc++)gridFinalized.add((m-1)+"-"+cc);
  }else if(e.action==="fill_fit"||e.action==="fill_nofit"){
   gridFinalized.add(e.i+"-"+e.c);
  }
  document.querySelectorAll(".cell").forEach(x=>x.classList.remove("current","filled","dep"));
  gridFinalized.forEach(id=>{
   let cell=nodes.get(id);
   let val=document.querySelector(`.cell[data-id="${CSS.escape(id)}"] .cell-val`);
   if(val)val.textContent=e.dp[cell.i][cell.c];
   document.querySelector(`.cell[data-id="${CSS.escape(id)}"]`)?.classList.add("filled");
  });
  if(e.action==="fill_fit"){
   document.querySelector(`.cell[data-id="${(e.i+1)+"-"+e.c}"]`)?.classList.add("dep");
   if(e.dep_c!=null)document.querySelector(`.cell[data-id="${(e.i+1)+"-"+e.dep_c}"]`)?.classList.add("dep");
   document.querySelector(`.cell[data-id="${e.i+"-"+e.c}"]`)?.classList.add("current");
  }else if(e.action==="fill_nofit"){
   document.querySelector(`.cell[data-id="${(e.i+1)+"-"+e.c}"]`)?.classList.add("dep");
   document.querySelector(`.cell[data-id="${e.i+"-"+e.c}"]`)?.classList.add("current");
  }
 }else if(kind==="jump"){
  candidate.textContent=e.i==null?"—":e.i;
  used.textContent=e.destination==null?"—":e.destination;
  res.textContent=e.res==null?"—":e.res;
  stack.textContent=e.action;
  document.querySelectorAll(".cell").forEach(x=>x.classList.remove("current","destination"));
  document.querySelectorAll(".jump-arc").forEach(x=>x.remove());
  if(e.destination!=null)document.querySelector(`.cell[data-id="${e.destination}"]`)?.classList.add("destination");
  if(e.i!=null)document.querySelector(`.cell[data-id="${e.i}"]`)?.classList.add("current");
  if(e.action==="condition"){
   let a=nodes.get(""+e.i),b=nodes.get(""+e.destination);
   if(a&&b){
    let midx=(a.cx+b.cx)/2,dy=Math.min(a.cy,b.cy)-40;
    let path=el("path",{d:`M${a.cx},${a.cy} Q${midx},${dy} ${b.cx},${b.cy}`,class:"jump-arc"+(e.reachable?" reachable":" unreachable"),fill:"none"});
    svg.appendChild(path);
   }
  }
 }else if(kind==="candies"){
  let s=candyEls,c=e.candies||[];
  candidate.textContent=e.i==null?"—":e.i;
  used.textContent=c.length?JSON.stringify(c):"—";
  res.textContent=e.res==null?"—":e.res;
  stack.textContent=e.action;
  paintCandies(c);
  let hasI=e.i!=null&&e.i>=0&&e.i<c.length;
  s.dots.forEach(d=>d.classList.remove("cur"));
  s.ptr.style.display=hasI?"":"none";
  s.ptrLine.style.display=hasI?"":"none";
  s.cmp.textContent="";
  if(hasI){
   let x=s.ox+e.i*s.stepX+s.stepX/2,yd=s.oy-(c[e.i]/s.maxC)*s.span,top=s.oy-s.span-45;
   s.ptr.setAttribute("transform",`translate(${x},${top})`);
   s.ptrLine.setAttribute("x1",x);s.ptrLine.setAttribute("x2",x);
   s.ptrLine.setAttribute("y1",top+24);s.ptrLine.setAttribute("y2",yd-10);
   s.dots[e.i].classList.add("cur");
  }
  if(e.action==="condition"&&e.cmp!=null){
   let L=e.phase==="pass1"?e.i-1:e.i,R=e.phase==="pass1"?e.i:e.i+1;
   let xL=s.ox+L*s.stepX+s.stepX/2,xR=s.ox+R*s.stepX+s.stepX/2;
   let yy=Math.min(s.oy-(c[L]/s.maxC)*s.span,s.oy-(c[R]/s.maxC)*s.span)-30;
   s.cmp.setAttribute("x",(xL+xR)/2);s.cmp.setAttribute("y",yy);
   s.cmp.textContent=e.cmp?"higher":"not higher";
  }
 }else if(kind==="merge"){
  candidate.textContent=e.list?JSON.stringify(e.list):(e.l1?JSON.stringify(e.l1):"—");
  used.textContent=(e.slow!=null)?`slow=${e.slow}, fast=${e.fast}`:(e.l2?JSON.stringify(e.l2):"—");
  if(e.node_id==="root"&&(e.action==="merged"||e.action==="base_case"))mergeFinal=e.list;
  res.textContent=mergeFinal?JSON.stringify(mergeFinal):(e.merged?JSON.stringify(e.merged):"—");
  stack.textContent=e.action;
  document.querySelectorAll(".node").forEach(x=>x.classList.remove("current","complete","visited"));
  if(e.action==="merged"||e.action==="base_case"){
   mergeResolved.add(e.node_id);
   let t=document.querySelector(`.node[data-id="${CSS.escape(e.node_id)}"] .node-list`);
   if(t&&e.list)t.textContent="["+e.list.join(",")+"]";
  }
  mergeResolved.forEach(id=>document.querySelector(`.node[data-id="${CSS.escape(id)}"]`)?.classList.add("complete"));
  if(e.node_id){let n=document.querySelector(`.node[data-id="${CSS.escape(e.node_id)}"]`);n?.classList.add("current");let c=e.node_id;while(c){document.querySelector(`.node[data-id="${CSS.escape(c)}"]`)?.classList.add("visited");c=nodes.get(c)?.parent}}
 }else if(kind==="quicksort"||kind==="quickselect"){
  candidate.textContent=e.i==null?"—":e.i;
  used.textContent=e.lo==null?"—":e.lo;
  res.textContent=e.res?JSON.stringify(e.res):"—";
  stack.textContent=e.action;
  e.array.forEach((v,k)=>{let t=document.querySelector(`.cell[data-id="${k}"] .cell-val`);if(t)t.textContent=v});
  if(e.action==="return_partition")quickSorted.add(e.lo);
  if(e.action==="base_case"&&e.left!=null&&e.left===e.right)quickSorted.add(e.left);
  document.querySelectorAll(".cell").forEach(x=>x.classList.remove("current","dep","destination","dim"));
  if(e.left!=null&&e.right!=null){
   for(let k=0;k<quickLen;k++)if((k<e.left||k>e.right)&&!quickSorted.has(k))document.querySelector(`.cell[data-id="${k}"]`)?.classList.add("dim");
  }
  quickSorted.forEach(idx=>document.querySelector(`.cell[data-id="${idx}"]`)?.classList.add("filled"));
  if(e.pivot!=null){
   let pivotPos=(e.action==="finalize"||e.action==="return_partition")?e.lo:e.right;
   if(pivotPos!=null)document.querySelector(`.cell[data-id="${pivotPos}"]`)?.classList.add("destination");
  }
  if(e.lo!=null)document.querySelector(`.cell[data-id="${e.lo}"]`)?.classList.add("dep");
  if(e.i!=null)document.querySelector(`.cell[data-id="${e.i}"]`)?.classList.add("current");
 }else if(kind==="heap"){
  candidate.textContent=e.i==null?"—":e.i;
  used.textContent=e.num==null?"—":e.num;
  res.textContent=e.res==null?"—":e.res;
  stack.textContent=e.action;
  document.querySelectorAll(".cell").forEach(x=>x.classList.remove("current"));
  if(e.i!=null)document.querySelector(`.cell[data-id="a${e.i}"]`)?.classList.add("current");
  paintHeap(e.heap,true);
 }else if(kind==="spiral"){
  candidate.textContent=e.row==null?"—":e.row;
  used.textContent=e.col==null?"—":e.col;
  res.textContent=e.result?JSON.stringify(e.result):"—";
  stack.textContent=e.action;
  document.querySelectorAll(".cell").forEach(x=>x.classList.remove("current"));
  if(e.action==="visit")spiralVisited.add(e.row+"-"+e.col);
  spiralVisited.forEach(id=>document.querySelector(`.cell[data-id="${CSS.escape(id)}"]`)?.classList.add("filled"));
  if(e.row!=null&&e.col!=null)document.querySelector(`.cell[data-id="${e.row}-${e.col}"]`)?.classList.add("current");
  paintSpiralBoundaries(e);
 }else if(kind==="reverse_int"){
  candidate.textContent=e.n==null?"—":e.n;
  used.textContent=e.digit==null?"—":e.digit;
  res.textContent=e.res==null?"—":e.res;
  stack.textContent=e.action;
  paintDigitRow(reverseN_G,e.n==null?0:e.n,190,e.action==="extract"?"last":null);
  paintDigitRow(reverseR_G,e.reversed_n==null?0:e.reversed_n,360,null);
 }else if(kind==="linked_list"){
  candidate.textContent=llDescribe(e.slow);
  used.textContent=llDescribe(e.fast);
  res.textContent=llListText(e.removed);
  stack.textContent=e.action;
  paintLinkedList(e);
 }else if(kind==="gas"){
  candidate.textContent=e.i==null?"—":e.i;
  used.textContent=e.tank==null?"—":e.tank;
  res.textContent=e.start==null?"—":e.start;
  stack.textContent=e.action;
  document.querySelectorAll(".cell").forEach(x=>x.classList.remove("current","in-current","destination"));
  if(e.start!=null&&e.i!=null&&e.i>=e.start)for(let k=e.start;k<=e.i;k++)document.querySelector(`.cell[data-id="${k}"]`)?.classList.add("in-current");
  if(e.start!=null)document.querySelector(`.cell[data-id="${e.start}"]`)?.classList.add("destination");
  if(e.i!=null)document.querySelector(`.cell[data-id="${e.i}"]`)?.classList.add("current");
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
 }else if(kind==="kadane"){
  candidate.textContent="—";used.textContent="—";res.textContent="—";stack.textContent="—";
  document.querySelectorAll(".cell").forEach(x=>x.classList.remove("current","in-current","in-best"));
 }else if(kind==="knapsack"){
  candidate.textContent="—";used.textContent="—";res.textContent="—";stack.textContent="—";
  gridFinalized=new Set();
  document.querySelectorAll(".cell").forEach(x=>{x.classList.remove("current","filled","dep");let v=x.querySelector(".cell-val");if(v)v.textContent=""});
 }else if(kind==="jump"){
  candidate.textContent="—";used.textContent="—";res.textContent="—";stack.textContent="—";
  document.querySelectorAll(".cell").forEach(x=>x.classList.remove("current","destination"));
  document.querySelectorAll(".jump-arc").forEach(x=>x.remove());
 }else if(kind==="candies"){
  candidate.textContent="—";used.textContent="—";res.textContent="—";stack.textContent="—";
  paintCandies(candyEls.dots.map(()=>1));
  candyEls.dots.forEach(d=>d.classList.remove("cur"));
  candyEls.ptr.style.display="none";candyEls.ptrLine.style.display="none";candyEls.cmp.textContent="";
 }else if(kind==="merge"){
  candidate.textContent="—";used.textContent="—";res.textContent="—";stack.textContent="—";
  mergeResolved=new Set();mergeFinal=null;
  buildMergeTree(events);
 }else if(kind==="quicksort"||kind==="quickselect"){
  candidate.textContent="—";used.textContent="—";res.textContent="—";stack.textContent="—";
  quickSorted=new Set();
  quickOriginal.forEach((v,k)=>{let t=document.querySelector(`.cell[data-id="${k}"] .cell-val`);if(t)t.textContent=v});
  document.querySelectorAll(".cell").forEach(x=>x.classList.remove("current","dep","destination","dim","filled"));
 }else if(kind==="heap"){
  candidate.textContent="—";used.textContent="—";res.textContent="—";stack.textContent="—";
  document.querySelectorAll(".cell").forEach(x=>x.classList.remove("current"));
  paintHeap([],false);
 }else if(kind==="spiral"){
  candidate.textContent="—";used.textContent="—";res.textContent="—";stack.textContent="—";
  spiralVisited=new Set();
  document.querySelectorAll(".cell").forEach(x=>x.classList.remove("current","filled"));
  paintSpiralBoundaries({top:null,bottom:null,left:null,right:null});
 }else if(kind==="reverse_int"){
  candidate.textContent="—";used.textContent="—";res.textContent="—";stack.textContent="—";
  paintDigitRow(reverseN_G,reverseInitialN,190,"last");
  paintDigitRow(reverseR_G,0,360,null);
 }else if(kind==="linked_list"){
  candidate.textContent="—";used.textContent="—";res.textContent=llListText(null);stack.textContent="—";
  paintLinkedList(null);
 }else if(kind==="gas"){
  candidate.textContent="—";used.textContent="—";res.textContent="—";stack.textContent="—";
  document.querySelectorAll(".cell").forEach(x=>x.classList.remove("current","in-current","destination"));
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
 else if(kind==="kadane"){renderSource(slug);buildSubarrayCells(d.nums)}
 else if(kind==="knapsack"){renderSource(slug);buildKnapsackGrid(d.weights.length,d.cap)}
 else if(kind==="jump"){renderSource(slug);buildSubarrayCells(d.nums)}
 else if(kind==="gas"){renderSource(slug);buildGasCells(d.gas,d.cost)}
 else if(kind==="candies"){renderSource(slug);buildCandyChart(d.ratings,Math.max(3,...d.events.map(e=>Math.max(...e.candies))))}
 else if(kind==="merge"){mergeResolved=new Set();mergeFinal=null;renderSource(slug);buildMergeTree(events)}
 else if(kind==="quicksort"){quickSorted=new Set();quickOriginal=d.nums;quickLen=d.nums.length;renderSource(slug);buildSubarrayCells(d.nums)}
 else if(kind==="quickselect"){
  quickSorted=new Set();quickOriginal=d.nums;quickLen=d.nums.length;
  renderSource(slug);buildSubarrayCells(d.nums);
  let targetIdx=d.nums.length-d.k,tc=nodes.get(""+targetIdx);
  if(tc){
   let t1=el("text",{x:tc.cx,y:tc.cy-34,class:"ax-label"});t1.textContent="target";
   let t2=el("text",{x:tc.cx,y:tc.cy-20,class:"ax-idx"});t2.textContent="n-k="+targetIdx;
   svg.append(t1);svg.append(t2);
  }
 }
 else if(kind==="heap"){renderSource(slug);buildHeapView(d.nums)}
 else if(kind==="spiral"){renderSource(slug);buildSpiralGrid(d.matrix)}
 else if(kind==="reverse_int"){renderSource(slug);buildReverseDigits(d.n)}
 else if(kind==="linked_list"){renderSource(slug);buildLinkedList(d.values,d.n)}
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
