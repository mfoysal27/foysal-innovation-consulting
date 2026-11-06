/**
 * Starting offers. The featured path is a biological software or annotation
 * sprint. MVP build and idea validation remain available. No published prices.
 */

export interface Offer {
  id: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
  priceLabel: string;
  cta: { label: string; href: string };
  featured?: boolean;
}

export const OFFERS: Offer[] = [
  {
    id: "biological-tool-review",
    title: "Biological Tool Review",
    tagline: "Is custom software the right move?",
    description:
      "A short review of the biological or biomedical problem, the data, the users, and whether a custom tool, annotation workflow, or simpler automation should come first.",
    includes: [
      "Problem, data, and user clarification",
      "Fit for custom software versus existing tools",
      "Key assumptions and risks",
      "A recommended next step",
    ],
    priceLabel: "Request a scoped proposal",
    cta: {
      label: "Request a scoped proposal",
      href: "/contact?offer=biological-tool-review",
    },
  },
  {
    id: "annotation-feasibility-sprint",
    title: "Annotation & Analysis Sprint",
    tagline: "Can the data support the tool?",
    description:
      "A focused look at images, signals, or other biological data: annotation needs, a practical analysis approach, prototype evidence where it helps, and a written recommendation with limits.",
    includes: [
      "Data, labels, and constraint review",
      "Annotation or analysis approach",
      "Prototype evidence where appropriate",
      "Limitations and a written recommendation",
    ],
    priceLabel: "Request a scoped proposal",
    cta: {
      label: "Request a scoped proposal",
      href: "/contact?offer=annotation-feasibility-sprint",
    },
    featured: true,
  },
  {
    id: "mvp-planning-build",
    title: "MVP Planning & Build",
    tagline: "A usable first version.",
    description:
      "Define the biological or biomedical workflow the first version must support, build that agreed scope, demonstrate it, and hand over code and documentation.",
    includes: [
      "Requirements for the first version",
      "Implementation of the agreed scope",
      "A working demonstration",
      "Code and documentation handover",
    ],
    priceLabel: "Request a scoped proposal",
    cta: {
      label: "Request a scoped proposal",
      href: "/contact?offer=mvp-planning-build",
    },
  },
];

export const CUSTOM_OFFER: Offer = {
  id: "custom-project-support",
  title: "Idea Validation & Custom Support",
  tagline: "When the package is not the right shape.",
  description:
    "Idea validation, a defined feature, a feasibility question, or other custom software support for a biological or biomedical project — scoped to the situation.",
  includes: [
    "Idea and opportunity validation",
    "Defined-scope software or annotation work",
    "Scoped technical advisory",
  ],
  priceLabel: "Request a scoped proposal",
  cta: {
    label: "Describe your project",
    href: "/contact?offer=custom-project-support",
  },
};
