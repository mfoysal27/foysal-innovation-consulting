/**
 * SERVICE GROUPS
 * --------------------------------------------------------------------------
 * Five service groups. The first three are the core offer: custom biological
 * and biomedical software, AI annotation, and validation tools. MVP development
 * and idea validation are additional support. Edit copy here; pages and cards
 * read from this file.
 */

export interface ServiceGroup {
  slug: string;
  title: string;
  summary: string;
  audience: string;
  problem: string;
  deliverables: string[];
  note?: string;
  nextStep: { label: string; href: string };
  icon: "discovery" | "proposal" | "software" | "mvp" | "validate";
}

export const SERVICES: ServiceGroup[] = [
  {
    slug: "biological-biomedical-software",
    title: "Biological & Biomedical Software",
    summary:
      "Purpose-built software for biological and biomedical workflows — from imaging and signals to analysis tools your team can actually use.",
    audience:
      "Research groups, biomedical teams, and life-science founders who need software shaped around a real biological or biomedical workflow.",
    problem:
      "General tools rarely fit the data, the lab process, or the question. Teams end up stitching together scripts that are hard to repeat, hand over, or trust.",
    deliverables: [
      "Custom desktop, web, and Android applications for biological and biomedical work",
      "Image analysis and biomedical measurement software",
      "Signal and sensor analysis tools",
      "Workflow tools that fit an existing lab or product process",
      "Offline and local-first applications where data should stay on your systems",
      "Integration with existing tools and data sources",
      "Documentation and maintainable code handover",
    ],
    note:
      "Work is for research, prototyping, and internal or product workflows. It is not offered as a clinical diagnostic product, and it does not claim clinical suitability or regulatory clearance. Privacy-conscious design is an engineering approach, not a security certification.",
    nextStep: {
      label: "Scope a biological software project",
      href: "/contact?service=biological-biomedical-software",
    },
    icon: "software",
  },
  {
    slug: "ai-annotation-analysis",
    title: "AI Annotation & Analysis",
    summary:
      "Annotation workflows and AI-assisted analysis for biological images, signals, and related datasets — used only where they improve the work.",
    audience:
      "Teams labeling, reviewing, or analyzing biological and biomedical images, microscopy, or signal data.",
    problem:
      "Annotation is slow, inconsistent, and hard to scale. A model only helps if the labels, the evaluation, and the limits are clear.",
    deliverables: [
      "Annotation workflow design and custom annotation tools",
      "AI-assisted labeling and review for images and related data",
      "Computer vision and image analysis for biological and biomedical data",
      "Signal processing and sensor-data analysis",
      "Machine learning feasibility studies on your kind of data",
      "Model evaluation, error review, and stated limitations",
      "A recommendation to use simpler automation when AI is unnecessary",
    ],
    note:
      "Annotation and models are research and analysis tools. They are not presented as clinical diagnosis, and a useful outcome can be that AI is not the right next step.",
    nextStep: {
      label: "Discuss an annotation or analysis tool",
      href: "/contact?service=ai-annotation-analysis",
    },
    icon: "discovery",
  },
  {
    slug: "validation-scientific-tools",
    title: "Validation & Scientific Tools",
    summary:
      "Check that a biological or biomedical tool does what you think it does, then leave you with pipelines, checks, and a clear record of limits.",
    audience:
      "Labs and product teams that need evidence a method, model, or workflow is fit for its stated research or prototyping use.",
    problem:
      "A demo is not the same as a tool you can rely on. Without checks against known inputs, failure cases, and a written scope, it is hard to know what the software actually supports.",
    deliverables: [
      "Validation plans tied to the question the tool is meant to answer",
      "Test data, checks, and comparison against an agreed reference where one exists",
      "Data processing, visualization, and repeatable analysis pipelines",
      "Quality checks and documented limitations",
      "Evaluation of models and analysis methods",
      "Handover notes a scientist or engineer can rerun",
    ],
    note:
      "Validation here means technical and scientific checks against an agreed purpose. It is not clinical validation, regulatory approval, or a guarantee that a method will succeed.",
    nextStep: {
      label: "Plan a validation or tooling sprint",
      href: "/contact?service=validation-scientific-tools",
    },
    icon: "proposal",
  },
  {
    slug: "mvp-development",
    title: "MVP Development",
    summary:
      "Additional support to turn a biological or biomedical tool into a focused prototype or MVP, with a clean handover.",
    audience:
      "Founders and small teams who already know the scientific problem and need a usable first product or internal tool.",
    problem:
      "A working analysis is not yet something a collaborator or early user can run. An MVP has to stay inside a defined scope.",
    deliverables: [
      "Problem and requirements definition",
      "Technical architecture and technology selection",
      "Proof of concept, clickable prototype, or functional MVP",
      "Internal tools, dashboards, and test automation",
      "Software-to-hardware feasibility, including concept models when a physical form helps",
      "Documentation, handover, and optional ongoing support",
    ],
    note:
      "This is scoped build support, not a full-time CTO commitment. Physical prototyping, when needed, is assessed and quoted per project. It does not include industrial materials, guaranteed tolerances, medical-grade parts, or clinical devices.",
    nextStep: {
      label: "Plan an MVP",
      href: "/contact?service=mvp-development",
    },
    icon: "mvp",
  },
  {
    slug: "idea-validation",
    title: "Idea Validation",
    summary:
      "Additional support to test whether a biological or biomedical product idea is worth building, before the software budget grows.",
    audience:
      "Early-stage founders and research teams deciding whether a tool, workflow, or product concept should move forward.",
    problem:
      "A promising technical result is not yet evidence that someone needs the product, or that the first version should be built as imagined.",
    deliverables: [
      "Problem, user, and assumption clarification",
      "Interview planning and customer or user discovery",
      "Technical and practical feasibility assessments",
      "Value proposition and early go-to-market notes",
      "Business model and pricing hypotheses",
      "Proposal, pitch, and SBIR/STTR writing support when a submission is the next step",
    ],
    note:
      "Discovery gathers evidence. It can recommend a change of direction or a stop. Proposal support is writing and planning help, not investment advice, legal advice, agency affiliation, or a promise of funding.",
    nextStep: {
      label: "Start with idea validation",
      href: "/contact?service=idea-validation",
    },
    icon: "validate",
  },
];

export const getService = (slug: string): ServiceGroup | undefined =>
  SERVICES.find((s) => s.slug === slug);
