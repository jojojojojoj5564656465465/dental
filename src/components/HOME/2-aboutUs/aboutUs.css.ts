import { fluid } from 'src/styles/utils/utils.ts'
import { containerGrid, textRecipe } from '@recipe'

import { media, space } from '@styles/token'
import { createVar, style, styleVariants } from '@vanilla-extract/css'

/**
 * WRAPPER DE LA PAGE INDEX
 */
export const wrapperIndex = style([
  containerGrid({ cols: 2, size: 'medium' }),

  {
    // border: `${color.theme.primary} 5px solid`,
    gap: fluid(10, 50),
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
  //inlineSize: '100%',
  minInlineSize: 300,

  zIndex: 2,
  alignSelf: 'center',
  display: 'grid',
  gap: fluid(10, 50),
})

const liSizeMask = createVar({
  syntax: '<length>',
  inherits: true,
  initialValue: '24px',
})

export const text = styleVariants({
  ul: [
    containerGrid({ cols: 2 }),
    {
      display: 'grid',
      //gridTemplateRows: 'repeat(2,1fr)',
      gridTemplateColumns: 'repeat(auto-fit,minmax(100px,1fr))',
      gap: space.xs,
    },
  ],
  li: [
    textRecipe({ font: 'highLight' }),
    {
      display: 'flex',
      alignItems: 'center',
      listStyle: 'none',
      ':before': {
        width: liSizeMask,
        height: liSizeMask,
        marginInlineEnd: 'min(5px + 1vw, 10px)',
        display: 'inline',
        backgroundColor: 'darkgreen',
        backgroundSize: 'cover',
        content: '',
        maskImage: "url('check.svg')",
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center', // Utilisera la couleur du texte (rouge)
      },
    },
  ],
})

/**
 * Composant de Gauche pour les images qui se overlape
 * @MARK: IMAGES LEFT
 */

const numberOfCc = createVar({
  initialValue: '6',
  inherits: true,
  syntax: '<integer>',
})
export const newImageGrid_Wrapper = style({
  gridTemplateRows: `repeat(${numberOfCc},1fr)`,
  gap: '0px 0px',
  gridAutoFlow: 'row',
  justifyItems: 'stretch',
  width: '100%',
  display: 'grid',
  aspectRatio: '1',
  gridTemplateColumns: `repeat(${numberOfCc},1fr)`,
  '@media': {
    [media.tablet]: {
      vars: {
        [numberOfCc]: '7',
      },
    },
    [media.md]: {
      vars: {
        [numberOfCc]: '9',
      },
    },
  },
})

export const newImageGrid = styleVariants({
  square: {
    gridArea: '1 / 1 / 7 / 7',
    backgroundColor: 'pink',
    backgroundPosition: 'center',
  },
  vertical: {
    gridArea: '5 / 3 / -1 / -1',
    backgroundColor: 'greenyellow',
    '@media': {
      [media.md]: {
        gridArea: '6 / 4 / -1 / -1',
      },
    },
  },
})
