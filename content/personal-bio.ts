import { img } from '../assets/image';
import { definePage } from './types';

export default definePage({
  id: 'personal-bio',
  themeColor: 'bg-slate-900',
  hero: img('career-bio/20666.JPEG'), // Baroque facade at golden hour — Neues Palais, Potsdam

  en: {
    title: 'Dev Punjabi',
    subtitle: 'Curious, Creative, Disciplined',
    description: `I am a research engineer by profession and a generalist by conviction. The same curiosity that drives my research pulls me toward mountains, circuits, clay, and music — and every one of those disciplines sharpens how I think about the next problem.`,
  },
  de: {
    title: 'Dev Punjabi',
    subtitle: 'Neugierig, Kreativ, Diszipliniert',
    description: `Ich bin Research Engineer von Beruf und Generalist aus Überzeugung. Dieselbe Neugier, die meine Forschung antreibt, zieht mich zu Bergen, Schaltkreisen, Ton und Musik — und jede dieser Disziplinen schärft mein Denken für das nächste Problem.`,
  },

  sections: [
    {
      id: 'pb1',
      image: img('personal-bio/IMG_3784.png'), // Race-prepped Yamaha R1 in the team's pit box
      span: true,
      en: {
        title: 'Machines & Speed',
        description: 'I am drawn to anything built to be fast and precise — and even more to the engineering that keeps it that way. Motorhead and life long motosport enthusiast',
      },
      de: {
        title: 'Maschinen & Geschwindigkeit',
        description: 'Mich fasziniert alles, was auf Schnelligkeit und Präzision gebaut ist — und noch mehr die Technik, die es dabei hält. Benzin im Blut und lebenslanger Motorsport-Enthusiast.',
      },
    },
    {
      id: 'pb2',
      image: img('career-bio/54637.JPEG'), // In a helicopter cockpit, hand on the cyclic
      en: {
        title: 'In the Cockpit',
        description: 'A hand on the cyclic and instruments everywhere you look. The urge to understand how machines fly has never quite left me.',
      },
      de: {
        title: 'Im Cockpit',
        description: 'Die Hand am Steuerknüppel, überall Instrumente. Der Drang zu verstehen, wie Maschinen fliegen, hat mich nie ganz verlassen.',
      },
    },
    {
      id: 'pb3',
      image: img('personal-bio/IMG_3866.png'), // Respirator and safety goggles before resin work
      en: {
        title: 'The Maker\'s Mask',
        description: 'Respirator on, goggles down. Resin, primer and airbrush all demand respect — careful work starts with working safely.',
      },
      de: {
        title: 'Die Maske des Machers',
        description: 'Atemschutz auf, Schutzbrille runter. Resin, Grundierung und Airbrush verlangen Respekt — sorgfältiges Arbeiten beginnt mit sicherem Arbeiten.',
      },
    },
    {
      id: 'pb4',
      image: img('personal-bio/IMG_5720.png'), // Behind the table at an art exhibition, works on display
      span: true,
      en: {
        title: 'Showing the Work',
        description: 'Behind the table at an exhibition — shrines, shadow boxes and busts finally out of the workshop and in front of people. Explaining how a piece was made is its own kind of craft.',
      },
      de: {
        title: 'Die Arbeit zeigen',
        description: 'Hinter dem Tisch bei einer Ausstellung — Schreine, Schaukästen und Büsten endlich aus der Werkstatt heraus und vor Publikum. Zu erklären, wie ein Stück entstanden ist, ist ein Handwerk für sich.',
      },
    },
    {
      id: 'pb5',
      image: img('personal-bio/IMG_4555.png'), // Live concert under red stage light
      en: { title: 'Rhythm & Energy', description: 'Recharging in the front row. Something about rock music that captivates me. The aggressive riffs and intricate time signatures are a constant source of inspiration.' },
      de: { title: 'Rhythmus & Energie', description: 'Auftanken in der ersten Reihe. Rockmusik hat etwas, das mich packt. Die aggressiven Riffs und verschachtelten Taktarten sind eine ständige Quelle der Inspiration.' },
    },
  ],
});
