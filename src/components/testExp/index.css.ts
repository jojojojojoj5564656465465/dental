import { style } from '@vanilla-extract/css'

import { container, flex } from 'src/styles/recipe/index.css.ts'

export const oui = style([
  flex({ direction: 'row', justifyContent: 'evenly', wrap: true }),
  container({ theme: 'blueLightBg', background: true, size: 'small', hover: true }),
])
export const oui2 = style({ backgroundColor: 'red' })
