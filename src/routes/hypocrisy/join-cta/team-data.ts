export interface TeamMemberData {
  name: string;
  role: string;
  image: string | null;
  link: string | null;
  linkType: "linkedin" | "artstation" | null;
}

export const teamMembers: TeamMemberData[] = [
  {
    name: "Vladyslav Yazykov",
    role: "Founder, CEO, Creative Lead",
    image: "/assets/images/team/vlad-y.webp",
    link: "https://linkedin.com/in/elumixor",
    linkType: "linkedin",
  },
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
    name: "Jakub Bartušek",
    role: "Unity Developer",
    image: null,
    link: "https://www.linkedin.com/in/jakub-bartu%C5%A1ek-6a6892329/",
    linkType: "linkedin",
  },
  {
    name: "Mike Yazykov",
    role: "Composer",
    image: null,
    link: null,
    linkType: null,
  },
];
