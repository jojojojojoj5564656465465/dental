import {
  $,
  useOnDocument,
  useOnWindow,
  useSignal,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";

function isMobileBoolean() {
  const isMobile = useSignal<boolean>(true);

  useVisibleTask$(() => {
    isMobile.value = window.matchMedia("(max-width: 768px)").matches;
  });
  useOnWindow(
    "resize",
    $(() => {
      isMobile.value = window.matchMedia("(max-width: 48rem)").matches;
    }),
  );
  return isMobile;
}

function useButton(props: string) {
  const state = useSignal<boolean>(false);
  const isMobile = isMobileBoolean();

  useTask$(({ track }) => {
    track(() => isMobile.value);
    console.log("useTask:", isMobile.value);
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

export default useButton;
