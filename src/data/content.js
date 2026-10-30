// All copy lives here so it is easy to review/approve and edit in one place.
// NOTE: content is review copy — confirm before production launch.

export const LINKEDIN_URL = 'https://www.linkedin.com/in/rajanarayanasamy/';

// LINK REVIEW: replace the Amazon search with an approved direct book-purchase URL.
export const BOOK_URL =
  'https://www.amazon.in/s?k=Engineering+Intelligent+Products+Raja+Narayanasamy';

// OPTIONAL VIDEO FEATURE — disabled until an approved video exists.
// To enable: set this to a real URL/path, e.g. '/intro-video.mp4' (put the file in /public).
// While empty, no "Watch Video" button or modal is rendered.
export const VIDEO_URL = '';

export const NAV_LINKS = [
  { href: '#story', label: 'The Story' },
  { href: '#ventures', label: 'What I Build' },
  { href: '#intelligence', label: 'Intelligent Products' },
  { href: '#book', label: 'The Book' },
  { href: '#insights', label: 'Insights' },
];

// CONTENT REVIEW: confirm career descriptions, roles and dates before publishing.
export const TIMELINE = [
  {
    num: '01',
    label: 'THE FOUNDATION',
    title: 'The Engineer',
    text: 'Understanding how systems work, solving real problems and building the technical foundation for product thinking.',
    aside: 'Engineering depth',
  },
  {
    num: '02',
    label: 'THE EVOLUTION',
    title: 'The Builder',
    text: 'Working across organizations including Eastman Kodak, Honeywell and Delphi—helping shape teams and capabilities that make engineering successful.',
    aside: 'Teams · Process · Execution',
  },
  {
    num: '03',
    label: 'THE CHALLENGE',
    title: 'Building from Zero',
    text: 'Contributing to the creation of a new Giesecke+Devrient R&D capability in India, where an organization itself became the engineering challenge.',
    aside: 'Capability building',
  },
  {
    num: '04',
    label: 'THE NEXT CHAPTER',
    title: 'The Entrepreneur',
    text: 'Connecting technical expertise to the market: building ventures and exploring how intelligent products can create value in the physical world.',
    aside: 'Technology × Business',
  },
];

// CONTENT REVIEW: company descriptions and current affiliations require approval.
export const VENTURES = [
  {
    name: 'Engen CBS',
    sub: 'Technology business & market entry',
    text: 'Helping technology companies navigate market entry, business development, partnerships and the development of engineering capabilities in India.',
    tags: ['Market entry', 'GCC / ODC', 'Partnerships'],
  },
  {
    name: 'ClearCode Labs',
    sub: 'Digital engineering & modern platforms',
    text: 'Building digital engineering capabilities across distributed applications, modern cloud platforms, data-intensive systems and AI-enabled solutions.',
    tags: ['Cloud', 'Data engineering', 'GenAI'],
  },
  {
    name: 'Nemilink Technologies',
    sub: 'Embedded intelligence & Edge AI',
    text: 'Connecting hardware, embedded systems, sensing and Edge AI to address real-world challenges in industrial and physical environments.',
    tags: ['Vision AI', 'AIoT', 'Embedded systems'],
  },
  {
    name: 'Navoriy Learning',
    sub: 'Developing technology capabilities',
    text: 'Supporting advanced technology learning across AI, data, cybersecurity, semiconductor, telecom and other fast-evolving engineering domains.',
    tags: ['Learning', 'Future skills', 'Engineering'],
  },
];

export const AI_STEPS = [
  { title: 'SENSE', desc: 'Data enters from cameras, sensors and the world around us.', color: '#39dbe4' },
  { title: 'UNDERSTAND', desc: 'Edge intelligence turns raw signals into useful context and meaning.', color: '#8ca2ff' },
  { title: 'DECIDE', desc: 'Systems evaluate that context to determine a relevant next action.', color: '#b98dff' },
  { title: 'ACT', desc: 'Intelligent products respond in the physical environment with purpose.', color: '#52e3c1' },
];

export const TECH_WORDS = ['VISION AI', 'EDGE AI', 'AIoT', 'EMBEDDED INTELLIGENCE', 'PHYSICAL AI'];

export const INSIGHTS = [
  { idx: '01', art: 'insight-circles', title: 'Physical AI', text: 'Moving intelligence from software into machines and the environments around us.' },
  { idx: '02', art: 'insight-bars', title: 'Technology Business', text: 'Building the link between engineering capability, customer needs and sustainable growth.' },
  { idx: '03', art: 'insight-squares', title: 'Product Engineering', text: 'What it takes to build reliable, scalable products—not just convincing demonstrations.' },
];

export const PRINCIPLES = [
  { num: '01', title: 'Start with the problem.', text: 'Technology should make something meaningfully better.' },
  { num: '02', title: 'Engineering and business belong together.', text: 'Technical ambition and commercial reality should be designed together.' },
  { num: '03', title: 'Build capability, not just output.', text: 'People, systems and ownership enable lasting progress.' },
  { num: '04', title: 'Keep building what comes next.', text: 'Intelligence is changing what products and industries can do.' },
];
