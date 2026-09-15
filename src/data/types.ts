// Shared content types for the portfolio, research, and resume data files.

export type ProjectImage = {
  /** Path under /public, e.g. "/images/portfolio/slug/file.jpg" */
  src: string;
  alt: string;
  caption?: string;
  /** Portrait/landscape hint used only to vary the cropped homepage grid. */
  orientation?: "landscape" | "portrait" | "square";
  /**
   * Intrinsic pixel dimensions. Used to render the image at its true aspect
   * ratio (no cropping) on project/research pages, so map labels and edges
   * are never cut off — while still reserving layout space up front.
   */
  width: number;
  height: number;
  /** True for generated placeholder art standing in for a missing image. */
  isPlaceholder?: boolean;
};

export type ExternalLink = {
  label: string;
  href: string;
  type:
    | "storymap"
    | "arcgis"
    | "webmap"
    | "pdf"
    | "github"
    | "publication"
    | "external";
};

export type PortfolioProject = {
  slug: string;
  title: string;
  /** Short category shown on cards, e.g. "Editorial Cartography" */
  category: string;
  year: string;
  role?: string;
  organization?: string;
  tools: string[];
  /** One or two sentences used on the homepage card and as page dek. */
  summary: string;
  /** Problem statement / research question, as paragraphs. */
  problem?: string[];
  /** Full project description, as paragraphs. */
  description: string[];
  methodology?: string[];
  outcome?: string[];
  heroImage: ProjectImage;
  images: ProjectImage[];
  links?: ExternalLink[];
  /** Lower number = appears earlier in the homepage grid. */
  order: number;
};

export type ResearchEntry = {
  slug: string;
  title: string;
  institution: string;
  dates: string;
  role: string;
  question: string;
  description: string[];
  methods: string[];
  outputs?: string[];
  relatedProjectSlug?: string;
  image?: ProjectImage;
  order: number;
};
