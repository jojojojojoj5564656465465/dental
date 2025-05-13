import {
  $,
  useOnDocument,
  useOnWindow,
  useSignal,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";

function isMobileBoolean() {
  const isMobile = useSignal<boolean>(false);

  useVisibleTask$(({ cleanup }) => {
    const checkIfMobile = () => {
      isMobile.value = window.matchMedia("(max-width: 768px)").matches;
    };

    // checkIfMobile() // Vérification initiale
    // window.addEventListener('resize', checkIfMobile)
    //
    // cleanup(() => {
    //   window.removeEventListener('resize', checkIfMobile)
    // })
  });
  useOnWindow(
    "resize",
    $(() => {
      isMobile.value = window.matchMedia("(max-width: 768px)").matches;
    }),
  );
  return isMobile;
}

function useButton(props: string) {
  const state = useSignal<boolean>(false);
  const isMobile = isMobileBoolean();

  useTask$(({ track }) => {
    track(() => isMobile.value);
    console.log("Count changed:", isMobile.value);
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
