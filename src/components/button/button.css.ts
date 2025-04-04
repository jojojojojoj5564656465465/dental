import { color, fontSize } from '@theme'
import { containerColor } from '@styles/recipe'
import { media } from '@styles/token'
import { fluid, globalStyleTag } from 'src/styles/utils/utils.ts'
import { createContainer, createGlobalVar, createVar, style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'

const heightButton = createGlobalVar('height', {
  syntax: '<length>',
  inherits: false,
  initialValue: '65px',
})

export const radius = createVar({
  syntax: '<length>',
  inherits: false,
  initialValue: '80px',
})

/**
 * MARK: BUTTON
 */
const buttonContainer = createContainer()

export const buttonCallToAction = style([
  containerColor({ theme: 'accent', hover: true }),
  {
    '@container': {
      [`${buttonContainer} (width < 11rem)`]: {
        display: 'grid',
        justifyContent: 'center',
        placeItems: 'center',
        backgroundColor: color.theme.background,
      },
    },
    '::before': {
      blockSize: heightButton,
      inlineSize: '101%',
      position: 'absolute',
      zIndex: '-10',
      top: '0%',
      left: '-111%',
      borderRadius: `0 ${radius} ${radius} 0`,
      transition: 'left 0.5s 0.1s ease',
      backgroundColor: color.theme.primary,
      content: '',
    },
    fontSize: fontSize.md,
    height: heightButton,
    minInlineSize: 'min(90%, 16rem)',
    marginInline: 'auto',
    paddingInline: '1.5rem 0.08rem',
    position: 'relative',
    zIndex: '10',
    borderWidth: 4,
    borderStyle: 'solid',
    borderRadius: radius,
    borderColor: 'oklch(58.09% 0.1151 235.69 / 55%)',
    display: 'flex',
    isolation: 'isolate',
    alignItems: 'center',
    justifyContent: 'space-between',

    cursor: 'pointer', // ou une autre valeur appropriée
    overflow: 'hidden',
    verticalAlign: 'center',
    color: color.theme.text,
    selectors: {
      '&:hover::before': {
        left: 0,
      },
    },
    ':hover': {
      zIndex: '2',
      //  color: color.theme.textHover,
    },
    containerName: buttonContainer,
    containerType: 'inline-size',
  },
])

const sizeFontSize = createVar({
  inherits: true,
  syntax: '<length>',
  initialValue: '1.6rem',
})

export const buttonCallToAction_icon = style({
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
  height: calc.subtract(heightButton, '10px'),
  minInlineSize: calc.subtract(heightButton, '10px'),
  marginInlineStart: fluid(5, 10),
  borderRadius: 80,
  aspectRatio: 1,
  display: 'inline-grid',
  placeItems: 'center',
  transform: 'rotate(25deg)',
  fontSize: sizeFontSize,
  transition: 'transform 0.2s ease',
  backgroundColor: color.theme.background,
  color: color.theme.textHover,
  selectors: {
    [`${buttonCallToAction}:hover > &`]: {
      transform: 'rotate(45deg)',
      backgroundColor: color.theme.primary,
      color: color.theme.textHover,
    },
  },
})
globalStyleTag(buttonCallToAction, {
  a: {
    textDecoration: 'none',
  },
})
