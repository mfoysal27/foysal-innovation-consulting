/**
 * PRODUCTIZED STARTING OFFERS
 * --------------------------------------------------------------------------
 * Three concrete entry points plus a custom option. No invented pricing —
 * every offer routes to "Request a scoped proposal".
 */

export interface Offer {
  id: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
  /** Price is intentionally a call-to-scope, not a number. */
  priceLabel: string;
  cta: { label: string; href: string };
  featured?: boolean;
}

export const OFFERS: Offer[] = [
  {
    id: "idea-opportunity-review",
    title: "Idea & Opportunity Review",
    tagline: "Clarity before commitment.",
    description:
      "A focused review of your idea to sharpen the problem, the customer, the key assumptions, and the most sensible next steps.",
    includes: [
      "Problem and customer clarification",
      "Assumption and risk mapping",
      "Evidence and demand considerations",
      "A prioritized set of next steps",
    ],
    priceLabel: "Request a scoped proposal",
    cta: { label: "Request a scoped proposal", href: "/contact?offer=idea-opportunity-review" },
  },
  {
    id: "technical-feasibility-sprint",
    title: "Technical Feasibility Sprint",
    tagline: "Can it work, and how?",
    description:
      "A structured examination of inputs, constraints, and approach — with prototype evidence where appropriate — ending in a clear recommendation and stated limitations.",
    includes: [
      "Inputs, constraints, and approach review",
      "Prototype evidence where appropriate",
      "Stated limitations and open risks",
      "A written recommendation",
    ],
    priceLabel: "Request a scoped proposal",
    cta: { label: "Request a scoped proposal", href: "/contact?offer=technical-feasibility-sprint" },
    featured: true,
  },
  {
    id: "mvp-planning-build",
    title: "MVP Planning & Build",
    tagline: "From requirements to a working build.",
    description:
      "Define requirements, implement an agreed scope, demonstrate the result, and hand over code and documentation you own.",
    includes: [
      "Requirements and scope definition",
      "Implementation of the agreed scope",
      "A working demonstration",
      "Code and documentation handover",
    ],
    priceLabel: "Request a scoped proposal",
    cta: { label: "Request a scoped proposal", href: "/contact?offer=mvp-planning-build" },
  },
];

export const CUSTOM_OFFER: Offer = {
  id: "custom-project-support",
  title: "Custom Project Support",
  tagline: "Work that does not fit a package.",
  description:
    "Specialist support for a defined project — troubleshooting, a feature build, a feasibility question, or fractional technical advisory — scoped to your situation.",
  includes: [
    "Defined-scope engineering or advisory",
    "Scoped troubleshooting or feature work",
    "Fractional technical advisory (scoped)",
  ],
  priceLabel: "Request a scoped proposal",
  cta: { label: "Describe your project", href: "/contact?offer=custom-project-support" },
};
