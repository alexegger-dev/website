import { GITHUB_SITE_OWNER, githubRepoUrl } from "./site-config";

export const displayName = "Alex Egger" as const;
export const legalName = "Alexander Egger" as const;

/** Short label for JSON-LD and metadata fragments (no em dash split tricks). */
export const structuredDataJobTitle = "AI / full-stack engineer" as const;

/** Browser tab / OG default title line (kept concise for recruiters). */
export const siteTitleTagline =
  "AI and full-stack: RAG, agents, shipping product" as const;

export const headline =
  "Mid-level AI and full-stack engineer focused on production RAG and agents, evaluation-driven delivery, and end-to-end product work on AWS." as const;

/** One-line hook above the H1. */
export const tagline =
  "LangGraph and LangChain pipelines, production-grade agent patterns, and customer-facing applications—with disciplined tests, observability, and outcomes consistent with my resume." as const;

export const summary =
  "Three years building production RAG, agent workflows, and multi-tenant SaaS on AWS: Next.js frontends, Python and TypeScript services, PostgreSQL with pgvector, tenant isolation, authentication, billing, and CI/CD through GitHub Actions. Quantitative finance background in options volatility, with a bias toward evaluation-driven development and measurable cycle-time improvements." as const;

/** Hiring intent — aligned with mid-level AI + full-stack targeting. */
export const careerIntent =
  "Seeking mid-level AI engineer or mid-level full-stack roles with meaningful AI systems exposure. United States, remote preferred—teams that value tests, observability, and clear product impact." as const;

export const contact = {
  location: "Remote",
  phone: "(816) 803-4671",
  /** E.164-style href for `tel:` links */
  phoneTel: "+18168034671",
  email: "alexegger224@gmail.com",
  linkedinHref: "https://www.linkedin.com/in/alexegger-dev/",
  linkedinLabel: "LinkedIn",
  githubHref: `https://github.com/${GITHUB_SITE_OWNER}`,
  githubLabel: `github.com/${GITHUB_SITE_OWNER}`,
} as const;

/** Resume-backed proof lines for the hero (strictly from resume.latex). */
export const heroProofBullets = [
  "Plan review on jurisdiction-specific RAG: hours to minutes per document at a pre-seed AEC SaaS company.",
  "Logistics invoicing: approximately five business days to same-day payment cycle (OCR plus validation, consulting).",
  "Pytest and Playwright integration and regression suites gating every deploy behind a green CI pipeline.",
] as const;

