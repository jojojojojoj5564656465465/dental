import { style, globalStyle, createContainer, createGlobalVar, assignVars, createVar } from '@vanilla-extract/css'
import { fontFamily, color, fontSize, space, media, container } from '@theme'
import { boxShadowGenerator, globalStyleTag, ld, fluid, flex, hover } from '@styles/utils'
import { calc } from '@vanilla-extract/css-utils'
export const wrapper = style([
  container.full,
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
})

export const h1 = style({
  fontSize: fontSize['3xl'],
  textWrap: 'balance',
  marginInline: 'auto',
  textAlign: 'center',
})
export const p = style({
  maxInlineSize: 'min(90%,60rem)',
  textWrap: 'balance',
  marginInline: 'auto',
  textAlign: 'center',
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
      [media.tablet.portrait]: {
        gridTemplateColumns: 'minmax(20rem, 1fr) auto minmax(20rem, 1fr)',
      },
      [media.tablet.landscape]: {
        gridTemplateColumns: 'minmax(20rem, 1fr) auto minmax(20rem, 1fr) 14rem',
      },
      [media.mobile.landscape]: {
        gridTemplateColumns: 'minmax(20rem, 1fr) auto minmax(20rem, 1fr)',
      },
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
    [media.mobile.portrait]: {
      display: 'none',
    },
  },
})
export const banner_button = style({
  inlineSize: '100%',
  // paddingInline: '5rem',
  marginBlock: 20,
  '@media': {
    [media.mobile.landscape]: {
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
const heightButton = createGlobalVar('height', {
  syntax: '<length>',
  inherits: false,
  initialValue: '65px',
})

/**
 * MARK: BUTTON
 */
const buttonContainer = createContainer()

export const buttonCallToAction = style({
  containerName: buttonContainer,
  containerType: 'inline-size',
  minInlineSize: 'min(90%, 16rem)', // ou une autre valeur appropriée
  height: heightButton, // ou une autre valeur appropriée
  borderRadius: 90,
  backgroundColor: color.blue.light,
  borderColor: 'oklch(58.09% 0.1151 235.69 / 55%)',
  borderWidth: 4,
  borderStyle: 'solid',
  fontSize: fontSize.md,
  cursor: 'pointer',

  marginInline: 'auto',
  paddingInline: '1.5rem 0.08rem',
  verticalAlign: 'center',
  alignItems: 'center',
  color: 'black',
  display: 'flex',
  justifyContent: 'space-between',
  overflow: 'hidden',
  zIndex: 1,
  '::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: '-100%',
    inlineSize: '100%',
    blockSize: '100%',
    backgroundColor: color.blue.dark,
    transition: 'left 0.4s ease',
    zIndex: -1,
    borderRadius: 90,
  },
  selectors: {
    '&:hover::before': {
      left: '0',
    },
  },
  ':hover': {
    backgroundColor: color.blue.light,
    color: 'white',
  },
  '@container': {
    [`${buttonContainer} (width < 11rem)`]: {
      justifyContent: 'center',
      display: 'grid',
      placeItems: 'center',
      backgroundColor: 'red',
    },
  },
})

const sizeFontSize = createVar({
  inherits: true,
  syntax: '<length>',
  initialValue: '1.6rem',
})
export const buttonCallToAction_icone = style({
  '@container': {
    [`${buttonContainer} (width < 11rem)`]: {
      display: 'none',
    },
  },
  '@media': {
    [media.md]: {
      vars: {
        [sizeFontSize]: '2.5rem',
      },
    },
  },
  color: color.blue.dark,
  backgroundColor: color.blue.accent,
  borderRadius: 80,
  minInlineSize: calc.subtract(heightButton, '10px'),
  height: calc.subtract(heightButton, '10px'),
  aspectRatio: 1,
  display: 'inline-grid',
  placeItems: 'center',
  marginInlineStart: fluid(5, 10),
  fontSize: sizeFontSize,
  transition: 'transform 0.2s ease',
  transform: 'rotate(25deg)',
  selectors: {
    [`${buttonCallToAction}:hover > &`]: {
      color: 'white',
      backgroundColor: color.blue.dark,
      transform: 'rotate(45deg)',
    },
  },
})
globalStyleTag(buttonCallToAction, {
  a: {
    textDecoration: 'none',
  },
})
