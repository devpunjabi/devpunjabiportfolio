import { img } from '../assets/image';
import { definePage } from './types';

export default definePage({
  id: 'paintings',
  themeColor: 'bg-emerald-900',
  hero: img('paintings/34879.JPEG'), // Minimalist pencil face study — the quiet opener

  en: {
    title: 'Paintings',
    subtitle: 'Lines & Light',
    description: `Graphite and pencil on paper. My drawings explore the human face through light, shadow, and restraint — knowing what to leave untouched.`,
  },
  de: {
    title: 'Gemälde',
    subtitle: 'Linien & Licht',
    description: `Graphit und Bleistift auf Papier. Meine Zeichnungen erkunden das menschliche Gesicht durch Licht, Schatten und Zurückhaltung — das Wissen, was man unberührt lässt.`,
  },

  sections: [
    {
      id: 'pt1',
      image: img('paintings/18932.JPEG'), // Adorned — finished graphite portrait
      span: true,
      en: { title: 'Adorned', description: 'Graphite on paper — a portrait carried by the eyes, with the ornament and the hair left to fade into the page.' },
      de: { title: 'Geschmückt', description: 'Graphit auf Papier — ein Porträt, das von den Augen getragen wird; Schmuck und Haar verlieren sich im Papier.' },
    },
  ],
});
