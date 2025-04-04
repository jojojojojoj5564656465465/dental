import { recipe } from '@vanilla-extract/recipes'
import { fontFamily, fontSize, theme } from '../utils/theme.css'
import { fallbackVar } from '@vanilla-extract/css'

export const textRecipe = recipe({
  base: {
    textWrap: ['balance', 'pretty'],
  },
  variants: {
    font: {
      preTitle: {
        lineHeight: '21px',
        fontSize: fontSize.xs,
        letterSpacing: '2.8px',
        color: theme.text,
        textTransform: 'uppercase',
        ':before': {
          content: '+ ',
        },
      },
      title: {
        fontWeight: 'bold',
        fontSize: fontSize['xl'],
        color: theme.primary,
        lineHeight: '52px',
        textWrap: ['balance', 'pretty'],
        fontFamily: fontFamily.exo,
      },
      highLight: {
        lineHeight: '30px',
        fontWeight: '700',
        fontSize: fontSize['base'],
        color: theme.primary,
      },
      text: {
        lineHeight: '28px',
        fontSize: fontSize['sm'],
        color: theme.text,
        fontFamily: 'Poppins',
      },
    },
    hover: {
      true: {
        ':hover': {
          color: fallbackVar(theme.textHover, theme.text),
        },
      },
    },
    hoverSection: {
      true: {
        selectors: {
          'section:has(&):hover > &': {
            color: fallbackVar(theme.textHover, theme.text),
          },
          'section:has(&):active > &': {
            color: fallbackVar(theme.textHover, theme.text),
          },
        },
      },
    },
    hoverDiv: {
      true: {
        selectors: {
          'div:has(&):hover > &': {
            color: fallbackVar(theme.textHover, theme.text),
          },
          'div:has(&):active > &': {
            color: fallbackVar(theme.textHover, theme.text),
          },
        },
      },
    },
    textAlign: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },
    marginInline: {
      true: {
        marginInline: 'auto',
      },
    },
  },
  defaultVariants: {
    font: 'text',
    marginInline: false,
    textAlign: 'left',
  },
})
