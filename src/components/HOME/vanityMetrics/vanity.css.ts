import { colorTheme, containerGrid } from '@styles/utils'
import { color, fontSize, media, space } from '@theme'
import { createVar, fallbackVar, globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'

export const wrapper = style([
  colorTheme.whiteBg,
  containerGrid.medium,
  {
    marginInline: 'auto',
    gap: '1.5rem',
    backgroundColor: color.theme.background,
  },
])

export const Card = style({
  color: fallbackVar(color.theme.primary, 'black'),
  gridColumnEnd: '-2',
  gridColumnStart: '2',

  '@media': {
    'only screen and (27rem <= width < 59rem)': {
      gridColumnStart: 'auto',
      gridColumnEnd: 'span 3',
      ':first-of-type': { gridColumnStart: '2' },
      selectors: {
        '&:nth-of-type(odd)': {
          gridColumnStart: '2',
        },
      },
    },
    [media.md]: {
      gridColumnStart: 'auto',
      gridColumnEnd: 'span 3',

      ':first-of-type': { gridColumnStart: '2' },
    },
  },
})
export const Card_content = styleVariants({
  title: {
    fontSize: fontSize['2xl'],
  },
  subtitle: { fontSize: fontSize.md },
  hr: {
    blockSize: 4,
    marginBlock: space.sm,
    backgroundColor: color.theme.divider,
  },
  text: { color: color.theme.text },
})

//globalStyle(`${wrapper} > ${Card}:first-of-type`, { backgroundColor: 'red' })
