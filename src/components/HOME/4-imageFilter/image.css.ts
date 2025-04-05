import { fluid } from '@styles/utils/utils'

import { color } from '@theme'
import { media } from '@styles/token'
import { containerColor } from '@styles/recipe/index.css.ts'
import { createVar, style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { container } from '@styles/variants/container.css'

const overlaping = createVar({
  syntax: '<length>',
  inherits: false,
  initialValue: '250px',
})
export const sectionWrapper = style([
  containerColor({ hover: false, theme: 'accent' }),
  {
    blockSize: 600,
    aspectRatio: '21/9s',

    backgroundImage: `linear-gradient(to bottom, ${color.variable.whiteBlue} ${overlaping}, ${color.variable.darkLight} ${overlaping})`,
    '@media': {
      [media.mobile]: {
        blockSize: '449px',
        vars: {
          [overlaping]: '180px',
        },
      },
    },
  },
])

export const wrapper = style([
  container.medium,
  {
    clipPath: 'inset(0 round 50px)',
    paddingBlock: fluid(40, 80),
    blockSize: calc.multiply(overlaping, 2),

    display: 'grid',
    placeItems: 'center',
    transition: 'border-image 4s ease-in-out 1s',
    backgroundAttachment: 'fixed',
    backgroundImage: 'url(/men.jpg)',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderImage:
      'linear-gradient(light-dark(oklch(58.09% 0.1151 235.69/70%),oklch(32.25% 0.0573 233.51 / 80%))) fill 1',
    zIndex: 2,
  },
])
