import { style } from '@vanilla-extract/css'
import { container } from '@theme'
import { createBorderImageStyle, fluid, globalStyleTag } from '@styles/utils'

export const wrapper = style([
  container.medium,
  {
    display: 'grid',
    placeItems: 'center',
    paddingBlock: fluid(40, 80),
    backgroundImage: 'url(/men.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat:'no-repeat',
    backgroundAttachment: 'fixed',
    minInlineSize: '100%',
    maxWidth: '120rem',
    height: 'min(40rem, 80svh)',
    marginInline: 'auto',
    color: 'white',
    borderImage: createBorderImageStyle(
      200,
      'oklch(42.65% 0.0909 250.94 / 1.72%)',
      'oklch(57.06% 0.1316 250.94 / 95.72%)',
      'oklch(66.18% 0.1504 250.94 / 98.72%)',
    ),
    transition: 'border-image 4s ease-in-out 1s',

    ':hover': {
      borderImage: createBorderImageStyle(
        190,
        'oklch(42.65% 0.0909 250.94 / 1.72%)',
        'oklch(57.06% 0.1316 250.94 / 95.72%)',
        'oklch(66.18% 0.1504 250.94 / 98.72%)',
      ),
    },
  },
])

globalStyleTag(wrapper, {
  p: {
    color: 'red',
  },
})
