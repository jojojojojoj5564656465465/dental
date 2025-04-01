import { color, fontFamily, fontSize } from '@theme'
import { fallbackVar, globalStyle, styleVariants } from '@vanilla-extract/css'

const textStyle = styleVariants({
  preTitle: {
    lineHeight: '21px',
    fontSize: fontSize.xs,
    letterSpacing: '2.8px',
    color: color.theme.accent,
    textTransform: 'uppercase',
    ':before': {
      content: '+ ',
    },
  },
  title: {
    fontWeight: 'bold',
    fontSize: fontSize['xl'],
    color: color.theme.primary,
    lineHeight: '52px',
    textWrap: ['balance', 'pretty'],
    fontFamily: fontFamily.exo,
  },
  highLight: { lineHeight: '30px', fontWeight: '700', fontSize: fontSize['base'], color: color.theme.primary },
  text: {
    lineHeight: '28px',
    fontSize: fontSize['sm'],
    color: color.theme.text,
    fontFamily: 'Poppins',
    ':selection': {
      backgroundColor: color.theme.accent,
    },
  },
})

globalStyle('p', {
  '@layer': {
    custom: {
      lineHeight: '28px',
      fontSize: fontSize['base'],
      fontWeight: '400',
      color: fallbackVar(color.theme.text, '#527282'),
      fontFamily: 'Poppins',
    },
  },
})

export { textStyle }
