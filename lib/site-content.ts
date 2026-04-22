import { GITHUB_OWNER, githubRepoUrl } from "./site-config";

export const displayName = "Alex Egger" as const;
export const legalName = "Alexander Egger" as const;

export const headline =
  "Founding engineer shipping production AI platforms, gateways, and agent runtimes." as const;

export const tagline =
  "Reliability and control planes around LLMs—not demo chatbots." as const;

export const summary =
  "Founding engineer with 3+ years shipping production AI and full-stack systems: LangGraph/LangChain RAG, multi-agent workflows, multi-tenant SaaS on AWS, and quantitative finance tooling. Python, TypeScript, PostgreSQL, Docker, and CI/CD end-to-end." as const;

export const contact = {
  location: "Kansas City, MO",
  phone: "(816) 803-4671",
  /** E.164-style href for `tel:` links */
  phoneTel: "+18168034671",
  email: "alexegger224@gmail.com",
  linkedinHref: "https://www.linkedin.com/in/alexegger224/",
  linkedinLabel: "linkedin.com/in/alexegger224",
  githubHref: `https://github.com/${GITHUB_OWNER}`,
  githubLabel: `github.com/${GITHUB_OWNER}`,
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
      "OpenAI-compatible edge, policies, breakers, failover, idempotency, streaming backpressure.",
    repos: [
      {
        name: "llm-traffic-controller",
        href: githubRepoUrl("llm-traffic-controller"),
      },
    ],
  },
  {
    title: "FinOps & tenancy",
    description: "Metering, budgets, operator UI, guarded client.",
    repos: [{ name: "llm-cost-guard", href: githubRepoUrl("llm-cost-guard") }],
  },
  {
    title: "Agent runtime & observability",
    description:
      "Job isolation, cancel/deadlines, metrics, traces, policy graphs.",
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
};

export const metrics: Metric[] = [
  {
    label: "~88% workflow automation",
    detail:
      "Production RAG with LangChain/LangGraph for blueprint analysis, summarization, and multimodal generation.",
  },
  {
    label: "99.9% uptime",
    detail:
      "AWS (EC2/S3/ECS) with CI/CD via GitHub Actions and disciplined reliability work.",
  },
  {
    label: "~40% less repetitive engineering",
    detail:
      "Internal agent DAGs for codegen, testing, and deployment automation.",
  },
  {
    label: "30–40% alpha lift (backtests)",
    detail:
      "Options analytics platform: model-driven signal refinement and automated reporting.",
  },
  {
    label: "Invoices: 5 days → <24h",
    detail:
      "OCR + validation pipeline cutting payment cycles for automation clients.",
  },
  {
    label: "30+ hours/week saved",
    detail:
      "Multi-step n8n workflows for lead intake and CRM sync at consultant scale.",
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
      "Sole founding engineer on a multi-tenant enterprise SaaS platform—frontend, backend, infrastructure, and CI/CD—from first commit to production for municipalities, AEC, and private-sector clients.",
      "Production RAG with LangChain/LangGraph: blueprint analysis, document summarization, and multimodal generation with validation, retries, and structured tool routing.",
      "Internal agent DAGs for codegen, testing, and deployment automation; recruited and mentored a junior engineer and set engineering standards.",
    ],
  },
  {
    company: "Independent Consultant",
    range: "Feb 2025 — Sept 2025",
    title: "AI Automation Engineer",
    location: "Kansas City, MO",
    bullets: [
      "AI-driven invoicing with OCR + validation; payment cycles from five days to under 24 hours.",
      "Multi-step n8n workflows for lead intake and CRM sync—30+ hours/week of manual entry removed.",
      "Technical audits and AI roadmaps for SMBs across hospitality, logistics, construction, finance, and wholesale.",
    ],
  },
  {
    company: "APX Financial Analytics",
    range: "Jan 2024 — Dec 2024",
    title: "Full Stack Engineer, Financial Analytics",
    location: "Kansas City, MO",
    bullets: [
      "Full-stack analytics platform (Nuxt, Python, PostgreSQL) with REST integrations to IBKR, ORATS, and CBOE.",
      "Optimized MAR and CAGR for options volatility strategies—30–40% increase in alpha on backtested portfolios.",
      "ML models for volatility forecasting and price prediction supporting systematic strategy research.",
    ],
  },
  {
    company: "Independent Research",
    range: "Feb 2023 — Dec 2023",
    title: "Quantitative Analyst",
    location: "Kansas City, MO",
    bullets: [
      "Research on options microstructure, volatility surfaces, and systematic strategies across equity index and commodity markets.",
      "Forecasting and price-prediction models in Python, scikit-learn, and PyTorch benchmarked against historical IV surfaces.",
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
  pitch: string;
};

/** Primary twelve repos (from personal/README hiring index). */
export const portfolioRepos: PortfolioRepo[] = [
  {
    slug: "langgraph-rag-workbench",
    pitch:
      "RAG + supervisor codegen; NDJSON streaming; RAG_WORKBENCH_MOCK=1 runs the UI without OpenAI spend.",
  },
  {
    slug: "rolefit-coach",
    pitch:
      "Role Fit Coach — SvelteKit BFF, JWT httpOnly cookie, SSE LangGraph coach, Postgres.",
  },
  {
    slug: "incident-copilot",
    pitch: "HITL incident workflow — interrupt/resume, mock mode for CI.",
  },
  {
    slug: "llm-traffic-controller",
    pitch:
      "OpenAI-compatible gateway: YAML policies, retries, circuit breakers, dual upstreams, idempotency hooks, Postgres metering, Prometheus.",
  },
  {
    slug: "agent-runtime-kernel",
    pitch:
      "Multi-tenant job runtime for LangGraph: scheduler, cancel, deadlines, sandboxed tools, /metrics.",
  },
  {
    slug: "horizon-task-decomposer",
    pitch:
      "Plan → validate → execute → verify over a JSON task DAG; HMAC approvals; NDJSON; HORIZON_MOCK offline path.",
  },
  {
    slug: "supervisor-squad-trace",
    pitch:
      "Supervisor squad with trace export (NDJSON + optional OTLP) and a small Next.js console.",
  },
  {
    slug: "invoice-reconcile-pipeline",
    pitch:
      "AP demo: PDF + CSV PO → arq worker, rapidfuzz explainable matches, exception queue, Postgres audit; FastAPI + Next.js + Compose.",
  },
  {
    slug: "scout",
    pitch: "Rust TUI agent — allowlisted HTTP, optional LLM planner.",
  },
  {
    slug: "workflow-contract-bridge",
    pitch:
      "Versioned JSON Schema webhook ingress; dead letters + replay; transactional outbox; FastAPI + SvelteKit admin.",
  },
  {
    slug: "policy-graph-guard",
    pitch:
      "LangGraph policy DAG around chat: PII/topic/tool-use and injection checks pre-LLM, JSON schema post-LLM, guarded outputs; MOCK + strict; OpenAPI.",
  },
  {
    slug: "llm-cost-guard",
    pitch:
      "Multi-tenant LLM metering + daily USD budgets; Postgres, guarded OpenAI client, Next.js ops UI, LangGraph demo; prompts off by default.",
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

export function allGithubRepoHrefs(): string[] {
  const laneHrefs = lanes.flatMap(l => l.repos.map(r => r.href));
  const portfolioHrefs = portfolioRepos.map(r => githubRepoUrl(r.slug));
  return [...new Set([...laneHrefs, ...portfolioHrefs, contact.githubHref])];
}
