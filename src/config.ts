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
  // category: "Web & Dev" | "UX/UI" | "Media"  → usada por los filter chips de Work
  projects: [
    {
      name: "Alana — Catálogo de Novias",
      slug: "alana-catalogo-novias",
      year: "2024",
      category: "UX/UI",
      role: "Diseñadora",
      description: "Catálogo digital para boutique de novias con navegación intuitiva y diseño editorial.",
      tags: ["UI/UX", "Branding", "Editorial"],
      link: "https://www.behance.net/vicodigital",
    },
    {
      name: "Misk'i — Restaurant Online",
      slug: "miski-restaurant-online",
      year: "2023",
      category: "Web & Dev",
      role: "Diseñadora Web",
      description: "Plataforma web para restaurante con menú interactivo y sistema de pedidos.",
      tags: ["Web Design", "UI/UX", "WordPress"],
      link: "https://www.behance.net/vicodigital",
    },
    {
      name: "Hotel Plaza Tacna",
      slug: "hotel-plaza-tacna",
      year: "2023",
      category: "Web & Dev",
      role: "Diseñadora Digital",
      description: "Diseño web y piezas gráficas para hotel en Tacna.",
      tags: ["Web Design", "Graphic Design"],
    },
    {
      name: "MU Marketing & Content Lab",
      slug: "mu-marketing-content-lab",
      year: "2022",
      category: "Web & Dev",
      role: "Diseñadora Digital & Web",
      description: "Desarrollo web HTML/PHP y administración de sitios WordPress corporativos.",
      tags: ["WordPress", "HTML/PHP", "Marketing"],
    },
    {
      name: "Beltrax Digital Agency",
      slug: "beltrax-digital-agency",
      year: "2022",
      category: "UX/UI",
      role: "Diseñadora Digital",
      description: "Diseño digital para agencia peruana de marketing.",
      tags: ["Graphic Design", "Digital"],
    },
    // --- Media: placeholders con Lorem para que reemplaces con tus piezas de video/imagen ---
    {
      name: "Reel — Lorem Ipsum",
      slug: "media-reel-lorem",
      year: "2026",
      category: "Media",
      role: "Edición & Postproducción",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pieza de video editada para redes.",
      tags: ["Video", "Postproducción", "Reels"],
      placeholder: true,
    },
    {
      name: "Serie Fotográfica — Lorem",
      slug: "media-serie-lorem",
      year: "2026",
      category: "Media",
      role: "Retoque & Dirección",
      description: "Lorem ipsum dolor sit amet. Serie de imágenes con retoque y dirección de arte.",
      tags: ["Fotografía", "Retoque", "Dirección de Arte"],
      placeholder: true,
    },
  ],

  // Services
  services: [
    { title: "Diseño UX/UI", description: "Interfaces centradas en el usuario con arquitectura de información estratégica." },
    { title: "Desarrollo Web", description: "Sitios WordPress, HTML/CSS responsive con gestión técnica completa." },
    { title: "Identidad Visual", description: "Branding y sistemas de diseño con personalidad." },
    { title: "Wedding Web Experiences", description: "Micrositios interactivos premium para bodas vía MInvitacion." },
    { title: "Edición de Video y Media", description: "Postproducción audiovisual, retoque de imagen y creación de contenido de alta fidelidad." },
    { title: "Arquitectura de Información", description: "Organización sistémica de contenido con jerarquía visual." },
  ],

  // R&D Labs — Startups & R&D
  labs: [
    {
      name: "MInvitacion Online",
      label: "FEATURED / STARTUP",
      tagline: "Wedding Web Experiences",
      role: "Founder & UX Lead",
      description: "Startup de wedding web experiences premium. Micrositios interactivos con countdown, mapas, RSVP, música y pagos Yape/Plin.",
      tags: ["WordPress", "UX", "Startup", "Mobile-first"],
      link: "https://minvitacion.online",
      // null = link pendiente de confirmar con la clienta (no inventar URLs)
      social: {
        instagram: null,
        linkedin: "https://www.linkedin.com/in/vicodigital",
        tiktok: null,
      },
    },
    {
      name: "Epi.kinetik",
      label: "ACTIVE RESEARCH",
      tagline: "Performance Design Research",
      role: "Investigadora principal",
      description: "Optimización humana e integración Físico-Mente-Esencia. Investigación aplicada en neurofisiología y nutrición para productos digitales de evolución personal.",
      tags: ["Biohacking", "TDAH", "Neurofisiología"],
      social: {
        instagram: "https://www.instagram.com/epi.kinetik",
        linkedin: "https://www.linkedin.com/in/vicodigital",
        tiktok: null,
      },
    },
    {
      name: "Irizentia",
      label: "ACTIVE RESEARCH",
      tagline: "Arquitectura de Información",
      role: "Investigadora principal",
      description: "Framework 'Panteón' enfocado en la organización sistémica de información compleja y jerarquía visual estratégica.",
      tags: ["IA Framework", "Sistemas", "Visual Hierarchy"],
      social: {
        instagram: "https://www.instagram.com/vico.digital_",
        linkedin: "https://www.linkedin.com/in/vicodigital",
        tiktok: null,
      },
    },
  ],

  // Toolkit (skills by category)
  toolkit: {
    "Diseño/UX": ["UX Design", "UI Design", "Wireframing", "Prototipado", "Responsive Design", "Arquitectura de Información"],
    "Media & Visual": ["Chip de prueba 1", "Chip de prueba 2", "Chip de prueba 3", "Chip de prueba 4"],
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
