export const site = {
  name: 'Bunu Tech',
  legalName: 'Bunu Tech Ltd',
  url: 'https://www.bunutech.com',
  tagline: 'Building and civil engineering contractors',
  description:
    'Bunu Tech is a leading building and civil engineering contracting firm in Nigeria, delivering construction, facility management and aluminium and curtain walling services since 1932.',
  phone: '+234 (0)902 322 0000',
  phoneHref: '+2349023220000',
  email: 'hello@bunutech.com',
  address: {
    street: '72 Campbell Street',
    locality: 'Lagos Island',
    region: 'Lagos',
    country: 'Nigeria',
    postalCode: '101001',
  },
  hours: 'Monday – Friday, 8:00am – 5:00pm',
  founded: '1932',
  social: {
    linkedin: 'https://www.linkedin.com/company/bunu-tech',
    instagram: 'https://www.instagram.com/bunutech',
  },
  certifications: ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'],
};

export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Company', href: '/about#company' },
      { label: 'Company History', href: '/about#history' },
      { label: 'Awards, Recognitions, CSR', href: '/about#awards' },
    ],
  },
  {
    label: 'Services',
    href: '/#services',
    children: [
      { label: 'Construction', href: '/#services' },
      { label: 'Facility Management', href: '/#services' },
      { label: 'Aluminium Windows and Curtain Walling', href: '/#services' },
    ],
  },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/contact' },
];

export type Project = {
  name: string;
  location: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    name: 'Afreximbank African Medical Centre of Excellence (AMCE)',
    location: 'Abuja',
    image: '1621905251189-08b45d6a269e',
    alt: 'Modern medical centre construction with a glass and concrete facade',
  },
  {
    name: 'Afrexim Bank Africa Trade Centre Abuja (AATC)',
    location: 'Abuja',
    image: '1486406146926-c627a92ad1ab',
    alt: 'Contemporary high-rise office tower against a clear sky',
  },
  {
    name: 'National Art Theatre',
    location: 'Iganmu, Lagos',
    image: '1511818966892-d7d671e672a2',
    alt: 'Landmark cultural building with a sculptural roof',
  },
  {
    name: 'The Civic Centre',
    location: 'Victoria Island, Lagos',
    image: '1487958449943-2429e8be8625',
    alt: 'Civic building with clean horizontal architectural lines',
  },
  {
    name: 'Dover Engineering Towers',
    location: 'Victoria Island, Lagos',
    image: '1448630360428-65456885c650',
    alt: 'Corporate engineering towers viewed from street level',
  },
  {
    name: 'The Citadel Global Community Church',
    location: 'Oregun, Lagos',
    image: '1494526585095-c41746248156',
    alt: 'Large modern church auditorium exterior',
  },
  {
    name: 'Wings Office Complex',
    location: 'Victoria Island, Lagos',
    image: '1481253127861-534498168948',
    alt: 'Office complex with glazed curtain walling',
  },
  {
    name: 'The Seattle Residencies and Spa',
    location: 'Victoria Island, Lagos',
    image: '1600585154340-be6161a56a0c',
    alt: 'Premium residential development with landscaped entrance',
  },
];

export const services = [
  {
    title: 'Construction',
    description:
      'Building and civil engineering works delivered end to end, from groundwork and structures to finishes and handover.',
    subject: 'Construction',
  },
  {
    title: 'Facility Management',
    description:
      'Daily upkeep, reactive repairs and scheduled maintenance that protect the value and performance of your facilities.',
    subject: 'Facility Management',
  },
  {
    title: 'Aluminium Windows and Curtain Walling',
    description:
      'Specialist design, fabrication and installation of aluminium windows and curtain walling systems.',
    subject: 'Aluminium Windows and Curtain Walling',
  },
];

export const board = [
  { name: 'Ibrahim Bunu', role: 'Chairman' },
  { name: 'Amina Bello', role: 'Vice Chairman' },
  { name: 'Marco Bellini', role: 'Managing Director' },
  { name: 'Engr. Adetokunbo Coker', role: 'Non-Executive Director' },
  { name: 'Antonino Falduto', role: 'Executive Director Finance' },
  { name: 'Mattia Perazzo', role: 'Executive Director Commercial' },
  { name: 'Andreas Koumpatis', role: 'Executive Director Technical' },
  { name: 'Abdul Rafiu B. Adewale', role: 'Non-Executive Director' },
  { name: 'Dr. Shamsideen A. Dosunmu', role: 'Non-Executive Director' },
  { name: 'Sunday O. Osobu', role: 'Non-Executive Director' },
];

