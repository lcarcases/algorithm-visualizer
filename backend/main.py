from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from problems import CATEGORY_ORDER, PROBLEMS, get_problem

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"])


@app.get("/api/problems")
def list_problems():
    by_category = {name: [] for name in CATEGORY_ORDER}
    for p in PROBLEMS:
        by_category[p["category"]].append({"slug": p["slug"], "title": p["title"]})
    return {
        "categories": [
            {"name": name, "problems": by_category[name]} for name in CATEGORY_ORDER
        ]
    }


@app.get("/api/trace/{slug}")
def trace(slug: str, scenario: str | None = None):
    problem = get_problem(slug)
    if problem is None:
        raise HTTPException(status_code=404, detail=f"Unknown problem: {slug}")
    return {
        **problem["run"](scenario),
        "description": problem.get("description", ""),
        "scenarios": problem.get("scenarios", []),
    }


@app.get("/api/trace")
def trace_default():
    problem = get_problem("find-all-permutations")
    return {
        **problem["run"](),
        "description": problem.get("description", ""),
        "scenarios": problem.get("scenarios", []),
    }


@app.get("/health")
def health():
    return {"status": "ok"}
