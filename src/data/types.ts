// Shared content types for the portfolio, research, and resume data files.

export type ProjectImage = {
  /** Path under /public, e.g. "/images/portfolio/slug/file.jpg" */
  src: string;
  alt: string;
  caption?: string;
  /** Portrait/landscape hint used to vary the homepage grid. */
  orientation?: "landscape" | "portrait" | "square";
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
