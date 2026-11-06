/**
 * FREQUENTLY ASKED QUESTIONS
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: FaqItem[] = [
  {
    question: "What kinds of biological and biomedical software do you build?",
    answer:
      "Custom tools for research and product workflows: image and signal analysis, annotation, data processing, visualization, and small applications your team can run and maintain. The work is scoped to a defined problem rather than a generic platform.",
  },
  {
    question: "Can you help before I have a technical specification?",
    answer:
      "Yes. Many projects start by clarifying the biological question, the data, the people who will use the tool, and the assumptions. A specification comes out of that, before a larger build.",
  },
  {
    question: "Is this clinical or diagnostic software?",
    answer:
      "No. Projects are for research, prototyping, and internal or product workflows. They are not offered as clinical diagnostic products and do not claim clinical suitability or regulatory clearance.",
  },
  {
    question: "Can a project start with annotation or a feasibility study?",
    answer:
      "Yes. An Annotation & Analysis Sprint is a common first step: review the data and labeling needs, test an approach with prototype evidence where it helps, and finish with a recommendation and stated limits.",
  },
  {
    question: "Do you also help with MVPs and idea validation?",
    answer:
      "Yes, as additional support around the software. MVP work turns an agreed scope into a usable first version. Idea validation tests whether the problem and the user justify building it. Both are scoped; neither is an open-ended product team.",
  },
  {
    question: "Can software run offline or stay on local systems?",
    answer:
      "Where the data and the workflow call for it, yes. Offline and local-first designs are an option for research data that should not leave your environment. That is a design choice, not a security certification.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Research groups, biomedical and biological product teams, early-stage founders, and small businesses with a defined workflow. You work directly with the founder.",
  },
  {
    question: "Do you support grant proposals?",
    answer:
      "Yes, as part of idea-validation and planning support, including SBIR/STTR writing help. It is technical writing and planning, not investment or legal advice, agency affiliation, or a guarantee of funding.",
  },
  {
    question: "Do you still help with physical prototypes?",
    answer:
      "When a software concept needs a physical form, prototyping can be included in an MVP engagement. It is assessed and quoted per project, with no claim of industrial materials, guaranteed tolerances, or medical-grade parts.",
  },
  {
    question: "Who owns the delivered work?",
    answer:
      "Ownership, intellectual property, and confidentiality are agreed in writing before work begins. Purpose-built work is handed over to you. Pre-existing tools and third-party components are named in that agreement rather than assumed to transfer.",
  },
  {
    question: "How are costs and timelines determined?",
    answer:
      "After a first discussion, you receive a written proposal with scope and milestones. Pricing is per proposal, not a published rate card.",
  },
];
