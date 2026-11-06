/**
 * HOW ENGAGEMENT WORKS
 * --------------------------------------------------------------------------
 * A simple, honest five-step process.
 */

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const PROCESS: ProcessStep[] = [
  {
    step: "1",
    title: "Initial discussion",
    description:
      "A conversation about your idea, problem, and goals — enough to understand whether and how I can help.",
  },
  {
    step: "2",
    title: "Scope & feasibility",
    description:
      "We define what success looks like and assess feasibility, so the work is grounded in reality before commitments are made.",
  },
  {
    step: "3",
    title: "Written proposal & milestones",
    description:
      "You receive a written proposal with scope, milestones, and clear terms for ownership and confidentiality.",
  },
  {
    step: "4",
    title: "Development with review points",
    description:
      "Work proceeds against the agreed scope with defined review points, so you stay informed and can steer along the way.",
  },
  {
    step: "5",
    title: "Handover & optional support",
    description:
      "You receive the deliverables, code, and documentation, with optional ongoing support if you want it.",
  },
];
