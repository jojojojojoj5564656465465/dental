import { $, component$, useOnDocument, useSignal } from "@builder.io/qwik";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { li_content, liHeader, liWrapper, myContent } from "./content.css";

export interface ItemProps {
  title: string;
  description: string;
  icon: string;
}

export default component$<ItemProps>((props) => {
  const opening = useSignal<boolean>(false);

  const toOpen = $(() => {
    opening.value = !opening.value;
  });

  useOnDocument(
    "keydown",
    $((event) => {
      if (event.key === "Escape") {
        opening.value = false;
      }
    }),
  );
  return (
    <li
      onClick$={toOpen}
      class={liWrapper}
      role="button"
      aria-expanded={opening.value}
      tabIndex={0}
    >
      <div class={liHeader}>
        <h4
          class={li_content.txt1}
          style={assignInlineVars({ [myContent]: props.icon })}
        >
          {props.title}
        </h4>
        <span
          class={
            opening.value
              ? li_content.notificationOpen
              : li_content.notification
          }
        >
          {" "}
        </span>
      </div>
      <p class={opening.value ? li_content.txt2Open : li_content.txt2}>
        {props.description}
      </p>
    </li>
  );
});
