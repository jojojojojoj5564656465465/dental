import * as c from '@recipe'
import { style, styleVariants } from '@vanilla-extract/css'
import { fontSize, media } from '@styles/token'
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
      aspectRatio: "1",
      //display: 'grid',
      isolation: "isolate",
      placeItems: "center",
      order: 2,
      //backgroundColor: T.color.theme.background,
      //color: 'yellow',
      "@media": {
        [media.lg]: {
          display: "none",
          order: 3,
        },
      },
    },
    //T.colorTheme.darkBlueBanner,
    c.containerGrid({
      theme: "darkBlueBanner",
      background: true,
      size: "full",
    }),
  ],
  svg: {
    width: 36,
    height: 36,
    zIndex: 1000,
    display: "block",
    color: theme.text,
    strokeWidth: 2,
  },
});

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
      fontFamil"dancingScript"pt',
      fontSiz"2xl"xl',
      textAlig"center"er',
      colo"text"t',
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
