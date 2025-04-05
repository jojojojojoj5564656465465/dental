import { recipe } from '@vanilla-extract/recipes'
import { fontFamily, color } from '@styles/utils/themeNew.css.ts'
import { fontSize } from '@styles/token'

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
        color: color.theme.accent,
        textTransform: 'uppercase',
        ':before': {
          content: '+ ',
        },
      },
      title: {
        fontWeight: 'bold',
        fontSize: fontSize.xl,
        color: color.theme.primary,
        lineHeight: '52px',
        textWrap: ['balance', 'pretty'],
        fontFamily: fontFamily.exo,
      },
      highLight: {
        lineHeight: '30px',
        fontWeight: '700',
        fontSize: fontSize.base,
        color: color.theme.primary,
      },
      text: {
        lineHeight: '28px',
        fontSize: fontSize.sm,
        color: color.theme.textHover,
        fontFamily: 'Poppins',
      },
    },
    hover: {
      true: {
        ':hover': {
          color: color.theme.textHover,
        },
      },
    },
    hoverSection: {
      true: {
        selectors: {
          'section:has(&):hover > &': {
            color: color.theme.textHover,
          },
          'section:has(&):active > &': {
            color: color.theme.textHover,
          },
        },
      },
    },
    hoverDiv: {
      true: {
        selectors: {
          'div:has(&):hover > &': {
            color: color.theme.textHover,
          },
          'div:has(&):active > &': {
            color: color.theme.textHover,
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
