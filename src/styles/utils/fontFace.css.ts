import { fontFace } from '@vanilla-extract/css'

const dancingScript = fontFace({
  src: 'url(@fonts/dancing/dancing.woff2) format("woff2")',
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontDisplay: 'swap',
})

const nunito = fontFace([
  {
    src: "url(@fonts/numito/Nunito-Italic.woff2) format('woff2')",
    fontWeight: 'normal',
    fontDisplay: 'swap',
    fontStyle: 'italic',
  },
  {
    src: "url(@fonts/numito/Nunito-Regular.woff2) format('woff2')",
    fontWeight: 'normal',
    fontDisplay: 'swap',
    fontStyle: 'normal',
  },
  {
    src: "url(@fonts/numito/Nunito-SemiBold.woff2) format('woff2')",
    fontWeight: '600-900',
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
])

const exo = fontFace([
  {
    src: 'url(@fonts/exo/Exo-Light.woff2) format(woff2)',
    fontDisplay: 'swap',
    fontWeight: '100-400',
  },
  {
    src: 'url(@fonts/exo/Exo-Regular.woff2) format(woff2)',
    fontDisplay: 'swap',
    fontWeight: 'normal',
  },

  {
    src: 'url(@fonts/exo/Exo-SemiBold.woff2) format(woff2)',
    fontDisplay: 'swap',
    fontWeight: '600',
  },
  {
    fontDisplay: 'swap',
    src: 'url(@fonts/exo/Exo-Bold.woff2) format(woff2)',
    fontWeight: '700-900',
  },
])

export default {
  exo,
  nunito,
  dancingScript,
}
