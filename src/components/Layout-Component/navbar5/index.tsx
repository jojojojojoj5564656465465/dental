import {
  $,
  component$,
  createContextId,
  type QRL,
  type Signal,
  useComputed$,
  useContext,
  useContextProvider,
  useOnWindow,
  useSignal,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";

// --- Data and Types (menu.ts or inline) ---
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
    name: "Accueil",
    link: "/",
  },
  {
    type: "link",
    name: "Urgences",
    link: "/urgences",
  },
  {
    type: "submenu",
    name: "Services",
    Submenu: [
      { type: "link", name: "Soins préventifs", link: "/services/preventifs" },
      { type: "link", name: "Implants dentaires", link: "/services/implants" },
      { type: "link", name: "Orthodontie", link: "/services/orthodontie" },
    ],
  },
  {
    type: "submenu",
    name: "Le Cabinet",
    Submenu: [
      { type: "link", name: "Notre équipe", link: "/cabinet/equipe" },
      { type: "link", name: "Équipements", link: "/cabinet/equipements" },
      { type: "link", name: "Horaires & Accès", link: "/cabinet/horaires" },
    ],
  },
  {
    type: "link",
    name: "Contact",
    link: "/contact",
  },
];

// --- Context for Active Desktop Submenu ---
export const ActiveDesktopSubmenuContext = createContextId<Signal<number>>(
  "desktop-active-submenu-index",
);

// --- SVG Icons (icons.ts or inline) ---
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
    aria-hidden="true"
  >
    <path
      fill-rule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clip-rule="evenodd"
    />
  </svg>
));

const MenuIcon = $(() => (
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <title>Ouvrir le menu</title>
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
));

const CloseIcon = $(() => (
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <title>Fermer le menu</title>
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
));

