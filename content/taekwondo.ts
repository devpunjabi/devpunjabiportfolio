import { img } from '../assets/image';
import { definePage } from './types';

export default definePage({
  id: 'taekwondo',
  themeColor: 'bg-red-900',
  hero: img('home/IMG_3900.png'), // Portrait in the dobok, black belt tied

  en: {
    title: 'Taekwondo',
    subtitle: 'Discipline, Respect, Spirit',
    description: `Martial arts is not just about fighting; it is about conquering oneself. I have dedicated more than 10 years to the art of Taekwondo, learning that true strength lies in gentleness and calm.`,
  },
  de: {
    title: 'Taekwondo',
    subtitle: 'Disziplin, Respekt, Geist',
    description: `Kampfkunst ist nicht nur Kampf; es ist Selbstbeherrschung. Ich habe Jahre der Kunst des Taekwondo gewidmet und gelernt, dass wahre Stärke in Sanftheit und Kontrolle liegt.`,
  },

  sections: [
    {
      id: 'tk1',
      image: img('taekwondo/c067298f-9f4b-4217-a235-f6766c9f8fd8.jpg'), // The course gathered in fighting stances
      span: true,
      en: { title: 'The Trainer C license course by TüBW', description: 'Completed advanced training to become a certified trainer' },
      de: { title: 'Trainer-C-Lizenz-Lehrgang der TüBW', description: 'Weiterführende Ausbildung zum lizenzierten Trainer abgeschlossen' },
    },
    {
      id: 'tk2',
      image: img('taekwondo/IMG_4196.PNG'), // Solo black belt in a poised stance
      en: { title: 'Forms', description: 'Precision and stillness in every stance.' },
      de: { title: 'Formen', description: 'Präzision und Ruhe in jeder Stellung.' },
    },
    {
      id: 'tk3',
      image: img('taekwondo/IMG_5286.jpg'), // Partner work in front of the examiners' table
      span: true,
      en: {
        title: 'Before the Examiners',
        description: 'Partner work in front of the panel at the Taekwondo-Union Baden-Württemberg. The hall goes quiet, the rest of the club sits along the wall, and every hour of practice has to hold up in a few minutes.',
      },
      de: {
        title: 'Vor den Prüfern',
        description: 'Partnerarbeit vor dem Gremium der Taekwondo-Union Baden-Württemberg. Die Halle wird still, der Rest des Vereins sitzt an der Wand — und jede geübte Stunde muss in wenigen Minuten bestehen.',
      },
    },
    {
      id: 'tk4',
      image: img('taekwondo/IMG_2782.png'), // Certificate in hand at the TUBW
      en: { title: 'Grading', description: 'Certificate in hand — one grade closer, after years of dedication.' },
      de: { title: 'Gürtelprüfung', description: 'Urkunde in der Hand — ein Grad weiter, nach Jahren des Einsatzes.' },
    },
    {
      id: 'tk5',
      image: img('taekwondo/IMG_4101.PNG'), // Running the scoring table at a tournament
      en: { title: 'Beyond the Mat', description: 'Giving back at the scoring table.' },
      de: { title: 'Neben der Matte', description: 'Etwas zurückgeben am Punktetisch.' },
    },
  ],
});
