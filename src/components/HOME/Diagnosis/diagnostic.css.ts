import { createVar, style } from '@vanilla-extract/css'
import { color, containerGrid, fontSize, media } from '@theme'
import { fluid } from '@styles/utils'

/**
 * MARK: ELEMENT
 */

const logoSize = createVar({
  inherits: false,
  initialValue: '70px',
  syntax: '<length>',
})

export const gridContainer = style([
  {
    backgroundColor: 'whitesmoke',
    gridAutoFlow: 'column',
    gridTemplateRows: 'repeat(auto-fit, minmax(7rem, 1fr ))',
    gap: fluid(10, 20),
    '@media': {
      [media.tablet]: {
        gridTemplateRows: 'repeat(4, 9rem)',
      },
      [media.md]: {
        gridTemplateRows: 'repeat(3, 12rem)',
      },
    },
  },
  containerGrid.large,
])

/**
 * @description le grid interieur de la card avec titre desc et le logo
 *deja importé dans élément
 */
const inside = style({
  display: 'inline-grid',
  gridTemplateColumns: `${logoSize} 1fr`,
  gridTemplateAreas: '"h4 logo" "txt logo"',
  maxInlineSize: '35rem',
  selectors: {
    '&:nth-of-type(even)': {
      gridTemplateColumns: `${logoSize} 1fr`,
      gridTemplateAreas: '"logo h4" "logo txt"',
    },
  },

  '@media': {
    [media.tablet]: {
      gridTemplateColumns: `1fr ${logoSize}`,
    },
    [media.md]: {
      gridTemplateColumns: `1fr ${logoSize}`,
    },

    [media.mobile.portrait]: {
      gridTemplateAreas: '"logo h4" "logo txt"',
    },
  },
})

/**
 * @description exterieur de la card
 */
export const element = style([
  {
    border: '5px solid red',

    gridColumn: '2 / span 3',
    '@media': {
      [media.tablet]: {
        gridColumn: '2 / span 3',
      },
      [media.md]: {
        gridColumn: '2 / span 4',
      },
    },
    selectors: {
      '&:nth-of-type(even)': {
        '@media': {
          [media.tablet]: {
            gridColumn: '-5 / -2',
          },
          [media.md]: {
            gridColumn: '-6 / -2',
          },
        },
      },
    },
  },
  inside,
])

const textAlignement = style({
  textAlign: 'left',
  selectors: {
    [`${element}:nth-of-type(odd) &`]: {
      '@media': {
        [media.tablet]: {
          textAlign: 'right',
        },
      },
    },
  },
})
export const title = style([
  {
    color: color.text.primary,
    gridArea: 'h4',
    fontSize: fontSize.base,
  },
  textAlignement,
])

export const description = style([
  textAlignement,
  {
    color: '#527282',
    gridArea: 'txt',
    fontWeight: 300,
    textWrap: ['balance', 'pretty'],
  },
])

export const logoIcon = style({
  gridArea: 'logo',
  backgroundColor: 'orange',
  alignSelf: 'center',
  marginInline: 6,
  transition: 'transform 1s 1s ease',
  selectors: {
    [`${element}:hover &`]: { transform: 'rotate(10deg)' },
  },
})
export const image = style({
  backgroundColor: 'cyan',
  gridArea: '1 / 1/ span 1 / -1',
  minBlockSize: 150,
  '@media': {
    [media.tablet]: {
      gridArea: '1 / 2 /span 1 / span 6',
      minBlockSize: 'auto',
    },
    [media.md]: {
      gridArea: '2/ 6 / span 1 / -6',
    },
  },
})
