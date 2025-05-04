// src/components/Navbar3/submenu.tsx
import { $, component$, useComputed$, useContext, useOn, useSignal, useStyles$ } from '@builder.io/qwik'
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
  const ctx = useContext(openMenuIndexPosition)

  const openCompute = useComputed$(() => props.idx === ctx.value)
  const openANDopenCompute = useComputed$(() => openCompute.value === openSubMenu.value)

  const toggleSubMenu = $(() => {
    openSubMenu.value = !openSubMenu.value
  })
  useStyles$(styles)
  useOn('mouseleave', toggleSubMenu)
  return (
    <div class={['submenu flex flex-col']}>
      <button
        type='button'
        aria-expanded={openCompute.value}
        aria-controls={`submenu-list-${props.idx}`}
        onclick$={[toggleSubMenu, $(() => props.changeTab(props.idx))]}
        onMouseEnter$={[$(() => (openSubMenu.value = true)), $(() => props.changeTab(props.idx))]}
        // onMouseLeave$={[$(() => (openSubMenu.value = false)), $(() => props.changeTab(props.idx))]}

        //onMouseEnter$={() => (ctx.value = props.idx)}
        //onMouseLeave$={() => (ctx.value = null)}
        class={[
          'submenu_name cursor-pointer !text-xl border border-2 border-black',
          openCompute.value ? 'text-green-500' : 'text-red-600 ',
        ]}
      >
        {props.name} {openCompute.value ? 'true▼' : 'false▶'}
        {openANDopenCompute.value ? 'trueDOUBLE' : 'false'}
      </button>
      <ul
        id={`submenu-list-${props.idx}`}
        class={[
          'submenu_navlink gap-y-1 flex-col',
          openCompute.value ? 'flex' : '!hidden',
          openSubMenu.value ? 'flex' : 'hidden',
        ]}
      >
        {props.Submenu.map((item, index) => (
          <Navlink key={index} {...item} />
        ))}
      </ul>
    </div>
  )
})
