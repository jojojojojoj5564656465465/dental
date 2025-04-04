import { recipe } from '@vanilla-extract/recipes'
import { fallbackVar } from '@vanilla-extract/css'
import { color, colorTheme } from '../utils/theme.css.ts'
const { accent, darkBlueBanner, blueLightBg, whiteBg } = colorTheme

export const containerColor = recipe({
  base: {
    backgroundColor: color.theme.background,
    color: color.theme.text,
    ':focus': {
      outline: `min(4px, 3px + 0.1vw) solid ${color.theme.divider}`,
      outlineOffset: '4px',
      transition: 'transform 1s easy',
    },
  },
  variants: {
    theme: {
      accent,
      darkBlueBanner,
      whiteBg,
      blueLightBg,
    },
    hover: {
      true: {
        cursor: 'pointer',
        ':active': {
          color: fallbackVar(color.theme.textHover, 'inherit'),
          backgroundColor: fallbackVar(color.theme.backgroundHover, 'inherit'),
          transform: 'scale(1.01,1)',
          outline: `min(4px, 3px + 0.1vw) solid ${color.theme.backgroundHover}`,
          outlineOffset: '1.6px',
        },
        ':focus': {
          outline: 'min(4px, 3px + 0.1vw) solid yellow',
          outlineOffset: '4px',
        },

        ':hover': {
          backgroundColor: fallbackVar(color.theme.backgroundHover, color.theme.background),
          color: fallbackVar(color.theme.textHover, 'inherit'),
          border: fallbackVar(color.theme.textHover, 'inherit'),
        },
      },
    },
  },
  defaultVariants: {
    theme: 'blueLightBg',
    hover: false,
  },
})
