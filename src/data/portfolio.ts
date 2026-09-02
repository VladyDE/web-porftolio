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

export interface Service {
  title: LocalizedText;
  description: LocalizedText;
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
  role: {
    es: 'Soluciones en Analítica e Ingeniería de Datos',
    en: 'Data Analytics and Engineering Solutions',
  },
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

export const services: Service[] = [
  {
    title: {
      es: 'Reportería automatizada e inteligencia de negocios',
      en: 'Automated Reporting & Business Intelligence',
    },
    description: {
      es: 'Automatizo procesos repetitivos de reportería y convierto datos sin procesar en dashboards e indicadores confiables. El servicio puede incluir extracción, transformación, modelado, actualizaciones programadas e informes en Power BI.',
      en: 'Automate repetitive reporting processes and transform raw business data into reliable dashboards and KPIs. This service can include data extraction, transformation, modeling, scheduled refreshes, and Power BI reporting.',
    },
  },
  {
    title: {
      es: 'Integración y centralización de datos',
      en: 'Data Integration & Centralization',
    },
    description: {
      es: 'Conecto y consolido datos de sistemas ERP, archivos de Excel, APIs, bases de datos SQL Server, SharePoint y plataformas cloud en un entorno centralizado y confiable para análisis y reportería.',
      en: 'Connect and consolidate data from multiple sources such as ERP systems, Excel files, APIs, SQL Server databases, SharePoint, and cloud platforms into a centralized and reliable data environment for analytics and reporting.',
    },
  },
  {
    title: {
      es: 'Calidad y conciliación de datos',
      en: 'Data Quality & Reconciliation',
    },
    description: {
      es: 'Mejoro la confiabilidad de los datos detectando duplicados, valores faltantes, registros inconsistentes y problemas de integridad referencial. También implemento reglas de validación y monitoreo para evitar que datos defectuosos lleguen a reportes u otros sistemas.',
      en: 'Improve the reliability of business data by detecting duplicates, missing values, inconsistent records, referential integrity issues, and other data quality problems. Automated validation rules and monitoring can be implemented to prevent bad data from reaching reports or downstream systems.',
    },
  },
  {
    title: {
      es: 'Automatización y modernización de pipelines de datos',
      en: 'Data Pipeline Automation & Modernization',
    },
    description: {
      es: 'Reemplazo procesos de datos manuales, repetitivos o frágiles con pipelines automatizados y mantenibles. Esto puede incluir ingestas programadas, transformaciones, cargas incrementales, monitoreo, manejo de errores y modernización de flujos ETL heredados.',
      en: 'Replace manual, repetitive, or fragile data processes with automated and maintainable pipelines. This can include scheduled ingestion, transformations, incremental loads, monitoring, error handling, and modernization of legacy ETL workflows.',
    },
  },
  {
    title: {
      es: 'Plataformas modernas de datos',
      en: 'Modern Data Platforms',
    },
    description: {
      es: 'Diseño e implemento plataformas analíticas escalables con Microsoft Fabric, Databricks, Azure, SQL Server y arquitecturas modernas lakehouse o warehouse para organizaciones que necesitan una base sólida para analítica, reportería y futuras iniciativas de inteligencia artificial o machine learning.',
      en: 'Design and implement scalable analytics platforms using Microsoft Fabric, Databricks, Azure, SQL Server, and modern lakehouse or warehouse architectures. This service is intended for organizations that need a stronger data foundation for analytics, reporting, and future AI or machine learning initiatives.',
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
    nav: { about: 'Quién soy', services: 'Servicios', dashboards: 'Dashboards', certifications: 'Certificaciones', education: 'Formación' },
    eyebrow: 'DATA SYSTEMS / PORTFOLIO 2026',
    heroLead: 'Optimizando procesos de datos en las empresas de hoy en dia.',
    viewServices: 'Servicios',
    viewDashboards: 'Ver dashboards',
    about: 'Quién soy',
    aboutKicker: '01 / PERFIL',
    aboutText: 'Ingeniero y Analista de Datos con maestría en Big Data. Ayudo a empresas a centralizar, automatizar y convertir sus datos en información confiable para tomar decisiones, utilizando desde SQL Server y Power BI hasta Microsoft Fabric y Databricks según la complejidad real del negocio.',
    projects: 'Proyectos destacados',
    projectsKicker: '02 / TRABAJO',
    projectHint: 'Proyectos de datos y analítica aplicada',
    dashboards: 'Mi estilo de dashboards',
    dashboardsKicker: 'VISUAL ANALYTICS / SHOWCASE',
    dashboardsDescription: 'Algunos ejemplos de dashboards realizados en diferentes proyectos.',
    services: 'Servicios de datos',
    servicesKicker: 'DATA SERVICES / CAPACIDADES',
    servicesDescription: 'Convierto procesos manuales y datos dispersos en sistemas confiables, automatizados y preparados para impulsar mejores decisiones.',
    serviceLabel: 'SERVICIO',
    openDashboard: 'Abrir vista ampliada de',
    closeDashboard: 'Cerrar vista ampliada',
    openRepo: 'Abrir repositorio de',
    certifications: 'Certificaciones',
    certificationsKicker: '03 / CREDENCIALES',
    certificationText: 'Certificado por las empresas líderes del mercado.',
    education: 'Formación académica',
    educationKicker: '04 / EDUCACIÓN',
    connect: 'Construyamos sistemas que impulsen decisiones.',
    socialHint: 'Encuéntrame en',
    rights: 'Diseñado y construido con intención.',
    switchLabel: 'Cambiar idioma a inglés',
  },
  en: {
    languageName: 'EN',
    skip: 'Skip to content',
    available: 'Open to new opportunities',
    nav: { about: 'About', services: 'Services', dashboards: 'Dashboards', certifications: 'Certifications', education: 'Education' },
    eyebrow: 'DATA SYSTEMS / PORTFOLIO 2026',
    heroLead: "Optimizing data processes for today's businesses.",
    viewServices: 'Services',
    viewDashboards: 'View dashboards',
    about: 'About me',
    aboutKicker: '01 / PROFILE',
    aboutText: "Data Engineer and Analyst with an MSc in Big Data. I help companies centralize, automate, and turn their data into reliable information for decision-making, using everything from SQL Server and Power BI to Microsoft Fabric and Databricks according to the business's actual complexity.",
    projects: 'Selected projects',
    projectsKicker: '02 / WORK',
    projectHint: 'Data and applied analytics projects',
    dashboards: 'My dashboard style',
    dashboardsKicker: 'VISUAL ANALYTICS / SHOWCASE',
    dashboardsDescription: 'A sample of dashboards built across multiple projects.',
    services: 'Data services',
    servicesKicker: 'DATA SERVICES / CAPABILITIES',
    servicesDescription: 'I turn manual processes and scattered data into reliable, automated systems built to support better decisions.',
    serviceLabel: 'SERVICE',
    openDashboard: 'Open enlarged view of',
    closeDashboard: 'Close enlarged view',
    openRepo: 'Open repository for',
    certifications: 'Certifications',
    certificationsKicker: '03 / CREDENTIALS',
    certificationText: "Certified by the world's leading tech companies.",
    education: 'Academic background',
    educationKicker: '04 / EDUCATION',
    connect: 'Let’s build systems that move decisions.',
    socialHint: 'Find me on',
    rights: 'Designed and built with intention.',
    switchLabel: 'Cambiar idioma a español',
  },
} as const;
