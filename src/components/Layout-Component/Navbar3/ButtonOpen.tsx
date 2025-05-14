import {
  $,
  useOnDocument,
  useOnWindow,
  useSignal,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";

/**
 * @description Check if the screen window is below a certain size in rem
 * @param x number - The number of rems to check against the screen width
 */
function useScreenBelowInRem(x: number) {
  const isMobile = useSignal<boolean>(false);
  const size = `(max-width: ${x}rem)`;
  // eslint-disable-next-line qwik/use-method-usage
  useVisibleTask$(() => {
    isMobile.value = window.matchMedia(size).matches;
  });
  // eslint-disable-next-line qwik/use-method-usage
  useOnWindow(
    "resize",
    $(() => {
      isMobile.value = window.matchMedia(size).matches;
    }),
  );
  return isMobile;
}

function useButton(props: string) {
  const state = useSignal<boolean>(false);
  const isMobile = useScreenBelowInRem(48);

  useTask$(({ track }) => {
    track(() => isMobile.value);
  });

  const toggle = $(() => {
    state.value = isMobile.value && !state.value;
  });

  useOnDocument(
    "click",
    $((event) => {
      if (state.value) {
        const target = event.target as HTMLElement;
        if (target.closest(props) === null) {
          state.value = false;
        }
      }
    }),
  );
  return { state, toggle };
}

export { useButton, useScreenBelowInRem };
