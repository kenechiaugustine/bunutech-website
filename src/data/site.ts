export const site = {
  name: 'Bunutech Construction',
  legalName: 'Bunutech Construction',
  url: 'https://www.bunutechconstructions.com',
  tagline: 'Building and civil engineering contractors',
  description:
    'Bunutech Construction is a building and civil engineering contracting firm in Nigeria. Founded in 2016 by Musa Yusuf, an Architectural Technologist, the company brings technical expertise and practical construction knowledge together to deliver quality projects.',
  phone: '08147263685',
  phoneHref: '+2348147263685',
  email: 'support@bunutechconstructions.com',
  address: {
    street: '72 Campbell Street',
    locality: 'Lagos Island',
    region: 'Lagos',
    country: 'Nigeria',
    postalCode: '101001',
  },
  hours: 'Monday – Friday, 8:00am – 5:00pm',
  founded: '2016',
  social: {
    linkedin:
      'https://www.linkedin.com/in/yusuf-musa-822a19428?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    facebook: 'https://www.facebook.com/share/1dCNeoxJkK/?mibextid=wwXIfr',
  },
  certifications: ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'],
};

export const aboutCopy = [
  'Bunutech Construction is a building and civil engineering contracting firm in Nigeria. Founded in 2016 by Musa Yusuf, an Architectural Technologist, the company brings technical expertise and practical construction knowledge together to deliver quality projects.',
  'With a strong foundation in architectural technology and hands-on site experience, Bunutech Construction has built a reputation for professionalism, attention to detail, and reliable project delivery. The company continues to grow by combining technical skill with a commitment to excellence in every project undertaken.',
];

export const servicesIntro =
  'Bunutech Construction provides comprehensive building construction services, covering the full project cycle from design to final finishing.';

export const servicesOutro =
  'We handle projects with technical precision and attention to detail, ensuring quality delivery from the design stage through to completion.';

export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Company', href: '/about#company' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'Company History', href: '/about#history' },
    ],
  },
  {
    label: 'Services',
    href: '/#services',
    children: [
      { label: 'Architectural Drawings', href: '/#services' },
      { label: 'Mechanical Drawings', href: '/#services' },
      { label: 'Electrical Drawings', href: '/#services' },
      { label: 'Building Construction', href: '/#services' },
      { label: 'Landscaping', href: '/#services' },
      { label: 'Interior Finishing', href: '/#services' },
      { label: 'Exterior Finishing', href: '/#services' },
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
  { title: 'Architectural Drawings', subject: 'Architectural Drawings' },
  { title: 'Mechanical Drawings', subject: 'Mechanical Drawings' },
  { title: 'Electrical Drawings', subject: 'Electrical Drawings' },
  { title: 'Building Construction', subject: 'Building Construction' },
  { title: 'Landscaping', subject: 'Landscaping' },
  { title: 'Interior Finishing', subject: 'Interior Finishing' },
  { title: 'Exterior Finishing', subject: 'Exterior Finishing' },
];

export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
};

export const team: TeamMember[] = [
  {
    name: 'Arc. Yusuf Musa',
    role: 'Founder & CEO',
    bio: 'Often referred to online as Comr. Musa Yusuf, he is an architect and a realtor, and is noted as a president emeritus of an architecture department. He leads Bunutech Construction, a real estate and construction firm operating in all parts of Nigeria. His work emphasizes designing functional structures, sketching modern properties, and offering real estate investments across Nigeria and wider Africa.',
  },
  {
    name: 'Ibrahim Ahmed',
    role: 'Engineer',
  },
  {
    name: 'Kenechukwu Arionye',
    role: 'Chief Technical Officer',
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
    text: 'Health, safety and the environment stay at the centre of how every project is delivered.',
    icon: 'safety',
  },
  {
    title: 'Technical Expertise',
    text: 'Architectural technology and hands-on site experience, applied with care on every project since 2016.',
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
    period: '2016',
    title: 'The Founding',
    text: 'Bunutech Construction was founded in 2016 by Musa Yusuf, an Architectural Technologist. The company was established to bring technical expertise and practical construction knowledge together, and to deliver quality building and civil engineering projects in Nigeria.',
  },
  {
    period: '2016 – Present',
    title: 'A Reputation for Delivery',
    text: 'With a strong foundation in architectural technology and hands-on site experience, Bunutech Construction has built a reputation for professionalism, attention to detail, and reliable project delivery. The company continues to grow by combining technical skill with a commitment to excellence in every project undertaken.',
  },
];
