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

  const openSubMenu = useSignal<boolean>(false)

  const toggleSubMenu = $(() => {
    openSubMenu.value = !openSubMenu.value
  })
  useStyles$(styles)

  return (
    <div class={['submenu flex flex-col']}>
      <button
        type={'button'}
        onclick$={toggleSubMenu}
        class={['submenu_name cursor-pointer', openSubMenu.value ? 'text-green-500' : 'text-red-600']}
      >
        {props.name}
      </button>
      <ul class={['submenu_navlink gap-y-6', openSubMenu.value ? 'open' : 'close']}>
        {props.Submenu.map((item, index) => (
          <Navlink key={index} {...item} />
        ))}
      </ul>
    </div>
  )
})
