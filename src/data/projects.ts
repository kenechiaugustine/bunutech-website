/**
 * Project portfolio.
 *
 * Every entry here automatically gets its own page at `/projects/<slug>`.
 * - `featured: true` marks the projects shown on the home page (the first three are used).
 * - `steps` are rendered, in order, as the step-by-step build process on the project page.
 * - `image` fields hold the full image URL.
 * - `images` on a step holds one or more full image URLs; steps with more than one
 *   are shown as a slider, a single image is shown as a static picture.
 */

export type ProjectStep = {
  title: string;
  text: string;
  images: string[];
  alt: string;
};

export type Project = {
  slug: string;
  name: string;
  location: string;
  category: string;
  status: "Completed" | "Ongoing";
  year?: string;
  client?: string;
  featured?: boolean;
  summary: string;
  description: string[];
  scope: string[];
  image: string;
  alt: string;
  steps: ProjectStep[];
};

export const projects: Project[] = [
  {
    slug: "smart-school-enugu-central-construction",
    name: "Smart School, Enugu Central",
    location: "Enugu Central, Enugu",
    category: "Education",
    status: "Completed",
    featured: true,
    summary:
      "Design and construction of a modern smart school with bright classrooms, ICT-ready infrastructure and durable finishes built for daily use.",
    description: [
      "Bunutech Construction delivered the Smart School project in Enugu Central from early design work through to final handover. The brief called for a safe, well-lit and technology-ready learning environment that would stand up to heavy daily use.",
      "Our team managed the full project cycle: architectural, mechanical and electrical drawings, site preparation, structural works, building services and interior and exterior finishing. Each stage was inspected and signed off before the next began.",
    ],
    scope: [
      "Architectural Drawings",
      "Mechanical Drawings",
      "Electrical Drawings",
      "Building Construction",
      "Interior Finishing",
      "Exterior Finishing",
    ],
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&h=900&q=65",
    alt: "Finished classroom at the Smart School in Enugu Central",
    steps: [
      {
        title: "Design & Planning",
        text: "We started with site surveys and client consultations, then produced the architectural, mechanical and electrical drawings. Classroom layouts, natural lighting and ICT cabling routes were planned at this stage.",
        images: [
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&h=800&q=65",
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Architect reviewing printed drawings for the Smart School",
      },
      {
        title: "Site Clearing & Excavation",
        text: "The site was cleared, levelled and set out to the approved drawings. Excavation for the foundations followed, with soil conditions checked before any concrete was placed.",
        images: [
          "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=1200&h=800&q=65",
          "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Excavators clearing and levelling the school site",
      },
      {
        title: "Foundation & Reinforcement",
        text: "Steel reinforcement was fixed and inspected by our engineers before the foundations and ground floor slab were cast, giving the building a solid base.",
        images: [
          "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Engineers inspecting steel reinforcement before the slab pour",
      },
      {
        title: "Superstructure",
        text: "Columns, beams, floor slabs and blockwork walls went up floor by floor, with formwork, concrete and alignment checked at every level.",
        images: [
          "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=1200&h=800&q=65",
          "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?auto=format&fit=crop&w=1200&h=800&q=65",
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Building frame rising with tower cranes on site",
      },
      {
        title: "Building Services",
        text: "Electrical wiring, data cabling for the smart classrooms, plumbing and ventilation were installed and tested before walls and ceilings were closed up.",
        images: [
          "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Electrician installing wiring and distribution boards",
      },
      {
        title: "Interior & Exterior Finishing",
        text: "Plastering, screeding, tiling, painting, doors and windows brought the building to completion inside and out, using durable finishes suited to a school.",
        images: [
          "https://images.unsplash.com/photo-1595814432314-90095f342694?auto=format&fit=crop&w=1200&h=800&q=65",
          "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Painters applying interior finishes to the classrooms",
      },
      {
        title: "Handover",
        text: "After a final inspection and snagging, the completed school was handed over ready for students and staff, with fitted classrooms and working services.",
        images: [
          "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&h=800&q=65",
          "https://images.unsplash.com/photo-1595814432314-90095f342694?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Completed and furnished classroom ready for handover",
      },
    ],
  },
  {
    slug: "afreximbank-african-medical-centre-of-excellence",
    name: "Afreximbank African Medical Centre of Excellence (AMCE)",
    location: "Abuja",
    category: "Healthcare",
    status: "Completed",
    featured: true,
    summary:
      "Construction works on a modern medical centre with a glass and concrete facade.",
    description: [
      "Bunutech Construction contributed construction works to the Afreximbank African Medical Centre of Excellence in Abuja, a facility designed to meet international healthcare standards.",
    ],
    scope: [
      "Building Construction",
      "Interior Finishing",
      "Exterior Finishing",
    ],
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&h=900&q=65",
    alt: "Modern medical centre construction with a glass and concrete facade",
    steps: [
      {
        title: "Planning & Drawings",
        text: "Drawings and work programmes were prepared and agreed before mobilising to site.",
        images: [
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Construction drawings being reviewed",
      },
      {
        title: "Structural Works",
        text: "Reinforcement and concrete works were carried out and inspected at every stage.",
        images: [
          "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&w=1200&h=800&q=65",
          "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Engineers inspecting reinforcement on site",
      },
      {
        title: "Finishing",
        text: "Interior and exterior finishes were completed to the specified standard.",
        images: [
          "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Glass and concrete facade of the medical centre",
      },
    ],
  },
  {
    slug: "afreximbank-africa-trade-centre-abuja",
    name: "Afrexim Bank Africa Trade Centre Abuja (AATC)",
    location: "Abuja",
    category: "Commercial",
    status: "Completed",
    featured: true,
    summary:
      "Construction works on a contemporary high-rise office tower in Abuja.",
    description: [
      "Bunutech Construction contributed construction works to the Afreximbank Africa Trade Centre in Abuja, a contemporary high-rise office development.",
    ],
    scope: ["Building Construction", "Exterior Finishing"],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&h=900&q=65",
    alt: "Contemporary high-rise office tower against a clear sky",
    steps: [
      {
        title: "Site Preparation",
        text: "The site was cleared, levelled and prepared for the foundation works.",
        images: [
          "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Excavator preparing the site",
      },
      {
        title: "Superstructure",
        text: "The tower frame was built floor by floor with cranes and formwork.",
        images: [
          "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "High-rise frame under construction with tower cranes",
      },
      {
        title: "Completion",
        text: "Facade and finishing works brought the tower to completion.",
        images: [
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Completed office tower",
      },
    ],
  },
  {
    slug: "national-art-theatre",
    name: "National Art Theatre",
    location: "Iganmu, Lagos",
    category: "Cultural",
    status: "Completed",
    summary: "Works on a landmark cultural building with a sculptural roof.",
    description: [
      "Bunutech Construction contributed works to the National Art Theatre in Iganmu, Lagos.",
    ],
    scope: ["Building Construction", "Interior Finishing"],
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&h=900&q=65",
    alt: "Landmark cultural building with a sculptural roof",
    steps: [
      {
        title: "Assessment",
        text: "The existing structure was surveyed and a programme of works agreed.",
        images: [
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Drawings being reviewed",
      },
      {
        title: "Works & Finishing",
        text: "Construction and finishing works were carried out to the agreed specification.",
        images: [
          "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Landmark cultural building",
      },
    ],
  },
  {
    slug: "the-civic-centre",
    name: "The Civic Centre",
    location: "Victoria Island, Lagos",
    category: "Civic",
    status: "Completed",
    summary:
      "Works on a civic building with clean horizontal architectural lines.",
    description: [
      "Bunutech Construction contributed works to The Civic Centre on Victoria Island, Lagos.",
    ],
    scope: ["Building Construction", "Exterior Finishing"],
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&h=900&q=65",
    alt: "Civic building with clean horizontal architectural lines",
    steps: [
      {
        title: "Structural Works",
        text: "Structural works were carried out and inspected at every stage.",
        images: [
          "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Engineers inspecting reinforcement",
      },
      {
        title: "Completion",
        text: "Finishing works brought the building to completion.",
        images: [
          "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Completed civic building",
      },
    ],
  },
  {
    slug: "dover-engineering-towers",
    name: "Dover Engineering Towers",
    location: "Victoria Island, Lagos",
    category: "Commercial",
    status: "Completed",
    summary: "Works on corporate engineering towers in Victoria Island.",
    description: [
      "Bunutech Construction contributed works to the Dover Engineering Towers on Victoria Island, Lagos.",
    ],
    scope: ["Building Construction"],
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1600&h=900&q=65",
    alt: "Corporate engineering towers viewed from street level",
    steps: [
      {
        title: "Superstructure",
        text: "The tower frame was built floor by floor.",
        images: [
          "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Tower cranes over the building frame",
      },
      {
        title: "Completion",
        text: "Facade and finishing works brought the towers to completion.",
        images: [
          "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Completed engineering towers",
      },
    ],
  },
  {
    slug: "the-citadel-global-community-church",
    name: "The Citadel Global Community Church",
    location: "Oregun, Lagos",
    category: "Religious",
    status: "Completed",
    summary: "Works on a large modern church auditorium in Oregun.",
    description: [
      "Bunutech Construction contributed works to The Citadel Global Community Church in Oregun, Lagos.",
    ],
    scope: ["Building Construction", "Interior Finishing"],
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&h=900&q=65",
    alt: "Large modern church auditorium exterior",
    steps: [
      {
        title: "Construction",
        text: "Structural and building works were carried out on site.",
        images: [
          "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Worker carrying out carpentry on site",
      },
      {
        title: "Completion",
        text: "Finishing works brought the auditorium to completion.",
        images: [
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Completed church auditorium",
      },
    ],
  },
  {
    slug: "wings-office-complex",
    name: "Wings Office Complex",
    location: "Victoria Island, Lagos",
    category: "Commercial",
    status: "Completed",
    summary: "Works on an office complex with glazed curtain walling.",
    description: [
      "Bunutech Construction contributed works to the Wings Office Complex on Victoria Island, Lagos.",
    ],
    scope: ["Building Construction", "Interior Finishing"],
    image:
      "https://images.unsplash.com/photo-1481253127861-534498168948?auto=format&fit=crop&w=1600&h=900&q=65",
    alt: "Office complex with glazed curtain walling",
    steps: [
      {
        title: "Construction",
        text: "Building works were carried out to the approved drawings.",
        images: [
          "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Building under construction",
      },
      {
        title: "Interior Finishing",
        text: "Office interiors were finished and handed over.",
        images: [
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Finished office interior",
      },
    ],
  },
  {
    slug: "the-seattle-residencies-and-spa",
    name: "The Seattle Residencies and Spa",
    location: "Victoria Island, Lagos",
    category: "Residential",
    status: "Completed",
    summary:
      "Works on a premium residential development with a landscaped entrance.",
    description: [
      "Bunutech Construction contributed works to The Seattle Residencies and Spa on Victoria Island, Lagos.",
    ],
    scope: ["Building Construction", "Landscaping", "Exterior Finishing"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&h=900&q=65",
    alt: "Premium residential development with landscaped entrance",
    steps: [
      {
        title: "Construction",
        text: "Structural and building works were carried out on site.",
        images: [
          "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Engineers on site",
      },
      {
        title: "Landscaping & Finishing",
        text: "Landscaping and exterior finishes completed the development.",
        images: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=800&q=65",
        ],
        alt: "Completed residence with landscaped entrance",
      },
    ],
  },
];

export const featuredProjects = (count = 3): Project[] => {
  const featured = projects.filter((project) => project.featured);
  return (featured.length ? featured : projects).slice(0, count);
};

export const projectUrl = (project: Project) => `/projects/${project.slug}`;
