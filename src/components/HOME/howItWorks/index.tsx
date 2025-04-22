import { $, component$, useOnDocument, useSignal } from '@builder.io/qwik'

import { li_content, liHeader, liWrapper } from './content.css'

export interface ItemProps {
  title: string
  description: string
  icon: any
}

export default component$<ItemProps>(props => {
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
    <li onClick$={toOpen} class={liWrapper} role='button' aria-expanded={opening.value} tabIndex={0}>
      <div class={liHeader}>
        {/*<span class={li_content.ico}>{props.icon}</span>*/}
        <img class={li_content.ico} src={props.icon} alt='xxx' />
        <h4 class={li_content.txt1}>{props.title}</h4>
        <span class={opening.value ? li_content.notificationOpen : li_content.notification}> </span>
      </div>
      <p class={opening.value ? li_content.txt2Open : li_content.txt2}>{props.description}</p>
    </li>
  )
})
