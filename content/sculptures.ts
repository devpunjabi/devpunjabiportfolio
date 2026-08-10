import { img } from '../assets/image';
import { definePage } from './types';

export default definePage({
  id: 'sculptures',
  themeColor: 'bg-stone-800',
  hero: img('sculptures/51258.JPEG'), // Studio shot — sculpting clay by lamplight

  en: {
    title: 'Sculptures',
    subtitle: 'Form from Chaos',
    description: `Working with clay and metal allows me to bring dimensions to life. Sculpture is the art of removing what is not needed to reveal the truth within.`,
  },
  de: {
    title: 'Skulpturen',
    subtitle: 'Form aus dem Chaos',
    description: `Die Arbeit mit Ton und Metall ermöglicht es mir, Dimensionen zum Leben zu erwecken. Bildhauerei ist die Kunst, das zu entfernen, was nicht benötigt wird, um die Wahrheit darin zu enthüllen.`,
  },

  sections: [
    {
      id: 'sc1',
      image: img('sculptures/phantom.JPEG'), // F-4 Phantom II scale model on a grass base
      span: true,
      en: { title: 'F-4 Phantom II', description: 'Scale model, hand-painted.' },
      de: { title: 'F-4 Phantom II', description: 'Modellbau, handbemalt.' },
    },
    {
      id: 'sc2',
      image: img('sculptures/IMG_5241.png'), // Eurofighter Typhoon scale model
      en: { title: 'Eurofighter Typhoon', description: 'Scale model.' },
      de: { title: 'Eurofighter Typhoon', description: 'Modellbau.' },
    },
    {
      id: 'sc3',
      image: img('sculptures/IMG_4580.png'), // Two F/A-18 Hornets diorama over the sea
      en: { title: 'Low Pass', description: 'F/A-18 Hornet diorama over the sea.' },
      de: { title: 'Tiefflug', description: 'F/A-18-Hornet-Diorama über dem Meer.' },
    },
    {
      id: 'sc4',
      image: img('sculptures/IMG_4837.png'), // Hand-painted Ganesha figurine
      en: { title: 'Ganesha', description: 'Hand-painted figurine — white and gold over sculpted detail.' },
      de: { title: 'Ganesha', description: 'Handbemalte Figur — Weiß und Gold über modellierten Details.' },
    },
    {
      id: 'sc5',
      image: img('sculptures/IMG_9220.png'), // Illuminated Ganesha shadow-box shrine
      span: true,
      en: { title: 'Ganesha Shrine', description: 'Illuminated shadow-box diorama.' },
      de: { title: 'Ganesha-Schrein', description: 'Beleuchtetes Schaukasten-Diorama.' },
    },
    {
      id: 'sc6',
      image: img('sculptures/tiger.png'), // White tiger 3D shadow-box wall piece
      en: { title: 'Tiger', description: 'Shadow-box wall piece.' },
      de: { title: 'Tiger', description: 'Schaukasten-Wandobjekt.' },
    },
    {
      id: 'sc7',
      image: img('sculptures/IMG_3665.png'), // Space-telescope-in-orbit shadow box
      en: { title: 'In Orbit', description: 'Space-telescope shadow box.' },
      de: { title: 'Im Orbit', description: 'Weltraumteleskop-Schaukasten.' },
    },
    {
      id: 'sc8',
      image: img('sculptures/cabin.JPEG'), // Log-cabin diorama in an open wooden box
      en: { title: 'The Cabin', description: 'Mixed-media diorama in a wooden box.' },
      de: { title: 'Die Hütte', description: 'Mixed-Media-Diorama in einer Holzkiste.' },
    },
    {
      id: 'sc9',
      image: img('sculptures/57972.JPEG'), // Martial-artist figurine on a flower base
      en: { title: 'Miyama', description: 'Painted martial-artist figurine.' },
      de: { title: 'Miyama', description: 'Bemalte Kampfkünstler-Figur.' },
    },
    {
      id: 'sc10',
      image: img('sculptures/IMG_5659.png'), // Hand-painted lynx head, held in the hand
      span: true,
      en: {
        title: 'Lynx',
        description: 'A lynx head, sculpted, printed, and then painted entirely by hand — the ruff brushed strand by strand and the eyes glazed last, because they decide whether the whole piece is alive.',
      },
      de: {
        title: 'Luchs',
        description: 'Ein Luchskopf — modelliert, gedruckt und dann vollständig von Hand bemalt: der Backenbart Strähne für Strähne, die Augen zuletzt lasiert, weil sie entscheiden, ob das ganze Stück lebt.',
      },
    },
    {
      id: 'sc11',
      image: img('digital-3d/gold-plume.png'), // Painted mandala medallion, white with gold line work
      en: {
        title: 'Gilded Mandala',
        description: 'The mandala art created on nomad sculpt.',
      },
      de: {
        title: 'Goldenes Mandala',
        description: 'Die Mandala-Kunst, die auf Nomad Sculpt erstellt wurde.',
      },
    },
  ],
});
