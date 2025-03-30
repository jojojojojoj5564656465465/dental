import {
  assignVars,
  createGlobalTheme,
  createTheme,
  createThemeContract,
  createVar,
  globalLayer,
  globalStyle,
  style,
  styleVariants,
} from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import f from './fontFace.css'
import { fluid, ld } from './utils'
globalLayer('reset')
globalLayer('base')
globalLayer('custom')

const fontFamily = createGlobalTheme(':root', {
  dancingScript: `${f.dancingScript}, Times, serif`,
  exo: `${f.exo}, Times, serif`,
  numito: `${f.nunito}, Arial, sans-serif`,
})

/**
 * MARK: COLORS
 */
const variable = createGlobalTheme(':root', {
  darkLight: 'oklch(32.25% 0.0573 233.51)',
  darkDark: 'oklch(25.88% 0.037 240.95)',
  accent: 'oklch(58.09% 0.1151 235.69)',
  whiteBlue: 'oklch(97.44% 0.0134 240.95)',
  whiteToBlack: ld('oklch(97.44% 0.0134 240.95)', 'black'),
  blackToWhite: ld('black', 'oklch(97.44% 0.0134 240.95)'),
  textLight: 'oklch(53.36% 0.0445 230.26)',
  r: ld('orange', 'green'),
})
globalStyle('body', {
  backgroundColor: variable.whiteBlue,
})
const theme = createThemeContract({
  background: null,
  backgroundHover: null,
  primary: null,
  secondary: null,
  accent: null,
  text: null,
  textHover: null,
  divider: variable.darkDark,
})

const accent = createTheme(theme, {
  background: variable.accent,
  backgroundHover: variable.darkLight,
  primary: 'white',
  secondary: 'null',
  accent: variable.accent,
  text: 'white',
  textHover: variable.darkDark,
  divider: '#0E384C1A',
})
const darkBlueBanner = createTheme(theme, {
  background: 'light-dark(oklch(32.25% 0.0573 233.51),oklch(72.55% 0.0573 233.51))',
  backgroundHover: 'light-dark(oklch(72.55% 0.0573 233.51),oklch(32.25% 0.0573 233.51))',
  primary: 'white',
  secondary: 'null',
  accent: variable.accent,
  text: ld('white', 'black'),
  textHover: ld('black', 'white'),
  divider: '#0E384C1A',
})

const whiteBg = createTheme(theme, {
  background: 'light-dark(white,oklch(79.97% 0 0))',
  backgroundHover: variable.darkLight,
  primary: variable.darkLight,
  secondary: 'null',
  accent: variable.accent,
  text: 'oklch(53.36% 0.0445 230.26)',
  textHover: 'white',
  divider: '#0E384C1A',
})

const blueLightBg = createTheme(theme, {
  background: 'oklch(97.44% 0.0134 240.95)',
  backgroundHover: '#0e384c',
  primary: '#0e384c',
  secondary: 'null',
  accent: variable.accent,
  text: 'oklch(53.36% 0.0445 230.26)',
  textHover: 'white',
  divider: '#0E384C1A',
})

export const colorTheme = {
  accent,
  darkBlueBanner,
  whiteBg,
  blueLightBg,
  variable,
}
export const color = {
  variable,
  theme,
}
/**
 * MARK: SPACES
 */
const space = {
  xxxs: 'clamp(0.3125em, 0.3125em + 0dvw, 0.3125em)',
  xxs: 'clamp(0.5625em, 0.5408em + 0.1087dvw, 0.625em)',
  xs: 'clamp(0.875em, 0.8533em + 0.1087dvw, 0.9375em)',
  sm: 'clamp(1.125em, 1.0815em + 0.2174dvw, 1.25em)',
  md: 'clamp(1.6875em, 1.6223em + 0.3261dvw, 1.875em)',
  lg: 'clamp(2.25em, 1.6223em + 0.4348dvw, 2.5em)',
  xl: 'clamp(3.375em, 1.6223em + 0.6522dvw, 3.75em)',
  xxl: 'clamp(4.5em, 4.3261em + 0.8696dvw, 5em)',
  xxxl: 'clamp(6.75em, 6.4891em + 1.3043dvw, 7.5em)',
}
Object.freeze(space)

const fontSize = {
  cqi: 'clamp(0.60rem, .65cqi, .9cqi)',
  xs: 'clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem)',
  sm: 'clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem)',
  base: 'clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)',
  md: 'clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)',
  lg: 'clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem)',
  xl: 'clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem)',
  '2xl': 'clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)',
  '3xl': 'clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem)',
  '4xl': 'clamp(3.36rem, calc(2.87rem + 2.45vw), 4.77rem)',
  '5xl': 'clamp(4.03rem, calc(3.36rem + 3.36vw), 5.96rem)',
  '6xl': 'clamp(4.84rem, calc(3.93rem + 4.54vw), 7.45rem)',
}
Object.freeze(fontSize)

/// ancien md = 45rem
const media = {
  mobile: 'only screen and (orientation: portrait) and (max-width: 27rem)',
  tablet: 'only screen and (27rem <= width)',
  md: 'screen and (59rem <= width)',
  lg: 'screen  and (hover: hover) and (min-width: 73em)',
  xl: 'screen and (min-width: 80em)',
  '2xl': 'screen and (min-width: 110em)',
  dark: 'screen and (prefers-color-scheme: dark)',
} as const
Object.freeze(media)

