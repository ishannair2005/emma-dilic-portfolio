import type { PortfolioProject } from "./types";

// Portfolio projects, grounded in the resume's "Work Experience," "Research,"
// and "GIS Projects" sections. To add a new project:
//   1. Drop images in /public/images/portfolio/<slug>/
//   2. Record each image's real pixel width/height (used to render maps at
//      their true aspect ratio, uncropped, on the project page).
//   3. Add an entry below with a unique slug and an `order` for grid position.
// Projects with `isPlaceholder: true` images have no source photography yet —
// swap the placeholder graphic for the real map when it's available.

export const PROJECTS: PortfolioProject[] = [
  {
    slug: "national-geographic-editorial-maps",
    title: "National Geographic Editorial Cartography",
    category: "Editorial & Environmental Cartography",
    year: "2026",
    role: "Cartography Intern",
    organization: "National Geographic, Washington, D.C.",
    tools: ["ArcGIS Pro", "QGIS", "Adobe Illustrator", "Adobe Photoshop", "MAPublisher"],
    summary:
      "Maps produced for National Geographic editorial storytelling spanning wildlife, exploration, and environmental subjects.",
    problem: [
      "National Geographic's editorial team needed accurate, visually compelling maps to accompany stories on wildlife, exploration, and the environment — work that had to meet the publication's exacting cartographic standards while remaining legible to a general audience.",
    ],
    description: [
      "As a Cartography Intern with National Geographic, I researched and visualized geographic data for environmental, wildlife, exploration, and global storytelling projects, translating source data and reporting into finished maps for print and digital publication.",
      "Each map moved through iterative review with National Geographic's cartographers, text editors, graphic designers, and researchers to ensure geographic accuracy and editorial fit before publication.",
    ],
    methodology: [
      "Built and refined spatial data in ArcGIS Pro and QGIS, then finished maps for publication in Adobe Illustrator, Photoshop, and MAPublisher, following National Geographic's cartographic standards for typography, symbology, and projection.",
    ],
    outcome: [
      "Selected maps from this body of work are shown below, spanning exploration routes, wildlife ranges, and environmental subjects.",
    ],
    heroImage: {
      src: "/images/portfolio/national-geographic-editorial-maps/wakhan.png",
      alt: "Map of the Wakhan Corridor region",
      orientation: "landscape",
      width: 3534,
      height: 2782,
    },
    images: [
      {
        src: "/images/portfolio/national-geographic-editorial-maps/wakhan.png",
        alt: "Map of the Wakhan Corridor region",
        caption: "Wakhan Corridor route map",
        orientation: "landscape",
        width: 3534,
        height: 2782,
      },
      {
        src: "/images/portfolio/national-geographic-editorial-maps/nz-whales.png",
        alt: "Map of whale distribution near New Zealand",
        caption: "New Zealand whale distribution map",
        orientation: "square",
        width: 1074,
        height: 1092,
      },
      {
        src: "/images/portfolio/national-geographic-editorial-maps/sheep.jpg",
        alt: "Wildlife range map",
        caption: "Wildlife range and habitat map",
        orientation: "landscape",
        width: 3300,
        height: 2550,
      },
      {
        src: "/images/portfolio/national-geographic-editorial-maps/brazil.png",
        alt: "Map of Andean South America showing named sacrificial locations",
        caption: "Andean South America locator map",
        orientation: "portrait",
        width: 730,
        height: 1100,
      },
      {
        src: "/images/portfolio/national-geographic-editorial-maps/antarctic-route.png",
        alt: "Map of an Antarctic expedition route",
        caption: "Antarctic expedition route map",
        orientation: "portrait",
        width: 1012,
        height: 1554,
      },
      {
        src: "/images/portfolio/national-geographic-editorial-maps/hurricane.jpg",
        alt: "Map tracking a hurricane's path",
        caption: "Hurricane track and impact map",
        orientation: "landscape",
        width: 3300,
        height: 2550,
      },
    ],
    order: 1,
  },
  {
    slug: "national-geographic-bookazine-atlas",
    title: "National Geographic Bookazine Atlas",
    category: "Editorial Cartography",
    year: "2026",
    role: "Cartography Intern",
    organization: "National Geographic, Washington, D.C.",
    tools: ["ArcGIS Pro", "QGIS", "Adobe Illustrator", "Adobe Photoshop", "MAPublisher"],
    summary: "Sketch and finished maps produced for a forthcoming National Geographic Bookazine atlas.",
    description: [
      "Alongside editorial map work, I contributed sketch and reference maps for a forthcoming National Geographic Bookazine atlas, producing over twenty sketch maps as part of the internship's print and digital map output.",
      "This early-stage cartographic work — establishing composition, hierarchy, and content before a map is finalized — is a core part of how National Geographic develops atlas-scale publications.",
    ],
    methodology: [
      "Sketches and layout studies were developed in tandem with the internship's broader production workflow: ArcGIS Pro and QGIS for spatial data, Illustrator, Photoshop, and MAPublisher for design and finishing.",
    ],
    outcome: [
      "Twenty-plus sketch maps contributed toward a forthcoming Bookazine atlas, in addition to three digital maps and four print maps produced during the internship.",
    ],
    heroImage: {
      src: "/images/portfolio/national-geographic-bookazine-atlas/bookazine.png",
      alt: "Sketch map developed for a National Geographic Bookazine atlas",
      orientation: "square",
      width: 1154,
      height: 1190,
    },
    images: [
      {
        src: "/images/portfolio/national-geographic-bookazine-atlas/bookazine.png",
        alt: "Sketch map developed for a National Geographic Bookazine atlas",
        caption: "Bookazine atlas sketch map",
        orientation: "square",
        width: 1154,
        height: 1190,
      },
      {
        src: "/images/portfolio/national-geographic-bookazine-atlas/cape-lookout.png",
        alt: "Map of the Cape Lookout area",
        caption: "Cape Lookout reference map",
        orientation: "portrait",
        width: 1012,
        height: 1555,
      },
      {
        src: "/images/portfolio/national-geographic-bookazine-atlas/kids-map.jpg",
        alt: "Illustrated map designed for a general audience",
        caption: "Illustrated general-audience map",
        orientation: "landscape",
        width: 1920,
        height: 1483,
      },
    ],
    order: 2,
  },
  {
    slug: "biogeographic-cartography-glacier-national-park",
    title: "Biogeographic Cartography: Glacier National Park",
    category: "Research Cartography",
    year: "2026",
    role: "Student Cartographer",
    organization: "Virginia Tech, for the Association of American Geographers",
    tools: ["ArcGIS Pro", "Adobe Illustrator"],
    summary:
      "Publication-quality maps built for faculty biogeography research on plant communities in Glacier National Park.",
    problem: [
      "A Virginia Tech biogeography professor's research examined plant communities across Glacier National Park, with a particular interest in how the distribution of plant families relates to glacial meltwater availability. That relationship needed to be communicated clearly for an Association of American Geographers publication.",
    ],
    description: [
      "I designed two publication-quality maps translating ecological and spatial research data into clear cartographic visuals, mapping the distribution of plant families across research plots to visualize differences associated with glacial meltwater availability.",
    ],
    methodology: [
      "Built thematic maps from plot-level ecological data in ArcGIS Pro, then refined symbology and typography in Adobe Illustrator to meet publication standards for the Association of American Geographers.",
    ],
    outcome: [
      "Both maps were produced for use in an Association of American Geographers publication on plant community distribution in Glacier National Park.",
    ],
    heroImage: {
      src: "/images/portfolio/biogeographic-cartography-glacier-national-park/fungus-web.png",
      alt: "Map of plant family distribution in Glacier National Park, web layout",
      orientation: "landscape",
      width: 2712,
      height: 1800,
    },
    images: [
      {
        src: "/images/portfolio/biogeographic-cartography-glacier-national-park/fungus-web.png",
        alt: "Map of plant family distribution in Glacier National Park, web layout",
        caption: "Plant distribution map — web layout",
        orientation: "landscape",
        width: 2712,
        height: 1800,
      },
      {
        src: "/images/portfolio/biogeographic-cartography-glacier-national-park/fungus-mobile.png",
        alt: "Map of plant family distribution in Glacier National Park, mobile layout",
        caption: "Plant distribution map — mobile layout",
        orientation: "portrait",
        width: 540,
        height: 1804,
      },
    ],
    links: [
      { label: "Related research entry", href: "/research#biogeographic-cartography", type: "external" },
    ],
    order: 3,
  },
  {
    slug: "cartographic-design-studies",
    title: "Cartographic Design Studies",
    category: "Independent & Coursework Cartography",
    year: "2024 – Present",
    role: "Student Cartographer",
    organization: "Virginia Tech",
    tools: ["ArcGIS Pro", "ArcGIS Online", "Adobe Illustrator", "Adobe Photoshop"],
    summary: "Independent and coursework map studies exploring thematic cartography across varied regions and subjects.",
    description: [
      "Outside of internship and client work, I use coursework and independent study to practice thematic cartography — testing composition, color, and symbology across a range of subjects, from terrain and weather to place-based reference maps.",
      "This ongoing body of work reflects my cartography coursework and teaching assistant experience at Virginia Tech, where I regularly build and update thematic map examples for the department's Cartography and Maps & Mapping courses.",
    ],
    methodology: [
      "Each study starts in ArcGIS Pro or ArcGIS Online for spatial data and layout, with final polish in Adobe Illustrator or Photoshop.",
    ],
    heroImage: {
      src: "/images/portfolio/cartographic-design-studies/carto-final.jpg",
      alt: "Thematic cartography study",
      orientation: "landscape",
      width: 3600,
      height: 2400,
    },
    images: [
      {
        src: "/images/portfolio/cartographic-design-studies/carto-final.jpg",
        alt: "Thematic cartography study",
        caption: "Cartography course final map study",
        orientation: "landscape",
        width: 3600,
        height: 2400,
      },
      {
        src: "/images/portfolio/cartographic-design-studies/maine.png",
        alt: "Map of Maine",
        caption: "Maine reference map",
        orientation: "portrait",
        width: 878,
        height: 1410,
      },
      {
        src: "/images/portfolio/cartographic-design-studies/nws-map.jpg",
        alt: "Weather-themed map study",
        caption: "Weather-themed map study",
        orientation: "landscape",
        width: 3300,
        height: 2550,
      },
      {
        src: "/images/portfolio/cartographic-design-studies/phone-map.jpg",
        alt: "Mobile-oriented map study",
        caption: "Mobile-oriented map study",
        orientation: "landscape",
        width: 3300,
        height: 2550,
      },
      {
        src: "/images/portfolio/cartographic-design-studies/banff-springs.png",
        alt: "Map of the Banff Springs area",
        caption: "Banff Springs reference map",
        orientation: "portrait",
        width: 886,
        height: 1322,
      },
      {
        src: "/images/portfolio/cartographic-design-studies/firestation.png",
        alt: "Facilities and infrastructure map study",
        caption: "Facilities and infrastructure map study",
        orientation: "portrait",
        width: 758,
        height: 1140,
      },
    ],
    order: 4,
  },
  {
    slug: "historical-map-of-botetourt-county",
    title: "Historical Map of Botetourt County",
    category: "Historical Cartography",
    year: "2025",
    role: "Cartographer",
    organization: "Botetourt Historical Society and Museum",
    tools: ["ArcGIS Pro", "Adobe Illustrator"],
    summary: "A historical map of Botetourt County, Virginia, circa 1776, produced for a county resolution reenactment.",
    problem: [
      "The Botetourt Historical Society and Museum needed a historically grounded map of Botetourt County as it existed circa 1776, for use in a county resolution reenactment event.",
    ],
    description: [
      "Partnering directly with two representatives from the Historical Society, I designed a historical map of Botetourt County set circa 1776, managing the project timeline over two months and coordinating with the team to meet the event's needs.",
    ],
    outcome: [
      "The finished map was used during the county resolution reenactment and is now on permanent display at the Botetourt Historical Society Museum.",
    ],
    heroImage: {
      src: "/images/placeholders/map-placeholder.svg",
      alt: "Placeholder graphic — map image forthcoming",
      isPlaceholder: true,
      orientation: "landscape",
      width: 1600,
      height: 1000,
    },
    images: [
      {
        src: "/images/placeholders/map-placeholder.svg",
        alt: "Placeholder graphic — map image forthcoming",
        caption: "Map image forthcoming — replace with the final Botetourt County map.",
        isPlaceholder: true,
        orientation: "landscape",
        width: 1600,
        height: 1000,
      },
    ],
    order: 5,
  },
  {
    slug: "fcps-safe-routes-to-school",
    title: "FCPS Safe Routes to School",
    category: "Transportation & Safety GIS",
    year: "2022 – 2023",
    role: "GIS Analyst",
    organization: "Fairfax County Public Schools",
    tools: ["ArcGIS Pro", "ArcGIS Online"],
    summary: "Forty safe walking routes designed for Fairfax County Public Schools, from GIS network and safety analysis.",
    problem: [
      "Fairfax County Public Schools needed safe, mapped walking routes to elementary, middle, and high schools, grounded in an analysis of road networks, school zones, and pedestrian safety factors.",
    ],
    description: [
      "Collaborating with teachers and county representatives, I helped design 40 safe walking routes across elementary, middle, and high schools in Fairfax County.",
    ],
    methodology: [
      "Used GIS tools to analyze road networks, school attendance zones, and pedestrian safety factors to inform route selection.",
    ],
    outcome: [
      "Final walking route maps were delivered to Fairfax County for implementation in its Safe Routes to School programs.",
    ],
    heroImage: {
      src: "/images/placeholders/map-placeholder.svg",
      alt: "Placeholder graphic — map image forthcoming",
      isPlaceholder: true,
      orientation: "landscape",
      width: 1600,
      height: 1000,
    },
    images: [
      {
        src: "/images/placeholders/map-placeholder.svg",
        alt: "Placeholder graphic — map image forthcoming",
        caption: "Map image forthcoming — replace with a Safe Routes to School map.",
        isPlaceholder: true,
        orientation: "landscape",
        width: 1600,
        height: 1000,
      },
    ],
    order: 6,
  },
  {
    slug: "pediatric-vaccine-uptake-disparities",
    title: "Determinants of Pediatric Vaccine Uptake",
    category: "Public Health GIS & Spatial Analysis",
    year: "2022",
    role: "Research Intern",
    organization: "George Mason University — Aspiring Scientists Summer Internship Program",
    tools: ["ArcGIS Pro", "QGIS"],
    summary: "Spatial analysis of pediatric COVID-19 vaccine disparities using CDC and county-level data.",
    problem: [
      "As part of the Aspiring Scientists Summer Internship Program, this project examined pediatric COVID-19 vaccine disparities across counties, using spatial analysis to surface geographic patterns relevant to public health strategy.",
    ],
    description: [
      "I conducted spatial analyses of CDC and county-level data to examine pediatric COVID-19 vaccine disparities, then designed thematic maps in ArcGIS Pro and QGIS to visualize geographic trends in vaccination uptake.",
    ],
    methodology: [
      "Combined CDC and county-level datasets in ArcGIS Pro and QGIS to build thematic maps of vaccination uptake, working alongside epidemiology experts to interpret spatial patterns.",
    ],
    outcome: [
      "Findings and maps were used to provide spatial insights for public health strategy recommendations.",
    ],
    heroImage: {
      src: "/images/placeholders/map-placeholder.svg",
      alt: "Placeholder graphic — map image forthcoming",
      isPlaceholder: true,
      orientation: "landscape",
      width: 1600,
      height: 1000,
    },
    images: [
      {
        src: "/images/placeholders/map-placeholder.svg",
        alt: "Placeholder graphic — map image forthcoming",
        caption: "Map image forthcoming — replace with a vaccine uptake map.",
        isPlaceholder: true,
        orientation: "landscape",
        width: 1600,
        height: 1000,
      },
    ],
    order: 7,
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getSortedProjects(): PortfolioProject[] {
  return [...PROJECTS].sort((a, b) => a.order - b.order);
}

export function getAdjacentProjects(slug: string) {
  const sorted = getSortedProjects();
  const index = sorted.findIndex((p) => p.slug === slug);
  const previous = index > 0 ? sorted[index - 1] : undefined;
  const next = index >= 0 && index < sorted.length - 1 ? sorted[index + 1] : undefined;
  return { previous, next };
}