export const heroAtAGlance = {
  availability: "Open to selected roles",
  timezone: "US · Remote (Mountain)",
  cardSummary:
    "Production RAG on LangGraph over blueprints, specifications, and building codes, with Pydantic validation, retries, deterministic tool routing, and LangSmith plus CloudWatch visibility." as const,
  stack: [
    "Python",
    "TypeScript",
    "Next.js",
    "LangGraph",
    "PostgreSQL",
    "AWS",
    "pytest",
    "Playwright",
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
      "OpenAI-compatible gateways and policy graphs: retries, circuit breakers, idempotency, streaming backpressure, and explicit pre/post checks so LLM behavior stays predictable under real traffic. Reference repos mirror patterns I use in production (YAML policy, schema validation, mock-friendly CI paths).",
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
      "Metering, budgets, and Postgres-backed usage so multi-tenant AI products stay financially bounded — operator surfaces and guarded clients teams can reason about.",
    repos: [{ name: "llm-cost-guard", href: githubRepoUrl("llm-cost-guard") }],
  },
  {
    title: "RAG, agents & traces",
    description:
      "LangGraph for RAG and supervisors, job isolation and cancellation where it matters, and trace export for debugging hierarchical agents — the same problem class as production blueprint/code workflows and on-call style triage.",
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

/** All metrics are grounded in resume.latex only (no extra internal survey stats). */
export const metrics: Metric[] = [
  {
    label: "Plan review: hours → minutes",
    detail:
      "Production RAG on LangGraph over blueprints, specifications, and jurisdiction-specific building codes — typical plan review dropped from several hours to minutes per document.",
    context:
      "Pre-seed startup (AEC / construction tech) · founding engineer · document review cycle vs. prior manual workflow (Oct 2025 — present).",
  },
  {
    label: "Invoices: ~5 days → same-day",
    detail:
      "Invoicing pipeline combining OCR extraction with rule-based validation — reduced a logistics client's payment cycle from roughly five days to same-day.",
    context:
      "Independent consultant · AI automation engineer · SMB finance ops (Feb — Sept 2025).",
  },
  {
    label: "Green CI before every deploy",
    detail:
      "Integration and regression test suites with pytest and Playwright — every deploy gated behind a green pipeline.",
    context:
      "Pre-seed startup (AEC / construction tech) · founding engineer · release process (Oct 2025 — present).",
  },
  {
    label: "Stronger backtests (options)",
    detail:
      "Refined signal generation on options volatility strategies, improving out-of-sample Sharpe and CAGR in backtests across equity index markets — alongside a Nuxt + Python analytics stack.",
    context:
      "APX Financial Analytics · full stack, financial analytics · systematic strategies; backtests only, not live trading advice (2024).",
  },
  {
    label: "Less manual CRM work",
    detail:
      "Automated lead intake and CRM synchronization in n8n, removing a substantial block of weekly manual data entry from the client's operations team.",
    context:
      "Independent consultant · AI automation engineer · sales/ops workflow (Feb — Sept 2025).",
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
    company: "Pre-seed startup (AEC / construction tech)",
    range: "Oct 2025 — Present",
    title: "Founding Engineer",
    location: "Overland Park, KS",
    bullets: [
      "Sole engineer on a multi-tenant SaaS for automated blueprint analysis, code compliance checks, and construction document generation — deployed with municipalities, AEC firms, and private contractors.",
      "Built production RAG pipelines on LangGraph over blueprints, specifications, and jurisdiction-specific building codes; typical plan review dropped from several hours to minutes per document.",
      "Implemented agent reliability patterns: Pydantic schema validation, exponential-backoff retries, deterministic tool routing; traces and failure modes monitored through LangSmith and CloudWatch.",
      "Built the stack end-to-end: Next.js frontend, Python and TypeScript services, PostgreSQL with pgvector, tenant isolation, auth, billing, and CI/CD via GitHub Actions on AWS ECS.",
      "Wrote integration and regression test suites with pytest and Playwright, gating every deploy behind a green pipeline.",
      "Hired and onboarded the second engineer; set code review, sprint cadence, and testing standards for the team.",
    ],
  },
  {
    company: "Independent Consultant",
    range: "Feb 2025 — Sept 2025",
    title: "AI Automation Engineer",
    location: "Kansas City, MO",
    bullets: [
      "Built an invoicing pipeline combining OCR extraction with rule-based validation, reducing a logistics client's payment cycle from roughly five days to same-day.",
      "Automated lead intake and CRM synchronization in n8n, removing a substantial block of weekly manual data entry from the client's operations team.",
      "Instrumented multi-agent outputs with structured validation, retry logic, and a custom eval harness run on every prompt or model change before shipping.",
      "Delivered technical audits and AI implementation roadmaps for SMB clients across hospitality, logistics, construction, finance, and wholesale.",
    ],
  },
  {
    company: "APX Financial Analytics",
    range: "Jan 2024 — Dec 2024",
    title: "Full Stack Engineer, Financial Analytics",
    location: "Kansas City, MO",
    bullets: [
      "Built a full-stack analytics platform (Nuxt + Python) for internal trading teams, integrating IBKR, ORATS, and CBOE market-data feeds over REST.",
      "Refined signal generation on options volatility strategies, improving out-of-sample Sharpe and CAGR in backtests across equity index markets.",
      "Developed ML models for volatility forecasting and options pricing to support systematic strategy research.",
      "Automated analytics and reporting pipelines, removing a recurring weekly manual reporting burden for the research desk.",
    ],
  },
  {
    company: "Independent Research",
    range: "Feb 2023 — Dec 2023",
    title: "Quantitative Analyst",
    location: "Kansas City, MO",
    bullets: [
      "Researched options market microstructure, volatility surface modeling, and systematic strategy design across equity index and commodity markets.",
      "Built and backtested volatility forecasting models, benchmarked against historical implied-volatility surfaces to validate predictive signal out-of-sample.",
    ],
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

/** Mirrors resume SKILLS section grouping. */
export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "TypeScript/JavaScript", "SQL (PostgreSQL, MySQL)"],
  },
  {
    title: "AI/ML & LLMs",
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Multi-agent orchestration",
      "MCP",
      "Multimodal pipelines",
      "OpenAI",
      "Anthropic",
      "Hugging Face",
    ],
  },
  {
    title: "LLM observability & evals",
    items: [
      "LangSmith",
      "Langfuse",
      "Ragas",
      "Braintrust",
      "Custom eval harnesses",
    ],
  },
  {
    title: "Data & vector stores",
    items: ["PostgreSQL", "MySQL", "pgvector", "Pinecone", "Chroma", "Qdrant"],
  },
  {
    title: "Cloud & infra",
    items: ["AWS (EC2, S3, ECS)", "Docker", "GitHub Actions", "Linux"],
  },
  {
    title: "Testing",
    items: ["pytest", "Playwright", "Integration and regression test design"],
  },
  {
    title: "Frontend",
    items: ["React", "Svelte", "Next.js", "Nuxt", "Tailwind CSS"],
  },
  {
    title: "Automation & integrations",
    items: ["REST APIs", "n8n", "OCR pipelines"],
  },
  {
    title: "AI-native development",
    items: ["Cursor", "Claude Code", "OpenCode", "Windsurf"],
  },
];

