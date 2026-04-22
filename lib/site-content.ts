import { GITHUB_SITE_OWNER, githubRepoUrl } from "./site-config";

export const displayName = "Alex Egger" as const;
export const legalName = "Alexander Egger" as const;

export const headline =
  "Founding engineer for LangGraph/LangChain platforms—AI governance, meta-orchestration, and agentic automation in production." as const;

/** Human-first hook; technical edge lives in the summary and proof sections. */
export const tagline =
  "I help teams ship governed LLM systems: policy at the edge, LangGraph orchestration for real workflows, and codegen agents that earn trust in CI—not demo limbo." as const;

export const summary =
  "Three years building production AI and full-stack systems: LangGraph and LangChain for RAG, supervisors, and meta-orchestration (graphs coordinating graphs, tools, and humans); gateways and policy graphs for AI governance; agentic code generation tied to tests and releases; multi-tenant SaaS on AWS; and classical ML in quant workflows. I own architecture through CI/CD—Python, TypeScript, PostgreSQL, Docker, and GitHub Actions." as const;

/** Shown in the hero aside and footer—aligns inbound with the roles you want. */
export const careerIntent =
  "Seeking founding engineer or senior full-stack / platform roles where LangGraph meets governance and automation—US remote, small teams, high ownership." as const;

export const contact = {
  location: "Remote",
  phone: "(816) 803-4671",
  /** E.164-style href for `tel:` links */
  phoneTel: "+18168034671",
  email: "alexegger224@gmail.com",
  linkedinHref: "https://www.linkedin.com/in/alex-egger-3bb47037b/",
  linkedinLabel: "LinkedIn",
  githubHref: `https://github.com/${GITHUB_SITE_OWNER}`,
  githubLabel: `github.com/${GITHUB_SITE_OWNER}`,
} as const;

export const heroAtAGlance = {
  availability: "Open to select roles",
  timezone: "US · Remote (Mountain)",
  /** One line under “At a glance”—keeps the hero card from reading empty above the diagram. */
  cardSummary:
    "LangGraph-first control planes: governance layers, meta-orchestrated agents, and guarded codegen under real traffic." as const,
  stack: [
    "Python",
    "TypeScript",
    "LangGraph",
    "LangChain",
    "PostgreSQL",
    "AWS",
  ] as const,
} as const;

export type Lane = {
  title: string;
  description: string;
  repos: { name: string; href: string }[];
};

export const lanes: Lane[] = [
  {
    title: "Gateway, policy & reliability",
    description:
      "Production LLMs need governance at the edge—not one giant prompt. I build OpenAI-compatible gateways with YAML policy, injection and tool-use guardrails, retries, circuit breakers, idempotency, and streaming backpressure so behavior is predictable, fail-open/fail-closed choices are explicit, and traffic stays auditable when models or vendors flap.",
    repos: [
      {
        name: "llm-traffic-controller",
        href: githubRepoUrl("llm-traffic-controller"),
      },
      { name: "policy-graph-guard", href: githubRepoUrl("policy-graph-guard") },
    ],
  },
  {
    title: "FinOps & tenancy",
    description:
      "Spend and scope are part of AI governance: without metering and budgets, agents quietly bankrupt a product. I ship per-tenant caps, operator dashboards, guarded clients, and Postgres-backed ledgers so finance and engineering share one definition of “on” in production.",
    repos: [{ name: "llm-cost-guard", href: githubRepoUrl("llm-cost-guard") }],
  },
  {
    title: "LangGraph, meta-orchestration & agents",
    description:
      "LangGraph is where I compose supervisors, DAG-shaped task graphs, and agentic code generation—with checkpoints, HITL, isolation, cancellation, deadlines, and traces. Meta-orchestration means graphs that coordinate other graphs, tools, and humans—not a single omniscient loop pretending to be safe.",
    repos: [
      {
        name: "agent-runtime-kernel",
        href: githubRepoUrl("agent-runtime-kernel"),
      },
      {
        name: "langgraph-rag-workbench",
        href: githubRepoUrl("langgraph-rag-workbench"),
      },
      {
        name: "supervisor-squad-trace",
        href: githubRepoUrl("supervisor-squad-trace"),
      },
      {
        name: "horizon-task-decomposer",
        href: githubRepoUrl("horizon-task-decomposer"),
      },
    ],
  },
];

export type Metric = {
  label: string;
  detail: string;
  /** Scope, timeframe, or definition so numbers read as evidence, not slogans. */
  context: string;
};

