import { color } from '@theme'

import { space } from '@styles/token'
import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { container, containerGrid, flex } from '@recipe'

export const cardsWrapper = style([
  containerGrid({ cols: 4, size: 'medium', background: false, gap: true }),
  {
    marginBlock: space.lg,
  },
])

export const CardStyle = styleVariants({
  wrapper: [
    container({ theme: 'whiteBg', hover: true, background: true }),
    flex({ direction: 'column', side: 1, gap: 'xxs' }),
    {
      padding: space.sm,
      //outline: color.variable.darkDark,
      cursor: 'pointer',
      borderRadius: 30,
      zIndex: 1,
      overflow: 'hidden',

      ':before': {
        position: 'absolute',
        content: '',
        backgroundColor: color.variable.accent,
        inlineSize: '100%',
        blockSize: '100%',
        maskImage: 'linear-gradient(to bottom, transparent 20%, black 100%)',
        left: 0,
        bottom: '-100%',

        transition: 'bottom 0.4s ease-out',
        zIndex: -1,
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

globalStyle(`${CardStyle.wrapper}:hover > ${CardStyle.icon} path`, {
  fill: color.theme.textHover,
})
