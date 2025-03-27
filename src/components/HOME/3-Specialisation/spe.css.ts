import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { color, container, containerGrid, media, space } from '@theme'
import { fluid, globalStyleTag, hover } from '@styles/utils'

export const wrapper = style([
  container.large,

  {
    '@media': {
      [media.md]: {
        //maxInlineSize: 650,
      },
    },
  },
])
export const cardsWrapper = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'space-evenly',
  justifyContent: 'space-evenly',
  gap: fluid(20, 50),
})
export const CardStyle = styleVariants({
  wrapper: [
    hover({
      backgroundColor: 'transparent',
      color: 'red',
    }),
    {
      padding: space.xs,
      gap: space.sm,
      outline: color.variable.darkDark,
      aspectRatio: '1',

      maxInlineSize: 295,
      inlineSize: '100%',
      cursor: 'pointer',
      borderRadius: 25,
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden',
      border: 'white 3px solid',
      ':before': {
        position: 'absolute',
        content: '',
        backgroundColor: color.variable.accent,
        inlineSize: '100%',
        blockSize: '100%',

        left: 0,
        bottom: '-100%',

        transition: 'bottom 0.4s ease-out',
        zIndex: -1,
      },
      '@media': {
        [media.tablet]: {
          minInlineSize: 'calc(70vw / 2)',
        },
        [media.mobile]: {
          blockSize: 'calc(100svh / 4 - 50px)',
          minBlockSize: '9rem',
        },
      },
      selectors: {
        '&:hover::before': {
          bottom: '0',
        },
      },
    },
  ],
  icone: {
    width: 40,
  },
})

globalStyle(`${CardStyle.wrapper}:hover > ${CardStyle.icone}`, {
  rotate: '90deg',
})
globalStyle(`${CardStyle.wrapper}:hover :is(h3, p)`, {
  color: 'whitesmoke',
})
globalStyleTag(CardStyle.wrapper, {
  h3: {
    color: color.theme.accent,
  },
  p: {
    color: color.theme.text,
    textWrap: ['balance', 'pretty'],
  },
})

export const text2Div = styleVariants({
  wrapper: [containerGrid.small, { backgroundColor: 'whitesmoke', gridTemplateRows: 'repeat(6, minmax(50px, 1fr))' }],
  A: {
    gridRow: '1',

    gridColumn: '1 / 3',
    backgroundColor: 'orange',
    '@media': {
      [media.tablet]: {
        gridRow: '1 / -1',
        gridColumnStart: '1',
        gridColumnEnd: '4',
      },
      [media.md]: {
        gridRow: '1 / -1',
        gridColumnStart: '1',
        gridColumnEnd: '4',
      },
    },
  },
  title: {
    gridRow: '1 / span 1',
    gridColumnStart: 3,
    gridColumnEnd: '-2',
    backgroundColor: 'pink',
    '@media': {
      [media.tablet]: {
        gridRow: '1 / 2',
        gridColumnStart: 4,
        gridColumnEnd: '-',
      },
      [media.md]: {
        gridRow: '1 / 2',
        gridColumnStart: 4,
        gridColumnEnd: '-6',
      },
    },
  },
  text: {
    gridRow: '2 / -1',
    gridColumn: '2 / -1',
    backgroundColor: 'red',
    '@media': {
      [media.tablet]: {
        gridRow: '2 / -1',
        gridColumn: '6 / -2',
        backgroundColor: 'red',
      },
      [media.md]: {
        gridRow: '2 / -1',
        gridColumn: '6 / -2',
        backgroundColor: 'red',
      },
    },
  },
})
