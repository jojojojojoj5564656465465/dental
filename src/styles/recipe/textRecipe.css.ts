import {recipe} from '@vanilla-extract/recipes'
import {textSprinkles} from './textSprinkles.css.ts'
import {theme} from '@theme'

export const textRecipe = recipe({
  base: {
    textWrap: ['balance', 'pretty'],
    textTransform: 'capitalize',
  },
  variants: {
    font: {
      preTitle: [
        textSprinkles({fontSize: 'xs', color: 'accent', lineHeight: 'xxs'}),
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
      span: textSprinkles({
        fontSize: 'inherit',
        color: 'accent',
      }),

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
      xxxs: textSprinkles({marginBlock: 'xxxs'}),
      xxs: textSprinkles({marginBlock: 'xxs'}),
      xs: textSprinkles({marginBlock: 'xs'}),
      sm: textSprinkles({marginBlock: 'sm'}),
      md: textSprinkles({marginBlock: 'md'}),
      lg: textSprinkles({marginBlock: 'lg'}),
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
    display: {
      inline: {
        display: 'inline-block',
      },
      block: {
        display: 'block',
      },
    },
  },
  defaultVariants: {
    font: 'text',
    display: 'block',
    textAlign: 'left',
    hoverDiv: false,
    hoverSection: false,
    hover: false,
  },
})
