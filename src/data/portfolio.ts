import type { ImageMetadata } from 'astro';
import profileImage from '../assets/foto-perfil.png';
import databricksLogo from '../assets/databricks-data-engineer-associate.png';
import fabricLogo from '../assets/fabric-data-engineer-associate.png';
import azureLogo from '../assets/azure-data-fundamentals.png';

export type Locale = 'es' | 'en';
export type LocalizedText = Record<Locale, string>;

export interface Project {
  title: LocalizedText;
  description: LocalizedText;
}

export interface Certification {
  name: string;
  issuer: string;
  logo: ImageMetadata;
  credentialUrl: string;
}

export interface TimelineEntry {
  title: LocalizedText;
  organization: string;
  period: LocalizedText;
  description: LocalizedText;
  tags?: string[];
}

// PLACEHOLDER CONTENT: replace this profile and every URL before publishing.
export const profile = {
  name: 'Vladimiro Cordero',
  role: { es: 'Ingeniero de Datos', en: 'Data Engineer' },
  location: 'Cuenca, Ecuador',
  email: 'hello@example.com',
  portrait: profileImage,
  social: {
    github: 'https://github.com/your-username',
    linkedin: 'https://www.linkedin.com/in/your-username/',
  },
};

export const projects: Project[] = [
  {
    title: {
      es: 'Plataforma de datos IoT de extremo a extremo con Databricks Lakeflow y SDP',
      en: 'End-to-End IoT Data Platform with Databricks Lakeflow & SDP',
    },
    description: {
      es: 'Plataforma de datos con arquitectura lakehouse para procesar datos de sensores IoT mediante técnicas batch y streaming.',
      en: 'Lakehouse data platform for processing IoT sensor data through batch and streaming techniques.',
    },
  },
  {
    title: {
      es: 'Pipeline de datos financieros con Microsoft Fabric',
      en: 'Financial Data Pipeline with Microsoft Fabric',
    },
    description: {
      es: 'Pipeline de procesamiento de datos financieros de IBM mediante la API de Vantage dentro de la plataforma analítica de Microsoft Fabric.',
      en: 'Financial data processing pipeline using IBM’s Vantage API within the Microsoft Fabric analytics platform.',
    },
  },
  {
    title: {
      es: 'Pipeline de datos de viajes para una aplicación de taxis',
      en: 'Trip Data Pipeline for a Taxi App',
    },
    description: {
      es: 'Pipeline de procesamiento de datos de viajes de una aplicación popular de taxis en la ciudad de Cuenca.',
      en: 'Data processing pipeline for trips from a popular taxi app in the city of Cuenca.',
    },
  },
];

export const certifications: Certification[] = [
  {
    name: 'Databricks Data Engineer Associate',
    issuer: 'Databricks',
    logo: databricksLogo,
    credentialUrl: 'https://credentials.databricks.com/fd5dfc9b-b6ff-4f6e-be4d-dff5e6d7b2cf#acc.pWoKlxLC',
  },
  {
    name: 'Fabric Data Engineer Associate',
    issuer: 'Microsoft',
    logo: fabricLogo,
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/VladimiroCordero-0449/5A96F9C610F109F6?sharingId=D2CCFBBCE4F0DFC0',
  },
  {
    name: 'Azure Data Fundamentals',
    issuer: 'Microsoft',
    logo: azureLogo,
    credentialUrl: 'https://learn.microsoft.com/en-us/users/vladimirocordero-0449/credentials/4badbbe0ad9df2c1',
  },
];

export const experience: TimelineEntry[] = [
  {
    title: { es: 'Ingeniero / Analista de Datos', en: 'Data Engineer / Analyst' },
    organization: 'Freelancer · Cuenca, Ecuador',
    period: { es: 'Ene 2023 — Presente', en: 'Jan 2023 — Present' },
    description: {
      es: 'Diseño e implemento soluciones de datos de extremo a extremo para diversos sectores, procesos de ETL y consultoría en visualización de datos, creando tableros dinámicos en Power BI y Tableau.',
      en: 'Design and implement end-to-end data solutions across different industries, ETL processes, and data visualization consulting, creating dynamic dashboards in Power BI and Tableau.',
    },
    tags: ['ETL', 'Power BI', 'Tableau'],
  },
  {
    title: { es: 'Desarrollador de Automatización de Datos (Contrato)', en: 'Data Automation Developer (Contract)' },
    organization: 'BPONE · Quito, Ecuador',
    period: { es: 'Sep 2025 — Dic 2025', en: 'Sep 2025 — Dec 2025' },
    description: {
      es: 'Desarrollé flujos de carga y borrado masivo de datos para listas en SharePoint mediante peticiones batch y REST APIs. Reduje los tiempos de borrado y carga de 4 horas a 50 minutos.',
      en: 'Developed bulk data loading and deletion flows for SharePoint lists using batch requests and REST APIs. Reduced loading and deletion times from 4 hours to 50 minutes.',
    },
    tags: ['SharePoint', 'REST APIs', 'Power Automate'],
  },
  {
    title: { es: 'Científico de Datos Junior (Prácticas)', en: 'Junior Data Scientist (Internship)' },
    organization: 'Universidad Politécnica Salesiana · Cuenca, Ecuador',
    period: { es: 'Sep 2024 — Ene 2025', en: 'Sep 2024 — Jan 2025' },
    description: {
      es: 'Limpié y preparé más de 1.000 registros, mejorando la precisión de modelos de machine learning del 58% al 77%. Realicé análisis exploratorio con Python, Pandas y Matplotlib/Seaborn para encontrar patrones ocultos en los datos.',
      en: 'Cleaned and prepared more than 1,000 records, improving machine learning model accuracy from 58% to 77%. Performed exploratory analysis with Python, Pandas, and Matplotlib/Seaborn to uncover hidden patterns in the data.',
    },
    tags: ['Python', 'Pandas', 'Machine Learning'],
  },
];

