import { $, component$, useOnDocument, useSignal } from '@builder.io/qwik'
// Navbar.js
import * as s from './Navbar.css'
import MenuLinks from './menu.data'

const SVG = component$(() => {
  return (
    <svg class={s.icon} viewBox='0 0 540 540' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <title>Company Logo</title>
      <g clip-path='url(#clip0_104_5)'>
        <rect width='590' height='382' fill='#14975E' />
        <path d='M270.275 505.914L3.80879 319.879L537.638 321.171L270.275 505.914Z' fill='#14975E' />
        <path d='M113 229.101L139.205 199.207L283.002 338.515L256.796 368.409L113 229.101Z' fill='#F5F5F5' />
        <path d='M546.848 -29L579 2.24162L256.54 369L224.388 337.758L546.848 -29Z' fill='#F5F5F5' />
      </g>
      <defs>
        <clipPath id='clip0_104_5'>
          <rect width='540' height='540' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
})
export default component$(props => {
  const isMenuOpen = useSignal<boolean>(false)
  const toggleMenu = $(() => {
    isMenuOpen.value = !isMenuOpen.value
  })

  useOnDocument(
    'click',
    $(event => {
      if (isMenuOpen.value) {
        const target = event.target as HTMLElement
        if (target.closest('#nav-bar') === null) {
          isMenuOpen.value = false
        }
      }
    }),
  )

  return (
    <nav id='nav-bar' class={s.one.wrapper} aria-label='Main Navigation'>
      <a class={s.one.logo} href='/'>
        J.H <SVG />
      </a>
      <button
        class={s.buttonMobile.wrapper}
        type='button'
        onClick$={toggleMenu}
        aria-label='Toggle Menu'
        aria-expanded={isMenuOpen.value}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          stroke='currentColor'
          aria-hidden='true'
          class={s.buttonMobile.svg}
          viewBox='0 0 24 24'
          width='36'
          height='36'
        >
          <path d={!isMenuOpen.value ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18 18 6M6 6l12 12'} />
        </svg>
      </button>
      <div class={isMenuOpen.value ? s.menuState.open : s.menuState.close} aria-hidden={!isMenuOpen.value} role='menu'>
        {MenuLinks.map((el, index) => {
          return (
            <span class={s.menuState.link} key={index}>
              <a class={s.menuState.link} href={el.link}>
                {el.name}
              </a>
            </span>
          )
        })}
      </div>
    </nav>
  )
})