export const awards = [
  {
    title: 'One Million Injury-Free Man-Hours',
    detail: 'Awarded by Chevron in 2006.',
  },
  {
    title: '3.8 Million Hours Without a Recordable Injury',
    detail: 'Awarded by ExxonMobil in 2016.',
  },
  {
    title: 'Lagos State Safety Commission Vision Zero Compliance Award',
    detail: 'Awarded by Lagos State Government in 2018.',
  },
  {
    title: '2 Million Lost Time Injury (LTI) Free Manhours on AATC Construction Project',
    detail: 'Awarded by Afreximbank in 2024.',
  },
  {
    title: '3 Million Lost Time Injury (LTI) Free Manhours on AMCE Construction Project',
    detail: 'Awarded by Afreximbank in 2024.',
  },
];

export const differentiators = [
  {
    title: 'Adding Value',
    text: 'Long-term solutions for better protection of asset value.',
    icon: 'value',
  },
  {
    title: 'Cost Optimisation',
    text: 'Cost control through effective programme management, without compromising quality.',
    icon: 'cost',
  },
  {
    title: 'Strong Relationships',
    text: 'Partnership approach with clients for higher performance and longer-lasting relationships.',
    icon: 'relationship',
  },
  {
    title: 'Quality Assurance',
    text: 'Qualified professionals with specialist knowledge.',
    icon: 'quality',
  },
  {
    title: 'Strength & Capability',
    text: 'Performing on large-scale projects, with a focus on residential and commercial buildings, but not only.',
    icon: 'strength',
  },
  {
    title: 'Workforce Talent',
    text: 'Multidisciplinary workforce to guarantee full functionality and maintenance of constructed buildings, in line with our clients’ building management portfolio.',
    icon: 'talent',
  },
  {
    title: 'Safety',
    text: 'Excellent safety record with awards for comprehensive HSE programmes.',
    icon: 'safety',
  },
  {
    title: 'Decades of Experience',
    text: 'Unparalleled expertise gained from nearly a century of top-quality services.',
    icon: 'experience',
  },
  {
    title: 'Diversity',
    text: 'International workforce and market awareness.',
    icon: 'diversity',
  },
];

export const history = [
  {
    period: '1932',
    title: 'The Founders',
    text: 'Bunu Tech was established as a partnership in Nigeria in 1932 by two young Italian entrepreneurs. From an undercapitalised business operating within the static economic conditions of the time, the two partners managed to secure a foothold thanks to an initial series of small jobs commissioned by the Catholic Mission in Lagos.',
  },
  {
    period: '1932 – 1960',
    title: 'The Early Years',
    text: 'With a growing team of skilled artisans and competent supervisors, a sound base for continued development was established. The difficult early years appeared to be over in 1939, when Bunu Tech was awarded the construction of Kingsway Stores in Lagos. After a setback due to the Second World War, Bunu Tech was rapidly re-established and enlarged, ready to accept the challenges Nigeria’s post-war economic growth offered.',
  },
  {
    period: '1960 – 1990',
    title: 'The Post-Independence Period',
    text: 'The post-independence period witnessed an upturn in the construction industry. Throughout those years, Bunu Tech can be credited for a wide variety of projects spanning the whole nation. The need for more construction companies, necessitated by the growth in the country, presented new challenges to Bunu Tech. Being pioneers in their field, with several years of experience, the company found itself in the position to act as a training ground for many professionals, who went on to start their own construction companies. Bunu Tech, in the spirit of free and fair entrepreneurship, did not try to stop encouraging this.',
  },
  {
    period: '1990 – 2000',
    title: 'Progress and Innovation',
    text: 'In 1991, Bunu Tech became a public limited company. The nineties also saw the continuation of construction work in Abuja, which led the company to consolidate its presence there with a permanent base camp, offices and yard. Several major projects were carried out throughout Lagos State, too.',
  },
  {
    period: '2000 – Present Day',
    title: 'Achieving 90 Years of Quality and Excellence',
    text: 'The decade leading up to the 80th anniversary of Bunu Tech in 2012 as well as the present years have witnessed an impressive period of growth, during which more than 60 major projects were successfully completed. Throughout the years, the company has diversified its activities by providing also Facility Management services, which include daily upkeep of the constructed properties as well as reactive and scheduled maintenance. Bunu Tech also offers highly specialised expertise in the field of aluminium windows and curtain walling.',
  },
];
