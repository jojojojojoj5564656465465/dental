// src/components/Navbar3/submenu.tsx
import { $, component$, useSignal, useStyles$ } from '@builder.io/qwik'
import * as v from 'valibot'
import styles from './main.css?inline'
import { type SubMenuB } from './menu'
import Navlink from './Navlink'

const ObjectSchema = v.object({
  type: v.literal('submenu'),
  name: v.string(),
  Submenu: v.array(
    v.object({
      type: v.literal('link'),
      name: v.string(),
      link: v.string(),
    }),
  ),
})

export default component$<SubMenuB>(props => {
  v.parse(ObjectSchema, props)

  const openSubMenu = useSignal<boolean>(true)

  const toggleSubMenu = $(() => {
    openSubMenu.value = !openSubMenu.value
  })
  useStyles$(styles)

  return (
    <div class={['submenu flex flex-col cursor-pointer hover:text-orange-900']}>
      <button
        type={'button'}
        onclick$={toggleSubMenu}
        class={['submenu_name cursor-pointer', openSubMenu.value ? 'text-green-500' : 'text-red-600']}
      >
        {props.name}
      </button>
      <ul class={['submenu_navlink gap-6 group', openSubMenu.value ? 'open' : 'close'].join(' ')}>
        {props.Submenu.map((item, index) => (
          <Navlink key={index} {...item} />
        ))}
      </ul>
    </div>
  )
})
