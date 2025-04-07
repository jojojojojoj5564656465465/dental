import {recipe} from '@vanilla-extract/recipes'
import {fallbackVar, globalStyle} from '@vanilla-extract/css'
import {colorTheme, theme} from '../utils/themeNew.css.ts'
import {maxInlineSizeFn} from '@styles/variants/base.css.ts'


export const container = recipe({
    base: {
        position: 'relative',
        boxSizing: 'border-box',
        color: theme.text,
        marginInline: 'auto',
    },
    variants: {
        theme: {
            ...colorTheme
        },

        hover: {
            true: {
                cursor: 'pointer',
                ':active': {
                    color: fallbackVar(theme.textHover, 'inherit'),
                    backgroundColor: fallbackVar(theme.backgroundHover, 'inherit'),
                    transform: 'scale(1.01,1)',
                    outline: `min(4px, 3px + 0.1vw) solid ${theme.backgroundHover}`,
                    outlineOffset: '1.6px',
                },
                ':focus': {
                    outline: 'min(4px, 3px + 0.1vw) solid yellow',
                    outlineOffset: '4px',
                },

                ':hover': {
                    backgroundColor: fallbackVar(theme.backgroundHover, theme.background),
                    color: fallbackVar(theme.textHover, theme.text, 'inherit'),
                    borderColor: fallbackVar(theme.textHover, 'inherit'),
                },
            },
        },
        background: {
            true: {
                backgroundColor: theme.background,
            },
        },
        size: {
            small: {
                maxInlineSize: maxInlineSizeFn('small'),
            },
            medium: {
                maxInlineSize: maxInlineSizeFn('medium'),
            },
            large: {
                maxInlineSize: maxInlineSizeFn('large'),
            },
            xxl: {
                maxInlineSize: maxInlineSizeFn('xxl'),
            },
            full: {
                maxInlineSize: 'none',
            },
        },
    },
    defaultVariants: {
        hover: false,
        background: true,
        size: 'full',
    },
})

globalStyle(
    `${container.classNames.variants.size.small}:has(> :is(${container.classNames.variants.size.medium}, ${container.classNames.variants.size.large},${container.classNames.variants.size.xxl},)) > *`,
    {
        maxInlineSize: '100%',
    },
)
globalStyle(
    `${container.classNames.variants.size.medium}:has(> :is(${container.classNames.variants.size.large}, ${container.classNames.variants.size.xxl})) > *`,
    {
        maxInlineSize: '100%',
    },
)
globalStyle(`${container.classNames.variants.size.large}:has(> :is(${container.classNames.variants.size.xxl})) > *`, {
    maxInlineSize: '100%',
})
