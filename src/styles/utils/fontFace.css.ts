import { fontFace } from '@vanilla-extract/css'

const dancingScript = fontFace({
  src: 'url(@fonts/dancing/dancing.woff2) format("woff2")',
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontDisplay: 'auto',
})

const nunito = fontFace([
  {
    src: "url(@fonts/numito/Nunito-Italic.woff2) format('woff2')",
    fontWeight: 'normal',
    fontDisplay: 'auto',
    fontStyle: 'italic',
  },
  {
    src: "url(@fonts/numito/Nunito-Regular.woff2) format('woff2')",
    fontWeight: 'normal',
    fontDisplay: 'auto',
    fontStyle: 'normal',
  },
  {
    src: "url(@fonts/numito/Nunito-SemiBold.woff2) format('woff2')",
    fontWeight: '600-900',
    fontStyle: 'normal',
    fontDisplay: 'auto',
  },
])

const exo = fontFace([
  {
    src: 'url(@fonts/exo/Exo-Light.woff2) format(woff2)',
    fontDisplay: 'auto',
    fontWeight: '100-400',
  },
  {
    src: 'url(@fonts/exo/Exo-Regular.woff2) format(woff2)',
    fontDisplay: 'auto',
    fontWeight: 'normal',
  },

  {
    src: 'url(@fonts/exo/Exo-SemiBold.woff2) format(woff2)',
    fontDisplay: 'auto',
    fontWeight: '600',
  },
  {
    fontDisplay: 'auto',
    src: 'url(@fonts/exo/Exo-Bold.woff2) format(woff2)',
    fontWeight: '700-900',
  },
])

export default {
  exo,
  nunito,
  dancingScript,
}
