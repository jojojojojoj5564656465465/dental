import { $, component$, useOnDocument, useSignal } from '@builder.io/qwik'

import { li_content, liHeader, liWrapper, ul } from './content.css'

interface ItemProps {
  title: string
  description: string
  icon: string
}

const data: ItemProps[] = [
  {
    title: 'book an appointment',
    icon: 'src/assets/icons/icon-how-it-work-1.svg',
    description:
      'The goal of our clinic is to provide friendly, caring dentistry and\n' +
      'the highest level of general, cosmetic, ents.',
  },
  {
    title: 'Expert Care',
    icon: 'src/assets/icons/icon-how-it-work-2.svg',
    description: 'hhhhhhhhhhgfdlkfdmlk',
  },
  {
    title: 'expert Care',
    icon: 'src/assets/icons/icon-how-it-work-3.svg',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo velit illo atque voluptates ipsam iure cupiditate reprehenderit sint consequatur consequuntur totam eos sapiente nihil consectetur',
  },
]

const LI = component$<ItemProps>(props => {
  const opening = useSignal<boolean>(false)

  const toOpen = $(() => {
    opening.value = !opening.value
  })

  useOnDocument(
    'keydown',
    $(event => {
      if (event.key === 'Escape') {
        opening.value = false
      }
    }),
  )
  return (
    <li onClick$={toOpen} class={liWrapper}>
      <div class={liHeader}>
        {/*<span class={li_content.ico}>{props.icon}</span>*/}
        <img class={li_content.ico} src={props.icon} alt='dd' />
        <h4 class={li_content.txt1}>{props.title}</h4>
        <span class={opening.value ? li_content.notificationOpen : li_content.notification}> </span>
      </div>
      <p class={opening.value ? li_content.txt2Open : li_content.txt2}>{props.description}</p>
    </li>
  )
})

export default component$(() => {
  return (
    <ul class={ul}>
      {data.map((element, i) => (
        <LI key={i} title={element.title} icon={element.icon} description={element.description} />
      ))}
    </ul>
  )
})
