import {createGlobalVar, createVar, globalStyle, style, styleVariants} from '@vanilla-extract/css'
import {color, container, fontSize, media} from '@theme'
import { calc } from '@vanilla-extract/css-utils';
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
    color: color.text.primary,
    maxInlineSize: 'calc(60rem / 2)',
    inlineSize: '100%',
    
  },
])


export const baseImage = style(
    {
      borderRadius: '10%',
      border: '5px solid red',
      aspectRatio: '1',
      cursor: 'pointer',
    },
)


export const imageVariant = styleVariants({
  wrapper: {
    // backgroundColor: 'pink',
    display: 'grid',
    gridTemplateColumns: 'repeat(8, minmax(3rem, 3rem + 5vw))',
    gridTemplateRows: 'repeat(8,minmax(3rem, 1fr))',
    '@media': {
      [media.md]: {
        gridTemplateColumns: 'repeat(8, 4rem)',
        gridTemplateRows: 'repeat(8,minmax(4rem, 1fr))',

      }
    }
  },
  one: [
    baseImage,
    {
      backgroundColor: 'yellow',
      gridArea: '2 / 2 / span 5 / span 4',
      '@media': {
        [media.md]: {
          gridArea: '2 / 2 / span 5 / span 4',
        }
      }
    },
  ],
  two: [
    baseImage,
    {
      backgroundColor: 'blue',
      gridArea: '4 / 3 / span 5 / span 4',

      '@media': {
        [media.tablet]: {
          gridArea: '4 / 5 / span 5 / span 4',
        },
        [media.md]: {
          gridArea: '5 / 4 / span 5 / span 4',
        }
      }
    },
  ],
  circle: {
    maxInlineSize: '100px',

    maskImage: 'url("check.svg")', // Assurez-vous que l'URL est correcte
    maskSize: 'contain', // Ajuste la taille du masque pour qu'il s'adapte à l'élément
    maskRepeat: 'no-repeat', // Empêche la répétition du masque
    maskPosition: 'center', // Centre le masque
    background: 'linear-gradient(38deg, rgba(63,94,251,1) 0%, rgba(203,19,228,1) 100%)',
    gridArea: '2 / 5 / span 3 / span 3',
    transition:'background 1s 2s ease',
    '@media': {
      [media.md]: {
        maxInlineSize: '11rem',
        gridArea: '2 / 6 / span 3 / span 3',
      }
    }
  },
})

globalStyle(`${imageVariant.two}:hover + ${imageVariant.circle}`, {
  background: 'red',
})
globalStyle(`${imageVariant.one}:hover ~ ${imageVariant.circle}`, {
  background: 'greenyellow',
})


export const wrapperIndex = style([
  container.medium,
  {
    display: "block",
    border: `${color.blue.dark} 5px solid`,
    '@media': {
      [media.md]: {
        display: ['flex', 'grid'],
        gridTemplateColumns: '1fr 1fr',
      },
      [media.lg]: {
        gridTemplateColumns: '1fr 2fr',
      },
    },
  },
])