export const education: TimelineEntry[] = [
  {
    title: { es: 'MSc en Visual Analytics & Big Data', en: 'MSc in Visual Analytics & Big Data' },
    organization: 'Universidad Internacional de La Rioja',
    period: { es: 'Mar 2026', en: 'Mar 2026' },
    description: {
      es: 'Formación de posgrado en analítica visual, big data y toma de decisiones basada en datos.',
      en: 'Graduate training in visual analytics, big data, and data-driven decision-making.',
    },
  },
  {
    title: { es: 'BSc en Ingeniería en Telecomunicaciones', en: 'BSc in Telecommunications Engineering' },
    organization: 'Universidad Politécnica Salesiana',
    period: { es: 'Mar 2025', en: 'Mar 2025' },
    description: {
      es: 'Formación en ingeniería de telecomunicaciones, sistemas, programación y tecnologías de datos.',
      en: 'Training in telecommunications engineering, systems, programming, and data technologies.',
    },
  },
];

export const copy = {
  es: {
    languageName: 'ES',
    skip: 'Saltar al contenido',
    available: 'Disponible para nuevos retos',
    nav: { about: 'Quién soy', projects: 'Proyectos', certifications: 'Certificaciones', experience: 'Trayectoria', education: 'Formación' },
    eyebrow: 'DATA SYSTEMS / PORTFOLIO 2026',
    heroLead: 'Construyo sistemas de datos que convierten información compleja en decisiones claras.',
    viewProjects: 'Ver proyectos',
    about: 'Quién soy',
    aboutKicker: '01 / PERFIL',
    aboutText: 'Ingeniero de Datos enfocado en construir plataformas robustas, observables y escalables. Disfruto conectar arquitectura, calidad y contexto de negocio para que los datos sean realmente útiles.',
    stats: [['03+', 'Certificaciones cloud'], ['03', 'Proyectos destacados'], ['100%', 'Mentalidad de calidad']],
    projects: 'Proyectos seleccionados',
    projectsKicker: '02 / TRABAJO',
    projectHint: 'Proyectos de datos y analítica aplicada',
    openRepo: 'Abrir repositorio de',
    certifications: 'Certificaciones cloud',
    certificationsKicker: '03 / CREDENCIALES',
    certificationText: 'Credenciales que respaldan experiencia práctica en plataformas de datos cloud.',
    experience: 'Trayectoria laboral',
    experienceKicker: '04 / EXPERIENCIA',
    education: 'Formación académica',
    educationKicker: '05 / EDUCACIÓN',
    connect: 'Construyamos datos que muevan decisiones.',
    socialHint: 'Encuéntrame en',
    rights: 'Diseñado y construido con intención.',
    switchLabel: 'Cambiar idioma a inglés',
  },
  en: {
    languageName: 'EN',
    skip: 'Skip to content',
    available: 'Open to new opportunities',
    nav: { about: 'About', projects: 'Projects', certifications: 'Certifications', experience: 'Experience', education: 'Education' },
    eyebrow: 'DATA SYSTEMS / PORTFOLIO 2026',
    heroLead: 'I build data systems that turn complex information into clear decisions.',
    viewProjects: 'View projects',
    about: 'About me',
    aboutKicker: '01 / PROFILE',
    aboutText: 'Data Engineer focused on building robust, observable, and scalable platforms. I enjoy connecting architecture, quality, and business context so data becomes genuinely useful.',
    stats: [['03+', 'Cloud certifications'], ['03', 'Featured projects'], ['100%', 'Quality mindset']],
    projects: 'Selected projects',
    projectsKicker: '02 / WORK',
    projectHint: 'Data and applied analytics projects',
    openRepo: 'Open repository for',
    certifications: 'Cloud certifications',
    certificationsKicker: '03 / CREDENTIALS',
    certificationText: 'Credentials supporting hands-on expertise across cloud data platforms.',
    experience: 'Work experience',
    experienceKicker: '04 / EXPERIENCE',
    education: 'Academic background',
    educationKicker: '05 / EDUCATION',
    connect: 'Let’s build data that moves decisions.',
    socialHint: 'Find me on',
    rights: 'Designed and built with intention.',
    switchLabel: 'Cambiar idioma a español',
  },
} as const;
