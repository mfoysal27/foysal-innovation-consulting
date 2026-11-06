/**
 * SERVICE GROUPS
 * --------------------------------------------------------------------------
 * Five coherent service groups. Each has its own detail page at
 * /services/<slug>. Edit copy here; pages and cards read from this file.
 */

export interface ServiceGroup {
  slug: string;
  /** Short label for cards and nav. */
  title: string;
  /** One-line summary for the overview grid. */
  summary: string;
  /** Who this helps. */
  audience: string;
  /** The problem addressed. */
  problem: string;
  /** Typical deliverables. */
  deliverables: string[];
  /** Honest framing / scope boundaries for this group. */
  note?: string;
  /** Relevant next step CTA label + target. */
  nextStep: { label: string; href: string };
  /** Simple icon key handled by the ServiceIcon component. */
  icon: "discovery" | "proposal" | "software" | "mvp" | "printing";
}

export const SERVICES: ServiceGroup[] = [
  {
    slug: "business-discovery-commercialization",
    title: "Business Discovery & Commercialization",
    summary:
      "Clarify the customer, test demand, and gather evidence before you commit engineering budget.",
    audience:
      "Early-stage founders and research teams deciding whether an idea is worth building.",
    problem:
      "It is easy to build the wrong thing. Before writing code, you need evidence about who has the problem, how acute it is, and whether a viable commercial path exists.",
    deliverables: [
      "Customer segment definition",
      "Interview planning and customer discovery",
      "Market and competitor research",
      "Value proposition development",
      "Business Model Canvas and Lean Canvas workshops",
      "Business model and pricing hypothesis development",
      "Early go-to-market planning",
      "Technical and commercial feasibility assessments",
      "Research commercialization roadmaps",
    ],
    note:
      "Market discovery is evidence gathering, not guaranteed validation. A useful result can be a recommendation to change direction or to stop before spending more.",
    nextStep: { label: "Start with an Idea & Opportunity Review", href: "/contact?service=business-discovery-commercialization" },
    icon: "discovery",
  },
  {
    slug: "proposals-funding-preparation",
    title: "Business Proposals & Funding Preparation",
    summary:
      "Turn a technical idea into a clear, fundable narrative with credible scope and milestones.",
    audience:
      "Founders and researchers preparing plans, decks, or SBIR/STTR submissions.",
    problem:
      "Technical merit rarely speaks for itself. Reviewers and investors need a structured story: the problem, the approach, feasibility evidence, a realistic plan, and a budget that holds together.",
    deliverables: [
      "Business plans and executive summaries",
      "Pitch deck content and narrative",
      "Technical proposals and project scopes",
      "Milestone plans, budgets, and commercialization plans",
      "SBIR/STTR proposal development and review support",
      "Technical feasibility evidence and project planning",
    ],
    note:
      "This is proposal development and technical writing support. It is not investment advice, legal advice, agency affiliation, or a guarantee of funding. Current solicitation requirements should always be confirmed against the official program before submission.",
    nextStep: { label: "Discuss proposal support", href: "/contact?service=proposals-funding-preparation" },
    icon: "proposal",
  },
  {
    slug: "ai-data-science-software",
    title: "AI, Data Science & Custom Software",
    summary:
      "Practical software and analysis that solve a defined business problem — AI only where it earns its place.",
    audience:
      "Small businesses and product teams with a workflow problem or a data/vision/signal challenge.",
    problem:
      "Teams often know the outcome they want but not the right technical path. The goal is a maintainable solution that delivers that outcome, not a showcase of model names.",
    deliverables: [
      "Computer vision and image analysis",
      "Signal processing and sensor data analysis",
      "Machine learning feasibility studies",
      "Data processing, visualization, and workflow automation",
      "Custom desktop, web, and Android applications",
      "Offline and local-first applications where appropriate",
      "AI assistants and document search when genuinely useful",
      "Integration with existing tools and data sources",
      "Model evaluation, deployment planning, and maintainable code handover",
    ],
    note:
      "Work leads with business outcomes and deliverables. Privacy-conscious design is an engineering approach, not a security certification. Where simple automation solves the problem, that is what gets recommended instead of AI.",
    nextStep: { label: "Scope a software or AI project", href: "/contact?service=ai-data-science-software" },
    icon: "software",
  },
  {
    slug: "mvp-on-demand-engineering",
    title: "MVP & On-Demand Engineering",
    summary:
      "Go from requirements to a demonstrable prototype or MVP, with clean handover.",
    audience:
      "Founders who need a working build, and small firms needing specialist project support.",
    problem:
      "You have a concept and need it made real — a proof of concept, a clickable prototype, or a focused MVP — without hiring a full engineering team before it is justified.",
    deliverables: [
      "Problem and requirements definition",
      "Technical architecture and technology selection",
      "Proof of concept development",
      "Clickable prototypes and functional MVPs",
      "Software and hardware integration feasibility",
      "Internal tools, dashboards, and test automation",
      "Defined project troubleshooting and feature development",
      "Documentation, handover, and optional ongoing support",
    ],
    note:
      "Fractional technical advisory is available as a scoped engagement. It is defined by an agreed scope and review points — not an implied full-time CTO commitment or unlimited availability.",
    nextStep: { label: "Plan an MVP or prototype", href: "/contact?service=mvp-on-demand-engineering" },
    icon: "mvp",
  },
  {
    slug: "3d-printing-physical-prototyping",
    title: "3D Printing & Physical Prototyping",
    summary:
      "Design-for-prototyping guidance and concept models, assessed and quoted per project.",
    audience:
      "Teams bridging software and hardware, or needing enclosures, fixtures, and concept models.",
    problem:
      "A physical concept needs to be held, tested, and iterated. Early prototyping surfaces design issues long before committing to tooling or production.",
    deliverables: [
      "Design-for-prototyping consultation",
      "CAD refinement within actual capability",
      "Enclosures, fixtures, adapters, and concept models",
      "Prototype printing and iteration",
      "Software-to-hardware concept demonstrations",
    ],
    note:
      "Printing work is assessed and quoted per project. This service does not advertise industrial materials, guaranteed tolerances, shipping promises, medical-grade parts, clinical suitability, or owned production equipment. Every engagement starts with an inquiry — there is no instant checkout or automated quote. Research and prototyping are kept clearly distinct from clinical use.",
    nextStep: { label: "Inquire about a prototype", href: "/contact?service=3d-printing-physical-prototyping" },
    icon: "printing",
  },
];

export const getService = (slug: string): ServiceGroup | undefined =>
  SERVICES.find((s) => s.slug === slug);
