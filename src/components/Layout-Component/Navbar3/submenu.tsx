/** biome-ignore-all lint/suspicious/noAssignInExpressions: <off> */
import {
  $,
  component$,
  useComputed$,
  useContext,
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
};

export default component$<SubMenuB & Extra>((props) => {
  v.parse(ObjectSchema, props);

  const openSubMenu = useSignal<boolean>(false);
  const ctx = useContext(openMenuIndexPosition);

  const isActive = useComputed$(() => props.idx === ctx.value);

  const toggleSubMenu = $(() => {
    openSubMenu.value = !openSubMenu.value;
  });

  useStyles$(styles);

  useOnDocument(
    "click",
    $((event) => {
      if (openSubMenu.value) {
        const target = event.target as HTMLElement;
        if (target.closest(".submenu") === null) {
          openSubMenu.value = false;
        }
      }
    }),
  );

  return (
    <div class={["submenu flex flex-col align-center relative"]}>
      <button
        id={`submenu-btn-${props.idx}`}
        type="button"
        aria-expanded={isActive.value}
        aria-controls={`submenu-list-${props.idx}`}
        onClick$={toggleSubMenu}
        class="submenu_name navStyle"
      >
        {props.name}
      </button>
      <ul
        id={`submenu-list-${props.idx}`}
        class={["submenu_navlink gap-1.5 flex-col navStyle"]}
      >
        {props.Submenu.map((item, index) => (
          <Navlink key={index} {...item} />
        ))}
      </ul>
    </div>
  );
});
