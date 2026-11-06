/**
 * Three pathways: biological software first, then a usable build, then checks
 * and improvement. MVP work and idea validation support that path.
 */

export interface Pathway {
  step: string;
  title: string;
  description: string;
  relatedServices: string[];
  icon: "validate" | "build" | "develop";
}

export const PATHWAYS: Pathway[] = [
  {
    step: "01",
    title: "Frame the biological problem",
    description:
      "Clarify the scientific or workflow question, the data you have, and whether a custom tool, an annotation workflow, or a smaller validation study is the right first step.",
    relatedServices: ["idea-validation", "validation-scientific-tools"],
    icon: "validate",
  },
  {
    step: "02",
    title: "Build the software or annotation tool",
    description:
      "Design and implement custom software, AI-assisted annotation, or analysis tooling for the biological or biomedical job — including an MVP when a usable first version is the goal.",
    relatedServices: [
      "biological-biomedical-software",
      "ai-annotation-analysis",
      "mvp-development",
    ],
    icon: "build",
  },
  {
    step: "03",
    title: "Validate and hand it over",
    description:
      "Check the tool against its stated purpose, document limits, and leave repeatable code, pipelines, and notes your team can maintain.",
    relatedServices: [
      "validation-scientific-tools",
      "biological-biomedical-software",
    ],
    icon: "develop",
  },
];