export const metrics: Metric[] = [
  {
    label: "~88% workflow automation",
    detail:
      "Production RAG on LangChain/LangGraph—stateful graphs with checkpoints, validation, retries, and structured tool routing for blueprint analysis, summarization, and multimodal generation.",
    context:
      "Stealth AI startup · internal ops and customer workflows · measured as share of manual steps removed vs. prior baseline (2025).",
  },
  {
    label: "99.9% uptime",
    detail:
      "AWS (EC2/S3/ECS) with CI/CD via GitHub Actions and disciplined reliability work.",
    context:
      "Stealth AI startup · production SaaS · rolling window aligned with customer SLA reporting.",
  },
  {
    label: "~40% less repetitive engineering",
    detail:
      "Meta-orchestrated LangGraph agent DAGs for codegen, test scaffolding, and deployment automation—graphs coordinating tools and CI, not one-off chat sessions.",
    context:
      "Stealth AI startup · engineering time survey + story points before/after agent-assisted workflows (2025).",
  },
  {
    label: "Layered AI governance",
    detail:
      "Gateway policy plus LangGraph guardrails—PII/topic/tool gates, injection checks, schema-validated outputs, and budget-aware clients across customer and internal agents.",
    context:
      "Stealth AI startup and open-source reference stacks · controls designed and shipped as part of platform work (2024–2026).",
  },
  {
    label: "30–40% alpha lift (backtests)",
    detail:
      "Options analytics platform: model-driven signal refinement and automated reporting.",
    context:
      "APX Financial Analytics · systematic options strategies · backtested portfolios vs. prior signal set (2024); not live trading advice.",
  },
  {
    label: "Invoices: 5 days → <24h",
    detail:
      "OCR + validation pipeline cutting payment cycles for automation clients.",
    context:
      "Independent consulting · SMB finance ops · cycle time from invoice receipt to booked payable (2025).",
  },
  {
    label: "30+ hours/week saved",
    detail:
      "Multi-step n8n workflows for lead intake and CRM sync at consultant scale.",
    context:
      "Independent consulting · sales ops time study vs. manual CRM entry (2025).",
  },
];

export type Experience = {
  company: string;
  range: string;
  title: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Stealth AI Startup",
    range: "Oct 2025 — Present",
    title: "Founding Engineer",
    location: "Overland Park, KS",
    bullets: [
      "Shipped multi-tenant enterprise SaaS from first commit to production—municipalities, AEC, and private-sector clients—with end-to-end ownership of frontend, backend, infra, and CI/CD.",
      "Cut manual document workflows sharply via production RAG on LangChain/LangGraph: blueprint analysis, summarization, and multimodal generation with checkpoints, validation, retries, hierarchical tool routing, and explicit AI governance choices at the graph edge.",
      "Scaled engineering leverage with meta-orchestrated agent graphs for codegen, test generation, and deploy automation—supervisor patterns and DAGs wired into review and release; hired and mentored a junior engineer and set code review and release standards.",
    ],
  },
  {
    company: "Independent Consultant",
    range: "Feb 2025 — Sept 2025",
    title: "AI Automation Engineer",
    location: "Kansas City, MO",
    bullets: [
      "Reduced invoice-to-payment latency from five days to under twenty-four hours for SMB clients using OCR plus validation pipelines.",
      "Eliminated thirty-plus hours per week of manual CRM entry with multi-step n8n workflows for lead intake and sync.",
      "Delivered technical audits and pragmatic AI roadmaps—LangGraph/LangChain adoption, evaluation and governance patterns, and staged agentic automation—across hospitality, logistics, construction, finance, and wholesale.",
    ],
  },
  {
    company: "APX Financial Analytics",
    range: "Jan 2024 — Dec 2024",
    title: "Full Stack Engineer, Financial Analytics",
    location: "Kansas City, MO",
    bullets: [
      "Raised risk-adjusted backtest performance roughly thirty to forty percent on systematic options books by refining signals and MAR/CAGR tradeoffs on a Nuxt + Python + PostgreSQL stack.",
      "Integrated IBKR, ORATS, and CBOE data into a full-stack analytics platform with REST pipelines analysts could trust for daily research.",
      "Supported strategy research with volatility and price forecasting models in Python (scikit-learn, PyTorch), plus disciplined train/validation design and leakage checks so research translated cleanly to backtests.",
    ],
  },
  {
    company: "Independent Research",
    range: "Feb 2023 — Dec 2023",
    title: "Quantitative Analyst",
    location: "Kansas City, MO",
    bullets: [
      "Published-quality research on options microstructure, volatility surfaces, and systematic strategies across equity index and commodity markets.",
      "Benchmarked forecasting and price-prediction models in Python, scikit-learn, and PyTorch against historical implied-volatility surfaces.",
    ],
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      "Python",
      "TypeScript/JavaScript",
      "SQL (PostgreSQL, MySQL)",
      "Rust",
    ],
  },
  {
    title: "LangChain & LangGraph",
    items: [
      "LangChain",
      "LangGraph (graphs, checkpoints, streaming)",
      "Supervisor & hierarchical agents",
      "Meta-orchestration across subgraphs",
      "RAG & retrieval quality",
      "Structured tools & JSON outputs",
      "OpenAI / Anthropic / Hugging Face / OpenRouter",
    ],
  },
  {
    title: "AI governance & agentic automation",
    items: [
      "Policy graphs & pre/post-LLM gates",
      "Gateway YAML rules & injection guardrails",
      "Agentic code generation in CI",
      "Eval harnesses & regression checks",
      "HITL interrupts & resume",
      "Multimodal pipelines",
    ],
  },
  {
    title: "ML modeling & quality",
    items: [
      "scikit-learn & XGBoost",
      "PyTorch",
      "Train/validation discipline & leakage checks",
      "Forecasting & classification metrics",
    ],
  },
  {
    title: "Data & vector",
    items: ["PostgreSQL", "MySQL", "pgvector", "Pinecone", "Chroma"],
  },
  {
    title: "Cloud & infra",
    items: [
      "AWS (EC2, S3, ECS)",
      "Docker",
      "GitHub Actions",
      "Linux",
      "Git",
      "Multi-tenant architecture",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Svelte", "Next.js", "Nuxt", "Tailwind CSS"],
  },
  {
    title: "Automation",
    items: ["REST APIs", "n8n", "Workflow automation", "OCR pipelines"],
  },
];

