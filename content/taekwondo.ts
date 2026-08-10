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
      image: img('taekwondo/trainerC.jpg'), // The Trainer C course gathered for a group photo
      span: true,
      en: { title: 'The Trainer C license course by TüBW', description: 'Completed advanced training to become a certified trainer' },
      de: { title: 'Trainer-C-Lizenz-Lehrgang der TüBW', description: 'Weiterführende Ausbildung zum lizenzierten Trainer abgeschlossen' },
    },
    {
      id: 'tk2',
      image: img('taekwondo/IMG_5907.jpg'), // Holding the kick paddle for a student in the hall
      en: { title: 'Teaching TKD at Hochschulsport KIT', description: 'Sharing knowledge and getting the young athletes excited about the sport.' },
      de: { title: 'TKD unterrichten beim Hochschulsport des KIT', description: 'Wissen weitergeben und junge Sportlerinnen und Sportler für den Sport begeistern.' },
    },
    {
      id: 'tk3',
      image: img('taekwondo/IMG_5286.jpg'), // Partner work in front of the examiners' table
      span: true,
      en: {
        title: 'Before the Examiners',
        description: 'Partner work in front of the panel at the Taekwondo-Union Baden-Württemberg. Years of training lead to this moment — and every practiced hour must be proven in a few minutes.',
      },
      de: {
        title: 'Vor den Prüfern',
        description: 'Partnerarbeit vor dem Gremium der Taekwondo-Union Baden-Württemberg. Jahre des Trainings führen zu diesem Moment — und jede geübte Stunde muss sich in wenigen Minuten beweisen.',
      },
    },
    {
      id: 'tk4',
      image: img('taekwondo/IMG_2782.png'), // Certificate in hand at the TUBW
      en: { title: 'Grading', description: 'Certificate in hand — Black belt, after years of dedication. The journey does not end here. It continues to new frontiers.' },
      de: { title: 'Gürtelprüfung', description: 'Urkunde in der Hand — der schwarze Gürtel, nach Jahren des Einsatzes. Der Weg endet hier nicht. Er führt weiter zu neuen Horizonten.' },
    },
    {
      id: 'tk5',
      image: img('taekwondo/IMG_4101.PNG'), // Running the scoring table at a tournament
      en: { title: 'Scoring competitions', description: 'Giving back at the scoring table.' },
      de: { title: 'Wettkämpfe auswerten', description: 'Etwas zurückgeben am Punktetisch.' },
    },
  ],
});
