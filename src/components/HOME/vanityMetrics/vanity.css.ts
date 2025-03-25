import { style, globalStyle, styleVariants, createVar } from '@vanilla-extract/css'
import { fontFamily, color, fontSize, space, media, container, containerGrid } from '@theme'
import { boxShadowGenerator, globalStyleTag, ld, fluid, flex, hover } from '@styles/utils'
import { calc } from '@vanilla-extract/css-utils'

export const wrapper = style([
  container.medium,
  flex('row', 1),
  {
    flexWrap: 'wrap',
    marginInline: 'auto',

    '@media': {
      [media.md]: {
        maxInlineSize: 6000,
      },
    },
  },
])

export const nbCards = createVar({
  syntax: '<number>',
  inherits: false,
  initialValue: '1',
})

export const CardStyle = styleVariants({
  wrapper: [
    flex('column', 1),
    {
      color: color.text.primary,

      '@media': {
        [media.tablet]: {
          vars: {
            [nbCards]: '2',
          },
        },
        [media.md]: {
          vars: {
            [nbCards]: '4',
          },
        },
      },
      inlineSize: calc.divide('100%', nbCards),
      minInlineSize: 100,
    },
  ],
  title: {
    fontSize: fontSize['2xl'],
  },
  subtitle: { fontSize: fontSize.lg },
  hr: {
    blockSize: 2,
    backgroundColor: color.divider.light,
    marginBlock: space.sm,
  },
  text: { color: color.text.light, textWrap: ['balance', 'pretty'] },
})
