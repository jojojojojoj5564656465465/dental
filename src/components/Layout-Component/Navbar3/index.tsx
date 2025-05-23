// src/components/Layout-Component/Navbar3/index.tsx
import {
  $,
  component$,
  createContextId,
  type Signal,
  useContextProvider,
  useSignal,
  useStyles$,
} from "@builder.io/qwik";
import { useButton } from "./ButtonOpen";
import styles from "./main.css?inline";
import { menu } from "./menu";
import Navlink from "./Navlink";
import Submenu from "./submenu";

export const openMenuIndexPosition = createContextId<Signal<number>>(
  "what-is-submmenu-open-context",
);

export default component$(() => {
  useStyles$(styles);

  const { state: mobileOpenCloseButton, toggle } = useButton("#nav-bar");
  const submenuPosition = useSignal<number>(-1);
  useContextProvider(openMenuIndexPosition, submenuPosition);
  const changePosition = $((indexNumber: number) => {
    submenuPosition.value = indexNumber;
  });
  return (
    <nav
      id="nav-bar"
      class="bg-sky-500/50 relative gap-3 max-md:grid flex flex-row items-center"
    >
      <div class="flex items-center justify-between p-4">
        <h1 class="text-3xl md:pr-9 font-bold text-blue-800 hover:text-sky-400">
          DentiCourb
        </h1>
        <button
          class="cursor-pointer grid place-items-center size-10 rounded-md bg-sky-600 p-2 text-white md:hidden"
          type="button"
          onClick$={toggle}
          aria-label="Toggle Menu"
          aria-expanded={mobileOpenCloseButton.value}
          aria-controls="nav-bar"
        >
          {mobileOpenCloseButton.value ? "X" : "☰"}
        </button>
      </div>
      <buttonNav />
      <ul
        class={[
          "md:hidden grid gap-1 md:items-center place-items-center items-start transition-all duration-300",
          mobileOpenCloseButton.value ? "grid" : "max-md:hidden",
        ]}
      >
        {menu.map((item, index) =>
          item.type === "link" ? (
            <Navlink key={index} {...item} />
          ) : (
            <Submenu
              key={index}
              changeTab={changePosition}
              idx={index}
              isMobile={true}
              {...item}
            />
          ),
        )}
      </ul>

      <ul
        class={[
          "max-md:hidden md:flex md:justify-start gap-1 md:items-center transition-all duration-300",
        ]}
      >
        {menu.map((item, index) =>
          item.type === "link" ? (
            <Navlink key={index} {...item} />
          ) : (
            <Submenu
              key={index}
              changeTab={changePosition}
              idx={index}
              isMobile={false}
              {...item}
            />
          ),
        )}
      </ul>
    </nav>
  );
});
