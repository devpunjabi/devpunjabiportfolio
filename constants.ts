
import { NavItem, PageData } from './types';
import * as PersonalBioImages from './assets/personal-bio/images';
import * as CareerBioImages from './assets/career-bio/images';
import * as TaekwondoImages from './assets/taekwondo/images';
import * as PaintingsImages from './assets/paintings/images';
import * as SculpturesImages from './assets/sculptures/images';
import * as Digital3DImages from './assets/digital-3d/images';
import * as FitnessImages from './assets/fitness/images';

// --- NAVIGATION ---

export const NAVIGATION_EN: NavItem[] = [
  { label: 'Personal Bio', path: '/personal-bio', id: 'personal-bio' },
  { label: 'Career', path: '/career-bio', id: 'career-bio' },
  { label: 'Taekwondo', path: '/taekwondo', id: 'taekwondo' },
  { label: 'Arts', path: '/arts', id: 'arts' },
  { label: 'Fitness', path: '/fitness', id: 'fitness' },
  { label: 'Contact', path: '/contact', id: 'contact' },
];

export const NAVIGATION_DE: NavItem[] = [
  { label: 'Über Mich', path: '/personal-bio', id: 'personal-bio' },
  { label: 'Karriere', path: '/career-bio', id: 'career-bio' },
  { label: 'Taekwondo', path: '/taekwondo', id: 'taekwondo' },
  { label: 'Kunst', path: '/arts', id: 'arts' },
  { label: 'Fitness', path: '/fitness', id: 'fitness' },
  { label: 'Kontakt', path: '/contact', id: 'contact' },
];

// For backward compatibility if imported directly (though we should use context)
export const NAVIGATION = NAVIGATION_EN;

// --- PAGE DATA (ENGLISH) ---

