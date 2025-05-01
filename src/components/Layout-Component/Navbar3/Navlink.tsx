// src/components/Navbar/NavLink.tsx

import { component$, useStyles$, useStylesScoped$ } from '@builder.io/qwik'
import styles from './main.css?inline'
import type { A } from './menu'
export default component$<A>(props => {
  useStylesScoped$(styles)
  return (
    <li class='navlink flex text-green-500 '>
      <a class='cursor-pointer ' href={props.link}>
        {props.name}
      </a>
    </li>
  )
})
