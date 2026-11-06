/**
 * SELECTED EXPERIENCE
 * --------------------------------------------------------------------------
 * Concise, public, non-confidential summaries of the founder's PRIOR research
 * and employment. These are NOT consultancy client projects and must not be
 * presented as such. No fabricated outcomes, no proprietary assets.
 */

export interface ExperienceItem {
  title: string;
  /** Explicit category to separate background from client work. */
  category: "Research & R&D background" | "Industry background";
  problem: string;
  contribution: string;
  technologies: string[];
  demonstrates: string;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "AI-assisted 3D mapping of enteric neurons",
    category: "Research & R&D background",
    problem:
      "Understanding the enteric nervous system requires reconstructing and analyzing large volumes of biomedical imaging data — work that is slow and error-prone by hand.",
    contribution:
      "As a Data Science Analyst, contributed to AI and computational tools that assist 3D mapping and analysis of enteric neurons from biomedical imaging.",
    technologies: ["Python", "Deep learning", "Computer vision", "Image analysis", "Scientific software"],
    demonstrates:
      "Applying machine learning and computer vision to complex, high-volume scientific imaging with maintainable analysis tooling.",
  },
  {
    title: "Smartphone-based imaging and biomedical measurement",
    category: "Research & R&D background",
    problem:
      "Making measurement and imaging more accessible means moving capability from specialized instruments onto widely available devices.",
    contribution:
      "Contributed to research and development on smartphone-based imaging and biomedical measurement, including prototype software and on-device image analysis.",
    technologies: ["Android development", "Computer vision", "Signal/image processing", "Prototype software"],
    demonstrates:
      "End-to-end prototyping from sensor and camera input to on-device analysis and a usable application.",
  },
  {
    title: "Biomedical signal processing and sensor-based analysis",
    category: "Research & R&D background",
    problem:
      "Raw biomedical signals and sensor streams are noisy and high-dimensional; extracting reliable, interpretable features is the hard part.",
    contribution:
      "Worked on biomedical signal processing and sensor-based analysis, developing methods to clean, process, and extract meaningful features from signal data.",
    technologies: ["MATLAB", "Python", "Signal processing", "Machine learning", "Data pipelines"],
    demonstrates:
      "Turning messy real-world signals into structured, analyzable, decision-supporting information.",
  },
  {
    title: "Grant-supported prototype software and research commercialization",
    category: "Research & R&D background",
    problem:
      "Research results only create value when their feasibility and commercial path are tested and clearly communicated.",
    contribution:
      "Contributed to NSF SBIR/STTR-supported work and NIH-supported projects, and served as an NSF I-Corps Entrepreneurial Lead (2021) conducting customer discovery. This spans prototype software development and research commercialization activities.",
    technologies: ["Customer discovery", "Feasibility assessment", "Prototype software", "Commercialization planning"],
    demonstrates:
      "Bridging technical R&D and commercialization — the combination at the core of this consultancy.",
  },
];

/**
 * Honest attribution note shown on the Experience page.
 */
export const EXPERIENCE_NOTE =
  "These summaries describe the founder's previous research and employment, not consultancy client engagements. They use only public, non-confidential descriptions and demonstrate relevant expertise. NSF I-Corps refers to customer-discovery and commercialization training; participation in SBIR/STTR- and NIH-supported projects does not imply that any grant was personally awarded to, or led by, the founder, nor that this consultancy received such awards.";
