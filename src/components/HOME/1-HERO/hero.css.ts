import { color, fontFamily } from '@theme'
import { fontSize, media, space } from '@styles/token'
import { fluid, ld } from 'src/styles/utils/utils.ts'

import { style } from '@vanilla-extract/css'
import { flex } from '@styles/recipe/index.css.ts'

import { container } from '@recipe'

export const wrapper = style([
  //container.small,
  container({ size: 'small' }),
  {
    borderImage: 'linear-gradient(oklch(58.09% 0.1151 235.69 / 40%), oklch(97.44% 0.0134 240.95) / 20% ) fill 1',
    display: 'grid',
    placeItems: 'center',
    gap: space.lg,
    paddingBlock: space.lg,
  },
])

export const bigTitle = style({
  fontSize: fontSize['4xl'],
  lineHeight: 1.2,
  color: color.theme.primary,
  fontWeight: 'bold',
  textWrap: ['balance', 'pretty'],
  fontFamily: fontFamily.exo,
  textAlign: 'center',
})

export const hr = style([{ height: 2, minInlineSize: '80%', backgroundColor: color.theme.divider }])

/**
 * MARK: BANNER
 */
export const bannerWrapper = style([
  container({ size: 'large' }),
  flex({ direction: 'row', side: 4, wrap: true, justifyContent: 'evenly' }),
  {
    //backgroundColor: color.theme.background,
    columnGap: '3rem',

    '@media': {
      [media.mobile]: {
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
  width: '.1rem',
  blockSize: '50px',
  //marginBlock: 'auto',
  backgroundColor: ld('whitesmoke', 'black'),

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
