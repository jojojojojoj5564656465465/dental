import { fluid } from '@styles/utils'
import { style } from '@vanilla-extract/css'
import { color, colorTheme, container, fontFamily, fontSize, media } from 'src/styles/utils/theme.css.ts'

export const wrapper = style([
  container.full,
  colorTheme.darkBlueBanner,
  {
    borderTopWidth: fluid(6, 10),
    borderTopStyle: 'double',
    borderTopColor: 'oklch(66% 0 313.41)',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3rem',
    marginTop: '200px', //// trouver une solution
    '@media': {
      [media.md]: {
        gridTemplateColumns: 'repeat(4,1fr)',
        justifyContent: 'stretch',
      },
    },
  },
])

export const slogan = style({
  fontFamily: fontFamily.dancingScript,
  fontSize: fontSize['3xl'],
  gridColumn: 'span 2',
})

export const itemWrapper = style([
  {
    display: 'flex',
    gap: '0.5rem',
    cursor: 'pointer',
    color: color.theme.text,
  },
])

export const item = style({
  padding: 5,
  backgroundColor: color.theme.accent,
  selectors: {
    [`${itemWrapper}:hover > &`]: {
      backgroundColor: color.theme.backgroundHover,
    },
  },
})

export const text = style({
  verticalAlign: 'middle',
})