/**
 * MARK: Container Rules
 */
const containerSize = {
  default: '60rem',
  small: '60rem',
  medium: '72rem',
  large: '90rem',
  xxl: '120rem',
  full: '100svw',
} as const

// This function takes a parameter x of type keyof typeof containerSize and returns a string
const maxInlineSizeFn = (x: keyof typeof containerSize): string => {
  // Return a string that calculates the minimum of three values:
  // 1. 100% minus twice the value of the parameter x from the containerSize object
  // 2. The value of the parameter x from the containerSize object
  // 3. 130rem

  return `min(calc(100% - clamp(0.75rem, 0.42rem + 1.7vw, 1.7rem) * 2), ${containerSize[x]}, 130rem)`
}

const defaultContainer = style({
  '@layer': {
    custom: {
      marginInline: 'auto',
      position: 'relative',
      boxSizing: 'border-box',
    },
  },
})

const container = styleVariants({
  default: [defaultContainer],
  small: [
    defaultContainer,
    {
      maxInlineSize: maxInlineSizeFn('small'),
    },
  ],
  medium: [
    defaultContainer,
    {
      maxInlineSize: maxInlineSizeFn('medium'),
    },
  ],
  large: [
    defaultContainer,
    {
      maxInlineSize: maxInlineSizeFn('large'),
    },
  ],
  xxl: [
    defaultContainer,
    {
      maxInlineSize: maxInlineSizeFn('xxl'),
    },
  ],
  full: {
    marginInline: 'auto',
    position: 'relative',
    boxSizing: 'border-box',
    maxInlineSize: 'none',
  },
})

globalStyle(`${container.default} > *`, {
  marginInline: 'auto',
  maxInlineSize: maxInlineSizeFn('default'),
})

const sizes = Object.keys(container).filter(key =>
  ['small', 'medium', 'large', 'xxl', 'full'].includes(key),
) as (keyof typeof container)[]

for (const size of sizes) {
  globalStyle(`${container.default} > ${container[size]}`, {
    maxInlineSize: maxInlineSizeFn(size),
  })
}

// Définition des variables avec @property
const spaceLrVar = createVar({
  syntax: '<length>',
  inherits: false,
  initialValue: '40px',
})

const spaceGapVar = createVar({
  syntax: '<length>',
  inherits: false,
  initialValue: '20px',
})

const gridWrapper = style({
  // Valeurs initiales des variables
  vars: {
    [spaceLrVar]: fluid(40, 80),
    [spaceGapVar]: fluid(20, 35),
  },
  gap: spaceGapVar,
})

const vars = createThemeContract({
  col: null,
})
const numberOfColumnTheme = style({
  vars: assignVars(vars, {
    col: '3',
  }),
  '@media': {
    [media.tablet]: {
      vars: assignVars(vars, {
        col: '6',
      }),
    },
    [media.md]: {
      vars: assignVars(vars, {
        col: '12',
      }),
    },
  },
})

const containerGrid = styleVariants(containerSize, size => [
  defaultContainer,
  gridWrapper,
  numberOfColumnTheme,
  {
    display: 'grid',
    gridTemplateColumns: `1fr repeat(${vars.col}, calc((min(100% - ${spaceLrVar}, ${size}) - (${vars.col} - 1) * ${spaceGapVar}) / ${vars.col})) 1fr`,
  },
])

const containerGridCol = recipe({
  base: {
    marginInline: 'auto',
    position: 'relative',
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: '1fr',
  },
  variants: {
    size: {
      default: { maxInlineSize: maxInlineSizeFn('default') },
      small: { maxInlineSize: maxInlineSizeFn('small') },
      medium: { maxInlineSize: maxInlineSizeFn('medium') },
      large: { maxInlineSize: maxInlineSizeFn('large') },
      xxl: { maxInlineSize: maxInlineSizeFn('xxl') },
      full: { maxInlineSize: 'none' },
    },
    cols: {
      2: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(2, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(2, 1fr)' },
        },
      },
      4: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(2, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(4, 1fr)' },
        },
      },
      6: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(3, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(6, 1fr)' },
        },
      },
      8: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(4, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(8, 1fr)' },
        },
      },
      12: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(6, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(12, 1fr)' },
        },
      },
      24: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(12, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(24, 1fr)' },
        },
      },
    },
  },
  defaultVariants: {
    size: 'small',
    cols: 12,
  },
})

// Global styles adaptés
globalStyle(`${containerGridCol({ size: 'default' })} > *`, {
  maxInlineSize: maxInlineSizeFn('default'),
})
const sizesContainerGridCol = Object.keys(containerSize).filter(key =>
  ['small', 'medium', 'large', 'xxl', 'full'].includes(key),
) as (keyof typeof containerSize)[]

for (const size of sizesContainerGridCol) {
  globalStyle(`${containerGridCol({ size: 'default' })} > ${containerGridCol({ size })}`, {
    maxInlineSize: maxInlineSizeFn(size),
  })
}
export { fontFamily, fontSize, space, media, container, containerGrid, containerGridCol }
