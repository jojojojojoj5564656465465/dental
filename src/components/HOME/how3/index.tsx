import {
  $,
  component$,
  createContextId,
  type QRL,
  type Signal,
  useComputed$,
  useContext,
  useContextProvider,
  useSignal,
  useStylesScoped$,
  useTask$,
} from '@builder.io/qwik'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { li_content, liHeader, liWrapper, myContent, ul } from './content.css'
import styles from './main.css?inline'
export interface ItemProps {
  title: string
  description: string
  icon: string
  id: number
  toggleItem: QRL<(id: number) => void>
}

// Créer le contexte pour l'accordéon
const AccordionContext = createContextId<Signal<number | null>>('accordion-context')

// Composant principal Accordéon
const Accordion = component$(() => {
  const data: Omit<ItemProps, 'toggleItem'>[] = [
    {
      id: 0,
      title: 'Prendre rendez-vous',
      icon: 'url(/src/assets/icons/icon-how-it-work-1.svg)',
      description:
        'Prenez rendez-vous facilement en ligne ou par téléphone. Notre équipe vous proposera un créneau adapté à votre emploi du temps.',
    },
    {
      id: 1,
      title: 'Tiers Payant',
      icon: 'url(/src/assets/icons/icon-how-it-work-2.svg)',
      description: 'Bénéficiez du tiers payant pour la plupart des soins. Aucun débours au cabinet.',
    },
    {
      id: 2,
      title: 'Soins experts',
      icon: 'url(/src/assets/icons/icon-how-it-work-3.svg)',
      description: 'Recevez des soins dentaires experts dans un environnement moderne et accueillant.',
    },
  ]

  const activeId = useSignal<number | null>(null)

  // Fonction pour basculer l'état d'un élément
  const toggleItem = $((id: number): void => {
    // console.log('Toggling item:', id, 'Current activeId:', activeId.value)
    activeId.value = activeId.value === id ? null : id
  })

  // Fournir le contexte aux composants enfants
  useContextProvider(AccordionContext, activeId)

  return (
    <ul class={ul}>
      {data.map((item, index) => (
        <AccordionItem key={index} item={{ ...item, toggleItem }} />
      ))}
    </ul>
  )
})

// Composant Item de l'accordéon
const AccordionItem = component$<{ item: ItemProps }>(({ item }) => {
  const context = useContext(AccordionContext)
  useStylesScoped$(styles)
  // Calculer si cet élément est ouvert
  const isOpen = useComputed$(() => {
    const open = context.value === item.id
    // console.log(`Item ${item.id} isOpen:`, open) // Debug
    return open
  })

  return (
    <li class={liWrapper}>
      <button
        type="button"
        class={liHeader}
        onClick$={() => item.toggleItem(item.id)}
        aria-expanded={!!isOpen.value}
        aria-controls={`accordion-content-${item.id}`}
      >
        <h4
          class={li_content.txt1}
          style={assignInlineVars({ [myContent]: item.icon })}
        >
          {item.title}
        </h4>
        <i
          class={[
            "notificationBaseCss",
            isOpen.value ? "notificationOpenCss" : "notificationClosedCss",
          ]}
          aria-hidden="true"
        />
      </button>

      {/* Contenu conditionnel avec animation */}
      <div
        class="description"
        aria-hidden={!isOpen.value}
        style={`--show-description: ${isOpen.value ? "true" : "false"}`}
      >
        <p class={isOpen.value ? "openDescription" : "closeDescription"}>
          {item.description}
        </p>
      </div>
    </li>
  );
})

// Composant réutilisable générique pour d'autres cas d'usage
export const GenericAccordion = component$<{
  items: ItemProps[]
}>(({ items }) => {
  return (
    <ul class={ul}>
      {items.map(item => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </ul>
  )
})

export default Accordion
