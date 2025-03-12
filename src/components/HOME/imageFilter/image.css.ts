import { style, globalStyle } from '@vanilla-extract/css'
import { fontFamily, color, fontSize, space, media, container } from '@theme'
import { boxShadowGenerator, globalStyleTag, ld, fluid, flex, hover } from '@styles/utils'

export const wrapper = style([
  container.medium,
  {
    display:'grid',
    placeItems:'center',
    
    '@media': {
      [media.md]: {
        maxInlineSize: 1450,
      },
    },
  },
])
