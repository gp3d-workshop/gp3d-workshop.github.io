export const workshop = {
  title: 'General-Purpose 3D Intelligence',
  shortTitle: 'GP3D',
  event: 'NeurIPS 2026 Workshop',
  tagline:
    'Establishing 3D research as the foundation of AI systems that understand, predict, and act.',
  date: 'December 2026',
  location: 'Paris / Sydney / Atlanta (TBD)',
  openReviewUrl: '#',
}

export const overview = {
  abstract: [
    'Many of the next major advances in artificial intelligence depend on models that can understand, predict, and act in the physical world, which requires more than learning from images, videos, or text alone: AI systems need representations of persistent objects, spatial relations, geometry, dynamics, uncertainty, and physical constraints.',
    'In this context, 3D research has become increasingly central to several areas of machine learning, including world modeling, scene understanding, robotics, embodied AI, and scientific applications; yet although these communities are all represented at NeurIPS, they have rarely interacted, and recent editions have not featured a dedicated workshop on 3D research despite its growing presence.',
    'This workshop brings these communities together to discuss how 3D representations, scene models, and spatial reasoning can contribute to more general, grounded, and reliable AI systems. Rather than treating 3D reconstruction, perception, or generation as isolated tasks, it emphasizes how 3D methods can enable downstream capabilities such as planning, interaction, manipulation, navigation, and physical reasoning.',
    'Our goal is to position 3D research as a core component of future AI systems that do not merely perceive the world, but build useful models that act within it.',
  ],
  whyNow:
    'The field has reached an inflection point: within roughly two years, 3D Gaussian splatting, pose-free feed-forward reconstruction, single-image 3D models, and video-trained world models have made 3D both fast and pretrainable, while robotics and spatial reasoning in vision-language models have made spatial grounding a first-order concern for general-purpose systems. Yet these threads advance largely in separation. A dedicated venue now can align these efforts across communities.',
}

export const topics = [
  {
    title: '3D & 4D Scene Representation',
    description:
      'Differentiable and feed-forward methods for reconstructing static and dynamic scenes, geometry, and appearance.',
  },
  {
    title: 'Generative 3D & World Models',
    description:
      'Generative 3D content and 3D-aware world models that learn controllable, navigable environments.',
  },
  {
    title: 'Spatial Foundation Models',
    description:
      'Spatial foundation models and 3D-grounded vision-language models for general-purpose perception.',
  },
  {
    title: 'Grounded Spatial Reasoning',
    description:
      'Connecting 3D structure to planning, manipulation, navigation, and reliable physical reasoning.',
  },
  {
    title: '3D for Scientific Domains',
    description:
      'Methods where 3D structure is decisive across the sciences, from structural biology to remote sensing.',
  },
]

export type Person = {
  name: string
  affiliation: string
  url?: string
  status?: string
  src?: string
}

export const speakers: Person[] = [
  {
    name: 'Diane Larlus',
    affiliation: 'NAVER LABS',
    url: 'https://dlarlus.github.io',
    status: 'Confirmed',
  },
  {
    name: 'Gerard Pons-Moll',
    affiliation: 'University of Tübingen',
    url: 'https://virtualhumans.mpi-inf.mpg.de/people/pons-moll.html',
    status: 'Confirmed',
  },
  {
    name: 'Fatma Güney',
    affiliation: 'Koç University',
    url: 'https://mysite.ku.edu.tr/fguney/',
    status: 'Confirmed',
  },
]

export const organizers: Person[] = [
  { name: 'Karim Kassab', affiliation: 'Criteo AI Lab', url: 'https://www.kkassab.com' },
  { name: 'Antoine Guédon', affiliation: 'École des Ponts (ENPC)', url: 'https://anttwo.github.io/' },
  { name: 'Evin Pinar Örnek', affiliation: '', url: 'https://evinpinar.github.io' },
  { name: 'Laurent Caraffa', affiliation: 'IGN', url: 'https://scholar.google.com/citations?user=N0YTGr8AAAAJ&hl=en' },
  { name: 'Jean-Yves Franceschi', affiliation: 'Criteo AI Lab', url: 'https://jyfranceschi.fr/' },
  { name: 'Jeremie Mary', affiliation: 'Criteo AI Lab', url: 'https://scholar.google.com/citations?user=T3dQRjAAAAAJ&hl=fr' },
]

export const programCommittee: Person[] = [
  { name: 'Antoine Schnepf', affiliation: 'Criteo AI Lab', status: 'Confirmed' },
  { name: 'Ewelina Rupnik', affiliation: 'IGN', status: 'Confirmed' },
  { name: 'Camille Billouard', affiliation: 'IGN', status: 'Confirmed' },
  { name: 'Teng Wu', affiliation: 'IGN', status: 'Confirmed' },
  { name: 'Mathieu Bredif', affiliation: 'IGN', status: 'Confirmed' },
  { name: 'Artem Sevastopolsky', affiliation: 'Apple', status: 'Confirmed' },
  { name: 'Hyun Jun Jung', affiliation: 'LG Graduate School of AI', status: 'Confirmed' },
  { name: 'Ege Ozsoy', affiliation: 'TU Munich', status: 'Confirmed' },
  { name: 'Sen Wang', affiliation: 'TU Munich', status: 'Confirmed' },
  { name: 'Tony Wang', affiliation: 'TU Munich', status: 'Confirmed' },
]

export const schedule = [
  { time: '08:50 – 09:00', session: 'Opening remarks', detail: 'Organizers' },
  { time: '09:00 – 10:00', session: 'Invited talk 1', detail: '' },
  { time: '10:00 – 10:30', session: 'Contributed talks 1', detail: 'Five short talks' },
  { time: '10:30 – 12:00', session: 'Poster session 1', detail: '' },
  { time: '12:00 – 13:00', session: 'Lunch', detail: '' },
  { time: '13:00 – 14:00', session: 'Invited talk 2', detail: '' },
  { time: '14:00 – 14:30', session: 'Contributed talks 2', detail: 'Five short talks' },
  { time: '14:30 – 16:00', session: 'Poster session 2', detail: '' },
  { time: '16:00 – 17:15', session: 'Panel & debate', detail: 'Cross-community discussion' },
  { time: '17:15 – 17:30', session: 'Closing remarks', detail: '' },
]

export const keyDates = [
  { date: 'Jul 25, 2026', label: 'Call for papers' },
  { date: 'Aug 29, 2026', label: 'Submission deadline' },
  { date: 'Sep 1–15, 2026', label: 'Reviewing period' },
  { date: 'Sep 28, 2026', label: 'Author notification' },
  { date: 'Oct 30, 2026', label: 'Camera-ready' },
]

export const cfp = {
  points: [
    'All accepted contributions are non-archival and will not appear in proceedings.',
    'Submissions are managed through OpenReview, with public access to accepted papers via OpenReview and this website.',
    'Work previously published at NeurIPS or other machine learning venues is not eligible. We also discourage submissions of already finalized work.',
    'We target 3 reviews per paper, with no reviewer handling more than 3 papers.',
  ],
}
