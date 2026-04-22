import { GITHUB_SITE_OWNER, githubRepoUrl } from "./site-config";

export const displayName = "Alex Egger" as const;
export const legalName = "Alexander Egger" as const;

export const headline =
  "Founding engineer for production AI platforms—gateways, agent runtimes, and operational control." as const;

/** Human-first hook; technical edge lives in the summary and proof sections. */
export const tagline =
  "I help teams ship LLM products that stay reliable under real traffic, real budgets, and real compliance pressure." as const;

export const summary =
  "Three years building production AI and full-stack systems: LangGraph/LangChain RAG, multi-agent workflows, multi-tenant SaaS on AWS, and quantitative tooling. I own architecture, implementation, and CI/CD—Python, TypeScript, PostgreSQL, Docker, and GitHub Actions end to end." as const;

/** Shown in the hero aside and footer—aligns inbound with the roles you want. */
export const careerIntent =
  "Seeking founding engineer or senior full-stack / platform roles with LLM surface area—US remote, small teams, high ownership." as const;

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
  timezone: "US · Remote (Central)",
  stack: ["Python", "TypeScript", "PostgreSQL", "AWS"] as const,
} as const;

export type Lane = {
  title: string;
  description: string;
  repos: { name: string; href: string }[];
};

export const lanes: Lane[] = [
  {
    title: "Gateway & reliability",
    description:
      "Teams need an OpenAI-compatible edge that enforces policy when models and vendors flap. I build gateways with YAML rules, retries, circuit breakers, idempotency, and streaming backpressure so clients see predictable behavior—not silent failures.",
    repos: [
      {
        name: "llm-traffic-controller",
        href: githubRepoUrl("llm-traffic-controller"),
      },
    ],
  },
  {
    title: "FinOps & tenancy",
    description:
      "LLM spend explodes without guardrails. I ship metering, per-tenant budgets, operator dashboards, and guarded clients so finance and engineering agree on what “on” means in production.",
    repos: [{ name: "llm-cost-guard", href: githubRepoUrl("llm-cost-guard") }],
  },
  {
    title: "Agent runtime & observability",
    description:
      "Agents need isolation, cancellation, deadlines, and traces—not a single long-lived notebook. I design runtimes and policy graphs so jobs are observable, revocable, and safe to run next to customer data.",
    repos: [
      {
        name: "agent-runtime-kernel",
        href: githubRepoUrl("agent-runtime-kernel"),
      },
      {
        name: "supervisor-squad-trace",
        href: githubRepoUrl("supervisor-squad-trace"),
      },
      { name: "policy-graph-guard", href: githubRepoUrl("policy-graph-guard") },
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
      "Production RAG with LangChain/LangGraph for blueprint analysis, summarization, and multimodal generation.",
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
      "Internal agent DAGs for codegen, testing, and deployment automation.",
    context:
      "Stealth AI startup · engineering time survey + story points before/after agent-assisted workflows (2025).",
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
      "Cut manual document workflows sharply via production RAG (LangChain/LangGraph): blueprint analysis, summarization, and multimodal generation with validation, retries, and structured tool routing.",
      "Scaled engineering leverage with internal agent DAGs for codegen, testing, and deploy automation; hired and mentored a junior engineer and set code review and release standards.",
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
      "Delivered technical audits and pragmatic AI roadmaps across hospitality, logistics, construction, finance, and wholesale.",
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
      "Supported strategy research with volatility and price forecasting models in Python (scikit-learn, PyTorch).",
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
    title: "AI/ML & LLMs",
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Multi-agent orchestration",
      "Multimodal pipelines",
      "OpenAI / Anthropic / Hugging Face / OpenRouter",
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
      "RAG + supervisor codegen; NDJSON streaming; RAG_WORKBENCH_MOCK=1 runs the UI without OpenAI spend.",
    tags: ["LangGraph", "RAG", "Streaming"],
  },
  {
    slug: "rolefit-coach",
    title: "Role Fit Coach",
    pitch:
      "SvelteKit BFF, JWT httpOnly cookie, SSE LangGraph coach, Postgres.",
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
      "Multi-tenant job runtime for LangGraph: scheduler, cancel, deadlines, sandboxed tools, /metrics.",
    tags: ["Runtime", "LangGraph", "Metrics"],
  },
  {
    slug: "horizon-task-decomposer",
    title: "Horizon task decomposer",
    pitch:
      "Plan → validate → execute → verify over a JSON task DAG; HMAC approvals; NDJSON; HORIZON_MOCK offline path.",
    tags: ["DAG", "NDJSON", "Safety"],
  },
  {
    slug: "supervisor-squad-trace",
    title: "Supervisor squad trace",
    pitch:
      "Supervisor squad with trace export (NDJSON + optional OTLP) and a small Next.js console.",
    tags: ["Tracing", "Next.js", "OTLP"],
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
      "LangGraph policy DAG around chat: PII/topic/tool-use and injection checks pre-LLM, JSON schema post-LLM, guarded outputs; MOCK + strict; OpenAPI.",
    tags: ["Policy", "LangGraph", "OpenAPI"],
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
      "ML-driven options volatility forecasting in a competitive quant field.",
      "Ensemble methods and feature engineering on high-frequency order-book data.",
    ],
  },
  {
    name: "Kaggle — Cardiac Risk Detection",
    meta: "Python, TensorFlow — Finalist",
    bullets: [
      "Deep learning on patient signal data with strong recall on imbalanced medical sets.",
      "Preprocessing and augmentation pipelines tuned for clinical risk signals.",
    ],
  },
  {
    name: "Oncological Metastasis Prediction",
    meta: "Python, scikit-learn, XGBoost — Personal project",
    bullets: [
      "Classification for metastasis risk on public oncology datasets.",
      "ROC-AUC, precision/recall, and cross-validation for generalization checks.",
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
    blurb: "Policies, metering, failover, and OpenAI-compatible routing you can deploy behind real clients.",
  },
  {
    title: "Multi-tenant agent runtime",
    slug: "agent-runtime-kernel",
    blurb: "Scheduler, cancellation, deadlines, sandboxed tools, and Prometheus metrics for LangGraph jobs.",
  },
];

export function allGithubRepoHrefs(): string[] {
  const laneHrefs = lanes.flatMap(l => l.repos.map(r => r.href));
  const portfolioHrefs = portfolioRepos.map(r => githubRepoUrl(r.slug));
  const caseHrefs = selectedCases.map(c => githubRepoUrl(c.slug));
  return [...new Set([...laneHrefs, ...portfolioHrefs, ...caseHrefs, contact.githubHref])];
}
