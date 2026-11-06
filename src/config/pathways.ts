/**
 * PRODUCT DEVELOPMENT PATHWAYS
 * --------------------------------------------------------------------------
 * Three pathways express breadth as one coherent journey rather than a
 * miscellaneous service list.
 */

export interface Pathway {
  step: string;
  title: string;
  description: string;
  /** Which service groups most support this stage. */
  relatedServices: string[];
  icon: "validate" | "build" | "develop";
}

export const PATHWAYS: Pathway[] = [
  {
    step: "01",
    title: "Validate the opportunity",
    description:
      "Clarify the problem and customer, test demand with real evidence, and assess technical and commercial feasibility before committing budget.",
    relatedServices: [
      "business-discovery-commercialization",
      "proposals-funding-preparation",
    ],
    icon: "validate",
  },
  {
    step: "02",
    title: "Build the prototype",
    description:
      "Translate a validated idea into a proof of concept, clickable prototype, or functional MVP — in software, and at the software-to-hardware boundary.",
    relatedServices: [
      "mvp-on-demand-engineering",
      "ai-data-science-software",
      "3d-printing-physical-prototyping",
    ],
    icon: "build",
  },
  {
    step: "03",
    title: "Develop & improve the solution",
    description:
      "Harden what works: better models and data pipelines, custom software, integrations, documentation, and a clean handover you can maintain.",
    relatedServices: [
      "ai-data-science-software",
      "mvp-on-demand-engineering",
    ],
    icon: "develop",
  },
];
