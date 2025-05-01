// src/components/Navbar3/submenu.tsx
import { $, component$, useSignal, useStylesScoped$ } from '@builder.io/qwik'
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

  const openSubMenu = useSignal<number | null>(null)

  const toggleSubMenu = $((index: number) => {
    openSubMenu.value = openSubMenu.value === index ? null : index
  })
  useStylesScoped$(styles)
  return (
    <div class='submenu'>
      <span class='elie'>{props.name}</span>
      <ul class='yo'>
        {props.Submenu.map((item, index) => (
          <Navlink key={index} {...item} />
        ))}
      </ul>
    </div>
  )
})
