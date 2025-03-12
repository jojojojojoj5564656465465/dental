import { style, globalStyle, styleVariants } from '@vanilla-extract/css'
import { fontFamily, color, fontSize, space, media, container } from '@theme'
import { boxShadowGenerator, globalStyleTag, ld, fluid, flex, hover } from '@styles/utils'


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
  justifyContent: 'space-evenly',
  alignContent: 'space-evenly',
  gap: fluid(20,50),

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
      outline: color.background.blue,
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
        backgroundColor: color.blue.accent,
        inlineSize: '100%',
        blockSize: '100%',

        left: 0,
        bottom: '-100%',

        transition: 'bottom 0.4s ease-out',
        zIndex: -1,
      },
      '@media': {
        [media.tablet.landscape]: {
          minInlineSize: 'calc(70vw / 2)',
        },
        [media.mobile.portrait]: {
          blockSize: 'calc(100svh / 4 - 50px)',
          minBlockSize: '9rem',
        },
        [media.mobile.landscape]: {
          minInlineSize: 'calc(100svw / 4)',
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
    color: color.text.accent,
  },
  p: {
    color: color.text.light,
    textWrap: ['balance', 'pretty'],
  },
})
