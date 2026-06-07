type TeamMemberData = {
  name: string;
  role: string;
  image: string | null;
  link: string | null;
  linkType: "linkedin" | "artstation" | null;
};

export const teamMembers = [
  {
    name: "Vladyslav Yazykov",
    role: "Founder, CEO, Creative Lead",
    image: "/assets/images/team/vlad-y.webp",
    link: "https://linkedin.com/in/elumixor",
    linkType: "linkedin",
  },
  {
    name: "Yaroslav Zaiarnyi",
    role: "3D Artist & Rigger",
    image: "/assets/images/team/yaroslav-z.webp",
    link: null,
    linkType: null,
  },
  {
    name: "Tim Jahnke",
    role: "Level Designer",
    image: "/assets/images/team/tim-j.webp",
    link: "https://www.linkedin.com/in/timjahnkeld/",
    linkType: "linkedin",
  },
  {
    name: "Dzmitry Dabrynski",
    role: "Project Manager",
    image: "/assets/images/team/dzmitry-d.webp",
    link: "https://www.linkedin.com/in/dzmitry-dabrynski-54a291204/",
    linkType: "linkedin",
  },
  {
    name: "Ernesto Ignacio Gómez Belloso",
    role: "Narrative Designer",
    image: "/assets/images/team/ernesto-g.webp",
    link: "https://www.linkedin.com/in/ernesto-ignacio-gomez-belloso-4a9a46202/",
    linkType: "linkedin",
  },
  {
    name: "Conor Jay Peter Dawson",
    role: "Sound Designer (SFX)",
    image: "/assets/images/team/conor-d.webp",
    link: "https://www.linkedin.com/in/conor-dawson-85b4b53ab/",
    linkType: "linkedin",
  },
  {
    name: "Yehor Mir",
    role: "Unity Developer",
    image: "/assets/images/team/yehor-m.webp",
    link: "https://www.linkedin.com/in/yehor-mir-full-stack/",
    linkType: "linkedin",
  },
  {
    name: "Oleksandr Nosov",
    role: "Game Designer",
    image: "/assets/images/team/oleksander-n.webp",
    link: "https://www.linkedin.com/in/oleksandr--nosov/",
    linkType: "linkedin",
  },
  {
    name: "Kseniia Piddubna",
    role: "UI Designer",
    image: "/assets/images/team/kseniia-p.webp",
    link: "https://artstation.com/kseniia_piddubna/",
    linkType: "artstation",
  },
  {
    name: "Maryia Kostsina",
    role: "QA Lead",
    image: "/assets/images/team/maryia-k.webp",
    link: "https://www.linkedin.com/in/maryia-kostsina/",
    linkType: "linkedin",
  },
  {
    name: "Mikhail Yazykov",
    role: "Composer",
    image: "/assets/images/team/mikhail-y.webp",
    link: null,
    linkType: null,
  },
] as const satisfies ReadonlyArray<TeamMemberData>;

export const contributors = [
  {
    name: "George Kobiakov",
    role: "Art Lead",
    image: "/assets/images/team/george-k.webp",
    link: "https://www.linkedin.com/in/george-kobiakov-a3591295/",
    linkType: "linkedin",
  },
  {
    name: "Yevhenii Kolisnyk",
    role: "Unity Developer",
    image: "/assets/images/team/yevhenii-k.webp",
    link: "https://www.linkedin.com/in/yevhenii-kolisnyk-528487343/",
    linkType: "linkedin",
  },
  {
    name: "Jakub Bartušek",
    role: "Unity Developer",
    image: null,
    link: "https://www.linkedin.com/in/jakub-bartu%C5%A1ek-6a6892329/",
    linkType: "linkedin",
  },
] as const satisfies ReadonlyArray<TeamMemberData>;

export type TeamMember = TeamMemberData;