export const education = {
  school: "Park University",
  detail:
    "Graduate coursework toward M.B.A., Finance concentration — Parkville, MO",
} as const;

export const certifications = [
  "Google — Advanced Data Analytics Professional Certificate",
  "DeepLearning.AI — Deep Learning Specialization (Coursera)",
  "Stanford Online — Data Science & Machine Learning (Coursera)",
  "HarvardX — Machine Learning (edX)",
  "KodeKloud — LangChain Production Engineering",
] as const;

export type PortfolioRepo = {
  slug: string;
  /** Short human title for scanning; slug stays canonical for GitHub. */
  title: string;
  pitch: string;
  /** Up to three stack or domain tags for quick filtering. */
  tags?: readonly string[];
};

/** Primary twelve repos (from personal/README hiring index). */
export const portfolioRepos: PortfolioRepo[] = [
  {
    slug: "langgraph-rag-workbench",
    title: "LangGraph RAG workbench",
    pitch:
      "LangGraph RAG with supervisor-driven codegen paths, NDJSON streaming, and RAG_WORKBENCH_MOCK=1 so the UI runs without OpenAI spend.",
    tags: ["LangGraph", "RAG", "Codegen"],
  },
  {
    slug: "rolefit-coach",
    title: "Role Fit Coach",
    pitch: "SvelteKit BFF, JWT httpOnly cookie, SSE LangGraph coach, Postgres.",
    tags: ["SvelteKit", "LangGraph", "Postgres"],
  },
  {
    slug: "incident-copilot",
    title: "Incident copilot",
    pitch:
      "HITL incident workflow—interrupt and resume, with mock mode for CI.",
    tags: ["HITL", "LangGraph", "CI"],
  },
  {
    slug: "llm-traffic-controller",
    title: "LLM traffic controller",
    pitch:
      "OpenAI-compatible gateway: YAML policies, retries, circuit breakers, dual upstreams, idempotency hooks, Postgres metering, Prometheus.",
    tags: ["Gateway", "Postgres", "Prometheus"],
  },
  {
    slug: "agent-runtime-kernel",
    title: "Agent runtime kernel",
    pitch:
      "Multi-tenant job runtime for LangGraph graphs: scheduler, cancel, deadlines, sandboxed tools, and /metrics for meta-orchestrated workloads.",
    tags: ["Runtime", "LangGraph", "Metrics"],
  },
  {
    slug: "horizon-task-decomposer",
    title: "Horizon task decomposer",
    pitch:
      "Meta-orchestration over a JSON task DAG—plan, validate, execute, verify—with HMAC approvals, NDJSON telemetry, and HORIZON_MOCK offline path.",
    tags: ["DAG", "Meta-orchestration", "Safety"],
  },
  {
    slug: "supervisor-squad-trace",
    title: "Supervisor squad trace",
    pitch:
      "LangGraph-style supervisor squad with trace export (NDJSON + optional OTLP) and a Next.js console for debugging hierarchical agents.",
    tags: ["LangGraph", "Tracing", "OTLP"],
  },
  {
    slug: "invoice-reconcile-pipeline",
    title: "Invoice reconcile pipeline",
    pitch:
      "AP demo: PDF + CSV PO → arq worker, rapidfuzz explainable matches, exception queue, Postgres audit; FastAPI + Next.js + Compose.",
    tags: ["FastAPI", "OCR", "Postgres"],
  },
  {
    slug: "scout",
    title: "Scout (Rust TUI)",
    pitch: "Rust TUI agent — allowlisted HTTP, optional LLM planner.",
    tags: ["Rust", "TUI", "Agents"],
  },
  {
    slug: "workflow-contract-bridge",
    title: "Workflow contract bridge",
    pitch:
      "Versioned JSON Schema webhook ingress; dead letters + replay; transactional outbox; FastAPI + SvelteKit admin.",
    tags: ["Webhooks", "Outbox", "SvelteKit"],
  },
  {
    slug: "policy-graph-guard",
    title: "Policy graph guard",
    pitch:
      "LangGraph AI governance DAG around chat: PII/topic/tool-use and injection checks pre-LLM, JSON schema post-LLM, guarded outputs; MOCK + strict; OpenAPI.",
    tags: ["Governance", "LangGraph", "OpenAPI"],
  },
  {
    slug: "llm-cost-guard",
    title: "LLM cost guard",
    pitch:
      "Multi-tenant LLM metering + daily USD budgets; Postgres, guarded OpenAI client, Next.js ops UI, LangGraph demo; prompts off by default.",
    tags: ["FinOps", "Next.js", "Postgres"],
  },
];

