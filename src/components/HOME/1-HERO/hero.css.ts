import { flex, fluid } from '@styles/utils'
import { color, container, containerColor, fontSize, media } from '@theme'
import { style } from '@vanilla-extract/css'

export const wrapper = style([
  container.full,

  containerColor({ theme: 'darkBlueBanner' }),
  {
    height: 'min(40rem, 80svh)',
    minInlineSize: '100%',
    marginInline: 'auto',
    borderImage: 'linear-gradient(oklch(58.09% 0.1151 235.69 / 40%), oklch(97.44% 0.0134 240.95) / 20% ) fill 1',
    display: 'grid',
    placeItems: 'center',
  },
])
export const h3 = style({
  fontSize: fontSize.xs,
  display: 'inline',
  textTransform: 'uppercase',
  letterSpacing: '0.5rem',
  color: color.theme.background,
})

export const h1 = style({
  fontSize: fontSize['3xl'],
  marginInline: 'auto',
  textAlign: 'center',
  textWrap: ['balance', 'pretty'],
})
export const p = style({
  maxInlineSize: 'min(90%,60rem)',
  marginInline: 'auto',
  textAlign: 'center',
  textWrap: ['balance', 'pretty'],
  color: color.theme.text,
})

export const hr = style([{ height: 2, minInlineSize: '80%', backgroundColor: color.theme.divider }])

/**
 * MARK: BANNER
 */

//export const sectionWrapper = style([containerColor({ theme: 'darkBlueBanner' })])
export const bannerWrapper = style([
  container.large,
  flex({ direction: 'row', side: 4, wrap: true, space: 'evenly' }),
  {
    backgroundColor: color.theme.background,
    columnGap: '3rem',

    '@media': {
      [media.mobile]: {
        marginBlock: '3.5rem',
        flexDirection: 'column',
        gap: '1.4rem',
      },
    },
  },
])

/**
 * @description ok good
 */
export const banner__element = style({
  display: 'inline-grid',
  gridTemplateRows: 'repeat(2,1fr)',
  gridTemplateColumns: 'auto 1fr',
  columnGap: fluid(5, 20),

  marginInline: 'auto',
  '@media': {
    [media.md]: {
      marginInline: fluid(10, 20),
    },
  },
})
export const banner__element_icon = style({
  blockSize: '100%',
  minBlockSize: 35,
  minInlineSize: 35,
  marginBlock: 'auto',
  gridRow: '1 / -1',
  gridColumn: 'span 1',
})

export const banner_hr = style({
  width: 2.2,
  blockSize: 'max(50px,3vw)',
  marginBlock: 'auto',
  backgroundColor: 'whitesmoke',

  justifySelf: 'center',
  '@media': {
    [media.mobile]: {
      display: 'none',
    },
  },
})
export const banner_button = style({
  inlineSize: '100%',
  '@media': {
    [media.tablet]: {
      minInlineSize: '18rem',
      maxInlineSize: 'max-content',
      marginInline: 'auto',
      marginBlock: 20,
    },
    [media.md]: {
      marginInlineStart: 'auto',
    },
  },
})
