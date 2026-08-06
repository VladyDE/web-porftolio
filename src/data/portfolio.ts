import type { ImageMetadata } from 'astro';
import profileImage from '../assets/foto-perfil.png';
import databricksLogo from '../assets/databricks-data-engineer-associate.png';
import fabricLogo from '../assets/fabric-data-engineer-associate.png';
import azureLogo from '../assets/azure-data-fundamentals.png';
import bikeAccidentsDashboard from '../assets/dashboards/Accidentes de bici en Madrid (tableau).jpg';
import eventsDashboard from '../assets/dashboards/Eventos en Madrid (Power BI).jpg';
import iotDashboard from '../assets/dashboards/IoT Dashboard (Power BI).png';
import taxiAppDashboard from '../assets/dashboards/TaxiApp (Streamlit).png';

export type Locale = 'es' | 'en';
export type LocalizedText = Record<Locale, string>;

export interface Project {
  title: LocalizedText;
  description: LocalizedText;
  githubUrl: string;
}

export interface Dashboard {
  title: LocalizedText;
  image: ImageMetadata;
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


export const profile = {
  name: 'Vladimiro Cordero',
  role: { es: 'Ingeniero de Datos', en: 'Data Engineer' },
  location: 'Cuenca, Ecuador',
  portrait: profileImage,
  social: {
    github: 'https://github.com/VladyDE',
    linkedin: 'https://linkedin.com/in/vladimiro-cordero-30856127a',
  },
};

export const projects: Project[] = [
  {
    title: {
      es: 'Pipeline y app de datos de viajes para una aplicación de taxis',
      en: 'Trip Data App and Pipeline for Taxi App',
    },
    githubUrl: 'https://github.com/VladyDE/trip-data-pipeline',
    description: {
      es: 'Pipeline de procesamiento de datos de viajes de una aplicación popular de taxis en la ciudad de Cuenca, Ecuador y dashboard en streamlit.',
      en: 'Data processing pipeline for trips from a popular taxi app in the city of Cuenca, Ecuador and data app in streamlit.',
    },
  },
  {
    title: {
      es: 'Plataforma de datos IoT de extremo a extremo con Databricks Lakeflow y SDP',
      en: 'End-to-End IoT Data Platform with Databricks Lakeflow & SDP',
    },
    githubUrl: 'https://github.com/VladyDE/iot-data-platform-databricks',
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
    githubUrl: 'https://github.com/VladyDE/Financial-Pipeline-in-Microsoft-Fabric',
    description: {
      es: 'Pipeline de procesamiento de datos financieros de IBM mediante la API de Vantage dentro de la plataforma analítica de Microsoft Fabric.',
      en: 'Financial data processing pipeline using IBM’s Vantage API within the Microsoft Fabric analytics platform.',
    },
  },
];

export const dashboards: Dashboard[] = [
  {
    title: { es: 'Accidentes de bici en Madrid (tableau)', en: 'Bike Accidents in Madrid (Tableau)' },
    image: bikeAccidentsDashboard,
  },
  {
    title: { es: 'Eventos en Madrid (Power BI)', en: 'Events in Madrid (Power BI)' },
    image: eventsDashboard,
  },
  {
    title: { es: 'IoT Dashboard (Power BI)', en: 'IoT Dashboard (Power BI)' },
    image: iotDashboard,
  },
  {
    title: { es: 'TaxiApp (Streamlit)', en: 'TaxiApp (Streamlit)' },
    image: taxiAppDashboard,
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
      es: 'Formación de posgrado en analítica de datos, big data, inteligencia artificial y toma de decisiones basada en datos.',
      en: 'Graduate training in data analytics, big data, artificial inteligence, and data-driven decision-making.',
    },
  },
  {
    title: { es: 'Ingeniería en Telecomunicaciones', en: 'BSc in Telecommunications Engineering' },
    organization: 'Universidad Politécnica Salesiana',
    period: { es: 'Mar 2025', en: 'Mar 2025' },
    description: {
      es: 'Formación en ingeniería de telecomunicaciones, sistemas, programación, bases de datos y redes.',
      en: 'Training in telecommunications engineering, systems, programming, databases and networks.',
    },
  },
];

