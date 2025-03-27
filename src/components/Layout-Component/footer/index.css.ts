import { ContainerQuery } from './SocialNetwork/containerQuerry.css'
import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import * as T from '@theme'

export const base = style({
  backgroundColor: 'purple',
})
export const eachDiv = styleVariants({
  first: [
    base,
    {
      gridColumn: '1 / 2',
      '@media': {
        [T.media.tablet]: {
          gridColumn: '1 / 3',
        },
      },
    },
  ],
  third: [base, ContainerQuery, { placeContent: 'center' }],
})

export const Footer = style({
  marginTop: 'auto',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: T.space.xxxs,
  color: 'white',
  '@media': {
    [T.media.lg]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: T.space.sm,
    },
    [T.media.tablet]: {
      gridTemplateColumns: 'repeat(2,1fr)',
    },
  },
})

export const footerDescription = style({
  gridColumn: '1 / 2',
  backgroundColor: 'orangered',
  '@media': {
    [T.media.tablet]: {
      gridColumn: '1 / 3',
    },
  },
})

globalStyle(`${Footer} h4`, {
  marginBlockEnd: T.space.xs,
  textDecoration: 'underline',
  '@media': {
    [T.media.mobile]: {
      marginBlockEnd: '0.1em',
    },
    [T.media.tablet]: {
      marginBlockEnd: '0.5em',
    },
  },
})

globalStyle(`${eachDiv.third} span`, {
  paddingBlock: T.space.xxs,
  '@media': {
    [T.media.md]: {
      paddingBlock: T.space.xxs,
    },
  },
})

export const address = style({
  backgroundColor: 'orange',
  selectors: {
    '&:before': {
      marginInlineEnd: 10,
      content: '📍',
      '@media': {
        [T.media.mobile.portrait]: {
          marginInlineEnd: 4,
        },
      },
    },
  },
})
