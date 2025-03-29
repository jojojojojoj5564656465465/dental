import { media } from '@theme'
import { globalStyle, style, styleVariants } from '@vanilla-extract/css'

/**
 * @deprecated
 */
export const baseImage = style({
  border: '5px solid red',
  borderRadius: '10%',
  aspectRatio: '1',
  cursor: 'pointer',
})
/**
 * @deprecated
 */
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
/**
 * @deprecated
 */
globalStyle(`${imageVariant.two}:hover + ${imageVariant.circle}`, {
  background: 'red',
})
/**
 * @deprecated
 */
globalStyle(`${imageVariant.one}:hover ~ ${imageVariant.circle}`, {
  background: 'greenyellow',
})
