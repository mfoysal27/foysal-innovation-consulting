/**
 * CENTRAL SITE CONFIGURATION
 * --------------------------------------------------------------------------
 * Edit brand, contact, links, and deployment URL here. Nothing else in the
 * codebase hard-codes these values, so this file is the single source of
 * truth. See CONTENT-GUIDE.md for a plain-language walkthrough.
 */

export interface SocialLink {
  label: string;
  url: string;
  /**
   * Only verified links are rendered. Set to `true` once you have confirmed
   * the profile resolves and belongs to the founder. Unverified links stay
   * hidden so nothing unconfirmed is published.
   */
  verified: boolean;
}

export interface SiteConfig {
  /** Working trade name. Editable. Not a claim of a registered entity. */
  brandName: string;
  brandNameShort: string;
  monogram: string;
  tagline: string;
  positioning: string;

  founderLegalName: string;
  founderDisplayName: string;
  founderCredential: string;
  location: string;
  serviceArea: string;

  /**
   * PUBLIC CONTACT EMAIL.
   * Leave empty until a verified business email is confirmed. While empty the
   * inquiry form uses a clearly-labelled fallback and the direct-email link is
   * hidden. Do NOT invent an address or reuse an old resume address.
   */
  contactEmail: string;

  /**
   * Optional scheduling link (e.g. Cal.com / Calendly). Leave empty to hide.
   * A dead calendar button must never be published.
   */
  bookingUrl: string;

  /** Canonical production URL. Update after the real deployment URL is known. */
  url: string;

  social: SocialLink[];

  /** Independence / non-endorsement disclaimer shown near bio and footer. */
  independenceNotice: string;

  /** Default SEO copy. */
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  ogImage: string;
}

export const SITE: SiteConfig = {
  brandName: "Foysal Innovation Consulting",
  brandNameShort: "Foysal Innovation",
  monogram: "KF",
  tagline: "From technical idea to validated opportunity and working prototype.",
  positioning:
    "Founder-led consulting that combines business discovery with hands-on engineering.",

  founderLegalName: "Md Kamrul Hasan Foysal",
  founderDisplayName: "Kamrul Foysal",
  founderCredential: "Ph.D.",
  location: "Rochester, Minnesota",
  serviceArea: "Working remotely with clients across the United States.",

  // Verified business email supplied by the founder.
  contactEmail: "foysalinnovationconsulting@gmail.com",

  // No scheduling link supplied yet — stays hidden.
  bookingUrl: "",

  // Live production URL (Cloudflare Workers static assets deployment).
  url: "https://foysal-innovation-consulting.foysalinnovationconsulting.workers.dev",

  social: [
    // Candidate links from the resume. Kept UNVERIFIED (hidden) until confirmed.
    {
      label: "GitHub",
      url: "https://github.com/mfoysal27",
      verified: false,
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/kamrulhasanfoysal",
      verified: false,
    },
  ],

  independenceNotice:
    "Foysal Innovation Consulting is an independent consultancy. References to past employers, universities, and research programs describe the founder's professional background only and do not imply endorsement, partnership, or sponsorship by those institutions.",

  defaultTitle: "Foysal Innovation Consulting",
  titleTemplate: "%s | Foysal Innovation Consulting",
  defaultDescription:
    "Founder-led consulting that turns a promising idea into a clear plan and a working prototype. Business discovery, AI, software, and engineering support for founders and small teams, led by Kamrul Foysal, Ph.D.",
  ogImage: "/og-image.svg",
};

/** Primary navigation (desktop + mobile). */
export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Helper: is a public contact email configured? */
export const hasContactEmail = (): boolean => SITE.contactEmail.trim().length > 0;

/** Helper: only verified social links should ever render. */
export const verifiedSocial = (): SocialLink[] =>
  SITE.social.filter((link) => link.verified && link.url.trim().length > 0);
