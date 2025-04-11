import {style} from '@vanilla-extract/css'
import {custom} from './layer.css.ts'

export const defaultContainer = style({
  '@layer': {
    [custom]: {
      marginInline: 'auto',
      position: 'relative',
      boxSizing: 'border-box',
    },
  },
})

export const containerSize = {
  default: '60rem',
  small: '60rem',
  medium: '72rem',
  large: '90rem',
  xxl: '120rem',
  full: '100svw',
} as const

export const maxInlineSizeFn = (x: keyof typeof containerSize): string => {
  return `min(calc(100% - clamp(0.75rem, 0.42rem + 1.7vw, 1.7rem) * 2), ${containerSize[x]}, 130rem)`
}
