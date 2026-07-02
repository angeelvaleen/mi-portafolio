import fotoPerfil from "../assets/foto-perfil.jpg";
import imgProyecto1 from "../assets/logic.jpg";
import imgProyecto2 from "../assets/azteca.jpg";
import imgProyecto3 from "../assets/banco.jpg";
import imgProyecto0 from "../assets/proceso.jpg";
import imgHero from "../assets/hero.png";
import imgCertificado1 from "../assets/imgCertificado1.jpg";
import imgCertificado2 from "../assets/imgCertificado2.jpg";
import imgCertificado3 from "../assets/imgCertificado3.jpg";
import imgCertificado4 from "../assets/imgCertificado4.jpg";
import imgCertificado5 from "../assets/imgCertificado5.jpg";
import imgCertificado6 from "../assets/imgCertificado6.jpg";

export const SECTIONS = [
  { id: "inicio", label: "_inicio" },
  { id: "perfil", label: "_perfil" },
  { id: "stack", label: "_stack" },
  { id: "proceso", label: "_proceso" }, // <-- ¡Aquí agregamos la nueva sección!
  { id: "stack-competencias", label: "_especializaciones" },
  { id: "proyectos", label: "_proyectos" },
  { id: "contacto", label: "_contacto" },
];

export const SECTION_IDS = SECTIONS.map((section) => section.id);

export const PROJECTS = [
  {
    id: "01",
    name: "SWITCHLOGIC (NET CONFIG)",
    type: "Network Infrastructure Manager",
    year: "2025",
    desc: "Herramienta de gestión de infraestructura de red diseñada para la administración centralizada de switches multi-marca. Implementa persistencia local avanzada.",
    stack: ["React", "JSX", "localStorage", "CSV Export", "Tailwind"],
    status: "FINISHED",
    image: imgProyecto1,
  },
  {
    id: "02",
    name: "SISTEMA AZTECA",
    type: "Sports Management System",
    year: "2025",
    desc: "Plataforma integral para la administración de ligas de fútbol. Incluye arquitectura PHP-MySQL robusta con autenticación multi-rol y auditoría en tiempo real.",
    stack: ["PHP", "MySQL", "PDO", "Apache", "Linux Mint"],
    status: "FINISHED",
    image: imgProyecto2,
  },
  {
    id: "03",
    name: "BANCOSYS",
    type: "Real-time Queue Management",
    year: "2024",
    desc: "Sistema de gestión de turnos bancarios de alta disponibilidad. Implementa comunicación bidireccional en tiempo real mediante WebSockets y arquitectura PERN.",
    stack: ["PostgreSQL", "Express", "React", "Node.js", "Socket.io", "Docker", "Azure"],
    status: "LIVE",
    image: imgProyecto3,
  },
];

export const SKILLS = [
  { cat: "Backend", items: [["PHP", 90], ["Node.js", 70], ["Express", 68], ["MySQL", 92], ["PostgreSQL", 75]] },
  { cat: "Frontend", items: [["React", 75], ["JavaScript", 88], ["HTML/CSS", 90], ["Vite", 75]] },
  { cat: "Infra", items: [["Docker", 72], ["Linux", 80], ["Apache", 75], ["Git", 85], ["Socket.io", 78]] },
  { cat: "Otros", items: [["C++", 70], ["Python", 65], ["PDO/SQL", 88]] },
];

// Función para calcular la edad automáticamente
const calculateAge = (birthDateString) => {
  const today = new Date();
  const birthDate = new Date(birthDateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  
  // Si aún no estamos en el mes de tu cumpleaños, 
  // o si es el mes pero todavía no es el día, restamos 1 año.
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

// Calculamos tu edad basándonos en tu fecha de nacimiento (Año-Mes-Día)
const myAge = calculateAge("2004-06-18");

export const PROFILE_FACTS = [
  ["ROL", "INGENIERÍA DE SISTEMAS"],
  ["UBICACIÓN", "MÉXICO"],
  ["INTERESES", "CIBERSEGURIDAD"],
  ["PASIÓN", "Frontend Developer | AI-Augmented Development | Multiplatform Specialist."],
];


export const SOCIAL_LINKS = [
  { label: "GITHUB", href: "https://github.com/angeelvaleen" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/tu-perfil" },
  { label: "ANGEELSYSTEM", href: "https://www.instagram.com/angeel.system/" },
  { label: "SOFTIX.OFICIAL", href: "https://www.instagram.com/softix.oficial" },
  { label: "FACEBOOK SOFTIX", href: "https://www.facebook.com/profile.php?id=61589572093305" },
];

export const HERO_HIGHLIGHTS = [
  "React",
  "Node",
  "Linux",
];

export const CONTACT_EMAIL = "angeelsystem@gmail.com";
export const PROFILE_PHOTO = fotoPerfil;