import { createContainer, createVar, style } from '@vanilla-extract/css'
import { color, container, containerGrid, fontFamily, fontSize, media, space, colorTheme } from '@theme'
import { fluid, globalStyleTag } from '@styles/utils'

export const sectionContainerIndex = style([
  {
    marginBlock: space.md,
    backgroundColor: color.theme.background,
    textAlign: 'center',
  },
  container.large,
  colorTheme.whiteBg,
])
export const sectionContainer__Text = style({ marginBlock: fluid(20, 45) })

export const sectionContainer__Text__h2 = style({
  fontFamily: fontFamily.dancingScript,
  fontSize: 'clamp(1.7rem, 1.5rem + 5vw, 5rem)',
  textWrap: ['balance', 'pretty'],
  lineHeight: '1.2',
})
globalStyleTag(sectionContainer__Text, {
  h6: {
    color: color.theme.accent,
    fontSize: fontSize.base,
    letterSpacing: '0.2rem',
    fontWeight: '100',
    fontFamily: fontFamily.exo,
  },
  span: {
    fontSize: 'inherit',
    color: color.theme.text,
    fontFamily: 'inherit',
  },
  p: {
    fontSize: fontSize.sm,
    color: color.theme.text,
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
    gridTemplateRows: 'repeat(auto-fit, minmax(8.1rem, 1fr ))',
    gridAutoFlow: 'column',
    gap: fluid(10, 20),
    backgroundColor: 'whitesmoke',
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
  maxInlineSize: '35rem',
  display: 'inline-grid',
  gridTemplateAreas: '"h4 logo" "txt logo"',
  gridTemplateColumns: `${logoSize} 1fr`,
  containerName: cardContainer,
  containerType: 'inline-size',
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
          gridTemplateAreas: '"logo h4" "logo txt"',
          gridTemplateColumns: `${logoSize} 1fr`,
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
  textAlign: 'left',
  textTransform: 'capitalize',
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
    fontSize: fontSize.base,
    fontWeight: '800',
    gridArea: 'h4',
    color: color.theme.primary,
    '@container': {
      [`${cardContainer} (width <= 250px)`]: {
        fontWeight: '600',
        gridColumn: 'span 2',
      },
    },
  },
  textAlignement,
])
export const description = style([
  textAlignement,
  {
    fontSize: fontSize.sm,
    gridArea: 'txt',
    textWrap: ['balance', 'pretty'],
    lineHeight: '1.3',
    color: '#527282',
    '@container': {
      [`${cardContainer} (width <= 250px)`]: {
        fontSize: fontSize.base,
        gridColumn: 'span 2',
        lineHeight: '1.1',
      },
    },
  },
])
export const logoIcon = style({
  fontSize: fontSize['4xl'],
  marginInline: 6,
  gridArea: 'logo',
  placeSelf: 'center',
  transition: 'transform 1s 1s ease',
  color: color.theme.accent,
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
  minBlockSize: 150,
  display: 'inline-grid',
  gridArea: '1 / 1/ span 1 / -1',
  backgroundImage: 'url(public/why-choose-us-img.png)',

  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPositionX: 'center',
  '@media': {
    [media.tablet]: {
      minBlockSize: 'auto',
      gridArea: '1 / 2 /span 1 / span 6',
    },
    [media.md]: {
      gridArea: '1/ 6 / -1 / -6',
      backgroundPositionY: 'center',
    },
  },
})
