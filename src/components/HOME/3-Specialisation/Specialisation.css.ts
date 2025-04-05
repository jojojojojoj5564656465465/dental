import { color } from '@theme'

import { media, space } from '@styles/token'
import { fluid, globalStyleTag } from 'src/styles/utils/utils.ts'
import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { containerGrid, container } from '@recipe'

export const cardsWrapper = style([
  containerGrid({ cols: 4, size: 'small' }),
  {
    gap: fluid(16, 18),
    marginBlock: space.lg,
  },
])

export const CardStyle = styleVariants({
  wrapper: [
    container({ theme: 'blueLightBg', hover: false, background: false }),
    {
      display: 'grid',
      padding: 16,
      gap: '.5rem',
      outline: color.variable.darkDark,
      cursor: 'pointer',
      borderRadius: 30,
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden',
      fontSize: '1rem',
      border: `${color.theme.divider} 3px solid`,
      ':before': {
        position: 'absolute',
        content: '',
        backgroundColor: color.variable.accent,
        inlineSize: '100%',
        blockSize: '100%',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
        left: 0,
        bottom: '-100%',

        transition: 'bottom 0.4s ease-out',
        zIndex: -1,
      },
      '@media': {
        [media.tablet]: {
          //aspectRatio: '7/9',
        },
        [media.mobile]: {
          blockSize: 'calc(100svh / 4 - 50px)',
          // minBlockSize: '9rem',
        },
      },
      selectors: {
        '&:hover::before': {
          bottom: '0',
        },
      },
    },
  ],
  icon: {
    aspectRatio: 1,
    inlineSize: 'auto',
  },
})

globalStyle(`${CardStyle.wrapper}:hover > ${CardStyle.icon}`, {
  rotate: '40deg',
})

// globalStyleTag(CardStyle.wrapper, {
//   h3: {
//     color: color.theme.primary,
//     fontSize: 18,
//   },
//   '&:hover :is(h3, p)': { color: color.theme.textHover },
//   '&:active :is(h3, p)': { color: color.theme.textHover },
// })
globalStyle(`${CardStyle.wrapper}:hover > ${CardStyle.icon} path`, {
  fill: color.theme.textHover,
})
