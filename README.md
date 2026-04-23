## Alexander Egger

**Mid-level AI / full-stack engineer** — I ship **RAG and agent workflows** alongside **real product surfaces** (Next.js, APIs, Postgres, AWS), with a bias toward **evaluation, tests, and measurable outcomes**.

**What I ship:** production-style pipelines over documents and APIs, multi-tenant patterns, and the glue between LLMs, data stores, and UIs — not one-off demos.

**Proof (from recent work):** plan review compressed from **hours to minutes** per document on jurisdiction-specific RAG; a logistics invoicing flow went from **~5 days to same-day** payment cycle; **pytest + Playwright** and a green CI pipeline gate deploys.

**Start here on GitHub:** [**llm-traffic-controller**](https://github.com/alexegger-dev/llm-traffic-controller) · [**langgraph-rag-workbench**](https://github.com/alexegger-dev/langgraph-rag-workbench) · [**supervisor-squad-trace**](https://github.com/alexegger-dev/supervisor-squad-trace) — then **profile pins** and the [**Repositories**](https://github.com/alexegger-dev?tab=repositories) tab.

[Email](mailto:alexegger224@gmail.com) · [LinkedIn](https://www.linkedin.com/in/alexegger-dev/) · [Portfolio](https://alexegger-dev.github.io/website/) · [@alexegger-dev](https://github.com/alexegger-dev)

---

### Why hire me

- **End-to-end delivery** — Frontend + services + data model + cloud deploy path; comfortable owning a slice of the product, not only the model call.
- **Production habits** — Schema validation, retries, structured outputs, traces (e.g. LangSmith-style workflows), integration/regression tests before ship.
- **Business-grounded AI** — Quant and ops background; I optimize for **cycle time and reliability** clients can feel, not leaderboard scores alone.

---

### Three-lane shorthand (how this repo maps to interviews)

| Lane                         | What it shows                                                      | Lead repos                                                                                                                                                                                                                                              |
| ---------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Gateway & reliability**    | OpenAI-compatible edge, policies, breakers, idempotency, streaming | [**llm-traffic-controller**](https://github.com/alexegger-dev/llm-traffic-controller), [**llm-cost-guard**](https://github.com/alexegger-dev/llm-cost-guard)                                                                                            |
| **RAG & agents**             | Retrieval, graphs, eval hooks, MCP / HITL where it matters         | [**langgraph-rag-workbench**](https://github.com/alexegger-dev/langgraph-rag-workbench), [**agent-eval-harness**](https://github.com/alexegger-dev/agent-eval-harness), [**incident-copilot**](https://github.com/alexegger-dev/incident-copilot)       |
| **Runtime, traces & policy** | Jobs, observability, guardrails                                    | [**agent-runtime-kernel**](https://github.com/alexegger-dev/agent-runtime-kernel), [**supervisor-squad-trace**](https://github.com/alexegger-dev/supervisor-squad-trace), [**policy-graph-guard**](https://github.com/alexegger-dev/policy-graph-guard) |

**Suggested GitHub pin order (six):** `llm-traffic-controller` → `llm-cost-guard` → `langgraph-rag-workbench` → `supervisor-squad-trace` → `policy-graph-guard` → `scout` — matches the pin order documented in your portfolio monorepo’s root `README.md` (this collection).

---

### Selected work (problem → build → quality signal)

#### [**llm-traffic-controller**](https://github.com/alexegger-dev/llm-traffic-controller)

- **Problem:** LLM traffic needs policy, resilience, and safe retries at the HTTP edge.
- **Built:** FastAPI gateway for OpenAI-compatible APIs — circuit breakers, Postgres idempotency, streaming backpressure, synthetic demo + `/dashboard` without provider keys.
- **Quality:** Exercises production edge concerns recruiters can probe in a system design interview.
- **Talking point:** “How I’d de-risk LLM calls before they hit the business logic.”

#### [**supervisor-squad-trace**](https://github.com/alexegger-dev/supervisor-squad-trace)

- **Problem:** Multi-step agents are hard to debug without normalized traces.
- **Built:** LangGraph supervisor squad with an OTel-style trace pipeline, Postgres persistence, Next.js viewer (histograms, `trace.json` export).
- **Quality:** Shows observability thinking beyond “print the prompt.”
- **Talking point:** “How I’d onboard engineers onto agent failures.”

#### [**workflow-contract-bridge**](https://github.com/alexegger-dev/workflow-contract-bridge)

- **Problem:** Webhook ingress must be versioned, testable, and recoverable.
- **Built:** Draft 2020-12 JSON Schema ingress, transactional outbox, dead letters + replay, Hypothesis-backed tests.
- **Quality:** Integration-shaped code with property tests — signals mature API ownership.
- **Talking point:** “Contracts and delivery guarantees for async workflows.”

#### [**langgraph-rag-workbench**](https://github.com/alexegger-dev/langgraph-rag-workbench)

- **Problem:** RAG needs comparable retrieval strategies and reproducible evals.
- **Built:** Workbench for benchmarking RAG on LangGraph — retrieval, rerankers, structured validation in one harness.
- **Quality:** Maps directly to “evaluation-driven development” on my resume.
- **Talking point:** “How I’d regress RAG when prompts or models change.”

#### [**mcp-tools-langgraph**](https://github.com/alexegger-dev/mcp-tools-langgraph)

- **Problem:** Agents need tool boundaries and a clear threat model.
- **Built:** stdio MCP server + LangGraph agent for structured repo-health reports; sandboxed tools, explicit threat model.
- **Quality:** Shows security-aware agent design for production conversations.
- **Talking point:** “MCP as a controlled capability surface.”

#### [**horizon-task-decomposer**](https://github.com/alexegger-dev/horizon-task-decomposer)

- **Problem:** Long-running automation needs governance and human approval.
- **Built:** Task DAG executor with HMAC-signed approval tokens, Mermaid/DOT export, NDJSON flows.
- **Quality:** HITL and auditability — pairs with incident and ops use cases.
- **Talking point:** “When to interrupt an agent vs. let it run.”

#### [**vol-surface-lab**](https://github.com/alexegger-dev/vol-surface-lab)

- **Problem:** Vol surfaces need correct interpolation and exportable analytics.
- **Built:** Full-stack implied-volatility workbench (PCHIP in total variance, Parquet export).
- **Quality:** Bridges quant intuition with shipped UI — differentiator vs. generic chat wrappers.
- **Talking point:** “From research notebook to tool others can run.”

---

### Background (compact)

<details>
<summary>Work history, education, certifications — expand</summary>

**Pre-seed startup (AEC / construction tech) — Founding engineer (Oct. 2025 – present)** — Multi-tenant SaaS for blueprint analysis, compliance checks, and document generation for municipalities, AEC firms, and contractors; production RAG on LangGraph; Next.js, Python/TypeScript, Postgres/pgvector, AWS ECS, GitHub Actions; pytest + Playwright gating deploys.

**Independent consultant — AI automation engineer (Feb. 2025 – Sep. 2025)** — OCR + rules invoicing pipeline (~5 day → same-day payment cycle for a logistics client); n8n CRM automation; eval harnesses on prompt/model changes; roadmaps for SMBs across multiple industries.

**APX Financial Analytics — Full stack, financial analytics (Jan. 2024 – Dec. 2024)** — Nuxt + Python platform for trading teams; IBKR / ORATS / CBOE integrations; volatility and ML workstreams; automated reporting to remove weekly manual load.

**Independent research — Quantitative analyst (Feb. 2023 – Dec. 2023)** — Options microstructure, vol surfaces, systematic design; backtests and out-of-sample validation.

**Education:** Park University — Business & Finance coursework (2022–2025).

**Certifications (resume):** DeepLearning.AI — Deep Learning Specialization; Stanford Online — Data Science & Machine Learning; HarvardX — Machine Learning.

**Stack:** Python, TypeScript, SQL/Postgres, Docker, GitHub Actions, LangGraph/LangChain, AWS (EC2/S3/ECS), Next.js/Nuxt/Svelte. **More repos:** [browse all](https://github.com/alexegger-dev?tab=repositories).

</details>
