import { recipe } from '@vanilla-extract/recipes'
import { media } from '@styles/token'
import { globalStyle } from '@vanilla-extract/css'

import { containerSize, maxInlineSizeFn } from '../variants/base.css.ts'

const containerGridCol = recipe({
  base: {
    marginInline: 'auto',
    position: 'relative',
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: '1fr',
  },
  variants: {
    size: {
      default: { maxInlineSize: maxInlineSizeFn('default') },
      small: { maxInlineSize: maxInlineSizeFn('small') },
      medium: { maxInlineSize: maxInlineSizeFn('medium') },
      large: { maxInlineSize: maxInlineSizeFn('large') },
      xxl: { maxInlineSize: maxInlineSizeFn('xxl') },
      full: { maxInlineSize: 'none' },
    },
    cols: {
      2: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(2, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(2, 1fr)' },
        },
      },
      3: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(2, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(3, 1fr)' },
        },
      },
      4: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(2, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(4, 1fr)' },
        },
      },

      6: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(3, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(6, 1fr)' },
        },
      },
      8: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(4, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(8, 1fr)' },
        },
      },
      12: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(6, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(12, 1fr)' },
        },
      },
      24: {
        '@media': {
          [media.tablet]: { gridTemplateColumns: 'repeat(12, 1fr)' },
          [media.md]: { gridTemplateColumns: 'repeat(24, 1fr)' },
        },
      },
    },
  },
  defaultVariants: {
    size: 'small',
    cols: 2,
  },
})

// Global styles adaptés
globalStyle(`${containerGridCol({ size: 'default' })} > *`, {
  maxInlineSize: maxInlineSizeFn('default'),
})
const sizesContainerGridCol = Object.keys(containerSize).filter(key =>
  ['small', 'medium', 'large', 'xxl', 'full'].includes(key),
) as (keyof typeof containerSize)[]

for (const size of sizesContainerGridCol) {
  globalStyle(`${containerGridCol({ size: 'default' })} > ${containerGridCol({ size })}`, {
    maxInlineSize: maxInlineSizeFn(size),
  })
}
