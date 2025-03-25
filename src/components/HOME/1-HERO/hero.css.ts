import { createContainer, createGlobalVar, createVar, style } from '@vanilla-extract/css'
import { color, container, fontSize, media, dark, c, light } from '@theme'
import { fluid, globalStyleTag } from '@styles/utils'
import { calc } from '@vanilla-extract/css-utils'

export const wrapper = style([
  container.full,
  light,
  {
    borderImage: 'linear-gradient(oklch(58.09% 0.1151 235.69 / 40%), oklch(97.44% 0.0134 240.95) / 20% ) fill 1',
    display: 'grid',
    minInlineSize: '100%',
    placeItems: 'center',
    height: 'min(40rem, 80svh)',
    marginInline: 'auto',
    color: 'white',
  },
])
export const h3 = style({
  textTransform: 'uppercase',
  fontSize: fontSize.xs,
  color: c.background,
  letterSpacing: '0.5rem',
})

export const h1 = style({
  fontSize: fontSize['3xl'],
  textWrap: ['balance', 'pretty'],
  marginInline: 'auto',
  textAlign: 'center',
  color: c.text,
})
export const p = style({
  maxInlineSize: 'min(90%,60rem)',
  textWrap: ['balance', 'pretty'],
  marginInline: 'auto',
  textAlign: 'center',
  color: color.ld.textLight,
})

export const hr = style([{ minInlineSize: '80%', height: 2, backgroundColor: color.divider.dark }])

/**
 * MARK:BANNER
 */

export const bannerWrapper = style([
  container.full,
  {
    display: 'grid',
    gridTemplateColumns: 'minmax(22rem, 1fr)',
    alignItems: 'center',
    '@media': {
      [media.tablet]: {
        gridTemplateColumns: 'minmax(20rem, 1fr) auto minmax(20rem, 1fr)',
      },
      // [media.mobile.landscape]: {
      //   gridTemplateColumns: 'minmax(20rem, 1fr) auto minmax(20rem, 1fr)',
      // },
      [media.md]: {
        gridTemplateColumns: '30rem 5px 30rem 1fr',
      },
    },
    backgroundColor: color.blue.dark,
  },
])
export const banner__element = style({
  display: 'inline-grid',
  backgroundColor: color.blue.dark,
  gridTemplateColumns: 'auto 1fr',
  gridTemplateRows: 'repeat(2,1fr)',
  marginInline: fluid(10, 20),
  columnGap: fluid(5, 20),
})
export const banner__element_icon = style({
  gridRow: '1 / -1',
  gridColumn: 'span 1',
  blockSize: '100%',

  marginBlock: 'auto',
  minInlineSize: 35,
  minBlockSize: 35,
})
globalStyleTag(banner__element, {
  p: { gridColumn: '2 / 3' },
})

export const banner_hr = style({
  height: '4rem',
  width: 1.6,
  backgroundColor: 'whitesmoke',
  marginBlock: 'auto',
  '@media': {
    [media.mobile]: {
      display: 'none',
    },
  },
})
export const banner_button = style({
  inlineSize: '100%',
  // paddingInline: '5rem',
  marginBlock: 20,
  '@media': {
    [media.tablet]: {
      gridColumn: '1 / -1',
      marginBlock: 10,
      marginInline: 'auto',
      minInlineSize: '18rem',
    },
    [media.md]: {
      gridColumn: 'span 1',
    },
  },
})
