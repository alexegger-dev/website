# portfolio-website

Static hiring site (Next.js static export, Tailwind v4) for interviews and public GitHub. **`lib/site-content.ts`** is the page copy; **`lib/site-config.ts`** holds `GITHUB_OWNER` / repo slugs—keep them aligned with your real **`OWNER/REPO`** on GitHub.

## Three-lane story (AI platform / infra)

Use this framing on your GitHub profile and in interviews: you build **reliability and control planes** around LLMs—not demo chatbots.

| Lane                              | What it proves                                                                            | Lead repos                                                                                                                                                                                                                               |
| --------------------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Gateway & reliability**         | OpenAI-compatible edge, policies, breakers, failover, idempotency, streaming backpressure | [llm-traffic-controller](https://github.com/alexegger224/llm-traffic-controller)                                                                                                                                                         |
| **FinOps & tenancy**              | Metering, budgets, operator UI, guarded client                                            | [llm-cost-guard](https://github.com/alexegger224/llm-cost-guard)                                                                                                                                                                         |
| **Agent runtime & observability** | Job isolation, cancel/deadlines, metrics, traces                                          | [agent-runtime-kernel](https://github.com/alexegger224/agent-runtime-kernel), [supervisor-squad-trace](https://github.com/alexegger224/supervisor-squad-trace), [policy-graph-guard](https://github.com/alexegger224/policy-graph-guard) |

**Suggested GitHub pin order (six):** `llm-traffic-controller` → `llm-cost-guard` → `agent-runtime-kernel` → `supervisor-squad-trace` → `policy-graph-guard` → `scout` (Rust differentiator). Keep other strong work public, but let pins tell the story first.

**Curation note:** Prefer pins + a clear profile README over deleting history. If you archive older demos, keep at least one repo per lane above so the narrative stays coherent.

Optional GitHub profile template (for `github.com/<user>/<user>`): see your **`GITHUB_PROFILE_README.md`** in the `personal` repo (or equivalent).

## Index (curated for a public profile)

These **12** are the primary story for hiring managers; each maps to a different interview angle. **Badge URLs and profile links** must match your actual GitHub `OWNER/REPO`—rename the remote repository or update `site-config` / this table if the slug differs.

| Repo                                                                                     | One-line pitch                                                                                                                                    |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| [langgraph-rag-workbench](https://github.com/alexegger224/langgraph-rag-workbench)       | RAG + supervisor codegen; NDJSON streaming; **`RAG_WORKBENCH_MOCK=1`** runs the UI without OpenAI spend.                                          |
| [rolefit-coach](https://github.com/alexegger224/rolefit-coach)                           | Role Fit Coach — SvelteKit BFF, JWT httpOnly cookie, SSE LangGraph coach, Postgres.                                                               |
| [incident-copilot](https://github.com/alexegger224/incident-copilot)                     | HITL incident workflow — `interrupt` / resume, mock mode for CI.                                                                                  |
| [llm-traffic-controller](https://github.com/alexegger224/llm-traffic-controller)         | OpenAI-compatible **gateway**: YAML policies, retries, circuit breakers, dual upstreams, idempotency hooks, Postgres metering, Prometheus.        |
| [agent-runtime-kernel](https://github.com/alexegger224/agent-runtime-kernel)             | Multi-tenant **job runtime** for LangGraph: scheduler, cancel, deadlines, sandboxed tools, `/metrics`.                                            |
| [horizon-task-decomposer](https://github.com/alexegger224/horizon-task-decomposer)       | Plan → validate → execute → verify over a JSON task DAG; HMAC approvals; NDJSON; **`HORIZON_MOCK`** offline path.                                 |
| [supervisor-squad-trace](https://github.com/alexegger224/supervisor-squad-trace)         | Supervisor squad with **trace export** (NDJSON + optional OTLP) and a small Next.js console.                                                      |
| [invoice-reconcile-pipeline](https://github.com/alexegger224/invoice-reconcile-pipeline) | AP demo: PDF + CSV PO → **arq** worker, **rapidfuzz** explainable matches, exception queue, Postgres audit; FastAPI + Next.js + Compose.          |
| [scout](https://github.com/alexegger224/scout)                                           | Rust TUI agent — allowlisted HTTP, optional LLM planner.                                                                                          |
| [workflow-contract-bridge](https://github.com/alexegger224/workflow-contract-bridge)     | Versioned JSON Schema webhook ingress; dead letters + replay; transactional outbox; FastAPI + SvelteKit admin.                                    |
| [policy-graph-guard](https://github.com/alexegger224/policy-graph-guard)                 | LangGraph policy DAG around chat: PII/topic/tool-use and injection checks pre-LLM, JSON schema post-LLM, guarded outputs; MOCK + strict; OpenAPI. |
| [llm-cost-guard](https://github.com/alexegger224/llm-cost-guard)                         | Multi-tenant LLM **metering + daily USD budgets**; Postgres, guarded OpenAI client, Next.js ops UI, LangGraph demo; prompts off by default.       |

**Additional portfolio repositories** (same bar, shorter index): [adversarial-debate-judge](https://github.com/alexegger224/adversarial-debate-judge), [agent-eval-harness](https://github.com/alexegger224/agent-eval-harness), [langgraph-spec-runner](https://github.com/alexegger224/langgraph-spec-runner), [langgraph-dag-console](https://github.com/alexegger224/langgraph-dag-console), [mcp-tools-langgraph](https://github.com/alexegger224/mcp-tools-langgraph), [tool-router-bench](https://github.com/alexegger224/tool-router-bench), [vol-surface-lab](https://github.com/alexegger224/vol-surface-lab).

## Conventions

- **Node:** **22 LTS** in CI (`.nvmrc`); pin in `package.json` if you need a floor.
- **Commands:** `npm ci`, `npm run dev`, `npm run lint`, `npm run test`, `npm run build` → static files in **`out/`**.
- **CI:** [`.github/workflows/ci.yml`](.github/workflows/ci.yml) on every push/PR.
- **Pages:** [`.github/workflows/pages.yml`](.github/workflows/pages.yml) on **`main`**; **Settings → Pages → GitHub Actions**; workflows set `NEXT_PUBLIC_SITE_URL` / `NEXT_PUBLIC_BASE_PATH` from the repository owner and name (project Pages under `/<repo>/`). Custom domain or root hosting: clear `NEXT_PUBLIC_BASE_PATH` and set `NEXT_PUBLIC_SITE_URL` in the workflow `env` or repo variables.
- **Secrets:** never commit `.env`; [`.env.example`](.env.example) documents public build vars only. Never paste real API keys into docs. See [SECURITY.md](SECURITY.md).

## Pages shows the README instead of the site

That happens when **GitHub Pages is not publishing your built `out/` folder**—there is no `index.html` at the published root, so GitHub falls back to the repository README.

1. **Use the Pages URL, not the repo URL:** open `https://<OWNER>.github.io/<REPO>/` (e.g. `https://alexegger224.github.io/portfolio-website/`). `https://github.com/<OWNER>/<REPO>` is the code browser and will always show the README.
2. **Settings → Pages → Build and deployment:** source must be **GitHub Actions**, not **Deploy from a branch** with `/ (root)` or `/docs`. Branch publishing uses the repo tree; your app’s `index.html` lives in **`out/`** after `next build`, which only **Actions** uploads via [`.github/workflows/pages.yml`](.github/workflows/pages.yml).
3. **Actions:** confirm the latest **Deploy Pages** run on **`main`** succeeded (including any first-time **github-pages** environment approval). Re-run failed jobs after fixing errors.
4. **Hard refresh** or try an incognito window after a green deploy (CDN/cache).

`public/.nojekyll` is included so GitHub’s Jekyll step does not skip folders named `_next` when Pages processes static files.