export const PAGES_DATA_EN: Record<string, PageData> = {
  'personal-bio': {
    id: 'personal-bio',
    title: 'Dev Punjabi',
    subtitle: 'Curious, Creative, Disciplined',
    description: `My journey is defined by a relentless curiosity and a passion for mastery across diverse disciplines. From the digital realm of coding to the tactile world of clay, I believe in the holistic development of the self.`,
    heroImage: PersonalBioImages.HERO,
    themeColor: 'bg-slate-900',
    gallery: [
      { id: 'pb1', imageUrl: PersonalBioImages.TRAVELS, title: 'Travels', description: 'Exploring the fjords of Norway.' },
      { id: 'pb2', imageUrl: PersonalBioImages.EARLY_DAYS, title: 'Early Days', description: 'Where the curiosity began.' },
      { id: 'pb3', imageUrl: PersonalBioImages.STUDY, title: 'Study', description: 'Always learning, always reading.', span: true },
    ]
  },
  'career-bio': {
    id: 'career-bio',
    title: 'Professional Journey',
    subtitle: 'Engineering Solutions, Leading Teams',
    description: `Over the last decade, I have architected scalable systems and led engineering teams to success. My focus is on clean code, user-centric design, and sustainable tech ecosystems.`,
    heroImage: CareerBioImages.HERO,
    themeColor: 'bg-blue-900',
    gallery: [
      { id: 'cb1', imageUrl: CareerBioImages.TECH_STACK, title: 'Tech Stack', description: 'Modern web technologies.' },
      { id: 'cb2', imageUrl: CareerBioImages.COLLABORATION, title: 'Collaboration', description: 'Building together.', span: true },
      { id: 'cb3', imageUrl: CareerBioImages.WORKSPACE, title: 'Workspace', description: 'Minimalist setup for maximum focus.' },
    ]
  },
  'taekwondo': {
    id: 'taekwondo',
    title: 'Taekwondo',
    subtitle: 'Discipline, Respect, Spirit',
    description: `Martial arts is not just about fighting; it is about conquering oneself. I have dedicated years to the art of Taekwondo, learning that true strength lies in gentleness and control.`,
    heroImage: TaekwondoImages.HERO,
    themeColor: 'bg-red-900',
    gallery: [
      { id: 'tk1', imageUrl: TaekwondoImages.TRAINING, title: 'Training', description: 'Daily drills.', span: true },
      { id: 'tk2', imageUrl: TaekwondoImages.FORMS, title: 'Forms', description: 'Precision in movement.' },
      { id: 'tk3', imageUrl: TaekwondoImages.COMPETITION, title: 'Competition', description: 'Testing limits.' },
    ]
  },
  'paintings': {
    id: 'paintings',
    title: 'Paintings',
    subtitle: 'Colors of the Imagination',
    description: `Oil and acrylic on canvas. My paintings explore the interplay of light and shadow, often inspired by nature and urban decay.`,
    heroImage: PaintingsImages.HERO,
    themeColor: 'bg-emerald-900',
    gallery: [
      { id: 'pt1', imageUrl: PaintingsImages.RIVER_VALLEY, title: 'River Valley', description: 'Oil on canvas, 2022.' },
      { id: 'pt2', imageUrl: PaintingsImages.CANYON, title: 'Canyon', description: 'Acrylic, 2023.' },
      { id: 'pt3', imageUrl: PaintingsImages.MOUNTAIN_HAZE, title: 'Mountain Haze', description: 'Mixed media.' },
      { id: 'pt4', imageUrl: PaintingsImages.NIGHT_SKY, title: 'Night Sky', description: 'A study in blue.', span: true },
    ]
  },
  'sculptures': {
    id: 'sculptures',
    title: 'Sculptures',
    subtitle: 'Form from Chaos',
    description: `Working with clay and metal allows me to bring dimensions to life. Sculpture is the art of removing what is not needed to reveal the truth within.`,
    heroImage: SculpturesImages.HERO,
    themeColor: 'bg-stone-800',
    gallery: [
      { id: 'sc1', imageUrl: SculpturesImages.HARVEST, title: 'The Harvest', description: 'Bronze cast.', span: true },
      { id: 'sc2', imageUrl: SculpturesImages.ABSTRACT_I, title: 'Abstract I', description: 'fired clay.' },
      { id: 'sc3', imageUrl: SculpturesImages.ABSTRACT_II, title: 'Abstract II', description: 'Welded steel.' },
    ]
  },
  'digital-3d': {
    id: 'digital-3d',
    title: 'Digital 3D Modelling',
    subtitle: 'Virtual Worlds',
    description: `Using Blender and ZBrush, I create characters and environments that defy physics. This medium allows for absolute creative freedom.`,
    heroImage: Digital3DImages.HERO,
    themeColor: 'bg-purple-900',
    gallery: [
      { id: 'd3d1', imageUrl: Digital3DImages.SCI_FI, title: 'Sci-Fi Corridor', description: 'Rendered in Cycles.' },
      { id: 'd3d2', imageUrl: Digital3DImages.CITY, title: 'City Scape', description: 'Low poly art.' },
      { id: 'd3d3', imageUrl: Digital3DImages.CHARACTER, title: 'Character Study', description: 'Anatomy practice.', span: true },
    ]
  },
  'fitness': {
    id: 'fitness',
    title: 'Fitness & Wellbeing',
    subtitle: 'Mens Sana In Corpore Sano',
    description: `A healthy mind resides in a healthy body. Through yoga, weightlifting, and mindfulness meditation, I maintain the balance required to perform at a high level in other areas of life.`,
    heroImage: FitnessImages.HERO,
    themeColor: 'bg-teal-900',
    gallery: [
      { id: 'fw1', imageUrl: FitnessImages.RUN, title: 'Morning Run', description: 'Clarity at dawn.' },
      { id: 'fw2', imageUrl: FitnessImages.YOGA, title: 'Balance', description: 'Yoga practice.', span: true },
      { id: 'fw3', imageUrl: FitnessImages.NUTRITION, title: 'Nutrition', description: 'Fueling the engine.' },
    ]
  }
};

export const PAGES_DATA = PAGES_DATA_EN; // Default export for compatibility

// --- PAGE DATA (GERMAN) ---

