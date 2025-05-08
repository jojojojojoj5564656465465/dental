// src/components/Navbar/Navbar.tsx
import { $, component$, useSignal } from "@builder.io/qwik";
import { type MenuItem, menu } from "./menu";
import NavLink from "./Navlink";

export default component$(() => {
  const mobileMenuOpen = useSignal(false);
  const openSubMenu = useSignal<number | null>(null);

  const toggleSubMenu = $((index: number) => {
    openSubMenu.value = openSubMenu.value === index ? null : index;
  });
  const toggleMobileMenu = $(() => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
  });
  return (
    <nav class="bg-sky-600 text-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0">
            <a href="/" class="font-bold text-xl">
              Mon Site
            </a>
          </div>

          {/* Desktop Menu */}
          <div class="hidden md:block">
            <ul class="flex items-center space-x-4">
              {menu.map((item, index) => (
                <li key={index}>
                  <NavLink
                    item={item}
                    onToggleSubMenu={$(() => toggleSubMenu(index))}
                    open={openSubMenu.value === index}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Toggle Button */}
          <div class="md:hidden">
            <button
              onClick$={toggleMobileMenu}
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-sky-700 focus:outline-none"
              aria-expanded={mobileMenuOpen.value}
            >
              <span class="sr-only">Ouvrir le menu</span>
              {mobileMenuOpen.value ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen.value && (
        <div class="md:hidden bg-sky-700 shadow-lg">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menu.map((item, index) => (
              <div key={index}>
                <NavLink
                  item={item}
                  onToggleSubMenu={$(() => toggleSubMenu(index))}
                  open={openSubMenu.value === index}
                  mobile
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
});
