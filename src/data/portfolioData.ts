// Portfolio Data - Carlos Basora Ramos

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
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
    email: "carlosbasora01@gmail.com",
    phone: "849-650-6759",
    location: "Santo Domingo Norte, RD",
    languages: "Español (Nativo), Inglés (B2)",
    bio: `Especialista experimentado comprometido a ofrecer un servicio excepcional. 
    Siempre buscando aprender nuevas habilidades, asumir responsabilidades adicionales y crecer profesionalmente.`,
    bioExtended: `Trabajo en entornos activos y bajo presión, adhiriendo a altos estándares de calidad y rendimiento. 
    Mi experiencia abarca desde soporte técnico de TI hasta ingeniería de software, dándome una visión holística de la tecnología.`,
    social: {
        linkedin: "https://linkedin.com/in/carlosbasora",
        github: "https://github.com/carlosbasora",
        instagram: "https://instagram.com/carlosbasora"
    }
};

export const projects: Project[] = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "Panel de control integral para gestionar inventario y análisis de ventas de tiendas en línea.",
        technologies: [".NET Core", "SQL Server", "Bootstrap"],
        link: "#"
    },
    {
        id: 2,
        title: "Data Analysis Tool",
        description: "Herramienta basada en Python para procesar y visualizar grandes conjuntos de datos con reportes en tiempo real.",
        technologies: ["Python", "Pandas", "React"],
        link: "#"
    },
    {
        id: 3,
        title: "Corporate Portfolio",
        description: "Sitio web corporativo moderno y responsivo diseñado para alto engagement y SEO.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        link: "#"
    }
];

export const experiences: Experience[] = [
    {
        id: 1,
        company: "Baramos Ingeniería Srl",
        role: "Técnico Informático & Community Manager",
        period: "Reciente",
        description: "Gestión de operaciones de soporte técnico, tareas administrativas y estrategias de engagement comunitario."
    },
    {
        id: 2,
        company: "Casa de Arte Dajabón",
        role: "Técnico Informático & Community Manager",
        period: "Anterior",
        description: "Soporte de infraestructura TI y gestión de presencia digital y programas de alcance comunitario."
    },
    {
        id: 3,
        company: "SeaWorld DCO",
        role: "Ambassador",
        period: "Anterior",
        description: "Representación de marca y aseguramiento de experiencia de cliente de alta calidad."
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
    { name: "SQL / Database", percentage: 80 },
    { name: "HTML/CSS/JS", percentage: 95 }
];

export const professionalSkills: string[] = [
    "Problem Solving",
    "Team Leadership",
    "Communication",
    "Project Management",
    "Agile Methodologies",
    "Community Management",
    "Technical Support",
    "Digital Marketing"
];
