import {globalStyle, styleVariants} from '@vanilla-extract/css'
import {defaultContainer, maxInlineSizeFn} from './base.css.ts'

const container = styleVariants({
    default: [defaultContainer],
    small: [
        defaultContainer,
        {
            maxInlineSize: maxInlineSizeFn('small'),
        },
    ],
    medium: [
        defaultContainer,
        {
            maxInlineSize: maxInlineSizeFn('medium'),
        },
    ],
    large: [
        defaultContainer,
        {
            maxInlineSize: maxInlineSizeFn('large'),
        },
    ],
    xxl: [
        defaultContainer,
        {
            maxInlineSize: maxInlineSizeFn('xxl'),
        },
    ],
    full: {
        marginInline: 'auto',
        position: 'relative',
        boxSizing: 'border-box',
        maxInlineSize: 'none',
    },
})

globalStyle(`${container.default} > *`, {

    marginInline: 'auto',
    maxInlineSize: maxInlineSizeFn('default'),

})

const sizes = Object.keys(container).filter(key =>
    ['small', 'medium', 'large', 'xxl', 'full'].includes(key),
) as (keyof typeof container)[]

for (const size of sizes) {
    globalStyle(`${container.default} > ${container[size]}`, {

        maxInlineSize: maxInlineSizeFn(size),

    })
}