// --- Custom Hook for Mobile Menu Toggle (useMobileMenuToggler.ts or inline) ---
export function useMobileMenuToggler(navBarId: string) {
  const isOpen = useSignal(false);
  const isMobileScreen = useSignal(false);

  const checkScreenSize = $(() => {
    if (!isMobileScreen.value) {
      isOpen.value = false;
    }
  });

  useVisibleTask$(() => {
    isMobileScreen.value = window.innerWidth < 768;
  });
  useComputed$(() => {
    if (!isMobileScreen.value) {
      isOpen.value = false;
    }
  });
  useOnWindow("resize", checkScreenSize);

  const toggle = $(() => {
    if (isMobileScreen.value) {
      isOpen.value = !isOpen.value;
    }
  });

  useVisibleTask$(({ track, cleanup }) => {
    track(() => isOpen.value);

    if (!isOpen.value) return;

    const handleClickOutside = (event: MouseEvent) => {
      const navBarElement = document.getElementById(navBarId);
      if (navBarElement && !navBarElement.contains(event.target as Node)) {
        isOpen.value = false;
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    cleanup(() =>
      document.removeEventListener("mousedown", handleClickOutside),
    );
  });

  return { isOpen, toggle, isMobileScreen };
}

// --- NavLink Component (DentalNavLink.tsx or inline) ---
interface DentalNavLinkProps extends A {
  isMobile?: boolean;
  onClick$?: QRL<() => void>;
}
export const DentalNavLink = component$<DentalNavLinkProps>((props) => {
  return (
    <li>
      <a
        href={props.link}
        class={[
          "transition-colors duration-200",
          props.isMobile
            ? "block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-500 hover:bg-gray-50 rounded-md"
            : "text-gray-700 hover:text-sky-500 px-3 py-2 text-sm font-medium",
        ]}
        onClick$={props.onClick$}
      >
        {props.name}
      </a>
    </li>
  );
});

// --- Desktop Submenu Item (DesktopSubmenuItem.tsx or inline) ---
interface DesktopSubmenuItemProps extends SubMenuB {
  idx: number;
}
export const DesktopSubmenuItem = component$<DesktopSubmenuItemProps>(
  (props) => {
    const activeSubmenuIndex = useContext(ActiveDesktopSubmenuContext);
    const itemRef = useSignal<HTMLLIElement>();

    const isActive = useComputed$(() => activeSubmenuIndex.value === props.idx);

    return (
      <li
        class="relative group"
        ref={itemRef}
        onMouseEnter$={() => {
          activeSubmenuIndex.value = props.idx;
        }}
        onMouseLeave$={() => {
          activeSubmenuIndex.value = -1;
        }}
      >
        <button
          type="button"
          class="text-gray-700 hover:text-sky-500 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
          aria-expanded={isActive.value}
          aria-controls={`desktop-submenu-${props.idx}`}
          onClick$={() => {
            activeSubmenuIndex.value = isActive.value ? -1 : props.idx;
          }}
          onFocus$={() => {
            activeSubmenuIndex.value = props.idx;
          }}
        >
          {props.name}
          <ChevronIcon isOpen={isActive.value} />
        </button>
        <div
          id={`desktop-submenu-${props.idx}`}
          class={[
            "absolute left-0 mt-0 pt-2 w-56 bg-white rounded-lg shadow-lg transition-all duration-300 transform origin-top z-30",
            isActive.value
              ? "opacity-100 visible scale-y-100"
              : "opacity-0 invisible scale-y-95",
          ]}
          onMouseEnter$={() => {
            activeSubmenuIndex.value = props.idx;
          }}
        >
          <ul class="py-2">
            {props.Submenu.map((subItem, subIndex) => (
              <DentalNavLink
                key={`${subItem.name}-${subIndex}`}
                {...subItem}
                onClick$={() => {
                  activeSubmenuIndex.value = -1;
                }}
              />
            ))}
          </ul>
        </div>
      </li>
    );
  },
);

// --- Mobile Submenu Item (MobileSubmenuItem.tsx or inline) ---
interface MobileSubmenuItemProps extends SubMenuB {
  submenuName: string;
  openStore: { [key: string]: boolean };
  toggleSubmenu$: QRL<(name: string) => void>;
  closeMobileMenu$?: QRL<() => void>;
}
export const MobileSubmenuItem = component$<MobileSubmenuItemProps>((props) => {
  const isOpen = useComputed$(
    () => props.openStore[props.submenuName] || false,
  );
  const submenuContentRef = useSignal<HTMLDivElement>();

  return (
    <li class="relative">
      <button
        type="button"
        onClick$={() => props.toggleSubmenu$(props.submenuName)}
        class={[
          "w-full flex justify-between items-center px-3 py-2 text-base font-medium rounded-md transition-colors duration-200",
          isOpen.value
            ? "text-sky-600 bg-sky-50"
            : "text-gray-700 hover:text-sky-500 hover:bg-gray-50", // Conditional color
        ]}
        aria-expanded={isOpen.value}
        aria-controls={`mobile-submenu-content-${props.submenuName}`}
      >
        {props.name}
        <ChevronIcon isOpen={isOpen.value} />
      </button>
      <div
        ref={submenuContentRef}
        id={`mobile-submenu-content-${props.submenuName}`}
        class={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen.value ? "max-h-96" : "max-h-0"}`}
      >
        <ul class="pl-6 space-y-1 pt-1 pb-2">
          {props.Submenu.map((subItem, subIndex) => (
            <DentalNavLink
              key={`${subItem.name}-${subIndex}`}
              {...subItem}
              isMobile
              onClick$={props.closeMobileMenu$}
            />
          ))}
        </ul>
      </div>
    </li>
  );
});

// --- Main Navbar Component (DentalNavbar.tsx) ---
export default component$(() => {
  // Changed to export default
  const navBarId = "dental-navbar-main";
  const {
    isOpen: isMobileMenuOpen,
    toggle: toggleMobileMenu,
    isMobileScreen,
  } = useMobileMenuToggler(navBarId);

  const activeDesktopSubmenuIndex = useSignal(-1);
  useContextProvider(ActiveDesktopSubmenuContext, activeDesktopSubmenuIndex);

  const mobileSubmenuOpenStates = useStore<{ [key: string]: boolean }>({});

  useVisibleTask$(() => {
    menu.forEach((item) => {
      if (item.type === "submenu") {
        if (!(item.name in mobileSubmenuOpenStates)) {
          mobileSubmenuOpenStates[item.name] = false;
        }
      }
    });
  });

  useVisibleTask$(({ track }) => {
    track(() => isMobileMenuOpen.value);
    track(() => isMobileScreen.value);

    if (!isMobileMenuOpen.value || !isMobileScreen.value) {
      Object.keys(mobileSubmenuOpenStates).forEach((key) => {
        mobileSubmenuOpenStates[key] = false;
      });
    }
  });

  const toggleMobileSubmenu$ = $((submenuNameToToggle: string) => {
    const intendedNewStateForClicked = !(
      mobileSubmenuOpenStates[submenuNameToToggle] || false
    );

    Object.keys(mobileSubmenuOpenStates).forEach((key) => {
      mobileSubmenuOpenStates[key] = false;
    });

    if (intendedNewStateForClicked) {
      mobileSubmenuOpenStates[submenuNameToToggle] = true;
    }
  });

  const closeMobileMenuAndSubmenus$ = $(() => {
    isMobileMenuOpen.value = false;
  });

  return (
    <>
      <nav id={navBarId} class="bg-white shadow-lg sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <a
              href="/"
              class="flex items-center"
              aria-label="DentaCare Homepage"
            >
              <div class="flex-shrink-0 flex items-center">
                <div class="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-800 rounded-lg flex items-center justify-center">
                  <LogoIcon />
                </div>
                <span class="ml-3 text-xl font-bold text-blue-800">
                  DentaCare
                </span>
              </div>
            </a>

            <ul class="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-4">
              {menu.map((item, index) =>
                item.type === "link" ? (
                  <DentalNavLink key={`${item.name}-${index}`} {...item} />
                ) : (
                  <DesktopSubmenuItem
                    key={`${item.name}-${index}`}
                    {...item}
                    idx={index}
                  />
                ),
              )}
              <li>
                <a
                  href="/rdv"
                  class="bg-gradient-to-r from-sky-500 to-blue-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 ml-4"
                >
                  Prendre RDV
                </a>
              </li>
            </ul>

            <div class="md:hidden flex items-center">
              <button
                type="button"
                onClick$={toggleMobileMenu}
                class="text-gray-700 hover:text-sky-500 focus:outline-none focus:text-sky-500 transition-colors duration-200 p-2"
                aria-label={
                  isMobileMenuOpen.value
                    ? "Fermer le menu principal"
                    : "Ouvrir le menu principal"
                }
                aria-expanded={isMobileMenuOpen.value}
                aria-controls="mobile-menu-content"
              >
                {isMobileMenuOpen.value ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        <div
          class={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen.value
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0"
          }`}
          id="mobile-menu-content"
        >
          <ul class="px-2 pt-2 pb-3 space-y-1">
            {menu.map((item, index) =>
              item.type === "link" ? (
                <DentalNavLink
                  key={`${item.name}-${index}-mobile`}
                  {...item}
                  isMobile
                  onClick$={closeMobileMenuAndSubmenus$}
                />
              ) : (
                <MobileSubmenuItem
                  key={`${item.name}-${index}-mobile`}
                  {...item}
                  submenuName={item.name}
                  openStore={mobileSubmenuOpenStates}
                  toggleSubmenu$={toggleMobileSubmenu$}
                  closeMobileMenu$={closeMobileMenuAndSubmenus$}
                />
              ),
            )}
            <li class="pt-3">
              <a
                href="/rdv"
                class="grid mx-4 my-2 bg-gradient-to-r from-sky-500 to-blue-800 text-white px-4 py-2 rounded-full text-center font-medium hover:shadow-lg transition-all duration-200"
                onClick$={closeMobileMenuAndSubmenus$}
              >
                Prendre RDV
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
});
