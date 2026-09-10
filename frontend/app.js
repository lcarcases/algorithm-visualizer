// Per-problem frontend source mirror + line->src-index map (see CLAUDE.md
// "Key coupling to watch"). Add an entry here whenever a new backend problem
// is registered in backend/problems/ so its source panel/highlighting works;
// problems without an entry still run, just without a source-code panel.
const PROBLEM_UI={
"find-all-permutations":{
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
 map:{1:0,2:1,3:2,4:3,5:4,6:5,8:7,9:8,10:9,12:11,13:12,14:13,15:14,17:16,19:18,20:19}
}
};
let events=[],i=0,playing=false,timer,nums=[1,2,3],nodes=new Map(),currentMap={};
function esc(s){return s.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]))}
function el(n,a={}){let x=document.createElementNS("http://www.w3.org/2000/svg",n);for(let[k,v]of Object.entries(a))x.setAttribute(k,v);return x}
function renderSource(slug){
 let ui=PROBLEM_UI[slug];
 currentMap=ui?ui.map:{};
 let src=ui?ui.src:["# No source preview available for this problem yet."];
 code.innerHTML=src.map((x,idx)=>`<span class="line" data-n="${idx+1}" data-i="${idx}">${esc(x)}</span>`).join("");
}
function build(){
 svg.innerHTML="";nodes.clear();let levels=[];
 function add(id,path,parent=null){let d=path.length;(levels[d]??=[]).push({id,path,parent});nodes.set(id,{id,path,parent,d});if(d<nums.length)for(let n of nums)if(!path.includes(n))add(id+"-"+n,[...path,n],id)}
 add("root",[]);let pos=new Map(),H=530;
 levels.forEach((lv,d)=>lv.forEach((n,k)=>pos.set(n.id,{x:1000*(k+1)/(lv.length+1),y:35+d*H/nums.length})));
 for(let n of nodes.values())if(n.parent){let a=pos.get(n.parent),b=pos.get(n.id);svg.appendChild(el("line",{x1:a.x,y1:a.y,x2:b.x,y2:b.y,class:"edge","data-to":n.id}))}
 for(let n of nodes.values()){let p=pos.get(n.id),g=el("g",{class:"node","data-id":n.id});g.append(el("circle",{cx:p.x,cy:p.y,r:24}));let t=el("text",{x:p.x,y:p.y});t.textContent="["+n.path.join(", ")+"]";g.append(t);svg.append(g)}
}
function render(e){
 candidate.textContent=JSON.stringify(e.candidate);used.textContent=e.used.length?"{"+e.used.join(", ")+"}":"∅";res.textContent=JSON.stringify(e.res);stack.textContent=e.call_stack.join(" → ")||"—";action.textContent=e.message;progress.textContent=`${i} / ${events.length}`;
 document.querySelectorAll(".line").forEach(x=>x.classList.remove("active"));document.querySelector(`.line[data-i="${currentMap[e.line]}"]`)?.classList.add("active");
 document.querySelectorAll(".node").forEach(x=>x.classList.remove("current","complete","visited"));
 for(let n of nodes.values())if(n.path.length===nums.length&&e.res.some(r=>JSON.stringify(r)===JSON.stringify(n.path)))document.querySelector(`.node[data-id="${CSS.escape(n.id)}"]`)?.classList.add("complete");
 if(e.node_id){let n=document.querySelector(`.node[data-id="${CSS.escape(e.node_id)}"]`);n?.classList.add("current");let c=e.node_id;while(c){document.querySelector(`.node[data-id="${CSS.escape(c)}"]`)?.classList.add("visited");c=nodes.get(c)?.parent}}
}
function next(){if(i>=events.length){stop();return}render(events[i++]);if(i>=events.length)stop()}
function play(){if(playing)return;playing=true;document.getElementById("play").textContent="⏸ Pause";(function tick(){if(!playing)return;next();if(playing)timer=setTimeout(tick,+speed.value)})()}
function stop(){playing=false;clearTimeout(timer);document.getElementById("play").textContent="▶ Play"}
function reset(){stop();i=0;progress.textContent=`0 / ${events.length}`;candidate.textContent="[]";used.textContent="∅";res.textContent="[]";stack.textContent="—";action.textContent="Ready.";document.querySelectorAll(".line,.node").forEach(x=>x.classList.remove("active","current","complete","visited"))}
function loadProblem(slug,title,category){
 stop();
 fetch(`/api/trace/${slug}`).then(r=>r.json()).then(d=>{
  nums=d.nums;events=d.events;i=0;
  renderSource(slug);build();reset();
  document.querySelectorAll(".problem-item").forEach(x=>x.classList.toggle("active",x.dataset.slug===slug));
  document.getElementById("problemTitle").textContent=title;
  document.getElementById("problemSubtitle").textContent=`Python · ${category} · Recursion Tree`;
  document.getElementById("descText").textContent=d.description||"No description available for this problem yet.";
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
