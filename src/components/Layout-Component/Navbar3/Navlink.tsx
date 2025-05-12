// src/components/Navbar/NavLink.tsx

import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./main.css?inline";
import type { A } from "./menu";

export default component$<A>((props) => {
  useStyles$(styles);
  return (
    <li class="grid place-items-center group/nvl navlink navStyle flex text-center md:w-max capitalize">
      <a class={"group-hover/nvl:text-sky-600 mx-auto"} href={props.link}>
        {props.name}
      </a>
    </li>
  );
});
