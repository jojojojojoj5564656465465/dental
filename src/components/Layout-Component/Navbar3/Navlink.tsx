// src/components/Navbar/NavLink.tsx

import { component$, useStylesScoped$ } from '@builder.io/qwik'
import type { A } from './menu'

export default component$<A>(props => {
  return (
    <li class='  text-green-300 yo'>
      <a href={props.link}>{props.name}</a>
    </li>
  )
})
