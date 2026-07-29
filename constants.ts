
import { NavItem, PageData } from './types';
import * as PersonalBioImages from './assets/personal-bio/images';
import * as CareerBioImages from './assets/career-bio/images';
import * as TaekwondoImages from './assets/taekwondo/images';
import * as PaintingsImages from './assets/paintings/images';
import * as SculpturesImages from './assets/sculptures/images';
import * as FitnessImages from './assets/fitness/images';
import * as Digital3DImages from './assets/digital-3d/images';



// --- NAVIGATION ---

export const NAVIGATION_EN: NavItem[] = [
  { label: 'Career', path: '/career-bio', id: 'career-bio' },
  { label: 'Projects', path: '/side-projects', id: 'side-projects' },
  { label: 'About Me', path: '/personal-bio', id: 'personal-bio' },
  { label: 'Arts', path: '/arts', id: 'arts' },
  { label: 'Taekwondo', path: '/taekwondo', id: 'taekwondo' },
  { label: 'Fitness', path: '/fitness', id: 'fitness' },
  { label: 'Contact', path: '/contact', id: 'contact' },
];

export const NAVIGATION_DE: NavItem[] = [
  { label: 'Karriere', path: '/career-bio', id: 'career-bio' },
  { label: 'Projekte', path: '/side-projects', id: 'side-projects' },
  { label: 'Über Mich', path: '/personal-bio', id: 'personal-bio' },
  { label: 'Kunst', path: '/arts', id: 'arts' },
  { label: 'Taekwondo', path: '/taekwondo', id: 'taekwondo' },
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
    description: `I am a research engineer by profession and a generalist by conviction. The same curiosity that drives my research pulls me toward mountains, circuits, clay, and music — and every one of those disciplines sharpens how I think about the next problem.`,
    heroImage: PersonalBioImages.HERO,
    themeColor: 'bg-slate-900',
    gallery: [
      { id: 'pb7', imageUrl: PersonalBioImages.ACADEMIA, title: 'At the Frontier', description: 'Presenting my research at KIT — where curiosity becomes science.', span: true },
      { id: 'pb6', imageUrl: PersonalBioImages.TINKERING, title: 'Curiosity in Circuits', description: 'A Raspberry Pi mid-build; learning by making.' },
      { id: 'pb1', imageUrl: PersonalBioImages.WILDERNESS, title: 'Into the Wild', description: 'Chasing waterfalls and alpine lakes on foot.' },
      { id: 'pb2', imageUrl: PersonalBioImages.VISTA, title: 'Golden Hour', description: 'Where mountain light slows everything down.' },
      { id: 'pb3', imageUrl: PersonalBioImages.PASTURES, title: 'Mountain Calm', description: 'Quiet pastures and a chalet by the lake.' },
      { id: 'pb4', imageUrl: PersonalBioImages.ARCHITECTURE, title: 'Karlsruhe', description: 'The palace framed from my window.', span: true },
      { id: 'pb5', imageUrl: PersonalBioImages.HERITAGE, title: 'Old Stone', description: 'Drawn to baroque domes and history — Karlskirche, Vienna.' },
      { id: 'pb8', imageUrl: PersonalBioImages.MUSIC, title: 'Rhythm & Energy', description: 'Recharging in the front row.', span: true },
    ]
  },
  'career-bio': {
    id: 'career-bio',
    title: 'Professional Journey',
    subtitle: 'Where Engineering Meets Research',
    description: `I build technology that carries ideas from whiteboard to production. From scalable architectures to machine-learning prototypes, my focus is on turning open questions into robust, working systems — engineering as an instrument of research.`,
    heroImage: CareerBioImages.HERO,
    themeColor: 'bg-blue-900',
    gallery: [
      {
        id: 'cb1',
        imageUrl: CareerBioImages.ARCHITECT,
        title: 'AI Researcher',
        subtitle: '2021 - Present | Academia',
        description: 'Led research projects in machine learning and AI, focusing on scalable algorithms and real-world applications for Chemical analysis. Published papers in top-tier journal and collaborated with interdisciplinary teams to advance the collaborative research environment.',
        tags: ['LLMOps', 'Machine Learning', 'Docker', 'Node.js', 'React', 'Kubernetes', 'Python', 'PyTorch', 'TensorFlow']
      },
      {
        id: 'cb2',
        imageUrl: CareerBioImages.COLLABORATION,
        title: 'Senior Performance Engineer',
        subtitle: '2016 - 2017 | Enterprise Web Applications',
        description: 'Optimized web application performance and scalability, reducing load times by 40% through code refactoring and efficient database queries. Implemented CI/CD pipelines and automated testing frameworks, enhancing deployment speed and reliability.',
        tags: ['HP Loadrunner', 'HP Performance Center', 'Oracle 11g', 'Apache Redhat', 'Java heap', 'Jmeter'],
        span: true
      },
      {
        id: 'cb3',
        imageUrl: CareerBioImages.ENGINEERING,
        title: 'Senior Software Developer',
        subtitle: '2014 - 2016 | Enterprise Java Applications',
        description: 'Developed and maintained enterprise Java applications, focusing on backend services and API integrations. Collaborated with cross-functional teams to design and implement new features, ensuring high code quality through rigorous testing and code reviews.',
        tags: ['Java', 'Spring', 'Hibernate', 'MySQL', 'REST APIs', 'Git']
      }
    ]
  },
  'taekwondo': {
    id: 'taekwondo',
    title: 'Taekwondo',
    subtitle: 'Discipline, Respect, Spirit',
    description: `Martial arts is not just about fighting; it is about conquering oneself. I have dedicated more than 10 years to the art of Taekwondo, learning that true strength lies in gentleness and calm.`,
    heroImage: TaekwondoImages.HERO,
    themeColor: 'bg-red-900',
    gallery: [
      { id: 'tk1', imageUrl: TaekwondoImages.COMMUNITY, title: 'The Trainer C license course by TüBW', description: 'Completed advanced training to become a certified trainer', span: true },
      { id: 'tk2', imageUrl: TaekwondoImages.FORMS, title: 'Forms', description: 'Precision and stillness in every stance.' },
      { id: 'tk3', imageUrl: TaekwondoImages.COMPETITION, title: 'Competition', description: 'Respect first — the bow before the bout.' },
      { id: 'tk4', imageUrl: TaekwondoImages.GRADING, title: 'Grading', description: 'Earning the black belt, the culmination of years of dedication.' },
      { id: 'tk5', imageUrl: TaekwondoImages.OFFICIATING, title: 'Beyond the Mat', description: 'Giving back at the scoring table.' },
    ]
  },
  'paintings': {
    id: 'paintings',
    title: 'Paintings',
    subtitle: 'Lines & Light',
    description: `Graphite and pencil on paper. My drawings explore the human face through light, shadow, and restraint — knowing what to leave untouched.`,
    heroImage: PaintingsImages.HERO,
    themeColor: 'bg-emerald-900',
    gallery: [
      { id: 'pt1', imageUrl: PaintingsImages.PORTRAIT, title: 'Adorned', description: 'Graphite on paper.', span: true },
      { id: 'pt2', imageUrl: PaintingsImages.STUDY, title: 'First Lines', description: 'Pencil study.' },
    ]
  },
  'sculptures': {
    id: 'sculptures',
    title: 'Sculptures',
    subtitle: 'Form from Chaos',
    description: `Working with clay and metal allows me to bring dimensions to life. Sculpture is the art of removing what is not needed to reveal the truth within.`,
    heroImage: SculpturesImages.GANESHA,
    themeColor: 'bg-stone-800',
    gallery: [
      { id: 'sc1', imageUrl: SculpturesImages.PHANTOM, title: 'F-4 Phantom II', description: 'Scale model, hand-painted.', span: true },
      { id: 'sc2', imageUrl: SculpturesImages.TYPHOON, title: 'Eurofighter Typhoon', description: 'Scale model.' },
      { id: 'sc3', imageUrl: SculpturesImages.HORNETS, title: 'Low Pass', description: 'F/A-18 Hornet diorama over the sea.' },
      { id: 'sc4', imageUrl: SculpturesImages.GANESHA, title: 'Ganesha', description: 'Hand-painted figurine.' },
      { id: 'sc5', imageUrl: SculpturesImages.GANESHA_SHRINE, title: 'Ganesha Shrine', description: 'Illuminated shadow-box diorama.', span: true },
      { id: 'sc6', imageUrl: SculpturesImages.TIGER, title: 'Tiger', description: 'Shadow-box wall piece.' },
      { id: 'sc7', imageUrl: SculpturesImages.TELESCOPE, title: 'In Orbit', description: 'Space-telescope shadow box.' },
      { id: 'sc8', imageUrl: SculpturesImages.CABIN, title: 'The Cabin', description: 'Mixed-media diorama in a wooden box.' },
      { id: 'sc9', imageUrl: SculpturesImages.MIYAMA, title: 'Miyama', description: 'Painted martial-artist figurine.' },
      { id: 'sc10', imageUrl: SculpturesImages.PROCESS, title: 'In the Making', description: 'Studio process — clay by lamplight.', span: true },
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
      { id: 'd3d1', imageUrl: Digital3DImages.SCULPTING, title: 'Digital Sculpting', description: 'Shaping clay on a tablet.' },
      { id: 'd3d2', imageUrl: Digital3DImages.MANDALA, title: 'Mandala', description: '3D-printed floral medallion.' },
      { id: 'd3d3', imageUrl: Digital3DImages.PRINTS, title: 'Nature and Fanstasy forms', description: 'Fresh prints', span: true },
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
      { id: 'fw1', imageUrl: FitnessImages.COURT, title: 'On the Court', description: 'Staying sharp with a game of hoops.' },
      { id: 'fw2', imageUrl: FitnessImages.BALANCE, title: 'Balance', description: 'Mobility and control — a full center split.', span: true },
      { id: 'fw3', imageUrl: FitnessImages.NUTRITION, title: 'Nutrition', description: '<p className="mb-4">Research over the last two decades has shown that the gut microbiome plays a major role in regulating brain function, emotional state, and behavior through what is known as the microbiota–gut–brain axis. Trillions of microorganisms in the intestine communicate with the brain through multiple pathways, including the vagus nerve, immune signaling, hormones, and microbial metabolites such as short-chain fatty acids. Gut bacteria also influence the production and regulation of neurotransmitters and their precursors, including serotonin, dopamine, and GABA, which are closely linked to mood, motivation, anxiety, and cognitive function. Alterations in gut microbial composition (dysbiosis) have been associated with depression, anxiety disorders, stress responses, and certain neurodegenerative diseases. While the field is still evolving, growing evidence from animal studies, human cohort studies, neuroimaging research, and clinical trials suggests that gut microbial health can significantly influence emotional regulation and mental well-being.</p><div className="mt-6 border-l-2 border-stone-300 pl-4"><h4 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3">Key Research References</h4><ul className="space-y-2 text-sm list-disc list-inside"><li><a href="https://scholar.google.com/scholar?q=Microbiota%E2%80%93neuroepithelial+signalling+across+the+gut%E2%80%93brain+axis" target="_blank" rel="noopener noreferrer">Microbiota–neuroepithelial signalling across the gut–brain axis</a> (Nature Reviews Microbiology, 2025)</li><li><a href="https://scholar.google.com/scholar?q=The+gut+microbiota%E2%80%93brain+axis+in+behaviour+and+brain+disorders" target="_blank" rel="noopener noreferrer">The gut microbiota–brain axis in behaviour and brain disorders</a> (Nature Reviews Microbiology, 2021)</li><li><a href="https://scholar.google.com/scholar?q=Gut-brain-crosstalk%3A+the+vagus+nerve+and+the+microbiota-gut-brain+axis+in+depression" target="_blank" rel="noopener noreferrer">Gut-brain-crosstalk: the vagus nerve and the microbiota-gut-brain axis in depression</a> (Journal of Affective Disorders Reports, 2023)</li><li><a href="https://scholar.google.com/scholar?q=The+Microbiota-Gut-Brain+Axis%3A+From+Motility+to+Mood" target="_blank" rel="noopener noreferrer">The Microbiota-Gut-Brain Axis: From Motility to Mood</a> (2021 Review)</li><li><a href="https://scholar.google.com/scholar?q=Brain-gut-microbiota+axis%3A+bidirectional+regulatory+mechanisms+and+disease+interactions" target="_blank" rel="noopener noreferrer">Brain-gut-microbiota axis: bidirectional regulatory mechanisms and disease interactions</a> (2026 Review)</li></ul><p className="text-xs text-stone-500 italic mt-3">These reviews provide some of the strongest current summaries of the molecular, neurological, and psychiatric evidence linking gut microbial ecology to brain activity and mood regulation.</p></div>' },
    ]
  },
  'side-projects': {
    id: 'side-projects',
    title: 'Projects & Research',
    subtitle: 'Self-Driven Experiments at the Frontier',
    description: `Where my engineering and my obsessions collide. These are self-driven research experiments — exploring how mathematics becomes art, how AI can teach and analyse, and how code can illuminate the things I love.`,
    heroImage: PersonalBioImages.TINKERING,
    themeColor: 'bg-indigo-900',
    gallery: [
      {
        id: 'sp1',
        imageUrl: Digital3DImages.MANDALA,
        title: 'Art from Mathematics — The 3D Mandelbulb',
        description: 'Rendering the 3D Mandelbulb, a fractal born from iterating complex-number math in three dimensions. Each pattern is pure equation made visible: infinite, self-similar detail emerging from a handful of lines of code, where mathematics quietly becomes sculpture.',
        span: true
      },
      {
        id: 'sp2',
        imageUrl: PaintingsImages.PORTRAIT,
        title: 'AI Art Teacher',
        description: 'An AI-powered art tutor that studies a student\'s drawing and returns personalised, real-time feedback on proportion, shading, and composition. It turns a vision-language model into a patient mentor, guiding beginners through the fundamentals one stroke at a time.'
      },
      {
        id: 'sp3',
        imageUrl: TaekwondoImages.FORMS,
        title: 'AI Fighter Analysis & Detection',
        description: 'A computer-vision system that detects fighters in sparring footage and analyses their technique frame by frame, tracking stances, kicks, timing, and movement. Built to give martial artists objective, data-driven feedback on form and reach.'
      }
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
    description: `Ich bin Research Engineer von Beruf und Generalist aus Überzeugung. Dieselbe Neugier, die meine Forschung antreibt, zieht mich zu Bergen, Schaltkreisen, Ton und Musik — und jede dieser Disziplinen schärft mein Denken für das nächste Problem.`,
    heroImage: PersonalBioImages.HERO,
    themeColor: 'bg-slate-900',
    gallery: [
      { id: 'pb7', imageUrl: PersonalBioImages.ACADEMIA, title: 'An vorderster Front', description: 'Meine Forschung am KIT präsentieren — wo Neugier zu Wissenschaft wird.', span: true },
      { id: 'pb6', imageUrl: PersonalBioImages.TINKERING, title: 'Neugier in Schaltkreisen', description: 'Ein Raspberry Pi im Aufbau; Lernen durch Machen.' },
      { id: 'pb1', imageUrl: PersonalBioImages.WILDERNESS, title: 'Hinaus in die Natur', description: 'Wasserfällen und Bergseen zu Fuß nachjagen.' },
      { id: 'pb2', imageUrl: PersonalBioImages.VISTA, title: 'Goldene Stunde', description: 'Wo das Berglicht alles entschleunigt.' },
      { id: 'pb3', imageUrl: PersonalBioImages.PASTURES, title: 'Bergruhe', description: 'Stille Weiden und eine Hütte am See.' },
      { id: 'pb4', imageUrl: PersonalBioImages.ARCHITECTURE, title: 'Karlsruhe', description: 'Das Schloss, von meinem Fenster aus gerahmt.', span: true },
      { id: 'pb5', imageUrl: PersonalBioImages.HERITAGE, title: 'Alter Stein', description: 'Fasziniert von barocken Kuppeln und Geschichte — Karlskirche, Wien.' },
      { id: 'pb8', imageUrl: PersonalBioImages.MUSIC, title: 'Rhythmus & Energie', description: 'Auftanken in der ersten Reihe.', span: true },
    ]
  },
  'career-bio': {
    id: 'career-bio',
    title: 'Beruflicher Werdegang',
    subtitle: 'Wo Engineering auf Forschung trifft',
    description: `Ich entwickle Technologie, die Ideen vom Whiteboard in die Produktion bringt. Von skalierbaren Cloud-Architekturen bis zu Machine-Learning-Prototypen liegt mein Fokus darauf, offene Fragen in robuste, funktionierende Systeme zu verwandeln — Engineering als Instrument der Forschung.`,
    heroImage: CareerBioImages.HERO,
    themeColor: 'bg-blue-900',
    gallery: [
      {
        id: 'cb1',
        imageUrl: CareerBioImages.ARCHITECT,
        title: 'Lead Software Architect',
        subtitle: '2023 - Heute | Enterprise-Plattformen',
        description: 'Leitung eines talentierten Entwicklerteams beim Design einer modernen, kollaborativen Cloud-Plattform. Architektur skalierbarer, ereignisgesteuerter Microservices für Millionen tägliche Operationen. Durchführung der Migration auf AWS und Kubernetes, wodurch die Rechenkosten um 35 % gesenkt wurden. Etablierung anspruchsvoller Entwicklungsstandards für React, TypeScript und Node.js-Codebasen.',
        tags: ['AWS', 'TypeScript', 'Kubernetes', 'Node.js', 'React', 'Docker']
      },
      {
        id: 'cb2',
        imageUrl: CareerBioImages.COLLABORATION,
        title: 'Senior Full-Stack Engineer',
        subtitle: '2020 - 2023 | Digitale Systeme',
        description: 'Entwicklung und Optimierung benutzerzentrierter Webanwendungen mit Next.js, Node.js und GraphQL. Reduzierung der Blockierzeit des Hauptthreads, wodurch die Core Web Vitals-Werte auf Mobilgeräten um 40 % gesteigert wurden. Aufbau automatisierter, selbstheilender CI/CD-Pipelines, wodurch Produktions-Release-Zyklen von Tagen auf Minuten verkürzt wurden.',
        tags: ['React', 'Next.js', 'PostgreSQL', 'GraphQL', 'Tailwind', 'CI/CD'],
        span: true
      },
      {
        id: 'cb3',
        imageUrl: CareerBioImages.ENGINEERING,
        title: 'Software Developer',
        subtitle: '2018 - 2020 | API- & Datenbankdienste',
        description: 'Entwicklung von Kern-Datenbanksystemen und RESTful APIs unter Verwendung von Python, Django und PostgreSQL. Entwurf sauberer Datenbankschemata und Caching-Ebenen für hohen Durchsatz. Enge Zusammenarbeit in agilen Sprints mit konstruktiven Code-Reviews und automatisierten Unit-Testing-Kampagnen.',
        tags: ['Python', 'Django', 'PostgreSQL', 'Redis', 'REST APIs', 'Git']
      }
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
      { id: 'tk1', imageUrl: TaekwondoImages.COMMUNITY, title: 'Die Dojang-Familie', description: 'Stärke, geteilt mit dem ganzen Verein.', span: true },
      { id: 'tk2', imageUrl: TaekwondoImages.FORMS, title: 'Formen', description: 'Präzision und Ruhe in jeder Stellung.' },
      { id: 'tk3', imageUrl: TaekwondoImages.COMPETITION, title: 'Wettkampf', description: 'Respekt zuerst — die Verbeugung vor dem Kampf.' },
      { id: 'tk4', imageUrl: TaekwondoImages.GRADING, title: 'Gürtelprüfung', description: 'Den nächsten Gürtel verdienen, eine Prüfung nach der anderen.' },
      { id: 'tk5', imageUrl: TaekwondoImages.OFFICIATING, title: 'Neben der Matte', description: 'Etwas zurückgeben am Punktetisch.' },
    ]
  },
  'paintings': {
    id: 'paintings',
    title: 'Gemälde',
    subtitle: 'Linien & Licht',
    description: `Graphit und Bleistift auf Papier. Meine Zeichnungen erkunden das menschliche Gesicht durch Licht, Schatten und Zurückhaltung — das Wissen, was man unberührt lässt.`,
    heroImage: PaintingsImages.HERO,
    themeColor: 'bg-emerald-900',
    gallery: [
      { id: 'pt1', imageUrl: PaintingsImages.PORTRAIT, title: 'Geschmückt', description: 'Graphit auf Papier.', span: true },
      { id: 'pt2', imageUrl: PaintingsImages.STUDY, title: 'Erste Linien', description: 'Bleistiftstudie.' },
    ]
  },
  'sculptures': {
    id: 'sculptures',
    title: 'Skulpturen',
    subtitle: 'Form aus dem Chaos',
    description: `Die Arbeit mit Ton und Metall ermöglicht es mir, Dimensionen zum Leben zu erwecken. Bildhauerei ist die Kunst, das zu entfernen, was nicht benötigt wird, um die Wahrheit darin zu enthüllen.`,
    heroImage: SculpturesImages.GANESHA,
    themeColor: 'bg-stone-800',
    gallery: [
      { id: 'sc1', imageUrl: SculpturesImages.PHANTOM, title: 'F-4 Phantom II', description: 'Modellbau, handbemalt.', span: true },
      { id: 'sc2', imageUrl: SculpturesImages.TYPHOON, title: 'Eurofighter Typhoon', description: 'Modellbau.' },
      { id: 'sc3', imageUrl: SculpturesImages.HORNETS, title: 'Tiefflug', description: 'F/A-18-Hornet-Diorama über dem Meer.' },
      { id: 'sc4', imageUrl: SculpturesImages.GANESHA, title: 'Ganesha', description: 'Handbemalte Figur.' },
      { id: 'sc5', imageUrl: SculpturesImages.GANESHA_SHRINE, title: 'Ganesha-Schrein', description: 'Beleuchtetes Schaukasten-Diorama.', span: true },
      { id: 'sc6', imageUrl: SculpturesImages.TIGER, title: 'Tiger', description: 'Schaukasten-Wandobjekt.' },
      { id: 'sc7', imageUrl: SculpturesImages.TELESCOPE, title: 'Im Orbit', description: 'Weltraumteleskop-Schaukasten.' },
      { id: 'sc8', imageUrl: SculpturesImages.CABIN, title: 'Die Hütte', description: 'Mixed-Media-Diorama in einer Holzkiste.' },
      { id: 'sc9', imageUrl: SculpturesImages.MIYAMA, title: 'Miyama', description: 'Bemalte Kampfkünstler-Figur.' },
      { id: 'sc10', imageUrl: SculpturesImages.PROCESS, title: 'Im Entstehen', description: 'Atelierprozess — Ton im Lampenlicht.', span: true },
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
      { id: 'd3d1', imageUrl: Digital3DImages.SCULPTING, title: 'Digitales Modellieren', description: 'Ton formen auf dem Tablet.' },
      { id: 'd3d2', imageUrl: Digital3DImages.MANDALA, title: 'Mandala', description: '3D-gedrucktes Blütenmedaillon.' },
      { id: 'd3d3', imageUrl: Digital3DImages.PRINTS, title: 'Formen im Entstehen', description: 'Frische Drucke, noch mit Stützen.', span: true },
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
      { id: 'fw1', imageUrl: FitnessImages.COURT, title: 'Auf dem Platz', description: 'Scharf bleiben mit einem Spiel Basketball.' },
      { id: 'fw2', imageUrl: FitnessImages.BALANCE, title: 'Balance', description: 'Beweglichkeit und Kontrolle — ein voller Mittelspagat.', span: true },
      { id: 'fw3', imageUrl: FitnessImages.NUTRITION, title: 'Ernährung', description: '<p className="mb-4">Die Forschung der letzten zwei Jahrzehnte hat gezeigt, dass das Darmmikrobiom eine Hauptrolle bei der Regulierung der Gehirnfunktion, des emotionalen Zustands und des Verhaltens durch die sogenannte Mikrobiota-Darm-Hirn-Achse spielt. Billionen von Mikroorganismen im Darm kommunizieren mit dem Gehirn über mehrere Wege, darunter den Vagusnerv, Immunsignale, Hormone und mikrobielle Stoffwechselprodukte wie kurzkettige Fettsäuren. Darmbakterien beeinflussen auch die Produktion und Regulierung von Neurotransmittern und deren Vorstufen, einschließlich Serotonin, Dopamin und GABA, die eng mit Stimmung, Motivation, Angst und kognitiver Funktion verbunden sind. Veränderungen der mikrobiellen Zusammensetzung im Darm (Dysbiose) wurden mit Depressionen, Angststörungen, Stressreaktionen und bestimmten neurodegenerativen Erkrankungen in Verbindung gebracht. Obwohl sich das Forschungsfeld noch entwickelt, weisen zunehmende Beweise aus Tierstudien, menschlichen Kohortenstudien, Neuroimaging-Forschung und klinischen Studien darauf hin, dass die mikrobielle Gesundheit des Darms die emotionale Regulation und das geistige Wohlbefinden erheblich beeinflussen kann.</p><div className="mt-6 border-l-2 border-stone-300 pl-4"><h4 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3">Wichtige Forschungsreferenzen</h4><ul className="space-y-2 text-sm list-disc list-inside"><li><a href="https://scholar.google.com/scholar?q=Microbiota%E2%80%93neuroepithelial+signalling+across+the+gut%E2%80%93brain+axis" target="_blank" rel="noopener noreferrer">Microbiota–neuroepithelial signalling across the gut–brain axis</a> (Nature Reviews Microbiology, 2025)</li><li><a href="https://scholar.google.com/scholar?q=The+gut+microbiota%E2%80%93brain+axis+in+behaviour+and+brain+disorders" target="_blank" rel="noopener noreferrer">The gut microbiota–brain axis in behaviour and brain disorders</a> (Nature Reviews Microbiology, 2021)</li><li><a href="https://scholar.google.com/scholar?q=Gut-brain-crosstalk%3A+the+vagus+nerve+and+the+microbiota-gut-brain+axis+in+depression" target="_blank" rel="noopener noreferrer">Gut-brain-crosstalk: the vagus nerve and the microbiota-gut-brain axis in depression</a> (Journal of Affective Disorders Reports, 2023)</li><li><a href="https://scholar.google.com/scholar?q=The+Microbiota-Gut-Brain+Axis%3A+From+Motility+to+Mood" target="_blank" rel="noopener noreferrer">The Microbiota-Gut-Brain Axis: From Motility to Mood</a> (2021 Review)</li><li><a href="https://scholar.google.com/scholar?q=Brain-gut-microbiota+axis%3A+bidirectional+regulatory+mechanisms+and+disease+interactions" target="_blank" rel="noopener noreferrer">Brain-gut-microbiota axis: bidirectional regulatory mechanisms and disease interactions</a> (2026 Review)</li></ul><p className="text-xs text-stone-500 italic mt-3">Diese Übersichtsarbeiten bieten einige der fundiertesten aktuellen Zusammenfassungen der molekularen, neurologischen und psychiatrischen Belege, die die mikrobielle Ökologie des Darms mit Gehirnaktivität und Stimmungsregulation verbinden.</p></div>' },
    ]
  },
  'side-projects': {
    id: 'side-projects',
    title: 'Projekte & Forschung',
    subtitle: 'Eigene Experimente an der Grenze des Machbaren',
    description: `Wo meine Ingenieursarbeit und meine Leidenschaften aufeinandertreffen. Dies sind eigeninitiierte Forschungsexperimente — die erkunden, wie Mathematik zu Kunst wird, wie KI lehren und analysieren kann und wie Code die Dinge erhellt, die ich liebe.`,
    heroImage: PersonalBioImages.TINKERING,
    themeColor: 'bg-indigo-900',
    gallery: [
      {
        id: 'sp1',
        imageUrl: Digital3DImages.MANDALA,
        title: 'Kunst aus Mathematik — Der 3D-Mandelbulb',
        description: 'Das Rendern des 3D-Mandelbulb, eines Fraktals, das aus der Iteration komplexer Zahlen in drei Dimensionen entsteht. Jedes Bild ist reine Gleichung, sichtbar gemacht: unendliche, selbstähnliche Details, die aus wenigen Zeilen Code hervorgehen — wo Mathematik leise zur Skulptur wird.',
        span: true
      },
      {
        id: 'sp2',
        imageUrl: PaintingsImages.PORTRAIT,
        title: 'KI-Kunstlehrer',
        description: 'Ein KI-gestützter Kunstlehrer, der die Zeichnung eines Schülers analysiert und personalisiertes Echtzeit-Feedback zu Proportion, Schattierung und Komposition gibt. Er verwandelt ein Vision-Language-Modell in einen geduldigen Mentor, der Anfänger Strich für Strich durch die Grundlagen führt.'
      },
      {
        id: 'sp3',
        imageUrl: TaekwondoImages.FORMS,
        title: 'KI-Kämpferanalyse & -erkennung',
        description: 'Ein Computer-Vision-System, das Kämpfer in Sparring-Aufnahmen erkennt und ihre Technik Bild für Bild analysiert — Stellungen, Tritte, Timing und Bewegung. Entwickelt, um Kampfkünstlern objektives, datenbasiertes Feedback zu Form und Reichweite zu geben.'
      }
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
    portfolioTitle: "DEV PUNJABI — RESEARCH, ENGINEERING & ARTS",
    heroTitleLine1: "Curiosity,",
    heroTitleLine2: "Engineered",
    heroDescription: "Research engineer building systems at the frontier of machine intelligence — drawing on art, martial arts, and the mountains to see a little further.",
    beginJourney: "Explore the Work",
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
    portfolioTitle: "DEV PUNJABI — FORSCHUNG & ENTWICKLUNG",
    heroTitleLine1: "Neugier,",
    heroTitleLine2: "Konstruiert",
    heroDescription: "Research Engineer an der Grenze maschineller Intelligenz — inspiriert von Kunst, Kampfkunst und den Bergen, um ein Stück weiter zu sehen.",
    beginJourney: "Arbeit Entdecken",
    designedBy: "EST. 2025 — DESIGNED BY Dev",
    rightsReserved: "Dev Punjabi. Alle Rechte vorbehalten."
  }
};
