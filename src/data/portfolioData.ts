// Portfolio Data - Carlos Basora Ramos

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
    image?: string;     // Added image property
    gradient: string;   // Fallback gradient
    icon?: string;      // Optional icon
}

export interface Experience {
    id: number;
    company: string;
    role: string;
    period: string;
    description: string;
}

export interface Education {
    id: number;
    degree: string;
    institution: string;
    year?: string;
}

export interface Certification {
    id: number;
    name: string;
    issuer: string;
    year?: string;
}

export interface Skill {
    name: string;
    percentage: number;
}

export const personalInfo = {
    name: "Carlos Basora",
    fullName: "Carlos Basora Ramos",
    role: "Software Engineer & Developer",
    typingRoles: [
        "Ingeniero de Software",
        "Desarrollador Full Stack",
        "Analista de Datos",
        "Community Manager"
    ],
    email: "carlosbasora01@gmail.com",
    phone: "849-650-6759",
    location: "Santo Domingo Norte, RD",
    address: "Manuel de Jesús Galván 47, Santo Domingo Norte, República Dominicana",
    languages: "Español (Nativo), Inglés (B2 Intermedio Alto)",
    bio: `Especialista experimentado comprometido a ofrecer un servicio excepcional. Siempre buscando aprender nuevas habilidades, asumir responsabilidades adicionales y crecer profesionalmente.`,
    bioExtended: `Trabajo en entornos activos y bajo presión, adhiriendo a altos estándares de calidad y rendimiento. Mi experiencia abarca desde soporte técnico de TI hasta ingeniería de software, dándome una visión holística de la tecnología.`,
    stats: [
        { label: "Proyectos", value: "10+" },
        { label: "Certificaciones", value: "6+" },
        { label: "Tecnologías", value: "15+" },
        { label: "Experiencia", value: "3+ años" }
    ],
    social: {
        linkedin: "https://linkedin.com/in/carlosbasora",
        github: "https://github.com/carlosbasora",
        instagram: "https://instagram.com/carlosbasora"
    }
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Baramos Ingeniería SRL",
        description: "Sitio web corporativo para empresa de soluciones eléctricas e industriales. Diseño moderno con catálogo de servicios, cotizaciones y atención 24/7.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"],
        link: "https://baramosingenieria.com",
        image: "/projects/baramos.png",
        gradient: "linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%)",
        icon: "⚡"
    },
    {
        id: 2,
        title: "Zyntex AI Solutions",
        description: "Plataforma de automatizaciones con n8n, webs funcionales y bots. Páginas que venden, bots que responden y negocios que escalan.",
        technologies: ["React", "n8n", "AI/Bots", "CRM"],
        link: "https://zyntex.com",
        image: "/projects/zyntex.png",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        icon: "🤖"
    },
    {
        id: 3,
        title: "Portfolio Personal",
        description: "Sitio web moderno y responsivo con animaciones fluidas, partículas interactivas y diseño premium negro y dorado.",
        technologies: ["React", "TypeScript", "Framer Motion", "Vite"],
        link: "#",
        gradient: "linear-gradient(135deg, #D4AF37 0%, #8B7355 100%)",
        icon: "🌐"
    },
    {
        id: 4,
        title: "Gestión Financiera",
        description: "Aplicación web para control de ingresos, gastos, presupuestos y deudas con gráficos dinámicos y autenticación.",
        technologies: ["React", "Supabase", "TypeScript", "Chart.js"],
        link: "#",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        icon: "💰"
    }
];

export const experiences: Experience[] = [
    {
        id: 1,
        company: "Baramos Ingeniería Srl",
        role: "Técnico Informático, Secretario & Community Manager",
        period: "Actual",
        description: "Gestión de operaciones de soporte técnico, tareas administrativas, administración de sistemas y estrategias de engagement comunitario digital."
    },
    {
        id: 2,
        company: "Casa de Arte Dajabón",
        role: "Técnico Informático & Community Manager",
        period: "Anterior",
        description: "Soporte de infraestructura TI, gestión de presencia digital y programas de alcance comunitario. Mantenimiento de equipos y redes."
    },
    {
        id: 3,
        company: "SeaWorld DCO",
        role: "Ambassador",
        period: "Anterior",
        description: "Representación de marca y aseguramiento de experiencia de cliente de alta calidad en entorno internacional."
    }
];

export const education: Education[] = [
    {
        id: 1,
        degree: "Ingeniería de Software",
        institution: "Universidad Apec"
    },
    {
        id: 2,
        degree: "Técnico Programación .NET",
        institution: "CENTU"
    },
    {
        id: 3,
        degree: "Python para Programadores",
        institution: "MIT",
        year: "2020"
    },
    {
        id: 4,
        degree: "Diplomado en Locución y Medios Audiovisuales",
        institution: "Certificación Profesional"
    }
];

export const certifications: Certification[] = [
    {
        id: 1,
        name: "Data Analyst",
        issuer: "DataCamp",
        year: "2025"
    },
    {
        id: 2,
        name: "SQL Fundamentals",
        issuer: "DataCamp",
        year: "2025"
    },
    {
        id: 3,
        name: "Cyber 9/12 Strategy Challenge",
        issuer: "EU CyberNet",
        year: "2024"
    },
    {
        id: 4,
        name: "Taller de Inteligencia Artificial",
        issuer: "CENTU",
        year: "2023"
    },
    {
        id: 5,
        name: "Marketing Digital",
        issuer: "Grow with Google"
    }
];

export const technicalSkills: Skill[] = [
    { name: "C# / .NET", percentage: 90 },
    { name: "Python", percentage: 85 },
    { name: "SQL / Bases de Datos", percentage: 80 },
    { name: "HTML/CSS/JS", percentage: 95 },
    { name: "React / TypeScript", percentage: 80 },
    { name: "Análisis de Datos", percentage: 75 }
];

export const professionalSkills: string[] = [
    "Resolución de Problemas",
    "Liderazgo de Equipos",
    "Comunicación Efectiva",
    "Gestión de Proyectos",
    "Metodologías Ágiles",
    "Community Management",
    "Soporte Técnico",
    "Marketing Digital",
    "Trabajo Bajo Presión",
    "Atención al Cliente"
];
