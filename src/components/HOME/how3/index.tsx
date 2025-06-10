import { $, component$, useStore } from '@builder.io/qwik'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { li_content, liHeader, liWrapper, myContent, ul } from './content.css'

export interface ItemProps {
  title: string
  description: string
  icon: string
}

export default component$(() => {
  const data = [
    {
      title: 'Prendre rendez-vous',
      icon: 'url(/src/assets/icons/icon-how-it-work-1.svg)',
      description:
        'Prenez rendez-vous facilement en ligne ou par téléphone. Notre équipe vous proposera un créneau adapté à votre emploi du temps.',
    },
    {
      title: 'Tiers Payant',
      icon: 'url(/src/assets/icons/icon-how-it-work-2.svg)',
      description: 'Bénéficiez du tiers payant pour la plupart des soins. Aucun débours au cabinet.',
    },
    {
      title: 'Soins experts',
      icon: 'url(/src/assets/icons/icon-how-it-work-3.svg)',
      description: 'Recevez des soins dentaires experts dans un environnement moderne et accueillant.',
    },
  ]

  const openItems = useStore<Record<number, boolean>>({})

  const toggleItem = $((index: number) => {
    if (openItems[index]) {
      delete openItems[index]
    } else {
      Object.keys(openItems).forEach(key => {
        delete openItems[parseInt(key)]
      })
      openItems[index] = true
    }
  })

  return (
    <ul class={ul}>
      {data.map((item, index) => {
        const isOpen = !!openItems[index]
        return (
          <li key={`item-${index}`} class={liWrapper}>
            <button
              type='button'
              onClick$={() => toggleItem(index)}
              class={liHeader}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                padding: 0,
                textAlign: 'left',
                cursor: 'pointer',
              }}
              aria-expanded={isOpen}
            >
              <h4 class={li_content.txt1} style={assignInlineVars({ [myContent]: item.icon })}>
                {item.title}
              </h4>
              <span class={isOpen ? li_content.notificationOpen : li_content.notification} />
            </button>
            <p class={isOpen ? li_content.txt2Open : li_content.txt2}>{item.description}</p>
          </li>
        )
      })}
    </ul>
  )
})
