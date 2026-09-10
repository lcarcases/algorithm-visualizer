# Dockerized Permutation Visualizer

Run:

```bash
docker compose up --build
```

Open http://localhost:8080

The algorithm itself runs in Python/FastAPI. JavaScript only renders the execution trace. The visualization shows the recursion tree, current call, candidate, used, res, call stack, and synchronized source-code highlighting.
