import { fluid } from '@styles/utils/utils'

import { color } from '@theme'
import { media } from '@styles/token'

import { createVar, style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { container } from '@recipe'

const overlaping = createVar({
  syntax: '<length>',
  inherits: false,
  initialValue: '250px',
})
export const overlay = style({
  backgroundImage: `linear-gradient(to bottom, ${color.variable.whiteBlue} ${overlaping}, ${color.variable.darkLight} ${overlaping})`,
  borderImageSlice: 'fill 1',
})
export const sectionWrapper = style([
  container({ hover: false, theme: 'accent' }),
  overlay,
  {
    blockSize: 600,
    aspectRatio: '21/9s',
    '@media': {
      [media.mobile]: {
        blockSize: '349px',
        vars: {
          [overlaping]: '0px',
        },
      },
      [media.tablet]: {
        blockSize: '449px',
        vars: {
          [overlaping]: '120px',
        },
      },
      [media.md]: {
        blockSize: '609px',
        vars: {
          [overlaping]: '250px',
        },
      },
    },
  },
])
export const menBG = createVar()
export const wrapper = style([
  container({ size: 'medium', background: false }),

  {
    clipPath: 'inset(0 round 50px)',
    paddingBlock: fluid(5, 40),
    blockSize: calc.multiply(overlaping, 1.5),
    backgroundImage: menBG,
    display: 'grid',
    placeItems: 'center !important',
    transition: 'border-image 4s ease-in-out 1s',
    backgroundAttachment: 'fixed',

    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    borderImage:
      'linear-gradient(light-dark(oklch(58.09% 0.1151 235.69/70%),oklch(32.25% 0.0573 233.51 / 80%))) fill 1',
    zIndex: 2,
    '@media': {
      [media.md]: {
        blockSize: calc.multiply(overlaping, 2),
      },
    },
  },
])
