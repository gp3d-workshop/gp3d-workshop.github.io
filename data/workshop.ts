export const workshop = {
  title: 'General-Purpose 3D Intelligence',
  shortTitle: 'GP3D',
  event: 'NeurIPS 2026 Workshop',
  tagline:
    'Establishing 3D research as the foundation of AI systems that understand, predict, and act.',
  date: 'December 2026',
  location: 'Paris, France',
  openReviewUrl: '#',
}

export const overview = {
  abstract: [
    'Many of the next major advances in artificial intelligence depend on models that can understand, predict, and act in the physical world, which requires more than learning from images, videos, or text alone: AI systems need representations of persistent objects, spatial relations, geometry, dynamics, uncertainty, and physical constraints.',
    'In this context, 3D research has become increasingly central to several areas of machine learning, including world modeling, scene understanding, robotics, and embodied AI. Yet, although these communities are all represented at NeurIPS, interactions between them have remained surprisingly limited given their overlapping interests. Moreover, recent NeurIPS editions have never featured a dedicated workshop on 3D research despite its growing presence.',
    'This workshop aims to bring these communities together to discuss how 3D representations, scene models, and spatial reasoning can contribute to more general, grounded, and reliable AI systems. Rather than treating 3D reconstruction or generation as isolated tasks, it emphasizes how 3D methods can enable downstream capabilities such as planning, interaction, navigation, and physical reasoning.',
    'Our goal is to position 3D research as a core component of future AI systems that both perceive the world and build useful models that act within it.',
  ],
  whyNow:
    'The field has reached an inflection point: within roughly two years, 3D Gaussian splatting, pose-free feed-forward reconstruction, single-image 3D models, and video-trained world models have made 3D both fast and pretrainable, while robotics and spatial reasoning in vision-language models have made spatial grounding a first-order concern for general-purpose systems. Yet these threads advance largely in separation. A dedicated venue now can align these efforts across communities.',
}

export const topics = [
  {
    title: '3D & 4D Scene Representation, Reconstruction & Generation',
    description:
      'Representing, reconstructing, and generating static and dynamic 3D scenes, geometry, and appearance.',
  },
  {
    title: '3D-Aware World Models',
    description:
      'Controllable, navigable world models grounded in 3D structure and learned from video.',
  },
  {
    title: '3D-Grounded Vision-Language Models',
    description:
      'Connecting language and perception to metric and relational 3D understanding.',
  },
  {
    title: 'Grounded Spatial Reasoning',
    description:
      'Turning 3D structure into reliable planning, navigation, manipulation, and physical reasoning.',
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
  expertise?: string
}

export const speakers: Person[] = [
  {
    name: 'Diane Larlus',
    affiliation: 'NAVER LABS',
    url: 'https://dlarlus.github.io',
    status: 'Confirmed',
    src: '/people/diane.jpg',
    expertise:
      'Visual representation learning; 3D and 4D scene understanding; distillation and foundation encoders.',
  },
  {
    name: 'Gerard Pons-Moll',
    affiliation: 'University of Tübingen',
    url: 'https://virtualhumans.mpi-inf.mpg.de/people/pons-moll.html',
    status: 'Confirmed',
    src: '/people/gerard.png',
    expertise: '3D human pose, shape, and clothing; neural implicit surfaces.',
  },
  {
    name: 'Fatma Güney',
    affiliation: 'Koç University',
    url: 'https://mysite.ku.edu.tr/fguney/',
    status: 'Confirmed',
    src: '/people/fatma.jpeg',
    expertise: 'Computer vision for autonomous driving; point tracking.',
  },
  {
    name: 'Sarah Parisot',
    affiliation: 'Microsoft',
    status: 'Tentative',
    src: '/people/sarah.jpg',
    expertise: 'World models; generative models; 3D reconstruction.',
  },
]

export const organizers: Person[] = [
  { name: 'Karim Kassab', affiliation: 'Criteo AI Lab', url: 'https://www.kkassab.com', src: '/people/karim.jpg' },
  { name: 'Antoine Guédon', affiliation: 'ENPC, École Polytechnique,\nUC Berkeley BAIR', url: 'https://anttwo.github.io/', src: '/people/antoine.jpg' },
  { name: 'Evin Pınar Örnek', affiliation: '', url: 'https://evinpinar.github.io', src: '/people/evin.jpeg' },
  { name: 'Laurent Caraffa', affiliation: 'IGN', url: 'https://scholar.google.com/citations?user=N0YTGr8AAAAJ&hl=en', src: '/people/laurent.jpg' },
  { name: 'Jean-Yves Franceschi', affiliation: 'Criteo AI Lab', url: 'https://jyfranceschi.fr/', src: '/people/jean-yves.jpeg' },
  { name: 'Jeremie Mary', affiliation: 'Criteo AI Lab', url: 'https://scholar.google.com/citations?user=T3dQRjAAAAAJ&hl=fr', src: '/people/jeremie.jpg' },
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
  { name: 'Nils Morbitzer', affiliation: 'TU Munich', status: 'Confirmed' },
  { name: 'Felix Tristram', affiliation: 'TU Munich', status: 'Confirmed' },
  { name: 'Julien Gaubil', affiliation: 'École Polytechnique', status: 'Confirmed' },
  { name: 'Bingchen Gong', affiliation: 'École Polytechnique', status: 'Confirmed' },
  { name: 'Léopold Maillard', affiliation: 'École Polytechnique, Dassault Systèmes', status: 'Confirmed' },
  { name: 'Shiyao Li', affiliation: 'ENPC', status: 'Confirmed' },
  { name: 'Thibaut Loiseau', affiliation: 'ENPC', status: 'Confirmed' },
  { name: 'Nicolas Violante', affiliation: 'ENPC', status: 'Confirmed' },
  { name: 'Tom Ravaud', affiliation: 'ENPC', status: 'Confirmed' },
  { name: 'Salma Galaaoui', affiliation: 'Valeo.ai', status: 'Confirmed' },
  { name: 'Adrien Ramanana-Rahary', affiliation: 'Kyutai', status: 'Confirmed' },
]

export const schedule = [
  { time: '08:50 – 09:00', session: 'Opening remarks', detail: 'Organizers' },
  { time: '09:00 – 09:45', session: 'Invited talk 1', detail: '' },
  { time: '09:45 – 10:30', session: 'Invited talk 2', detail: '' },
  { time: '10:30 – 10:45', session: 'Contributed talks 1', detail: 'Two six-minute talks' },
  { time: '10:45 – 12:15', session: 'Poster session 1', detail: '' },
  { time: '12:15 – 13:30', session: 'Lunch', detail: '' },
  { time: '13:30 – 14:15', session: 'Invited talk 3', detail: '' },
  { time: '14:15 – 14:30', session: 'Contributed talks 2', detail: 'Two six-minute talks' },
  { time: '14:30 – 16:00', session: 'Poster session 2', detail: '' },
  { time: '16:00 – 17:00', session: 'Panel & debate', detail: 'Cross-community discussion' },
  { time: '17:00 – 17:15', session: 'Closing remarks', detail: '' },
]

export const keyDates = [
  { date: 'Jul 25, 2026', label: 'Call for papers' },
  { date: 'Sep 4, 2026', label: 'Submission deadline' },
  { date: 'Sep 7–18, 2026', label: 'Reviewing period' },
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
