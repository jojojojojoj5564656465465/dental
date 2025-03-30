import { colorTheme, containerGridCol } from '@styles/utils'
import { color, fontSize, space } from '@theme'
import { fallbackVar, style, styleVariants } from '@vanilla-extract/css'

export const wrapper = style([
  colorTheme.whiteBg,
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
