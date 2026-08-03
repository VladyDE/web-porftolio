import type { ImageMetadata } from 'astro';
import profileImage from '../assets/profile-placeholder.svg';
import pipelineImage from '../assets/project-pipeline.svg';
import analyticsImage from '../assets/project-analytics.svg';
import lakehouseImage from '../assets/project-lakehouse.svg';
import azureLogo from '../assets/cert-azure.svg';
import awsLogo from '../assets/cert-aws.svg';
import gcpLogo from '../assets/cert-gcp.svg';

export type Locale = 'es' | 'en';
export type LocalizedText = Record<Locale, string>;

export interface Project {
  title: LocalizedText;
  description: LocalizedText;
  stack: string[];
  repoUrl: string;
  image: ImageMetadata;
  imageAlt: LocalizedText;
}

export interface Certification {
  name: string;
  issuer: string;
  logo: ImageMetadata;
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
  name: 'Your Name',
  role: { es: 'Ingeniero de Datos', en: 'Data Engineer' },
  location: 'Bogotá, Colombia',
  email: 'hello@example.com',
  portrait: profileImage,
  social: {
    github: 'https://github.com/your-username',
    linkedin: 'https://www.linkedin.com/in/your-username/',
  },
};

// Add or remove projects here; the grid and both languages update automatically.
export const projects: Project[] = [
  {
    title: { es: 'Pipeline de datos en tiempo real', en: 'Real-time data pipeline' },
    description: {
      es: 'Arquitectura de ingesta y transformación para procesar eventos con calidad, trazabilidad y baja latencia.',
      en: 'Ingestion and transformation architecture for processing events with quality, traceability, and low latency.',
    },
    stack: ['Python', 'Kafka', 'dbt', 'Airflow'],
    repoUrl: 'https://github.com/your-username/project-one',
    image: pipelineImage,
    imageAlt: { es: 'Diagrama del pipeline de datos', en: 'Data pipeline diagram' },
  },
  {
    title: { es: 'Plataforma analítica', en: 'Analytics platform' },
    description: {
      es: 'Modelado dimensional y capa semántica para convertir datos operativos en métricas confiables de negocio.',
      en: 'Dimensional modeling and a semantic layer that turn operational data into trusted business metrics.',
    },
    stack: ['SQL', 'BigQuery', 'Looker', 'Terraform'],
    repoUrl: 'https://github.com/your-username/project-two',
    image: analyticsImage,
    imageAlt: { es: 'Visualización de métricas analíticas', en: 'Analytics metrics visualization' },
  },
  {
    title: { es: 'Lakehouse escalable', en: 'Scalable lakehouse' },
    description: {
      es: 'Procesamiento distribuido por capas con validaciones automatizadas, observabilidad y control de costos.',
      en: 'Layered distributed processing with automated validation, observability, and cost controls.',
    },
    stack: ['Spark', 'Databricks', 'Delta Lake', 'Azure'],
    repoUrl: 'https://github.com/your-username/project-three',
    image: lakehouseImage,
    imageAlt: { es: 'Arquitectura de capas del lakehouse', en: 'Lakehouse layered architecture' },
  },
];

// Replace these example credentials and SVG logos with your three real certifications.
export const certifications: Certification[] = [
  { name: 'Azure Data Engineer Associate', issuer: 'Microsoft', logo: azureLogo },
  { name: 'AWS Data Analytics Specialty', issuer: 'Amazon Web Services', logo: awsLogo },
  { name: 'Professional Data Engineer', issuer: 'Google Cloud', logo: gcpLogo },
];

// Replace these sample roles with your real employment history.
export const experience: TimelineEntry[] = [
  {
    title: { es: 'Ingeniero de Datos Senior', en: 'Senior Data Engineer' },
    organization: 'Company Name',
    period: { es: '2024 — Presente', en: '2024 — Present' },
    description: {
      es: 'Diseñé pipelines confiables y modelos analíticos que redujeron tiempos de procesamiento y mejoraron la disponibilidad de datos.',
      en: 'Designed reliable pipelines and analytics models that reduced processing times and improved data availability.',
    },
    tags: ['Python', 'Airflow', 'Cloud'],
  },
  {
    title: { es: 'Ingeniero de Datos', en: 'Data Engineer' },
    organization: 'Previous Company',
    period: { es: '2022 — 2024', en: '2022 — 2024' },
    description: {
      es: 'Automaticé procesos de integración y construí datasets gobernados para equipos de analítica y producto.',
      en: 'Automated integration processes and built governed datasets for analytics and product teams.',
    },
    tags: ['SQL', 'dbt', 'Data Quality'],
  },
];

// Replace this sample degree with your real academic background.
export const education: TimelineEntry[] = [
  {
    title: { es: 'Título universitario', en: "Bachelor's degree" },
    organization: 'University Name',
    period: { es: '2017 — 2022', en: '2017 — 2022' },
    description: {
      es: 'Formación en ingeniería, sistemas de información, bases de datos y fundamentos de computación.',
      en: 'Education in engineering, information systems, databases, and computing fundamentals.',
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
    projectHint: 'Selecciona una imagen para abrir el repositorio',
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
    projectHint: 'Select an image to open its repository',
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
