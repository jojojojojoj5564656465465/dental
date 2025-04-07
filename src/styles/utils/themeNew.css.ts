import {createGlobalTheme, createTheme, createThemeContract, globalStyle} from '@vanilla-extract/css'

import f from './fontFace.css'
import {ld} from './utils'

export const fontFamily = createGlobalTheme(':root', {
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
export const theme = createThemeContract({
  background: null,
  backgroundHover: null,
  primary: null,
  secondary: null,
  accent: null,
  text: null,
  textHover: null,
  divider: null,
})
const accent = createTheme(theme, {
  background: variable.accent,
  backgroundHover: variable.darkLight,
  primary: 'white',
  secondary: 'null',
  accent: variable.darkDark,
  text: 'white',
  textHover: variable.darkDark,
  divider: '#0E384C1A',
})
const darkBlueBanner = createTheme(theme, {
  background: 'light-dark(oklch(32.25% 0.0573 233.51),oklch(72.55% 0.0573 233.51))',
  backgroundHover: 'light-dark(oklch(72.55% 0.0573 233.51),oklch(32.25% 0.0573 233.51))',
  primary: 'light-dark(white,oklch(32.25% 0.0573 233.51))',
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
  text: variable.textLight,
  textHover: 'white',
  divider: '#0E384C1A',
})

const blueLightBg = createTheme(theme, {
  background: 'light-dark(oklch(97.44% 0.0134 240.95),oklch(0.69 0.0345 247.76))',
  backgroundHover: '#0e384c',
  primary: '#0e384c',
  secondary: 'null',
  accent: variable.accent,
  text: ld('oklch(53.36% 0.0445 230.26)', 'white'),
  textHover: 'white',
  divider: '#0E384C1A',
})

export const colorTheme = {
  accent,
  darkBlueBanner,
  whiteBg,
  blueLightBg,
} as const

export const color = {
  variable,
  theme,
} as const

//export { fontFamily, fontSize, space, media, container, containerGrid, containerGridCol }
