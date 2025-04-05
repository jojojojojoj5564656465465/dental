import { assignVars, createThemeContract, createVar, style, styleVariants } from '@vanilla-extract/css'
import { fluid } from 'src/styles/utils/utils.ts'
import { media } from 'src/styles/token'
import { containerSize, defaultContainer } from './base.css.ts'

/**
 * MARK: Container Rules
 */

// Définition des variables avec @property
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

export const containerGrid = styleVariants(containerSize, size => [
  defaultContainer,
  gridWrapper,
  numberOfColumnTheme,
  {
    display: 'grid',
    gridTemplateColumns: `1fr repeat(${vars.col}, calc((min(100% - ${spaceLrVar}, ${size}) - (${vars.col} - 1) * ${spaceGapVar}) / ${vars.col})) 1fr`,
  },
])
