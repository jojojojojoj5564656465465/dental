import { createBorderImageStyle, flex, fluid, globalStyleTag, media } from '@styles/utils'
import { color, container } from '@theme'
import { createVar, style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'

const overlaping = createVar({
  syntax: '<length>',
  inherits: false,
  initialValue: '250px',
})
export const sectionWrapper = style([
  {
    blockSize: 600,
    aspectRatio: '21/9s',
    color: 'red',
    backgroundImage: `linear-gradient(to bottom, ${color.variable.whiteBlue} ${overlaping}, ${color.variable.darkLight} ${overlaping})`,
    '@media': {
      [media.mobile]: {
        blockSize: '450px',
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
