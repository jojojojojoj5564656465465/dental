import { color } from '@theme'
import { fontSize, space } from '@styles/token'
import { containerColor, containerGridCol } from '@styles/recipe/index.css.ts'
import { fallbackVar, style, styleVariants } from '@vanilla-extract/css'

export const wrapper = style([
  containerColor({ theme: 'whiteBg', hover: false }),
  containerGridCol({ size: 'large', cols: 4 }),
  {
    marginInline: 'auto',
    gap: '.5rem',
    placeItems: 'center',
  },
])
export const Card = style({
  backgroundColor: color.theme.background,
  color: fallbackVar(color.theme.primary, 'black'),
  padding: space.xs,
})

export const Card_content = styleVariants({
  title: {
    fontSize: fontSize['2xl'],
  },
  subtitle: { fontSize: fontSize.md },
  hr: {
    blockSize: 4,
    marginBlock: space.sm,
    backgroundColor: color.theme.divider,
  },
  text: { color: color.theme.text },
})
