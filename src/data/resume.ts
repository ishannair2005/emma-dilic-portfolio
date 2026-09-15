// Structured resume content, sourced directly from Emma Dilic's resume.
// The Resume page renders this data as HTML (not a PDF embed); the original
// PDF is served separately for download — see RESUME_PDF_PATH in site.ts.

export type ResumeExperience = {
  title: string;
  organization: string;
  location?: string;
  dates: string;
  bullets: string[];
};

export type ResumeEducation = {
  institution: string;
  location: string;
  degree: string;
  minor?: string;
  dates: string;
};

export type ResumeSkill = {
  name: string;
  level: "Advanced" | "Intermediate" | "Novice/Intermediate";
};

export type ResumeLanguage = {
  name: string;
  level: "Fluent" | "Conversational";
};

export const EDUCATION: ResumeEducation[] = [
  {
    institution: "Virginia Tech, College of Natural Resources and Environment",
    location: "Blacksburg, VA",
    degree: "Bachelor of Arts in Geography",
    minor: "Geographic Information Systems (GIS)",
    dates: "Expected May 2027",
  },
];

export const EXPERIENCE: ResumeExperience[] = [
  {
    title: "National Geographic Cartography Intern",
    organization: "National Geographic",
    location: "Washington, D.C.",
    dates: "May 2026 – August 2026",
    bullets: [
      "Created print and digital maps for National Geographic editorial stories, producing three digital maps, four print maps, and 20+ sketch maps for a forthcoming Bookazine atlas.",
      "Designed and refined maps using ArcGIS Pro, QGIS, Adobe Illustrator, Photoshop, and MAPublisher while adhering to National Geographic cartographic standards.",
      "Researched and visualized geographic data for environmental, wildlife, exploration, and global storytelling projects.",
      "Collaborated with cartographers, text editors, graphic designers, and researchers to develop accurate and visually compelling maps for publication.",
    ],
  },
  {
    title: "Teaching Assistant for Cartography",
    organization: "Virginia Tech",
    dates: "January 2025 – Present",
    bullets: [
      "Engaged with four lab sections per week, totaling 55 students, providing direction and feedback for thematic map assignments.",
      "Provided constructive feedback regarding aesthetics and functionality of map projects.",
      "Engaged with students on a one-on-one basis and in group settings to advise and answer questions, utilizing multiple learning styles depending on class needs.",
      "Regularly updated lab tutorial materials, ensuring up-to-date events and examples of current ArcGIS Pro screenshots and locations of function.",
    ],
  },
  {
    title: "Teaching Assistant for Maps and Mapping",
    organization: "Virginia Tech",
    dates: "August 2024 – December 2024",
    bullets: [
      "Supported course instruction by attending all lectures and labs, assisting 110 students.",
      "Answered questions to strengthen understanding of map reading and measurement skills.",
      "Provided individualized guidance to students in both group and one-on-one settings.",
    ],
  },
];

export const GIS_PROJECTS: ResumeExperience[] = [
  {
    title: "Historical Map of Botetourt",
    organization: "Botetourt Historical Society and Museum",
    dates: "February 2025 – April 2025",
    bullets: [
      "Partnered with two representatives from the Historical Society to design a historical map of Botetourt County (circa 1776).",
      "Managed project timeline over two months, coordinating with team members and clients to meet event needs.",
      "Delivered final map for use during a county resolution reenactment; map now displayed at the Historical Society Museum.",
    ],
  },
  {
    title: "Determinants of Pediatric Vaccine Uptake",
    organization: "George Mason University",
    dates: "June 2022 – August 2022",
    bullets: [
      "Conducted spatial analyses of CDC and county-level data to examine pediatric COVID-19 vaccine disparities as part of the Aspiring Scientists Summer Internship Program (ASSIP).",
      "Designed thematic maps in ArcGIS Pro and QGIS to visualize geographic trends in vaccination uptake.",
      "Collaborated with epidemiology experts to provide spatial insights for public health strategy recommendations.",
    ],
  },
  {
    title: "FCPS Safe Routes to School",
    organization: "Fairfax County Public Schools",
    location: "Fairfax, VA",
    dates: "September 2022 – June 2023",
    bullets: [
      "Collaborated with teachers and county representatives to design 40 safe walking routes for elementary, middle, and high schools.",
      "Utilized GIS tools to analyze road networks, school zones, and pedestrian safety factors.",
      "Delivered final walking route maps to Fairfax County for implementation in Safe Routes to School programs.",
    ],
  },
];

export const OTHER_EXPERIENCE: ResumeExperience[] = [
  {
    title: "President of Geography Club",
    organization: "Virginia Tech",
    dates: "August 2025 – Present",
    bullets: [],
  },
  {
    title: "Ambassador for the College of Natural Resources",
    organization: "Virginia Tech",
    dates: "January 2024 – Present",
    bullets: [],
  },
  {
    title: "Bookseller",
    organization: "Barnes and Noble",
    location: "Fairfax, VA",
    dates: "March 2023 – December 2025",
    bullets: [],
  },
  {
    title: "Etsy Shop Owner",
    organization: "Self-employed",
    location: "Fairfax, VA",
    dates: "October 2020 – December 2023",
    bullets: [],
  },
];

export const SKILLS: ResumeSkill[] = [
  { name: "ArcGIS Pro", level: "Advanced" },
  { name: "ArcGIS Online Suite", level: "Advanced" },
  { name: "MAPublisher", level: "Intermediate" },
  { name: "Adobe Illustrator", level: "Intermediate" },
  { name: "Adobe Photoshop", level: "Intermediate" },
  { name: "Python", level: "Novice/Intermediate" },
  { name: "R", level: "Novice/Intermediate" },
];

export const LANGUAGES: ResumeLanguage[] = [
  { name: "English", level: "Fluent" },
  { name: "Bosnian", level: "Fluent" },
  { name: "Serbian", level: "Conversational" },
  { name: "Croatian", level: "Conversational" },
];

export const AWARDS: string[] = [
  "First Place, VGA StoryMap Competition (2023)",
  "Submission to the CAGIS Annual Cartography Competition (2024)",
];

export const PUBLICATIONS: string[] = [
  "Contributed two maps to an Association of American Geographers publication on plant community distribution in Glacier National Park (Biogeographic Cartography research, 2026).",
];
