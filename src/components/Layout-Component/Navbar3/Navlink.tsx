// src/components/Navbar/NavLink.tsx

import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './main.css?inline'
import type { A } from './menu'

export default component$<A>(props => {
  useStyles$(styles)
  return (
    <li class=' flex justify-center items-center group/nvl navlink navStyle flex hover:bg-sky-500 focus:bg-sky-500 active:bg-sky-500 cursor-pointer text-center md:w-max '>
      <a class={'group-hover/nvl:text-white mx-auto'} href={props.link}>
        {props.name}
      </a>
    </li>
  )
})
