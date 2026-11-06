/**
 * FREQUENTLY ASKED QUESTIONS
 * --------------------------------------------------------------------------
 * Honest, scope-aware answers. Edit freely.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: FaqItem[] = [
  {
    question: "Can you help before I have a technical specification?",
    answer:
      "Yes. Many engagements begin exactly there. We start by clarifying the problem, the customer, and the key assumptions, then shape a specification together before any building begins.",
  },
  {
    question: "Do you work with solo founders and small businesses?",
    answer:
      "Yes. The consultancy is built for early-stage founders, small product teams, and small businesses with a defined workflow problem. You work directly with the founder throughout.",
  },
  {
    question: "Can a project start with a feasibility study?",
    answer:
      "Absolutely. A Technical Feasibility Sprint is often the lowest-risk way to begin: we examine the inputs, constraints, and approach, build prototype evidence where it helps, and finish with a clear recommendation and stated limitations.",
  },
  {
    question: "Can software run offline?",
    answer:
      "Where it fits the problem, yes. Offline and local-first designs are an option — useful when connectivity, cost, or data-handling considerations matter. This is an engineering approach, chosen per project, not a security guarantee.",
  },
  {
    question: "Do you offer 3D printing?",
    answer:
      "Yes, as an inquiry-first service. Prototyping work is assessed and quoted per project. There is no instant checkout or automated quote, and no claim of industrial materials, guaranteed tolerances, or medical-grade parts.",
  },
  {
    question: "Do you support grant proposals?",
    answer:
      "Yes — proposal development and review support, including for SBIR/STTR. This is technical writing and planning support, not investment or legal advice, agency affiliation, or a guarantee of funding. Current solicitation requirements should always be confirmed against the official program.",
  },
  {
    question: "Who owns the delivered work?",
    answer:
      "Ownership, intellectual property, and confidentiality terms are agreed in writing before work begins. Delivered, purpose-built work is handed over to you; pre-existing tools and third-party components are addressed explicitly in that agreement rather than assumed to transfer.",
  },
  {
    question: "How are costs and timelines determined?",
    answer:
      "Each engagement is scoped individually. After an initial discussion we agree a scope, then provide a written proposal with milestones so costs and timelines are clear before work starts. Pricing is provided per proposal rather than published as fixed rates.",
  },
];
