import { recipe } from '@vanilla-extract/recipes'
import { fallbackVar } from '@vanilla-extract/css'
import { theme, colorTheme } from '../utils/themeNew.css.ts'
const { accent, darkBlueBanner, blueLightBg, whiteBg } = colorTheme

export const containerColor = recipe({
  base: {
    backgroundColor: theme.background,
    color: theme.text,
    ':focus': {
      outline: `min(4px, 3px + 0.1vw) solid ${theme.divider}`,
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
          color: fallbackVar(theme.textHover, 'inherit'),
          backgroundColor: fallbackVar(theme.backgroundHover, 'inherit'),
          transform: 'scale(1.01,1)',
          outline: `min(4px, 3px + 0.1vw) solid ${theme.backgroundHover}`,
          outlineOffset: '1.6px',
        },
        ':focus': {
          outline: 'min(4px, 3px + 0.1vw) solid yellow',
          outlineOffset: '4px',
        },

        ':hover': {
          backgroundColor: fallbackVar(theme.backgroundHover, theme.background),
          color: fallbackVar(theme.textHover, 'inherit'),
          border: fallbackVar(theme.textHover, 'inherit'),
        },
      },
    },
  },
  defaultVariants: {
    theme: 'blueLightBg',
    hover: false,
  },
})
