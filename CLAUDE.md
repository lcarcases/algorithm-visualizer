# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A visualizer for the "find all permutations" backtracking algorithm. The algorithm actually
executes in Python (FastAPI backend); the JavaScript frontend only replays and renders the
resulting execution trace (recursion tree, candidate/used/res state, call stack, and
synchronized source-code highlighting). There is no build step or package manager on either
side — plain Python and vanilla JS/HTML/CSS served via nginx.

## Commands

Run the whole stack:
```bash
docker compose up --build
```
Then open http://localhost:8080 (the SPA). The API alone is on http://localhost:8000
(e.g. http://localhost:8000/api/trace, http://localhost:8000/health).

There are no tests, linters, or formatters configured in this repo.

For quick backend iteration without Docker:
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```
For frontend iteration, just edit the static files and serve `frontend/` with any static
server (or reuse nginx via `docker compose up --build web`); there is no bundler/transpile step.

## Architecture

**Backend (`backend/main.py`)** is the source of truth for both the algorithm and the trace
format:
- `Tracer` accumulates a flat list of `events` and a `stack` (simulated call stack) as a
  module-level global `T`, reset per-request inside the `/api/trace` handler.
- `find_all_permutations` / `backtrack` are instrumented with `T.emit(line, action, candidate,
  used, res, node_id, message)` calls at each meaningful step (enter, statement, condition,
  append, call, return, etc.). The `line` argument is a manually-chosen line number that maps
  to a line in the frontend's mirrored source listing (see below) — it is *not* derived from
  actual Python source line numbers via introspection.
- `node_id` identifies a node in the recursion tree as a path string like `root-1-3` (parent
  id + chosen number), which the frontend uses to place/highlight nodes.
- `GET /api/trace` re-runs the algorithm fresh on a hardcoded input (`[1,2,3]`) and returns
  `{nums, result, events}`. There is no way to trace a different input; changing it requires
  editing the hardcoded call in `trace()`.

**Frontend (`frontend/app.js`)** is a single script with no framework:
- `src` (array of strings) is a hand-maintained, simplified mirror of the Python algorithm
  used only for the on-screen code panel. `map` translates the `line` numbers emitted by the
  backend into indices into `src`. **If you change instrumented line numbers in `main.py` or
  edit `src`'s line ordering, `map` must be updated to match, or source highlighting will
  silently point at the wrong line.**
- `build()` computes recursion-tree node positions from `nums` and renders them as raw SVG
  (no charting library).
- `render(e)` applies one trace event to the DOM: updates the state panel (candidate/used/
  res/call stack), toggles the active source line, and toggles node classes (`current`,
  `visited`, `complete`) on the SVG tree.
- Playback (`next`/`play`/`stop`/`reset`) just walks the `events` array fetched once from
  `/api/trace` on load — there is no live/streaming connection; the whole trace is
  precomputed server-side and replayed client-side at an adjustable speed.

**Serving**: `frontend/nginx.conf` serves the static files and reverse-proxies `/api/` to the
`api` service (see `docker-compose.yml`), so the frontend always calls same-origin `/api/...`
paths, never the backend host:port directly.

## Key coupling to watch

Three things must stay in sync whenever the algorithm or its trace changes: the instrumented
`T.emit(line, ...)` calls in `backend/main.py`, the `src` array in `frontend/app.js`, and the
`map` object in `frontend/app.js`. Changing one without the others breaks source-line
highlighting or omits new events from the visualization.
