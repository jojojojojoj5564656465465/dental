import { textStyle } from '@styles/main.css.ts'
import { fluid } from 'src/styles/utils/utils.ts'
import { color} from '@theme'
import { containerGridCol } from '@styles/recipe/containerGridCol.css.ts'

import {media} from '@styles/token'
import { createGlobalVar, createVar, style, styleVariants } from '@vanilla-extract/css'

/**
 * WRAPPER DE LA PAGE INDEX
 */
export const wrapperIndex = style([
  containerGridCol({ cols: 2, size: 'medium' }),

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
  rowGap: fluid(15, 30),
})

const liSizeMask = createGlobalVar('mask', {
  syntax: '<length>',
  inherits: false,
  initialValue: '22px',
})

export const text = styleVariants({
  about: [textStyle.preTitle, {}],
  h2: [
    {
      paddingInline: '5px',
    },
    textStyle.title,
  ],
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
  li: [
    textStyle.highLight,
    {
      display: 'flex',
      alignItems: 'center',
      listStyle: 'none',

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
