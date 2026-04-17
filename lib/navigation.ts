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
      { label: "Vision & Mission", href: "/about/vision" },
      { label: "Quality Approach", href: "/about/quality" },
    ],
  },

  {
    label: "IT Services",
    href: "/it-services",
    children: [
      { label: "Cloud Services", href: "/it-services/cloud" },
      { label: "Cybersecurity", href: "/it-services/cyber" },
      { label: "IT Support", href: "/it-services/IT" },
    ],
  },
  {
    label: "Development",
    href: "/development-services",
    children: [
      { label: "Web Development", href: "/development/web-dev" },
      { label: "App Development", href: "/development/app-dev" },
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