export const copy = {
  es: {
    languageName: 'ES',
    skip: 'Saltar al contenido',
    available: 'Disponible para nuevos retos',
    nav: { about: 'Quién soy', projects: 'Proyectos', dashboards: 'Dashboards', certifications: 'Certificaciones', experience: 'Trayectoria', education: 'Formación' },
    eyebrow: 'DATA SYSTEMS / PORTFOLIO 2026',
    heroLead: 'Construyendo las pipelines que mantienen a las empresas de hoy en dia.',
    viewProjects: 'Ver proyectos',
    viewDashboards: 'Ver dashboards',
    about: 'Quién soy',
    aboutKicker: '01 / PERFIL',
    aboutText: 'Ingeniero de Datos con maestría en Big Data. Diseño e implemento pipelines de datos escalables para apoyar e impulsar la toma de decisiones en las empresas usando entornos cloud.',
    projects: 'Proyectos destacados',
    projectsKicker: '02 / TRABAJO',
    projectHint: 'Proyectos de datos y analítica aplicada',
    dashboards: 'Mi estilo de dashboards',
    dashboardsKicker: 'VISUAL ANALYTICS / SHOWCASE',
    dashboardsDescription: 'Algunos ejemplos de dashboards realizados en diferentes proyectos.',
    openDashboard: 'Abrir vista ampliada de',
    closeDashboard: 'Cerrar vista ampliada',
    openRepo: 'Abrir repositorio de',
    certifications: 'Certificaciones',
    certificationsKicker: '03 / CREDENCIALES',
    certificationText: 'Certificado por las empresas líderes del mercado.',
    experience: 'Trayectoria laboral',
    experienceKicker: '04 / EXPERIENCIA',
    education: 'Formación académica',
    educationKicker: '05 / EDUCACIÓN',
    connect: 'Construyamos sistemas que impulsen decisiones.',
    socialHint: 'Encuéntrame en',
    rights: 'Diseñado y construido con intención.',
    switchLabel: 'Cambiar idioma a inglés',
  },
  en: {
    languageName: 'EN',
    skip: 'Skip to content',
    available: 'Open to new opportunities',
    nav: { about: 'About', projects: 'Projects', dashboards: 'Dashboards', certifications: 'Certifications', experience: 'Experience', education: 'Education' },
    eyebrow: 'DATA SYSTEMS / PORTFOLIO 2026',
    heroLead: "Building the data pipelines that support today's businesses.",
    viewProjects: 'View projects',
    viewDashboards: 'View dashboards',
    about: 'About me',
    aboutKicker: '01 / PROFILE',
    aboutText: 'Data engineer with a MSc in big data. I design and implement scalable data pipelines to help and drive business decisions using cloud enviroments.',
    projects: 'Selected projects',
    projectsKicker: '02 / WORK',
    projectHint: 'Data and applied analytics projects',
    dashboards: 'My dashboard style',
    dashboardsKicker: 'VISUAL ANALYTICS / SHOWCASE',
    dashboardsDescription: 'A sample of dashboards built across multiple projects.',
    openDashboard: 'Open enlarged view of',
    closeDashboard: 'Close enlarged view',
    openRepo: 'Open repository for',
    certifications: 'Certifications',
    certificationsKicker: '03 / CREDENTIALS',
    certificationText: "Certified by the world's leading tech companies.",
    experience: 'Work experience',
    experienceKicker: '04 / EXPERIENCE',
    education: 'Academic background',
    educationKicker: '05 / EDUCATION',
    connect: 'Let’s build systems that move decisions.',
    socialHint: 'Find me on',
    rights: 'Designed and built with intention.',
    switchLabel: 'Cambiar idioma a español',
  },
} as const;
