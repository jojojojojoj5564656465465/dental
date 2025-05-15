// Définition de la base commune pour les éléments de menu
type Base = {
  readonly name: string;
};

// Élément de menu avec un lien
export type A = Base & {
  readonly type: "link";
  readonly link: string;
};

// Élément de menu avec un sous-menu
export type SubMenuB = Base & {
  readonly type: "submenu";
  readonly Submenu: readonly A[];
};

// Définition du menu principal
export const menu: readonly (SubMenuB | A)[] = [
  {
    type: "link",
    name: "it1",
    link: "/politique-de-confidentialite",
  },
  {
    type: "link",
    name: "ITD1",
    link: "/politique-de-confidentialite",
  },
  {
    type: "submenu",
    name: "Implant",
    Submenu: [
      {
        type: "link",
        name: "Sous-menu 1",
        link: "/sous-menu-1",
      },
      {
        type: "link",
        name: "Sous-menu 2",
        link: "/sous-menu-2",
      },
    ],
  },
  {
    type: "submenu",
    name: "Orthodontie",
    Submenu: [
      {
        type: "link",
        name: "Sous-menu 1",
        link: "/sous-menu-1",
      },
      {
        type: "link",
        name: "Sous-menu 2",
        link: "/sous-menu-2",
      },
      {
        type: "link",
        name: "Sous-menu 1",
        link: "/sous-menu-1",
      },
      {
        type: "link",
        name: "Sous-menu 1",
        link: "/sous-menu-1",
      },
    ],
  },
  {
    type: "submenu",
    name: "sub_Orthodontie",
    Submenu: [
      {
        type: "link",
        name: "Sous-menu 1",
        link: "/sous-menu-1",
      },
      {
        type: "link",
        name: "Sous-menu 2",
        link: "/sous-menu-2",
      },
      {
        type: "link",
        name: "Sous-menu 1",
        link: "/sous-menu-1",
      },
      {
        type: "link",
        name: "Sous-menu 1",
        link: "/sous-menu-1",
      },
    ],
  },
  {
    type: "link",
    name: "Contact",
    link: "/politique-de-confidentialite",
  },
];
