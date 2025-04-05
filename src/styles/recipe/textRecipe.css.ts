import { recipe } from '@vanilla-extract/recipes'
import { textSprinkles } from './textSprinkles.css.ts'
import { fontSize } from '../token'
import { theme } from '@theme'

export const textRecipe = recipe({
  base: {
    textWrap: ['balance', 'pretty'],
  },
  variants: {
    font: {
      preTitle: [
        textSprinkles({ fontSize: 'xs', color: 'accent', lineHeight: 'xxs', textTransform: 'uppercase' }),
        {
          letterSpacing: '2.8px',
          ':before': {
            content: '+ ',
          },
        },
      ],
      title: textSprinkles({
        fontSize: 'xl',
        color: 'primary',
        fontFamily: 'exo',
        fontWeight: 'bold',
      }),
      red: {
        fontWeight: 'bold',
        fontSize: fontSize['6xl'],
        color: 'red',
      },

      highLight: textSprinkles({
        fontSize: 'sm',
        color: 'primary',
        fontWeight: 'bold',

        fontFamily: 'exo',
        textTransform: 'capitalize',
      }),

      text: textSprinkles({
        fontSize: 'sm',
        color: 'text',
        fontWeight: 'normal',

        fontFamily: 'exo',
      }),
    },
    marginBlock: {
      xxxs: textSprinkles({ marginY: 'xxxs' }),
      xxs: textSprinkles({ marginY: 'xxs' }),
      xs: textSprinkles({ marginY: 'xs' }),
      sm: textSprinkles({ marginY: 'sm' }),
      md: textSprinkles({ marginY: 'md' }),
    },
    lineHeight: {
      xxxs: textSprinkles({ lineHeight: 'xxxs' }),
      xxs: textSprinkles({ lineHeight: 'xxs' }),
      xs: textSprinkles({ lineHeight: 'xs' }),
      sm: textSprinkles({ lineHeight: 'sm' }),
      md: textSprinkles({ lineHeight: 'md' }),
    },
    hover: {
      true: {
        ':hover': {
          color: theme['textHover'],
        },
      },
    },
    hoverSection: {
      true: {
        selectors: {
          'section:has(&):hover > &': {
            color: theme['textHover'],
          },
          'section:has(&):active > &': {
            color: theme['textHover'],
          },
        },
      },
    },
    hoverDiv: {
      true: {
        selectors: {
          'div:has(&):hover > &': {
            color: theme['textHover'],
          },
          'div:has(&):active > &': {
            color: theme['textHover'],
          },
        },
      },
    },
    textAlign: {
      left: textSprinkles({ textAlign: 'start' }),
      center: textSprinkles({ textAlign: 'center' }),
      right: textSprinkles({ textAlign: 'end' }),
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
    hoverDiv: false,
    hoverSection: false,
    hover: false,
  },
})
