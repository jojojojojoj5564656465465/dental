import { createGlobalVar, styleVariants } from '@vanilla-extract/css'
import { style, globalStyle } from '@vanilla-extract/css'
import { fontFamily, color, fontSize, space, media, container } from '@theme'
import { boxShadowGenerator, globalStyleTag, ld, fluid, flex, hover } from '@styles/utils'
import { calc } from '@vanilla-extract/css-utils'

const liSizeMask = createGlobalVar('mask', {
  syntax: '<length>',
  inherits: false,
  initialValue: '16px',
  
})

export const text = styleVariants({
  about: {
    letterSpacing: 5,
    color: color.blue.light,
    fontSize: fontSize.xs,
  },
  h2: {
    fontSize: fontSize['2xl'],
    color: color.blue.dark,
  },
  span: {
    color: color.blue.accent,
  },
  p: {
    marginBlock: 40,
    color: color.text.primary,
  },
  ul: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    gridTemplateRows: 'repeat(2,1fr)',
  },
  li: {
    color: 'inherit',
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    ':before': {
      content: '',
      display: 'inline-block',
      width: liSizeMask,
      height: liSizeMask,
      marginInlineEnd: 'min(5px + 1vw, 10px)',
      maskImage: "url('/check.svg')",
      maskSize: liSizeMask,
      maskRepeat: 'no-repeat',
      maskPosition: 'center',
      backgroundColor: 'currentColor', // Utilisera la couleur du texte (rouge)
    },
  },
})

export const wrapper = style([
  container.small,
  {
    color:color.text.primary,
    maxInlineSize: 'calc(60rem / 2)',
    inlineSize: '100%',
    '@media': {
      [media.retina]: {
        
      },
    },
  },
])
