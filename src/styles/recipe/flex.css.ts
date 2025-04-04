import { recipe } from '@vanilla-extract/recipes'

export const flex = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    direction: {
      row: { flexDirection: 'row' },
      rowReverse: { flexDirection: 'row-reverse' },
      column: { flexDirection: 'column' },
    },
    side: {
      1: { justifyContent: 'start', alignItems: 'start' },
      2: { justifyContent: 'center', alignItems: 'start' },
      3: { justifyContent: 'end', alignItems: 'start' },
      4: { justifyContent: 'start', alignItems: 'center' },
      5: { justifyContent: 'center', alignItems: 'center' },
      6: { justifyContent: 'end', alignItems: 'center' },
      7: { justifyContent: 'start', alignItems: 'end' },
      8: { justifyContent: 'center', alignItems: 'end' },
      9: { justifyContent: 'end', alignItems: 'end' },
    },
    space: {
      between: { justifyContent: 'space-between' },
      around: { justifyContent: 'space-around' },
      evenly: { justifyContent: 'space-evenly' },
    },
    wrap: {
      true: {
        flexWrap: 'wrap',
      },
    },
  },
  defaultVariants: {
    direction: 'row',
    side: 1,
    wrap: false,
  },
})
