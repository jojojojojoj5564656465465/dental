// src/components/Layout-Component/Navbar3/index.tsx
import { component$, useSignal, useStyles$ } from '@builder.io/qwik'
import styles from './main.css?inline'
import { menu } from './menu'
import Navlink from './Navlink'
import Submenu from './submenu'

export default component$(() => {
  useStyles$(styles)
  const isOpen = useSignal(true)

  return (
    <nav class='bg-yellow-200'>
      <div class='flex items-center justify-between p-4'>
        <h1 class='text-xl font-bold'>Navbar3</h1>
      </div>
      <ul
        class={[
          'flex flex-col md:flex-row gap-5 items-start  transition-all duration-300 mx-auto',
          isOpen.value ? 'block' : 'hidden',
          'md:flex',
        ]}
      >
        {menu.map((item, index) =>
          item.type === 'link' ? <Navlink key={index} {...item} /> : <Submenu key={index} {...item} />,
        )}
      </ul>
    </nav>
  )
})
