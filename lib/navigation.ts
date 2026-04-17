export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV_ITEMS: NavItem[] = [
  
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Vision & Mission", href: "/about/VM" },
      { label: "Quality Approach", href: "/about/QA" },
    ],
  },

  {
    label: "IT Services",
    href: "/it-services",
    children: [
      { label: "Cloud Services", href: "/it-services/cloud" },
      { label: "Cybersecurity", href: "/it-services/security" },
      { label: "IT Support", href: "/it-services/support" },
    ],
  },
  {
    label: "Development",
    href: "/development-services",
    children: [
      { label: "Web Development", href: "/development/web" },
      { label: "App Development", href: "/development/app" },
    ],
  },
  {
    label: "Hardware & Networking",
    href: "/hardware-networking",
    children: [
      { label: "Networking Installations & Management", href: "/hardware-networking/NIM" },
      { label: "Hardware & Network Maintenance", href: "/hardware-networking/HNM" },
      { label: "Technology Partners", href: "/hardware-networking/TP" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];