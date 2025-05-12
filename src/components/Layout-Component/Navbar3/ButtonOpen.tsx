import { $, useOn, useOnDocument, useSignal } from "@builder.io/qwik";

function useButton(props: string) {
  const state = useSignal<boolean>(false);

  const toggle = $(() => {
    state.value = !state.value;
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
