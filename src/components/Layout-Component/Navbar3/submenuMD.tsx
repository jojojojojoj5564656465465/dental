/** biome-ignore-all lint/suspicious/noAssignInExpressions: <off> */
import {
  $,
  component$,
  useComputed$,
  useContext,
  useOn,
  useOnDocument,
  useSignal,
  useStyles$,
} from "@builder.io/qwik";
import * as v from "valibot";
import { openMenuIndexPosition } from "./index";
import styles from "./main.css?inline";
import { type SubMenuB } from "./menu";
import Navlink from "./Navlink";

const ObjectSchema = v.object({
  idx: v.number(),
  type: v.literal("submenu"),
  name: v.string(),
  Submenu: v.array(
    v.object({
      type: v.literal("link"),
      name: v.string(),
      link: v.string(),
    }),
  ),
});

type Extra = {
  idx: number;
  changeTab: (index: number) => void;
  isMobile: boolean;
};

export default component$<SubMenuB & Extra>((props) => {
  v.parse(ObjectSchema, props);

  const ctx = useContext(openMenuIndexPosition);
  const openSubMenu = useSignal<boolean>(false);
  const isActive = useComputed$(() => props.idx === ctx.value);
  const both = useComputed$(() => openSubMenu.value && isActive.value);
  const toggleSubMenu = $(() => {
    openSubMenu.value = !openSubMenu.value;
  });

  useStyles$(styles);

  useOnDocument(
    "click",
    $((event) => {
      if (openSubMenu.value) {
        const target = event.target as HTMLElement;
        if (target.closest(`#submenu-btn-${props.idx}`) === null) {
          openSubMenu.value = false;
        }
      }
    }),
  );
  useOn(
    "mouseleave",
    $(() => (openSubMenu.value = false)),
  );
  return (
    <div class={["submenu grid align-center relative max-sm:mx-auto "]}>
      <button
        id={`submenu-btn-${props.idx}`}
        type="button"
        aria-expanded={isActive.value}
        aria-controls={`submenu-list-${props.idx}`}
        onClick$={[$(() => props.changeTab(props.idx)), toggleSubMenu]}
        // onMouseEnter$={[$(() => (openSubMenu.value = true)), $(() => props.changeTab(props.idx))]}
        class="capitalize submenu_name navStyle peer hover:!text-sky-600 my-auto"
      >
        {props.name}
        <span class="sm:hidden opacity-35">{both.value ? " ▼ " : " ▶"}</span>
      </button>
      <ul
        id={`submenu-list-${props.idx}`}
        class={[
          "submenu_navlink navStyle  peer-hover:grid gap-y-2 w-full",
          both.value ? "!grid " : "!hidden",
        ]}
      >
        {props.Submenu.map((item, index) => (
          <Navlink key={index} {...item} />
        ))}
      </ul>
    </div>
  );
});