export const PAGES_DATA_DE: Record<string, PageData> = {
  'personal-bio': {
    id: 'personal-bio',
    title: 'Dev Punjabi',
    subtitle: 'Neugierig, Kreativ, Diszipliniert',
    description: `Mein Weg ist geprägt von unermüdlicher Neugier und einer Leidenschaft für Meisterschaft in verschiedenen Disziplinen. Von der digitalen Welt des Programmierens bis zur taktilen Welt des Tons glaube ich an die ganzheitliche Entwicklung des Selbst.`,
    heroImage: PersonalBioImages.HERO,
    themeColor: 'bg-slate-900',
    gallery: [
      { id: 'pb1', imageUrl: PersonalBioImages.TRAVELS, title: 'Reisen', description: 'Erkundung der Fjorde Norwegens.' },
      { id: 'pb2', imageUrl: PersonalBioImages.EARLY_DAYS, title: 'Frühe Tage', description: 'Wo die Neugier begann.' },
      { id: 'pb3', imageUrl: PersonalBioImages.STUDY, title: 'Studium', description: 'Immer lernen, immer lesen.', span: true },
    ]
  },
  'career-bio': {
    id: 'career-bio',
    title: 'Beruflicher Werdegang',
    subtitle: 'Lösungen Entwickeln, Teams Leiten',
    description: `In den letzten zehn Jahren habe ich skalierbare Systeme entworfen und Engineering-Teams zum Erfolg geführt. Mein Fokus liegt auf Clean Code, nutzerzentriertem Design und nachhaltigen Tech-Ökosystemen.`,
    heroImage: CareerBioImages.HERO,
    themeColor: 'bg-blue-900',
    gallery: [
      { id: 'cb1', imageUrl: CareerBioImages.TECH_STACK, title: 'Tech Stack', description: 'Moderne Webtechnologien.' },
      { id: 'cb2', imageUrl: CareerBioImages.COLLABORATION, title: 'Zusammenarbeit', description: 'Gemeinsam aufbauen.', span: true },
      { id: 'cb3', imageUrl: CareerBioImages.WORKSPACE, title: 'Arbeitsplatz', description: 'Minimalistisches Setup für maximalen Fokus.' },
    ]
  },
  'taekwondo': {
    id: 'taekwondo',
    title: 'Taekwondo',
    subtitle: 'Disziplin, Respekt, Geist',
    description: `Kampfkunst ist nicht nur Kampf; es ist Selbstbeherrschung. Ich habe Jahre der Kunst des Taekwondo gewidmet und gelernt, dass wahre Stärke in Sanftheit und Kontrolle liegt.`,
    heroImage: TaekwondoImages.HERO,
    themeColor: 'bg-red-900',
    gallery: [
      { id: 'tk1', imageUrl: TaekwondoImages.TRAINING, title: 'Training', description: 'Tägliche Übungen.', span: true },
      { id: 'tk2', imageUrl: TaekwondoImages.FORMS, title: 'Formen', description: 'Präzision in der Bewegung.' },
      { id: 'tk3', imageUrl: TaekwondoImages.COMPETITION, title: 'Wettkampf', description: 'Grenzen testen.' },
    ]
  },
  'paintings': {
    id: 'paintings',
    title: 'Gemälde',
    subtitle: 'Farben der Fantasie',
    description: `Öl und Acryl auf Leinwand. Meine Gemälde erforschen das Zusammenspiel von Licht und Schatten, oft inspiriert von der Natur und städtischem Verfall.`,
    heroImage: PaintingsImages.HERO,
    themeColor: 'bg-emerald-900',
    gallery: [
      { id: 'pt1', imageUrl: PaintingsImages.RIVER_VALLEY, title: 'Flusstal', description: 'Öl auf Leinwand, 2022.' },
      { id: 'pt2', imageUrl: PaintingsImages.CANYON, title: 'Schlucht', description: 'Acryl, 2023.' },
      { id: 'pt3', imageUrl: PaintingsImages.MOUNTAIN_HAZE, title: 'Bergnebel', description: 'Mixed Media.' },
      { id: 'pt4', imageUrl: PaintingsImages.NIGHT_SKY, title: 'Nachthimmel', description: 'Eine Studie in Blau.', span: true },
    ]
  },
  'sculptures': {
    id: 'sculptures',
    title: 'Skulpturen',
    subtitle: 'Form aus dem Chaos',
    description: `Die Arbeit mit Ton und Metall ermöglicht es mir, Dimensionen zum Leben zu erwecken. Bildhauerei ist die Kunst, das zu entfernen, was nicht benötigt wird, um die Wahrheit darin zu enthüllen.`,
    heroImage: SculpturesImages.HERO,
    themeColor: 'bg-stone-800',
    gallery: [
      { id: 'sc1', imageUrl: SculpturesImages.HARVEST, title: 'Die Ernte', description: 'Bronzeguss.', span: true },
      { id: 'sc2', imageUrl: SculpturesImages.ABSTRACT_I, title: 'Abstrakt I', description: 'Gebrannter Ton.' },
      { id: 'sc3', imageUrl: SculpturesImages.ABSTRACT_II, title: 'Abstrakt II', description: 'Geschweißter Stahl.' },
    ]
  },
  'digital-3d': {
    id: 'digital-3d',
    title: 'Digital 3D',
    subtitle: 'Virtuelle Welten',
    description: `Mit Blender und ZBrush erstelle ich Charaktere und Umgebungen, die der Physik trotzen. Dieses Medium erlaubt absolute kreative Freiheit.`,
    heroImage: Digital3DImages.HERO,
    themeColor: 'bg-purple-900',
    gallery: [
      { id: 'd3d1', imageUrl: Digital3DImages.SCI_FI, title: 'Sci-Fi Korridor', description: 'Gerendert in Cycles.' },
      { id: 'd3d2', imageUrl: Digital3DImages.CITY, title: 'Stadtbild', description: 'Low-Poly-Kunst.' },
      { id: 'd3d3', imageUrl: Digital3DImages.CHARACTER, title: 'Charakterstudie', description: 'Anatomie-Übung.', span: true },
    ]
  },
  'fitness': {
    id: 'fitness',
    title: 'Fitness & Wohlbefinden',
    subtitle: 'Mens Sana In Corpore Sano',
    description: `Ein gesunder Geist wohnt in einem gesunden Körper. Durch Yoga, Gewichtheben und Achtsamkeitsmeditation bewahre ich das Gleichgewicht, das erforderlich ist, um in anderen Lebensbereichen Höchstleistungen zu erbringen.`,
    heroImage: FitnessImages.HERO,
    themeColor: 'bg-teal-900',
    gallery: [
      { id: 'fw1', imageUrl: FitnessImages.RUN, title: 'Morgenlauf', description: 'Klarheit im Morgengrauen.' },
      { id: 'fw2', imageUrl: FitnessImages.YOGA, title: 'Balance', description: 'Yoga-Praxis.', span: true },
      { id: 'fw3', imageUrl: FitnessImages.NUTRITION, title: 'Ernährung', description: 'Den Motor antreiben.' },
    ]
  }
};

