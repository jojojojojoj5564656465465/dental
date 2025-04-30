import * as c from '@recipe'
import { fontSize, media } from '@styles/token'
import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { fluid, globalStyleTag } from 'src/styles/utils/utils.ts'
import { theme } from '@/styles/utils/themeNew.css'

export const icon = style({
  width: 36,
  aspectRatio: '1',
  display: 'inline-block',
})

export const buttonMobile = styleVariants({
  wrapper: [
    {
      minBlockSize: 36,
      margin: 5,
      aspectRatio: '1',
      //display: 'grid',
      isolation: 'isolate',
      placeItems: 'center',
      order: 2,
      backgroundColor: 'red',
      //color: 'yellow',
      '@media': {
        [media.lg]: {
          display: 'none',
          order: 3,
        },
      },
    },
    //T.colorTheme.darkBlueBanner,
    c.containerGrid({
      theme: 'darkBlueBanner',
      background: true,
      size: 'full',
    }),
  ],
  svg: {
    width: 36,
    height: 36,
    zIndex: 1000,
    display: 'block',
    color: theme.text,
    strokeWidth: 2,
  },
})

export const one = styleVariants({
  wrapper: [
    c.containerGrid({ theme: 'blueLightBg', size: 'full' }),
    {
      //cursor: 'pointer',
      //backgroundColor: T.color.blue.dark,
      height: 'auto',
      minBlockSize: '70px',
      //display: 'grid',
      gridTemplateColumns: '1fr min-content',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginInline: fluid(10, 50),
      '@media': {
        [media.lg]: {
          gridTemplateColumns: 'min-content 0 min-content',
        },
      },
    },
  ],
  logo: [
    c.textSprinkles({
      fontFamily: 'dancingScript',
      fontSize: '2xl',
      textAlign: 'center',
      color: 'text',
    }),
    {
      marginInline: 20,
      display: 'flex',
      order: 1,
      gap: 10,
      //color: T.color.text.light,
    },
  ],
})

const menuBase = style({
  display: 'flex',
  flexDirection: 'column',
  gridColumn: 'span 2',
  justifyContent: 'center',
  order: 3,
  gap: 60,
  transition: 'max-height 0.3s ease-out, opacity 0.2s ease-out',
  //backgroundColor: T.color.background.blue,
  overflow: 'hidden',
  color: 'black',
  '@media': {
    [media.lg]: {
      maxHeight: 'none !important',
      marginInlineStart: 'auto',
      flexDirection: 'row',
      justifyContent: 'end',
      order: 2,
      opacity: '1 !important',
    },
  },
})

export const menuState = styleVariants({
  open: [
    menuBase,
    c.textSprinkles({ color: 'text' }),
    {
      maxBlockSize: '500px',
      opacity: 1,
    },
  ],
  close: [
    menuBase,
    {
      maxHeight: 0,
      opacity: 0,
      '@media': {
        [media.lg]: {
          display: 'flex',
        },
      },
    },
  ],
  link: [
    c.textSprinkles({
      fontSize: 'md',
      textAlign: ['center', 'center', 'right'],
      color: 'text',
    }),
  ],
})

globalStyleTag(menuState.close, {
  span: {
    textAlign: 'center',
    marginBlock: 'center',
    fontSize: fontSize.lg,
  },
})

// export const subMenu = style([
//   flex({ direction: 'column', gap: 'sm', side: 4 }),
//   {
//     backgroundColor: 'red',
//     ':first-child': {
//       backgroundColor: 'blue',
//     },
//   },
// ])
export const navbar = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
})

export const logo = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
})

export const menuToggle = style({
  fontSize: '1rem',
})

export const menu = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  color: 'black',
  display: 'flex',
  backgroundColor: 'lightgreen',
  flexGrow: 1,
  inlineSize: 500,
  gap: '2rem',
})

export const menuOpen = style({
  // display: 'block',
})

export const menuClosed = style({
  //display: 'none',
})

export const menuItem = style({
  margin: '0.5rem 0',
  display: 'flex',
  flexDirection: 'column',
  color: 'green',
})
globalStyle(`${menuItem}:has(ul):after`, {
  content: '→',
  marginLeft: '0.5rem',
  fontSize: '0.8rem',
  color: 'gray',
  backgroundColor: 'orange',
})

export const subMenuWrapper = style({
  position: 'relative',
})

export const subMenuToggle = style({
  fontSize: '1rem',
})

export const subMenu = style({
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: '#fff',
  listStyle: 'none',
  margin: 0,
  padding: '0.5rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  zIndex: 10,
})
