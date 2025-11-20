
import { NavItem, PageData, PageId } from './types';
import * as PersonalBioImages from './assets/personal-bio/images';
import * as CareerBioImages from './assets/career-bio/images';
import * as TaekwondoImages from './assets/taekwondo/images';
import * as PaintingsImages from './assets/paintings/images';
import * as SculpturesImages from './assets/sculptures/images';
import * as Digital3DImages from './assets/digital-3d/images';
import * as FitnessImages from './assets/fitness/images';

export const NAVIGATION: NavItem[] = [
  { label: 'Personal Bio', path: '/personal-bio', id: 'personal-bio' },
  { label: 'Career', path: '/career-bio', id: 'career-bio' },
  { label: 'Taekwondo', path: '/taekwondo', id: 'taekwondo' },
  { label: 'Paintings', path: '/paintings', id: 'paintings' },
  { label: 'Sculptures', path: '/sculptures', id: 'sculptures' },
  { label: 'Digital 3D', path: '/digital-3d', id: 'digital-3d' },
  { label: 'Fitness', path: '/fitness', id: 'fitness' },
  { label: 'Contact', path: '/contact', id: 'contact' },
];

export const PAGES_DATA: Record<string, PageData> = {
  'personal-bio': {
    id: 'personal-bio',
    title: 'Dev Punjabi',
    subtitle: 'Curious, Creative, Discplined',
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
