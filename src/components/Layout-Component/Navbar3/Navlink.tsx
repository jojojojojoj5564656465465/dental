// src/components/Navbar/NavLink.tsx

import { component$, useStyles$, useStylesScoped$ } from '@builder.io/qwik'
import styles from './main.css?inline'
import type { A } from './menu'
export default component$<A>(props => {
  useStylesScoped$(styles)
  return (
    <li class='navlink'>
      <a class='cursor-pointer text-red-600 ' href={props.link}>
        {props.name}
      </a>
    </li>
  )
})
