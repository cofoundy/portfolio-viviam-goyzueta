export const siteConfig = {
  name: "Viviam Nicole",
  lastName: "Goyzueta²",
  title: "UX Engineer · Web Designer · Founder",
  description: "Portfolio de Viviam Nicole Goyzueta — UX Engineer, Diseñadora Web y Founder de MInvitacion Online. Tacna, Perú.",
  lang: "es",

  // VICO Color System (from her Figma deck)
  colors: {
    bg: "#0A0422",
    bgLight: "#110738",
    infigo: "#1B0499",
    magentra: "#F81CA4",
    solara: "#FFD800",
    aqva: "#00F8D4",
    umbral: "#8000A4",
    cocoSilver: "#C6C1D2",
    textPrimary: "#F0EDF5",
    textSecondary: "#9B95A8",
  },

  // Rotating identities for hero
  identities: [
    "UX Engineer",
    "Web Designer",
    "Founder",
    "Legal Mind",
    "Researcher",
  ],

  profile: {
    summary: "Profesional multidisciplinaria con experiencia en diseño UX, desarrollo web, operación digital y gestión de proyectos propios. Actualmente lidero MInvitacion Online, integrando diseño visual, arquitectura de información, experiencia de usuario y soporte técnico.",
    location: "Tacna · Lima, Perú",
    languages: ["Español (Nativo)", "Inglés (B1)"],
  },

  // The Prism — 3 lenses that converge
  prisma: [
    {
      icon: "🏛️",
      label: "Estructura",
      field: "Arquitectura",
      period: "2011–2013",
      insight: "Pensamiento espacial y composición visual",
    },
    {
      icon: "⚖️",
      label: "Análisis",
      field: "Derecho",
      period: "2014–2020",
      insight: "Razonamiento lógico y atención al detalle",
    },
    {
      icon: "✦",
      label: "Visión",
      field: "Diseño UX",
      period: "2020–Presente",
      insight: "Sensibilidad visual y experiencia de usuario",
    },
  ],

  // Work / Projects
  projects: [
    {
      name: "MInvitacion Online",
      role: "Founder & UX Lead",
      description: "Startup de wedding web experiences premium. Micrositios interactivos con countdown, mapas, RSVP, música y pagos Yape/Plin.",
      tags: ["WordPress", "UX", "Startup", "Mobile-first"],
      link: "https://minvitacion.online",
      featured: true,
    },
    {
      name: "Alana — Catálogo de Novias",
      role: "Diseñadora",
      description: "Catálogo digital para boutique de novias con navegación intuitiva y diseño editorial.",
      tags: ["UI/UX", "Branding", "Editorial"],
      link: "https://www.behance.net/vicodigital",
      featured: false,
    },
    {
      name: "Misk'i — Restaurant Online",
      role: "Diseñadora Web",
      description: "Plataforma web para restaurante con menú interactivo y sistema de pedidos.",
      tags: ["Web Design", "UI/UX", "WordPress"],
      link: "https://www.behance.net/vicodigital",
      featured: false,
    },
    {
      name: "Hotel Plaza Tacna",
      role: "Diseñadora Digital",
      description: "Diseño web y piezas gráficas para hotel en Tacna.",
      tags: ["Web Design", "Graphic Design"],
      featured: false,
    },
    {
      name: "MU Marketing & Content Lab",
      role: "Diseñadora Digital & Web",
      description: "Desarrollo web HTML/PHP y administración de sitios WordPress corporativos.",
      tags: ["WordPress", "HTML/PHP", "Marketing"],
      featured: false,
    },
    {
      name: "Beltrax Digital Agency",
      role: "Diseñadora Digital",
      description: "Diseño digital para agencia peruana de marketing.",
      tags: ["Graphic Design", "Digital"],
      featured: false,
    },
  ],

  // Services
  services: [
    { title: "Diseño UX/UI", description: "Interfaces centradas en el usuario con arquitectura de información estratégica." },
    { title: "Desarrollo Web", description: "Sitios WordPress, HTML/CSS responsive con gestión técnica completa." },
    { title: "Identidad Visual", description: "Branding y sistemas de diseño con personalidad." },
    { title: "Wedding Web Experiences", description: "Micrositios interactivos premium para bodas vía MInvitacion." },
    { title: "Arquitectura de Información", description: "Organización sistémica de contenido con jerarquía visual." },
  ],

  // R&D Labs
  labs: [
    {
      name: "Epi.kinetik",
      tagline: "Performance Design Research",
      description: "Optimización humana e integración Físico-Mente-Esencia. Investigación aplicada en neurofisiología y nutrición para productos digitales de evolución personal.",
      tags: ["Biohacking", "TDAH", "Neurofisiología"],
    },
    {
      name: "Irizentia",
      tagline: "Arquitectura de Información",
      description: "Framework 'Panteón' enfocado en la organización sistémica de información compleja y jerarquía visual estratégica.",
      tags: ["IA Framework", "Sistemas", "Visual Hierarchy"],
    },
  ],

  // Toolkit (skills by category)
  toolkit: {
    "Diseño/UX": ["UX Design", "UI Design", "Wireframing", "Prototipado", "Responsive Design", "Arquitectura de Información"],
    "Desarrollo": ["WordPress", "HTML", "CSS/Tailwind", "JavaScript", "PHP", "Java/Spring"],
    "Tech/Ops": ["VPS Management", "CLI/Terminal", "cPanel", "Web Deployment", "Mantenimiento Técnico"],
    "Seguridad": ["ISO 27001", "Ciberseguridad", "Computación Cuántica", "Ingeniería Social"],
    "Estrategia": ["Design Thinking", "Investigación Científica", "Análisis Estructural", "Prompt Engineering"],
  },

  // Journey — integrated timeline
  journey: [
    { year: "2011", title: "Arquitectura", place: "UNJBG, Tacna", type: "education" },
    { year: "2014", title: "Licenciatura en Derecho", place: "UNJBG, Tacna", type: "education" },
    { year: "2020", title: "Practicante — OSIPTEL", place: "Perú", type: "work" },
    { year: "2020", title: "UX Engineer & Freelance", place: "Remoto", type: "work" },
    { year: "2021", title: "Maestría en Investigación", place: "U. Privada de Tacna", type: "education" },
    { year: "2022", title: "Diseñadora — MU Marketing", place: "Perú", type: "work" },
    { year: "2023", title: "Full Stack Dev + Design Thinking", place: "Mundos E · CertiProf", type: "education" },
    { year: "2024", title: "UX/UI Designer — SubaStop.Co", place: "Lima, Remoto", type: "work" },
    { year: "2025", title: "Founder — MInvitacion Online", place: "Remoto", type: "work" },
    { year: "2026", title: "Ciberseguridad + Quantum Computing", place: "UNI · Google", type: "education" },
  ],

  social: {
    email: "viviamnicole4@gmail.com",
    linkedin: "https://www.linkedin.com/in/vicodigital",
    behance: "https://www.behance.net/vicodigital",
    instagram: "https://www.instagram.com/vico.digital_",
  },

  cta: {
    title: "¿Tienes un proyecto?",
    description: "Hablemos sobre cómo puedo ayudarte a crear experiencias digitales memorables.",
    buttonText: "Escríbeme",
  },
};
