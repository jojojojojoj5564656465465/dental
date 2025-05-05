// src/components/Layout-Component/Navbar3/index.tsx
import {
  $,
  component$,
  createContextId,
  type Signal,
  useContextProvider,
  useSignal,
  useStyles$,
} from '@builder.io/qwik'
import styles from './main.css?inline'
import { menu } from './menu'
import Navlink from './Navlink'
import Submenu from './submenu'

export const openMenuIndexPosition = createContextId<Signal<number>>('what-is-submmenu-open-context')

export default component$(() => {
  useStyles$(styles)
  const isOpen = useSignal<boolean>(true)
  const submenuPosition = useSignal<number>(-1)
  useContextProvider(openMenuIndexPosition, submenuPosition)
  const changePosition = $((indexNumber: number) => {
    submenuPosition.value = indexNumber
  })
  return (
    <nav class='bg-yellow-200 relative'>
      <div class='flex items-center justify-between p-4'>
        <h1 class='text-xl font-bold text-sky-600'>Navbar3</h1>
      </div>
      <ul
        class={[
          'flex flex-col md:flex-row gap-5 items-start transition-all duration-300 mx-auto',
          isOpen.value ? 'block' : 'hidden',
          'md:flex',
        ]}
      >
        {menu.map((item, index) =>
          item.type === 'link' ? (
            <Navlink key={index} {...item} />
          ) : (
            <Submenu key={index} changeTab={changePosition} idx={index} {...item} />
          ),
        )}
      </ul>
    </nav>
  )
})
