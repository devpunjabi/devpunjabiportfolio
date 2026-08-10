import { img } from '../assets/image';
import { definePage } from './types';

export default definePage({
  id: 'side-projects',
  themeColor: 'bg-indigo-900',
  hero: img('digital-3d/IMG_4528.png'), // Fresh prints, still on their supports

  en: {
    title: 'Projects & Research',
    subtitle: 'Self-Driven Experiments at the Frontier',
    description: `Where my engineering and my obsessions collide. These are self-driven research experiments — exploring how mathematics becomes art, how AI can teach and analyse, and how code can illuminate the things I love.`,
  },
  de: {
    title: 'Projekte & Forschung',
    subtitle: 'Eigene Experimente an der Grenze des Machbaren',
    description: `Wo meine Ingenieursarbeit und meine Leidenschaften aufeinandertreffen. Dies sind eigeninitiierte Forschungsexperimente — die erkunden, wie Mathematik zu Kunst wird, wie KI lehren und analysieren kann und wie Code die Dinge erhellt, die ich liebe.`,
  },

  sections: [
    {
      id: 'sp1',
      image: img('personal-bio/IMG_5902.jpg'), // Layered ornament under a gold matcap — sculpted by hand
      span: true,
      en: {
        title: 'Art from Mathematics — The 3D Mandelbulb',
        description: 'Rendering the 3D Mandelbulb, a fractal born from iterating complex-number math in three dimensions. Each pattern is pure equation made visible: infinite, self-similar detail emerging from a handful of lines of code, where mathematics quietly becomes sculpture. Pictured: the same instinct worked by eye instead of by equation — a gilded ornament sculpted frond by frond, one shape repeated at shrinking scales.',
      },
      de: {
        title: 'Kunst aus Mathematik — Der 3D-Mandelbulb',
        description: 'Das Rendern des 3D-Mandelbulb, eines Fraktals, das aus der Iteration komplexer Zahlen in drei Dimensionen entsteht. Jedes Bild ist reine Gleichung, sichtbar gemacht: unendliche, selbstähnliche Details, die aus wenigen Zeilen Code hervorgehen — wo Mathematik leise zur Skulptur wird. Im Bild: derselbe Instinkt, nur nach Auge statt nach Gleichung — ein goldenes Ornament, Blatt für Blatt modelliert, dieselbe Form in immer kleinerem Maßstab.',
      },
    },
    {
      id: 'sp2',
      image: img('sculptures/IMG_0933.png'), // A miniature study head, mid-sculpt
      en: {
        title: 'AI Art Teacher',
        description: 'An AI-powered art tutor that studies a student\'s drawing and returns personalised, real-time feedback on proportion, shading, and composition. It turns a vision-language model into a patient mentor, guiding beginners through the fundamentals one stroke at a time. Pictured: a miniature study head mid-sculpt — the same fundamentals of proportion and light, learned the slow way.',
      },
      de: {
        title: 'KI-Kunstlehrer',
        description: 'Ein KI-gestützter Kunstlehrer, der die Zeichnung eines Schülers analysiert und personalisiertes Echtzeit-Feedback zu Proportion, Schattierung und Komposition gibt. Er verwandelt ein Vision-Language-Modell in einen geduldigen Mentor, der Anfänger Strich für Strich durch die Grundlagen führt. Im Bild: ein Miniatur-Studienkopf im Entstehen — dieselben Grundlagen von Proportion und Licht, auf dem langsamen Weg gelernt.',
      },
    },
    {
      id: 'sp3',
      image: img('taekwondo/57969.JPEG'), // A high vertical kick in the training hall
      en: {
        title: 'AI Fighter Analysis & Detection',
        description: 'A computer-vision system that detects fighters in sparring footage and analyses their technique frame by frame, tracking stances, kicks, timing, and movement. Built to give martial artists objective, data-driven feedback on form and reach. Pictured: the kind of technique the model has to read — hip, knee and foot all resolved in a single frame.',
      },
      de: {
        title: 'KI-Kämpferanalyse & -erkennung',
        description: 'Ein Computer-Vision-System, das Kämpfer in Sparring-Aufnahmen erkennt und ihre Technik Bild für Bild analysiert — Stellungen, Tritte, Timing und Bewegung. Entwickelt, um Kampfkünstlern objektives, datenbasiertes Feedback zu Form und Reichweite zu geben. Im Bild: genau die Technik, die das Modell lesen muss — Hüfte, Knie und Fuß in einem einzigen Bild.',
      },
    },
  ],
});