export const featuredProjects = [
  {
    name: "Optiver Quantitative Finance Competition",
    meta: "Python, PyTorch, scikit-learn — Finalist",
    bullets: [
      "ML-driven options volatility forecasting in a competitive quant field with ensemble methods and careful out-of-sample design.",
      "Feature engineering on high-frequency order-book data and classical ML baselines before deep models.",
    ],
  },
  {
    name: "Kaggle — Cardiac Risk Detection",
    meta: "Python, TensorFlow — Finalist",
    bullets: [
      "Deep learning on patient signal data with strong recall on imbalanced medical sets and threshold tuning for clinical-style tradeoffs.",
      "Preprocessing and augmentation pipelines tuned for risk signals and stable validation folds.",
    ],
  },
  {
    name: "Oncological Metastasis Prediction",
    meta: "Python, scikit-learn, XGBoost — Personal project",
    bullets: [
      "Gradient-boosted and linear baselines for metastasis risk on public oncology datasets with interpretable feature contributions.",
      "ROC-AUC, precision/recall, and cross-validation for generalization checks beyond a single lucky split.",
    ],
  },
] as const;

export type SelectedCase = {
  title: string;
  slug: string;
  blurb: string;
};

/** Representative repos (README deep links)—breaks the “wall of cards” before the full grid. */
export const selectedCases: SelectedCase[] = [
  {
    title: "Production LLM gateway",
    slug: "llm-traffic-controller",
    blurb:
      "YAML policy, metering hooks, failover, and OpenAI-compatible routing—governance at the edge before spend hits models.",
  },
  {
    title: "Multi-tenant agent runtime",
    slug: "agent-runtime-kernel",
    blurb:
      "Scheduler, cancellation, deadlines, sandboxed tools, and Prometheus metrics for LangGraph jobs at tenant scale.",
  },
  {
    title: "LangGraph policy graph",
    slug: "policy-graph-guard",
    blurb:
      "DAG of checks around the model—PII/topic/tool gates, injection screens, schema-validated outputs, and strict mock paths for CI.",
  },
];

export function allGithubRepoHrefs(): string[] {
  const laneHrefs = lanes.flatMap(l => l.repos.map(r => r.href));
  const portfolioHrefs = portfolioRepos.map(r => githubRepoUrl(r.slug));
  const caseHrefs = selectedCases.map(c => githubRepoUrl(c.slug));
  return [
    ...new Set([
      ...laneHrefs,
      ...portfolioHrefs,
      ...caseHrefs,
      contact.githubHref,
    ]),
  ];
}
