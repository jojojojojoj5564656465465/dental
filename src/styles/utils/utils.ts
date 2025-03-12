import { type GlobalStyleRule, globalStyle, style } from '@vanilla-extract/css'
import {media} from "./theme.css.ts"
import {
  type InferInput,
  array,
  description,
  maxLength,
  maxValue,
  minLength,
  minValue,
  number,
  object,
  optional,
  parser,
  partialCheck,
  pipe,
  record,
  safeParser,
  string,
  transform,
  union,
} from 'valibot'

type hoverProps = {
  backgroundColor: string
  color?: string | 'inherit'
  border?: string | 'inherit'
}

/**
 * @description Hover function to handle all focus activate states
 *
 * @param {hoverProps} props
 * @returns {*}
 */
const hover = (obj: hoverProps) => {
  const vObjValidatorKeyValues = object({
    backgroundColor: string(),
    color: optional(string()),
    border: optional(string()),
  })
  const parserHover = parser(vObjValidatorKeyValues)

  const { backgroundColor, color, border } = parserHover(obj)

  return style({
    ':active': {
      backgroundColor,
      color: 'inherit',
    },
    ':focus': {
      outline: `min(4px, 3px + 0.1vw) solid ${backgroundColor}`,
      outlineOffset: '1px',
      color: 'inherit',
    },
    '@media': {
      'screen and (hover: hover) and (min-width: 51em)': {
        ':hover': {
          backgroundColor,
          color: color ?? 'inherit',
          border: border ?? 'inherit',
        },
      },
    },
  })
}


/**
 * Description placeholder
 *
 * @export
 * @param {("row" | "column")} direction  row or column
 * @param {(1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9)} flexNumber
 * @returns {*}
 * MARK: FLEX
 */
function flex(direction: 'row' | 'column', flexNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9) {
  type PositionProps = Readonly<'start' | 'center' | 'end'>
  const positions = {
    1: ['start', 'start'],
    2: ['center', 'start'],
    3: ['end', 'start'],
    4: ['start', 'center'],
    5: ['center', 'center'],
    6: ['end', 'center'],
    7: ['start', 'end'],
    8: ['center', 'end'],
    9: ['end', 'end'],
  } as const satisfies Record<typeof flexNumber, readonly [PositionProps, PositionProps]>
  const [justify, align] = positions[flexNumber]
  return style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: justify,
    alignItems: align,
  })
}

/**
 * @description Calculates a fluid value based px
 * @param {number} minSize use pixels
 * @param {number} maxSize  use pixels
 * @returns {string} Clamp value string (e.g. "clamp(10rem, 12rem + 12vw, 20rem)")
 * @version 1.0.2
 * @todo Implement this function.
 */
const fluid = (minSize: number, maxSize: number) => {
  const numberConvertToRem = pipe(
    number(),
    maxValue(190),
    minValue(1),
    transform(e => e / 16),
    description('convert to rem px'),
  )
  const fluid = pipe(
    object({
      minSize: numberConvertToRem,
      maxSize: numberConvertToRem,
    }),
    partialCheck(
      [['minSize'], ['maxSize']],
      input => input.minSize < input.maxSize,
      'maxVwRem is less than minScreenW invert data',
    ),
    transform(obj => {
      const slope = (obj.maxSize - obj.minSize) / (75 - 20)
      const yAxisIntersection = -20 * slope + obj.minSize
      return `clamp(${obj.minSize}rem, ${yAxisIntersection}rem + ${slope * 100}vw, ${obj.maxSize}rem)`
    }),
  )
  const parserFluid = parser(fluid)
  return parserFluid({ minSize, maxSize })
}
/**
 * light-dark css
 * add => color-scheme: light dark;
 * @param {string} light
 * @param {string} dark
 * @returns {string}
 */
const ld = (light: string, dark: string) => `light-dark(${light},${dark})`

/**
 * ! ajouter un layer en plus
 */
type HtmlP = Partial<Record<string, GlobalStyleRule>>
/**
 * Applique des styles globaux à des éléments HTML donnés sous un parent spécifié.
 * @param parent - Le sélecteur parent pour les styles.
 * @param obj - Un objet de styles à appliquer aux éléments HTML.
 */
const globalStyleTag = (parent: string, obj: HtmlP): void => {
  const vObjValidatorKeyValues = record(string(), union([string(), number()]), 'Css Object not valid in globalStyleTag')
  const checkCss = safeParser(vObjValidatorKeyValues)
  for (const [key, value] of Object.entries(obj)) {
    const result = checkCss(value)
    if (result.success) {
      globalStyle(`${parent} :is(${key})`, {
        '@layer': {
          custom: result.output,
        },
      })
    }
  }
}

function boxShadowGenerator(colors: string[], spread = 1): string | undefined {
  const ArrayLengthSchema = pipe(array(string()), minLength(2), maxLength(7, 'limite is 7 colors'))
  const parserArrayLength = safeParser(ArrayLengthSchema)
  const { success, output, issues } = parserArrayLength(colors)
  !success && console.error(issues)
  return success
    ? output
        .map((color, index) => {
          return `0 0 0 ${spread * (index + 1)}px ${color}`
        })
        .join(', ')
    : ''
}
export { boxShadowGenerator, globalStyleTag, ld, fluid, flex, hover }