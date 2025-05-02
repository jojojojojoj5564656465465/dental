import { component$ } from '@builder.io/qwik'
import { menu } from './menu'
import Navlink from './Navlink'
import Submenu from './submenu'

export default component$(() => {
  return (
    <div>
      <h1>Navbar3</h1>
      <ul class='flex gap-5 md:flex-row flex-col'>
        {menu.map((item, index) => {
          switch (item.type) {
            case 'link':
              return <Navlink key={index} {...item} />
            case 'submenu':
              return <Submenu key={index} {...item} />
            default:
              return null
          }
        })}
      </ul>
    </div>
  )
})