// --- UI TEXT ---

export const UI_TEXT = {
  en: {
    welcome: "Welcome",
    upNext: "Up Next",
    reachOut: "Reach Out",
    reachOutTitle: "I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    email: "Email",
    studio: "Studio",
    socials: "Socials",
    name: "Name",
    yourName: "Your name",
    subject: "Subject",
    subjectPlaceholder: "What is this about?",
    message: "Message",
    messagePlaceholder: "Tell me about your ideas...",
    sendMessage: "Send Message",
    sending: "Sending...",
    messageSent: "Message Sent",
    failedToSend: "Failed to send",
    portfolioTitle: "PORTFOLIO 2024",
    heroTitleLine1: "Quiet",
    heroTitleLine2: "Mastery",
    heroDescription: "A digital sanctuary exploring the intersection of technology, art, and the human spirit.",
    beginJourney: "Begin Journey",
    designedBy: "EST. 2025 — DESIGNED BY Dev",
    rightsReserved: "Dev Punjabi. All rights reserved."
  },
  de: {
    welcome: "Willkommen",
    upNext: "Nächstes",
    reachOut: "Kontakt",
    reachOutTitle: "Ich bin immer offen für Diskussionen über neue Projekte, kreative Ideen oder Möglichkeiten, Teil Ihrer Visionen zu sein.",
    email: "E-Mail",
    studio: "Studio",
    socials: "Soziales",
    name: "Name",
    yourName: "Ihr Name",
    subject: "Betreff",
    subjectPlaceholder: "Worum geht es?",
    message: "Nachricht",
    messagePlaceholder: "Erzählen Sie mir von Ihren Ideen...",
    sendMessage: "Nachricht Senden",
    sending: "Senden...",
    messageSent: "Gesendet",
    failedToSend: "Fehler beim Senden",
    portfolioTitle: "PORTFOLIO 2024",
    heroTitleLine1: "Stille",
    heroTitleLine2: "Meisterschaft",
    heroDescription: "Ein digitaler Zufluchtsort, der die Schnittstelle von Technologie, Kunst und dem menschlichen Geist erforscht.",
    beginJourney: "Reise Beginnen",
    designedBy: "EST. 2025 — DESIGNED BY Dev",
    rightsReserved: "Dev Punjabi. Alle Rechte vorbehalten."
  }
};
