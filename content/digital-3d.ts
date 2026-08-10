import { img } from '../assets/image';
import { definePage } from './types';

export default definePage({
  id: 'digital-3d',
  themeColor: 'bg-purple-900',
  hero: img('digital-3d/IMG_5168.png'), // Digital sculpting on a tablet by the window

  en: {
    title: 'Digital 3D Modelling',
    subtitle: 'Virtual Worlds',
    description: `Sculpting on a tablet, then printing what I sculpt. Clay that never dries: I can carve a form at full resolution, undo an hour of work in a second, and send the result to the printer to hold in my hand.`,
  },
  de: {
    title: 'Digital 3D',
    subtitle: 'Virtuelle Welten',
    description: `Modellieren auf dem Tablet — und drucken, was ich modelliere. Ton, der nie trocknet: Ich kann eine Form in voller Auflösung ausarbeiten, eine Stunde Arbeit in einer Sekunde zurücknehmen und das Ergebnis am Ende in der Hand halten.`,
  },

  sections: [
    {
      id: 'd3d1',
      image: img('digital-3d/deity-sculpt.png'), // Mythological figure blocked out in Nomad Sculpt
      span: true,
      en: {
        title: 'A Figure Takes Shape',
        description: 'A mythological warrior blocked out on the tablet — anatomy first, then the jewellery, the cloth, and the weapon in his hand. Working digitally means the proportions can keep changing long after clay would have set.',
      },
      de: {
        title: 'Eine Figur nimmt Gestalt an',
        description: 'Ein mythologischer Krieger, auf dem Tablet grob angelegt — zuerst die Anatomie, dann Schmuck, Stoff und die Waffe in seiner Hand. Digital zu arbeiten heißt: Die Proportionen dürfen sich noch ändern, wenn Ton längst hart wäre.',
      },
    },
    {
      id: 'd3d2',
      image: img('digital-3d/mace-detail.png'), // The mace modelled separately, clay matcap
      en: {
        title: 'The Mace',
        description: 'The mace is modelled on its own so every ring and petal can be carved at full resolution before it ever joins the figure.',
      },
      de: {
        title: 'Die Keule',
        description: 'Die Keule entsteht separat, damit jeder Ring und jedes Blatt in voller Auflösung ausgearbeitet werden kann, bevor sie zur Figur kommt.',
      },
    },
    {
      id: 'd3d3',
      image: img('digital-3d/IMG_3831.png'), // Printed mandala dry-fitted with pedestal and lamps
      en: {
        title: 'Mandala, Printed',
        description: 'The mandala backdrop off the printer and dry-fitted with its pedestal and lamps, still in bare grey, before any paint goes on.',
      },
      de: {
        title: 'Mandala, gedruckt',
        description: 'Der Mandala-Hintergrund aus dem Drucker, mit Sockel und Lampen probeweise zusammengesteckt — noch im nackten Grau, vor jeder Farbe.',
      },
    },
    {
      id: 'd3d4',
      image: img('digital-3d/throne.jpeg'), // Shrine box assembled and primed in white
      span: true,
      en: {
        title: 'The Shrine, in White',
        description: 'Carved arches, turned pillars, oil lamps and a mandala throne — every part sculpted digitally, printed, assembled into its box and primed white, waiting for colour.',
      },
      de: {
        title: 'Der Schrein in Weiß',
        description: 'Verzierte Bögen, gedrehte Säulen, Öllampen und ein Mandala-Thron — jedes Teil digital modelliert, gedruckt, in den Kasten gebaut und weiß grundiert, bereit für Farbe.',
      },
    },
    {
      id: 'd3d5',
      image: img('digital-3d/cat.png'), // Printed cat bust on its plinth, unpainted
      en: {
        title: 'From Model to Object',
        description: 'A sculpted cat bust straight off the printer and mounted on its plinth — grey resin, no paint yet. The painted version lives on the Sculptures page.',
      },
      de: {
        title: 'Vom Modell zum Objekt',
        description: 'Eine modellierte Katzenbüste direkt aus dem Drucker, auf ihrem Sockel montiert — graues Resin, noch unbemalt. Die bemalte Fassung findet sich bei den Skulpturen.',
      },
    },
  ],
});
