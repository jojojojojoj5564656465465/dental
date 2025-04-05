import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

import { fontSize, space } from '../token'
import { theme } from '../utils/themeNew.css.ts'
import f from '@styles/utils/fontFace.css.ts'

const text = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    fontSize: fontSize,
    paddingBlockStart: space,
    paddingBlockEnd: space,
    marginBlockStart: space,
    marginBlockEnd: space,
    color: theme,
    backgroundColor: theme,
    borderColor: theme,
    textAlign: ['start', 'center', 'end'],
    fontFamily: {
      dancingScript: `${f.dancingScript}, Times, serif`,
      exo: `${f.exo}, Times, serif`,
      numito: `${f.nunito}, Arial, sans-serif`,
    },
  },
  shorthands: {
    paddingY: ['paddingBlockEnd', 'paddingBlockStart'],
    marginY: ['marginBlockEnd', 'marginBlockStart'],
  },
})

export const textSprinkles = createSprinkles(text)
