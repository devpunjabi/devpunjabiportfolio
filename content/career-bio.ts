import { img } from '../assets/image';
import { definePage } from './types';

/**
 * The German entries are translations of the English ones — English is the
 * source of truth here. Roles, dates and tags are shared between the two, so
 * when a position changes, update both blocks of the same section together.
 */
export default definePage({
  id: 'career-bio',
  themeColor: 'bg-blue-900',
  hero: img('career-bio/IMG_2510.png'), // Working session at KIT's Triangel — research in the open

  en: {
    title: 'Professional Journey',
    subtitle: 'Where Engineering Meets Research',
    description: `I build technology that carries ideas from whiteboard to production. From scalable architectures to machine-learning prototypes, my focus is on turning open questions into robust, working systems — engineering as an instrument of research.`,
  },
  de: {
    title: 'Beruflicher Werdegang',
    subtitle: 'Wo Engineering auf Forschung trifft',
    description: `Ich entwickle Technologie, die Ideen vom Whiteboard in die Produktion bringt. Von skalierbaren Cloud-Architekturen bis zu Machine-Learning-Prototypen liegt mein Fokus darauf, offene Fragen in robuste, funktionierende Systeme zu verwandeln — Engineering als Instrument der Forschung.`,
  },

  sections: [
    {
      id: 'cb1',
      image: img('career-bio/IMG_5903.jpg'), // Talk at KIT: "Harnessing the Chemotion Repository for ML-Ready Datasets"
      en: {
        title: 'AI Researcher',
        subtitle: '2021 - Present | Academia',
        description: 'Led research projects in machine learning and AI, focusing on scalable algorithms and real-world applications for Chemical analysis. Published papers in top-tier journal and collaborated with interdisciplinary teams to advance the collaborative research environment. Pictured: presenting at KIT on harnessing the Chemotion repository for ML-ready datasets — turning a research-data archive into something a model can actually learn from.',
        projects: [
          {
            name: 'Agentic Chemistry Data Curation',
            description: 'LLM agents that read, normalise and cross-check experimental records, turning a research-data repository into datasets a model can train on.',
          },
          {
            name: 'Reaction Prediction',
            description: 'Models that predict the outcome of a chemical reaction from its reactants and conditions.',
          },
          {
            name: 'IR Spectrum Prediction',
            description: 'Predicting infrared spectra directly from molecular structure, so a measurement can be checked against what the structure implies.',
          },
        ],
        tags: ['LLMOps', 'Machine Learning', 'Docker', 'Node.js', 'React', 'Kubernetes', 'Python', 'PyTorch', 'TensorFlow'],
      },
      de: {
        title: 'KI-Forscher',
        subtitle: '2021 - Heute | Wissenschaft',
        description: 'Leitung von Forschungsprojekten in maschinellem Lernen und KI mit Schwerpunkt auf skalierbaren Algorithmen und praxisnahen Anwendungen in der chemischen Analytik. Veröffentlichung von Fachartikeln in einer führenden Fachzeitschrift und Zusammenarbeit mit interdisziplinären Teams zur Weiterentwicklung des gemeinsamen Forschungsumfelds. Im Bild: ein Vortrag am KIT darüber, wie sich aus dem Chemotion-Repositorium ML-fähige Datensätze gewinnen lassen — ein Forschungsdatenarchiv wird zu etwas, aus dem ein Modell wirklich lernen kann.',
        projects: [
          {
            name: 'Agentische Kuratierung von Chemiedaten',
            description: 'LLM-Agenten, die Versuchsdaten lesen, normalisieren und gegenprüfen — aus einem Forschungsdatenrepositorium werden Datensätze, mit denen sich Modelle trainieren lassen.',
          },
          {
            name: 'Reaktionsvorhersage',
            description: 'Modelle, die den Ausgang einer chemischen Reaktion aus Reaktanden und Reaktionsbedingungen vorhersagen.',
          },
          {
            name: 'IR-Spektren-Vorhersage',
            description: 'Vorhersage von Infrarotspektren direkt aus der Molekülstruktur, damit sich eine Messung gegen die erwartete Struktur prüfen lässt.',
          },
        ],
        tags: ['LLMOps', 'Machine Learning', 'Docker', 'Node.js', 'React', 'Kubernetes', 'Python', 'PyTorch', 'TensorFlow'],
      },
    },
    {
      id: 'cb2',
      image: img('career-bio/IMG_4570.png'), // Deep work — profiling and refactoring over coffee
      span: true,
      en: {
        title: 'Senior Performance Engineer',
        subtitle: '2016 - 2017 | Enterprise Web Applications',
        description: 'Optimized web application performance and scalability, reducing load times by 40% through code refactoring and efficient database queries. Implemented CI/CD pipelines and automated testing frameworks, enhancing deployment speed and reliability.',
        tags: ['HP Loadrunner', 'HP Performance Center', 'Oracle 11g', 'Apache Redhat', 'Java heap', 'Jmeter'],
      },
      de: {
        title: 'Senior Performance Engineer',
        subtitle: '2016 - 2017 | Enterprise-Webanwendungen',
        description: 'Optimierung von Performance und Skalierbarkeit von Webanwendungen; Reduzierung der Ladezeiten um 40 % durch Code-Refactoring und effiziente Datenbankabfragen. Aufbau von CI/CD-Pipelines und automatisierten Test-Frameworks, was Geschwindigkeit und Zuverlässigkeit der Deployments deutlich erhöhte.',
        tags: ['HP Loadrunner', 'HP Performance Center', 'Oracle 11g', 'Apache Redhat', 'Java heap', 'Jmeter'],
      },
    },
    {
      id: 'cb3',
      image: img('personal-bio/IMG_4201.png'), // Raspberry Pi 5 build — hands-on engineering
      en: {
        title: 'Senior Software Developer',
        subtitle: '2014 - 2016 | Enterprise Java Applications',
        description: 'Developed and maintained enterprise Java applications, focusing on backend services and API integrations. Collaborated with cross-functional teams to design and implement new features, ensuring high code quality through rigorous testing and code reviews.',
        tags: ['Java', 'Spring', 'Hibernate', 'MySQL', 'REST APIs', 'Git'],
      },
      de: {
        title: 'Senior Software Developer',
        subtitle: '2014 - 2016 | Enterprise-Java-Anwendungen',
        description: 'Entwicklung und Wartung von Enterprise-Java-Anwendungen mit Schwerpunkt auf Backend-Diensten und API-Integrationen. Zusammenarbeit mit funktionsübergreifenden Teams beim Entwurf und der Umsetzung neuer Funktionen sowie Sicherung hoher Codequalität durch gründliche Tests und Code-Reviews.',
        tags: ['Java', 'Spring', 'Hibernate', 'MySQL', 'REST APIs', 'Git'],
      },
    },
  ],
});
