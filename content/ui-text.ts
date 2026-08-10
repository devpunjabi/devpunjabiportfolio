/**
 * Interface strings that are not tied to a single page — form labels, footer,
 * and the shared "Up Next" caption. Page copy belongs in that page's own file.
 *
 * The German block is typed against the English one, so dropping a key from
 * either side is a compile error rather than a silent fallback at runtime.
 */
const en = {
  welcome: 'Welcome',
  upNext: 'Up Next',
  projects: 'Projects',
  reachOut: 'Reach Out',
  reachOutTitle: 'I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.',
  email: 'Email',
  studio: 'Studio',
  socials: 'Socials',
  name: 'Name',
  yourName: 'Your name',
  subject: 'Subject',
  subjectPlaceholder: 'What is this about?',
  message: 'Message',
  messagePlaceholder: 'Tell me about your ideas...',
  sendMessage: 'Send Message',
  sending: 'Sending...',
  messageSent: 'Message Sent',
  failedToSend: 'Failed to send',
  designedBy: 'EST. 2025 — DESIGNED BY Dev',
  rightsReserved: 'Dev Punjabi. All rights reserved.',
};

const de: Record<keyof typeof en, string> = {
  welcome: 'Willkommen',
  upNext: 'Nächstes',
  projects: 'Projekte',
  reachOut: 'Kontakt',
  reachOutTitle: 'Ich bin immer offen für Diskussionen über neue Projekte, kreative Ideen oder Möglichkeiten, Teil Ihrer Visionen zu sein.',
  email: 'E-Mail',
  studio: 'Studio',
  socials: 'Soziales',
  name: 'Name',
  yourName: 'Ihr Name',
  subject: 'Betreff',
  subjectPlaceholder: 'Worum geht es?',
  message: 'Nachricht',
  messagePlaceholder: 'Erzählen Sie mir von Ihren Ideen...',
  sendMessage: 'Nachricht Senden',
  sending: 'Senden...',
  messageSent: 'Gesendet',
  failedToSend: 'Fehler beim Senden',
  designedBy: 'EST. 2025 — DESIGNED BY Dev',
  rightsReserved: 'Dev Punjabi. Alle Rechte vorbehalten.',
};

export const UI_TEXT = { en, de };
