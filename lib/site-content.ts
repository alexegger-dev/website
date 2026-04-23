import { GITHUB_SITE_OWNER, githubRepoUrl } from "./site-config";

export const displayName = "Alex Egger" as const;
export const legalName = "Alexander Egger" as const;

/** Short label for JSON-LD and metadata fragments (no em dash split tricks). */
export const structuredDataJobTitle = "AI / full-stack engineer" as const;

/** Browser tab / OG default title line (kept concise for recruiters). */
export const siteTitleTagline = "Mid-level AI and full-stack engineer" as const;

export const headline =
  "Mid-level AI and full-stack engineer | Next.js, Python, LangGraph, AWS" as const;

/** One-line hook above the H1. */
export const tagline =
  "I build production RAG workflows and multi-tenant AI products. I focus on reliable architecture, evaluation-driven delivery, and clean CI/CD." as const;

export const summary =
  "I have spent the last three years building production RAG workflows, agent systems, and multi-tenant SaaS on AWS. I work across the stack: Next.js on the frontend, Python and TypeScript services, PostgreSQL with pgvector, auth and billing, and CI/CD with GitHub Actions. I started in quantitative finance, so I naturally focus on measurable outcomes and solid evaluation practices." as const;

/** Hiring intent aligned with mid-level AI and full-stack roles. */
export const careerIntent =
  "I am looking for mid-level AI or full-stack roles with meaningful AI systems work. Remote in the US is ideal." as const;

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
  "Plan review on jurisdiction-specific RAG dropped from hours to minutes per document.",
  "A logistics invoicing workflow moved from about five days to same-day processing.",
  "Pytest and Playwright suites gate every deploy behind a green CI pipeline.",
] as const;

export const heroAtAGlance = {
  availability: "Open to selected roles",
  timezone: "US · Remote (Mountain)",
  cardSummary:
    "Recent work: production LangGraph RAG for AEC workflows, reliability patterns with validation and retries, and strong release discipline through tests and CI." as const,
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
    title: "FinOps and tenancy",
    description:
      "I treat cost controls as part of product quality. This lane covers metering, budgets, and tenant-aware usage tracking, plus operator tooling teams can actually use.",
    repos: [{ name: "llm-cost-guard", href: githubRepoUrl("llm-cost-guard") }],
  },
  {
    title: "RAG, agents, and traces",
    description:
      "This is where I run LangGraph RAG and supervisor patterns, plus runtime controls like cancellation and trace export. It is the same class of work as production document workflows and on-call style triage.",
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
    label: "Plan review: hours to minutes",
    detail:
      "Built production LangGraph RAG over blueprints, specifications, and jurisdiction-specific building codes. Typical plan review dropped from several hours to minutes per document.",
    context:
      "Pre-seed startup (AEC / construction tech), founding engineer, document review cycle vs. prior manual workflow (Oct 2025 to present).",
  },
  {
    label: "Invoices: five days to same-day",
    detail:
      "Built an invoicing pipeline using OCR plus rule-based validation. It reduced one logistics client's payment cycle from about five days to same-day.",
    context:
      "Independent consultant, AI automation engineer, SMB finance ops (Feb to Sept 2025).",
  },
  {
    label: "Green CI before every deploy",
    detail:
      "Wrote integration and regression suites in pytest and Playwright, then used them to gate every deploy.",
    context:
      "Pre-seed startup (AEC / construction tech), founding engineer, release process (Oct 2025 to present).",
  },
  {
    label: "Stronger backtests (options)",
    detail:
      "Refined options-volatility signal generation and improved out-of-sample Sharpe and CAGR in backtests, alongside a Nuxt plus Python analytics platform.",
    context:
      "APX Financial Analytics · full stack, financial analytics · systematic strategies; backtests only, not live trading advice (2024).",
  },
  {
    label: "Less manual CRM work",
    detail:
      "Automated lead intake and CRM synchronization in n8n, removing a substantial block of weekly manual data entry from the client's operations team.",
    context:
      "Independent consultant, AI automation engineer, sales and ops workflow (Feb to Sept 2025).",
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
    range: "Oct 2025 - Present",
    title: "Founding Engineer",
    location: "Overland Park, KS",
    bullets: [
      "Founding engineer leading development of a multi-tenant SaaS for blueprint analysis, code compliance checks, and construction document generation, deployed with municipalities, AEC firms, and private contractors.",
      "Built production RAG pipelines on LangGraph over blueprints, specifications, and jurisdiction-specific building codes; typical plan review dropped from several hours to minutes per document.",
      "Implemented agent reliability patterns: Pydantic schema validation, exponential-backoff retries, deterministic tool routing; traces and failure modes monitored through LangSmith and CloudWatch.",
      "Built the stack end-to-end: Next.js frontend, Python and TypeScript services, PostgreSQL with pgvector, tenant isolation, auth, billing, and CI/CD via GitHub Actions on AWS ECS.",
      "Wrote integration and regression test suites with pytest and Playwright, gating every deploy behind a green pipeline.",
      "Hired and onboarded the second engineer; set code review, sprint cadence, and testing standards for the team.",
    ],
  },
  {
    company: "Independent Consultant",
    range: "Feb 2025 - Sept 2025",
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
    range: "Jan 2024 - Dec 2024",
    title: "Full Stack Engineer, Financial Analytics",
    location: "Kansas City, MO",
    bullets: [
      "Built a full-stack analytics platform (Nuxt + Python) for internal trading teams, integrating IBKR, ORATS, and CBOE market-data feeds over REST.",
      "Refined signal generation on options volatility strategies, improving out-of-sample Sharpe and CAGR in backtests across equity index markets.",
      "Developed ML models for volatility forecasting and options pricing to support systematic strategy research.",
      "Automated analytics and reporting pipelines, removing a recurring weekly manual reporting burden for the research desk.",
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
];

export const education = {
  school: "Park University",
  detail: "Business and Finance coursework (2022-2025), Parkville, MO",
} as const;

export const certifications = [
  "DeepLearning.AI - Deep Learning Specialization (Coursera)",
  "Stanford Online - Data Science and Machine Learning (Coursera)",
  "HarvardX - Machine Learning (edX)",
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
    pitch:
      "HITL incident workflow with interrupt and resume paths, plus mock mode for CI.",
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
    pitch: "Rust TUI agent with allowlisted HTTP and an optional LLM planner.",
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
    meta: "Python, PyTorch, scikit-learn - Finalist",
    bullets: [
      "Options volatility forecasting with ensemble ML methods and engineered features on high-frequency order-book data; selected as a finalist.",
    ],
  },
  {
    name: "Kaggle Cardiac Risk Detection",
    meta: "Python, TensorFlow, Deep Learning - Top submission",
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

/** README deep links that match the profile "start here" trio. */
export const selectedCases: SelectedCase[] = [
  {
    title: "LLM gateway",
    slug: "llm-traffic-controller",
    blurb:
      "OpenAI-compatible edge with policies, retries, circuit breakers, idempotency hooks, and streaming. Start with the README.",
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
      "Supervisor squad with normalized trace export and a small console. This is how I debug multi-step agents.",
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
