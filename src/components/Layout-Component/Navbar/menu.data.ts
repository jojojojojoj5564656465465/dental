export type MenuItem = {
  name: string;
  link: string;
  Submenu?: MenuItem[];
};

export const menu: MenuItem[] = [
  {
    name: "IT1",
    link: "/politique-de-confidentialite",
  },
  {
    name: "IT2",
    link: "/politique-de-confidentialite",
    Submenu: [
      {
        name: "Sous-menu 1",
        link: "/sous-menu-1",
      },
      {
        name: "Sous-menu 2",
        link: "/sous-menu-2",
      },
    ],
  },
];
