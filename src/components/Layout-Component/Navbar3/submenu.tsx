// src/components/Navbar3/submenu.tsx
import { $, component$, type Signal, useContext, useSignal, useStyles$ } from '@builder.io/qwik'
import * as v from 'valibot'
import { openMenuIndexPosition } from './index'
import styles from './main.css?inline'
import { type SubMenuB } from './menu'
import Navlink from './Navlink'

const ObjectSchema = v.object({
  idx: v.number(),
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
type Extra = {
  idx: number
  changeTab: (index: number) => void
}

export default component$<SubMenuB & Extra>(props => {
  v.parse(ObjectSchema, props)

  const openSubMenu = useSignal<boolean>(false)
  const theme = useContext(openMenuIndexPosition)

  const toggleSubMenu = $(() => {
    openSubMenu.value = !openSubMenu.value
  })
  useStyles$(styles)

  return (
    <div class={['submenu flex flex-col']}>
      <button
        type={'button'}
        onclick$={[toggleSubMenu, $(() => props.changeTab(props.idx))]}
        onMouseEnter$={toggleSubMenu}
        onMouseLeave$={toggleSubMenu}
        class={['submenu_name cursor-pointer text-xl!', openSubMenu.value ? 'text-green-500' : 'text-red-600 ']}
      >
        {props.name} {props.idx}
      </button>
      <ul class={['submenu_navlink gap-y-1 flex-col', openSubMenu.value ? 'flex' : 'hidden']}>
        {props.Submenu.map((item, index) => (
          <Navlink key={index} {...item} />
        ))}
      </ul>
    </div>
  )
})
