import { colorTheme, containerGridCol, fluid, globalStyleTag } from '@styles/utils'
import { color, container, containerColor, media, space } from '@theme'
import { globalStyle, style, styleVariants } from '@vanilla-extract/css'

export const wrapper = style([container.small, containerColor({ theme: 'blueLightBg' })])
export const cardsWrapper = style([
  containerGridCol({ cols: 4, size: 'medium' }),
  {
    placeItems: 'center',
    gap: fluid(16, 25),
    color: color.theme.text,
    marginBlock: space.lg,
  },
])

export const CardStyle = styleVariants({
  wrapper: [
    colorTheme.whiteBg,
    {
      //maxInlineSize: 295,

      flexWrap: 'wrap',
      padding: space.xs,
      gap: space.sm,
      outline: color.variable.darkDark,
      cursor: 'pointer',
      borderRadius: 30,
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden',
      border: `${color.theme.divider} 3px solid`,
      ':before': {
        position: 'absolute',
        content: '',
        backgroundColor: color.variable.accent,
        inlineSize: '100%',
        blockSize: '100%',

        left: 0,
        bottom: '-100%',

        transition: 'bottom 0.4s ease-out',
        zIndex: -1,
      },
      '@media': {
        [media.tablet]: {
          aspectRatio: '1',
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
  rotate: '90deg',
})

globalStyleTag(CardStyle.wrapper, {
  h3: {
    color: color.theme.primary,
  },
  '&:hover :is(h3, p)': { color: color.theme.textHover },
  '&:active :is(h3, p)': { color: color.theme.textHover },
  p: {
    color: color.theme.text,
    textWrap: ['balance', 'pretty'],
  },
})
globalStyle(`${CardStyle.wrapper}:hover > ${CardStyle.icon} path`, {
  fill: color.theme.textHover,
})
