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
let events=[],i=0,playing=false,timer,nums=[1,2,3],nodes=new Map(),currentMap={},currentSlug=null,currentLang="python",kind="tree",gN=0,gEdges=[];
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
