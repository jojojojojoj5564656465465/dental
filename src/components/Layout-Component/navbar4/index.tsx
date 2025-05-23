import {
  component$,
  useSignal,
  useStore,
  useVisibleTask$,
  $,
  useOnWindow,
} from "@builder.io/qwik";

// --- Data and Types ---
type Base = {
  readonly name: string;
};

export type A = Base & {
  readonly type: "link";
  readonly link: string;
};

export type SubMenuB = Base & {
  readonly type: "submenu";
  readonly Submenu: readonly A[];
};

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
        name: "Sous-menu Ortho 1",
        link: "/sous-menu-ortho-1",
      },
      {
        type: "link",
        name: "Sous-menu Ortho 2",
        link: "/sous-menu-ortho-2",
      },
      {
        type: "link",
        name: "Sous-menu Ortho 3",
        link: "/sous-menu-ortho-3",
      },
    ],
  },
  {
    type: "submenu",
    name: "sub_Orthodontie_autre",
    Submenu: [
      {
        type: "link",
        name: "Sous-menu Autre 1",
        link: "/sous-menu-autre-1",
      },
      {
        type: "link",
        name: "Sous-menu Autre 2",
        link: "/sous-menu-autre-2",
      },
    ],
  },
  {
    type: "link",
    name: "Contact",
    link: "/contact",
  },
];

// --- SVG Icons ---
const LogoIcon = () => (
  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <title>DentaCare Logo</title>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.72 3.9C10.74 18.45 11.35 19 12 19s1.26-.55 1.87-1.26c1.52-1.04 2.77-2.36 3.72-3.9C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

interface ChevronIconProps {
  isOpen?: boolean;
}
const ChevronIcon = component$<ChevronIconProps>(({ isOpen = false }) => (
  <svg
    class={`ml-1 w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <title>Chevron Down</title>
    <path
      fill-rule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clip-rule="evenodd"
    />
  </svg>
));

const MenuIcon = () => (
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <title>Open menu</title>
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <title>Close menu</title>
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// --- Main Component ---
export default component$(() => {
  const isMobileMenuOpen = useSignal(false);
  // Remplace useSignal par useStore pour stocker l’état de chaque sous-menu mobile
  const mobileSubmenuOpenStates = useStore<{ [key: string]: boolean }>({});

  const mobileMenuRef = useSignal<HTMLDivElement>();
  const mobileButtonRef = useSignal<HTMLButtonElement>();

  // Ferme le menu mobile si on clique en dehors
  useVisibleTask$(({ cleanup }) => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.value &&
        mobileButtonRef.value &&
        !mobileMenuRef.value.contains(event.target as Node) &&
        !mobileButtonRef.value.contains(event.target as Node)
      ) {
        isMobileMenuOpen.value = false;
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    cleanup(() =>
      document.removeEventListener("mousedown", handleClickOutside),
    );
  });

  // Ferme tous les sous-menus mobiles lors du redimensionnement en desktop
  useOnWindow(
    "resize",
    $(() => {
      if (window.innerWidth >= 768) {
        isMobileMenuOpen.value = false;
        // Remise à zéro de chaque clé du store
        Object.keys(mobileSubmenuOpenStates).forEach((key) => {
          mobileSubmenuOpenStates[key] = false;
        });
      }
    }),
  );

  // Ouvre/ferme un sous-menu mobile
  const toggleMobileSubmenu = $((submenuName: string) => {
    mobileSubmenuOpenStates[submenuName] =
      !mobileSubmenuOpenStates[submenuName];
  });

  return (
    <>
      <nav class="bg-white shadow-lg sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            {/* Logo */}
            <div class="flex items-center">
              <div class="flex-shrink-0 flex items-center">
                <div class="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-800 rounded-lg flex items-center justify-center">
                  <LogoIcon />
                </div>
                <span class="ml-3 text-xl font-bold text-blue-800">
                  DentaCare
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div class="hidden md:flex items-center space-x-1 lg:space-x-4 xl:space-x-8">
              {menu.map((item, index) => {
                switch (item.type) {
                  case "link":
                    return (
                      <a
                        key={item.name + "-" + index}
                        href={item.link}
                        class="text-gray-700 hover:text-sky-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    );
                  case "submenu":
                    return (
                      <div key={item.name + "-" + index} class="relative group">
                        <button
                          type="button"
                          class="text-gray-700 hover:text-sky-500 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                          tabIndex={0}
                        >
                          {item.name}
                          <ChevronIcon />
                        </button>
                        <div class="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 z-20">
                          <div class="py-2">
                            {item.Submenu.map((subItem, subIndex) => (
                              <a
                                key={subItem.name + "-" + subIndex}
                                href={subItem.link}
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-200 hover:bg-opacity-20 hover:text-blue-800 transition-colors duration-200"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  default:
                    return null;
                }
              })}
              {/* CTA Button */}
              <a
                href="/rdv"
                class="bg-gradient-to-r from-sky-500 to-blue-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 ml-4"
              >
                Prendre RDV
              </a>
            </div>

            {/* Mobile menu button */}
            <div class="md:hidden flex items-center">
              <button
                ref={mobileButtonRef}
                type="button"
                onClick$={() => {
                  isMobileMenuOpen.value = !isMobileMenuOpen.value;
                }}
                class="text-gray-700 hover:text-sky-500 focus:outline-none focus:text-sky-500 transition-colors duration-200"
                aria-label="Ouvrir le menu principal"
                aria-expanded={isMobileMenuOpen.value}
              >
                {isMobileMenuOpen.value ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          class={`md:hidden bg-white border-t border-gray-200 ${isMobileMenuOpen.value ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div class="px-2 pt-2 pb-3 space-y-1">
            {menu.map((item, index) => {
              switch (item.type) {
                case "link":
                  return (
                    <a
                      key={item.name + "-" + index}
                      href={item.link}
                      class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  );
                case "submenu":
                  const isOpen = mobileSubmenuOpenStates[item.name] || false;
                  return (
                    <div key={item.name + "-" + index} class="relative">
                      <button
                        type="button"
                        onClick$={() => toggleMobileSubmenu(item.name)}
                        class="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
                        aria-expanded={isOpen}
                        aria-controls={`mobile-submenu-${item.name}-${index}`}
                      >
                        {item.name}
                        <ChevronIcon isOpen={isOpen} />
                      </button>
                      <div
                        id={`mobile-submenu-${item.name}-${index}`}
                        class={`pl-6 space-y-1 ${isOpen ? "block" : "hidden"}`}
                      >
                        {item.Submenu.map((subItem, subIndex) => (
                          <a
                            key={subItem.name + "-" + subIndex}
                            href={subItem.link}
                            class="block px-3 py-2 text-sm text-gray-600 hover:text-sky-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                default:
                  return null;
              }
            })}

            {/* Mobile CTA */}
            <div class="pt-3">
              <a
                href="/rdv"
                class="block bg-gradient-to-r from-sky-500 to-blue-800 text-white px-4 py-2 rounded-full text-center font-medium hover:shadow-lg transition-all duration-200"
              >
                Prendre RDV
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
});
