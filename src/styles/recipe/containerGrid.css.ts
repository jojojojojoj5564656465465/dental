import { recipe } from '@vanilla-extract/recipes'
import { media } from '@styles/token'
import { colorTheme, theme } from '../utils/themeNew.css.ts'
import { fluid } from 'src/styles/utils/utils.ts'
import { containerSize, maxInlineSizeFn } from '../variants/base.css.ts'
import { createVar, style, createThemeContract, assignVars, styleVariants } from '@vanilla-extract/css'
const {accent, darkBlueBanner, blueLightBg, whiteBg} = colorTheme

const spaceLrVar = createVar({
  syntax: '<length>',
  inherits: false,
  initialValue: '40px',
})

const spaceGapVar = createVar({
  syntax: '<length>',
  inherits: false,
  initialValue: '20px',
})

const gridWrapper = style({
  // Valeurs initiales des variables
  vars: {
    [spaceLrVar]: fluid(40, 80),
    [spaceGapVar]: fluid(20, 35),
  },
  gap: spaceGapVar,
})

const vars = createThemeContract({
  col: null,
})
const numberOfColumnTheme = style({
  vars: assignVars(vars, {
    col: '3',
  }),
  '@media': {
    [media.tablet]: {
      vars: assignVars(vars, {
        col: '6',
      }),
    },
    [media.md]: {
      vars: assignVars(vars, {
        col: '12',
      }),
    },
  },
})

const containerGridVariant = styleVariants(containerSize, size => [

  gridWrapper,
  numberOfColumnTheme,
  {
    gridTemplateColumns: `1fr repeat(${vars.col}, calc((min(100% - ${spaceLrVar}, ${size}) - (${vars.col} - 1) * ${spaceGapVar}) / ${vars.col})) 1fr`,
  },
])
export const containerGrid = recipe({
  base: [
    {
      marginInline: 'auto',
      position: 'relative',
      boxSizing: 'border-box',
      display: 'grid',
    },
  ],
  variants: {
    size: {
      small: { maxInlineSize: maxInlineSizeFn('small') },
      medium: { maxInlineSize: maxInlineSizeFn('medium') },
      large: { maxInlineSize: maxInlineSizeFn('large') },
      xxl: { maxInlineSize: maxInlineSizeFn('xxl') },
      full: { maxInlineSize: 'none' },
    },
    cols: {
      2: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(2, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(2, 1fr)' },
        },
      },
      3: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(2, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(3, 1fr)' },
        },
      },
      4: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(2, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(4, 1fr)' },
        },
      },

      6: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(3, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(6, 1fr)' },
        },
      },
      8: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(4, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(8, 1fr)' },
        },
      },
      12: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(6, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(12, 1fr)' },
        },
      },
      24: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(12, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(24, 1fr)' },
        },
      },
    },
    fullSize: {
      small: [containerGridVariant.small],
      medium: [containerGridVariant.medium],
      large: [containerGridVariant.large],
      xxl: [containerGridVariant.xxl],
      full: [containerGridVariant.full],
    },
    theme: {
      accent,
      darkBlueBanner,
      whiteBg,
      blueLightBg,
    },
    background: {
      true: {
        backgroundColor: theme.background,
      },
    },
  },
})

