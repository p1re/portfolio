export interface Project {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  technologies: string[];
}

export interface Education {
  title: string;
  description: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export const projects: Project[] = [
  {
    title: "Plataforma de gestión de incidencias",
    date: "Febrero de 2024 – Actualidad",
    description:
      "Aplicación para registrar y gestionar incidencias. Permite consultar los casos y seguir su resolución desde una interfaz sencilla.",
    image: "/incidencies.png",
    imageAlt: "Captura de la plataforma de gestión de incidencias",
    href: "http://a24nildiabel.dam.inspedralbes.cat/valorant/",
    technologies: ["Node.js", "Bootstrap", "Express", "HTML", "JavaScript", "MongoDB"],
  },
];

export const education: Education[] = [
  {
    title: "Educación Secundaria Obligatoria",
    description:
      "Formación general en matemáticas, lengua, ciencias y otras materias que establecieron una base para continuar mis estudios.",
  },
  {
    title: "Sistemas Microinformáticos y Redes",
    description:
      "Grado medio centrado en instalación, mantenimiento y soporte de equipos, sistemas operativos, redes locales y servicios de Internet.",
  },
  {
    title: "Desarrollador de Aplicaciones Multiplataforma",
    description:
      "Grado superior centrado en el desarrollo de aplicaciones para múltiples plataformas. Incluye programación en diversos lenguajes, diseño de interfaces, bases de datos y despliegue de aplicaciones.",
  },
];

export const technologies: Technology[] = [
  { name: "Node.js", icon: "/icons/Node.js.svg" },
  { name: "Bootstrap", icon: "/icons/Bootstrap.svg" },
  { name: "Express", icon: "/icons/Express.svg" },
  { name: "HTML", icon: "/icons/HTML5.svg" },
  { name: "JavaScript", icon: "/icons/JavaScript.svg" },
  { name: "NPM", icon: "/icons/NPM.svg" },
  { name: "MongoDB", icon: "/icons/MongoDB.svg" },
  { name: "CSS", icon: "/icons/CSS3.svg" },
  { name: "Java", icon: "/icons/Java.svg" },
  { name: "MySQL", icon: "/icons/MySQL.svg" },
];
