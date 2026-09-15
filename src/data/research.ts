import type { ResearchEntry } from "./types";

// Research experience, drawn from the resume's "Research" section.
// Add a new entry by appending an object below with a unique slug.

export const RESEARCH_ENTRIES: ResearchEntry[] = [
  {
    slug: "advanced-cartography-geovisualization",
    title: "Advanced Cartography and Geovisualization",
    institution: "Virginia Tech",
    dates: "2025 – Present",
    role: "Undergraduate Researcher",
    question:
      "How can emerging mapping techniques and geovisualization methods be evaluated and integrated into a new undergraduate cartography course?",
    description: [
      "This ongoing undergraduate research supports the development of a new Virginia Tech course in advanced cartography and geovisualization.",
      "The work involves researching and evaluating emerging mapping techniques, visualization methods, and geospatial technologies for integration into course materials, and assisting in developing mapping exercises and instructional content that demonstrate advanced approaches to spatial data visualization.",
    ],
    methods: [
      "Literature and technique review of emerging geovisualization methods",
      "Instructional design of mapping exercises",
      "Geospatial technology evaluation",
    ],
    order: 1,
  },
  {
    slug: "biogeographic-cartography",
    title: "Biogeographic Cartography — Association of American Geographers",
    institution: "Virginia Tech",
    dates: "Spring 2026",
    role: "Student Cartographer",
    question:
      "How does the distribution of plant families across Glacier National Park relate to glacial meltwater availability?",
    description: [
      "Working with a Virginia Tech biogeography professor's research into plant communities in Glacier National Park, I designed two publication-quality maps translating ecological and spatial data into clear cartographic visuals.",
      "The maps visualize the distribution of plant families across research plots to highlight differences associated with glacial meltwater availability.",
    ],
    methods: ["Thematic mapping in ArcGIS Pro", "Ecological data visualization", "Cartographic production in Adobe Illustrator"],
    outputs: ["Maps produced for an Association of American Geographers publication"],
    relatedProjectSlug: "biogeographic-cartography-glacier-national-park",
    image: {
      src: "/images/portfolio/biogeographic-cartography-glacier-national-park/fungus-web.png",
      alt: "Map of plant family distribution in Glacier National Park",
      orientation: "landscape",
      width: 2712,
      height: 1800,
    },
    order: 2,
  },
  {
    slug: "medical-geography-independent-study",
    title: "Medical Geography — Independent Study",
    institution: "Virginia Tech",
    dates: "Spring 2026",
    role: "Independent Researcher",
    question:
      "What spatial patterns and environmental factors shape malaria transmission in Bangladesh?",
    description: [
      "This independent study examined malaria transmission and spatial patterns in Bangladesh through the lens of medical geography.",
      "I analyzed and synthesized research from a doctoral dissertation to investigate relationships between malaria, environmental conditions, human populations, and geographic factors, applying medical geography concepts to understand the spatial distribution and environmental drivers of infectious disease.",
    ],
    methods: [
      "Synthesis of doctoral dissertation research",
      "Medical geography framework application",
      "Spatial pattern analysis of disease transmission",
    ],
    order: 3,
  },
];

export function getSortedResearch(): ResearchEntry[] {
  return [...RESEARCH_ENTRIES].sort((a, b) => a.order - b.order);
}
