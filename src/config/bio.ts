/**
 * FOUNDER BIOGRAPHY & CREDENTIALS
 * --------------------------------------------------------------------------
 * Edit biography copy, education, and background here. Keep to supported
 * facts only. No invented startup names, dates, exits, revenue, investment
 * totals, customer counts, or performance metrics.
 */

/** Short credibility summary used on the home page. */
export const CREDIBILITY_SUMMARY =
  "Ph.D. engineer and data scientist with CEO and CTO experience across startups — combining business discovery with hands-on AI, software, and prototyping.";

/** Longer biography paragraphs for the About page. */
export const BIO_PARAGRAPHS: string[] = [
  "Kamrul Foysal, Ph.D., is an engineer, data scientist, and founder who helps turn technical ideas into validated opportunities and working prototypes. He is currently a Data Science Analyst in Mayo Clinic's Department of Physiology and Biomedical Engineering, where he works on AI and computational tools for biomedical imaging and enteric neuroscience.",
  "His background spans electrical and computer engineering, AI engineering, biomedical engineering, signal processing, and data science. Earlier in his career he worked as an Executive Engineer at Siemens Healthineers, and his research and development experience includes smartphone-based imaging, biomedical signals, image analysis, machine learning, prototype software, and CAD prototypes. He has contributed to NSF SBIR/STTR-supported work and NIH-supported projects, and served as an NSF I-Corps Entrepreneurial Lead in 2021.",
  "Alongside his technical work, he brings CEO and CTO experience across multiple startups, with hands-on involvement in business development, customer discovery, commercialization, proposals, business model development, and startup execution. That combination — building the technology and building the business around it — is what this consultancy is built on.",
  "Clients work directly with Kamrul. Engagements are deliberately focused rather than spread across a large team, so the person doing the discovery and the engineering is the person you talk to.",
];

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
}

export const EDUCATION: EducationItem[] = [
  {
    degree: "Ph.D.",
    field: "Electrical and Computer Engineering",
    institution: "Texas Tech University",
  },
  {
    degree: "M.S.",
    field: "Electrical and Computer Engineering",
    institution: "Texas Tech University",
  },
  {
    degree: "B.Sc.",
    field: "Electrical and Electronic Engineering",
    institution: "Bangladesh University of Engineering and Technology",
  },
];

/** Grouped technical expertise. */
export const EXPERTISE: { group: string; items: string[] }[] = [
  {
    group: "Domains",
    items: [
      "Electrical & computer engineering",
      "AI engineering",
      "Biomedical engineering",
      "Signal processing",
      "Data science",
    ],
  },
  {
    group: "Build & languages",
    items: [
      "Python",
      "MATLAB",
      "C / C++",
      "Android development",
      "Scientific software",
    ],
  },
  {
    group: "AI & data",
    items: [
      "Machine learning",
      "Deep learning",
      "Computer vision",
      "Data pipelines",
      "Cloud computing",
    ],
  },
  {
    group: "Business & commercialization",
    items: [
      "Customer discovery",
      "Business model development",
      "Commercialization & go-to-market",
      "Proposals & SBIR/STTR support",
      "Startup execution",
    ],
  },
];

/** Positioning / highlight items for the About page. */
export const BACKGROUND_HIGHLIGHTS: string[] = [
  "Ph.D. in Electrical and Computer Engineering, Texas Tech University",
  "NSF I-Corps Entrepreneurial Lead (2021)",
  "Currently Data Science Analyst, Mayo Clinic — Physiology & Biomedical Engineering",
  "Former Executive Engineer, Siemens Healthineers",
  "CEO and CTO experience across multiple startups",
];
