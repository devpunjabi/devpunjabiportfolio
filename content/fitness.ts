import { img } from '../assets/image';
import { definePage } from './types';

/**
 * The gut–brain feature is a long block of markup, so it lives up here rather
 * than inline in the section list below.
 *
 * Note the plain `class` attributes: section descriptions are injected as raw
 * HTML (`dangerouslySetInnerHTML` in PageLayout), not compiled as JSX, so
 * `className` would be ignored by the browser and the styling would silently
 * do nothing. Keep it `class` in any markup added here.
 */
const NUTRITION_REFERENCES = [
  {
    href: 'https://scholar.google.com/scholar?q=Microbiota%E2%80%93neuroepithelial+signalling+across+the+gut%E2%80%93brain+axis',
    title: 'Microbiota–neuroepithelial signalling across the gut–brain axis',
    source: 'Nature Reviews Microbiology, 2025',
  },
  {
    href: 'https://scholar.google.com/scholar?q=The+gut+microbiota%E2%80%93brain+axis+in+behaviour+and+brain+disorders',
    title: 'The gut microbiota–brain axis in behaviour and brain disorders',
    source: 'Nature Reviews Microbiology, 2021',
  },
  {
    href: 'https://scholar.google.com/scholar?q=Gut-brain-crosstalk%3A+the+vagus+nerve+and+the+microbiota-gut-brain+axis+in+depression',
    title: 'Gut-brain-crosstalk: the vagus nerve and the microbiota-gut-brain axis in depression',
    source: 'Journal of Affective Disorders Reports, 2023',
  },
  {
    href: 'https://scholar.google.com/scholar?q=The+Microbiota-Gut-Brain+Axis%3A+From+Motility+to+Mood',
    title: 'The Microbiota-Gut-Brain Axis: From Motility to Mood',
    source: '2021 Review',
  },
  {
    href: 'https://scholar.google.com/scholar?q=Brain-gut-microbiota+axis%3A+bidirectional+regulatory+mechanisms+and+disease+interactions',
    title: 'Brain-gut-microbiota axis: bidirectional regulatory mechanisms and disease interactions',
    source: '2026 Review',
  },
];

const referenceList = NUTRITION_REFERENCES.map(
  ({ href, title, source }) =>
    `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${title}</a> (${source})</li>`
).join('');

/** Assembles the feature block; only the prose differs between languages. */
const nutritionArticle = (body: string, heading: string, footnote: string) =>
  `<p class="mb-4">${body}</p>` +
  `<div class="mt-6 border-l-2 border-stone-300 pl-4">` +
  `<h4 class="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3">${heading}</h4>` +
  `<ul class="space-y-2 text-sm list-disc list-inside">${referenceList}</ul>` +
  `<p class="text-xs text-stone-500 italic mt-3">${footnote}</p>` +
  `</div>`;

export default definePage({
  id: 'fitness',
  themeColor: 'bg-teal-900',
  hero: img('fitness/58704.JPEG'), // Hiking a high mountain ridge

  en: {
    title: 'Fitness & Wellbeing',
    subtitle: 'Mens Sana In Corpore Sano',
    description: `A healthy mind resides in a healthy body. Through yoga, weightlifting, and mindfulness meditation, I maintain the balance required to perform at a high level in other areas of life.`,
  },
  de: {
    title: 'Fitness & Wohlbefinden',
    subtitle: 'Mens Sana In Corpore Sano',
    description: `Ein gesunder Geist wohnt in einem gesunden Körper. Durch Yoga, Gewichtheben und Achtsamkeitsmeditation bewahre ich das Gleichgewicht, das erforderlich ist, um in anderen Lebensbereichen Höchstleistungen zu erbringen.`,
  },

  sections: [
    {
      id: 'fw1',
      image: img('fitness/1000000861.JPEG'), // Shooting hoops on an outdoor court
      en: { title: 'On the Court', description: 'Staying sharp with a game of hoops.' },
      de: { title: 'Auf dem Platz', description: 'Scharf bleiben mit einem Spiel Basketball.' },
    },
    {
      id: 'fw2',
      image: img('fitness/57971.JPEG'), // A full center split — mobility and control
      span: true,
      en: { title: 'Balance', description: 'Mobility and control — a full center split.' },
      de: { title: 'Balance', description: 'Beweglichkeit und Kontrolle — ein voller Mittelspagat.' },
    },
    {
      id: 'fw3',
      image: img('personal-bio/IMG_2206.png'), // Alpine pasture — the whole-food backdrop for the gut–brain feature
      en: {
        title: 'Nutrition',
        description: nutritionArticle(
          'Research over the last two decades has shown that the gut microbiome plays a major role in regulating brain function, emotional state, and behavior through what is known as the microbiota–gut–brain axis. Trillions of microorganisms in the intestine communicate with the brain through multiple pathways, including the vagus nerve, immune signaling, hormones, and microbial metabolites such as short-chain fatty acids. Gut bacteria also influence the production and regulation of neurotransmitters and their precursors, including serotonin, dopamine, and GABA, which are closely linked to mood, motivation, anxiety, and cognitive function. Alterations in gut microbial composition (dysbiosis) have been associated with depression, anxiety disorders, stress responses, and certain neurodegenerative diseases. While the field is still evolving, growing evidence from animal studies, human cohort studies, neuroimaging research, and clinical trials suggests that gut microbial health can significantly influence emotional regulation and mental well-being.',
          'Key Research References',
          'These reviews provide some of the strongest current summaries of the molecular, neurological, and psychiatric evidence linking gut microbial ecology to brain activity and mood regulation.'
        ),
      },
      de: {
        title: 'Ernährung',
        description: nutritionArticle(
          'Die Forschung der letzten zwei Jahrzehnte hat gezeigt, dass das Darmmikrobiom eine Hauptrolle bei der Regulierung der Gehirnfunktion, des emotionalen Zustands und des Verhaltens durch die sogenannte Mikrobiota-Darm-Hirn-Achse spielt. Billionen von Mikroorganismen im Darm kommunizieren mit dem Gehirn über mehrere Wege, darunter den Vagusnerv, Immunsignale, Hormone und mikrobielle Stoffwechselprodukte wie kurzkettige Fettsäuren. Darmbakterien beeinflussen auch die Produktion und Regulierung von Neurotransmittern und deren Vorstufen, einschließlich Serotonin, Dopamin und GABA, die eng mit Stimmung, Motivation, Angst und kognitiver Funktion verbunden sind. Veränderungen der mikrobiellen Zusammensetzung im Darm (Dysbiose) wurden mit Depressionen, Angststörungen, Stressreaktionen und bestimmten neurodegenerativen Erkrankungen in Verbindung gebracht. Obwohl sich das Forschungsfeld noch entwickelt, weisen zunehmende Beweise aus Tierstudien, menschlichen Kohortenstudien, Neuroimaging-Forschung und klinischen Studien darauf hin, dass die mikrobielle Gesundheit des Darms die emotionale Regulation und das geistige Wohlbefinden erheblich beeinflussen kann.',
          'Wichtige Forschungsreferenzen',
          'Diese Übersichtsarbeiten bieten einige der fundiertesten aktuellen Zusammenfassungen der molekularen, neurologischen und psychiatrischen Belege, die die mikrobielle Ökologie des Darms mit Gehirnaktivität und Stimmungsregulation verbinden.'
        ),
      },
    },
  ],
});
