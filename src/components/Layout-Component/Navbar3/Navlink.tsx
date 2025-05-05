// src/components/Navbar/NavLink.tsx

import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './main.css?inline'
import type { A } from './menu'
export default component$<A>(props => {
  useStyles$(styles)
  return (
    <li class='navlink navStyle flex'>
      <a href={props.link}>{props.name}</a>
    </li>
  )
})
