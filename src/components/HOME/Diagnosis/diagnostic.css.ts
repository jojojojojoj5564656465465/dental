import { createContainer, createVar, style } from '@vanilla-extract/css'
import { color, container, containerGrid, fontFamily, fontSize, media, space } from '@theme'
import { fluid, globalStyleTag } from '@styles/utils'

export const sectionContainerIndex = style([
  {
    textAlign: 'center',
    backgroundColor: color.background.blue,
    marginBlock: space.md,
  },
  container.large,
])
export const sectionContainer__Text = style({ marginBlock: fluid(20, 45) })

export const sectionContainer__Text__h2 = style({
  fontSize: 'clamp(1.7rem, 1.5rem + 5vw, 5rem)',
  fontFamily: fontFamily.dancingScript,
  textWrap: ['balance', 'pretty'],
  lineHeight: '1.2',
})
globalStyleTag(sectionContainer__Text, {
  h6: {
    color: color.blue.accent,
    fontSize: fontSize.base,
    letterSpacing: '0.2rem',
    fontWeight: '100',
    fontFamily: fontFamily.exo,
  },
  span: {
    fontSize: 'inherit',
    color: color.blue.accent,
    fontFamily: 'inherit',
  },
  p: {
    fontSize: fontSize.sm,
    color: color.text.primary,
  },
})

/**
 * MARK: ELEMENT
 */
const logoSize = createVar({
  inherits: false,
  initialValue: '70px',
  syntax: '<length>',
})
/**
 * MARK: GRID COMPO
 */
export const gridContainer = style([
  {
    backgroundColor: 'whitesmoke',
    gridAutoFlow: 'column',
    gridTemplateRows: 'repeat(auto-fit, minmax(8.1rem, 1fr ))',
    gap: fluid(10, 20),
    '@media': {
      'screen and (440px < width < 606px)': { columnGap: 21.5 },
      [media.tablet]: {
        gridTemplateRows: 'repeat(4, minmax(7.5rem,1fr))',
      },
      [media.md]: {
        gridTemplateRows: 'repeat(3, 9rem)',
      },
    },
  },
  containerGrid.large,
])
/**
 * MARK: card
 */
export const cardContainer = createContainer()
/**
 * @description le grid interieur de la card avec titre desc et le logo
 *deja importé dans élément
 */
const inside = style({
  containerName: cardContainer,
  containerType: 'inline-size',
  display: 'inline-grid',
  gridTemplateColumns: `${logoSize} 1fr`,
  gridTemplateAreas: '"h4 logo" "txt logo"',
  maxInlineSize: '35rem',
  '@container': {
    [`${cardContainer} (width <= 250px)`]: {
      gridTemplateAreas: '"h4 h4" "txt txt"',
      gridTemplateColumns: '1fr 1fr',
    },
  },
  selectors: {
    '&:nth-of-type(even)': {
      '@media': {
        [media.tablet]: {
          gridTemplateColumns: `${logoSize} 1fr`,
          gridTemplateAreas: '"logo h4" "logo txt"',
        },
      },
    },
  },

  '@media': {
    [media.mobile]: {
      gridTemplateAreas: '"logo h4" "logo txt"',
    },
    [media.tablet]: {
      gridTemplateColumns: `1fr ${logoSize}`,
    },
    [media.md]: {
      gridTemplateColumns: `1fr ${logoSize}`,
    },
  },
})

/**
 * @description exterieur de la card
 */
export const element = style([
  {
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
  textTransform: 'capitalize',
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
    fontWeight: '800',
    fontSize: fontSize.base,
    '@container': {
      [`${cardContainer} (width <= 250px)`]: {
        gridColumn: 'span 2',
        fontWeight: '600',
      },
    },
  },
  textAlignement,
])
export const description = style([
  textAlignement,
  {
    color: '#527282',
    gridArea: 'txt',
    fontSize: fontSize.sm,
    lineHeight: '1.3',
    textWrap: ['balance', 'pretty'],
    '@container': {
      [`${cardContainer} (width <= 250px)`]: {
        gridColumn: 'span 2',
        fontSize: fontSize.base,
        lineHeight: '1.1',
      },
    },
  },
])
export const logoIcon = style({
  color: color.blue.accent,
  gridArea: 'logo',
  placeSelf: 'center',
  marginInline: 6,
  fontSize: fontSize['4xl'],
  transition: 'transform 1s 1s ease',
  '@container': {
    [`${cardContainer} (width <= 250px)`]: {
      display: 'none',
    },
  },
  selectors: {
    [`${element}:hover &`]: { transform: 'rotate(10deg)' },
  },
})

export const image = style({
  backgroundImage: 'url(public/why-choose-us-img.png)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPositionX: 'center',

  gridArea: '1 / 1/ span 1 / -1',
  display: 'inline-grid',
  minBlockSize: 150,
  '@media': {
    [media.tablet]: {
      gridArea: '1 / 2 /span 1 / span 6',
      minBlockSize: 'auto',
    },
    [media.md]: {
      gridArea: '1/ 6 / -1 / -6',
      backgroundPositionY: 'center',
    },
  },
})
