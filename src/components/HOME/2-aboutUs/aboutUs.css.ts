import { color, colorTheme, container, fontFamily, fontSize, media } from '@theme'
import { createGlobalVar, createVar, globalStyle, style, styleVariants } from '@vanilla-extract/css'

export const wrapper = style([
  container.small,
  colorTheme.blueLightBg,
  {
    inlineSize: '100%',
    maxInlineSize: 'calc(60rem / 2)',
    color: color.theme.primary,
  },
])

const liSizeMask = createGlobalVar('mask', {
  syntax: '<length>',
  inherits: false,
  initialValue: '22px',
})

export const text = styleVariants({
  about: {
    fontSize: fontSize.xs,
    letterSpacing: 5,
    color: color.theme.accent,
  },
  h2: {
    fontSize: fontSize['lg'],
    color: color.theme.primary,
    fontFamily: fontFamily.exo,
    fontWeight: 'bold',
  },
  span: {
    color: color.theme.accent,
    fontSize: 'inherit',
    fontFamily: 'inherit',
  },
  p: {
    marginBlock: '1rem',
    color: color.theme.text,
  },
  ul: {
    display: 'grid',
    gridTemplateRows: 'repeat(2,1fr)',
    gridTemplateColumns: 'repeat(2,1fr)',
  },
  li: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    color: color.theme.primary,
    fontWeight: 800,
    ':before': {
      width: liSizeMask,
      height: liSizeMask,
      marginInlineEnd: 'min(5px + 1vw, 10px)',
      display: 'inline-block',
      backgroundColor: color.theme.accent,
      content: '',
      maskImage: "url('/check.svg')",
      maskSize: liSizeMask,
      maskRepeat: 'no-repeat',
      maskPosition: 'center', // Utilisera la couleur du texte (rouge)
    },
  },
})

export const baseImage = style({
  border: '5px solid red',
  borderRadius: '10%',
  aspectRatio: '1',
  cursor: 'pointer',
})

export const imageVariant = styleVariants({
  wrapper: {
    // backgroundColor: 'pink',
    display: 'grid',
    gridTemplateRows: 'repeat(8,minmax(3rem, 1fr))',
    gridTemplateColumns: 'repeat(8, minmax(3rem, 3rem + 5vw))',
    '@media': {
      [media.md]: {
        gridTemplateRows: 'repeat(8,minmax(4rem, 1fr))',
        gridTemplateColumns: 'repeat(8, 4rem)',
      },
    },
  },
  one: [
    baseImage,
    {
      backgroundColor: 'yellow',
      gridArea: '2 / 2 / span 5 / span 4',
      '@media': {
        [media.md]: {
          gridArea: '2 / 2 / span 5 / span 4',
        },
      },
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
        },
      },
    },
  ],
  circle: {
    maxInlineSize: '100px',

    gridArea: '2 / 5 / span 3 / span 3', // Assurez-vous que l'URL est correcte
    transition: 'background 1s 2s ease', // Ajuste la taille du masque pour qu'il s'adapte à l'élément
    background: 'linear-gradient(38deg, rgba(63,94,251,1) 0%, rgba(203,19,228,1) 100%)', // Empêche la répétition du masque
    maskImage: 'url("check.svg")', // Centre le masque
    maskSize: 'contain',
    maskRepeat: 'no-repeat',
    maskPosition: 'center',
    '@media': {
      [media.md]: {
        maxInlineSize: '11rem',
        gridArea: '2 / 6 / span 3 / span 3',
      },
    },
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
    border: `${color.theme.primary} 5px solid`,
    display: 'block',
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
