import { style } from '@vanilla-extract/css'

import { container, flex, containerGrid, textRecipe } from 'src/styles/recipe/index.css.ts'

export const oui = style([
  flex({
    direction: 'row',
    justifyContent: 'evenly',
    wrap: true,
  }),
  containerGrid({
    theme: 'blueLightBg',
    background: true,
    size: 'small',
    hover: true,
    gap: true,
  }),
])
export const oui2 = style([textRecipe({ font: 'title', marginBlock: 'xs' })])
