import { styleVariants } from '@vanilla-extract/css'
import { color, fontFamily } from '@/styles/utils/themeNew.css.ts'
import { fontSize } from '../token'

export const textVariant = styleVariants({
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
  },
})
