import { flex, nbGridCol } from '@styles/utils'
import { color, colorTheme, container, fontFamily, fontSize, media } from '@theme'
import { createGlobalVar, createVar, globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'

/**
 * WRAPPER DE LA PAGE INDEX
 */
export const wrapperIndex = style([
  container.medium,
  nbGridCol['2'],
  colorTheme.blueLightBg,
  {
    // border: `${color.theme.primary} 5px solid`,

    '@media': {
      '(width< 846px)': {
        gridTemplateColumns: '1fr',
      },
    },
  },
])

/**
 * Content File
 */
export const content__wrapper = style({
  inlineSize: '100%',
  minInlineSize: 400,
  color: color.theme.primary,
  zIndex: 2,
})

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

/**
 * Composant de Gauche pour les images qui se overlape
 * @MARK: IMAGES LEFT
 */
const sizeOfWrapperImage = createVar({
  syntax: '<length>',
  inherits: false,
  initialValue: '500px',
})
export const ImageSide__wrapper = style([
  {
    '@media': {
      '(460px <= width <= 1040px)': {
        vars: {
          [sizeOfWrapperImage]: '68svw',
        },
      },
      [media.mobile]: {
        vars: {
          [sizeOfWrapperImage]: '87svw',
        },
      },
      [media.md]: {
        aspectRatio: '17/16',

        paddingBlockEnd: undefined,
      },
    },
    aspectRatio: '17/14',
    maxInlineSize: sizeOfWrapperImage,
    position: 'relative',
    paddingBlockEnd: 50,
    //border: 'red 0.5rem solid',
  },
])
const baseIm = style({
  borderRadius: 40,
  border: '10px solid white',
})
export const ImagesV = styleVariants({
  one: [
    baseIm,
    {
      maxInlineSize: calc.divide(sizeOfWrapperImage, 1.35),
      backgroundColor: color.theme.accent,
      aspectRatio: '1',
      '@media': {
        '(width < 400px)': {
          maxInlineSize: '80svw',
        },
      },
    },
  ],
  two: [
    {
      inlineSize: calc.divide(sizeOfWrapperImage, 3),
      backgroundColor: color.theme.primary,
      aspectRatio: '16/9',
      position: 'absolute',
      content: '',
      bottom: 0,
      right: -20,
      '@media': {
        '(width < 400px)': {
          //inlineSize: calc.divide(sizeOfWrapperImage, 3.1),
          //right: 120,
        },
        [media.tablet]: {
          // right: 150,
          // bottom: 140,
          //top: sizeOfWrapperImage,
          inlineSize: calc.divide(sizeOfWrapperImage, 1.8),
        },
        [media.md]: { inlineSize: calc.divide(sizeOfWrapperImage, 1.6) },
      },
    },
    baseIm,
  ],
})
