# j2-projects

Portfolio of **reference implementations** for interviews and public GitHub. Each **named project** is meant to ship as its **own** repository (not a monorepo product). In a full **j2-projects** workspace, sources often live under paths like `projects/full-stack/<repo>/`; in a docs-only checkout of `personal/`, treat the links below as **logical repo names** that match GitHub — clone from [@alexegger-dev](https://github.com/alexegger-dev?tab=repositories) if local folders are absent. Layout mirrors production habits: FastAPI + LangGraph + Next/Svelte where relevant, Docker Compose, **pytest/ruff**, and **GitHub Actions**.

**Positioning:** Mid-level **AI + full-stack** engineer — RAG/agents **and** shipped UIs, APIs, and data layers, with emphasis on **tests, traces, and measurable outcomes** (aligned with [resume.latex](resume.latex)).

Optional GitHub profile copy (for `github.com/<user>/<user>`): [GITHUB_PROFILE_README.md](GITHUB_PROFILE_README.md).

---

## Start here (~10 minutes for interviewers)

Skim these in order to validate **systems depth**, **full-stack delivery**, and a **clear differentiator**.

| Order | Repo                                                 | What it proves                                                                                       |
| ----- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 1     | [llm-traffic-controller](llm-traffic-controller)     | **Gateway / reliability** — policies, breakers, idempotency, streaming, ops-shaped API surface       |
| 2     | [langgraph-rag-workbench](langgraph-rag-workbench)   | **RAG + eval mindset** — comparable retrieval paths, mock-friendly runs, regression-friendly harness |
| 3     | [policy-graph-guard](policy-graph-guard)             | **Guardrails + LangGraph** — policy DAG, schema/secret handling, strict + mock modes                 |
| 4     | [rolefit-coach](rolefit-coach)                       | **Full-stack product** — SvelteKit BFF, auth cookies, SSE + LangGraph, Postgres                      |
| 5     | [workflow-contract-bridge](workflow-contract-bridge) | **Integration platform** — versioned contracts, outbox, DLQ/replay, property-style tests             |
| 6     | [scout](scout)                                       | **Differentiator** — Rust TUI, allowlisted tools, systems-adjacent agent design                      |

**If you only have three slots:** [llm-traffic-controller](llm-traffic-controller), [langgraph-rag-workbench](langgraph-rag-workbench), [supervisor-squad-trace](supervisor-squad-trace) — matches the quick links on the profile README.

---

## How to evaluate my work

- **CI:** GitHub Actions runs **ruff + pytest** (and frontend checks where applicable) on push/PR.
- **Local:** Each repo has a **README** with `uv` / `pnpm` or `npm`, **Docker Compose** where services matter, and **`.env.example`** (no real secrets — use your own keys or documented mock flags).
- **Depth signal:** Look for **integration tests**, **Hypothesis** where noted, **OpenAPI** / schema boundaries, and **mock modes** (e.g. `*_MOCK=1`) so reviewers can run without spend.

---

## Three lanes (interview framing)

Use this story in screens: you build **reliability and product around LLMs** — gateways, data paths, guardrails, and shippable UIs — not demo-only chatbots.

| Lane                         | What it proves                                             | Lead repos                                                                                                                               |
| ---------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Gateway & FinOps**         | OpenAI-compatible edge, metering, budgets, guarded clients | [llm-traffic-controller](llm-traffic-controller), [llm-cost-guard](llm-cost-guard)                                                       |
| **RAG, agents & evals**      | Graphs, retrieval, HITL, regression harnesses              | [langgraph-rag-workbench](langgraph-rag-workbench), [agent-eval-harness](agent-eval-harness), [incident-copilot](incident-copilot)       |
| **Runtime, traces & policy** | Jobs, cancel/deadlines, trace export, policy graphs        | [agent-runtime-kernel](agent-runtime-kernel), [supervisor-squad-trace](supervisor-squad-trace), [policy-graph-guard](policy-graph-guard) |

**Suggested GitHub pin order (six):** `llm-traffic-controller` → `llm-cost-guard` → `langgraph-rag-workbench` → `supervisor-squad-trace` → `policy-graph-guard` → `scout` (Rust differentiator). Keep other repos public; **pins + profile README** carry the first impression.

**Curation:** Prefer pins + a clear profile README over deleting history. If you archive older demos, keep at least one strong repo per lane.

---

## Index — primary portfolio (high signal)

These directories map to distinct interview angles. **Badge URLs and GitHub `OWNER/REPO` slugs** must match what you publish — rename remotes or update badges if names differ.

| Directory                                            | Public repo name           | One-line pitch                                                                                                                  |
| ---------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| [llm-traffic-controller](llm-traffic-controller)     | `llm-traffic-controller`   | OpenAI-compatible **gateway**: YAML policies, retries, circuit breakers, idempotency, Postgres metering, Prometheus             |
| [llm-cost-guard](llm-cost-guard)                     | `llm-cost-guard`           | Multi-tenant **metering + daily USD budgets**; Postgres, guarded client, Next.js ops UI; LangGraph demo; prompts off by default |
| [langgraph-rag-workbench](langgraph-rag-workbench)   | `langgraph-rag-workbench`  | RAG + supervisor patterns; **`RAG_WORKBENCH_MOCK=1`** runs UI without OpenAI spend                                              |
| [supervisor-squad-trace](supervisor-squad-trace)     | `supervisor-squad-trace`   | Supervisor squad + **trace export** (NDJSON / OTLP) and Next.js console                                                         |
| [policy-graph-guard](policy-graph-guard)             | `policy-graph-guard`       | LangGraph **policy DAG**: PII/topic/tools/injection → LLM → JSON schema + secret post; MOCK + strict; OpenAPI                   |
| [agent-runtime-kernel](agent-runtime-kernel)         | `agent-runtime-kernel`     | Multi-tenant **job runtime** for LangGraph: scheduler, cancel, deadlines, sandboxed tools, `/metrics`                           |
| [incident-copilot](incident-copilot)                 | `incident-copilot`         | HITL incident flow — `interrupt` / resume, mock mode for CI                                                                     |
| [workflow-contract-bridge](workflow-contract-bridge) | `workflow-contract-bridge` | Versioned JSON Schema webhook ingress; outbox; DLQ + replay; FastAPI + SvelteKit admin                                          |
| [rolefit-coach](rolefit-coach)                       | `rolefit-coach`            | SvelteKit BFF, JWT httpOnly cookie, SSE LangGraph coach, Postgres                                                               |

**More repos (same bar, shorter list):** [horizon-task-decomposer](horizon-task-decomposer), [invoice-reconcile-pipeline](invoice-reconcile-pipeline), [mcp-tools-langgraph](mcp-tools-langgraph), [agent-eval-harness](agent-eval-harness), [adversarial-debate-judge](adversarial-debate-judge), [langgraph-spec-runner](langgraph-spec-runner), [langgraph-dag-console](langgraph-dag-console), [tool-router-bench](tool-router-bench), [vol-surface-lab](vol-surface-lab).

---

## Conventions

- **Python:** `uv`, `uv.lock`, ruff + pytest in CI.
- **Node:** **22 LTS** in CI and docs where a frontend exists; **Node 20+** generally still works — pin per repo if you need a floor.
- **Secrets:** Never commit `.env`; `.env.example` documents variables only. Never paste real API keys into docs. Treat `dev-change-me` / `openssl rand` examples as **local-only**.
