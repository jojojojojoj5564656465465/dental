import {
  $,
  component$,
  useStore,
  useContextProvider,
  createContextId,
  useContext,
  Slot,
  useSignal,
} from '@builder.io/qwik'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { ul, liWrapper, liHeader, li_content, myContent } from './content.css'

// ------------------------------------------------------------------
// 1️⃣  Contexte partagé entre Accordion et ses items
// ------------------------------------------------------------------
export const AccordionCtx = createContextId('AccordionCtx')

// ------------------------------------------------------------------
// 2️⃣  Composant racine – gère l’état et fournit le contexte
// ------------------------------------------------------------------
export const Accordion = component$(() => {
  const stateOpenIndex = useSignal<number | null>(null)

  const toggle = $((i: number) => {
    // même index → on referme, sinon on ouvre le nouveau
    stateOpenIndex.value = stateOpenIndex.value === i ? null : i
  })

  // Le contexte est disponible pour tous les enfants
  useContextProvider(AccordionCtx, stateOpenIndex.value)

  return (
    <ul class={ul}>
      <Slot />
    </ul>
  )
})

// ------------------------------------------------------------------
// 3️⃣  Item – utilise le contexte pour savoir s’il est ouvert
// ------------------------------------------------------------------
export const AccordionItem = component$<{
  index: number
  title: string
  icon: string // url() ou classe CSS
}>(props => {
  const ctx = useContext(AccordionCtx)
  const isOpen = ctx.openIndex === props.index

  // on crée la fonction qu’une fois (pas à chaque render)
  const onClick = $(() => toggle(props.index))

  return (
    <li class={liWrapper}>
      {/* ---------- Header (bouton) ---------- */}
      <button
        type='button'
        class={liHeader}
        onClick$={onClick}
        aria-expanded={isOpen}
        aria-controls={`panel-${props.index}`}
        id={`header-${props.index}`}
        // on injecte l’icône via la variable CSS déjà définie
        style={assignInlineVars({ [myContent]: props.icon })}
      >
        {/* Titre + icône (déjà géré dans li_content.txt1) */}
        <h4 class={li_content.txt1}>{props.title}</h4>

        {/* Indicateur + / - */}
        <span class={isOpen ? li_content.notificationOpen : li_content.notification} aria-hidden='true' />
      </button>

      {/* ---------- Panel (contenu) ---------- */}
      <section
        id={`panel-${props.index}`}
        aria-labelledby={`header-${props.index}`}
        class={isOpen ? li_content.txt2Open : li_content.txt2}
      >
        <Slot />
      </section>
    </li>
  )
})
