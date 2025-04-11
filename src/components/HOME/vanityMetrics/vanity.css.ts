import {color} from '@theme'
import {space} from '@styles/token'
import {containerGrid} from '@recipe'
import {style} from '@vanilla-extract/css'

export const wrapper = style([
    containerGrid({theme: 'whiteLD', background: true, size: 'large', cols: 4}),
  {
    marginInline: 'auto',
    gap: '.5rem',
    placeItems: 'center',
  },
])

export const hr = style({
    blockSize: 4,
    marginBlock: space.sm,
    backgroundColor: color.theme.divider,
})
