
export const personalInfo = {
  name: "JOSUE GUILLERMO CONTRERAS HUARINGA",
  role: "Estudiante de Ingeniería de Software",
  specialization: "con Inteligencia Artificial.",
  interests: [
    "Análisis de Datos",
    "Desarrollo de Software",
    "Inteligencia Artificial",
  ],
  introduction:
    "Explorando la tecnología, transformando datos y desarrollando soluciones innovadoras.",
  photo: "/imagenes/foto-perfil.png",
  email: "luxcune21@hotmail.com",
  secondaryEmail: "luxcune218@gmail.com",
  phone: "938593969",
  githubUsername: "luxcune218-svg",
  github: "https://github.com/luxcune218-svg",
  linkedin: "https://www.linkedin.com/in/josu%C3%A9-guillermo-contreras-huaringa-1b0a4344b/",
};

export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Formación", href: "#formacion" },
  { label: "Contacto", href: "#contacto" },
];

export const skillGroups = [
  {
    category: "Desarrollo web y frontend",
    icon: "PanelsTopLeft",
    skills: [
      "HTML5",
      "JavaScript",
      "TypeScript",
      "React",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend y aplicaciones",
    icon: "Server",
    skills: ["Java", "Python", "Node.js", "Express.js"],
  },
  {
    category: "Análisis de datos y estadística",
    icon: "ChartNoAxesCombined",
    skills: ["R", "Python", "Scikit-learn"],
  },
  {
    category: "Inteligencia artificial y machine learning",
    icon: "BrainCircuit",
    skills: ["TensorFlow", "PyTorch"],
  },
  {
    category: "Desarrollo móvil",
    icon: "Smartphone",
    skills: ["Android Studio", "Java"],
  },
  {
    category: "Bases de datos relacionales",
    icon: "Database",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Microsoft SQL Server",
      "SQLite",
    ],
  },
  {
    category: "Bases de datos no relacionales",
    icon: "Layers3",
    skills: ["MongoDB"],
  },
  {
    category: "Herramientas y entornos",
    icon: "Wrench",
    skills: [
      "Visual Studio Code",
      "Antigravity",
      "RStudio",
      "Google Colab",
      "Android Studio",
    ],
  },
  {
    category: "Control de versiones",
    icon: "GitBranch",
    skills: ["Git", "GitHub"],
  },
];


export const projects = [
  {
    number: "01",

    title: "Plataforma Web Institucional – I.E. Peruano Suizo",

    // Ruta correcta de la captura
    image: "/proyectos/peruano-suizo.png",

    description:
      "Diseño y desarrollo de la plataforma web institucional del Colegio Peruano Suizo, orientada a fortalecer su presencia digital y facilitar el acceso a la información de la comunidad educativa. La plataforma reúne información institucional, admisión, comunicados, recursos educativos y canales de comunicación, mediante una experiencia de navegación moderna, intuitiva y adaptable a diferentes dispositivos.",

    technologies: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Antigravity",
      "Hostinger",
    ],

    website: "https://peruanosuizo.edu.pe/",

    repository: "",

    type: "Desarrollo web institucional",
  },
];


export const education = [
  {
    institution: "Santa Isabel de Hungría",
    period: "2005 — 2016",
    current: false,
  },
  {
    institution: "SENATI",
    program: "Ingeniería de Software con Inteligencia Artificial",
    period: "2024 — Actualidad",
    current: true,
  },
];

export function getConfiguredSocials(info = personalInfo) {
  return [
    { label: "GitHub", href: info.github },
    { label: "LinkedIn", href: info.linkedin },
  ].filter((social) => social.href.trim());
}
