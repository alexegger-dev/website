# j2-projects

Collection of reference implementations for interviews and public GitHub. Each subdirectory is intended to ship as its **own** repository (not a monorepo product). Layout mirrors production habits: FastAPI + LangGraph + Next/Svelte where relevant, Docker Compose, pytest/ruff, and GitHub Actions.

## Three-lane story (AI platform / infra)

Use this framing on your GitHub profile and in interviews: you build **reliability and control planes** around LLMs—not demo chatbots.

| Lane                              | What it proves                                                                            | Lead repos                                                                                                                               |
| --------------------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Gateway & reliability**         | OpenAI-compatible edge, policies, breakers, failover, idempotency, streaming backpressure | [llm-traffic-controller](llm-traffic-controller)                                                                                         |
| **FinOps & tenancy**              | Metering, budgets, operator UI, guarded client                                            | [llm-cost-guard](llm-cost-guard)                                                                                                         |
| **Agent runtime & observability** | Job isolation, cancel/deadlines, metrics, traces                                          | [agent-runtime-kernel](agent-runtime-kernel), [supervisor-squad-trace](supervisor-squad-trace), [policy-graph-guard](policy-graph-guard) |

**Suggested GitHub pin order (six):** `llm-traffic-controller` → `llm-cost-guard` → `agent-runtime-kernel` → `supervisor-squad-trace` → `policy-graph-guard` → `scout` (Rust differentiator). Keep other strong work public, but let pins tell the story first.

**Curation note:** Prefer pins + a clear profile README over deleting history. If you archive older demos, keep at least one repo per lane above so the narrative stays coherent.

Optional GitHub profile template (for `github.com/<user>/<user>`): [GITHUB_PROFILE_README.md](GITHUB_PROFILE_README.md).

## Index (curated for a public profile)

These **12** are the primary story for hiring managers; each maps to a different interview angle. **Badge URLs and profile links** must match your actual GitHub `OWNER/REPO`—rename the remote repository or update every README badge if the slug differs.

| Directory                                                | Public repo name (match on GitHub) | One-line pitch                                                                                                                              |
| -------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [langgraph-rag-workbench](langgraph-rag-workbench)       | `langgraph-rag-workbench`          | RAG + supervisor codegen; NDJSON streaming; **`RAG_WORKBENCH_MOCK=1`** runs the UI without OpenAI spend.                                    |
| [rolefit-coach](rolefit-coach)                           | `rolefit-coach`                    | Role Fit Coach — SvelteKit BFF, JWT httpOnly cookie, SSE LangGraph coach, Postgres.                                                         |
| [incident-copilot](incident-copilot)                     | `incident-copilot`                 | HITL incident workflow — `interrupt` / resume, mock mode for CI.                                                                            |
| [llm-traffic-controller](llm-traffic-controller)         | `llm-traffic-controller`           | OpenAI-compatible **gateway**: YAML policies, retries, circuit breakers, dual upstreams, idempotency hooks, Postgres metering, Prometheus.  |
| [agent-runtime-kernel](agent-runtime-kernel)             | `agent-runtime-kernel`             | Multi-tenant **job runtime** for LangGraph: scheduler, cancel, deadlines, sandboxed tools, `/metrics`.                                      |
| [horizon-task-decomposer](horizon-task-decomposer)       | `horizon-task-decomposer`          | Plan → validate → execute → verify over a JSON task DAG; HMAC approvals; NDJSON; **`HORIZON_MOCK`** offline path.                           |
| [supervisor-squad-trace](supervisor-squad-trace)         | `supervisor-squad-trace`           | Supervisor squad with **trace export** (NDJSON + optional OTLP) and a small Next.js console.                                                |
| [invoice-reconcile-pipeline](invoice-reconcile-pipeline) | `invoice-reconcile-pipeline`       | AP demo: PDF + CSV PO → **arq** worker, **rapidfuzz** explainable matches, exception queue, Postgres audit; FastAPI + Next.js + Compose.    |
| [scout](scout)                                           | `scout`                            | Rust TUI agent — allowlisted HTTP, optional LLM planner.                                                                                    |
| [workflow-contract-bridge](workflow-contract-bridge)     | `workflow-contract-bridge`         | Versioned JSON Schema webhook ingress; dead letters + replay; transactional outbox; FastAPI + SvelteKit admin.                              |
| [policy-graph-guard](policy-graph-guard)                 | `policy-graph-guard`               | LangGraph policy DAG around chat: PII/topic/tools/injection pre, LLM, JSON schema + secret post; MOCK + strict; OpenAPI.                    |
| [llm-cost-guard](llm-cost-guard)                         | `llm-cost-guard`                   | Multi-tenant LLM **metering + daily USD budgets**; Postgres, guarded OpenAI client, Next.js ops UI, LangGraph demo; prompts off by default. |

**Additional portfolio repositories** (same bar, shorter index): [adversarial-debate-judge](adversarial-debate-judge), [agent-eval-harness](agent-eval-harness), [langgraph-spec-runner](langgraph-spec-runner), [langgraph-dag-console](langgraph-dag-console), [mcp-tools-langgraph](mcp-tools-langgraph), [tool-router-bench](tool-router-bench), [vol-surface-lab](vol-surface-lab).

## Conventions

- **Python:** `uv`, `uv.lock`, ruff + pytest in CI.
- **Node:** **22 LTS** in CI and docs where a frontend exists; **Node 20+** is generally still expected to work—pin in each repo if you need a floor.
- **Secrets:** never commit `.env`; `.env.example` documents variables only. Never paste real API keys into docs—use a secrets manager or `export OPENAI_API_KEY=…` in your own shell. Treat every `dev-change-me` / `openssl rand` example as **local-only**.
