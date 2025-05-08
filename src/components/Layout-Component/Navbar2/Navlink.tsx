// src/components/Navbar/NavLink.tsx

import { $, component$ } from "@builder.io/qwik";
import type { MenuItem } from "./menu";

type NavLinkProps = {
  item: MenuItem;
  onToggleSubMenu?: () => void;
  open?: boolean;
  mobile?: boolean;
};
export default component$(
  ({ item, onToggleSubMenu, open, mobile }: NavLinkProps) => {
    const hasSubmenu = !!item.Submenu?.length;

    return (
      <div class="relative">
        <a
          href={item.link}
          class={`block py-2 px-4 rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-white ${
            mobile ? "text-white text-sm" : ""
          }`}
          tabIndex={0}
          aria-haspopup={hasSubmenu ? "true" : undefined}
          aria-expanded={hasSubmenu ? open : undefined}
          onClick$={(e) => {
            if (hasSubmenu) {
              e.preventDefault();
              onToggleSubMenu?.();
            }
          }}
        >
          {item.name}
        </a>

        {hasSubmenu && open && (
          <ul class="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 text-black">
            {item?.Submenu?.map((subItem, subIndex) => (
              <li key={subIndex}>
                <a
                  href={subItem.link}
                  class="block py-2 px-4 hover:bg-gray-100"
                >
                  {subItem.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  },
);