export const education = {
  school: "Park University",
  detail: "Business & Finance coursework — 2022–2025 · Parkville, MO",
} as const;

export const certifications = [
  "DeepLearning.AI — Deep Learning Specialization (Coursera)",
  "Stanford Online — Data Science & Machine Learning (Coursera)",
  "HarvardX — Machine Learning (edX)",
] as const;

export type PortfolioRepo = {
  slug: string;
  /** Short human title for scanning; slug stays canonical for GitHub. */
  title: string;
  pitch: string;
  /** Up to three stack or domain tags for quick filtering. */
  tags?: readonly string[];
};

/** Primary twelve repos (hiring index). */
export const portfolioRepos: PortfolioRepo[] = [
  {
    slug: "langgraph-rag-workbench",
    title: "LangGraph RAG workbench",
    pitch:
      "RAG + supervisor patterns; NDJSON streaming; RAG_WORKBENCH_MOCK=1 runs the UI without OpenAI spend.",
    tags: ["LangGraph", "RAG", "Evals"],
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
    pitch: "HITL incident workflow — interrupt / resume, mock mode for CI.",
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
    tags: ["DAG", "HITL", "Safety"],
  },
  {
    slug: "supervisor-squad-trace",
    title: "Supervisor squad trace",
    pitch:
      "Supervisor squad with trace export (NDJSON + optional OTLP) and Next.js console.",
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
      "LangGraph policy DAG around chat: PII/topic/tools/injection pre, LLM, JSON schema + secret post; MOCK + strict; OpenAPI.",
    tags: ["Governance", "LangGraph", "OpenAPI"],
  },
  {
    slug: "llm-cost-guard",
    title: "LLM cost guard",
    pitch:
      "Multi-tenant metering + daily USD budgets; Postgres, guarded OpenAI client, Next.js ops UI, LangGraph demo; prompts off by default.",
    tags: ["FinOps", "Next.js", "Postgres"],
  },
];

export const featuredProjects = [
  {
    name: "Optiver Quantitative Finance Competition",
    meta: "Python, PyTorch, scikit-learn — Finalist",
    bullets: [
      "Options volatility forecasting with ensemble ML methods and engineered features on high-frequency order-book data; selected as a finalist.",
    ],
  },
  {
    name: "Kaggle — Cardiac Risk Detection",
    meta: "Python, TensorFlow, Deep Learning — Top submission",
    bullets: [
      "Deep learning model for cardiac risk detection from patient signal data; preprocessing and augmentation to improve recall on highly imbalanced medical datasets.",
    ],
  },
] as const;

export type SelectedCase = {
  title: string;
  slug: string;
  blurb: string;
};

/** README deep links — matches profile “start here” trio. */
export const selectedCases: SelectedCase[] = [
  {
    title: "LLM gateway",
    slug: "llm-traffic-controller",
    blurb:
      "OpenAI-compatible edge: policies, retries, circuit breakers, idempotency hooks, and streaming — README-first review path.",
  },
  {
    title: "RAG workbench",
    slug: "langgraph-rag-workbench",
    blurb:
      "Comparable retrieval paths, mock-friendly runs, and a regression-friendly harness for LangGraph RAG experiments.",
  },
  {
    title: "Agent traces",
    slug: "supervisor-squad-trace",
    blurb:
      "Supervisor squad with normalized trace export and a small console — how I think about debugging multi-step agents.",
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
