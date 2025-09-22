import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderTemplate, e as renderComponent, s as spreadAttributes, F as Fragment, u as unescapeHTML, f as renderHead } from '../chunks/astro/server_CslnDqvF.mjs';
import 'kleur/colors';
import { recipe } from '@vanilla-extract/recipes';
import { fontFace, layer, createGlobalTheme, globalStyle, createThemeContract, createTheme, style, fallbackVar, createVar, assignVars, styleVariants, createContainer, keyframes } from '@vanilla-extract/css';
import * as v from 'valibot';
import { pipe, number, maxValue, minValue, transform, description as description$1, object, partialCheck, parser } from 'valibot';
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { calc } from '@vanilla-extract/css-utils';
import 'clsx';
/* empty css                                 */
import { c as componentQrl, i as inlinedQrl, _ as _jsxQ, a as _jsxC, b as _wrapProp, d as _IMMUTABLE, u as useSignal, e as useComputedQrl, f as useVisibleTaskQrl, g as _noopQrl, h as _fnSignal, j as useLexicalScope, F as Fragment$1, k as useStylesScopedQrl, l as useOn, m as _wrapSignal, n as createContextId, o as useContextProvider, p as useContext, q as _jsxBranch, r as useStore, s as useOnWindow } from '../chunks/server_CIIHA9Ox.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';
import { b as getImage } from '../chunks/_astro_assets_D-p6PVP_.mjs';
import { assignInlineVars } from '@vanilla-extract/dynamic';
export { renderers } from '../renderers.mjs';

const dancingScript = fontFace({
  src: 'url(@fonts/dancing/dancing.woff2) format("woff2")',
  fontDisplay: "auto",
  fontStyle: "normal",
  fontWeight: "normal"
});
const nunito = fontFace([
  {
    src: "url(@fonts/numito/Nunito-Italic.woff2) format('woff2')",
    fontWeight: "normal",
    fontDisplay: "auto",
    fontStyle: "italic"
  },
  {
    src: "url(@fonts/numito/Nunito-Regular.woff2) format('woff2')",
    fontWeight: "normal",
    fontDisplay: "auto",
    fontStyle: "normal"
  },
  {
    src: "url(@fonts/numito/Nunito-SemiBold.woff2) format('woff2')",
    fontWeight: "600-900",
    fontStyle: "normal",
    fontDisplay: "auto"
  }
]);
const exo = fontFace([
  {
    src: "url(@fonts/exo/Exo-Light.woff2) format(woff2)",
    fontDisplay: "auto",
    fontWeight: "100-400"
  },
  {
    src: "url(@fonts/exo/Exo-Regular.woff2) format(woff2)",
    fontDisplay: "auto",
    fontWeight: "normal"
  },
  {
    src: "url(@fonts/exo/Exo-SemiBold.woff2) format(woff2)",
    fontDisplay: "auto",
    fontWeight: "600"
  },
  {
    fontDisplay: "auto",
    src: "url(@fonts/exo/Exo-Bold.woff2) format(woff2)",
    fontWeight: "700-900"
  }
]);
const f = {
  exo,
  nunito,
  dancingScript
};

const custom = layer("custom");
const base = layer({
  parent: custom
}, "base");
const reset = layer({
  parent: base
}, "reset");

const fluid = (minSize, maxSize) => {
  const numberConvertToRem = pipe(number(), maxValue(490), minValue(1), transform((e) => e / 16), description$1("convert to rem px"));
  const fluid2 = pipe(object({
    minSize: numberConvertToRem,
    maxSize: numberConvertToRem
  }), partialCheck([
    [
      "minSize"
    ],
    [
      "maxSize"
    ]
  ], (input) => input.minSize < input.maxSize, "maxVwRem is less than minScreenW invert data"), transform((obj) => {
    const slope = (obj.maxSize - obj.minSize) / 55;
    const yAxisIntersection = -20 * slope + obj.minSize;
    return `clamp(${obj.minSize}rem, ${yAxisIntersection}rem + ${slope * 100}vw, ${obj.maxSize}rem)`;
  }));
  const parserFluid = parser(fluid2);
  return parserFluid({
    minSize,
    maxSize
  });
};
const ld = (light, dark) => `light-dark(${light},${dark})`;

createGlobalTheme(":root", {
  dancingScript: `${f.dancingScript}, Times, serif`,
  exo: `${f.exo}, Times, serif`,
  numito: `${f.nunito}, Arial, sans-serif`
});
const variable$1 = createGlobalTheme(":root", {
  darkLight: "oklch(32.25% 0.0573 233.51)",
  darkDark: "oklch(25.88% 0.037 240.95)",
  accent: "oklch(58.09% 0.1151 235.69)",
  whiteBlue: "oklch(97.44% 0.0134 240.95)",
  whiteToBlack: ld("oklch(97.44% 0.0134 240.95)", "black"),
  blackToWhite: ld("black", "oklch(97.44% 0.0134 240.95)"),
  textLight: "oklch(53.36% 0.0445 230.26)",
  r: ld("orange", "green")
});
globalStyle("body", {
  backgroundColor: variable$1.whiteBlue
});
const theme$1 = createThemeContract({
  background: null,
  backgroundHover: null,
  primary: null,
  secondary: null,
  accent: null,
  text: null,
  textHover: null,
  divider: null
});
const accent$1 = createTheme(theme$1, {
  background: variable$1.accent,
  backgroundHover: variable$1.darkLight,
  primary: "white",
  secondary: "null",
  accent: "white",
  text: "white",
  textHover: variable$1.darkDark,
  divider: "#0E384C1A"
});
const darkBlueBanner$1 = createTheme(theme$1, {
  background: "oklch(32.25% 0.0573 233.51)",
  backgroundHover: "oklch(72.55% 0.0573 233.51)",
  primary: "white",
  secondary: "null",
  accent: variable$1.accent,
  text: "white",
  textHover: "black",
  divider: "white"
});
const whiteBg$1 = createTheme(theme$1, {
  background: "white",
  backgroundHover: variable$1.darkLight,
  primary: variable$1.darkDark,
  secondary: "null",
  accent: variable$1.accent,
  text: variable$1.textLight,
  textHover: "white",
  divider: "oklch(0.67 0.1 207.53)"
});
const whiteLD = createTheme(theme$1, {
  background: "white",
  backgroundHover: variable$1.darkLight,
  primary: variable$1.darkDark,
  secondary: "null",
  accent: variable$1.accent,
  text: variable$1.textLight,
  textHover: variable$1.accent,
  divider: variable$1.accent
});
const blueLightBg$1 = createTheme(theme$1, {
  background: "oklch(97.44% 0.0134 240.95)",
  backgroundHover: "#0e384c",
  primary: "#0e384c",
  secondary: "null",
  accent: variable$1.accent,
  text: "oklch(53.36% 0.0445 230.26)",
  textHover: "white",
  divider: "#0E384C1A"
});
const colorTheme = {
  accent: accent$1,
  darkBlueBanner: darkBlueBanner$1,
  whiteBg: whiteBg$1,
  blueLightBg: blueLightBg$1,
  whiteLD
};
const color$1 = {
  variable: variable$1,
  theme: theme$1
};

style({
  "@layer": {
    [custom]: {
      marginInline: "auto",
      position: "relative",
      boxSizing: "border-box"
    }
  }
});
const containerSize$1 = {
  default: "60rem",
  small: "60rem",
  medium: "72rem",
  large: "90rem",
  xxl: "120rem",
  full: "100svw"
};
const maxInlineSizeFn$1 = (x) => {
  return `min(calc(100% - clamp(0.75rem, 0.42rem + 1.7vw, 1.7rem) * 2), ${containerSize$1[x]}, 130rem)`;
};

const fontSize = {
  base: "clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)",
  md: "clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)",
  "4xl": "clamp(3.36rem, calc(2.87rem + 2.45vw), 4.77rem)"};

const space = {
  xxxs: "clamp(0.3125em, 0.3125em + 0dvw, 0.3125em)",
  xxs: "clamp(0.5625em, 0.5408em + 0.1087dvw, 0.625em)",
  xs: "clamp(0.875em, 0.8533em + 0.1087dvw, 0.9375em)",
  sm: "clamp(1.125em, 1.0815em + 0.2174dvw, 1.25em)",
  md: "clamp(1.6875em, 1.6223em + 0.3261dvw, 1.875em)",
  lg: "clamp(2.25em, 1.6223em + 0.4348dvw, 2.5em)",
  xl: "clamp(3.375em, 1.6223em + 0.6522dvw, 3.75em)",
  xxl: "clamp(4.5em, 4.3261em + 0.8696dvw, 5em)",
  xxxl: "clamp(6.75em, 6.4891em + 1.3043dvw, 7.5em)",
  auto: "auto",
  minContent: "min-content",
  maxContent: "max-content",
  "1rem": "1rem",
  "1.25rem": "1.25rem",
  "1.5rem": "1.5rem",
  "1.75rem": "1.75rem",
  "2rem": "2rem",
  "2.25rem": "2.25rem",
  "2.5rem": "2.5rem",
  "2.75rem": "2.75rem"
};

const media = {
  mobile: "only screen and (orientation: portrait) and (max-width: 27rem)",
  tablet: "only screen and (27rem <= width)",
  md: "all and (59rem <= width)"};

const marginPaddingSprinkles = defineProperties({
  conditions: {
    mobile: {},
    tablet: {
      "@media": media.tablet
    },
    desktop: {
      "@media": media.md
    }
  },
  defaultCondition: "mobile",
  responsiveArray: [
    "mobile",
    "tablet",
    "desktop"
  ],
  properties: {
    paddingInlineStart: space,
    paddingInlineEnd: space,
    paddingInline: space,
    paddingBlock: space,
    paddingBlockStart: space,
    paddingBlockEnd: space,
    padding: space,
    marginInlineStart: space,
    marginInlineEnd: space,
    marginBlockStart: space,
    marginBlockEnd: space,
    marginInline: space,
    marginBlock: space,
    margin: space
  },
  shorthands: {
    py: [
      "paddingBlockEnd",
      "paddingBlockStart"
    ],
    my: [
      "marginBlockEnd",
      "marginBlockStart"
    ],
    px: [
      "paddingInlineEnd",
      "paddingInlineStart"
    ],
    mx: [
      "marginInlineEnd",
      "marginInlineStart"
    ],
    m: [
      "marginInlineEnd",
      "marginInlineStart",
      "marginBlockEnd",
      "marginBlockStart"
    ],
    p: [
      "paddingInlineEnd",
      "paddingInlineStart",
      "paddingBlockEnd",
      "paddingBlockStart"
    ]
  }
});

const lineHeights = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
  inherit: "inherit"
};
const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
  inherit: "inherit"
};
const letterSpacings = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0em",
  wide: "0.05em",
  wider: "0.1em",
  widest: "0.15em",
  inherit: "inherit"
};
const textProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: {
      "@media": media.tablet
    },
    desktop: {
      "@media": media.md
    }
  },
  defaultCondition: "mobile",
  responsiveArray: [
    "mobile",
    "tablet",
    "desktop"
  ],
  properties: {
    // --- Font & Typeface ---
    fontSize: {
      cqi: "clamp(0.60rem, .65cqi, .9cqi)",
      xs: "clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem)",
      sm: "clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem)",
      base: "clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)",
      md: "clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)",
      lg: "clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem)",
      xl: "clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem)",
      "2xl": "clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)",
      "3xl": "clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem)",
      "4xl": "clamp(3.36rem, calc(2.87rem + 2.45vw), 4.77rem)",
      "5xl": "clamp(4.03rem, calc(3.36rem + 3.36vw), 5.96rem)",
      "6xl": "clamp(4.84rem, calc(3.93rem + 4.54vw), 7.45rem)",
      inherit: "inherit"
    },
    fontFamily: {
      dancingScript: `${f.dancingScript}, Times, serif`,
      exo: `${f.exo}, Times, serif`,
      numito: `${f.nunito}, Arial, sans-serif`,
      inherit: "inherit"
    },
    fontWeight: fontWeights,
    lineHeight: lineHeights,
    letterSpacing: letterSpacings,
    fontStyle: [
      "normal",
      "italic",
      "inherit"
    ],
    // --- Color & Appearance ---
    color: theme$1,
    backgroundColor: theme$1,
    borderColor: theme$1,
    // --- Text Layout & Decoration ---
    textAlign: [
      "left",
      "center",
      "right",
      "justify",
      "start",
      "end",
      "inherit"
    ],
    verticalAlign: [
      "baseline",
      "top",
      "middle",
      "bottom",
      "text-top",
      "text-bottom",
      "sub",
      "super",
      "inherit"
    ],
    textTransform: [
      "uppercase",
      "lowercase",
      "capitalize",
      "none",
      "inherit"
    ],
    textDecoration: [
      "underline",
      "line-through",
      "none",
      "inherit"
    ],
    textDecorationColor: theme$1,
    // textDecorationStyle: ['solid', 'dotted', 'dashed', 'wavy'], // Optional
    // textDecorationThickness: ['auto', 'from-font', '1px', '2px'], // Optional
    textOverflow: [
      "clip",
      "ellipsis",
      "inherit"
    ],
    whiteSpace: [
      "normal",
      "nowrap",
      "pre",
      "pre-wrap",
      "pre-line",
      "inherit"
    ],
    overflow: [
      "visible",
      "hidden",
      "clip",
      "scroll",
      "auto"
    ],
    // --- Visibility & Interaction ---
    visibility: [
      "visible",
      "hidden",
      "collapse"
    ],
    cursor: [
      "pointer",
      "default",
      "text",
      "not-allowed"
    ]
  }
});
const textSprinkles = createSprinkles(textProperties, marginPaddingSprinkles);

const container$1 = recipe({
  base: {
    position: "relative",
    boxSizing: "border-box",
    color: theme$1.text,
    marginInline: "auto"
  },
  variants: {
    theme: {
      ...colorTheme
    },
    marginBlock: {
      sm: textSprinkles({
        marginBlock: "sm"
      }),
      md: textSprinkles({
        marginBlock: "md"
      }),
      lg: textSprinkles({
        marginBlock: "lg"
      }),
      xl: textSprinkles({
        marginBlock: "xl"
      }),
      xxl: textSprinkles({
        marginBlock: "xxl"
      }),
      xxxl: textSprinkles({
        marginBlock: "xxxl"
      })
    },
    paddingBlock: {
      sm: textSprinkles({
        paddingBlock: "sm"
      }),
      md: textSprinkles({
        paddingBlock: "md"
      }),
      lg: textSprinkles({
        paddingBlock: "lg"
      }),
      xl: textSprinkles({
        paddingBlock: "xl"
      }),
      xxl: textSprinkles({
        paddingBlock: "xxl"
      }),
      xxxl: textSprinkles({
        paddingBlockStart: "xxxl"
      })
    },
    hover: {
      true: {
        cursor: "pointer",
        ":active": {
          color: fallbackVar(theme$1.textHover, "inherit"),
          backgroundColor: fallbackVar(theme$1.backgroundHover, "inherit"),
          outline: `min(4px, 3px + 0.1vw) solid ${theme$1.backgroundHover}`,
          outlineOffset: "1.6px"
        },
        ":focus": {
          outline: "min(4px, 3px + 0.1vw) solid yellow",
          outlineOffset: "4px"
        },
        "@supports": {
          "selector(:hover)": {
            ":hover": {
              backgroundColor: fallbackVar(theme$1.backgroundHover, theme$1.background),
              color: fallbackVar(theme$1.textHover, theme$1.text, "inherit"),
              borderColor: fallbackVar(theme$1.textHover, "inherit")
            }
          },
          "not selector(:hover)": {
            ":active": {
              color: fallbackVar(theme$1.textHover, "inherit"),
              backgroundColor: fallbackVar(theme$1.backgroundHover, "inherit"),
              transform: "scale(1.03)",
              outline: `min(4px, 3px + 0.1vw) solid ${theme$1.backgroundHover}`,
              outlineOffset: "1.6px"
            }
          }
        }
      }
    },
    background: {
      true: {
        backgroundColor: theme$1.background
      }
    },
    size: {
      small: {
        maxInlineSize: maxInlineSizeFn$1("small")
      },
      medium: {
        maxInlineSize: maxInlineSizeFn$1("medium")
      },
      large: {
        maxInlineSize: maxInlineSizeFn$1("large")
      },
      xxl: {
        maxInlineSize: maxInlineSizeFn$1("xxl")
      },
      full: {
        maxInlineSize: "none"
      }
    }
  },
  compoundVariants: [
    {
      variants: {
        theme: "accent",
        hover: true,
        background: true
      },
      style: {
        borderRadius: "10px",
        textAlign: "center"
      }
    }
  ],
  defaultVariants: {
    hover: false,
    background: true,
    size: "full"
  }
});
globalStyle(
  // Cette ligne génère le sélecteur CSS invalide
  `${container$1.classNames.variants.size.small}:has(> :is(${container$1.classNames.variants.size.medium}, ${container$1.classNames.variants.size.large}, ${container$1.classNames.variants.size.xxl})) > *`,
  {
    maxInlineSize: "100%"
  }
);
globalStyle(`${container$1.classNames.variants.size.medium}:has(> :is(${container$1.classNames.variants.size.large}, ${container$1.classNames.variants.size.xxl})) > *`, {
  maxInlineSize: "100%"
});
globalStyle(`${container$1.classNames.variants.size.large}:has(> :is(${container$1.classNames.variants.size.xxl})) > *`, {
  maxInlineSize: "100%"
});

const spaceLrVar$1 = createVar({
  syntax: "<length>",
  inherits: false,
  initialValue: "40px"
});
const spaceGapVar$1 = createVar({
  syntax: "<length>",
  inherits: false,
  initialValue: "20px"
});
const gridWrapper$1 = style({
  // Valeurs initiales des variables
  vars: {
    [spaceLrVar$1]: fluid(40, 80),
    [spaceGapVar$1]: fluid(20, 35)
  },
  gap: spaceGapVar$1
});
const vars$1 = createThemeContract({
  col: null
});
const numberOfColumnTheme$1 = style({
  vars: assignVars(vars$1, {
    col: "3"
  }),
  "@media": {
    [media.tablet]: {
      vars: assignVars(vars$1, {
        col: "6"
      })
    },
    [media.md]: {
      vars: assignVars(vars$1, {
        col: "12"
      })
    }
  }
});
const containerGridVariant = styleVariants(containerSize$1, (size) => [
  gridWrapper$1,
  numberOfColumnTheme$1,
  {
    gridTemplateColumns: `1fr repeat(${vars$1.col}, calc((min(100% - ${spaceLrVar$1}, ${size}) - (${vars$1.col} - 1) * ${spaceGapVar$1}) / ${vars$1.col})) 1fr`
  }
]);
const containerGrid = recipe({
  base: [
    {
      marginInline: "auto",
      position: "relative",
      boxSizing: "border-box",
      display: "grid"
    }
  ],
  variants: {
    size: {
      small: {
        maxInlineSize: maxInlineSizeFn$1("small")
      },
      medium: {
        maxInlineSize: maxInlineSizeFn$1("medium")
      },
      large: {
        maxInlineSize: maxInlineSizeFn$1("large")
      },
      xxl: {
        maxInlineSize: maxInlineSizeFn$1("xxl")
      },
      full: {
        maxInlineSize: "none"
      }
    },
    cols: {
      2: {
        "@media": {
          [media.tablet]: {
            gridTemplateColumns: "repeat(2, 1fr)"
          },
          [media.md]: {
            gridTemplateColumns: "repeat(2, 1fr)"
          }
        }
      },
      3: {
        "@media": {
          [media.tablet]: {
            gridTemplateColumns: "repeat(2, 1fr)"
          },
          [media.md]: {
            gridTemplateColumns: "repeat(3, 1fr)"
          }
        }
      },
      4: {
        "@media": {
          [media.tablet]: {
            gridTemplateColumns: "repeat(2, 1fr)"
          },
          [media.md]: {
            gridTemplateColumns: "repeat(4, 1fr)"
          }
        }
      },
      6: {
        "@media": {
          [media.tablet]: {
            gridTemplateColumns: "repeat(3, 1fr)"
          },
          [media.md]: {
            gridTemplateColumns: "repeat(6, 1fr)"
          }
        }
      },
      8: {
        "@media": {
          [media.tablet]: {
            gridTemplateColumns: "repeat(4, 1fr)"
          },
          [media.md]: {
            gridTemplateColumns: "repeat(8, 1fr)"
          }
        }
      },
      12: {
        "@media": {
          [media.tablet]: {
            gridTemplateColumns: "repeat(6, 1fr)"
          },
          [media.md]: {
            gridTemplateColumns: "repeat(12, 1fr)"
          }
        }
      },
      24: {
        "@media": {
          [media.tablet]: {
            gridTemplateColumns: "repeat(12, 1fr)"
          },
          [media.md]: {
            gridTemplateColumns: "repeat(24, 1fr)"
          }
        }
      }
    },
    fullSize: {
      small: [
        containerGridVariant.small
      ],
      medium: [
        containerGridVariant.medium
      ],
      large: [
        containerGridVariant.large
      ],
      xxl: [
        containerGridVariant.xxl
      ],
      full: [
        containerGridVariant.full
      ]
    },
    theme: {
      ...colorTheme
    },
    background: {
      true: {
        backgroundColor: fallbackVar(theme$1.background, "red")
      }
    },
    hover: {
      true: {
        cursor: "pointer",
        ":active": {
          color: fallbackVar(theme$1.textHover, "inherit"),
          backgroundColor: fallbackVar(theme$1.backgroundHover, "inherit"),
          transform: "scale(1.01,1)",
          outline: `min(4px, 3px + 0.1vw) solid ${theme$1.backgroundHover}`,
          outlineOffset: "1.6px"
        },
        ":focus": {
          outline: "min(4px, 3px + 0.1vw) solid yellow",
          outlineOffset: "4px"
        },
        ":hover": {
          backgroundColor: fallbackVar(theme$1.backgroundHover, theme$1.background),
          color: fallbackVar(theme$1.textHover, "inherit"),
          borderColor: fallbackVar(theme$1.textHover, "inherit")
        }
      }
    },
    gap: {
      true: {
        gap: spaceGapVar$1
      }
    }
  },
  defaultVariants: {
    hover: false,
    background: true
  }
});

const flex = recipe({
  base: {
    display: "flex"
  },
  variants: {
    direction: {
      row: {
        flexDirection: "row"
      },
      rowReverse: {
        flexDirection: "row-reverse"
      },
      column: {
        flexDirection: "column"
      }
    },
    side: {
      1: {
        justifyContent: "start",
        alignItems: "start"
      },
      2: {
        justifyContent: "center",
        alignItems: "start"
      },
      3: {
        justifyContent: "end",
        alignItems: "start"
      },
      4: {
        justifyContent: "start",
        alignItems: "center"
      },
      5: {
        justifyContent: "center",
        alignItems: "center"
      },
      6: {
        justifyContent: "end",
        alignItems: "center"
      },
      7: {
        justifyContent: "start",
        alignItems: "end"
      },
      8: {
        justifyContent: "center",
        alignItems: "end"
      },
      9: {
        justifyContent: "end",
        alignItems: "end"
      }
    },
    justifyContent: {
      between: {
        justifyContent: "space-between"
      },
      around: {
        justifyContent: "space-around"
      },
      evenly: {
        justifyContent: "space-evenly"
      }
    },
    alignItems: {
      stretch: {
        alignItems: "stretch"
      },
      baseline: {
        alignItems: "baseline"
      },
      firstBaseline: {
        alignItems: "first baseline"
      },
      lastBaseline: {
        alignItems: "last baseline"
      },
      safeCenter: {
        alignItems: "safe center"
      },
      unsafeCenter: {
        alignItems: "unsafe center"
      },
      safeStart: {
        alignItems: "safe start"
      }
    },
    wrap: {
      true: {
        flexWrap: "wrap"
      }
    },
    gap: {
      xxxs: {
        gap: space.xxxs
      },
      xxs: {
        gap: space.xxs
      },
      xs: {
        gap: space.xs
      },
      sm: {
        gap: space.sm
      },
      md: {
        gap: space.md
      },
      lg: {
        gap: space.lg
      },
      xl: {
        gap: space.xl
      },
      xxl: {
        gap: space.xxl
      },
      xxxl: {
        gap: space.xxxl
      },
      "1rem": {
        gap: space["1rem"]
      },
      "1.25rem": {
        gap: space["1.25rem"]
      },
      "1.5rem": {
        gap: space["1.5rem"]
      },
      "1.75rem": {
        gap: space["1.75rem"]
      },
      "2rem": {
        gap: space["2rem"]
      },
      "2.25rem": {
        gap: space["2.25rem"]
      },
      "2.5rem": {
        gap: space["2.5rem"]
      },
      "2.75rem": {
        gap: space["2.75rem"]
      }
    }
  },
  defaultVariants: {
    direction: "row",
    side: 1,
    wrap: false
  }
});

const textRecipe = recipe({
  base: {
    textTransform: "capitalize"
  },
  variants: {
    font: {
      preTitle: [
        textSprinkles({
          fontSize: "xs",
          color: "accent",
          lineHeight: "loose",
          textTransform: "uppercase",
          letterSpacing: "widest"
        }),
        {
          ":before": {
            content: "+ "
          }
        }
      ],
      title: textSprinkles({
        fontSize: "xl",
        color: "primary",
        fontFamily: "exo",
        fontWeight: "bold"
      }),
      span: textSprinkles({
        fontSize: "inherit",
        color: "accent"
      }),
      highLight: textSprinkles({
        fontSize: "sm",
        color: "primary",
        fontWeight: "bold",
        fontFamily: "exo",
        textTransform: "capitalize"
      }),
      text: textSprinkles({
        fontSize: "sm",
        color: "text",
        fontWeight: "normal",
        fontFamily: "exo"
      })
    },
    marginBlock: {
      xxxs: textSprinkles({
        marginBlock: "xxxs"
      }),
      xxs: textSprinkles({
        marginBlock: "xxs"
      }),
      xs: textSprinkles({
        marginBlock: "xs"
      }),
      sm: textSprinkles({
        marginBlock: "sm"
      }),
      md: textSprinkles({
        marginBlock: "md"
      }),
      lg: textSprinkles({
        marginBlock: "lg"
      })
    },
    lineHeight: {
      none: textSprinkles({
        lineHeight: "none"
      }),
      tight: textSprinkles({
        lineHeight: "tight"
      }),
      snug: textSprinkles({
        lineHeight: "snug"
      }),
      normal: textSprinkles({
        lineHeight: "normal"
      }),
      relaxed: textSprinkles({
        lineHeight: "relaxed"
      }),
      loose: textSprinkles({
        lineHeight: "loose"
      }),
      inherit: "inherit"
    },
    hover: {
      true: {
        ":hover": {
          color: theme$1["textHover"]
        }
      }
    },
    hoverSection: {
      true: {
        selectors: {
          "section:has(&):hover > &": {
            color: theme$1["textHover"]
          },
          "section:has(&):active > &": {
            color: theme$1["textHover"]
          }
        }
      }
    },
    hoverDiv: {
      true: {
        selectors: {
          "div:has(&):hover > &": {
            color: theme$1["textHover"]
          },
          "div:has(&):active > &": {
            color: theme$1["textHover"]
          }
        }
      }
    },
    textAlign: {
      left: textSprinkles({
        textAlign: "left"
      }),
      center: textSprinkles({
        textAlign: "center"
      }),
      right: textSprinkles({
        textAlign: "right"
      }),
      justify: textSprinkles({
        textAlign: "justify"
      })
    },
    display: {
      inline: {
        display: "inline-block"
      },
      block: {
        display: "block"
      }
    }
  },
  defaultVariants: {
    font: "text",
    display: "block",
    textAlign: "left",
    hoverDiv: false,
    hoverSection: false,
    hover: false
  }
});

const gridMaxColCount = createVar({
  syntax: "<integer>",
  inherits: false,
  initialValue: "6"
});
const gridMinColSize = createVar({
  syntax: "<length>",
  inherits: false,
  initialValue: "200px"
});
const gridGap = createVar({
  syntax: "<length>",
  inherits: false,
  initialValue: "1rem"
});
const containerGridMaxColumn = recipe({
  base: {
    position: "relative",
    boxSizing: "border-box",
    display: "grid",
    marginInline: "auto",
    gap: gridGap,
    gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, max(${gridMinColSize}, ${calc("100%").subtract(calc.multiply(gridGap, gridMaxColCount)).divide(gridMaxColCount).toString()})), 1fr))`
  },
  variants: {
    theme: {
      ...colorTheme
    },
    marginBlock: {
      sm: textSprinkles({
        marginBlock: "sm"
      }),
      md: textSprinkles({
        marginBlock: "md"
      }),
      lg: textSprinkles({
        marginBlock: "lg"
      }),
      xl: textSprinkles({
        marginBlock: "xl"
      }),
      xxl: textSprinkles({
        marginBlock: "xxl"
      }),
      xxxl: textSprinkles({
        marginBlock: "xxxl"
      })
    },
    paddingBlock: {
      sm: textSprinkles({
        paddingBlock: "sm"
      }),
      md: textSprinkles({
        paddingBlock: "md"
      }),
      lg: textSprinkles({
        paddingBlock: "lg"
      }),
      xl: textSprinkles({
        paddingBlock: "xl"
      }),
      xxl: textSprinkles({
        paddingBlock: "xxl"
      }),
      xxxl: textSprinkles({
        paddingBlockStart: "xxxl"
      })
    },
    hover: {
      true: {
        cursor: "pointer",
        ":active": {
          color: fallbackVar(theme$1.textHover, "inherit"),
          backgroundColor: fallbackVar(theme$1.backgroundHover, "inherit"),
          outline: `min(4px, 3px + 0.1vw) solid ${theme$1.backgroundHover}`,
          outlineOffset: "1.6px"
        },
        ":focus": {
          outline: "min(4px, 3px + 0.1vw) solid yellow",
          outlineOffset: "4px"
        },
        "@supports": {
          "selector(:hover)": {
            ":hover": {
              backgroundColor: fallbackVar(theme$1.backgroundHover, theme$1.background),
              color: fallbackVar(theme$1.textHover, theme$1.text, "inherit"),
              borderColor: fallbackVar(theme$1.textHover, "inherit")
            }
          },
          "not selector(:hover)": {
            ":active": {
              color: fallbackVar(theme$1.textHover, "inherit"),
              backgroundColor: fallbackVar(theme$1.backgroundHover, "inherit"),
              transform: "scale(1.03)",
              outline: `min(4px, 3px + 0.1vw) solid ${theme$1.backgroundHover}`,
              outlineOffset: "1.6px"
            }
          }
        }
      }
    },
    background: {
      true: {
        backgroundColor: theme$1.background
      }
    },
    size: {
      small: {
        maxInlineSize: maxInlineSizeFn$1("small")
      },
      medium: {
        maxInlineSize: maxInlineSizeFn$1("medium")
      },
      large: {
        maxInlineSize: maxInlineSizeFn$1("large")
      },
      xxl: {
        maxInlineSize: maxInlineSizeFn$1("xxl")
      },
      full: {
        maxInlineSize: "none"
      }
    },
    maxColumn: {
      2: {
        vars: {
          [gridMaxColCount]: "2",
          gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, max(${gridMinColSize}, ${calc("100%").subtract(calc.multiply(gridGap, gridMaxColCount)).divide(gridMaxColCount).toString()})), 1fr))`
        }
      },
      3: {
        vars: {
          [gridMaxColCount]: "3",
          gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, max(${gridMinColSize}, ${calc("100%").subtract(calc.multiply(gridGap, gridMaxColCount)).divide(gridMaxColCount).toString()})), 1fr))`
        }
      },
      4: {
        vars: {
          [gridMaxColCount]: "4",
          gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, max(${gridMinColSize}, ${calc("100%").subtract(calc.multiply(gridGap, gridMaxColCount)).divide(gridMaxColCount).toString()})), 1fr))`
        }
      },
      5: {
        vars: {
          [gridMaxColCount]: "5",
          gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, max(${gridMinColSize}, ${calc("100%").subtract(calc.multiply(gridGap, gridMaxColCount)).divide(gridMaxColCount).toString()})), 1fr))`
        }
      },
      6: {
        vars: {
          [gridMaxColCount]: "6",
          gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, max(${gridMinColSize}, ${calc("100%").subtract(calc.multiply(gridGap, gridMaxColCount)).divide(gridMaxColCount).toString()})), 1fr))`
        }
      }
    },
    gap: {
      xs: {
        vars: {
          [gridGap]: "1rem"
        }
      },
      sm: {
        vars: {
          [gridGap]: "1.25rem"
        }
      },
      md: {
        vars: {
          [gridGap]: "1.5rem"
        }
      },
      lg: {
        vars: {
          [gridGap]: "1.75rem"
        }
      }
    },
    sizeOfBox: {
      100: {
        vars: {
          [gridMinColSize]: "100px"
        }
      },
      200: {
        vars: {
          [gridMinColSize]: "200px"
        }
      },
      250: {
        vars: {
          [gridMinColSize]: "250px"
        }
      },
      300: {
        vars: {
          [gridMinColSize]: "300px"
        }
      }
    }
  },
  defaultVariants: {
    hover: false,
    background: true,
    size: "full",
    sizeOfBox: 300,
    maxColumn: 4,
    gap: "xs"
  }
});

const $$Astro$4 = createAstro();
const $$TopContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TopContent;
  const { subtitle, title, PreTitle, description, gap = "smallGap", textAlign = "left" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["grid", gap], "class:list")} data-astro-cid-wggzu7m7> <h5${addAttribute(textRecipe({ font: "preTitle", textAlign }), "class")} data-astro-cid-wggzu7m7>${subtitle}</h5> <h2${addAttribute(textRecipe({ font: "title", textAlign, lineHeight: "snug" }), "class")} data-astro-cid-wggzu7m7> <span${addAttribute(textRecipe({ font: "span", display: "inline" }), "class")} data-astro-cid-wggzu7m7>${PreTitle}</span> ${title} </h2> <p${addAttribute(textRecipe({ font: "text", textAlign }), "class")} data-astro-cid-wggzu7m7>${description}</p> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/mnt/data500/rr/DEV/dentistLanding/src/components/Layout-Component/topContent.astro", void 0);

const heightButton = createVar({
  syntax: "<length>",
  inherits: false,
  initialValue: "65px"
});
createVar({
  syntax: "<length>",
  inherits: false,
  initialValue: "50px"
});
const buttonContainer = createContainer();
const buttonCallToAction = style([
  // container({ theme: 'accent', background: true, hover: true }),
  color$1.theme.accent,
  {
    "@container": {
      [`${buttonContainer} (width < 11rem)`]: {
        display: "grid",
        justifyContent: "center",
        placeItems: "center"
      }
    },
    "::before": {
      blockSize: heightButton,
      inlineSize: "101%",
      position: "absolute",
      zIndex: "-10",
      top: "0%",
      left: "-111%",
      borderRadius: `0 80px 80px 0`,
      transition: "left 0.5s 0.1s ease",
      backgroundColor: "white",
      //maskImage: 'linear-gradient(to left, transparent 0%, black 100%)',
      content: ""
    },
    backgroundColor: color$1.variable.accent,
    fontSize: fontSize.md,
    height: heightButton,
    minInlineSize: "min(90%, 16rem)",
    paddingInline: "1.5rem 0.08rem",
    position: "relative",
    zIndex: "10",
    borderWidth: 4,
    borderStyle: "solid",
    borderRadius: "100px !important",
    borderColor: "oklch(58.09% 0.1151 235.69 / 55%)",
    display: "flex",
    isolation: "isolate",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    overflow: "hidden",
    verticalAlign: "center",
    color: color$1.theme.text,
    selectors: {
      "&:hover::before": {
        left: 0,
        color: color$1.variable.accent
      }
    },
    ":hover": {
      zIndex: "23",
      color: color$1.variable.accent
    },
    containerName: buttonContainer,
    containerType: "inline-size"
  }
]);
const sizeFontSize = createVar({
  inherits: true,
  syntax: "<length>",
  initialValue: "1.6rem"
});
const buttonCallToAction_icon = style({
  "@container": {
    [`${buttonContainer} (width < 11rem)`]: {
      display: "none"
    }
  },
  "@media": {
    [media.md]: {
      vars: {
        [sizeFontSize]: "2.5rem"
      }
    }
  },
  height: calc.subtract(heightButton, "10px"),
  minInlineSize: calc.subtract(heightButton, "10px"),
  marginInlineStart: fluid(5, 10),
  borderRadius: "80px !important",
  aspectRatio: 1,
  display: "inline-grid",
  placeItems: "center",
  transform: "rotate(25deg)",
  fontSize: sizeFontSize,
  transition: "transform 0.2s ease",
  backgroundColor: color$1.theme.background,
  color: color$1.theme.textHover,
  ":hover": {
    transform: "rotate(85deg)"
  }
});
globalStyle(`${buttonCallToAction} > a`, {
  textDecoration: "none"
});

const $$Astro$3 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Button;
  const { title, link, marginInlineCustomProps = "0 auto" } = Astro2.props;
  const PixelStringSchema = v.pipe(v.string());
  v.parse(PixelStringSchema, marginInlineCustomProps);
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(buttonCallToAction, "class")} type="button" aria-label="rendez-vous" tabindex="0"> <a${addAttribute(link, "href")}>${title}</a> <span${addAttribute(buttonCallToAction_icon, "class")}>↑</span> </button>`;
}, "/mnt/data500/rr/DEV/dentistLanding/src/components/button/button.astro", void 0);

const $$Index$5 = createComponent(($$result, $$props, $$slots) => {
  const contactInfo = [
    {
      id: "address",
      text: "16 Rue de la R\xE9publique, 92400 Courbevoie, France",
      iconPaths: [
        { d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" },
        {
          d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        }
      ],
      ariaLabel: "Adresse"
    },
    {
      id: "phone",
      text: "+(33) 01 42 45 85 66",
      iconPaths: [
        {
          d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        }
      ],
      ariaLabel: "T\xE9l\xE9phone"
    },
    {
      id: "email",
      text: "info@dentiste-paris.com",
      iconPaths: [
        {
          d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        }
      ],
      ariaLabel: "Email"
    },
    {
      id: "hours",
      text: "lun to vend 9:00 \xE0 18:00",
      iconPaths: [{ d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" }],
      ariaLabel: "Heures d'ouverture"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(containerGridMaxColumn({
    theme: "blueLightBg",
    size: "medium",
    maxColumn: 2,
    sizeOfBox: 300
  }), "class")}> <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12"> <!-- Colonne Gauche: Carte --> <div class="h-96 overflow-hidden rounded-lg shadow-md md:h-full"> <!-- *** REMPLACEZ CECI PAR VOTRE IFRAME GOOGLE MAPS *** --> <!-- Exemple de placeholder --> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.300520503804!2d2.296175223228852!3d48.87154735773424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec70fb1d8f%3A0xd9b5676e112e643d!2sArc%20de%20Triomphe!5e0!3m2!1sfr!2sfr!4v1747669372953!5m2!1sfr!2sfr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Map of New York">
      </iframe> <!-- Fin du placeholder --> </div> <!-- Colonne Droite: Informations de Contact --> <div class="grid align-items-start gap-4 md:gap-6"> <div> ${renderComponent($$result, "Title", $$TopContent, { "subtitle": "Trouvez-nous", "PreTitle": "Notre Localisation", "title": " \xE0 Courbevoie", "gap": "smallGap" }, { "default": ($$result2) => renderTemplate` <div class="mt-4 grid gap-3 md:gap-4">  ${contactInfo.map((item) => renderTemplate`<div class="flex items-center gap-x-3"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 flex-shrink-0 text-teal-500"${addAttribute(`contact-icon-title-${item.id}`, "aria-labelledby")} role="img"> ${item.iconPaths.map((path) => renderTemplate`<path stroke-linecap="round" stroke-linejoin="round"${addAttribute(path.d, "d")}></path>`)} </svg> <span>${item.text}</span> </div>`)} </div> <span class="grid justify-items-start text-white w-full mt-5"> ${renderComponent($$result2, "Button", $$Button, { "title": "Doctolib", "link": "https://www.doctolib.fr/" })} </span> ` })} </div> </div> </div> </section>`;
}, "/mnt/data500/rr/DEV/dentistLanding/src/components/HOME/location/index.astro", void 0);

const cardData = [
  {
    title: 12,
    symbol: "~",
    subtitle: "Années",
    text: "Une expertise reconnue pour des soins de qualité."
  },
  {
    title: 2e3,
    symbol: "+",
    subtitle: "Patients",
    text: "Des milliers de sourires transformés avec succès."
  },
  {
    title: 11,
    symbol: "~",
    subtitle: "Professionnels",
    text: "Une équipe à votre écoute pour votre confort et sécurité."
  },
  {
    title: 20,
    symbol: "+",
    subtitle: "Mutuelles",
    text: "Une prise en charge simplifiée pour votre tranquillité d'esprit."
  }
];

const hr$1 = style({
  blockSize: 4,
  marginBlock: space.sm,
  background: "linear-gradient(0deg,rgba(34, 193, 195, 1) 0%, rgba(16, 40, 145, 1) 100%)"
});

const s_ov9tOAvEfZg = () => {
  const [numberSignal] = useLexicalScope();
  return numberSignal.value.toLocaleString();
};
const s_Gooq0Fkvy5g = (props) => {
  const numberSignal = useSignal(0);
  const startTime = useSignal(null);
  const formattedValue = useComputedQrl(/* @__PURE__ */ inlinedQrl(s_ov9tOAvEfZg, "s_ov9tOAvEfZg", [
    numberSignal
  ]));
  useVisibleTaskQrl(/* @__PURE__ */ _noopQrl("s_0yUuAHU2GD4", [
    numberSignal,
    props,
    startTime
  ]));
  return /* @__PURE__ */ _jsxQ("div", null, {
    class: textSprinkles({
      padding: "xs"
    })
  }, [
    /* @__PURE__ */ _jsxQ("h3", null, {
      class: textRecipe({
        font: "title"
      })
    }, [
      _fnSignal((p0) => p0.value, [
        formattedValue
      ], "p0.value"),
      _fnSignal((p0) => p0.symbol, [
        props
      ], "p0.symbol")
    ], 3, null),
    /* @__PURE__ */ _jsxQ("h6", null, {
      class: textSprinkles({
        color: "primary",
        fontSize: "md",
        letterSpacing: [
          "normal",
          "wide",
          "widest"
        ]
      })
    }, _fnSignal((p0) => p0.subtitle, [
      props
    ], "p0.subtitle"), 3, null),
    /* @__PURE__ */ _jsxQ("hr", null, {
      class: hr$1
    }, null, 3, null),
    /* @__PURE__ */ _jsxQ("p", null, {
      class: textRecipe({
        font: "text"
      })
    }, _fnSignal((p0) => p0.text, [
      props
    ], "p0.text"), 3, null)
  ], 3, "4N_0");
};
const CardEl = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_Gooq0Fkvy5g, "s_Gooq0Fkvy5g"));
const s_isUR60EHt6o = () => {
  return /* @__PURE__ */ _jsxQ("section", null, {
    class: containerGridMaxColumn({
      theme: "whiteBg",
      maxColumn: 4,
      size: "large",
      background: true,
      marginBlock: "sm",
      gap: "lg"
    })
  }, cardData.map((e, index) => /* @__PURE__ */ _jsxC(CardEl, {
    get text() {
      return e.text;
    },
    get symbol() {
      return e.symbol;
    },
    get subtitle() {
      return e.subtitle;
    },
    get title() {
      return e.title;
    },
    [_IMMUTABLE]: {
      text: _wrapProp(e, "text"),
      symbol: _wrapProp(e, "symbol"),
      subtitle: _wrapProp(e, "subtitle"),
      title: _wrapProp(e, "title")
    }
  }, 3, index)), 1, "4N_1");
};
const Van = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_isUR60EHt6o, "s_isUR60EHt6o"));

const wrapper$1 = style([
  container$1({
    size: "small"
  }),
  {
    borderImage: "linear-gradient(oklch(58.09% 0.1151 235.69 / 40%), oklch(97.44% 0.0134 240.95) / 20% ) fill 1",
    display: "grid",
    placeItems: "center",
    gap: space.lg,
    paddingBlock: space.lg
  }
]);
const hr = style([
  {
    height: 2,
    minInlineSize: "80%",
    backgroundColor: color$1.theme.divider
  }
]);
const bannerWrapper = style([
  container$1({
    size: "large",
    background: false
  }),
  flex({
    direction: "row",
    side: 4,
    wrap: true,
    justifyContent: "evenly",
    gap: "lg"
  }),
  {
    "@media": {
      [media.mobile]: {}
    }
  }
]);
const banner__element = style({
  display: "inline-grid",
  gridTemplateRows: "repeat(2,1fr)",
  gridTemplateColumns: "auto 1fr",
  columnGap: fluid(5, 20),
  marginInline: "auto",
  "@media": {
    [media.md]: {
      marginInline: fluid(10, 20)
    }
  }
});
const banner__element_icon = style({
  blockSize: "100%",
  minBlockSize: 35,
  minInlineSize: 35,
  marginBlock: "auto",
  gridRow: "1 / -1",
  gridColumn: "span 1"
});
const banner_hr = style({
  width: ".1rem",
  blockSize: "50px",
  //marginBlock: 'auto',
  backgroundColor: color$1.theme.divider,
  border: "white solid 1px",
  justifySelf: "center",
  "@media": {
    [media.mobile]: {
      display: "none"
    },
    ["all and ( width <= 640px)"]: {
      display: "none"
    }
  }
});
style({
  inlineSize: "100%",
  backgroundColor: color$1.theme.primary,
  "@media": {
    [media.tablet]: {
      minInlineSize: "18rem",
      maxInlineSize: "max-content",
      marginInline: "auto",
      marginBlock: 20
    },
    [media.md]: {
      marginInlineStart: "auto"
    }
  }
});

const icons = {"local":{"prefix":"local","lastModified":1758460822,"icons":{"check":{"body":"<g fill=\"none\" stroke=\"#1C274C\" stroke-width=\"1.5\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m8.5 12.5 2 2 5-5\"/></g>","width":24,"height":24},"emergency-svgrepo-com":{"body":"<g fill=\"currentColor\"><path d=\"M508.961 415.951 383.956 290.947c-3.983-3.983-10.442-3.983-14.424 0l-47.165 47.164c-23.984-20.605-49.785-44.694-76.809-71.719-27.016-27.017-51.099-52.822-71.701-76.828l47.146-47.146c3.983-3.984 3.983-10.442 0-14.425L95.998 2.987a10.2 10.2 0 0 0-14.425 0L5.12 79.442a10.2 10.2 0 0 0-1.549 1.99c-1.816 3.048-9.999 20.324 7.322 61.237 21.991 51.945 74.687 119.829 156.622 201.765 82.248 82.247 150.229 135.038 202.055 156.906 19.686 8.306 33.868 10.66 43.624 10.66 10.519-.001 15.893-2.739 17.463-3.706a10.2 10.2 0 0 0 1.851-1.465l76.453-76.453c3.983-3.983 3.983-10.442 0-14.425m-89.386 74.96c-7.862 2.007-67.503 9.231-237.635-160.902C12.666 160.735 19.129 100.469 21.097 92.313l67.689-67.689 110.58 110.58-46.585 46.585c-3.744 3.744-4 9.73-.591 13.782 22.259 26.442 48.82 55.122 78.942 85.244 30.131 30.131 58.802 56.697 85.218 78.961a10.2 10.2 0 0 0 13.786-.588l46.607-46.607 110.581 110.581z\"/><path d=\"M481.913 89.663h-59.574V30.089c0-5.633-4.566-10.2-10.2-10.2h-74.642c-5.633 0-10.2 4.566-10.2 10.2v59.574h-59.574c-5.633 0-10.199 4.566-10.199 10.2v74.642c0 5.633 4.566 10.2 10.199 10.2h59.574v59.574c0 5.633 4.566 10.199 10.2 10.199h74.642c5.633 0 10.2-4.566 10.2-10.199v-59.574h59.574c5.633 0 10.2-4.566 10.2-10.2V99.862c0-5.633-4.567-10.199-10.2-10.199m-10.2 74.642h-59.574c-5.633 0-10.2 4.566-10.2 10.199v59.574h-54.243v-59.574c0-5.633-4.566-10.199-10.199-10.199h-59.574v-54.243h59.574c5.633 0 10.199-4.566 10.199-10.2V40.288h54.243v59.574c0 5.633 4.566 10.2 10.2 10.2h59.574zm-315.601-55.244-5.099-5.099c-3.984-3.983-10.442-3.983-14.425 0s-3.983 10.442 0 14.425l5.099 5.099a10.16 10.16 0 0 0 7.212 2.987c2.61 0 5.22-.995 7.213-2.987 3.983-3.983 3.983-10.442 0-14.425m-28.559-28.558L95.935 48.884c-3.984-3.983-10.442-3.984-14.425 0s-3.983 10.442 0 14.425l31.618 31.618c1.991 1.992 4.602 2.987 7.212 2.987s5.22-.995 7.213-2.987c3.983-3.983 3.983-10.441 0-14.424\"/></g>","width":512,"height":512},"icon-clock":{"body":"<g fill=\"none\"><g clip-path=\"url(#a)\"><path fill=\"#0E384C\" fill-rule=\"evenodd\" d=\"M14.388 1.71A14.63 14.63 0 0 0 4.99 5.981c-2.22 2.236-3.64 5.08-4.124 8.26-.155 1.023-.155 3.011.002 4.078.801 5.46 4.546 10.003 9.705 11.776 1.39.477 3.13.798 4.329.798.385 0 .466-.022.604-.16a.49.49 0 0 0 .01-.716c-.131-.13-.242-.157-.833-.196-1.577-.106-3.005-.414-4.305-.93-3.191-1.263-5.741-3.613-7.218-6.65-.884-1.82-1.301-3.489-1.38-5.518-.166-4.29 1.817-8.548 5.192-11.153 4.157-3.207 9.62-3.774 14.343-1.486 1.366.662 2.614 1.577 3.757 2.755 1.066 1.099 1.743 2.054 2.415 3.407.95 1.914 1.387 3.807 1.388 6.02.002 2.193-.409 3.983-1.36 5.942-.374.768-1.304 2.285-1.402 2.285-.019 0 .003-.46.048-1.02.066-.817.066-1.056.001-1.192-.211-.442-.827-.376-.955.101-.071.265-.27 2.688-.268 3.274 0 .588.293.928.797.926.118 0 .95-.19 1.848-.422 1.392-.359 1.654-.446 1.78-.59.08-.094.146-.238.146-.32 0-.196-.217-.47-.41-.519-.085-.021-.578.075-1.124.22-.535.14-.983.246-.996.234-.012-.012.141-.25.34-.529 1.288-1.794 2.183-4.108 2.527-6.53.124-.87.106-2.968-.033-3.91-.314-2.123-1.137-4.266-2.311-6.017-2.936-4.378-7.882-6.826-13.115-6.49m-.443 4.403c-2.866.467-5.323 2.031-6.907 4.397-2.287 3.419-2.286 7.767.003 11.19 1.464 2.19 3.77 3.734 6.431 4.31.96.207 2.911.206 3.876-.002 2.897-.626 5.29-2.338 6.772-4.844 1.382-2.34 1.74-5.189.983-7.84-1.015-3.56-4.013-6.328-7.706-7.114-.862-.184-2.617-.233-3.452-.097m-.112 1.113c-.848.154-2.408.697-2.41.84 0 .032.132.287.293.567.162.28.294.586.294.68 0 .243-.271.489-.54.489-.266 0-.394-.127-.74-.735-.137-.242-.278-.44-.313-.44-.127 0-1.017.734-1.49 1.229-.691.723-1.071 1.25-.957 1.327.05.033.273.164.497.291.666.38.832.719.51 1.04-.242.243-.507.21-1.08-.133-.27-.16-.51-.292-.534-.293-.066 0-.422.894-.598 1.505-.142.49-.227.93-.329 1.705l-.032.239.687.022c.665.021.691.028.85.212.127.149.154.235.123.392-.078.387-.225.46-.98.485l-.68.022.032.24c.102.773.187 1.213.329 1.704.176.61.532 1.506.598 1.505.024 0 .264-.133.533-.294.574-.342.839-.375 1.08-.133.323.322.157.662-.51 1.04-.223.128-.448.26-.499.293-.189.126 1.127 1.61 2.025 2.282.2.15.392.273.426.273s.175-.198.313-.44c.345-.608.473-.735.738-.735.272 0 .541.245.541.493 0 .095-.144.417-.32.715l-.318.542.433.197c.814.37 2.24.729 2.899.73h.18v-.656c0-.61.01-.667.16-.816a.49.49 0 0 1 .724 0c.149.149.16.206.16.826v.665l.408-.038c.848-.08 1.936-.372 2.804-.753l.307-.134-.323-.576c-.177-.316-.323-.642-.323-.725 0-.23.28-.47.546-.47.267 0 .424.162.787.81l.239.427.34-.243c.498-.355 1.431-1.27 1.844-1.809.197-.257.358-.484.358-.503s-.235-.172-.521-.339c-.286-.166-.568-.375-.626-.463a.506.506 0 0 1 .122-.655c.233-.164.495-.114 1.032.195.28.162.522.294.538.294.055 0 .49-1.1.625-1.58.107-.38.33-1.608.331-1.826 0-.023-.307-.053-.683-.065-.604-.02-.701-.04-.83-.168a.52.52 0 0 1-.145-.377q.001-.23.146-.377c.128-.128.225-.148.832-.167l.687-.023-.04-.304c-.1-.755-.25-1.44-.434-1.991-.166-.496-.398-1.048-.481-1.142-.01-.012-.252.113-.537.277-.305.176-.6.3-.717.3-.428 0-.67-.47-.412-.798.076-.097.357-.296.625-.445.268-.148.488-.285.488-.305s-.145-.233-.323-.473c-.372-.501-1.38-1.492-1.879-1.848l-.34-.242-.24.427c-.362.648-.519.81-.786.81-.266 0-.546-.241-.546-.47 0-.083.145-.408.321-.722.364-.648.393-.57-.32-.862-.599-.245-1.785-.543-2.375-.596l-.5-.045v.665c0 .619-.01.676-.16.825a.49.49 0 0 1-.724 0c-.148-.149-.16-.207-.16-.816v-.656l-.277.006a6 6 0 0 0-.773.095\" clip-rule=\"evenodd\"/><path fill=\"#1E84B5\" fill-rule=\"evenodd\" d=\"M14.388 1.71A14.63 14.63 0 0 0 4.99 5.981c-2.22 2.236-3.64 5.08-4.124 8.26-.155 1.023-.155 3.011.002 4.078.801 5.46 4.546 10.003 9.705 11.776 1.39.477 3.13.798 4.329.798.385 0 .466-.022.604-.16a.49.49 0 0 0 .01-.716c-.131-.13-.242-.157-.833-.196-1.577-.106-3.005-.414-4.305-.93-3.191-1.263-5.741-3.613-7.218-6.65-.884-1.82-1.301-3.489-1.38-5.518-.166-4.29 1.817-8.548 5.192-11.153 4.157-3.207 9.62-3.774 14.343-1.486 1.366.662 2.614 1.577 3.757 2.755 1.066 1.099 1.743 2.054 2.415 3.407.95 1.914 1.387 3.807 1.388 6.02.002 2.193-.409 3.983-1.36 5.942-.374.768-1.304 2.285-1.402 2.285-.019 0 .003-.46.048-1.02.066-.817.066-1.056.001-1.192-.211-.442-.827-.376-.955.101-.071.265-.27 2.688-.268 3.274 0 .588.293.928.797.926.118 0 .95-.19 1.848-.422 1.392-.359 1.654-.446 1.78-.59.08-.094.146-.238.146-.32 0-.196-.217-.47-.41-.519-.085-.021-.578.075-1.124.22-.535.14-.983.246-.996.234-.012-.012.141-.25.34-.529 1.288-1.794 2.183-4.108 2.527-6.53.124-.87.106-2.968-.033-3.91-.314-2.123-1.137-4.266-2.311-6.017-2.936-4.378-7.882-6.826-13.115-6.49\" clip-rule=\"evenodd\"/><path fill=\"#0E384C\" d=\"m14.59 10.357.144-.144c.09-.09.21-.144.325-.144.114 0 .234.053.325.144l.143.144v2.613c0 2.305.012 2.635.096 2.8.053.104.515.902 1.026 1.775.651 1.112.93 1.64.93 1.766 0 .23-.157.417-.389.461-.149.029-.216.004-.36-.131-.184-.176-2.033-3.3-2.16-3.654-.056-.154-.076-.88-.078-2.917z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 .929h30v30H0z\"/></clipPath></defs></g>","width":30,"height":31},"icon-how-it-work-1":{"body":"<g fill=\"none\"><g clip-path=\"url(#a)\"><path fill=\"#1E84B5\" d=\"M12.5 20H9.167a2.503 2.503 0 0 0-2.5 2.5v3.333c0 1.379 1.121 2.5 2.5 2.5H12.5c1.378 0 2.5-1.121 2.5-2.5V22.5c0-1.378-1.122-2.5-2.5-2.5m.833 5.833c0 .46-.375.834-.833.834H9.167a.835.835 0 0 1-.834-.834V22.5c0-.46.375-.833.834-.833H12.5c.458 0 .833.373.833.833zM32.5 3.333H30v-2.5a.834.834 0 0 0-1.667 0v2.5H11.667v-2.5a.834.834 0 0 0-1.667 0v2.5H7.5c-4.135 0-7.5 3.365-7.5 7.5V32.5C0 36.635 3.365 40 7.5 40h25c4.135 0 7.5-3.365 7.5-7.5V10.833c0-4.135-3.365-7.5-7.5-7.5M7.5 5h25a5.84 5.84 0 0 1 5.833 5.833v2.5H1.667v-2.5A5.84 5.84 0 0 1 7.5 5m25 33.333h-25A5.84 5.84 0 0 1 1.667 32.5V15h36.666v17.5a5.84 5.84 0 0 1-5.833 5.833\"/><path fill=\"#0E384C\" d=\"M12.5 20H9.166a2.503 2.503 0 0 0-2.5 2.5v3.333c0 1.379 1.122 2.5 2.5 2.5H12.5c1.378 0 2.5-1.121 2.5-2.5V22.5c0-1.378-1.122-2.5-2.5-2.5m.833 5.833c0 .46-.375.834-.833.834H9.166a.835.835 0 0 1-.833-.834V22.5c0-.46.375-.833.833-.833H12.5c.458 0 .833.373.833.833z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h40v40H0z\"/></clipPath></defs></g>","width":40,"height":40},"icon-how-it-work-2":{"body":"<g fill=\"none\"><g fill-rule=\"evenodd\" clip-path=\"url(#a)\" clip-rule=\"evenodd\"><path fill=\"#0E384C\" d=\"M24.958 1.463c-1.741 1.702-4.313 4.63-5.78 6.582-1.856 2.47-2.952 4.383-3.548 6.198-.569 1.73-.314 4.135.642 6.046 1.015 2.032 2.98 3.89 5.088 4.812 1.512.662 2.923.951 4.641.952 1.812 0 3.256-.324 4.835-1.087 2.466-1.191 4.319-3.168 5.222-5.57.4-1.06.547-1.897.547-3.108 0-1-.024-1.212-.205-1.803-.989-3.24-4.178-7.686-9.17-12.787-.874-.893-.957-.957-1.235-.957-.27 0-.366.067-1.037.722m-.346 2.305c-3.767 4.013-6.385 7.593-7.445 10.178-.625 1.525-.662 2.987-.117 4.625.463 1.392 1.118 2.422 2.209 3.474 1.104 1.064 2.131 1.685 3.595 2.172 3.363 1.12 7.181.322 9.728-2.036 1.844-1.707 2.918-4.37 2.655-6.577-.266-2.225-2.668-6.016-6.612-10.435-1.041-1.166-2.59-2.788-2.662-2.788-.027 0-.636.624-1.351 1.387m.269 6.353c-.393.12-.78.57-.876 1.021-.046.213-.083.948-.083 1.634v1.246h-1.247c-1.55 0-1.925.073-2.3.448-.374.374-.46.735-.423 1.777.035.977.129 1.232.584 1.58l.287.218 1.541.024 1.541.024.03 1.5c.033 1.598.07 1.77.467 2.139.301.28.574.337 1.608.337.907 0 1.01-.015 1.315-.194.582-.341.659-.614.659-2.33v-1.46h1.46c1.716 0 1.99-.078 2.33-.66.18-.305.194-.408.194-1.315 0-1.034-.057-1.306-.337-1.607-.369-.397-.54-.434-2.139-.467l-1.499-.03-.024-1.542-.024-1.54-.219-.287c-.36-.472-.594-.553-1.656-.574-.516-.01-1.05.015-1.19.058m.445 2.749c-.001 1.215-.023 1.472-.145 1.738-.328.713-.644.82-2.429.82h-1.409v1.328h1.497c1.454 0 1.507.006 1.829.195.581.34.659.614.659 2.33v1.46h1.328V19.19c0-1.484.008-1.563.178-1.815.097-.145.296-.343.44-.441.253-.17.331-.178 1.815-.178h1.551v-1.328h-1.46c-1.716 0-1.989-.077-2.33-.659-.189-.322-.194-.374-.194-1.828v-1.497h-1.328zM2.217 22.777c-.614.121-1.136.551-1.414 1.167-.157.346-.16.476-.161 7.74-.002 8.323-.036 7.839.59 8.465.554.553.758.592 3.114.59 1.88-.002 2.063-.014 2.388-.161.193-.088.423-.227.51-.309.155-.144.425-.15 8.946-.173 9.762-.028 9.19.003 10.299-.557.47-.237 11.666-7.022 12.918-7.828.567-.365 1.025-.947 1.134-1.439.033-.15.078 1.783.1 4.297.033 3.762.04 3.244.04-2.93.001-4.125-.017-6.375-.04-5-.024 1.375-.051 2.428-.061 2.34-.036-.326-.432-.98-.775-1.282a3 3 0 0 0-.777-.47c-.858-.32-.7-.36-7.767 1.99-4.53 1.508-6.56 2.149-6.8 2.149h-.344v-.918c0-.865-.014-.948-.242-1.426-.461-.968-1.417-1.796-2.436-2.11-.447-.139-.73-.156-2.545-.156-3.488-.001-3.877-.1-5.926-1.499-1.19-.812-2.213-1.12-4.007-1.208l-1.094-.053-.235-.358c-.283-.432-.902-.824-1.414-.894-.521-.072-3.599-.046-4 .033m.001 1.482a.8.8 0 0 0-.212.332c-.023.095-.032 3.38-.02 7.3l.021 7.127.178.178c.176.175.203.178 2.127.178s1.951-.003 2.127-.178l.178-.178v-14.54l-.22-.19c-.218-.187-.223-.188-2.114-.188-1.795 0-1.903.008-2.065.159m-1.54 7.458c0 4.125.01 5.801.02 3.725.012-2.077.012-5.452 0-7.5-.01-2.049-.02-.35-.02 3.775m7.306.342v6.653l8.535-.02 8.535-.022.45-.17c.49-.185 13.086-7.814 13.438-8.138.468-.432.44-1.203-.059-1.641-.526-.463-.188-.548-7.32 1.836l-6.509 2.175-3.828.041-3.828.042-.596.209c-.623.219-1.195.51-1.591.809-.335.253-.606.302-.881.16-.265-.138-.33-.264-.33-.635 0-.352.405-.694 1.436-1.21 1.33-.665 1.638-.717 4.58-.773l2.538-.048.137-.274c.442-.885-.177-2.144-1.335-2.712l-.442-.218-2.657-.047c-2.425-.043-2.706-.062-3.237-.219-.863-.255-1.599-.625-2.413-1.213-1.268-.916-1.891-1.128-3.51-1.193l-1.113-.044z\"/><path fill=\"#1E84B5\" d=\"M2.217 22.777c-.614.121-1.136.551-1.414 1.167-.157.345-.16.476-.161 7.74-.002 8.323-.036 7.838.59 8.464.554.554.758.593 3.114.59 1.88 0 2.063-.013 2.388-.16.193-.088.423-.227.51-.309.155-.144.425-.15 8.946-.174 9.762-.027 9.19.004 10.299-.556.47-.237 11.666-7.022 12.918-7.829.567-.365 1.025-.946 1.134-1.438.033-.15.078 1.783.1 4.297.033 3.762.04 3.244.04-2.93.001-4.125-.017-6.375-.04-5-.024 1.375-.051 2.428-.061 2.34-.036-.326-.432-.98-.775-1.282a3 3 0 0 0-.777-.47c-.858-.32-.7-.361-7.767 1.99-4.53 1.508-6.56 2.149-6.8 2.149h-.344v-.918c0-.865-.014-.948-.242-1.426-.461-.968-1.417-1.796-2.436-2.11-.447-.139-.73-.156-2.545-.156-3.488-.001-3.877-.1-5.926-1.499-1.19-.812-2.213-1.121-4.007-1.208l-1.094-.053-.235-.358c-.283-.433-.902-.824-1.414-.894-.521-.072-3.599-.046-4 .033m.001 1.481a.8.8 0 0 0-.212.332c-.023.096-.032 3.381-.02 7.3l.021 7.128.178.178c.176.175.203.177 2.127.177s1.951-.002 2.127-.177l.178-.178v-14.54l-.22-.19c-.218-.187-.223-.188-2.114-.188-1.795 0-1.903.008-2.065.158m-1.54 7.46c0 4.124.01 5.8.02 3.724.012-2.077.012-5.452 0-7.5-.01-2.049-.02-.35-.02 3.775m7.306.341v6.653l8.535-.02 8.535-.022.45-.17c.49-.185 13.086-7.814 13.438-8.139.468-.43.44-1.203-.059-1.64-.526-.463-.188-.548-7.32 1.836l-6.509 2.175-3.828.041-3.828.041-.596.21c-.623.219-1.195.51-1.591.809-.335.253-.606.302-.881.159-.265-.137-.33-.263-.33-.634 0-.352.405-.694 1.436-1.21 1.33-.666 1.638-.718 4.58-.773l2.538-.048.137-.274c.442-.885-.177-2.144-1.335-2.713l-.442-.217-2.657-.047c-2.425-.043-2.706-.062-3.237-.219-.863-.255-1.599-.625-2.413-1.213-1.268-.916-1.891-1.128-3.51-1.193l-1.113-.044z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M.64.74h40v40h-40z\"/></clipPath></defs></g>","width":41,"height":41},"icon-how-it-work-3":{"body":"<g fill=\"none\"><g fill-rule=\"evenodd\" clip-path=\"url(#a)\" clip-rule=\"evenodd\"><path fill=\"#1E84B5\" d=\"M13.976 4.228a3.29 3.29 0 0 0-2.332 2.465c-.069.316-.086 1.615-.063 4.883.033 4.877.023 4.757.526 5.867.428.944 1.38 2.078 2.092 2.495.14.082.254.167.254.19s-.237.125-.527.225c-3.291 1.141-5.927 3.833-7.057 7.206-.413 1.232-.545 2.067-.595 3.763l-.045 1.543h-.423c-.344 0-.458-.035-.614-.192L5 32.482V11.999l.192-.192.192-.192h4.545l.192-.192a.59.59 0 0 0 0-.866l-.192-.192h-2.28c-1.561 0-2.38.03-2.6.095-.455.134-1.084.776-1.209 1.233-.074.272-.09 2.704-.073 10.762l.022 10.41H.384l-.203.203c-.189.188-.2.238-.159.725.108 1.278.867 2.327 1.953 2.695.341.116 1.94.127 18.015.127 14.856 0 17.699-.017 18.003-.109.791-.238 1.631-1.135 1.843-1.97.054-.21.13-.443.17-.517.077-.145.103-.898.028-.824-.024.024-.128-.04-.23-.143-.186-.186-.198-.187-1.89-.187H36.21l.021-6.056.022-6.057-.194-.193a.59.59 0 0 0-.868-.002l-.192.192v11.733l-.192.191-.191.192H28.77l-.044-1.66c-.06-2.29-.345-3.542-1.197-5.243-1.3-2.598-3.763-4.75-6.417-5.608-.311-.1-.566-.202-.566-.225 0-.024.114-.11.254-.191.713-.417 1.664-1.551 2.092-2.495.505-1.113.493-.982.524-5.93.025-4.01.014-4.567-.1-4.961-.346-1.203-1.163-2.016-2.34-2.33-.543-.146-6.472-.14-7.001.006m.105 1.267c-.446.158-.987.712-1.143 1.171-.1.292-.126.71-.126 2.033v1.666h9.384l-.024-1.777c-.027-1.998-.058-2.131-.629-2.686-.54-.523-.65-.538-4.076-.53-2.509.004-3.112.026-3.385.123m2.986 1a.62.62 0 0 0-.192.468c0 .265-.012.277-.277.277-.358 0-.66.287-.66.625 0 .339.302.625.66.625.265 0 .277.012.277.277 0 .358.286.66.625.66s.625-.302.625-.66c0-.265.012-.277.277-.277.358 0 .66-.286.66-.625 0-.338-.302-.625-.66-.625-.265 0-.277-.012-.277-.277 0-.358-.286-.66-.625-.66a.63.63 0 0 0-.433.191m10.45.218c-.345.111-.901.612-1.081.974-.134.27-.15.578-.192 3.538-.043 3.013-.058 3.286-.217 3.867-.34 1.24-.895 2.12-1.685 2.67-.508.355-.654.624-.518.952.051.124.18.264.286.313.28.127 14.148.125 14.573-.003.429-.128.916-.575 1.132-1.037l.183-.395V8.139l-.183-.395c-.216-.462-.703-.91-1.132-1.038-.403-.12-10.788-.114-11.166.007m.182 1.336-.184.185-.037 3.155c-.033 2.821-.053 3.226-.195 3.82-.205.858-.507 1.605-.884 2.19l-.302.466h12.27l.191-.192.192-.191V8.249l-.192-.192-.191-.192H27.884zm2.493 2.508a.63.63 0 0 0-.192.433c0 .152.07.313.192.433l.192.192h5.483l.191-.192a.63.63 0 0 0 .192-.433.63.63 0 0 0-.192-.433l-.191-.192h-5.483zm-17.38 2.999c0 1.677.022 2.022.155 2.544.23.896.57 1.48 1.288 2.201.727.732 1.41 1.116 2.358 1.327 2.206.49 4.596-.957 5.358-3.246.154-.462.173-.708.199-2.638l.029-2.129h-9.386zm17.38.751a.63.63 0 0 0-.192.433c0 .152.07.313.192.433l.192.192h4.233l.191-.192A.63.63 0 0 0 35 14.74a.63.63 0 0 0-.192-.433l-.191-.192h-4.233zm-13.708 6.73c-.107.02-.429.072-.714.117l-.52.082-.241.54c-.196.438-.79 2.27-.79 2.435 0 .024.097.067.215.097.595.146 1.27.778 1.603 1.5.167.362.175.483.198 2.896l.025 2.518-.197.197c-.173.173-.263.196-.75.196-.485 0-.579-.024-.746-.192a.59.59 0 0 1 0-.866c.105-.105.246-.192.312-.192.106 0 .12-.237.12-1.894-.002-1.675-.02-1.931-.147-2.207-.439-.952-1.72-1.2-2.498-.485-.434.399-.475.634-.477 2.692-.002 1.657.013 1.894.119 1.894.066 0 .207.087.312.192a.59.59 0 0 1 0 .866c-.167.168-.261.192-.745.192-.488 0-.578-.023-.751-.196l-.197-.197.025-2.518c.023-2.398.032-2.536.195-2.888.357-.774.902-1.271 1.683-1.537.359-.122.413-.17.496-.443l.342-1.115c.137-.445.23-.826.209-.848s-.324.112-.671.297c-1.865.994-3.473 2.702-4.412 4.687-.688 1.454-.98 2.893-.982 4.817v1.191h20.024l-.045-1.504c-.065-2.215-.335-3.373-1.158-4.98a10.2 10.2 0 0 0-2.031-2.683c-.617-.573-1.686-1.353-1.757-1.282-.02.02.05.388.154.82.104.43.231 1.043.282 1.36.094.578.094.579.42.714.81.334 1.3 1.047 1.36 1.972.031.49.008.621-.18 1.041-.81 1.806-3.319 1.831-4.178.042-.255-.532-.261-1.325-.014-1.867.217-.478.706-.99 1.122-1.179.31-.14.311-.14.261-.496-.094-.67-.427-1.95-.672-2.587-.282-.73-.322-.758-1.47-1.02-.651-.15-2.671-.264-3.134-.18m5.46 5.475c-.466.289-.617.852-.364 1.352.143.282.25.381.549.503.367.15.374.15.738 0 .243-.1.419-.24.519-.411.291-.499.125-1.218-.337-1.457-.298-.154-.846-.148-1.106.013M.023 33.646c0 .237.014.333.032.215a1.7 1.7 0 0 0 0-.43c-.018-.118-.033-.02-.033.215m1.304.538c0 .156.526.837.773 1.003l.266.178h17.61c19.202 0 17.795.034 18.237-.442.185-.2.458-.655.458-.765 0-.023-8.402-.043-18.672-.043-10.81 0-18.672.03-18.672.07\"/><path fill=\"#0E384C\" d=\"M27.517 6.714c-.345.11-.901.61-1.081.973-.134.27-.15.578-.192 3.538-.043 3.013-.058 3.286-.217 3.867-.34 1.24-.895 2.12-1.685 2.671-.508.354-.654.623-.518.951.051.124.18.265.287.313.279.127 14.147.125 14.572-.002.429-.129.916-.576 1.132-1.038l.184-.395V8.139l-.184-.395c-.215-.462-.703-.91-1.132-1.038-.403-.12-10.788-.114-11.166.008m.182 1.336-.184.184-.037 3.156c-.032 2.82-.053 3.225-.195 3.82-.205.857-.507 1.604-.884 2.188l-.302.467h12.27l.191-.191.192-.192V8.249l-.192-.192-.191-.192H27.884zm2.493 2.507a.63.63 0 0 0-.192.433c0 .152.07.313.192.434l.192.191h5.483l.191-.191a.63.63 0 0 0 .192-.434.63.63 0 0 0-.192-.433l-.191-.192h-5.483zm0 3.75a.63.63 0 0 0-.192.433c0 .152.07.313.192.434l.192.191h4.233l.191-.191A.63.63 0 0 0 35 14.74a.63.63 0 0 0-.192-.433l-.191-.192h-4.233z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 .365h40v40H0z\"/></clipPath></defs></g>","width":40,"height":41},"icon-location":{"body":"<g fill=\"none\"><path fill=\"#1E84B5\" d=\"M23.973 3.716A12.6 12.6 0 0 0 15.001 0c-3.39 0-6.576 1.32-8.972 3.716a12.6 12.6 0 0 0-3.716 8.972c0 6.857 6.482 12.56 9.965 15.623.484.426.902.793 1.235 1.104.417.39.953.585 1.488.585s1.07-.195 1.488-.585c.333-.31.751-.678 1.235-1.104 3.483-3.064 9.965-8.766 9.965-15.623 0-3.389-1.32-6.575-3.716-8.972m-7.41 23.275c-.494.436-.921.811-1.274 1.14a.424.424 0 0 1-.577 0c-.352-.329-.779-.705-1.273-1.14-3.275-2.88-9.37-8.241-9.37-14.302 0-6.028 4.904-10.932 10.932-10.932 6.027 0 10.93 4.904 10.93 10.932.001 6.06-6.094 11.422-9.368 14.302\"/><path fill=\"#0E384C\" d=\"M14.998 6.617a5.6 5.6 0 0 0-5.592 5.592 5.6 5.6 0 0 0 5.592 5.591 5.6 5.6 0 0 0 5.592-5.591 5.6 5.6 0 0 0-5.592-5.592m0 9.426a3.84 3.84 0 0 1-3.834-3.834 3.84 3.84 0 0 1 3.834-3.835 3.84 3.84 0 0 1 3.834 3.835 3.84 3.84 0 0 1-3.834 3.834\"/></g>","width":30,"height":30},"icon-mail":{"body":"<g fill=\"none\"><path fill=\"#1E84B5\" fill-rule=\"evenodd\" d=\"M3.756 5.384C2.124 5.814.921 7.084.61 8.709c-.123.643-.123 13.797 0 14.44.289 1.509 1.386 2.746 2.889 3.26l.456.155 10.869.016c12.215.018 11.29.05 12.275-.429a4.04 4.04 0 0 0 1.937-1.931c.5-1.015.461-.374.48-8.08.02-7.415.02-7.391-.294-8.17a4.1 4.1 0 0 0-.952-1.448 4.4 4.4 0 0 0-1.698-1.064l-.469-.164-10.957-.012c-10.682-.012-10.968-.009-11.39.102M3.97 6.96c-.858.275-1.548.995-1.77 1.847-.08.306-.091 1.19-.091 7.122 0 5.931.011 6.815.09 7.121.225.863.918 1.578 1.79 1.85.345.107.72.11 11.04.11s10.695-.003 11.04-.11c.892-.278 1.547-.98 1.792-1.922.132-.504.132-13.594 0-14.099-.245-.942-.9-1.643-1.793-1.921-.344-.108-.715-.111-11.059-.108-10.214.003-10.718.008-11.039.11\" clip-rule=\"evenodd\"/><path fill=\"#0E384C\" d=\"M4.13 10.747c0-.35.106-.518.411-.657a.7.7 0 0 1 .641.06c.067.045 1.518 1.34 3.226 2.88 3.931 3.54 4.41 3.962 4.788 4.213.484.321.925.452 1.628.485 1.078.05 1.737-.214 2.76-1.107a676 676 0 0 0 3.739-3.352 392 392 0 0 1 3.363-3.01c.188-.154.285-.19.505-.19.312 0 .492.105.626.365.163.314.08.598-.28.967-.456.466-2.116 1.993-3.594 3.307a57 57 0 0 0-1.39 1.26c-.1.111-.036.18 2.218 2.425 1.276 1.271 2.357 2.363 2.401 2.426a.7.7 0 0 1 .082.33c0 .427-.442.726-.83.561-.113-.047-1.202-1.067-2.568-2.404-1.306-1.277-2.393-2.322-2.417-2.322s-.327.253-.674.563c-1.19 1.063-1.912 1.445-3.102 1.636a3.4 3.4 0 0 1-1.084.026c-1.22-.136-1.958-.462-2.919-1.29a126 126 0 0 0-.867-.743l-.251-.211-.686.669c-.377.368-1.445 1.413-2.372 2.323-.928.91-1.763 1.694-1.858 1.742-.273.141-.46.111-.68-.11-.159-.159-.2-.247-.2-.427 0-.125.037-.28.082-.343s1.126-1.155 2.401-2.426c2.253-2.245 2.317-2.315 2.218-2.426a53 53 0 0 0-1.39-1.261c-1.654-1.47-3.062-2.764-3.545-3.256-.373-.38-.381-.395-.381-.703\"/></g>","width":30,"height":31},"icon-phone":{"body":"<g fill=\"none\"><path fill=\"#1E84B5\" d=\"m26.513 27.484 1.1-1.266a3 3 0 0 0 .887-2.14c0-.808-.315-1.57-.942-2.188l-2.751-2.107a3.03 3.03 0 0 0-4.279-.003l-1.723 1.68c-4.14-1.686-7.513-5.062-9.331-9.34l1.674-1.716c1.18-1.18 1.18-3.1.048-4.226l-2.204-2.86C7.848 2.173 5.828 2.2 4.74 3.292L3.42 4.444C2.18 5.676 1.5 7.348 1.5 9.152c0 8.717 11.56 20.277 20.277 20.277 1.803 0 3.475-.681 4.736-1.945M8.148 4.055l2.204 2.86a1.907 1.907 0 0 1-.005 2.696L8.41 11.599a.56.56 0 0 0-.12.603c1.946 4.843 5.753 8.649 10.447 10.44.205.078.437.03.593-.122l1.987-1.937.004-.006c.72-.72 1.917-.766 2.745.049l2.752 2.107c.741.741.741 1.947-.026 2.718l-1.101 1.265c-1.022 1.024-2.412 1.588-3.914 1.588-8.055 0-19.152-11.097-19.152-19.152 0-1.502.564-2.893 1.56-3.888L5.507 4.11a1.93 1.93 0 0 1 1.367-.563 1.8 1.8 0 0 1 1.275.509z\"/><path fill=\"#0E384C\" d=\"M27.375 14.241a.563.563 0 0 0 1.125 0c0-6.514-5.3-11.811-11.812-11.811a.563.563 0 0 0 0 1.125c5.892 0 10.687 4.794 10.687 10.687\"/><path fill=\"#0E384C\" d=\"M16.688 6.929c4.032 0 7.312 3.28 7.312 7.312a.563.563 0 0 1-1.125 0 6.194 6.194 0 0 0-6.187-6.187.563.563 0 0 1 0-1.125\"/></g>","width":30,"height":31},"icon-services-1":{"body":"<g fill=\"none\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path fill=\"#0E384C\" d=\"M15.418.552c-1.813.053-2.004.075-2.416.278-1.006.495-1.474 1.777-1.017 2.784.095.21.396.576.67.814l.496.435-.06 1.128c-.039.7-.19 1.761-.4 2.795-.39 1.928-.39 2.495-.001 3.159.475.811 1.329 1.075 2.353.726l.563-.191.328.318c.18.175.485.383.676.463.686.286 1.832.117 2.56-.377l.356-.242.665.312c.59.276.755.312 1.462.312.728 0 .843-.027 1.342-.31l.546-.309.18.231c.1.127.401.34.67.473.867.433 1.9.294 2.672-.357.244-.206.336-.236.485-.156.101.054.397.144.658.2.845.181 1.763-.243 2.145-.991.203-.399.22-1.09.064-2.54-.173-1.596-.145-3.118.075-4.066.096-.416.162-.523.351-.576.128-.036 1.014-.068 1.968-.072 5.013-.022 14.22-.231 14.437-.33.178-.08.242-.188.264-.45.054-.652.107-.645-4.251-.543-2.113.05-9.636.134-16.719.189-14.358.11-13.19.157-13.48-.54-.12-.285-.122-.385-.016-.662.068-.18.243-.416.389-.525.262-.195.322-.198 5.484-.198 3.348 0 6.212.05 7.986.141 3.896.198 20.091.155 20.414-.055.251-.163.291-.699.065-.886-.116-.097-1.847-.117-8.695-.101-6.248.014-9.471-.019-11.972-.12C22.46.54 17.997.476 15.418.552m-.994 4.385c-.124.033-.16.253-.207 1.278a15.6 15.6 0 0 1-.348 2.598c-.16.747-.298 1.606-.307 1.907-.015.497.009.57.251.779.3.258.582.241 1.203-.073.191-.097.505-.176.697-.176.3 0 .412.068.782.467.266.288.54.49.715.524.403.08 1.017-.11 1.56-.482.262-.181.582-.322.732-.322.147 0 .568.158.936.35.547.286.77.35 1.209.35.468 0 .604-.045 1.046-.35.742-.51 1.075-.488 1.716.119.763.721 1.264.742 1.98.082.523-.482.968-.564 1.525-.28.504.258.992.258 1.25 0 .183-.184.193-.264.14-1.148-.149-2.442-.168-3.817-.065-4.593.06-.448.133-.879.163-.956.047-.122-.148-.137-1.48-.115l-1.535.026-.029.937a12 12 0 0 0 .092 1.735c.067.438.11.881.097.984-.046.373-.561.549-.893.305-.257-.19-.451-1.379-.451-2.766V4.875h-2.769l-.09 1.324c-.083 1.215-.109 1.34-.308 1.5-.286.232-.44.222-.709-.047-.212-.212-.221-.27-.18-1.149.024-.509.059-1.083.078-1.276l.035-.352h-2.701l-.002.727c-.002.7-.208 2.448-.326 2.754-.032.083-.16.197-.287.254-.279.127-.666-.017-.749-.28-.03-.095.014-.708.099-1.362.088-.686.127-1.38.09-1.641l-.062-.452-1.374.01c-.755.007-1.441.03-1.524.052m-7.93 3.416c-1.147.441-2.091 1.784-2.091 2.974 0 .8.227 1.266.94 1.926 1.883 1.743 4.339.858 4.794-1.727.114-.647-.009-1.495-.298-2.055-.584-1.132-2.041-1.62-3.346-1.118m.278 1.167c-.715.357-1.244 1.148-1.244 1.86 0 .756 1.21 1.715 2.05 1.623.535-.059.843-.3 1.17-.92.24-.456.262-.574.227-1.217-.03-.546-.09-.782-.251-1.01-.438-.615-1.146-.737-1.952-.336m7.146 5.773c-4.879.61-7.31 5.001-6.095 11.004.48 2.369 1.349 4.668 2.919 7.717 1.483 2.883 1.698 3.517 2.522 7.45.515 2.46.796 3.46 1.219 4.341.337.703.879 1.338 1.35 1.582.71.367 1.8.293 2.311-.156.925-.812 1.248-2.022 1.774-6.637.587-5.159 1.074-6.768 1.887-6.235.598.391.918 1.83 1.44 6.47.44 3.894.782 5.329 1.463 6.125.838.978 2.526.858 3.392-.242.7-.888 1.069-1.961 1.714-4.985.86-4.024 1.139-4.925 2.071-6.699 1.94-3.688 2.94-6.249 3.473-8.885.18-.885.215-1.357.214-2.8-.002-2.074-.147-2.768-.903-4.309-1.06-2.16-2.976-3.433-5.649-3.752-1.66-.198-3.409.111-5.373.95-.787.337-1.029.396-1.77.435-.994.052-1.552-.057-2.57-.503a11.6 11.6 0 0 0-3.217-.876c-1.006-.113-1.235-.112-2.172.005m-.328 1.255c-2.891.591-4.545 2.558-4.888 5.814-.317 3.002.863 7.127 3.335 11.658 1.12 2.052 1.528 3.287 2.305 6.96.757 3.575 1.145 4.678 1.829 5.2.413.315 1.049.364 1.338.103.494-.447.812-1.95 1.283-6.05.185-1.616.401-3.28.48-3.696.412-2.172 1.086-3.282 2.073-3.414 1.04-.14 1.818.659 2.273 2.332.253.933.415 2.014.756 5.045.454 4.047.857 5.68 1.457 5.909.543.206 1.217-.125 1.637-.804.35-.567.73-1.858 1.219-4.146.925-4.328 1.126-4.937 2.53-7.662 1.98-3.843 2.894-6.462 3.189-9.13.38-3.448-.746-6.28-2.957-7.433-1.221-.637-1.873-.782-3.468-.772-1.61.01-2.227.14-3.763.793-.775.33-1.896.625-2.472.651-.252.011.198.28.727.433.672.196.873.593.492.974-.447.447-1.34.13-2.401-.854-.925-.857-1.33-1.112-2.355-1.486-1.486-.543-3.248-.705-4.619-.425M2.97 17.755c-1.07.297-1.716 1.619-1.38 2.822.323 1.15 1.774 1.936 3.022 1.637.604-.145 1.285-.783 1.458-1.365.38-1.282-.15-2.5-1.297-2.978-.496-.206-1.294-.258-1.803-.116m-.013 1.308c-.12.12-.249.395-.285.609-.134.79.47 1.422 1.358 1.422.534 0 .807-.188.945-.65.275-.919-.287-1.6-1.32-1.6-.377 0-.525.046-.698.22m36.04 1.023c-.733.374-1.075 1.492-.717 2.348.162.387.696.857 1.141 1.004.547.18 1.373.081 1.757-.211.564-.43.826-1.224.637-1.927-.312-1.158-1.728-1.768-2.817-1.214m.435 1.112c-.32.456-.097 1.031.454 1.17.411.103.692-.027.78-.361.149-.564-.093-.896-.711-.979-.312-.042-.394-.015-.523.17\"/><path fill=\"#1E84B5\" d=\"M13.918 15.293c-4.878.61-7.31 5.001-6.095 11.004.48 2.369 1.349 4.668 2.919 7.717 1.483 2.883 1.698 3.517 2.522 7.45.516 2.46.796 3.46 1.219 4.341.337.703.88 1.338 1.35 1.582.71.367 1.8.293 2.312-.156.924-.812 1.247-2.022 1.773-6.637.587-5.159 1.074-6.768 1.887-6.235.598.391.919 1.83 1.44 6.47.44 3.894.782 5.329 1.464 6.125.837.978 2.525.858 3.391-.242.7-.888 1.069-1.961 1.714-4.985.86-4.024 1.139-4.925 2.071-6.699 1.94-3.688 2.94-6.249 3.473-8.885.18-.885.215-1.357.214-2.8-.002-2.074-.147-2.768-.903-4.309-1.06-2.16-2.976-3.433-5.649-3.752-1.66-.198-3.409.111-5.372.95-.788.337-1.03.396-1.77.435-.994.052-1.552-.057-2.571-.503a11.6 11.6 0 0 0-3.217-.876c-1.006-.113-1.234-.112-2.172.005m-.328 1.255c-2.891.591-4.545 2.558-4.888 5.814-.317 3.002.863 7.127 3.335 11.658 1.12 2.052 1.528 3.287 2.305 6.96.757 3.575 1.145 4.678 1.83 5.2.412.315 1.048.364 1.337.103.494-.447.812-1.95 1.283-6.05.185-1.616.401-3.28.48-3.696.412-2.172 1.086-3.282 2.073-3.414 1.04-.14 1.818.659 2.273 2.332.253.933.415 2.014.756 5.045.454 4.047.857 5.68 1.457 5.909.543.206 1.217-.125 1.637-.804.35-.567.73-1.858 1.219-4.146.925-4.328 1.126-4.937 2.53-7.662 1.98-3.843 2.894-6.462 3.189-9.13.38-3.448-.746-6.28-2.956-7.433-1.222-.637-1.874-.782-3.47-.772-1.61.01-2.226.14-3.762.793-.775.33-1.896.625-2.472.651-.252.011.198.28.727.433.672.196.873.593.492.974-.447.447-1.34.13-2.401-.854-.925-.857-1.33-1.112-2.354-1.486-1.487-.543-3.249-.705-4.62-.425\"/></g>"},"icon-services-2":{"body":"<g fill=\"none\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path fill=\"#1E84B5\" d=\"M22.16 1.175c-.352.154-.762.667-.84 1.05-.06.307.28 3.53.433 4.085.182.66.832 1.2 1.447 1.2h.238v1.312c0 1.187.017 1.33.187 1.5.103.103.272.187.375.187s.272-.084.375-.187c.17-.17.188-.313.188-1.488v-1.3l.372-.05c.512-.069 1.006-.396 1.215-.805.115-.227.232-.845.342-1.819.137-1.207.195-1.475.315-1.473.08.001 1.683.287 3.56.635l3.415.633.101.296c.207.606.665 1.114 1.277 1.42l.589.295h5.783c5.483 0 5.79-.01 5.938-.172.205-.226.197-.605-.016-.798-.153-.138-.526-.155-3.375-.155h-3.204v-.642c0-.712-.146-.952-.579-.952-.396 0-.546.266-.546.968v.626l-1.852-.003c-2.244-.002-2.53-.083-2.85-.805-.223-.505-.192-.927.1-1.338.418-.586.273-.573 6.447-.573 6.307 0 6.068.025 6.012-.64-.05-.6.135-.584-6.216-.556-5.254.024-5.748.04-6.077.193-.504.235-1.128.837-1.33 1.283-.156.348-.193.375-.46.326-5.727-1.043-6.763-1.256-6.851-1.407-.226-.386-.577-.734-.86-.853-.427-.177-3.24-.172-3.652.007m.391 1.14c-.101.102-.133.246-.1.446.029.162.134.991.236 1.842.143 1.205.22 1.572.345 1.664.1.073.47.117.976.117 1.187 0 1.145.065 1.399-2.15.201-1.753.203-1.825.04-1.944-.268-.196-2.696-.174-2.896.025m-7.697 8.042c-1.323.218-2.592.712-3.604 1.403-2.87 1.961-4.114 6.137-3.23 10.843.562 3 1.508 5.536 3.55 9.516.634 1.237 1.285 2.594 1.446 3.014.377.986.854 2.808 1.321 5.048.527 2.523.727 3.364 1.007 4.219.753 2.305 1.775 3.354 3.266 3.357.812 0 1.33-.238 1.746-.805.813-1.109 1.147-2.634 1.718-7.849.56-5.119 1.06-6.867 1.968-6.867.462 0 .745.44 1.123 1.744.286.986.534 2.628.9 5.967.488 4.448.82 5.895 1.598 6.979.43.599.897.823 1.728.828 1.262.008 2.046-.569 2.774-2.042.486-.982.808-2.13 1.493-5.331.948-4.426 1.154-5.032 2.8-8.237 2.057-4.001 3.07-6.757 3.63-9.87.25-1.398.235-4.107-.031-5.255-.824-3.552-2.858-5.7-6.184-6.529-.671-.167-1.098-.206-2.28-.207-1.963-.001-3.096.247-5.045 1.104a9 9 0 0 1-1.574.497c-1.064.21-2.047.087-3.203-.397-1.258-.527-2.245-.857-3.068-1.025-1.017-.209-2.904-.26-3.849-.105m-.135 1.23c-3.625.733-5.628 3.334-5.787 7.515-.03.797-.006 1.697.062 2.25.382 3.11 1.675 6.701 3.892 10.814 1.25 2.319 1.72 3.706 2.495 7.356.948 4.466 1.266 5.515 1.945 6.407.478.628 1.574.899 1.983.49.71-.71 1.044-2.281 1.644-7.738.427-3.876.824-5.676 1.466-6.646.998-1.507 2.72-1.225 3.517.575.5 1.13.831 2.968 1.255 6.962.48 4.516.937 6.44 1.64 6.9.306.201 1.087.134 1.434-.122.915-.678 1.327-1.819 2.266-6.263.885-4.187 1.316-5.483 2.665-8.015 3.434-6.444 4.595-11.35 3.614-15.259-.298-1.187-1.03-2.555-1.763-3.297-1.261-1.276-3.206-2.066-5.09-2.068-.461-.001-.549.029-.683.233-.198.303-.743.33-.92.047a.43.43 0 0 0-.317-.187c-.423 0-2.015.467-2.95.866-1.108.473-1.671.625-2.643.717l-.678.064.462.3c.254.165.612.327.796.36.383.068.757.367.757.605 0 .088-.078.257-.173.374-.137.17-.258.21-.577.198-.657-.026-1.287-.386-2.27-1.3-.558-.517-1.16-.975-1.548-1.178-.768-.4-2.264-.888-2.986-.973l-.527-.062.15.291c.197.382.19.542-.037.769-.402.401-.851.15-1.219-.681l-.197-.444-.534.009a8 8 0 0 0-1.144.132m14.644.62c-.36.368-.863 1.303-.863 1.606 0 .29.27.54.582.54.277 0 .362-.088.692-.713.133-.252.323-.546.422-.652.249-.27.234-.742-.03-.926-.304-.214-.485-.181-.803.145m-11.158.523c-.188.075-.314.482-.21.678.05.091.377.447.727.789.704.687 1.026.79 1.288.416.214-.305.181-.509-.15-.92-.608-.757-1.244-1.128-1.655-.963m10.342 2.016c-.268.153-.325.266-.327.654a.96.96 0 0 1-.223.61 1.8 1.8 0 0 0-.283.461c-.081.26.26.695.546.695.53 0 1.085-.846 1.082-1.647-.001-.517-.047-.621-.343-.777-.244-.128-.218-.128-.452.004m-8.862.5c-.295.357-.054 1.015.591 1.609.541.499.771.57 1.087.334.407-.302.372-.558-.143-1.047-.25-.236-.526-.567-.614-.734-.133-.254-.214-.305-.48-.305-.177 0-.375.065-.441.144m6.893 1.471a12 12 0 0 1-.88.149c-.403.052-.546.119-.702.327-.18.242-.184.282-.053.516.115.207.219.259.56.284.513.037 1.469-.138 1.755-.321.15-.097.21-.227.21-.45 0-.478-.284-.639-.89-.505m-4.485.151c-.194.214-.2.614-.015.8.14.14.717.279 1.576.38.392.046.48.023.68-.176.516-.517.192-.868-.964-1.044-1.07-.162-1.095-.161-1.277.04\"/><path fill=\"#0E384C\" d=\"M22.16 1.175c-.352.154-.763.667-.84 1.05-.06.307.28 3.53.433 4.085.182.66.832 1.2 1.447 1.2h.238v1.312c0 1.187.017 1.33.187 1.5.103.103.272.187.375.187s.272-.084.375-.187c.17-.17.188-.313.188-1.488v-1.3l.372-.05c.512-.069 1.006-.396 1.215-.805.115-.227.232-.845.342-1.819.137-1.207.195-1.475.314-1.473.081.001 1.683.287 3.561.635l3.415.633.101.296c.207.606.665 1.114 1.277 1.42l.589.295h5.783c5.483 0 5.79-.01 5.938-.172.205-.226.197-.605-.017-.798-.152-.138-.525-.155-3.375-.155h-3.203v-.642c0-.712-.146-.952-.579-.952-.396 0-.546.266-.546.968v.626l-1.852-.003c-2.244-.002-2.53-.083-2.85-.805-.223-.505-.192-.927.1-1.338.418-.586.273-.573 6.447-.573 6.307 0 6.068.025 6.012-.64-.05-.6.135-.584-6.216-.556-5.255.024-5.748.04-6.077.193-.504.235-1.128.838-1.33 1.283-.156.348-.194.375-.46.326-5.727-1.043-6.763-1.256-6.851-1.407-.226-.386-.577-.734-.861-.853-.426-.177-3.24-.172-3.652.007m.391 1.14c-.101.102-.133.246-.1.446.028.162.134.991.236 1.842.143 1.205.22 1.573.345 1.664.099.073.47.117.976.117 1.187 0 1.144.065 1.399-2.15.201-1.753.203-1.825.04-1.944-.268-.196-2.696-.174-2.896.025\"/></g>","height":49},"icon-services-3":{"body":"<g fill=\"none\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path fill=\"#1E84B5\" d=\"M13.302 1.178c-.911.215-2.075 1.03-2.742 1.92-1.312 1.753-2.193 5.085-2.193 8.298 0 1.027.006 1.057.242 1.242l.242.19h24.086l.2-.212c.273-.29.267-.793-.014-1.056l-.212-.2H9.853l.043-.574c.322-4.327 1.42-7.245 3.015-8.007.555-.265 1.359-.288 2.014-.058.3.106.582.228.626.273.046.045-.11.19-.362.338-1.245.727-1.619 1.18-1.404 1.698.236.571.748.606 1.413.097q1.72-1.32 3.496-1.33c1.297-.007 2.358.45 3.672 1.581.303.26.881.638 1.285.839 1.45.719 2.69.715 4.171-.011.675-.33.918-.524 1.882-1.501 1.805-1.828 2.325-2.162 3.47-2.23.63-.038.765-.015 1.204.2.546.267 1.18.89 1.554 1.528.75 1.282 1.436 3.93 1.75 6.767l.043.39h-1.358c-1.196 0-1.384.02-1.573.174-.303.246-.303.875 0 1.121.195.158.388.174 2.136.174h1.922l.24-.24.238-.238-.058-1.161c-.097-1.945-.458-3.728-1.158-5.715-.686-1.946-1.764-3.342-3.087-3.995-.589-.292-.806-.349-1.453-.383-.418-.022-.976.007-1.24.063-.583.125-1.382.493-1.758.81l-.278.234-.615-.278c-.832-.375-1.383-.54-2.349-.707-2.204-.379-4.62.026-6.34 1.064l-.605.365-.556-.11c-.346-.068-.934-.089-1.555-.056l-1 .052-.44-.35c-1.116-.89-2.437-1.265-3.536-1.006m11.68 1.425c-.677.077-1.445.237-2.02.42-1.03.33-1.02.287-.21.95 2.16 1.773 3.702 1.738 5.82-.132l.563-.497-.25-.13c-.712-.374-2.93-.72-3.903-.61m8.484 1.55c-.304.304-.285.447.277 2.035.235.665.53 1.698.655 2.295.25 1.197.386 1.408.906 1.408a.68.68 0 0 0 .507-.226c.188-.2.206-.285.154-.729-.131-1.114-1.079-4.271-1.422-4.736-.25-.34-.762-.361-1.078-.046M23.254 14.51c-.187.2-.2.3-.2 1.651V17.6l-.298-.182c-.164-.1-.393-.182-.509-.183-.313 0-.661.393-.661.748 0 .256.135.433.946 1.244 1.268 1.268 1.246 1.268 2.515 0 1.037-1.038 1.136-1.266.755-1.75-.237-.302-.69-.324-1.037-.052l-.242.19v-1.459c0-1.407-.007-1.466-.212-1.659-.291-.273-.793-.267-1.057.013m-5.046 7.317c-1.26.33-2.482 1.151-3.215 2.162l-.427.59h-5.8l-.2.212c-.163.175-.199.322-.199.83 0 1.341.317 3.353.783 4.979.448 1.56.827 2.027 1.438 1.774a.8.8 0 0 0 .404-.413c.112-.266.101-.364-.106-.97-.449-1.315-.797-2.922-.987-4.553l-.046-.39h27.898l-.047.298a20 20 0 0 0-.106 1.03c-.125 1.546-.578 3.229-2.645 9.825-1.14 3.635-2.162 6.787-2.273 7.005-.295.58-.864.888-1.639.89-.672 0-1.186-.202-1.419-.558-.079-.12-.577-1.957-1.107-4.081-.547-2.193-1.06-4.048-1.185-4.293-.91-1.778-3.47-2.315-5.024-1.054-.896.727-.976.927-1.956 4.913-.487 1.982-.933 3.725-.99 3.874-.142.363-.583.853-.932 1.035-.68.356-2.015.074-2.435-.516-.098-.137-.662-1.54-1.253-3.117-.955-2.548-1.103-2.882-1.332-3a1.2 1.2 0 0 0-.434-.134c-.25 0-.629.323-.697.594-.079.316 2.128 6.19 2.5 6.652.71.883 1.809 1.344 3.03 1.272 1.304-.076 2.311-.737 2.821-1.85.12-.264.612-2.079 1.092-4.034s.931-3.668 1.004-3.806c.153-.293.556-.684.877-.85.337-.174 1.099-.15 1.507.046.698.336.766.512 1.794 4.676.883 3.58.966 3.856 1.306 4.366.431.645 1.22 1.212 1.919 1.38.268.064.782.096 1.188.072.926-.054 1.568-.358 2.19-1.04.39-.425.505-.645.783-1.487.499-1.517 3.8-12.246 4.103-13.335.393-1.414.634-2.984.698-4.552.058-1.383.057-1.385-.16-1.538-.192-.134-.557-.152-3.023-.152h-2.804l-.447-.592a5.9 5.9 0 0 0-2.12-1.749c-1.204-.586-1.302-.594-6.746-.59-4.534.003-4.963.017-5.581.179m.765 1.385c-.666.097-1.709.584-2.206 1.03l-.368.33 7.432.003 7.433.004-.318-.275c-.506-.438-1.716-.996-2.384-1.1-.725-.113-8.808-.106-9.589.008m-8.085 10.864c-.3.299-.287.585.063 1.472.355.9.562 1.148.954 1.148.367 0 .777-.383.777-.726 0-.389-.535-1.688-.788-1.913-.31-.275-.72-.268-1.007.019\"/><path fill=\"#0E384C\" d=\"M13.302 1.178c-.911.215-2.075 1.03-2.742 1.92-1.312 1.753-2.193 5.085-2.193 8.298 0 1.027.006 1.057.242 1.242l.242.19h24.086l.2-.212c.273-.29.267-.793-.014-1.056l-.212-.2H9.853l.043-.574c.322-4.327 1.42-7.245 3.015-8.007.555-.265 1.359-.288 2.014-.058.3.106.582.228.626.273.046.045-.11.19-.362.338-1.245.727-1.619 1.18-1.404 1.698.236.571.748.606 1.413.097q1.72-1.32 3.496-1.33c1.297-.007 2.358.45 3.672 1.581.303.26.881.638 1.285.839 1.45.719 2.69.715 4.171-.011.675-.33.918-.524 1.882-1.501 1.805-1.828 2.325-2.162 3.47-2.23.63-.038.765-.015 1.204.2.546.267 1.18.89 1.554 1.528.75 1.282 1.436 3.93 1.75 6.767l.043.39h-1.358c-1.196 0-1.384.02-1.573.174-.303.246-.303.875 0 1.121.195.158.388.174 2.136.174h1.922l.24-.24.238-.238-.058-1.161c-.097-1.945-.458-3.728-1.158-5.715-.686-1.946-1.764-3.342-3.087-3.995-.589-.292-.806-.349-1.453-.383-.418-.022-.976.007-1.24.063-.583.125-1.382.493-1.758.81l-.278.234-.615-.278c-.832-.375-1.383-.54-2.349-.707-2.204-.379-4.62.026-6.34 1.064l-.605.365-.556-.11c-.346-.068-.934-.089-1.555-.056l-1 .052-.44-.35c-1.116-.89-2.437-1.265-3.536-1.006m11.68 1.425c-.677.077-1.445.237-2.02.42-1.03.33-1.02.287-.21.95 2.16 1.773 3.702 1.738 5.82-.132l.563-.497-.25-.13c-.712-.374-2.93-.72-3.903-.61m8.484 1.55c-.304.304-.285.447.277 2.035.235.665.53 1.698.655 2.295.25 1.197.386 1.408.906 1.408a.68.68 0 0 0 .507-.226c.188-.2.206-.285.154-.729-.131-1.114-1.079-4.271-1.422-4.736-.25-.34-.762-.361-1.078-.046M23.254 14.51c-.187.2-.2.3-.2 1.651V17.6l-.298-.182c-.164-.1-.393-.182-.509-.183-.313 0-.661.393-.661.748 0 .256.135.433.946 1.244 1.268 1.268 1.246 1.268 2.515 0 1.037-1.038 1.136-1.266.755-1.75-.237-.302-.69-.324-1.037-.052l-.242.19v-1.459c0-1.407-.007-1.466-.212-1.659-.291-.273-.793-.267-1.057.013\" opacity=\".9\"/></g>"},"icon-services-4":{"body":"<g fill=\"none\"><g fill-rule=\"evenodd\" clip-path=\"url(#a)\" clip-rule=\"evenodd\"><path fill=\"#1E84B5\" d=\"M18.91.167c-1.14.124-2.653.674-3.7 1.343-.59.378-1.863 1.56-2.186 2.032-.17.25-.325.342-.767.462-3.268.884-5.312 2.076-5.884 3.431-.203.48-.165 1.267.086 1.802.507 1.08 2.306 2.238 4.573 2.942.413.129.533.21.579.39.11.443.705 1.591 1.188 2.297.27.392.595.923.725 1.18.662 1.304 1.472 4.277 2.49 9.133.324 1.549.672 2.978.773 3.176.203.396.732.904 1.083 1.037.3.115.875.109 1.194-.011.369-.14.838-.615 1.08-1.096.115-.227.963-2.623 1.886-5.325.922-2.7 1.713-4.95 1.758-5 .105-.113 1.244-.18 1.754-.102l.39.06 1.744 5.109c.96 2.81 1.854 5.282 1.987 5.493.505.796 1.331 1.135 2.128.872.432-.143 1.026-.748 1.204-1.227.078-.212.391-1.583.695-3.047s.7-3.27.88-4.01l.327-1.35 1.643-.028c2.169-.038 2.05.069 2.09-1.867l.03-1.42h2.819l.19-.242c.179-.228.19-.358.19-2.207 0-1.965 0-1.966-.225-2.191-.21-.21-.29-.226-1.17-.227h-.946l.678-.37c.914-.498 1.647-1.092 2.005-1.622 1.293-1.92-.242-3.833-4.106-5.12-.968-.323-1.006-.346-1.375-.836A9 9 0 0 0 33.392.93c-1.92-.9-3.894-1.036-5.963-.41-1.633.494-3.455.528-4.812.089C21.4.215 20.001.049 18.91.167m-.61 1.445c-2.697.611-4.885 2.786-5.643 5.61-.21.785-.291 2.786-.146 3.631l.072.423 1.121.244c3.232.704 6.339 1.003 10.53 1.013 3.688.009 6.242-.156 6.242-.402 0-.085.096-.244.213-.354.198-.187.301-.2 1.606-.2h1.394v-1.364c0-1.241.017-1.386.19-1.606l.19-.242h3.179l-.12-.62c-.477-2.486-2.088-4.596-4.298-5.63-1.593-.745-3.494-.839-5.245-.258l-.918.305-1.836-.002c-1.832-.002-1.838-.003-2.754-.308-.804-.267-1.06-.309-2.066-.336-.757-.021-1.339.012-1.71.096m-7.375 4.185c-1.23.434-2.254.983-2.799 1.5-.715.68-.773 1.126-.225 1.75.478.544 1.646 1.202 2.963 1.67.325.115.35.112.294-.032-.033-.086-.06-.676-.06-1.311 0-1.409.2-2.464.698-3.694.085-.211.044-.205-.871.117m27.079.045c0 .023.1.387.222.81.225.777.404 2.067.444 3.205l.022.62.78-.389a5.4 5.4 0 0 0 1.308-.9c.48-.464.528-.547.528-.9 0-.335-.057-.452-.405-.822A5 5 0 0 0 40 6.733c-.498-.3-1.996-.97-1.996-.891m-2.953 5.239c-.04 1.873.056 1.782-1.877 1.782h-1.413v2.295h1.383c.761 0 1.459.04 1.551.09.28.15.371.614.371 1.897v1.226h2.203V16.99c0-1.344.006-1.388.226-1.607.219-.22.262-.225 1.606-.225h1.381v-2.295H37.65l-.19-.242c-.174-.22-.19-.365-.19-1.607V9.65h-2.187zm-21.858 1.85c.099.262.402.767.812 1.355 1.21 1.73 1.972 4.202 3.346 10.832.261 1.262.53 2.426.596 2.586.252.607.728.588 1.039-.042.092-.188.948-2.632 1.901-5.432s1.805-5.163 1.894-5.252c.276-.276 1.154-.482 2.05-.481.894.001 1.868.226 2.097.485.073.082.94 2.512 1.926 5.4.986 2.887 1.839 5.333 1.894 5.436.17.318.441.41.702.239a.9.9 0 0 0 .306-.354c.042-.112.332-1.421.644-2.91.312-1.487.73-3.38.928-4.207.334-1.389.361-1.602.361-2.823v-1.32h-1.423c-1.871 0-1.79.074-1.79-1.618v-1.251l-.344.052c-2.054.315-8.624.306-11.592-.015-1.743-.189-3.473-.448-4.662-.699-.37-.077-.688-.141-.709-.141-.02 0-.01.072.024.16M10.865 17.1c-.27.133-.4.462-.4 1v.455H9.93c-.65 0-.935.208-.935.678 0 .451.229.607.891.607h.556l.039.61c.043.684.246.95.72.95.408 0 .64-.369.64-1.021v-.539h.582c.6 0 .777-.094.918-.487.07-.201-.15-.662-.357-.74-.082-.032-.368-.058-.635-.058h-.487l-.038-.598c-.023-.356-.092-.65-.172-.728-.187-.183-.556-.244-.788-.129m27.18 7.556c-.19.189-.225.313-.225.78v.555h-.555c-.467 0-.59.036-.78.225-.276.275-.285.5-.035.818.17.216.252.242.78.242h.59v.555c0 .467.036.59.225.78.273.273.628.29.877.042.146-.146.183-.306.183-.78v-.597h.597c.683 0 .964-.182.964-.627q0-.659-.993-.658h-.568v-.59c0-.528-.025-.61-.242-.78-.317-.25-.542-.24-.818.035m-21.658 5.569c-.605.208-1.005.432-3.609 2.024-.976.597-1.803 1.085-1.837 1.084s-.158-.146-.273-.324c-.231-.357-.569-.531-.83-.43-.093.037-1.331.808-2.751 1.715-2.917 1.861-2.944 1.888-2.57 2.548.609 1.077 6.272 9.878 6.476 10.063.145.133.312.2.437.176.3-.057 5.454-3.373 5.564-3.58.132-.247.053-.491-.376-1.155-.204-.315-.37-.589-.37-.609s.417-.288.927-.596l.927-.56 4.328 1.438c3.889 1.291 4.408 1.442 5.109 1.483a4.6 4.6 0 0 0 2.478-.514c.513-.264 9.799-6.19 10.357-6.61.696-.524 1.188-1.662 1.086-2.515a3.006 3.006 0 0 0-2.572-2.606c-.874-.12-1.32.094-4.602 2.208l-3.03 1.95-.205-.392c-.231-.441-.766-.997-1.153-1.198-.25-.13-10.396-3.5-11.126-3.696-.609-.163-1.767-.117-2.385.096m.412 1.257c-.38.127-4.897 2.772-5.126 3-.043.043 3.714 5.98 3.829 6.051.038.024.573-.264 1.189-.64s1.203-.684 1.304-.684c.102 0 2.126.643 4.499 1.428 2.372.786 4.54 1.465 4.816 1.51.63.102 1.5-.029 2.062-.311.229-.116 2.649-1.64 5.378-3.39 5.48-3.512 5.365-3.418 5.365-4.353 0-.83-.661-1.493-1.489-1.493-.248 0-.541.047-.651.103-.11.057-1.648 1.028-3.415 2.158l-3.215 2.054-.16.45c-.21.595-.908 1.358-1.487 1.628-.344.16-.624.215-1.105.216-.569 0-.942-.099-3.207-.855-2.1-.7-2.596-.898-2.74-1.092-.223-.297-.118-.696.234-.895.224-.126.4-.082 2.848.712 1.435.465 2.742.845 2.905.845.584 0 1.142-.469 1.336-1.123.073-.244.116-.494.098-.555a6 6 0 0 1-.09-.362c-.03-.138-.182-.397-.338-.574-.268-.306-.566-.416-5.713-2.119-5.949-1.967-6.186-2.024-7.127-1.709m-8.95 3.88c-1.08.695-1.832 1.238-1.825 1.316.017.196 5.48 8.764 5.588 8.764.13 0 3.747-2.327 3.782-2.433.037-.11-5.493-8.782-5.618-8.81-.05-.012-.918.511-1.928 1.162\"/><path fill=\"#0E384C\" d=\"M18.91.167c-1.14.124-2.652.674-3.7 1.343-.59.378-1.862 1.56-2.185 2.032-.17.25-.325.342-.767.462-3.268.884-5.312 2.076-5.885 3.431-.202.48-.164 1.267.087 1.802.507 1.08 2.306 2.238 4.573 2.942.413.129.533.21.578.39.111.443.706 1.591 1.189 2.297.269.392.595.923.725 1.18.661 1.304 1.471 4.277 2.49 9.133.324 1.549.672 2.978.773 3.176.202.396.732.904 1.083 1.037.3.115.875.109 1.194-.011.368-.14.837-.615 1.08-1.096.115-.227.963-2.623 1.885-5.325.922-2.7 1.714-4.95 1.759-5 .104-.113 1.243-.18 1.754-.102l.39.06 1.744 5.109c.96 2.81 1.853 5.282 1.987 5.493.504.796 1.33 1.135 2.128.872.432-.143 1.025-.748 1.203-1.227.079-.212.392-1.583.696-3.047s.7-3.27.88-4.01l.327-1.35 1.642-.028c2.17-.038 2.05.069 2.09-1.867l.03-1.42h2.82l.19-.242c.178-.228.19-.358.19-2.207 0-1.965 0-1.966-.226-2.191-.21-.21-.29-.226-1.17-.227h-.945l.678-.37c.913-.498 1.647-1.092 2.004-1.622 1.293-1.92-.241-3.833-4.106-5.12-.968-.323-1.005-.346-1.375-.836A9 9 0 0 0 33.393.93C31.472.03 29.499-.106 27.43.52c-1.633.494-3.456.528-4.812.089C21.4.215 20.002.049 18.91.167m-.609 1.445c-2.697.611-4.885 2.786-5.643 5.61-.211.785-.292 2.786-.147 3.631l.073.423 1.12.244c3.233.704 6.339 1.003 10.53 1.013 3.688.009 6.243-.156 6.243-.402 0-.085.095-.244.212-.354.2-.187.302-.2 1.607-.2h1.394v-1.364c0-1.241.017-1.386.19-1.606l.19-.242h3.178l-.119-.62c-.478-2.486-2.088-4.596-4.298-5.63-1.593-.745-3.495-.839-5.246-.258l-.918.305-1.836-.002c-1.832-.002-1.838-.003-2.754-.308-.804-.267-1.06-.309-2.065-.336-.757-.021-1.34.012-1.71.096m-7.376 4.185c-1.23.434-2.254.983-2.798 1.5-.716.68-.773 1.126-.226 1.75.478.544 1.646 1.202 2.964 1.67.325.115.349.112.293-.032-.033-.086-.06-.676-.06-1.311 0-1.409.2-2.464.698-3.694.086-.211.045-.205-.87.117m27.08.045c0 .023.1.387.222.81.225.777.404 2.067.444 3.205l.022.62.78-.389a5.4 5.4 0 0 0 1.308-.9c.48-.464.528-.547.528-.9 0-.335-.058-.452-.405-.822A5 5 0 0 0 40 6.733c-.498-.3-1.996-.97-1.996-.891m-2.953 5.239c-.04 1.873.055 1.782-1.877 1.782h-1.413v2.295h1.383c.76 0 1.458.04 1.55.09.28.15.372.614.372 1.897v1.226h2.203V16.99c0-1.344.006-1.388.225-1.607.22-.22.263-.225 1.607-.225h1.38v-2.295H37.65l-.19-.242c-.173-.22-.19-.365-.19-1.607V9.65h-2.187zm-21.858 1.85c.098.262.401.767.812 1.355 1.209 1.73 1.972 4.202 3.346 10.832.261 1.262.53 2.426.596 2.586.252.607.727.588 1.038-.042.093-.188.949-2.632 1.902-5.432.952-2.8 1.805-5.163 1.893-5.252.277-.276 1.155-.482 2.05-.481s1.869.226 2.098.485c.072.082.94 2.512 1.926 5.4.986 2.887 1.838 5.333 1.893 5.436.17.318.442.41.703.239a.9.9 0 0 0 .305-.354c.043-.112.333-1.421.645-2.91.312-1.487.73-3.38.928-4.207.333-1.389.36-1.602.36-2.823v-1.32h-1.422c-1.872 0-1.79.074-1.79-1.618v-1.251l-.344.052c-2.054.315-8.624.306-11.592-.015-1.743-.189-3.473-.448-4.662-.699a20 20 0 0 0-.71-.141c-.02 0-.009.072.025.16M10.866 17.1c-.27.133-.401.462-.401 1v.455h-.533c-.65 0-.936.208-.936.678 0 .451.23.607.892.607h.556l.038.61c.044.684.246.95.72.95.409 0 .64-.369.64-1.021v-.539h.582c.6 0 .778-.094.918-.487.072-.201-.15-.662-.357-.74-.081-.032-.367-.058-.635-.058h-.487l-.038-.598c-.022-.356-.091-.65-.171-.728-.187-.183-.557-.244-.788-.129m27.18 7.556c-.19.189-.225.313-.225.78v.555h-.555c-.467 0-.591.036-.78.225-.276.275-.286.5-.036.818.17.216.252.242.78.242h.59v.555c0 .467.036.59.226.78.273.273.628.29.876.042.146-.146.184-.306.184-.78v-.597h.596c.684 0 .964-.182.964-.627q0-.659-.992-.658h-.568v-.59c0-.528-.026-.61-.242-.78-.318-.25-.543-.24-.818.035\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 .103h47v47H0z\"/></clipPath></defs></g>","width":47},"icon-star":{"body":"<path fill=\"#1E84B5\" d=\"M82.826 41.413c-34.35 3.852-37.56 7.063-41.413 41.413C37.56 48.476 34.35 45.266 0 41.413 34.35 37.56 37.56 34.35 41.413 0c3.852 34.35 7.063 37.56 41.413 41.413\"/>","width":83,"height":83},"icon-why-us-1":{"body":"<g fill=\"none\"><g fill-rule=\"evenodd\" clip-path=\"url(#a)\" clip-rule=\"evenodd\"><path fill=\"#1E84B5\" d=\"M16.771 5.361a3.95 3.95 0 0 0-2.798 2.958c-.083.379-.103 1.938-.076 5.86.04 5.852.027 5.708.632 7.04.513 1.133 1.654 2.493 2.51 2.994.167.098.305.2.305.229 0 .027-.285.149-.633.27-3.95 1.369-7.113 4.599-8.469 8.646-.495 1.478-.653 2.48-.713 4.516l-.055 1.852h-.507c-.413 0-.55-.043-.737-.23l-.23-.23v-24.58l.23-.23.23-.23h5.455l.23-.23a.706.706 0 0 0 0-1.04l-.23-.23H9.179c-1.874 0-2.857.036-3.121.114-.545.16-1.3.931-1.45 1.48-.089.326-.109 3.244-.088 12.914l.027 12.492H.46l-.243.243c-.226.226-.24.285-.19.87.128 1.534 1.04 2.792 2.343 3.234.41.14 2.328.153 21.618.153 17.827 0 21.238-.021 21.604-.13.95-.287 1.957-1.363 2.212-2.365.064-.252.155-.532.203-.621.092-.173.123-1.077.034-.988-.029.029-.153-.048-.277-.172-.223-.223-.237-.224-2.268-.224h-2.043l.026-7.268.025-7.268-.232-.232c-.307-.307-.737-.308-1.042-.002l-.23.23v14.08l-.23.23-.23.23h-7.015l-.052-1.992c-.072-2.75-.415-4.251-1.437-6.293-1.56-3.116-4.516-5.7-7.7-6.728-.374-.121-.68-.243-.68-.27 0-.029.137-.132.305-.23.856-.5 1.997-1.861 2.51-2.994.606-1.335.592-1.178.63-7.117.03-4.812.017-5.48-.12-5.953-.417-1.443-1.397-2.419-2.81-2.796-.65-.174-7.765-.167-8.4.008m.127 1.52c-.536.19-1.185.855-1.373 1.406-.12.35-.15.852-.15 2.44v1.999h11.26l-.029-2.133c-.032-2.398-.069-2.558-.754-3.223-.648-.628-.78-.645-4.892-.637-3.01.006-3.734.033-4.062.149m3.582 1.2a.75.75 0 0 0-.23.562c0 .318-.014.333-.332.333-.43 0-.793.343-.793.75s.363.75.793.75c.318 0 .332.014.332.332 0 .43.344.793.75.793s.75-.364.75-.793c0-.318.014-.332.332-.332.43 0 .793-.344.793-.75s-.363-.75-.793-.75c-.318 0-.332-.015-.332-.333 0-.43-.344-.792-.75-.792a.76.76 0 0 0-.52.23m12.54.262c-.414.133-1.081.734-1.297 1.17-.16.322-.181.693-.23 4.244-.051 3.616-.07 3.943-.26 4.64-.409 1.49-1.075 2.546-2.023 3.206-.609.424-.785.747-.621 1.142a.8.8 0 0 0 .344.375c.335.152 16.976.15 17.487-.003.514-.154 1.1-.691 1.357-1.245l.221-.474V10.054l-.22-.474c-.259-.555-.844-1.091-1.358-1.246-.484-.144-12.946-.136-13.4.01m.22 1.604-.222.22-.044 3.788c-.04 3.385-.064 3.87-.234 4.583-.246 1.03-.608 1.926-1.062 2.628l-.361.56H46.04l.23-.23.23-.23v-11.08l-.23-.23-.23-.23H33.46zm2.99 3.009a.76.76 0 0 0-.23.52.76.76 0 0 0 .23.52l.23.23h6.58l.23-.23a.76.76 0 0 0 .23-.52.76.76 0 0 0-.23-.52l-.23-.23h-6.58zm-20.855 3.598c0 2.013.025 2.428.185 3.053.275 1.076.685 1.776 1.546 2.642.872.878 1.692 1.34 2.83 1.592 2.646.589 5.515-1.149 6.43-3.895.184-.554.206-.85.238-3.166l.034-2.554H15.375zm20.855.902a.76.76 0 0 0-.23.52c0 .182.085.375.23.52l.23.23h5.08l.23-.23a.76.76 0 0 0 .23-.52.76.76 0 0 0-.23-.52l-.23-.23h-5.08zM19.781 25.53c-.129.024-.515.088-.858.142l-.623.098-.29.647c-.234.526-.948 2.724-.948 2.923 0 .029.116.08.258.115.715.177 1.524.935 1.924 1.801.2.434.21.58.238 3.475l.03 3.022-.236.236c-.208.207-.316.236-.901.236-.58 0-.694-.03-.895-.23a.706.706 0 0 1 0-1.04c.127-.127.295-.23.375-.23.127 0 .145-.285.143-2.274-.002-2.01-.022-2.317-.175-2.648-.527-1.142-2.064-1.44-2.998-.582-.52.479-.57.76-.573 3.23-.002 1.99.016 2.274.143 2.274.08 0 .248.103.375.23a.706.706 0 0 1 0 1.04c-.201.2-.314.23-.895.23-.585 0-.693-.029-.9-.236l-.237-.236.03-3.022c.027-2.877.039-3.043.234-3.466.428-.928 1.082-1.525 2.02-1.843.43-.147.495-.205.595-.533l.41-1.338c.164-.533.277-.991.25-1.017-.025-.026-.388.134-.805.357-2.237 1.192-4.167 3.242-5.294 5.624-.825 1.745-1.177 3.471-1.178 5.78v1.43h24.028l-.053-1.805c-.079-2.659-.402-4.048-1.39-5.977a12.2 12.2 0 0 0-2.437-3.22c-.74-.687-2.023-1.623-2.109-1.538-.024.024.06.466.185.984.125.517.278 1.252.34 1.633.111.693.112.694.503.856.97.402 1.56 1.257 1.631 2.367.038.587.01.745-.216 1.25-.972 2.167-3.982 2.197-5.013.05-.306-.639-.313-1.59-.017-2.241.26-.573.847-1.189 1.347-1.414.373-.168.373-.17.313-.596-.113-.803-.512-2.34-.807-3.104-.338-.877-.386-.91-1.765-1.225-.78-.178-3.204-.317-3.759-.215m6.55 6.571c-.557.347-.739 1.022-.435 1.623.171.338.3.457.659.603.44.18.45.18.886 0 .291-.121.502-.288.622-.494.35-.598.15-1.46-.404-1.747-.358-.186-1.016-.178-1.327.015M.029 40.663c0 .284.018.4.039.258a2 2 0 0 0 0-.516c-.021-.141-.039-.025-.039.258m1.566.646c0 .186.63 1.004.928 1.203l.318.214h21.132c23.043 0 21.354.04 21.884-.531.223-.24.55-.786.55-.918 0-.028-10.083-.051-22.406-.051-12.972 0-22.406.035-22.406.083\"/><path fill=\"#0E384C\" d=\"M33.02 8.344c-.414.132-1.081.733-1.297 1.168-.16.323-.181.694-.23 4.245-.051 3.616-.07 3.943-.26 4.64-.409 1.49-1.075 2.546-2.023 3.206-.609.424-.785.747-.622 1.142a.8.8 0 0 0 .345.375c.334.152 16.976.15 17.486-.003.515-.154 1.1-.691 1.358-1.245l.22-.474V10.054l-.22-.474c-.258-.555-.843-1.091-1.358-1.245-.483-.145-12.945-.137-13.399.009m.219 1.603-.221.22-.044 3.788c-.04 3.385-.064 3.87-.234 4.583-.246 1.03-.608 1.927-1.062 2.628l-.362.56H46.04l.23-.23.23-.23v-11.08l-.23-.23-.23-.23H33.46zm2.991 3.009a.76.76 0 0 0-.23.52.76.76 0 0 0 .23.52l.23.23h6.58l.23-.23a.76.76 0 0 0 .23-.52.76.76 0 0 0-.23-.52l-.23-.23h-6.58zm0 4.5a.76.76 0 0 0-.23.52c0 .182.085.375.23.52l.23.23h5.08l.23-.23a.76.76 0 0 0 .23-.52.76.76 0 0 0-.23-.52l-.23-.23h-5.08z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 .726h48v48H0z\"/></clipPath></defs></g>","height":49},"icon-why-us-2":{"body":"<g fill=\"none\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path fill=\"#0E384C\" d=\"M13.918.757c-1.813.053-2.004.075-2.416.278-1.006.495-1.474 1.777-1.017 2.784.095.21.396.576.67.814l.496.435-.06 1.128c-.039.7-.19 1.761-.4 2.796-.39 1.927-.39 2.494-.001 3.158.475.811 1.329 1.075 2.353.726l.563-.19.328.317c.18.175.485.383.677.463.685.286 1.83.117 2.558-.377l.357-.242.665.312c.59.276.755.312 1.462.312.728 0 .843-.027 1.342-.31l.546-.309.18.231c.1.127.401.34.67.473.867.433 1.9.295 2.672-.357.244-.206.336-.236.485-.156.101.054.397.144.658.2.845.181 1.763-.243 2.145-.991.203-.399.22-1.09.064-2.54-.173-1.596-.145-3.117.075-4.065.096-.417.162-.524.351-.577.128-.036 1.014-.068 1.968-.072 5.012-.021 14.22-.231 14.437-.329.178-.08.242-.189.264-.451.054-.652.107-.645-4.251-.543-2.113.05-9.636.134-16.719.189-14.358.11-13.19.157-13.48-.54-.12-.285-.122-.384-.016-.662.068-.18.243-.416.389-.525.262-.195.322-.198 5.484-.198 3.348 0 6.212.05 7.986.141 3.896.198 20.091.155 20.414-.055.251-.163.291-.699.065-.886-.116-.097-1.847-.117-8.695-.101-6.248.014-9.471-.019-11.972-.12C20.96.745 16.497.68 13.918.757m-.994 4.385c-.124.033-.16.253-.207 1.278a15.6 15.6 0 0 1-.348 2.598c-.16.747-.298 1.606-.307 1.907-.015.497.009.57.251.779.3.258.582.241 1.203-.073a1.9 1.9 0 0 1 .697-.176c.3 0 .412.068.782.467.266.288.54.49.715.524.403.08 1.017-.11 1.56-.482.262-.18.582-.321.732-.321.147 0 .568.157.936.35.547.285.77.35 1.209.35.468 0 .604-.046 1.046-.35.742-.511 1.075-.489 1.716.118.763.721 1.264.742 1.98.082.523-.482.968-.564 1.525-.28.504.258.992.258 1.25 0 .183-.184.193-.264.14-1.148-.149-2.442-.168-3.817-.065-4.593.06-.448.133-.878.163-.956.047-.122-.148-.137-1.48-.115l-1.535.026-.029.937A12 12 0 0 0 24.95 7.8c.067.438.11.881.097.984-.046.373-.561.55-.893.305-.257-.19-.451-1.379-.451-2.766V5.08h-2.769l-.09 1.324c-.083 1.215-.109 1.34-.308 1.5-.286.232-.44.222-.709-.047-.212-.212-.221-.27-.18-1.149.024-.508.059-1.083.078-1.276l.035-.352h-2.701l-.002.727c-.002.7-.208 2.448-.326 2.754-.032.083-.16.197-.287.254-.279.127-.666-.017-.749-.28-.03-.095.014-.708.098-1.362.089-.686.128-1.38.092-1.641l-.063-.452-1.374.01c-.755.007-1.441.03-1.524.052m-7.93 3.416C3.846 9 2.902 10.342 2.902 11.532c0 .8.227 1.266.94 1.927 1.883 1.742 4.339.858 4.794-1.728.114-.647-.009-1.495-.298-2.055-.584-1.132-2.041-1.62-3.346-1.118m.278 1.167c-.715.357-1.244 1.148-1.244 1.86 0 .756 1.21 1.715 2.05 1.623.535-.059.843-.3 1.17-.92.24-.456.262-.574.227-1.217-.03-.546-.09-.782-.251-1.01-.438-.615-1.146-.737-1.952-.336m7.146 5.773c-4.879.61-7.31 5.001-6.095 11.004.48 2.369 1.349 4.668 2.919 7.717 1.483 2.883 1.698 3.517 2.522 7.45.515 2.46.796 3.46 1.219 4.341.337.704.879 1.339 1.35 1.582.71.367 1.8.293 2.311-.156.925-.812 1.248-2.022 1.774-6.637.587-5.159 1.074-6.768 1.887-6.235.598.392.918 1.83 1.44 6.47.44 3.894.782 5.329 1.463 6.125.838.978 2.526.858 3.392-.242.7-.887 1.069-1.961 1.714-4.985.86-4.024 1.139-4.925 2.071-6.699 1.94-3.688 2.94-6.249 3.473-8.884.18-.886.215-1.358.214-2.8-.002-2.075-.147-2.769-.903-4.31-1.06-2.16-2.976-3.433-5.649-3.752-1.66-.198-3.409.111-5.373.95-.787.337-1.029.396-1.77.435-.994.052-1.552-.057-2.57-.503a11.6 11.6 0 0 0-3.217-.876c-1.006-.112-1.235-.112-2.172.005m-.328 1.255c-2.891.591-4.545 2.558-4.888 5.814-.317 3.002.863 7.127 3.335 11.658 1.12 2.052 1.528 3.287 2.305 6.96.757 3.575 1.145 4.679 1.829 5.2.413.316 1.049.364 1.338.103.494-.447.812-1.95 1.283-6.05.185-1.616.401-3.28.48-3.696.412-2.171 1.086-3.282 2.073-3.414 1.04-.14 1.818.659 2.273 2.332.253.933.415 2.014.756 5.045.454 4.047.857 5.68 1.457 5.909.543.206 1.217-.125 1.637-.804.35-.567.73-1.858 1.219-4.146.925-4.328 1.126-4.937 2.53-7.662 1.98-3.843 2.894-6.462 3.189-9.13.38-3.448-.746-6.28-2.957-7.432-1.221-.638-1.873-.783-3.468-.773-1.61.01-2.227.14-3.763.793-.775.33-1.896.625-2.472.651-.252.011.198.28.727.433.672.195.873.593.492.974-.447.447-1.34.13-2.401-.854-.925-.857-1.33-1.112-2.355-1.486-1.486-.543-3.248-.705-4.619-.425M1.47 17.96C.4 18.257-.246 19.579.09 20.782c.323 1.15 1.774 1.936 3.022 1.637.604-.145 1.285-.783 1.458-1.365.38-1.281-.15-2.5-1.297-2.978-.496-.206-1.294-.258-1.803-.116m-.013 1.308c-.12.12-.249.395-.285.609-.134.79.47 1.422 1.358 1.422.534 0 .807-.187.945-.65.275-.919-.287-1.6-1.32-1.6-.377 0-.525.046-.698.22m36.04 1.023c-.733.374-1.075 1.492-.717 2.348.162.387.696.857 1.141 1.004.547.18 1.373.081 1.757-.211.564-.43.826-1.223.637-1.927-.312-1.158-1.728-1.768-2.817-1.214m.435 1.112c-.32.456-.097 1.031.454 1.17.411.102.692-.027.78-.361.149-.564-.093-.896-.711-.979-.312-.041-.394-.015-.523.17\"/><path fill=\"#1E84B5\" d=\"M12.918 15.498c-4.878.61-7.31 5.001-6.095 11.004.48 2.369 1.349 4.668 2.919 7.717 1.483 2.883 1.698 3.517 2.522 7.45.516 2.46.796 3.46 1.219 4.341.337.704.88 1.338 1.35 1.582.71.367 1.8.293 2.312-.156.924-.812 1.247-2.022 1.773-6.637.587-5.159 1.074-6.768 1.887-6.235.598.391.919 1.83 1.44 6.47.44 3.894.782 5.329 1.464 6.125.837.978 2.525.858 3.391-.242.7-.888 1.069-1.961 1.714-4.985.86-4.024 1.139-4.925 2.071-6.699 1.94-3.688 2.94-6.249 3.473-8.885.18-.886.215-1.357.214-2.8-.002-2.074-.147-2.768-.903-4.309-1.06-2.16-2.976-3.433-5.649-3.752-1.66-.198-3.409.111-5.372.95-.788.337-1.03.396-1.77.435-.994.052-1.552-.057-2.571-.503a11.6 11.6 0 0 0-3.217-.876c-1.006-.113-1.234-.112-2.172.005m-.328 1.255c-2.891.591-4.545 2.558-4.888 5.814-.317 3.002.863 7.127 3.335 11.658 1.12 2.052 1.528 3.287 2.305 6.959.757 3.576 1.145 4.68 1.83 5.201.412.315 1.048.364 1.337.103.494-.447.812-1.95 1.283-6.05.185-1.616.401-3.28.48-3.696.412-2.171 1.086-3.282 2.073-3.414 1.04-.14 1.818.659 2.273 2.332.253.933.415 2.014.756 5.045.454 4.047.857 5.68 1.457 5.909.543.206 1.217-.125 1.637-.804.35-.567.73-1.858 1.219-4.146.925-4.328 1.126-4.937 2.53-7.662 1.98-3.843 2.894-6.462 3.189-9.13.38-3.448-.746-6.28-2.956-7.433-1.222-.637-1.874-.782-3.47-.772-1.61.01-2.226.14-3.762.793-.775.33-1.896.625-2.472.65-.252.012.198.28.727.434.672.195.873.593.492.973-.447.448-1.34.13-2.401-.853-.925-.857-1.33-1.112-2.354-1.486-1.487-.543-3.249-.705-4.62-.425\"/></g>","width":47},"icon-why-us-3":{"body":"<g fill=\"none\"><g fill-rule=\"evenodd\" clip-path=\"url(#a)\" clip-rule=\"evenodd\"><path fill=\"#0E384C\" d=\"M21.205 2.472c-5.506.974-9.85 5.355-10.786 10.876-.099.583-.154 1.403-.151 2.249.006 2.179.38 3.783 1.344 5.752 1.833 3.747 5.154 6.314 9.318 7.201.788.168 1.256.205 2.57.205 1.742 0 2.8-.161 4.223-.644 4.605-1.563 8-5.546 8.866-10.402.194-1.083.19-3.206-.007-4.361-.828-4.851-4.311-8.901-8.964-10.424-1.94-.635-4.402-.808-6.413-.452m.316 1.334c-4.884.821-8.859 4.771-9.732 9.671-.204 1.147-.186 3.133.04 4.277.954 4.834 4.568 8.448 9.468 9.468 1.086.226 3.34.227 4.406.002 3.802-.802 6.797-3.1 8.516-6.532.333-.666.768-2.005.953-2.938.227-1.143.245-3.126.04-4.277-.642-3.591-2.95-6.74-6.208-8.473-.986-.524-2.457-1.017-3.576-1.199-1.053-.17-2.89-.17-3.908.001m.327 1.742c-1.336.21-3.538 1.107-3.97 1.618-.36.424-.069 1.087.477 1.087.15 0 .483-.125.742-.277 3.997-2.357 9.228-1.091 11.763 2.847 1.731 2.689 1.83 6.215.25 9.001-.433.764-.449 1.115-.064 1.4.203.152.303.17.55.1s.375-.212.695-.773a9.93 9.93 0 0 0 1.307-4.98c0-2.716-.93-5.064-2.777-7.008-2.31-2.432-5.615-3.542-8.973-3.015m1.193 3.256c-.139.139-.184.306-.184.687 0 .473-.015.506-.252.563-1.13.272-1.946 1.329-2.023 2.618-.072 1.204.385 1.9 1.711 2.603l.518.276.025 2.054.025 2.055-.392-.062c-.216-.035-.608-.185-.873-.334-.264-.149-.584-.27-.71-.27-.549 0-.81.78-.392 1.17.326.304 1.125.668 1.747.794l.57.116.028.517c.023.429.068.549.265.704.306.241.512.236.81-.021.198-.17.251-.312.294-.78.04-.453.084-.573.205-.573.327 0 1.122-.496 1.556-.97.614-.673.866-1.335.87-2.289.004-.872-.188-1.378-.757-1.996-.358-.388-1.08-.814-1.599-.945l-.249-.062v-1.642c0-.904.028-1.643.062-1.643s.28.124.55.275c.267.152.584.276.702.276.329 0 .633-.378.598-.744-.039-.396-.62-.85-1.37-1.07-.51-.15-.541-.176-.542-.444 0-.403-.174-.851-.37-.957-.27-.144-.625-.104-.823.094m-7.719.757c-.739 1.015-1.292 2.19-1.667 3.54-.168.604-.197.952-.197 2.404 0 1.547.021 1.778.241 2.59a10.26 10.26 0 0 0 2.688 4.618c3.246 3.24 8.322 3.877 12.268 1.537 1.196-.709 1.468-1.092 1.113-1.57-.306-.41-.65-.373-1.463.16-2.083 1.368-4.52 1.773-6.963 1.157-3.01-.758-5.31-2.992-6.26-6.08-.226-.738-.248-.937-.251-2.366-.003-1.358.023-1.655.205-2.285a9.7 9.7 0 0 1 1.216-2.632c.232-.341.394-.686.394-.837 0-.381-.269-.626-.687-.626-.309 0-.388.048-.637.39m7.124 2.104c-.14.11-.31.335-.38.502-.148.353-.166.981-.036 1.225.084.156.636.553.77.553.031 0 .057-.558.057-1.24s-.035-1.24-.08-1.24c-.043 0-.192.09-.332.2m1.788 6.186c0 1.337.025 1.69.115 1.639.738-.417 1.113-1.015 1.118-1.782.003-.37-.052-.596-.206-.845-.201-.325-.705-.715-.923-.715-.073 0-.104.496-.104 1.703m-22.86 7.8c-.49.152-.97.59-1.202 1.1-.159.346-.168.823-.17 8.582 0 5.456.031 8.332.095 8.563.12.434.559.94 1.015 1.173.315.16.551.178 2.375.178 2.205 0 2.456-.045 2.97-.532.407-.387.545-.74.603-1.542l.054-.742 3.878 1.734c4.075 1.822 4.577 1.996 5.789 1.999.368 0 3.24-.248 6.38-.553 11.104-1.078 10.529-1 11.721-1.606.329-.167 2.993-1.868 5.92-3.78 5.684-3.714 5.805-3.808 6.04-4.69.094-.348.12.278.16 3.845.032 2.954.047 1.699.047-4.093 0-5.173-.019-6.973-.05-4.727-.026 1.994-.058 3.543-.07 3.442-.045-.364-.465-1.108-.813-1.438-.636-.602-1.067-.765-2.022-.765h-.84l-4.3 2.131c-4.316 2.139-5.048 2.444-6.544 2.728-1.23.233-1.168.261-1.218-.568-.09-1.517-1.187-2.93-2.726-3.516-.358-.136-1.566-.31-4.45-.642-2.177-.25-4.252-.519-4.61-.596-.741-.16-1.512-.509-2.943-1.336-2.545-1.47-4.385-1.976-7.536-2.073l-1.859-.057v-.356c0-.803-.63-1.635-1.415-1.868-.617-.184-3.678-.18-4.278.006m.245 1.427-.242.19v8.097c0 7.18.016 8.12.143 8.301.14.2.184.204 2.014.204s1.875-.004 2.014-.204c.12-.17.143-.547.143-2.253v-2.05l.226-.224c.287-.288.639-.288.926 0 .203.203.225.3.225.992v.767l4.041 1.809c2.223.995 4.276 1.87 4.563 1.945a5.3 5.3 0 0 0 1.11.136c.716 0 15.576-1.434 16.219-1.565.252-.051.686-.187.964-.302s2.93-1.792 5.896-3.728c5.091-3.324 5.403-3.542 5.588-3.926.352-.728.057-1.632-.652-2-.653-.337-.794-.285-5.205 1.907-5.475 2.72-6 2.885-10.045 3.14-10.144.642-9.56.616-9.81.43-.363-.27-.365-.921-.003-1.114.098-.053 2.235-.22 4.749-.372s4.746-.298 4.96-.326l.39-.05v-.437c0-.643-.238-1.235-.71-1.759-.772-.86-.838-.877-5.206-1.38-2.123-.244-4.122-.489-4.442-.544-.908-.155-1.967-.583-3.27-1.32-1.595-.904-1.97-1.086-2.922-1.422-1.406-.495-2.4-.658-4.402-.718l-1.813-.054v7.379l-.225.225c-.124.124-.332.225-.463.225s-.34-.101-.463-.225l-.226-.225v-9.289l-.225-.225c-.223-.223-.243-.225-1.915-.225-1.571 0-1.707.013-1.932.19M.044 35.38c0 4.595.011 6.46.025 4.147.013-2.314.013-6.073 0-8.354-.014-2.28-.025-.387-.025 4.207\"/><path fill=\"#1E84B5\" d=\"M21.205 2.472c-5.506.974-9.85 5.355-10.786 10.876-.099.583-.154 1.403-.151 2.249.006 2.179.38 3.783 1.344 5.752 1.832 3.747 5.154 6.314 9.318 7.201.788.168 1.256.205 2.57.205 1.742 0 2.8-.161 4.223-.644 4.605-1.563 8-5.546 8.866-10.402.194-1.083.19-3.206-.007-4.361-.828-4.851-4.312-8.901-8.964-10.424-1.94-.635-4.402-.808-6.413-.452m.315 1.334c-4.884.821-8.858 4.771-9.731 9.671-.205 1.147-.186 3.133.04 4.277.954 4.834 4.568 8.448 9.468 9.468 1.086.226 3.34.227 4.406.002 3.802-.802 6.797-3.1 8.516-6.532.333-.666.767-2.005.953-2.938.227-1.143.245-3.126.04-4.277-.643-3.591-2.95-6.74-6.208-8.473-.986-.524-2.457-1.017-3.577-1.199-1.052-.17-2.889-.17-3.907.001m.328 1.742c-1.336.21-3.538 1.107-3.97 1.618-.36.424-.069 1.087.477 1.087.15 0 .483-.125.742-.277 3.997-2.357 9.228-1.091 11.763 2.847 1.731 2.689 1.83 6.215.25 9.001-.433.764-.449 1.115-.064 1.4.203.152.303.17.55.1s.375-.212.695-.773a9.93 9.93 0 0 0 1.306-4.98c0-2.716-.93-5.064-2.776-7.008-2.31-2.432-5.615-3.542-8.974-3.015m1.193 3.256c-.14.139-.184.306-.184.687 0 .473-.015.506-.252.563-1.13.272-1.946 1.329-2.023 2.618-.072 1.204.385 1.9 1.71 2.603l.52.276.024 2.054.025 2.055-.392-.062c-.216-.035-.608-.185-.873-.334-.264-.149-.584-.27-.711-.27-.548 0-.809.78-.392 1.17.327.304 1.126.668 1.748.794l.57.116.028.517c.023.429.068.549.265.704.306.241.512.236.81-.021.198-.17.251-.312.294-.78.04-.453.084-.573.205-.573.327 0 1.122-.496 1.556-.97.614-.673.866-1.335.87-2.289.004-.872-.188-1.378-.757-1.996-.358-.388-1.08-.814-1.6-.945l-.248-.062v-1.642c0-.904.028-1.643.062-1.643.033 0 .28.124.549.275.268.152.585.276.703.276.329 0 .633-.378.598-.744-.039-.396-.62-.85-1.37-1.07-.51-.15-.541-.176-.542-.444 0-.403-.174-.851-.37-.957-.27-.144-.625-.104-.823.094m-7.719.757c-.739 1.015-1.292 2.19-1.667 3.54-.168.604-.197.952-.197 2.404 0 1.547.021 1.778.241 2.59a10.26 10.26 0 0 0 2.688 4.618 10.115 10.115 0 0 0 12.268 1.537c1.196-.709 1.468-1.092 1.113-1.57-.306-.41-.65-.373-1.463.16-2.083 1.368-4.52 1.773-6.963 1.157-3.01-.758-5.31-2.992-6.26-6.08-.226-.738-.248-.937-.251-2.366-.004-1.358.023-1.655.205-2.285a9.7 9.7 0 0 1 1.216-2.632c.232-.341.394-.686.394-.837 0-.381-.269-.626-.687-.626-.309 0-.388.048-.637.39m7.123 2.104c-.139.11-.31.335-.38.502-.147.353-.165.981-.035 1.225.083.156.636.553.77.553.031 0 .057-.558.057-1.24s-.035-1.24-.08-1.24c-.043 0-.192.09-.332.2m1.79 6.186c0 1.337.024 1.69.114 1.639.738-.417 1.113-1.015 1.118-1.782.003-.37-.053-.596-.206-.845-.201-.325-.705-.715-.923-.715-.073 0-.104.496-.104 1.703\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 .726h47v47H0z\"/></clipPath></defs></g>","width":47},"icon-why-us-4":{"body":"<g fill=\"none\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path fill=\"#1E84B5\" d=\"M27.414 3.85c-2.5.391-4.793 1.342-6.77 2.807-.862.64-2.733 2.511-2.972 2.973-.281.543.036 1.101.626 1.101.282 0 .454-.152 1.33-1.174.919-1.074 2.482-2.26 3.954-2.998.93-.467 2.631-1.016 3.697-1.193 1.128-.188 3.28-.193 4.413-.01 2.976.478 5.764 2.011 7.713 4.24a14 14 0 0 1 3.05 5.935c.76 3.19.41 6.269-1.036 9.105-.827 1.623-1.795 2.805-3.578 4.37-.564.494-.637.853-.253 1.236.414.415.736.291 1.873-.716 2.264-2.007 3.873-4.736 4.507-7.644.96-4.406-.21-9.246-3.096-12.803-2.091-2.58-4.976-4.344-8.269-5.057-.695-.15-1.293-.199-2.768-.224-1.035-.017-2.124.006-2.42.052M6.274 8.904C4.62 9.181 3.6 10.14 3.315 11.69c-.055.3-.1 1.105-.1 1.79 0 7.469 3.383 15.255 9.269 21.335 5.088 5.256 11.482 8.678 18.04 9.655 1.323.197 4.896.334 5.71.218 1.598-.226 2.514-1.137 2.837-2.822.187-.977.184-6.663-.005-7.554-.162-.77-.501-1.442-.944-1.873-.721-.702-1.5-.936-3.513-1.056-1.665-.098-1.796-.12-3.8-.612-1.652-.405-2.664-.457-3.4-.173-.266.102-1.308.82-2.503 1.725l-2.048 1.55-.665-.384c-2.126-1.228-4.274-3.06-5.748-4.904-.835-1.044-1.109-1.164-1.58-.694-.397.398-.349.628.302 1.447 1.374 1.731 3.184 3.379 5.122 4.664 1.943 1.289 2.605 1.542 3.178 1.214.108-.061 1.091-.793 2.186-1.626s2.122-1.563 2.283-1.622c.493-.182.965-.136 2.588.25 1.883.446 3.073.636 3.994.638 1.636.003 2.459.307 2.863 1.058.377.703.426 1.29.378 4.541-.055 3.741-.143 4.133-1.036 4.589-.982.5-5.25.263-8.264-.461-6.304-1.515-12.607-5.644-17.02-11.15-4.48-5.589-6.887-12.143-6.742-18.352.03-1.303.047-1.41.276-1.799.277-.472.726-.758 1.414-.902.66-.138 6.591-.16 7.063-.027.715.203 1.085.483 1.359 1.03.232.464.265.657.346 1.975.107 1.744.28 2.834.648 4.1.342 1.172.433 2.184.239 2.648-.077.182-.81 1.21-1.63 2.284-.82 1.075-1.547 2.062-1.616 2.194-.5.958.508 2.138 1.219 1.427.187-.187.226-.302.195-.568-.036-.312.056-.457 1.413-2.22 1.738-2.26 1.922-2.602 1.98-3.676.036-.692-.001-.946-.325-2.205-.466-1.816-.546-2.302-.656-4.04-.124-1.936-.327-2.593-1.042-3.369-.434-.47-1.176-.875-1.882-1.025-.576-.122-6.693-.125-7.422-.003m21.604 2.787c-.391.14-.63.331-.922.739-.176.247-.201.43-.242 1.79l-.046 1.514-1.515.046c-1.59.049-1.714.08-2.123.52-.415.448-.48.672-.521 1.794-.07 1.892.139 2.567.938 3.025.341.196.505.218 1.815.246l1.44.03.029 1.492c.027 1.4.042 1.51.25 1.813.121.177.366.422.543.544.302.206.418.223 1.753.251 1.567.033 1.943-.032 2.403-.419.527-.444.63-.82.631-2.334l.002-1.346 1.446-.03c1.627-.036 1.827-.1 2.354-.752l.285-.352.03-1.59c.032-1.81-.044-2.097-.687-2.588-.331-.253-.365-.259-1.86-.304l-1.522-.046-.046-1.468c-.05-1.608-.114-1.837-.642-2.28a2 2 0 0 0-.623-.333c-.505-.14-2.746-.114-3.17.038m.425 1.408c-.077.048-.118.61-.138 1.888-.037 2.353.147 2.17-2.19 2.17-1.447 0-1.75.024-1.87.145-.115.114-.145.362-.145 1.199 0 .58.043 1.135.095 1.233.089.166.209.177 1.842.177 1.756 0 2.014.041 2.16.342.043.09.1.969.125 1.953l.046 1.79h2.57l.046-1.867c.059-2.404-.123-2.218 2.16-2.218.924 0 1.745-.025 1.825-.056.123-.047.145-.248.145-1.282 0-1.118-.015-1.234-.177-1.32-.104-.056-.88-.096-1.875-.096h-1.698l-.19-.242c-.177-.225-.19-.36-.19-1.955 0-1.21-.033-1.746-.11-1.823-.124-.124-2.245-.157-2.432-.038\"/><path fill=\"#0E384C\" d=\"M27.415 3.85c-2.5.391-4.794 1.342-6.77 2.807-.863.64-2.734 2.511-2.973 2.973-.281.543.037 1.101.626 1.101.283 0 .455-.152 1.33-1.174.919-1.074 2.483-2.26 3.954-2.998.93-.467 2.632-1.016 3.698-1.193 1.127-.188 3.28-.193 4.413-.01 2.975.478 5.763 2.011 7.712 4.24a14 14 0 0 1 3.051 5.935c.76 3.19.409 6.269-1.037 9.105-.827 1.623-1.795 2.805-3.578 4.37-.564.494-.637.853-.253 1.236.414.415.736.291 1.873-.716 2.264-2.007 3.874-4.736 4.507-7.644.96-4.406-.21-9.246-3.095-12.803-2.092-2.58-4.977-4.344-8.27-5.057-.694-.15-1.293-.199-2.768-.224-1.035-.017-2.124.006-2.42.052m.463 7.84c-.39.14-.63.332-.921.74-.177.247-.202.43-.243 1.79l-.046 1.514-1.514.046c-1.59.049-1.715.08-2.124.52-.415.448-.48.672-.521 1.794-.07 1.892.139 2.567.938 3.025.342.196.505.218 1.815.246l1.44.03.029 1.492c.027 1.4.042 1.51.25 1.813.122.177.366.422.544.544.3.206.418.223 1.752.251 1.568.033 1.944-.032 2.403-.419.528-.444.63-.82.632-2.334l.002-1.346 1.445-.03c1.627-.036 1.827-.1 2.355-.752l.285-.352.028-1.59c.033-1.81-.043-2.097-.686-2.588-.331-.253-.365-.259-1.86-.304l-1.522-.046-.045-1.468c-.05-1.608-.115-1.837-.642-2.28a2 2 0 0 0-.623-.333c-.506-.14-2.746-.114-3.17.038m.425 1.409c-.076.048-.117.61-.137 1.888-.038 2.353.146 2.17-2.19 2.17-1.448 0-1.75.024-1.872.145-.114.114-.144.362-.144 1.199 0 .58.043 1.135.095 1.233.089.166.209.177 1.842.177 1.756 0 2.014.041 2.16.342.043.09.1.969.125 1.953l.047 1.79h2.57l.046-1.867c.059-2.404-.122-2.218 2.16-2.218.924 0 1.746-.025 1.825-.056.123-.047.146-.248.146-1.282 0-1.118-.016-1.234-.178-1.32-.104-.056-.88-.096-1.875-.096h-1.698l-.19-.242c-.177-.225-.19-.36-.19-1.955 0-1.21-.032-1.746-.11-1.823-.124-.124-2.245-.157-2.432-.038\"/></g>"},"icon-why-us-5":{"body":"<g fill=\"none\"><g fill-rule=\"evenodd\" clip-path=\"url(#a)\" clip-rule=\"evenodd\"><path fill=\"#0E384C\" d=\"M3.893.853C2.363 1.226 1.07 2.559.74 4.103c-.072.335-.104 2.33-.103 6.38.001 6.41.016 6.62.519 7.499.326.57 1.085 1.335 1.642 1.655.758.436 1.376.55 2.995.55H7.24l1.678 2.226 1.678 2.226.385.028.386.028 1.68-2.25 1.68-2.25 14.599-.005c15.965-.004 15.162.022 16.106-.53 1.023-.599 1.953-1.872 2.085-2.855.028-.21.087-.382.13-.382.045 0 .08-2.702.079-6.082 0-3.345-.036-6.026-.079-5.96q-.078.124-.127-.251c-.135-1.003-1.092-2.315-2.067-2.835-1.137-.606-.017-.57-17.39-.57-15.647 0-15.77.002-15.953.184-.216.216-.243.71-.053.97.128.174.425.178 16.087.223l15.957.046.526.258c.577.284 1.048.773 1.374 1.428l.212.426v12.392l-.258.525a3.02 3.02 0 0 1-1.591 1.446c-.494.185-.643.186-15.314.186H14.235l-.26.222c-.143.122-.858 1.03-1.59 2.016-.733.987-1.358 1.785-1.391 1.775s-.676-.845-1.429-1.855-1.445-1.898-1.538-1.974c-.132-.109-.566-.147-2.06-.185-1.824-.045-1.906-.055-2.355-.29a3.3 3.3 0 0 1-1.358-1.441c-.195-.42-.197-.486-.197-6.621V4.26l.256-.52a3.07 3.07 0 0 1 1.431-1.395c.394-.182.616-.2 3.071-.243C9.3 2.06 9.47 2.046 9.592 1.878c.201-.274.162-.723-.082-.953-.208-.195-.267-.2-2.685-.192C5.219.738 4.19.78 3.893.853M.678 10.456c0 3.358.011 4.73.025 3.052s.014-4.426 0-6.104C.69 5.725.678 7.099.678 10.456m9.73-5.03c-.162.127-.471.652-.833 1.414-.317.666-.61 1.233-.652 1.259s-.654.134-1.36.24c-1.503.226-1.75.31-1.93.657-.305.59-.192.8 1.07 2.01l1.006.965-.233 1.28c-.306 1.687-.302 1.84.053 2.171.442.413.716.363 2.163-.394l1.262-.66 1.29.663c.708.365 1.384.662 1.5.66.485-.006.93-.426.933-.88.002-.153-.102-.856-.229-1.56l-.23-1.28 1.005-.964c1.243-1.191 1.355-1.396 1.09-1.976-.166-.367-.48-.477-1.983-.699l-1.383-.204-.578-1.232c-.355-.758-.678-1.317-.839-1.452a.87.87 0 0 0-1.122-.018m13.222-.034c-.21.128-.428.483-.905 1.469-.345.715-.662 1.3-.704 1.3-.428 0-2.756.414-2.92.519-.269.173-.481.667-.412.958.029.122.527.702 1.107 1.289l1.055 1.067-.24 1.428c-.262 1.558-.247 1.736.178 2.07.401.316.703.248 2.073-.47l1.273-.665 1.271.666c1.433.75 1.696.8 2.132.41.357-.319.364-.493.085-2.158l-.213-1.266 1.07-1.083c1.027-1.04 1.07-1.1 1.07-1.472 0-.622-.317-.871-1.287-1.01l-1.452-.21-.674-.098-.654-1.327c-.49-.994-.718-1.359-.905-1.456-.337-.174-.618-.162-.948.04m13.145.017c-.154.121-.512.711-.896 1.477-.35.701-.675 1.275-.72 1.275-.163 0-2.63.375-2.792.425-.242.073-.52.58-.523.952-.002.291.1.42 1.093 1.378l1.096 1.057-.221 1.238c-.295 1.65-.29 1.873.046 2.21.416.415.693.365 2.169-.392l1.29-.661 1.254.66c1.302.685 1.553.751 1.987.527.495-.256.527-.538.247-2.148l-.25-1.436 1.006-.964c1.278-1.225 1.394-1.447 1.055-2.02-.215-.365-.404-.428-1.945-.655l-1.364-.202-.633-1.276c-.348-.701-.701-1.338-.786-1.415-.27-.245-.821-.26-1.113-.03M10.449 8.184c-.258.518-.558 1.01-.666 1.096-.123.096-.61.217-1.278.315l-1.08.16.828.843c.938.957.924.91.69 2.245-.213 1.205-.268 1.164.81.594.534-.282 1.066-.502 1.217-.5.147 0 .69.224 1.208.497 1.067.561 1.013.601.803-.591-.235-1.335-.25-1.288.69-2.245l.827-.844-1.08-.16c-.667-.097-1.155-.218-1.277-.314-.11-.085-.409-.578-.667-1.096-.257-.518-.488-.94-.512-.94s-.255.422-.513.94m13.158.02c-.263.527-.575 1.023-.694 1.101s-.7.21-1.293.295l-1.076.153.822.833c.452.459.847.919.878 1.022.03.104-.027.641-.127 1.194s-.183 1.04-.184 1.081c-.001.043.434-.154.967-.436s1.082-.512 1.22-.512.697.23 1.243.514l.993.514-.052-.262c-.239-1.183-.34-1.925-.289-2.126.033-.131.418-.576.857-.992.438-.414.776-.774.75-.799-.024-.024-.498-.112-1.052-.194s-1.102-.211-1.219-.288-.426-.57-.689-1.099c-.263-.528-.5-.96-.527-.96s-.265.432-.528.96m13.198-.048c-.252.502-.544.993-.65 1.092-.14.13-.49.223-1.293.342l-1.1.162.788.793c.94.944.962 1.02.71 2.412-.098.543-.17.987-.159.987.01 0 .45-.226.975-.503.526-.276 1.076-.504 1.224-.505.151 0 .678.218 1.216.505.56.3.949.46.949.39 0-.064-.063-.467-.138-.896-.247-1.401-.255-1.375.69-2.338l.828-.845-1.073-.153c-.59-.084-1.168-.215-1.284-.29-.118-.078-.415-.566-.672-1.102-.253-.53-.48-.964-.506-.964s-.253.41-.505.913M9.501 27.173C3.495 28.049-.54 34.019.943 39.838a10.47 10.47 0 0 0 5.2 6.68c1.343.723 3.274 1.206 4.819 1.206 4.535 0 8.64-3.096 9.909-7.471 1.378-4.757-.876-9.875-5.32-12.078-1.89-.937-4.046-1.294-6.05-1.002m16.355.911a2.5 2.5 0 0 0-.76.273c-1.485.919-1.373 3.48.185 4.212l.417.196 10.172-.024 10.173-.024.442-.276c.307-.191.528-.429.727-.78.253-.448.285-.587.285-1.24 0-.65-.032-.79-.284-1.238-.372-.662-.986-1.05-1.791-1.134-.816-.086-19.045-.053-19.566.035m-16.433.503c-1.247.237-2.55.768-3.556 1.45-.61.414-1.707 1.498-2.169 2.142-.564.788-1.185 2.142-1.428 3.114-.293 1.172-.29 3.042.006 4.24.233.942.946 2.448 1.52 3.21l.36.478.244-.626a6.95 6.95 0 0 1 1.608-2.454c.608-.609 1.934-1.503 2.23-1.503.068 0-.072-.217-.311-.482a6 6 0 0 1-.766-1.17c-.317-.662-.33-.728-.33-1.699 0-.976.011-1.034.34-1.724 1.277-2.674 4.653-3.275 6.735-1.2.92.916 1.37 2.295 1.155 3.547-.143.835-.538 1.653-1.064 2.202-.23.24-.42.453-.42.472 0 .02.122.078.27.13.343.119 1.21.673 1.728 1.104.78.647 1.573 1.86 2.099 3.207.078.2.098.188.44-.27a8.945 8.945 0 0 0-.67-11.485 8.9 8.9 0 0 0-4.228-2.517c-1.12-.29-2.762-.361-3.793-.166m16.777.84c-.833.186-1.123 1.132-.529 1.726l.233.233h19.725l.268-.269c.381-.38.381-.98 0-1.405l-.267-.3-9.623-.013c-5.293-.008-9.706.005-9.807.027m-16.157 3.225c-2.355.815-2.523 4.056-.268 5.166.657.324 1.732.312 2.38-.026 1-.522 1.556-1.418 1.555-2.505-.003-1.92-1.865-3.258-3.667-2.635m15.866 2.409c-.538.107-.865.295-1.242.713-.407.45-.57.916-.57 1.624 0 .712.163 1.174.576 1.633.685.76-.198.704 11.146.706 11.002.002 10.358.034 11.007-.537.977-.857.968-2.736-.017-3.626-.475-.43-.904-.55-1.987-.556-1.098-.007-1.318.107-1.318.682 0 .514.18.613 1.196.664.481.023.966.092 1.078.151.247.133.48.56.48.883 0 .31-.23.75-.454.87-.118.063-3.438.094-10 .094H25.98l-.247-.212c-.188-.162-.256-.319-.29-.665q-.079-.834.691-1.047c.22-.06 2.91-.095 7.61-.095h7.27l.143-.204a.76.76 0 0 0-.033-.91l-.175-.217-7.33-.014c-4.03-.008-7.5.02-7.711.063M9.734 39.605c-2.07.45-3.833 2.194-4.257 4.213l-.11.528.319.266c.533.446 2.27 1.259 3.118 1.459 1.627.384 3.264.333 4.807-.15.834-.26 2.139-.913 2.629-1.315l.321-.264-.161-.626c-.267-1.033-.678-1.74-1.49-2.565-.572-.58-.892-.82-1.44-1.082-1.213-.579-2.48-.736-3.736-.464m16.145 2.437c-.94.186-1.638 1.02-1.721 2.05-.09 1.129.346 2.003 1.198 2.4.447.208.577.222 2.1.223 1.576 0 1.63-.006 1.768-.203a.76.76 0 0 0-.032-.91c-.17-.21-.227-.218-1.676-.246-1.46-.029-1.506-.035-1.744-.262a1 1 0 0 1-.207-1.181c.085-.179.242-.375.348-.436.15-.086 2.473-.112 10.002-.112h9.807l.268.3c.354.397.374.989.046 1.37l-.221.258-6.975.046c-6.696.044-6.983.053-7.169.22-.25.227-.263.79-.023 1.007.156.14.744.151 7.328.128l7.158-.024.442-.276c1.464-.912 1.357-3.387-.18-4.172l-.46-.234-9.822-.014c-5.472-.008-10.005.022-10.235.068\"/><path fill=\"#1E84B5\" d=\"M3.894.853C2.364 1.226 1.07 2.559.74 4.103c-.071.335-.103 2.33-.102 6.38.001 6.41.016 6.62.519 7.499.326.57 1.085 1.335 1.642 1.655.758.436 1.376.55 2.995.55H7.24l1.678 2.226 1.677 2.226.386.028.386.028 1.68-2.25 1.68-2.25 14.599-.005c15.965-.004 15.162.022 16.106-.53 1.023-.599 1.953-1.872 2.085-2.855.028-.21.087-.382.13-.382.045 0 .08-2.702.079-6.082-.001-3.345-.036-6.026-.079-5.96q-.078.124-.127-.251c-.135-1.003-1.092-2.315-2.068-2.835-1.136-.606-.016-.57-17.389-.57-15.647 0-15.77.002-15.953.184-.216.216-.243.71-.053.97.127.174.425.178 16.087.223l15.957.046.526.258c.577.284 1.048.773 1.374 1.428l.212.426v12.392l-.258.525a3.02 3.02 0 0 1-1.591 1.446c-.494.185-.643.186-15.314.186H14.235l-.26.222c-.142.122-.858 1.03-1.59 2.016-.732.987-1.357 1.785-1.39 1.775s-.676-.845-1.429-1.855-1.445-1.898-1.538-1.974c-.133-.109-.567-.147-2.06-.185-1.824-.045-1.907-.055-2.355-.29-.555-.292-1.09-.859-1.359-1.441-.194-.42-.196-.486-.196-6.621V4.26l.255-.52a3.07 3.07 0 0 1 1.432-1.395c.394-.182.616-.2 3.071-.243 2.485-.043 2.655-.056 2.777-.224.2-.274.162-.723-.082-.953-.208-.195-.268-.2-2.685-.192C5.22.738 4.192.78 3.894.853M.68 10.456c0 3.358.011 4.73.025 3.052s.014-4.426 0-6.104C.69 5.725.68 7.099.68 10.456m9.73-5.03c-.162.127-.471.652-.833 1.414-.317.666-.61 1.233-.652 1.259s-.654.134-1.36.24c-1.503.226-1.75.31-1.93.657-.305.59-.192.8 1.07 2.01l1.006.965-.233 1.28c-.306 1.687-.302 1.84.053 2.171.442.413.716.363 2.163-.394l1.262-.66 1.29.663c.708.365 1.384.662 1.5.66.485-.006.93-.426.933-.88.001-.153-.102-.856-.229-1.56l-.23-1.28 1.005-.964c1.243-1.191 1.355-1.396 1.09-1.976-.166-.367-.48-.477-1.983-.699l-1.384-.204-.577-1.232c-.355-.758-.678-1.317-.839-1.452a.87.87 0 0 0-1.122-.018m13.222-.034c-.21.128-.428.483-.905 1.469-.345.715-.662 1.3-.704 1.3-.429 0-2.757.414-2.92.519-.269.173-.481.667-.412.958.028.122.527.702 1.107 1.289l1.055 1.067-.24 1.428c-.263 1.558-.247 1.736.178 2.07.401.316.703.248 2.073-.47l1.272-.665 1.272.666c1.433.75 1.696.8 2.132.41.357-.319.364-.493.084-2.158l-.212-1.266 1.07-1.083c1.027-1.04 1.07-1.1 1.07-1.472 0-.622-.317-.871-1.287-1.01l-1.452-.21-.674-.098-.655-1.327c-.49-.994-.717-1.359-.905-1.456-.336-.174-.617-.162-.947.04m13.145.017c-.154.121-.512.711-.896 1.477-.351.701-.675 1.275-.72 1.275-.163 0-2.63.375-2.792.425-.242.073-.52.58-.523.952-.002.291.1.42 1.093 1.378l1.095 1.057-.22 1.238c-.295 1.65-.29 1.873.046 2.21.416.415.693.365 2.169-.392l1.289-.661 1.255.66c1.302.685 1.553.751 1.987.527.495-.256.527-.538.247-2.148l-.25-1.436 1.006-.964c1.278-1.225 1.394-1.447 1.055-2.02-.215-.365-.404-.428-1.945-.655l-1.365-.202-.632-1.276c-.348-.701-.701-1.338-.786-1.415-.27-.245-.821-.26-1.113-.03M10.45 8.184c-.258.518-.558 1.01-.666 1.096-.123.096-.61.217-1.278.315l-1.08.16.828.843c.938.957.924.91.689 2.245-.212 1.205-.267 1.164.811.594.533-.282 1.066-.502 1.216-.5.148 0 .691.224 1.209.497 1.067.561 1.013.601.803-.591-.235-1.335-.25-1.288.69-2.245l.826-.844-1.08-.16c-.666-.097-1.154-.218-1.276-.314-.11-.085-.41-.578-.667-1.096s-.488-.94-.512-.94-.255.422-.513.94m13.158.02c-.263.527-.575 1.023-.694 1.101s-.7.21-1.293.295l-1.077.153.823.833c.452.459.847.919.878 1.022.03.104-.027.641-.127 1.194s-.184 1.04-.184 1.081c-.001.043.434-.154.967-.436s1.082-.512 1.22-.512.697.23 1.243.514l.993.514-.053-.262c-.238-1.183-.338-1.925-.288-2.126.033-.131.418-.576.857-.992.438-.414.776-.774.75-.799-.025-.024-.498-.112-1.052-.194s-1.102-.211-1.219-.288-.427-.57-.69-1.099c-.262-.528-.5-.96-.527-.96s-.265.432-.527.96m13.198-.048c-.252.502-.544.993-.65 1.092-.14.13-.49.223-1.293.342l-1.1.162.788.793c.94.944.962 1.02.71 2.412-.098.543-.17.987-.16.987.012 0 .45-.226.976-.503.526-.276 1.076-.504 1.224-.505.151 0 .678.218 1.216.505.56.3.948.46.948.39 0-.064-.062-.467-.137-.896-.247-1.401-.255-1.375.69-2.338l.828-.845-1.073-.153c-.59-.084-1.168-.215-1.285-.29-.117-.078-.414-.566-.67-1.102-.254-.53-.482-.964-.508-.964-.025 0-.252.41-.504.913\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M.635.726h47v47h-47z\"/></clipPath></defs></g>"},"icon-why-us-6":{"body":"<g fill=\"none\"><g fill-rule=\"evenodd\" clip-path=\"url(#a)\" clip-rule=\"evenodd\"><path fill=\"#1E84B5\" d=\"M31.281.85a1.4 1.4 0 0 0-.39.387c-.161.245-.177.447-.177 2.316-.001 2.988-.125 2.864 2.845 2.864 2.967 0 2.845.121 2.845-2.846 0-2.97.124-2.847-2.864-2.842-1.488.002-2.105.035-2.259.12m.809 2.721v1.47h2.937V2.102H32.09zm6.058 2.823c-.626.313-.642.411-.642 4.016s.016 3.703.642 4.016c.288.144.661.16 3.58.16 3.07 0 3.276-.01 3.553-.179.573-.35.578-.386.578-4.015 0-3.134-.009-3.3-.186-3.59-.334-.55-.472-.569-4.01-.568-2.856 0-3.227.017-3.515.16m.827 4.016v2.708h5.507V7.702h-5.507zm-11.475.115c-.634.317-.642.37-.642 4.383s.008 4.066.642 4.383c.29.145.678.16 3.929.161 3.983 0 3.984 0 4.336-.578.17-.278.18-.485.18-3.966 0-3.521-.008-3.684-.186-3.976-.277-.455-.65-.568-1.883-.568-1.056 0-1.069.003-1.334.269-.327.326-.339.558-.047.897.211.245.264.259 1.147.289l.926.031v6.133h-6.242V11.85l.88-.032c.833-.03.892-.046 1.102-.29.291-.338.28-.57-.047-.896-.266-.267-.276-.269-1.354-.268-.85 0-1.156.034-1.407.16m-10.238.241c-.364.161-.795.623-.93.998-.065.178-.112.879-.116 1.733l-.007 1.434-.85.296c-.466.163-1.182.457-1.59.654-.407.197-.8.358-.873.358s-.566-.436-1.095-.97c-.53-.534-1.085-1.035-1.235-1.115-.351-.185-1.122-.185-1.473 0-.326.171-3.826 3.685-3.993 4.009-.161.311-.146 1.1.028 1.429.08.15.58.706 1.115 1.236.533.529.97 1.023.97 1.098s-.162.468-.359.874-.492 1.12-.654 1.586l-.295.85-1.435.006c-1.567.008-1.871.073-2.32.496-.516.488-.537.622-.537 3.459 0 2.451.01 2.611.195 2.992.117.242.343.5.567.649.36.239.417.247 1.91.275 1.045.02 1.566.064 1.624.138.047.06.18.398.295.751s.388 1.03.608 1.505.4.905.4.956c0 .052-.467.573-1.039 1.157-.88.9-1.056 1.13-1.147 1.493-.059.236-.09.484-.07.55.021.068.066.246.099.398.08.368 3.607 3.94 4.132 4.185.818.381 1.323.16 2.614-1.146.53-.536 1.016-.974 1.081-.974.066 0 .376.13.69.29.315.158 1.026.46 1.581.67l1.01.383.046 1.562c.044 1.513.054 1.573.298 1.943.481.726.608.752 3.65.752 2.814 0 2.938-.016 3.428-.447.406-.357.47-.638.518-2.26l.046-1.558.918-.332a17 17 0 0 0 1.582-.667c.364-.185.716-.336.781-.336s.552.438 1.081.974c1.252 1.266 1.657 1.461 2.512 1.21.3-.088.707-.433 1.974-1.675 1.955-1.917 2.275-2.303 2.357-2.855.104-.692-.106-1.062-1.244-2.197-.556-.554-1.01-1.06-1.01-1.126s.15-.417.335-.782.485-1.076.668-1.581l.332-.918 1.558-.046c1.745-.052 1.951-.112 2.403-.704l.257-.337.027-2.78c.026-2.656.018-2.798-.162-3.152a2 2 0 0 0-.571-.623l-.381-.253-2.21-.026c-1.974-.023-2.244-.008-2.525.138-.597.31-.684.534-.726 1.856l-.036 1.182-1.256.032c-1.753.044-1.984.217-2.136 1.601-.47 4.276-3.812 7.449-8.04 7.632-2.146.093-3.889-.421-5.533-1.634-3.286-2.422-4.407-6.878-2.654-10.545.484-1.012 1.021-1.754 1.81-2.498.804-.758 1.287-1.091 2.246-1.55 1.65-.788 3.525-1.012 5.382-.642 1.192.237 1.525.204 1.901-.188l.269-.28.029-1.553.029-1.553-.232-.232c-.295-.295-.69-.303-.958-.018-.183.195-.2.307-.2 1.378v1.166l-.252-.056a10 10 0 0 1-.395-.094 15 15 0 0 0-1.061-.125c-2.89-.275-5.795.786-7.89 2.882a9.947 9.947 0 0 0-.224 13.853c2.5 2.672 6.403 3.778 9.915 2.809.904-.25 2.216-.876 3.067-1.464.783-.542 2.057-1.828 2.544-2.57.817-1.244 1.39-2.703 1.581-4.024l.115-.795 1.326-.046c1.95-.067 2.107-.224 2.107-2.104V26.7l1.858.025 1.86.025.024 2.387c.022 2.162.01 2.397-.132 2.501-.11.08-.585.115-1.572.115-2.036 0-2.227.124-2.822 1.832a17 17 0 0 1-.692 1.67c-.67 1.333-.52 1.832 1.006 3.335.46.453.837.887.837.963 0 .182-3.215 3.4-3.398 3.4-.077 0-.532-.396-1.01-.88-1.48-1.494-1.955-1.635-3.273-.972-.404.203-1.163.518-1.686.7-1.717.598-1.832.78-1.832 2.875 0 1.131-.03 1.49-.127 1.571-.088.074-.825.098-2.5.08l-2.376-.024-.048-1.56c-.064-2.13-.192-2.341-1.753-2.886a21 21 0 0 1-1.73-.713c-.95-.45-1.51-.525-1.994-.269-.142.075-.692.573-1.22 1.107-.53.534-1.038.97-1.13.97-.178 0-3.462-3.24-3.462-3.416 0-.057.471-.585 1.048-1.174 1.44-1.471 1.512-1.773.767-3.252a17 17 0 0 1-.68-1.613c-.33-.932-.494-1.21-.895-1.509-.226-.17-.422-.194-1.857-.235-1.29-.037-1.62-.073-1.69-.184-.094-.15-.123-4.319-.032-4.658.054-.203.084-.207 1.399-.207.739 0 1.508-.046 1.71-.102.597-.164 1.056-.724 1.355-1.653.14-.433.435-1.158.655-1.612.775-1.59.72-1.834-.742-3.34-.571-.588-1.038-1.107-1.038-1.152 0-.11 3.328-3.432 3.438-3.432.047 0 .525.433 1.062.962 1.498 1.476 1.894 1.582 3.286.883a16 16 0 0 1 1.507-.638c1.036-.366 1.282-.497 1.57-.84.352-.417.427-.822.427-2.308 0-1.14.023-1.352.146-1.4.08-.03 1.15-.055 2.38-.055 1.91 0 2.256.02 2.38.144.115.115.144.369.144 1.269 0 1.057.012 1.137.212 1.325.282.264.659.254.94-.026.217-.218.224-.268.223-1.492-.003-1.513-.122-1.883-.742-2.293l-.39-.258-2.715-.022c-2.111-.016-2.777.006-2.993.102m21.336 6.693c-.47.316-.53.615-.536 2.662-.006 1.984.048 2.264.5 2.62.244.192.338.2 2.357.2 2.348 0 2.51-.035 2.77-.584.125-.262.15-.652.15-2.276 0-2.898.068-2.832-2.919-2.832-1.941 0-2.02.007-2.322.21m.927 2.636v1.469h2.846v-2.938h-2.846zm-13.547 1.371c-.105.044-.302.211-.436.371l-.245.291v4.32l.304.303c.395.395.683.435 2.882.397 1.615-.028 1.78-.046 2.017-.223.462-.344.485-.475.487-2.724l.001-2.09-.314-.342-.314-.343-2.095-.02c-1.153-.01-2.182.017-2.287.06m.696 2.76v1.468h2.937v-2.938h-2.938zm-7.87.736c-1.204.394-2.315 1.441-2.79 2.63-.182.455-.214.7-.216 1.643l-.002 1.109.39.786c1.396 2.819 5.003 3.391 7.167 1.137 2.173-2.263 1.479-5.787-1.406-7.137-.565-.264-.736-.299-1.602-.325-.783-.024-1.078.006-1.54.157m.658 1.272c-.88.228-1.714.923-2.09 1.74-.285.62-.28 1.81.013 2.448.264.578.846 1.183 1.44 1.498.403.214.566.243 1.331.245 1.02.001 1.53-.193 2.16-.823s.824-1.14.823-2.16c0-.765-.03-.928-.244-1.334-.296-.562-.956-1.188-1.51-1.433-.449-.199-1.481-.296-1.923-.181\"/><path fill=\"#0E384C\" d=\"M31.281.85a1.4 1.4 0 0 0-.39.387c-.161.245-.177.447-.177 2.316-.001 2.988-.125 2.864 2.845 2.864 2.967 0 2.845.121 2.845-2.846 0-2.97.124-2.847-2.864-2.842-1.488.002-2.105.035-2.259.12m.809 2.721v1.47h2.937V2.102H32.09zm6.058 2.823c-.626.313-.642.411-.642 4.016s.016 3.703.642 4.016c.288.144.661.16 3.58.16 3.07 0 3.276-.01 3.553-.179.573-.35.578-.386.578-4.015 0-3.134-.009-3.3-.186-3.59-.334-.55-.472-.569-4.01-.568-2.856 0-3.227.017-3.515.16m.827 4.016v2.708h5.507V7.702h-5.507zm-11.475.115c-.634.317-.642.37-.642 4.383s.008 4.066.642 4.383c.29.145.678.16 3.929.161 3.983 0 3.984 0 4.336-.578.17-.278.18-.485.18-3.966 0-3.521-.008-3.684-.186-3.976-.277-.455-.65-.568-1.883-.568-1.056 0-1.069.003-1.334.269-.327.326-.339.558-.047.897.211.245.264.259 1.147.289l.926.031v6.133h-6.242V11.85l.88-.032c.833-.03.892-.046 1.102-.29.291-.338.28-.57-.047-.896-.266-.267-.276-.269-1.354-.268-.85 0-1.156.034-1.407.16m11.098 6.934c-.47.316-.53.615-.536 2.662-.006 1.984.048 2.264.5 2.62.244.192.338.2 2.357.2 2.348 0 2.51-.035 2.77-.584.125-.262.15-.652.15-2.276 0-2.898.068-2.832-2.919-2.832-1.941 0-2.02.007-2.322.21m.927 2.636v1.469h2.846v-2.938h-2.846zm-13.547 1.371c-.105.044-.302.211-.436.371l-.245.291v4.32l.304.303c.395.395.683.435 2.882.397 1.615-.028 1.78-.046 2.017-.223.462-.344.485-.475.487-2.724l.001-2.09-.314-.342-.314-.343-2.095-.02c-1.153-.01-2.182.017-2.287.06m.696 2.76v1.468h2.937v-2.938h-2.938z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M.236.726h47v47h-47z\"/></clipPath></defs></g>"},"phone":{"body":"<g fill=\"none\"><path fill=\"#fff\" d=\"m37.056 37.118 1.63-1.875A4.46 4.46 0 0 0 40 32.073c0-1.196-.467-2.325-1.395-3.241l-4.077-3.122a4.49 4.49 0 0 0-6.338-.005l-2.553 2.49c-6.134-2.498-11.13-7.5-13.824-13.838l2.48-2.542c1.749-1.748 1.749-4.593.072-6.26L11.1 1.317C9.405-.378 6.412-.338 4.8 1.278L2.843 2.985C1.008 4.81 0 7.288 0 9.96 0 22.875 17.125 40 30.04 40c2.672 0 5.148-1.008 7.017-2.882ZM9.849 2.41l3.265 4.238a2.826 2.826 0 0 1-.006 3.994l-2.87 2.943a.84.84 0 0 0-.177.893c2.882 7.175 8.522 12.814 15.476 15.467a.83.83 0 0 0 .879-.18l2.943-2.87.007-.008c1.065-1.067 2.84-1.135 4.067.071l4.076 3.122c1.098 1.098 1.098 2.885-.038 4.027l-1.632 1.875c-1.513 1.516-3.573 2.351-5.798 2.351-11.933 0-28.373-16.44-28.373-28.373 0-2.225.835-4.285 2.311-5.76l1.959-1.708a2.86 2.86 0 0 1 2.025-.834c.698 0 1.385.254 1.888.754z\" class=\"path-to-change\"/><path fill=\"#1E84B5\" d=\"M38.333 17.5a.834.834 0 0 0 1.667 0C40 7.85 32.15 0 22.5 0a.834.834 0 0 0 0 1.667c8.73 0 15.833 7.103 15.833 15.833\"/><path fill=\"#1E84B5\" d=\"M22.5 6.667c5.973 0 10.833 4.86 10.833 10.833a.834.834 0 0 1-1.666 0c0-5.055-4.112-9.167-9.167-9.167a.834.834 0 0 1 0-1.666\"/></g>","width":40,"height":40},"reshot-icon-tooth-AG79DFQHM8":{"body":"<g fill-rule=\"evenodd\"><defs><style>.fil0{fill:#212121;fill-rule:nonzero}</style></defs><g id=\"Layer_x0020_1\"><path d=\"M1195.22 1442.83c-.03.943-11.46 327.795 110.503 279.356 16.256-10.786 126.051-96.102 189.757-469.248l31.5 5.375-31.544-5.386a31.9 31.9 0 0 1 4.133-11.142c18.174-36.192 261.384-533.817 14.9-783.477l-.064.062a31.9 31.9 0 0 1-6.195-8.864c-8.497-14.866-22.976-28.768-42.265-41.603-84.793-56.42-249.018-85.995-418.275-87.922-170.05-1.939-343.123 24.164-444.475 79.103-29.615 16.052-52.293 34.227-65.733 54.425l-26.625-17.626 26.64 17.728a32 32 0 0 1-5.179 6.016c-252.705 258.624 15.13 780.204 17.196 784.241l.071-.036a32 32 0 0 1 3.255 10.765c63.748 371.723 173.236 456.815 189.467 467.588 121.963 48.44 110.532-278.413 110.503-279.356-5.555-169.445 34.544-280.634 87.705-332.005 25.39-24.534 54.12-36.802 83.51-36.802s58.121 12.268 83.51 36.802c53.162 51.371 93.26 162.561 87.705 332.005zm124.454 308.26 12.376 29.5c-216.19 90.8-200.62-338.529-200.581-339.76 4.899-149.465-26.407-243.615-68.206-284.006-12.968-12.531-26.446-18.8-39.258-18.8s-26.29 6.269-39.259 18.8c-41.798 40.39-73.104 134.54-68.205 284.005.038 1.229 15.489 427.914-198.654 340.511a32 32 0 0 1-5.571-2.548l16.02-27.702-16 27.625c-.427-.246-147.81-81.574-221.987-510.368-26.06-52.535-274.644-574.42-4.588-852.373 19.588-28.387 49.52-52.725 87.185-73.141 110.804-60.063 295.54-88.651 475.226-86.603 180.48 2.056 357.929 35.147 453.025 98.422 27.087 18.024 48.223 38.757 61.934 62.257 268.607 278.184 20.566 798.958-5.47 851.437-67.908 392.551-197.146 493.881-218.84 508.39a32 32 0 0 1-6.756 3.857z\" class=\"fil0\"/><path d=\"M1403.13 578.007c8.422 15.533 27.843 21.298 43.376 12.875s21.298-27.843 12.875-43.376c-11.272-20.796-29.446-39.03-53.09-54.763-76.617-50.98-218.972-77.634-363.526-79.281-143.76-1.639-291.743 21.33-380.755 69.58l15.125 28.126-15.25-28.132-.591.33c-31.252 17.028-56.053 37.568-72.153 61.765-9.733 14.705-5.704 34.518 9 44.251 14.705 9.734 34.518 5.705 44.252-9 9.95-14.954 27.088-28.626 49.638-40.895l.354-.186-.003-.006.003-.001-.028-.052c79.573-43.09 215.835-63.556 349.907-62.03 133.332 1.52 262.46 24.658 328.775 68.782 14.888 9.906 25.909 20.61 32.09 32.013z\" class=\"fil0\"/></g><path fill=\"none\" d=\"M0 0h2048v2048H0z\"/></g>","width":2048,"height":2048},"toothbrush":{"body":"<g fill-rule=\"evenodd\"><defs><style>.fil0{fill-rule:nonzero}</style></defs><g id=\"Layer_x0020_1\"><path fill=\"currentColor\" d=\"M1551.39 561.432c12.495 12.495 32.755 12.495 45.25 0s12.495-32.755 0-45.25L1424.467 344.01c-12.495-12.495-32.755-12.495-45.25 0s-12.495 32.755 0 45.25zm-96.28 96.28c12.495 12.495 32.755 12.495 45.25 0s12.495-32.755 0-45.25L1328.187 440.29c-12.495-12.495-32.755-12.495-45.25 0s-12.495 32.755 0 45.25zm-96.28 96.28c12.495 12.495 32.755 12.495 45.25 0s12.495-32.755 0-45.25L1231.907 536.57c-12.495-12.495-32.755-12.495-45.25 0s-12.495 32.755 0 45.25zm-96.28 96.28c12.495 12.495 32.755 12.495 45.25 0s12.495-32.755 0-45.25L1135.628 632.85c-12.495-12.495-32.755-12.495-45.25 0s-12.495 32.755 0 45.25zm65.27-530.648c17.465-2.554 29.554-18.785 27-36.25s-18.785-29.554-36.25-27c-141.225 20.796-169.257 103.487-195.546 181.036-16.985 50.103-32.998 97.34-94.026 107.912-17.396 2.968-29.093 19.478-26.125 36.875s19.48 29.093 36.876 26.125c98.576-17.076 120.51-81.78 143.776-150.412 20.21-59.617 41.76-123.186 144.295-138.285z\" class=\"fil0\"/><path fill=\"currentColor\" d=\"M1340.31 885.954q.31-.236.614-.482c.184-.149.792-.738 1.845-1.792l287.072-287.07a23.8 23.8 0 0 0 6.99-16.887 23.8 23.8 0 0 0-6.99-16.885l-.001-.001c-4.658-4.658-10.772-6.989-16.885-6.989s-12.226 2.33-16.884 6.989l-.001.001-284.967 284.966.002.002a32 32 0 0 1-4.893 4.015l-183.907 138.671-.885-1.173-.01.016.911 1.208a32 32 0 0 1-3.143 2.092l-.385.298a32 32 0 0 1-3.78 3.801l-696.88 690.722c-4.683 4.647-7.047 10.71-7.081 16.752v.043h.124a33 33 0 0 1-.057 1.77c.409 5.485 2.685 10.845 6.83 15.022 4.646 4.683 10.71 7.047 16.752 7.08h.044V1728q.89.004 1.77.057c5.485-.41 10.843-2.685 15.02-6.83l695.481-689.334 22.5 22.626-22.527-22.728a32 32 0 0 1 4.78-3.905l185.308-139.726 19.25 25.5-19.266-25.55a32 32 0 0 1 3.25-2.156zm40.864 49.018a89 89 0 0 1-4.8 3.628q-.384.31-.782.611l-.03-.04-185.335 139.745-693.693 687.563c-16.299 16.172-37.333 24.614-58.558 25.345q-1.719.181-3.487.176v-.124c-22.427-.088-44.8-8.708-61.792-25.832-16.172-16.299-24.614-37.333-25.346-58.559a33 33 0 0 1-.176-3.488h.124c.089-22.426 8.709-44.798 25.832-61.79l695.541-689.395a32 32 0 0 1 2.939-3.349l.064.065a89 89 0 0 1 6.75-6.05 83 83 0 0 1 4.66-3.49q.346-.277.703-.546l.03.04.004-.004 183.37-138.263 283.627-283.627h.002c17.159-17.16 39.65-25.74 62.134-25.74s44.976 8.58 62.135 25.74h.002c17.159 17.16 25.74 39.651 25.74 62.136 0 22.486-8.581 44.975-25.74 62.137L1388.02 928.93c-1.737 1.737-4.035 3.76-6.846 6.042M411.05 1704.208v.041m23.649 23.875h.041\" class=\"fil0\"/></g><path fill=\"none\" d=\"M0 0h2048v2048H0z\"/></g>","width":2048,"height":2048},"watch":{"body":"<g fill=\"none\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M19.183 1.04a19.5 19.5 0 0 0-12.53 5.698c-2.96 2.98-4.852 6.772-5.498 11.014-.208 1.363-.206 4.014.002 5.437 1.069 7.28 6.061 13.337 12.94 15.7 1.854.637 4.173 1.064 5.772 1.064.513 0 .621-.029.806-.214.278-.277.283-.683.013-.953-.175-.174-.323-.21-1.11-.262-2.104-.141-4.008-.552-5.741-1.239-4.255-1.684-7.655-4.817-9.623-8.868-1.18-2.425-1.736-4.651-1.84-7.357-.222-5.719 2.422-11.396 6.922-14.87C14.84 1.913 22.124 1.158 28.42 4.208c1.821.883 3.486 2.104 5.01 3.674 1.42 1.465 2.323 2.739 3.22 4.543 1.267 2.55 1.849 5.075 1.85 8.026.002 2.924-.545 5.311-1.814 7.922-.498 1.025-1.739 3.048-1.869 3.048-.025 0 .004-.613.064-1.362.088-1.088.089-1.407.002-1.588-.282-.589-1.103-.502-1.274.135-.094.353-.36 3.583-.358 4.365.002.784.391 1.237 1.064 1.235.157 0 1.266-.254 2.463-.563 1.856-.479 2.206-.595 2.373-.787.108-.124.196-.317.196-.427 0-.26-.29-.626-.547-.691-.114-.028-.77.1-1.5.292-.712.189-1.31.33-1.326.313s.187-.334.454-.705c1.716-2.392 2.91-5.478 3.368-8.706.165-1.16.141-3.958-.044-5.215-.419-2.83-1.516-5.688-3.082-8.022-3.914-5.837-10.51-9.1-17.487-8.655m-.59 5.873c-3.821.622-7.097 2.708-9.208 5.863-3.05 4.557-3.05 10.355.003 14.92 1.951 2.918 5.026 4.978 8.575 5.745 1.28.277 3.881.275 5.168-.002 3.863-.834 7.054-3.117 9.029-6.459 1.843-3.119 2.32-6.918 1.311-10.453-1.353-4.746-5.35-8.437-10.275-9.485-1.15-.245-3.49-.31-4.603-.13Zm-.149 1.483c-1.13.205-3.211.93-3.213 1.12 0 .042.175.383.39.757s.392.78.392.905c0 .325-.362.653-.72.653-.354 0-.525-.17-.985-.98-.184-.323-.372-.587-.419-.587-.169 0-1.355.978-1.986 1.639-.922.965-1.429 1.668-1.276 1.77.065.043.363.218.662.388.888.505 1.11.957.68 1.387-.323.323-.676.279-1.44-.178-.36-.214-.68-.39-.711-.39-.089-.002-.564 1.19-.799 2.006-.188.654-.301 1.24-.438 2.273l-.042.318.915.03c.887.028.922.037 1.133.283.17.198.207.312.165.522-.104.517-.3.614-1.308.647l-.905.03.042.318c.137 1.032.25 1.619.438 2.273.235.815.71 2.008.799 2.006.031 0 .351-.176.71-.39.765-.457 1.118-.5 1.44-.178.43.43.209.882-.679 1.387a23 23 0 0 0-.666.39c-.252.168 1.503 2.146 2.7 3.042.267.2.523.365.568.365.046 0 .233-.265.417-.588.46-.81.63-.98.984-.98.362 0 .721.328.721.658 0 .127-.191.556-.425.954l-.426.723.578.262c1.086.493 2.987.972 3.865.973h.24v-.874c0-.813.014-.89.213-1.088a.656.656 0 0 1 .965 0c.2.198.214.274.214 1.1v.888l.544-.051c1.13-.106 2.582-.495 3.74-1.004l.408-.18-.43-.766c-.237-.422-.43-.857-.43-.967-.001-.306.372-.627.728-.627.355 0 .565.216 1.048 1.08l.319.57.454-.324c.663-.473 1.908-1.695 2.458-2.412.262-.343.477-.645.477-.672 0-.026-.312-.229-.694-.45-.382-.223-.758-.5-.835-.618-.177-.27-.098-.692.162-.875.312-.218.66-.151 1.376.262.374.215.697.391.718.391.074 0 .653-1.467.833-2.108.142-.506.44-2.142.442-2.433 0-.031-.41-.07-.911-.087-.805-.026-.935-.052-1.106-.224a.7.7 0 0 1-.194-.502.7.7 0 0 1 .194-.503c.171-.17.3-.197 1.11-.223l.916-.03-.054-.406c-.133-1.007-.332-1.919-.578-2.655-.22-.66-.531-1.397-.642-1.523-.014-.015-.336.151-.716.37-.407.235-.8.399-.956.399-.57 0-.893-.626-.549-1.063.101-.129.476-.395.834-.593s.65-.38.65-.407-.194-.31-.43-.63c-.496-.669-1.84-1.99-2.505-2.464l-.454-.324-.32.57c-.482.864-.692 1.08-1.047 1.08-.356 0-.729-.321-.729-.627 0-.11.193-.543.428-.963.485-.863.524-.759-.428-1.148-.797-.327-2.378-.724-3.165-.795l-.666-.06v.886c0 .825-.015.901-.213 1.1a.656.656 0 0 1-.966 0c-.199-.198-.214-.275-.214-1.088V8.26l-.37.008a9 9 0 0 0-1.03.127Z\" clip-rule=\"evenodd\"/><path fill=\"#1E84B5\" fill-rule=\"evenodd\" d=\"M19.183 1.04a19.5 19.5 0 0 0-12.53 5.698c-2.96 2.98-4.852 6.772-5.498 11.014-.208 1.363-.206 4.014.002 5.437 1.069 7.28 6.061 13.337 12.94 15.7 1.854.637 4.173 1.064 5.772 1.064.513 0 .621-.029.806-.214.278-.277.283-.683.013-.953-.175-.174-.323-.21-1.11-.262-2.104-.141-4.008-.552-5.741-1.239-4.255-1.684-7.655-4.817-9.623-8.868-1.18-2.425-1.736-4.651-1.84-7.357-.222-5.719 2.422-11.396 6.922-14.87C14.84 1.913 22.124 1.158 28.42 4.208c1.821.883 3.486 2.104 5.01 3.674 1.42 1.465 2.323 2.739 3.22 4.543 1.267 2.55 1.849 5.075 1.85 8.026.002 2.924-.545 5.311-1.814 7.922-.498 1.025-1.739 3.048-1.869 3.048-.025 0 .004-.613.064-1.362.088-1.088.089-1.407.002-1.588-.282-.589-1.103-.502-1.274.135-.094.353-.36 3.583-.358 4.365.002.784.391 1.237 1.064 1.235.157 0 1.266-.254 2.463-.563 1.856-.479 2.206-.595 2.373-.787.108-.124.196-.317.196-.427 0-.26-.29-.626-.547-.691-.114-.028-.77.1-1.5.292-.712.189-1.31.33-1.326.313s.187-.334.454-.705c1.716-2.392 2.91-5.478 3.368-8.706.165-1.16.141-3.958-.044-5.215-.419-2.83-1.516-5.688-3.082-8.022-3.914-5.837-10.51-9.1-17.487-8.655\" clip-rule=\"evenodd\"/><path fill=\"#fff\" d=\"m19.453 12.571.192-.192a.63.63 0 0 1 .433-.191.63.63 0 0 1 .433.191l.192.192v3.484c0 3.073.015 3.513.128 3.734.07.138.686 1.202 1.367 2.366.869 1.483 1.24 2.187 1.24 2.354a.62.62 0 0 1-.518.616c-.198.038-.288.005-.479-.176-.247-.233-2.711-4.399-2.882-4.87-.074-.206-.1-1.175-.102-3.891z\"/></g>","width":40,"height":40}},"width":48,"height":48}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$2 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "/mnt/data500/rr/DEV/dentistLanding/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Banner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(container$1({ theme: "darkBlueBanner", background: true, size: "full" }), "class")}> <div${addAttribute(bannerWrapper, "class")}> <div${addAttribute(banner__element, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "class": banner__element_icon, "name": "phone" })} <h6>Besoin d'aide</h6> <p>Applez : (+33) 6 70 75 50 94</p> </div> <hr${addAttribute(banner_hr, "class")}> <div${addAttribute(banner__element, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "class": banner__element_icon, "name": "watch" })} <h6>Heures</h6> <p>Lundi au Vendredi 09:00 18:30</p> </div> <div${addAttribute(banner__element, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "class": banner__element_icon, "name": "phone" })} <h6>Whatsapp</h6> <p>Ecrivez nous : (+33) 6 70 75 50 94</p> </div> </div> </section>`;
}, "/mnt/data500/rr/DEV/dentistLanding/src/components/HOME/1-HERO/banner.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(container$1({ theme: "darkBlueBanner", background: true }), "class")}> <div${addAttribute(wrapper$1, "class")}> <h3${addAttribute(textRecipe({
    font: "preTitle",
    textAlign: "center"
  }), "class")}>
Bienvenue au Cabinet Martin & Pero
</h3> <h1${addAttribute(textSprinkles({
    color: "primary",
    fontSize: ["xl", "3xl", "4xl"],
    fontFamily: "exo",
    textAlign: "center",
    fontWeight: ["normal", "bold"],
    lineHeight: "snug"
  }), "class")}>
Dentiste à Courbevoie depuis 18 ans
</h1> <p${addAttribute(textRecipe({
    font: "text",
    textAlign: "center",
    lineHeight: "loose"
  }), "class")}>
La meilleure clinique de Courbevoie pour vous vous rendre le sourire que
      vous avez toujours rêvé.
</p> <span class="grid place-items-center w-2xl text-white"> ${renderComponent($$result, "Buttonn", $$Button, { "title": "Doctolib", "link": "http://www.doctolib.fr" })} </span> <hr${addAttribute(hr, "class")}> <div${addAttribute(flex({
    direction: "row",
    gap: "md",
    side: 2,
    wrap: true
  }), "class")}> <span>Avis Google Maps</span> <span>4.3</span> <span>basé sur 492 avis</span> </div> </div> </section> ${renderComponent($$result, "Banner", $$Banner, {})}`;
}, "/mnt/data500/rr/DEV/dentistLanding/src/components/HOME/1-HERO/Hero.astro", void 0);

const wrapperIndex = style([
  containerGrid({
    cols: 2,
    size: "medium"
  }),
  {
    // border: `${color.theme.primary} 5px solid`,
    gap: fluid(10, 50),
    "@media": {
      "(width< 846px)": {
        gridTemplateColumns: "1fr"
      }
    }
  }
]);
const content__wrapper = style({
  //inlineSize: '100%',
  minInlineSize: 300,
  marginTop: 10,
  zIndex: 2,
  alignSelf: "center",
  display: "grid",
  gap: fluid(10, 50)
});
createVar({
  syntax: "<length>",
  inherits: true,
  initialValue: "24px"
});
const text = styleVariants({
  ul: [
    {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(9.40rem,1fr))",
      gap: space.xs
    }
  ],
  li: [
    textRecipe({
      font: "highLight"
    }),
    {
      display: "flex",
      alignItems: "center",
      listStyle: "none"
    }
  ]
});
const numberOfCc = createVar({
  initialValue: "6",
  inherits: true,
  syntax: "<integer>"
});
const newImageGrid_Wrapper = style({
  gridTemplateRows: `repeat(${numberOfCc},1fr)`,
  gap: "0px 0px",
  gridAutoFlow: "row",
  justifyItems: "stretch",
  width: "100%",
  display: "grid",
  aspectRatio: "1",
  gridTemplateColumns: `repeat(${numberOfCc},1fr)`,
  marginTop: fluid(10, 50),
  "@media": {
    [media.tablet]: {
      vars: {
        [numberOfCc]: "7"
      }
    },
    [media.md]: {
      vars: {
        [numberOfCc]: "9"
      }
    }
  }
});
const carreImage = createVar({
  syntax: "<string>",
  initialValue: "",
  inherits: false
});
const rectangleImage = createVar({
  syntax: "<string>",
  initialValue: "",
  inherits: false
});
const baseImageStyle = style({
  borderRadius: "20px",
  border: "10px solid white",
  backgroundPosition: "center"
});
const newImageGrid = styleVariants({
  square: [
    baseImageStyle,
    {
      gridArea: "1 / 1 / 7 / 7",
      backgroundImage: carreImage
    }
  ],
  vertical: [
    baseImageStyle,
    {
      gridArea: "5 / 3 / -1 / -1",
      backgroundImage: rectangleImage,
      backgroundPosition: "-10px -70px",
      "@media": {
        [media.md]: {
          backgroundPosition: "0 0",
          gridArea: "6 / 4 / -1 / -1"
        }
      }
    }
  ]
});

const carre = new Proxy({"src":"/_astro/about-us-img-1.DCaaqjob.jpg","width":407,"height":389,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/mnt/data500/rr/DEV/dentistLanding/src/assets/about-us-img-1.jpg";
							}
							
							return target[name];
						}
					});

const rectangle = new Proxy({"src":"/_astro/about-us-img-2.1bWz55eI.jpg","width":384,"height":270,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/mnt/data500/rr/DEV/dentistLanding/src/assets/about-us-img-2.jpg";
							}
							
							return target[name];
						}
					});

const $$ImageSide = createComponent(async ($$result, $$props, $$slots) => {
  const carreBackground = await getImage({
    src: carre,
    format: "avif"
  });
  const rectangleBackground = await getImage({
    src: rectangle,
    format: "avif"
  });
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(newImageGrid_Wrapper, "class")}> <div${addAttribute(newImageGrid.square, "class")}${addAttribute(assignInlineVars({
    [carreImage]: `url(${carreBackground.src})`
  }), "style")}></div> <div${addAttribute(assignInlineVars({
    [rectangleImage]: `url(${rectangleBackground.src})`
  }), "style")}${addAttribute(newImageGrid.vertical, "class")}></div> </section>`;
}, "/mnt/data500/rr/DEV/dentistLanding/src/components/HOME/2-aboutUs/ImageSide.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const MonIconeSVG = createSvgComponent({"meta":{"src":"/_astro/check.C3z8lX5R.svg","width":16,"height":16,"format":"svg"},"attributes":{"width":"16","height":"16","fill":"none","viewBox":"0 0 24 24"},"children":"\n    <circle cx=\"12\" cy=\"12\" r=\"10\" stroke=\"#1C274C\" stroke-width=\"1.5\" />\n    <path stroke=\"#1C274C\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"m8.5 12.5 2 2 5-5\" />\n"});

const $$Content = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(content__wrapper, "class")}> ${renderComponent($$result, "Title", $$TopContent, { "subtitle": "\xC0 propos de nous", "title": " Pour un sourire \xE9clatant et une hygi\xE8ne bucco-dentaire optimale.", "description": "Notre cabinet dentaire s'engage \xE0 offrir des soins attentifs, adapt\xE9s \xE0 vos besoins, et \xE0 garantir un service de qualit\xE9 en dentisterie g\xE9n\xE9rale, esth\xE9tique et sp\xE9cialis\xE9e. Nous mettons tout en \u0153uvre pour am\xE9liorer votre quotidien et pr\xE9server votre bien-\xEAtre.", "PreTitle": "Votre sant\xE9, notre priorit\xE9", "gap": "largeGap", "textAlign": "left" })} <ul${addAttribute(text.ul, "class")}> ${["St\xE9risation", "Expertise", "qualit\xE9", "prix"].map((el) => renderTemplate`<li class="flex gap-2 items-center capitalize"> ${renderComponent($$result, "MonIconeSVG", MonIconeSVG, { "width": 16, "height": 16 })} <p${addAttribute(text.li, "class")}>${el}</p> </li>`)} </ul> </section>`;
}, "/mnt/data500/rr/DEV/dentistLanding/src/components/HOME/2-aboutUs/content.astro", void 0);

const $$Index$4 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(container$1({ theme: "blueLightBg", hover: false }), "class")}> <section${addAttribute(wrapperIndex, "class")}> ${renderComponent($$result, "ImageSide", $$ImageSide, {})} ${renderComponent($$result, "Content", $$Content, {})} </section> </section>`;
}, "/mnt/data500/rr/DEV/dentistLanding/src/components/HOME/2-aboutUs/index.astro", void 0);

const cardsWrapper = style([
  containerGrid({
    cols: 4,
    size: "medium",
    background: false,
    gap: true
  }),
  {
    marginBlock: space.lg
  }
]);
const CardStyle = styleVariants({
  wrapper: [
    container$1({
      theme: "whiteBg",
      hover: true,
      background: true
    }),
    flex({
      direction: "column",
      side: 1,
      gap: "xxs"
    }),
    {
      padding: space.sm,
      //outline: color.variable.darkDark,
      cursor: "pointer",
      borderRadius: 30,
      zIndex: 1,
      overflow: "hidden",
      ":before": {
        position: "absolute",
        content: "",
        backgroundColor: color$1.variable.accent,
        inlineSize: "100%",
        blockSize: "100%",
        maskImage: "linear-gradient(to bottom, transparent 20%, black 100%)",
        left: 0,
        bottom: "-100%",
        transition: "bottom 0.4s ease-out",
        zIndex: -1
      },
      selectors: {
        "&:hover::before": {
          bottom: "0"
        }
      }
    }
  ],
  icon: {
    aspectRatio: 1,
    inlineSize: 55,
    blockSize: 55
  }
});
globalStyle(`${CardStyle.wrapper}:hover > ${CardStyle.icon}`, {
  rotate: "40deg"
});
globalStyle(`${CardStyle.wrapper}:hover > ${CardStyle.icon} path`, {
  fill: color$1.theme.textHover
});

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { icon, title, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(CardStyle.wrapper, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": CardStyle.icon })} <h3${addAttribute(textRecipe({ font: "highLight", hoverDiv: true, display: "block" }), "class")}> ${title} </h3> <p${addAttribute(textRecipe({ font: "text", hoverDiv: true, textAlign: "left" }), "class")}> ${text} </p> </div>`;
}, "/mnt/data500/rr/DEV/dentistLanding/src/components/HOME/3-Specialisation/Card.astro", void 0);

const $$Index$3 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(container$1({
    theme: "blueLightBg",
    background: false,
    marginBlock: "md"
  }), "class")}> <div${addAttribute(cardsWrapper, "class")}> ${renderComponent($$result, "Card", $$Card, { "title": "Soins dentaires", "text": "Pr\xE9vention des caries et du tartre pour une bonne sant\xE9 bucco-dentaire.", "icon": "icon-services-1" })} ${renderComponent($$result, "Card", $$Card, { "title": "Urgences dentaires", "text": "Traitement rapide pour douleurs, abc\xE8s ou accidents.", "icon": "icon-services-2" })} ${renderComponent($$result, "Card", $$Card, { "title": "Proth\xE8ses dentaires", "text": "Solutions pour restaurer votre sourire et confort.", "icon": "icon-services-3" })} ${renderComponent($$result, "Card", $$Card, { "title": "Implants dentaires", "text": "Remplacement durable pour dents manquantes.", "icon": "icon-services-4" })} </div> </section>`;
}, "/mnt/data500/rr/DEV/dentistLanding/src/components/HOME/3-Specialisation/index.astro", void 0);

const sectionContainerIndex = style([
  {
    marginBlock: space.md,
    textAlign: "center"
  },
  container$1({
    size: "large",
    theme: "blueLightBg"
  })
]);
const sectionContainer__Text = styleVariants({
  wrapper: {
    marginBlock: fluid(20, 45)
  },
  h6: [
    textRecipe({
      font: "preTitle",
      textAlign: "center"
    })
  ],
  h2: [
    textRecipe({
      font: "title",
      textAlign: "center"
    })
  ]
});
const logoSize = createVar({
  inherits: false,
  initialValue: "70px",
  syntax: "<length>"
});
const gridContainer = style([
  {
    // gridTemplateRows: "repeat(auto-fit, minmax(8.1rem, 1fr ))",
    gridAutoFlow: "column",
    justifyContent: "center",
    gap: fluid(10, 20),
    "@media": {
      "screen and (440px < width < 606px)": {
        columnGap: 11.5
      },
      [media.tablet]: {
        gridTemplateRows: "10rem, repeat(3,6rem)"
      },
      [media.md]: {
        gridTemplateRows: "repeat(3, 9rem)"
      }
    }
  },
  containerGrid({
    fullSize: "large",
    theme: "blueLightBg"
  })
]);
const cardContainer = createContainer();
const inside = style({
  //maxInlineSize: "45rem",
  display: "inline-grid",
  gridTemplateAreas: '"h4 logo" "txt logo"',
  gridTemplateColumns: `${logoSize} 1fr`,
  containerName: cardContainer,
  containerType: "inline-size",
  "@container": {
    [`${cardContainer} (width <= 250px)`]: {
      gridTemplateAreas: '"h4 h4" "txt txt"',
      gridTemplateColumns: "1fr 1fr"
    }
  },
  selectors: {
    "&:nth-of-type(even)": {
      "@media": {
        [media.tablet]: {
          gridTemplateAreas: '"logo h4" "logo txt"',
          gridTemplateColumns: `${logoSize} 1fr`
        }
      }
    }
  },
  "@media": {
    [media.mobile]: {
      gridTemplateAreas: '"logo h4" "logo txt"'
    },
    [media.tablet]: {
      gridTemplateRows: "min-content min-content",
      gridTemplateColumns: `1fr ${logoSize}`
    },
    [media.md]: {
      gridTemplateColumns: `1fr ${logoSize}`
    }
  }
});
const element = style([
  {
    gridColumn: "2 / span 3",
    "@media": {
      [media.tablet]: {
        gridColumn: "2 / span 3"
      },
      [media.md]: {
        gridColumn: "2 / span 4"
      }
    },
    selectors: {
      "&:nth-of-type(even)": {
        "@media": {
          [media.tablet]: {
            gridColumn: "-5 / -2"
          },
          [media.md]: {
            gridColumn: "-6 / -2"
          }
        }
      }
    }
  },
  inside
]);
const textAlignement = style({
  textAlign: "left",
  textTransform: "capitalize",
  selectors: {
    [`${element}:nth-of-type(odd) &`]: {
      "@media": {
        [media.tablet]: {
          textAlign: "right"
        }
      }
    }
  }
});
const title = style([
  {
    gridArea: "h4",
    textDecoration: "underline",
    paddingBlock: 0,
    "@container": {
      [`${cardContainer} (width <= 250px)`]: {
        fontWeight: "600",
        gridColumn: "span 2"
      }
    }
  },
  textAlignement,
  textRecipe({
    font: "highLight"
  })
]);
const description = style([
  textAlignement,
  textRecipe({
    font: "text"
  }),
  {
    gridArea: "txt",
    "@container": {
      [`${cardContainer} (width <= 250px)`]: {
        fontSize: fontSize.base,
        gridColumn: "span 2",
        lineHeight: "1.1"
      }
    }
  }
]);
const logoIcon = style({
  fontSize: fontSize["4xl"],
  marginInline: 6,
  gridArea: "logo",
  placeSelf: "center",
  transition: "transform 1s 1s ease",
  color: color$1.theme.accent,
  "@container": {
    [`${cardContainer} (width <= 250px)`]: {
      display: "none"
    }
  },
  selectors: {
    [`${element}:hover &`]: {
      transform: "rotate(10deg)"
    }
  }
});
const image = style({
  minBlockSize: 150,
  display: "inline-grid",
  gridArea: "1 / 1/ span 1 / -1",
  justifySelf: "center",
  //backgroundImage: "url(public/why-choose-us-img.png)",
  // backgroundRepeat: "no-repeat",
  // backgroundSize: "contain",
  // backgroundPositionX: "center",
  "@media": {
    [media.tablet]: {
      minBlockSize: "auto",
      gridArea: "1 / 2 /span 1 / span 6"
    },
    [media.md]: {
      alignSelf: "center",
      gridArea: "1/ 6 / -1 / -6",
      backgroundPositionY: "center"
    }
  }
});

const ImageMiddle = new Proxy({"src":"/_astro/why-choose-us-img.DKvDLmEC.png","width":439,"height":429,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/mnt/data500/rr/DEV/dentistLanding/src/assets/why-choose-us-img.png";
							}
							
							return target[name];
						}
					});

const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Caries dentaires",
      description: "Les caries sont des l\xE9sions de la structure dentaire caus\xE9es par les bact\xE9ries, diagnostiqu\xE9es par examen visuel et radiographies."
    },
    {
      title: "Maladies des gencives (gingivite et parodontite)",
      description: "Inflammation des gencives diagnostiqu\xE9e par examen visuel et sondes parodontales."
    },
    {
      title: "Maladies de la pulpe dentaire",
      description: "Inflammation de la pulpe dentaire diagnostiqu\xE9e par tests de sensibilit\xE9."
    },
    {
      title: "Malocclusion",
      description: "Probl\xE8mes d\u2019alignement des dents diagnostiqu\xE9s par examen clinique et radiographies."
    },
    {
      title: "Maladies des tissus mous",
      description: "L\xE9sions des tissus mous diagnostiqu\xE9es par examen visuel et biopsies si n\xE9cessaire."
    },
    {
      title: "Bruxisme",
      description: "Grincement des dents diagnostiqu\xE9 par examen des signes d\u2019usure et questions sur les habitudes de sommeil."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(sectionContainerIndex, "class")}> <div${addAttribute(sectionContainer__Text.wrapper, "class")}> <h6${addAttribute(sectionContainer__Text.h6, "class")}>Nos métiers</h6> <h2${addAttribute(sectionContainer__Text.h2, "class")}> <span>Diagnostics des</span> maladies dentaires
</h2> <p>Nous avons une vaste palette d'expertistes pour votre santé</p> </div> <section${addAttribute(gridContainer, "class")}> <img${addAttribute(image, "class")}${addAttribute(ImageMiddle.src, "src")} alt="Image illustrative"> ${services.map((e) => renderTemplate`<dl${addAttribute(element, "class")}> <dt${addAttribute(title, "class")}>${e.title}</dt> <dd${addAttribute(description, "class")}>${e.description}</dd> <span${addAttribute(logoIcon, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "toothbrush" })} </span> </dl>`)} </section> </section>`;
}, "/mnt/data500/rr/DEV/dentistLanding/src/components/HOME/Diagnosis/index.astro", void 0);

const overlaping = createVar({
  syntax: "<length>",
  inherits: false,
  initialValue: "250px"
});
const sectionWrapper = style([
  container$1({
    hover: false,
    theme: "accent"
  }),
  {
    blockSize: 600,
    aspectRatio: "21/9s",
    backgroundImage: `linear-gradient(to bottom, ${color$1.variable.whiteBlue} ${overlaping}, ${color$1.variable.darkLight} ${overlaping})`,
    "@media": {
      [media.mobile]: {
        blockSize: "349px",
        vars: {
          [overlaping]: "0px"
        }
      },
      [media.tablet]: {
        blockSize: "449px",
        vars: {
          [overlaping]: "120px"
        }
      },
      [media.md]: {
        blockSize: "609px",
        vars: {
          [overlaping]: "250px"
        }
      }
    }
  }
]);
const menBG = createVar();
const wrapper = style([
  container$1({
    size: "medium",
    background: false
  }),
  {
    clipPath: "inset(0 round 50px)",
    paddingBlock: fluid(5, 40),
    blockSize: calc.multiply(overlaping, 1.5),
    backgroundImage: menBG,
    display: "grid",
    placeItems: "center !important",
    transition: "border-image 4s ease-in-out 1s",
    backgroundAttachment: "fixed",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    borderImage: "linear-gradient(light-dark(oklch(58.09% 0.1151 235.69/70%),oklch(32.25% 0.0573 233.51 / 80%))) fill 1",
    zIndex: 2,
    "@media": {
      [media.md]: {
        blockSize: calc.multiply(overlaping, 2)
      }
    }
  }
]);

const men = new Proxy({"src":"/_astro/men.Dwj098C5.jpg","width":1000,"height":667,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/mnt/data500/rr/DEV/dentistLanding/src/assets/men.jpg";
							}
							
							return target[name];
						}
					});

const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  await getImage({
    src: men,
    format: "avif"
  });
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(sectionWrapper, "class")}> <div${addAttribute(wrapper, "class")}${addAttribute(assignInlineVars({
    [menBG]: `url(https://www.ober-surfaces.com/cache/images/project/a0a51c55c66ce4f436758b2a4b08c041-jcpcdrparisdentalstudio005_copyrightdavidfoessel-816.jpg)`
  }), "style")}> <p${addAttribute(textRecipe({ font: "preTitle", textAlign: "center" }), "class")}>
Visiter La clinique
</p> <h5${addAttribute(textSprinkles({
    fontSize: "lg",
    paddingInline: "lg",
    fontWeight: "bold",
    color: "primary",
    letterSpacing: "wide",
    textAlign: "center",
    fontFamily: "dancingScript"
  }), "class")}>
Une clinique moderne avec les derniers équipements pour des soins de
      qualité et moins invasifs.
</h5> </div> </section>`;
}, "/mnt/data500/rr/DEV/dentistLanding/src/components/HOME/4-imageFilter/image.astro", void 0);

const styles$1 = ".testimonial-section{--primary-color: oklch(58.09% .1151 235.69);--text-color: #e0e0e0;--background-color: oklch(25.88% .037 240.95);--grey-color: #b0b0b0;--gold-color: #ffd700;display:flex;max-width:1200px;width:100%;align-items:center;gap:10px;font-family:Poppins,sans-serif;padding-inline:clamp(5px,5px + 2vw,50px);color:var(--text-color)}.testimonial-left{flex:1;position:relative}.image-container{position:relative;padding-bottom:40px;max-width:400px}.image-container img{height:auto;max-width:100%;border-radius:20px;object-fit:cover;display:block}.rating-overlay{position:absolute;bottom:10px;right:10px;background-color:var(--primary-color);color:#fff;padding:20px;border-radius:15px;max-width:90%;width:auto;box-sizing:border-box;z-index:1;box-shadow:0 4px 10px #0003}.rating-score{font-size:24px;font-weight:700;margin-bottom:10px}.rating-details{font-size:12px}@media (min-width: 48rem){.rating-details{width:100%;justify-content:start}}.rating-description{margin:0 0 10px;opacity:.9}.rating-stars{display:flex;align-items:center;gap:5px;flex-wrap:wrap;justify-content:center}.rating-stars span:not(.rating-reason){color:var(--gold-color);font-size:1.3rem}.rating-reason{margin-left:10px;font-size:12px;font-weight:300;color:#fff}.testimonial-right{flex:1.2;padding-left:30px;min-width:0}.testimonial-pre-title{font-size:.8rem;color:var(--primary-color);font-weight:600;margin-bottom:5px;letter-spacing:1px}.testimonial-title{font-size:2.8rem;font-weight:700;color:#fff;margin-top:0;margin-bottom:15px;line-height:1.2;margin-inline:auto}.testimonial-title .highlight{color:var(--primary-color)}.testimonial-subtitle{font-size:1rem;color:var(--grey-color);margin-bottom:40px;line-height:1.6}.carousel-container{position:relative;min-height:220px;overflow:hidden}.carousel-slide{display:none;opacity:0;transition:opacity .5s ease-in-out;position:absolute;top:0;left:0;width:100%}.carousel-slide.active{display:block;opacity:1;position:relative}.quote-icon{display:block;font-size:5rem;color:var(--primary-color);line-height:.5;margin-bottom:20px;font-family:serif;&:before{content:url(/_astro/icon-testimonial-quote.hZMiCATV.svg)}}.quote-text{font-size:16px;color:var(--text-color);line-height:1.7;margin:0 0 30px;font-style:italic;quotes:none;border-left:3px solid var(--primary-color);padding-left:15px}.author-info{display:flex;align-items:center;gap:15px}.author-image{width:50px;height:50px;border-radius:50%;object-fit:cover}.author-details p{margin:0;line-height:1.3}.author-name{font-weight:600;color:#fff;font-size:1.1rem}.author-title{font-size:.9rem;color:var(--grey-color)}.carousel-nav{margin-top:30px;display:flex;justify-content:flex-start;gap:10px}.nav-button{background-color:var(--primary-color);color:#fff;border:none;width:60px;aspect-ratio:1;border-radius:50%;font-size:1.5rem;cursor:pointer;display:grid;place-content:center;transition:background-color .3s ease;line-height:1;padding:0}.nav-button:hover{background-color:#1f8ac0}.nav-button:disabled{background-color:#555;color:#999;cursor:not-allowed;opacity:.6}@media (max-width: 992px){.testimonial-section{flex-direction:column;gap:50px;align-items:center;text-align:center}.testimonial-left,.testimonial-right{flex:none;width:100%;max-width:600px;padding-left:0}.testimonial-left{display:flex;justify-content:center;padding-bottom:0}.image-container{max-width:400px;width:90%;margin:0 auto;padding-bottom:60px}.rating-overlay{left:50%;transform:translate(-50%);bottom:10px;width:90%;max-width:350px;right:auto;padding:15px}.testimonial-title{font-size:2.2rem}.author-info,.carousel-nav{justify-content:center}.quote-text{text-align:left;margin-left:auto;margin-right:auto;max-width:90%}.quote-icon{text-align:left;margin-left:5%}}@media (max-width: 576px){.testimonial-section{gap:30px}.testimonial-title{font-size:1.8rem}.rating-score{font-size:20px}.quote-text{font-size:15px}.rating-overlay{padding:10px;max-width:90%;bottom:5px}.image-container{padding-bottom:50px}.nav-button{width:45px;height:45px;font-size:1.2rem}.carousel-container{min-height:250px}}";

const testimonialData = [
  {
    id: 1,
    quote: "Un service exceptionnel et des soins de grande qualité. L'équipe est professionnelle et toujours prête à répondre à mes questions. Je recommande vivement ce cabinet.",
    authorName: "Thomas Linda",
    authorTitle: "Designer",
    authorImage: "https://i.pravatar.cc/50?img=1"
  },
  {
    id: 2,
    quote: "Une expérience remarquable. Le personnel est accueillant et l’environnement est très agréable.",
    authorName: "Jane Doe",
    authorTitle: "Responsable Marketing",
    authorImage: "https://i.pravatar.cc/50?img=2"
  },
  {
    id: 3,
    quote: "Professionnalisme et attention au patient. Je me suis senti à l’aise tout au long de ma visite. Je recommande sans hésiter !",
    authorName: "Peter Jones",
    authorTitle: "Développeur",
    authorImage: "https://i.pravatar.cc/50?img=3"
  }
];
const s_cm1FhkxOk0o = () => {
  const [currentIndex] = useLexicalScope();
  if (currentIndex.value > 0) currentIndex.value--;
};
const s_WiQaLMfTEzE = () => {
  const [currentIndex] = useLexicalScope();
  if (currentIndex.value < testimonialData.length - 1) currentIndex.value++;
};
const s_M0qc9EHj0yI = (event) => {
  const [currentIndex] = useLexicalScope();
  switch (event.key) {
    case "ArrowLeft":
      if (currentIndex.value > 0) currentIndex.value--;
      break;
    case "ArrowRight":
      if (currentIndex.value < testimonialData.length - 1) currentIndex.value++;
      break;
  }
};
const s_nz7s0N6HIro = () => {
  useStylesScopedQrl(/* @__PURE__ */ inlinedQrl(styles$1, "s_zg0IjkWBS08"));
  const currentIndex = useSignal(0);
  const note = useSignal(5);
  if (note.value > 5) throw new Error("La note maximale est de 5 étoiles.");
  const goToPrevious = /* @__PURE__ */ inlinedQrl(s_cm1FhkxOk0o, "s_cm1FhkxOk0o", [
    currentIndex
  ]);
  const goToNext = /* @__PURE__ */ inlinedQrl(s_WiQaLMfTEzE, "s_WiQaLMfTEzE", [
    currentIndex
  ]);
  useOn("keydown", /* @__PURE__ */ inlinedQrl(s_M0qc9EHj0yI, "s_M0qc9EHj0yI", [
    currentIndex
  ]));
  return /* @__PURE__ */ _jsxQ("section", null, {
    class: "testimonial-section"
  }, [
    /* @__PURE__ */ _jsxQ("div", null, {
      class: "testimonial-left"
    }, /* @__PURE__ */ _jsxQ("div", null, {
      class: "image-container"
    }, [
      /* @__PURE__ */ _jsxQ("img", null, {
        src: "https://picsum.photos/id/1/200/300",
        alt: "Dentiste en consultation",
        width: 400,
        height: 300
      }, null, 3, null),
      /* @__PURE__ */ _jsxQ("div", null, {
        class: "rating-overlay"
      }, [
        /* @__PURE__ */ _jsxQ("div", null, {
          class: "rating-score"
        }, [
          _fnSignal((p0) => p0.value, [
            note
          ], "p0.value"),
          "/5"
        ], 3, null),
        /* @__PURE__ */ _jsxQ("div", null, {
          class: "rating-details"
        }, [
          /* @__PURE__ */ _jsxQ("p", null, {
            class: "rating-description"
          }, "Note donnée par nos patients après leur visite", 3, null),
          /* @__PURE__ */ _jsxQ("div", null, {
            class: "rating-stars"
          }, [
            Array.from({
              length: 5
            }).map((_, index) => /* @__PURE__ */ _jsxQ("span", null, null, index < note.value ? "★" : "☆", 1, index)),
            /* @__PURE__ */ _jsxQ("span", null, {
              class: "rating-reason"
            }, "Pour un service excellent", 3, null)
          ], 1, null)
        ], 1, null)
      ], 1, null)
    ], 1, null), 1, null),
    /* @__PURE__ */ _jsxQ("div", null, {
      class: "testimonial-right"
    }, [
      /* @__PURE__ */ _jsxQ("p", null, {
        class: "testimonial-pre-title"
      }, "+ TÉMOIGNAGES", 3, null),
      /* @__PURE__ */ _jsxQ("h2", null, {
        class: "testimonial-title"
      }, [
        "Ce que disent nos ",
        /* @__PURE__ */ _jsxQ("span", null, {
          class: "highlight"
        }, "patients", 3, null)
      ], 3, null),
      /* @__PURE__ */ _jsxQ("p", null, {
        class: "testimonial-subtitle"
      }, "Nous mettons un point d'honneur à vous offrir des soins de qualité dans un environnement chaleureux.", 3, null),
      /* @__PURE__ */ _jsxQ("div", null, {
        class: "carousel-container"
      }, testimonialData.map((testimonial, index) => /* @__PURE__ */ _jsxQ("div", {
        class: {
          "carousel-slide": true,
          active: index === currentIndex.value
        }
      }, null, [
        /* @__PURE__ */ _jsxQ("span", null, {
          class: "quote-icon"
        }, " ", 3, null),
        /* @__PURE__ */ _jsxQ("blockquote", null, {
          class: "quote-text"
        }, _wrapSignal(testimonial, "quote"), 1, null),
        /* @__PURE__ */ _jsxQ("div", null, {
          class: "author-info"
        }, [
          /* @__PURE__ */ _jsxQ("img", {
            src: _wrapSignal(testimonial, "authorImage"),
            alt: _wrapSignal(testimonial, "authorName")
          }, {
            class: "author-image",
            width: 50,
            height: 50
          }, null, 3, null),
          /* @__PURE__ */ _jsxQ("div", null, {
            class: "author-details"
          }, [
            /* @__PURE__ */ _jsxQ("p", null, {
              class: "author-name"
            }, _wrapSignal(testimonial, "authorName"), 1, null),
            /* @__PURE__ */ _jsxQ("p", null, {
              class: "author-title"
            }, _wrapSignal(testimonial, "authorTitle"), 1, null)
          ], 1, null)
        ], 1, null)
      ], 1, testimonial.id)), 1, null),
      /* @__PURE__ */ _jsxQ("div", null, {
        class: "carousel-nav"
      }, [
        /* @__PURE__ */ _jsxQ("button", null, {
          type: "button",
          class: "nav-button prev",
          "aria-label": "Témoignage précédent",
          disabled: _fnSignal((p0) => p0.value === 0, [
            currentIndex
          ], "p0.value===0"),
          onClick$: goToPrevious
        }, "←", 3, null),
        /* @__PURE__ */ _jsxQ("button", {
          disabled: currentIndex.value === testimonialData.length - 1
        }, {
          type: "button",
          class: "nav-button next",
          "aria-label": "Témoignage suivant",
          onClick$: goToNext
        }, "→", 3, null)
      ], 1, null)
    ], 1, null)
  ], 1, "Ot_0");
};
const TestimonialSection = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_nz7s0N6HIro, "s_nz7s0N6HIro"));
const s_OeF40RQCf80 = () => {
  return /* @__PURE__ */ _jsxC(Fragment$1, {
    children: /* @__PURE__ */ _jsxQ("section", null, {
      class: container$1({
        size: "medium",
        theme: "darkBlueBanner",
        paddingBlock: "md",
        marginBlock: "md"
      })
    }, /* @__PURE__ */ _jsxC(TestimonialSection, null, 3, "Ot_1"), 1, null)
  }, 1, "Ot_2");
};
const Avis = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_OeF40RQCf80, "s_OeF40RQCf80"));

const changeColor = keyframes({
  "0%": {
    background: "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 0%)"
  },
  "25%": {
    background: "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 25%)"
  },
  "50%": {
    background: "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 50%)"
  },
  "75%": {
    background: "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 75%)"
  },
  "100%": {
    background: "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 100%)"
  }
});
const ul = style({
  paddingInline: 0,
  marginInline: 20,
  display: "flex",
  flexDirection: "column",
  gap: 35,
  justifyItems: "stretch"
});
const bgImage = style({
  backgroundImage: "url(/src/assets/istockphoto.jpg)",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "repeat"
});
const liWrapper = style([
  container$1({
    theme: "whiteLD",
    background: true
  }),
  {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    gridTemplateRows: "auto auto",
    gap: "10px",
    padding: "15px",
    border: "2px solid oklch(0.8 0.0345 261.53)",
    borderRadius: "5px",
    width: "100%",
    cursor: "pointer",
    position: "relative",
    transition: "all 0.3s ease",
    height: "auto",
    selectors: {
      "&:hover": {
        borderColor: color$1.theme.accent,
        transform: "translateY(-2px)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
      },
      "&:has(+li):before": {
        content: "",
        width: "100%",
        backgroundColor: color$1.theme.accent,
        bottom: "-25px",
        height: "5px",
        position: "absolute",
        left: 0
      },
      "&:hover:has(+li):before": {
        animationName: changeColor,
        animationDuration: "4s",
        animationIterationCount: "infinite",
        animationDirection: "alternate"
      }
    }
  }
]);
const liHeader = style({
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  gridColumn: "1 / -1",
  gridRow: "1 / 2",
  gap: "10px",
  alignItems: "center",
  cursor: "pointer",
  width: "100%",
  background: color$1.theme.secondary,
  border: "none",
  padding: 0,
  textAlign: "left"
});
const myContent = createVar({
  syntax: "<string>",
  initialValue: "url(src/assets/icons/icon-how-it-work-1.svg)",
  inherits: false
});
style({
  position: "absolute",
  opacity: 0,
  pointerEvents: "none"
});
const notificationBase = style({
  gridColumn: "3 / 4",
  fontSize: "24px",
  fontWeight: "bold",
  color: color$1.theme.accent,
  transition: "transform 0.3s ease, color 0.3s ease",
  selectors: {
    [`${liWrapper}:hover &`]: {
      transform: "scale(1.1)",
      color: color$1.theme.primary
    }
  }
});
const li_content = styleVariants({
  // Titre avec icône
  txt1: [
    textRecipe({
      font: "highLight"
    }),
    {
      gridColumn: "2 / 3",
      marginInlineStart: "0rem",
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      color: color$1.theme.primary,
      gap: "1rem",
      ":before": {
        content: myContent,
        marginInlineEnd: "1rem",
        width: "24px",
        height: "24px",
        display: "inline-block",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }
    }
  ],
  // Indicateur fermé (+)
  notificationClosed: [
    notificationBase,
    {
      ":after": {
        content: "+"
      }
    }
  ],
  // Indicateur ouvert (-)
  notificationOpen: [
    notificationBase,
    {
      ":after": {
        content: "-"
      }
    }
  ],
  // Contenu fermé
  txtClose: [
    {
      backgroundColor: "pink",
      margin: "0px",
      gridColumn: "1 / -1",
      gridRow: "2 / 3",
      maxHeight: "0px",
      opacity: 0,
      overflow: "hidden",
      padding: "0px",
      transition: "max-height 0.4s ease-out, opacity 0.4s ease-out, padding 0.4s ease-out"
    }
  ],
  // Contenu ouvert
  txt2Open: [
    textRecipe({
      font: "text"
    }),
    {
      gridColumn: "1 / -1",
      gridRow: "2 / 3",
      maxHeight: "100px",
      opacity: 1,
      overflow: "hidden",
      padding: "15px",
      transition: "max-height 0.4s ease-out, opacity 0.4s ease-out, padding 0.4s ease-out",
      color: color$1.theme.secondary,
      lineHeight: "1.6",
      marginTop: "10px",
      borderTop: `1px solid ${color$1.theme.divider}`
    }
  ]
});
style({
  gridColumn: "1 / 2",
  padding: "10px",
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain"
});

const styles = ".openDescription{color:inherit;display:block;margin-top:1rem;cursor:auto}.closeDescription{visibility:hidden;display:none;cursor:auto}.notificationBaseCss:after{font-size:.8rem;color:#054ed5}.notificationClosedCss:after{content:\" - \"}.notificationOpenCss:after{content:\" + \"}";

const AccordionContext = createContextId("accordion-context");
const s_JXtN8uuliwg = (id) => {
  const [activeId] = useLexicalScope();
  activeId.value = activeId.value === id ? null : id;
};
const s_8aYZfDqg0HY = () => {
  const data = [
    {
      id: 0,
      title: "Prendre rendez-vous",
      icon: "url(/src/assets/icons/icon-how-it-work-1.svg)",
      description: "Prenez rendez-vous facilement en ligne ou par téléphone. Notre équipe vous proposera un créneau adapté à votre emploi du temps."
    },
    {
      id: 1,
      title: "Tiers Payant",
      icon: "url(/src/assets/icons/icon-how-it-work-2.svg)",
      description: "Bénéficiez du tiers payant pour la plupart des soins. Aucun débours au cabinet."
    },
    {
      id: 2,
      title: "Soins experts",
      icon: "url(/src/assets/icons/icon-how-it-work-3.svg)",
      description: "Recevez des soins dentaires experts dans un environnement moderne et accueillant."
    }
  ];
  const activeId = useSignal(null);
  const toggleItem = /* @__PURE__ */ inlinedQrl(s_JXtN8uuliwg, "s_JXtN8uuliwg", [
    activeId
  ]);
  useContextProvider(AccordionContext, activeId);
  return /* @__PURE__ */ _jsxQ("ul", null, {
    class: ul
  }, data.map((item, index) => /* @__PURE__ */ _jsxC(AccordionItem, {
    item: {
      ...item,
      toggleItem
    }
  }, 3, index)), 1, "bT_0");
};
const Accordion = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_8aYZfDqg0HY, "s_8aYZfDqg0HY"));
const s_8pOMQqB3k0w = () => {
  const [context, props] = useLexicalScope();
  const open = context.value === props.item.id;
  return open;
};
const s_VqRREkA7X9s = (props) => {
  const context = useContext(AccordionContext);
  useStylesScopedQrl(/* @__PURE__ */ inlinedQrl(styles, "s_qgyn7Z00AoM"));
  const isOpen = useComputedQrl(/* @__PURE__ */ inlinedQrl(s_8pOMQqB3k0w, "s_8pOMQqB3k0w", [
    context,
    props
  ]));
  return /* @__PURE__ */ _jsxQ("li", null, {
    class: liWrapper
  }, [
    /* @__PURE__ */ _jsxQ("button", null, {
      type: "button",
      class: liHeader,
      "aria-expanded": _fnSignal((p0) => !!p0.value, [
        isOpen
      ], "!!p0.value"),
      "aria-controls": _fnSignal((p0) => `accordion-content-${p0.item.id}`, [
        props
      ], "`accordion-content-${p0.item.id}`"),
      onClick$: /* @__PURE__ */ _noopQrl("s_xUvhUiNfPCI", [
        props
      ])
    }, [
      /* @__PURE__ */ _jsxQ("h4", {
        style: assignInlineVars({
          [myContent]: props.item.icon
        })
      }, {
        class: li_content.txt1
      }, _fnSignal((p0) => p0.item.title, [
        props
      ], "p0.item.title"), 3, null),
      /* @__PURE__ */ _jsxQ("i", null, {
        class: _fnSignal((p0) => [
          "notificationBaseCss",
          p0.value ? "notificationOpenCss" : "notificationClosedCss"
        ], [
          isOpen
        ], '["notificationBaseCss",p0.value?"notificationOpenCss":"notificationClosedCss"]'),
        "aria-hidden": "true"
      }, null, 3, null)
    ], 1, null),
    /* @__PURE__ */ _jsxQ("div", null, {
      id: _fnSignal((p0) => `accordion-content-${p0.item.id}`, [
        props
      ], "`accordion-content-${p0.item.id}`"),
      "aria-hidden": _fnSignal((p0) => !p0.value, [
        isOpen
      ], "!p0.value")
    }, /* @__PURE__ */ _jsxQ("p", null, {
      class: _fnSignal((p0) => p0.value ? "openDescription" : "closeDescription", [
        isOpen
      ], 'p0.value?"openDescription":"closeDescription"')
    }, _fnSignal((p0) => p0.item.description, [
      props
    ], "p0.item.description"), 3, null), 3, null)
  ], 1, "bT_1");
};
const AccordionItem = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_VqRREkA7X9s, "s_VqRREkA7X9s"));

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section${addAttribute([
    bgImage,
    containerGridMaxColumn({
      theme: "darkBlueBanner",
      sizeOfBox: 300,
      background: false,
      size: "medium",
      gap: "sm",
      maxColumn: 2,
      marginBlock: "lg",
      paddingBlock: "lg",
      hover: false
    })
  ], "class:list")}> <div class="grid place-items-center bg-slate-900/70 mx-4 px-2 rounded-lg"> ${renderComponent($$result, "Title", $$TopContent, { "subtitle": "Comment \xE7a marche ?", "PreTitle": "Ce que nous faisons", "title": "Pour votre sourire", "description": "Notre cabinet simplifie vos d\xE9marches administratives, vous permettant de vous concentrer sur votre sant\xE9 et votre bien-\xEAtre.", "gap": "largeGap", "textAlign": "left" })} </div> <div class="w-full"> ${renderComponent($$result, "HowItWorksComponent", Accordion, {})} </div> </section>`;
}, "/mnt/data500/rr/DEV/dentistLanding/src/components/HOME/how3/index.astro", void 0);

const fontFamily = createGlobalTheme(":root", {
  dancingScript: `${f.dancingScript}, Times, serif`,
  exo: `${f.exo}, Times, serif`,
  numito: `${f.nunito}, Arial, sans-serif`
});
const variable = createGlobalTheme(":root", {
  darkLight: "oklch(32.25% 0.0573 233.51)",
  darkDark: "oklch(25.88% 0.037 240.95)",
  accent: "oklch(58.09% 0.1151 235.69)",
  whiteBlue: "oklch(97.44% 0.0134 240.95)",
  whiteToBlack: ld("oklch(97.44% 0.0134 240.95)", "black"),
  blackToWhite: ld("black", "oklch(97.44% 0.0134 240.95)"),
  textLight: "oklch(53.36% 0.0445 230.26)",
  r: ld("orange", "green")
});
globalStyle("body", {
  backgroundColor: variable.whiteBlue
});
const theme = createThemeContract({
  background: null,
  backgroundHover: null,
  primary: null,
  secondary: null,
  accent: null,
  text: "#000000",
  textHover: null,
  divider: variable.darkDark
});
const accent = createTheme(theme, {
  background: variable.accent,
  backgroundHover: variable.darkLight,
  primary: "white",
  secondary: "null",
  accent: variable.darkDark,
  text: "white",
  textHover: variable.darkDark,
  divider: "#0E384C1A"
});
const darkBlueBanner = createTheme(theme, {
  background: "light-dark(oklch(32.25% 0.0573 233.51),oklch(72.55% 0.0573 233.51))",
  backgroundHover: "light-dark(oklch(72.55% 0.0573 233.51),oklch(32.25% 0.0573 233.51))",
  primary: "white",
  secondary: "null",
  accent: variable.accent,
  text: ld("white", "black"),
  textHover: ld("black", "white"),
  divider: "#0E384C1A"
});
const whiteBg = createTheme(theme, {
  background: "light-dark(white,oklch(79.97% 0 0))",
  backgroundHover: variable.darkLight,
  primary: variable.darkLight,
  secondary: "null",
  accent: variable.accent,
  text: "oklch(53.36% 0.0445 230.26)",
  textHover: "white",
  divider: "#0E384C1A"
});
const blueLightBg = createTheme(theme, {
  background: "light-dark(oklch(97.44% 0.0134 240.95),oklch(0.69 0.0345 247.76))",
  backgroundHover: "#0e384c",
  primary: "#0e384c",
  secondary: "null",
  accent: variable.accent,
  text: ld("oklch(53.36% 0.0445 230.26)", "white"),
  textHover: "white",
  divider: "#0E384C1A"
});
const color = {
  theme
};
const containerSize = {
  default: "60rem",
  small: "60rem",
  medium: "72rem",
  large: "90rem",
  xxl: "120rem",
  full: "100svw"
};
const maxInlineSizeFn = (x) => {
  return `min(calc(100% - clamp(0.75rem, 0.42rem + 1.7vw, 1.7rem) * 2), ${containerSize[x]}, 130rem)`;
};
const defaultContainer = style({
  "@layer": {
    custom: {
      marginInline: "auto",
      position: "relative",
      boxSizing: "border-box"
    }
  }
});
const container = styleVariants({
  default: [
    defaultContainer
  ],
  small: [
    defaultContainer,
    {
      maxInlineSize: maxInlineSizeFn("small")
    }
  ],
  medium: [
    defaultContainer,
    {
      maxInlineSize: maxInlineSizeFn("medium")
    }
  ],
  large: [
    defaultContainer,
    {
      maxInlineSize: maxInlineSizeFn("large")
    }
  ],
  xxl: [
    defaultContainer,
    {
      maxInlineSize: maxInlineSizeFn("xxl")
    }
  ],
  full: {
    marginInline: "auto",
    position: "relative",
    boxSizing: "border-box",
    maxInlineSize: "none"
  }
});
globalStyle(`${container.default} > *`, {
  marginInline: "auto",
  maxInlineSize: maxInlineSizeFn("default")
});
const sizes = Object.keys(container).filter((key) => [
  "small",
  "medium",
  "large",
  "xxl",
  "full"
].includes(key));
for (const size of sizes) globalStyle(`${container.default} > ${container[size]}`, {
  maxInlineSize: maxInlineSizeFn(size)
});
const spaceLrVar = createVar({
  syntax: "<length>",
  inherits: false,
  initialValue: "40px"
});
const spaceGapVar = createVar({
  syntax: "<length>",
  inherits: false,
  initialValue: "20px"
});
const gridWrapper = style({
  // Valeurs initiales des variables
  vars: {
    [spaceLrVar]: fluid(40, 80),
    [spaceGapVar]: fluid(20, 35)
  },
  gap: spaceGapVar
});
const vars = createThemeContract({
  col: null
});
const numberOfColumnTheme = style({
  vars: assignVars(vars, {
    col: "3"
  }),
  "@media": {
    [media.tablet]: {
      vars: assignVars(vars, {
        col: "6"
      })
    },
    [media.md]: {
      vars: assignVars(vars, {
        col: "12"
      })
    }
  }
});
styleVariants(containerSize, (size) => [
  defaultContainer,
  gridWrapper,
  numberOfColumnTheme,
  {
    display: "grid",
    gridTemplateColumns: `1fr repeat(${vars.col}, calc((min(100% - ${spaceLrVar}, ${size}) - (${vars.col} - 1) * ${spaceGapVar}) / ${vars.col})) 1fr`
  }
]);
const containerGridCol = recipe({
  base: {
    marginInline: "auto",
    position: "relative",
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "1fr"
  },
  variants: {
    size: {
      default: {
        maxInlineSize: maxInlineSizeFn("default")
      },
      small: {
        maxInlineSize: maxInlineSizeFn("small")
      },
      medium: {
        maxInlineSize: maxInlineSizeFn("medium")
      },
      large: {
        maxInlineSize: maxInlineSizeFn("large")
      },
      xxl: {
        maxInlineSize: maxInlineSizeFn("xxl")
      },
      full: {
        maxInlineSize: "none"
      }
    },
    cols: {
      2: {
        "@media": {
          [media.tablet]: {
            gridTemplateColumns: "repeat(2, 1fr)"
          },
          [media.md]: {
            gridTemplateColumns: "repeat(2, 1fr)"
          }
        }
      },
      3: {
        "@media": {
          [media.tablet]: {
            gridTemplateColumns: "repeat(2, 1fr)"
          },
          [media.md]: {
            gridTemplateColumns: "repeat(3, 1fr)"
          }
        }
      },
      4: {
        "@media": {
          [media.tablet]: {
            gridTemplateColumns: "repeat(2, 1fr)"
          },
          [media.md]: {
            gridTemplateColumns: "repeat(4, 1fr)"
          }
        }
      },
      6: {
        "@media": {
          [media.tablet]: {
            gridTemplateColumns: "repeat(3, 1fr)"
          },
          [media.md]: {
            gridTemplateColumns: "repeat(6, 1fr)"
          }
        }
      },
      8: {
        "@media": {
          [media.tablet]: {
            gridTemplateColumns: "repeat(4, 1fr)"
          },
          [media.md]: {
            gridTemplateColumns: "repeat(8, 1fr)"
          }
        }
      },
      12: {
        "@media": {
          [media.tablet]: {
            gridTemplateColumns: "repeat(6, 1fr)"
          },
          [media.md]: {
            gridTemplateColumns: "repeat(12, 1fr)"
          }
        }
      },
      24: {
        "@media": {
          [media.tablet]: {
            gridTemplateColumns: "repeat(12, 1fr)"
          },
          [media.md]: {
            gridTemplateColumns: "repeat(24, 1fr)"
          }
        }
      }
    }
  },
  defaultVariants: {
    size: "small",
    cols: 2
  }
});
globalStyle(`${containerGridCol({
  size: "default"
})} > *`, {
  maxInlineSize: maxInlineSizeFn("default")
});
const sizesContainerGridCol = Object.keys(containerSize).filter((key) => [
  "small",
  "medium",
  "large",
  "xxl",
  "full"
].includes(key));
for (const size of sizesContainerGridCol) globalStyle(`${containerGridCol({
  size: "default"
})} > ${containerGridCol({
  size
})}`, {
  maxInlineSize: maxInlineSizeFn(size)
});
recipe({
  base: {
    backgroundColor: color.theme.background,
    color: color.theme.text,
    ":focus": {
      outline: `min(4px, 3px + 0.1vw) solid ${color.theme.divider}`,
      outlineOffset: "4px",
      transition: "transform 1s easy"
    }
  },
  variants: {
    theme: {
      accent,
      darkBlueBanner,
      whiteBg,
      blueLightBg
    },
    hover: {
      true: {
        cursor: "pointer",
        ":active": {
          color: fallbackVar(color.theme.accent, color.theme.textHover, "inherit"),
          backgroundColor: color.theme.backgroundHover,
          transform: "scale(1.01,1)",
          outline: `min(4px, 3px + 0.1vw) solid ${color.theme.backgroundHover}`,
          outlineOffset: "1.6px"
        },
        ":focus": {
          outline: "min(4px, 3px + 0.1vw) solid yellow",
          outlineOffset: "4px"
        },
        "@media": {
          "(hover: hover)": {
            ":hover": {
              backgroundColor: fallbackVar(color.theme.backgroundHover, color.theme.background),
              color: fallbackVar(color.theme.textHover, "inherit"),
              border: fallbackVar(color.theme.textHover, "inherit")
            }
          }
        }
      }
    }
  },
  defaultVariants: {
    theme: "blueLightBg",
    hover: false
  }
});
recipe({
  base: {
    display: "flex"
  },
  variants: {
    direction: {
      row: {
        flexDirection: "row"
      },
      rowReverse: {
        flexDirection: "row-reverse"
      },
      column: {
        flexDirection: "column"
      }
    },
    side: {
      1: {
        justifyContent: "start",
        alignItems: "start"
      },
      2: {
        justifyContent: "center",
        alignItems: "start"
      },
      3: {
        justifyContent: "end",
        alignItems: "start"
      },
      4: {
        justifyContent: "start",
        alignItems: "center"
      },
      5: {
        justifyContent: "center",
        alignItems: "center"
      },
      6: {
        justifyContent: "end",
        alignItems: "center"
      },
      7: {
        justifyContent: "start",
        alignItems: "end"
      },
      8: {
        justifyContent: "center",
        alignItems: "end"
      },
      9: {
        justifyContent: "end",
        alignItems: "end"
      }
    },
    space: {
      between: {
        justifyContent: "space-between"
      },
      around: {
        justifyContent: "space-around"
      },
      evenly: {
        justifyContent: "space-evenly"
      }
    },
    wrap: {
      true: {
        flexWrap: "wrap"
      }
    }
  },
  defaultVariants: {
    direction: "row",
    side: 1,
    wrap: false
  }
});

globalStyle("*, *::before, *::after", {
  "@layer": {
    [reset]: {
      boxSizing: "border-box",
      margin: 0
    }
  }
});
globalStyle("*", {
  "@layer": {
    [reset]: {
      margin: 0,
      maxInlineSize: "100dvw",
      boxSizing: "border-box"
    }
  }
});
globalStyle("html, body", {
  "@layer": {
    [reset]: {
      blockSize: "100%",
      overflowInline: "hidden",
      boxSizing: "border-box",
      lineHeight: 1.5,
      WebkitFontSmoothing: "antialiased",
      scrollBehavior: "smooth"
    }
  }
});
globalStyle("img, svg", {
  "@layer": {
    [reset]: {
      verticalAlign: "middle"
    }
  }
});
globalStyle("input, button, textarea, select", {
  "@layer": {
    [reset]: {
      font: "inherit"
    }
  }
});
globalStyle(":where(img, picture, video, canvas, svg)", {
  "@layer": {
    [reset]: {
      scrollBehavior: "smooth",
      display: "block",
      maxInlineSize: "100%"
    }
  }
});
globalStyle(":root", {
  "@layer": {
    [reset]: {
      colorScheme: "light dark",
      isolation: "isolate"
    }
  }
});
globalStyle("html, body *", {
  "@layer": {
    [reset]: {
      boxSizing: "border-box"
    }
  }
});
globalStyle("ul li", {
  "@layer": {
    [reset]: {
      listStyleType: "none"
    }
  }
});
globalStyle("img", {
  "@layer": {
    [reset]: {
      objectFit: "cover"
    }
  }
});
globalStyle("a", {
  "@layer": {
    [reset]: {
      textDecoration: "none"
    }
  }
});
globalStyle("a:hover", {
  "@layer": {
    [reset]: {
      textDecoration: "underline"
    }
  }
});
globalStyle("span", {
  "@layer": {
    [reset]: {
      color: color$1.theme.accent
    }
  }
});
globalStyle(":where(h1, h2, h3, h4, h5, h6, p)", {
  margin: 0,
  textWrap: [
    "balance",
    "pretty"
  ]
});
const responsiveFontSize = {
  h1: {
    fontSize: "clamp(2.5rem, 5vw + 0.5rem, 4rem)",
    fontFamily: fontFamily.dancingScript
  },
  h2: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontFamily: fontFamily.dancingScript
  },
  h3: {
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
    fontFamily: fontFamily.exo
  },
  h4: {
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    fontFamily: fontFamily.exo
  },
  h5: {
    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
    fontFamily: fontFamily.exo
  },
  h6: {
    fontSize: "clamp(1rem, 2vw, 1.5rem)",
    fontFamily: fontFamily.exo
  },
  p: {
    fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
    fontFamily: fontFamily.numito
  },
  span: {
    fontSize: "inherit",
    fontFamily: "inherit"
  },
  li: {
    fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
    fontFamily: fontFamily.numito
  }
};
for (const [key, value] of Object.entries(responsiveFontSize)) {
  const { fontSize: fontSize2, fontFamily } = value;
  globalStyle(key, {
    "@layer": {
      [reset]: {
        fontSize: fontSize2,
        fontFamily
      }
    }
  });
}
globalStyle("p", {
  "@layer": {
    [base]: {
      lineHeight: "28px",
      fontSize: fontSize["base"],
      fontWeight: "400",
      color: fallbackVar(theme$1.text, "#527282"),
      fontFamily: "Poppins"
    }
  }
});

const quickLinks = [
  {
    label: "Accueil",
    href: "/"
  },
  {
    label: "Nos Services",
    href: "/services"
  },
  {
    label: "Notre Équipe",
    href: "/equipe"
  },
  {
    label: "Contact",
    href: "/contact"
  },
  {
    label: "Prendre rendez-vous",
    href: "/rdv"
  }
];
const contactInfos = [
  {
    label: "Adresse",
    icon: "📍",
    value: "123 Avenue du Sourire, 75000 Paris"
  },
  {
    label: "Téléphone",
    icon: "📞",
    value: /* @__PURE__ */ _jsxQ("a", null, {
      href: "tel:0123456789",
      class: "hover:underline"
    }, "01 23 45 67 89", 3, "6D_0")
  },
  {
    label: "Email",
    icon: "✉️",
    value: /* @__PURE__ */ _jsxQ("a", null, {
      href: "mailto:contact@dentistepro.fr",
      class: "hover:underline"
    }, "contact@dentistepro.fr", 3, null)
  },
  {
    label: "Horaires",
    icon: "⏰",
    value: "Lun - Ven : 9h - 19h"
  }
];
const s_N2tvq4ePisI = () => {
  const currentYear = useSignal(2024);
  useVisibleTaskQrl(/* @__PURE__ */ _noopQrl("s_u5yiorzCTwg", [
    currentYear
  ]));
  return /* @__PURE__ */ _jsxQ("footer", null, {
    class: "bg-sky-500/50 border-t border-sky-100 text-white px-4 py-5 text-sm mt-xxl "
  }, [
    /* @__PURE__ */ _jsxQ("div", null, {
      class: "max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 items-start"
    }, [
      /* @__PURE__ */ _jsxQ("div", null, null, [
        /* @__PURE__ */ _jsxQ("div", null, {
          class: "flex items-center mb-2"
        }, [
          /* @__PURE__ */ _jsxQ("span", null, {
            class: "rounded-full text-sky-600 text-xl w-8 h-8 flex items-center justify-center mr-2 border border-sky-300 bg-sky-50"
          }, "🦷", 3, null),
          /* @__PURE__ */ _jsxQ("span", null, {
            class: "text-lg font-semibold tracking-wide"
          }, "DentistePro", 3, null)
        ], 3, null),
        /* @__PURE__ */ _jsxQ("p", null, {
          class: "text-xs text-sky-700/80 leading-snug"
        }, [
          "Votre sourire, notre priorité.",
          /* @__PURE__ */ _jsxQ("br", null, null, null, 3, null),
          "Soins personnalisés et équipements de pointe."
        ], 3, null)
      ], 3, null),
      /* @__PURE__ */ _jsxQ("div", null, null, [
        /* @__PURE__ */ _jsxQ("h5", null, {
          class: "font-semibold mb-2 text-sky-800 text-base"
        }, "Liens rapides", 3, null),
        /* @__PURE__ */ _jsxQ("ul", null, {
          class: "space-y-1"
        }, quickLinks.map((link) => /* @__PURE__ */ _jsxQ("li", null, null, /* @__PURE__ */ _jsxQ("a", {
          href: _wrapSignal(link, "href")
        }, {
          class: "hover:underline hover:text-sky-600 transition-colors"
        }, _wrapSignal(link, "label"), 1, null), 1, link.href)), 1, null)
      ], 1, null),
      /* @__PURE__ */ _jsxQ("div", null, null, [
        /* @__PURE__ */ _jsxQ("h5", null, {
          class: "font-semibold mb-2 text-sky-800 text-base"
        }, "Contact", 3, null),
        /* @__PURE__ */ _jsxQ("ul", null, {
          class: "space-y-1"
        }, contactInfos.map((info, idx) => /* @__PURE__ */ _jsxQ("li", null, {
          class: "flex items-start gap-1"
        }, [
          /* @__PURE__ */ _jsxQ("span", null, {
            class: "text-lg"
          }, _wrapSignal(info, "icon"), 1, null),
          /* @__PURE__ */ _jsxQ("span", null, null, [
            /* @__PURE__ */ _jsxQ("span", null, {
              class: "font-medium"
            }, [
              _wrapSignal(info, "label"),
              " :"
            ], 1, null),
            " ",
            _wrapSignal(info, "value")
          ], 1, null)
        ], 1, idx)), 1, null)
      ], 1, null)
    ], 1, null),
    /* @__PURE__ */ _jsxQ("div", null, {
      class: "mt-6 border-t border-sky-100 pt-4 text-center text-xs text-blue-950"
    }, [
      "© ",
      _fnSignal((p0) => p0.value, [
        currentYear
      ], "p0.value"),
      " DentistePro. Tous droits réservés."
    ], 3, null)
  ], 1, "6D_1");
};
const Footer = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_N2tvq4ePisI, "s_N2tvq4ePisI"));

const menu = [
  {
    type: "link",
    name: "Accueil",
    link: "/"
  },
  {
    type: "link",
    name: "Urgences",
    link: "/urgences"
  },
  {
    type: "submenu",
    name: "Services",
    Submenu: [
      {
        type: "link",
        name: "Soins préventifs",
        link: "/services/preventifs"
      },
      {
        type: "link",
        name: "Implants dentaires",
        link: "/services/implants"
      },
      {
        type: "link",
        name: "Orthodontie",
        link: "/services/orthodontie"
      }
    ]
  },
  {
    type: "submenu",
    name: "Le Cabinet",
    Submenu: [
      {
        type: "link",
        name: "Notre équipe",
        link: "/cabinet/equipe"
      },
      {
        type: "link",
        name: "Équipements",
        link: "/cabinet/equipements"
      },
      {
        type: "link",
        name: "Horaires & Accès",
        link: "/cabinet/horaires"
      }
    ]
  },
  {
    type: "link",
    name: "Contact",
    link: "/contact"
  }
];
const ActiveDesktopSubmenuContext = createContextId("desktop-active-submenu-index");
const LogoIcon = () => /* @__PURE__ */ _jsxQ("svg", null, {
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ _jsxQ("title", null, null, "DentaCare Logo", 3, null),
  /* @__PURE__ */ _jsxQ("path", null, {
    d: "M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.72 3.9C10.74 18.45 11.35 19 12 19s1.26-.55 1.87-1.26c1.52-1.04 2.77-2.36 3.72-3.9C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
  }, null, 3, null)
], 3, "Qf_0");
const s_cJnbkFHhWa8 = (props) => /* @__PURE__ */ _jsxQ("svg", null, {
  class: _fnSignal((p0) => `ml-1 w-4 h-4 transition-transform duration-200 ${p0.isOpen ?? false ? "rotate-180" : ""}`, [
    props
  ], '`ml-1 w-4 h-4 transition-transform duration-200 ${p0.isOpen??false?"rotate-180":""}`'),
  fill: "currentColor",
  viewBox: "0 0 20 20",
  "aria-hidden": "true"
}, /* @__PURE__ */ _jsxQ("path", null, {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, 3, null), 3, "Qf_1");
const ChevronIcon = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_cJnbkFHhWa8, "s_cJnbkFHhWa8"));
const s_USx9O1R2csc = () => /* @__PURE__ */ _jsxQ("svg", null, {
  class: "w-6 h-6",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ _jsxQ("title", null, null, "Ouvrir le menu", 3, null),
  /* @__PURE__ */ _jsxQ("path", null, {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M4 6h16M4 12h16M4 18h16"
  }, null, 3, null)
], 3, "Qf_2");
const MenuIcon = /* @__PURE__ */ inlinedQrl(s_USx9O1R2csc, "s_USx9O1R2csc");
const s_56eU3Ni00nM = () => /* @__PURE__ */ _jsxQ("svg", null, {
  class: "w-6 h-6",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ _jsxQ("title", null, null, "Fermer le menu", 3, null),
  /* @__PURE__ */ _jsxQ("path", null, {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  }, null, 3, null)
], 3, "Qf_3");
const CloseIcon = /* @__PURE__ */ inlinedQrl(s_56eU3Ni00nM, "s_56eU3Ni00nM");
const s_9iIBlOa02eI = () => {
  const [isMobileScreen, isOpen] = useLexicalScope();
  if (!isMobileScreen.value) isOpen.value = false;
};
const s_hGBLYqpOAz0 = () => {
  const [isMobileScreen, isOpen] = useLexicalScope();
  if (!isMobileScreen.value) isOpen.value = false;
};
const s_A8KNs0T9C5c = () => {
  const [isMobileScreen, isOpen] = useLexicalScope();
  if (isMobileScreen.value) isOpen.value = !isOpen.value;
};
function useMobileMenuToggler(navBarId) {
  const isOpen = useSignal(false);
  const isMobileScreen = useSignal(false);
  const checkScreenSize = /* @__PURE__ */ inlinedQrl(s_9iIBlOa02eI, "s_9iIBlOa02eI", [
    isMobileScreen,
    isOpen
  ]);
  useVisibleTaskQrl(/* @__PURE__ */ _noopQrl("s_F88FFDBKWL4", [
    isMobileScreen
  ]));
  useComputedQrl(/* @__PURE__ */ inlinedQrl(s_hGBLYqpOAz0, "s_hGBLYqpOAz0", [
    isMobileScreen,
    isOpen
  ]));
  useOnWindow("resize", checkScreenSize);
  const toggle = /* @__PURE__ */ inlinedQrl(s_A8KNs0T9C5c, "s_A8KNs0T9C5c", [
    isMobileScreen,
    isOpen
  ]);
  useVisibleTaskQrl(/* @__PURE__ */ _noopQrl("s_3fibsKz18AM", [
    isOpen,
    navBarId
  ]));
  return {
    isOpen,
    toggle,
    isMobileScreen
  };
}
const s_Lf90XTRoo8c = (props) => {
  return /* @__PURE__ */ _jsxQ("li", null, null, /* @__PURE__ */ _jsxQ("a", {
    class: [
      "transition-colors duration-200",
      props.isMobile ? "block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-500 hover:bg-gray-50 rounded-md" : "text-gray-700 hover:text-sky-500 px-3 py-2 text-sm font-medium"
    ],
    onClick$: props.onClick$
  }, {
    href: _fnSignal((p0) => p0.link, [
      props
    ], "p0.link")
  }, _fnSignal((p0) => p0.name, [
    props
  ], "p0.name"), 2, null), 1, "Qf_4");
};
const DentalNavLink = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_Lf90XTRoo8c, "s_Lf90XTRoo8c"));
const s_ZzeLPO6At9Y = () => {
  const [activeSubmenuIndex, props] = useLexicalScope();
  return activeSubmenuIndex.value === props.idx;
};
const s_YzQQGdwID94 = () => {
  const [activeSubmenuIndex] = useLexicalScope();
  activeSubmenuIndex.value = -1;
};
const s_JzklIbUITXE = (props) => {
  const activeSubmenuIndex = useContext(ActiveDesktopSubmenuContext);
  const itemRef = useSignal();
  const isActive = useComputedQrl(/* @__PURE__ */ inlinedQrl(s_ZzeLPO6At9Y, "s_ZzeLPO6At9Y", [
    activeSubmenuIndex,
    props
  ]));
  return /* @__PURE__ */ _jsxQ("li", {
    ref: itemRef
  }, {
    class: "relative group",
    onMouseEnter$: /* @__PURE__ */ _noopQrl("s_Aw5B0eG9Jvg", [
      activeSubmenuIndex,
      props
    ]),
    onMouseLeave$: /* @__PURE__ */ _noopQrl("s_2ITbRCKrOe4", [
      activeSubmenuIndex
    ])
  }, [
    /* @__PURE__ */ _jsxQ("button", null, {
      type: "button",
      class: "text-gray-700 hover:text-sky-500 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center",
      "aria-expanded": _fnSignal((p0) => p0.value, [
        isActive
      ], "p0.value"),
      "aria-controls": _fnSignal((p0) => `desktop-submenu-${p0.idx}`, [
        props
      ], "`desktop-submenu-${p0.idx}`"),
      onClick$: /* @__PURE__ */ _noopQrl("s_dVRQ869lmlQ", [
        activeSubmenuIndex,
        isActive,
        props
      ]),
      onFocus$: /* @__PURE__ */ _noopQrl("s_CHJ0PGoiLTE", [
        activeSubmenuIndex,
        props
      ])
    }, [
      _fnSignal((p0) => p0.name, [
        props
      ], "p0.name"),
      /* @__PURE__ */ _jsxC(ChevronIcon, {
        get isOpen() {
          return isActive.value;
        },
        [_IMMUTABLE]: {
          isOpen: _fnSignal((p0) => p0.value, [
            isActive
          ], "p0.value")
        }
      }, 3, "Qf_5")
    ], 1, null),
    /* @__PURE__ */ _jsxQ("div", {
      class: [
        "absolute left-0 mt-0 pt-2 w-56 bg-white rounded-lg shadow-lg transition-all duration-300 transform origin-top z-30",
        isActive.value ? "opacity-100 visible scale-y-100" : "opacity-0 invisible scale-y-95"
      ]
    }, {
      id: _fnSignal((p0) => `desktop-submenu-${p0.idx}`, [
        props
      ], "`desktop-submenu-${p0.idx}`"),
      onMouseEnter$: /* @__PURE__ */ _noopQrl("s_XsHcshRuD3I", [
        activeSubmenuIndex,
        props
      ])
    }, /* @__PURE__ */ _jsxQ("ul", null, {
      class: "py-2"
    }, props.Submenu.map((subItem, subIndex) => /* @__PURE__ */ _jsxC(DentalNavLink, {
      ...subItem,
      onClick$: /* @__PURE__ */ inlinedQrl(s_YzQQGdwID94, "s_YzQQGdwID94", [
        activeSubmenuIndex
      ]),
      [_IMMUTABLE]: {
        onClick$: _IMMUTABLE
      }
    }, 0, `${subItem.name}-${subIndex}`)), 1, null), 1, null)
  ], 1, "Qf_6");
};
const DesktopSubmenuItem = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_JzklIbUITXE, "s_JzklIbUITXE"));
const s_ua37mqs4ZwE = () => {
  const [props] = useLexicalScope();
  return props.openStore[props.submenuName] || false;
};
const s_zE0xgk5g9z4 = (props) => {
  const isOpen = useComputedQrl(/* @__PURE__ */ inlinedQrl(s_ua37mqs4ZwE, "s_ua37mqs4ZwE", [
    props
  ]));
  const submenuContentRef = useSignal();
  return /* @__PURE__ */ _jsxQ("li", null, {
    class: "relative"
  }, [
    /* @__PURE__ */ _jsxQ("button", {
      class: [
        "w-full flex justify-between items-center px-3 py-2 text-base font-medium rounded-md transition-colors duration-200",
        isOpen.value ? "text-sky-600 bg-sky-50" : "text-gray-700 hover:text-sky-500 hover:bg-gray-50"
      ]
    }, {
      type: "button",
      "aria-expanded": _fnSignal((p0) => p0.value, [
        isOpen
      ], "p0.value"),
      "aria-controls": _fnSignal((p0) => `mobile-submenu-content-${p0.submenuName}`, [
        props
      ], "`mobile-submenu-content-${p0.submenuName}`"),
      onClick$: /* @__PURE__ */ _noopQrl("s_I7Bq60YtKSg", [
        props
      ])
    }, [
      _fnSignal((p0) => p0.name, [
        props
      ], "p0.name"),
      /* @__PURE__ */ _jsxC(ChevronIcon, {
        get isOpen() {
          return isOpen.value;
        },
        [_IMMUTABLE]: {
          isOpen: _fnSignal((p0) => p0.value, [
            isOpen
          ], "p0.value")
        }
      }, 3, "Qf_7")
    ], 1, null),
    /* @__PURE__ */ _jsxQ("div", {
      ref: submenuContentRef
    }, {
      id: _fnSignal((p0) => `mobile-submenu-content-${p0.submenuName}`, [
        props
      ], "`mobile-submenu-content-${p0.submenuName}`"),
      class: _fnSignal((p0) => `overflow-hidden transition-all duration-300 ease-in-out ${p0.value ? "max-h-96" : "max-h-0"}`, [
        isOpen
      ], '`overflow-hidden transition-all duration-300 ease-in-out ${p0.value?"max-h-96":"max-h-0"}`')
    }, /* @__PURE__ */ _jsxQ("ul", null, {
      class: "pl-6 space-y-1 pt-1 pb-2"
    }, props.Submenu.map((subItem, subIndex) => /* @__PURE__ */ _jsxC(DentalNavLink, {
      ...subItem,
      isMobile: true,
      onClick$: props.closeMobileMenu$,
      [_IMMUTABLE]: {
        isMobile: _IMMUTABLE
      }
    }, 0, `${subItem.name}-${subIndex}`)), 1, null), 1, null)
  ], 1, "Qf_8");
};
const MobileSubmenuItem = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_zE0xgk5g9z4, "s_zE0xgk5g9z4"));
const s_0zbkfZDWW0I = (submenuNameToToggle) => {
  const [mobileSubmenuOpenStates] = useLexicalScope();
  const intendedNewStateForClicked = !(mobileSubmenuOpenStates[submenuNameToToggle] || false);
  Object.keys(mobileSubmenuOpenStates).forEach((key) => {
    mobileSubmenuOpenStates[key] = false;
  });
  if (intendedNewStateForClicked) mobileSubmenuOpenStates[submenuNameToToggle] = true;
};
const s_biw20khYPdM = () => {
  const [mobilemenutoggler] = useLexicalScope();
  mobilemenutoggler.isOpen.value = false;
};
const s_QoINhQ0SmCw = () => {
  _jsxBranch();
  const mobilemenutoggler = useMobileMenuToggler("dental-navbar-main");
  const activeDesktopSubmenuIndex = useSignal(-1);
  useContextProvider(ActiveDesktopSubmenuContext, activeDesktopSubmenuIndex);
  const mobileSubmenuOpenStates = useStore({});
  useVisibleTaskQrl(/* @__PURE__ */ _noopQrl("s_ZQ0Aa3K1seI", [
    mobileSubmenuOpenStates
  ]));
  useVisibleTaskQrl(/* @__PURE__ */ _noopQrl("s_YcV0wG7osGE", [
    mobileSubmenuOpenStates,
    mobilemenutoggler
  ]));
  const toggleMobileSubmenu$ = /* @__PURE__ */ inlinedQrl(s_0zbkfZDWW0I, "s_0zbkfZDWW0I", [
    mobileSubmenuOpenStates
  ]);
  const closeMobileMenuAndSubmenus$ = /* @__PURE__ */ inlinedQrl(s_biw20khYPdM, "s_biw20khYPdM", [
    mobilemenutoggler
  ]);
  return /* @__PURE__ */ _jsxC(Fragment$1, {
    children: /* @__PURE__ */ _jsxQ("nav", null, {
      id: "dental-navbar-main",
      class: "bg-white shadow-lg sticky top-0 z-50"
    }, [
      /* @__PURE__ */ _jsxQ("div", null, {
        class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      }, /* @__PURE__ */ _jsxQ("div", null, {
        class: "flex justify-between h-16"
      }, [
        /* @__PURE__ */ _jsxQ("a", null, {
          href: "/",
          class: "flex items-center",
          "aria-label": "DentaCare Homepage"
        }, /* @__PURE__ */ _jsxQ("div", null, {
          class: "flex-shrink-0 flex items-center"
        }, [
          /* @__PURE__ */ _jsxQ("div", null, {
            class: "w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-800 rounded-lg flex items-center justify-center"
          }, /* @__PURE__ */ _jsxC(LogoIcon, null, 3, "Qf_9"), 1, null),
          /* @__PURE__ */ _jsxQ("span", null, {
            class: "ml-3 text-xl font-bold text-blue-800"
          }, "DentaCare", 3, null)
        ], 1, null), 1, null),
        /* @__PURE__ */ _jsxQ("ul", null, {
          class: "hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-4"
        }, [
          menu.map((item, index) => /* @__PURE__ */ _jsxBranch(item.type === "link" ? /* @__PURE__ */ _jsxC(DentalNavLink, {
            ...item
          }, 0, `${item.name}-${index}`) : /* @__PURE__ */ _jsxC(DesktopSubmenuItem, {
            ...item,
            idx: index
          }, 0, `${item.name}-${index}`))),
          /* @__PURE__ */ _jsxQ("li", null, null, /* @__PURE__ */ _jsxQ("a", null, {
            href: "/rdv",
            class: "bg-gradient-to-r from-sky-500 to-blue-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 ml-4"
          }, "Prendre RDV", 3, null), 3, null)
        ], 1, null),
        /* @__PURE__ */ _jsxQ("div", null, {
          class: "md:hidden flex items-center"
        }, /* @__PURE__ */ _jsxQ("button", {
          onClick$: mobilemenutoggler.toggle
        }, {
          type: "button",
          class: "text-gray-700 hover:text-sky-500 focus:outline-none focus:text-sky-500 transition-colors duration-200 p-2",
          "aria-label": _fnSignal((p0) => p0.isOpen.value ? "Fermer le menu principal" : "Ouvrir le menu principal", [
            mobilemenutoggler
          ], 'p0.isOpen.value?"Fermer le menu principal":"Ouvrir le menu principal"'),
          "aria-expanded": _fnSignal((p0) => p0.isOpen.value, [
            mobilemenutoggler
          ], "p0.isOpen.value"),
          "aria-controls": "mobile-menu-content"
        }, mobilemenutoggler.isOpen.value ? /* @__PURE__ */ _jsxC(CloseIcon, null, 3, "Qf_10") : /* @__PURE__ */ _jsxC(MenuIcon, null, 3, "Qf_11"), 0, null), 1, null)
      ], 1, null), 1, null),
      /* @__PURE__ */ _jsxQ("div", {
        class: `md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${mobilemenutoggler.isOpen.value ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`
      }, {
        id: "mobile-menu-content"
      }, /* @__PURE__ */ _jsxQ("ul", null, {
        class: "px-2 pt-2 pb-3 space-y-1"
      }, [
        menu.map((item, index) => /* @__PURE__ */ _jsxBranch(item.type === "link" ? /* @__PURE__ */ _jsxC(DentalNavLink, {
          ...item,
          isMobile: true,
          onClick$: closeMobileMenuAndSubmenus$,
          [_IMMUTABLE]: {
            isMobile: _IMMUTABLE,
            onClick$: _IMMUTABLE
          }
        }, 0, `${item.name}-${index}-mobile`) : /* @__PURE__ */ _jsxC(MobileSubmenuItem, {
          ...item,
          get submenuName() {
            return item.name;
          },
          openStore: mobileSubmenuOpenStates,
          toggleSubmenu$: toggleMobileSubmenu$,
          closeMobileMenu$: closeMobileMenuAndSubmenus$,
          [_IMMUTABLE]: {
            submenuName: _wrapProp(item, "name"),
            openStore: _IMMUTABLE,
            toggleSubmenu$: _IMMUTABLE,
            closeMobileMenu$: _IMMUTABLE
          }
        }, 0, `${item.name}-${index}-mobile`))),
        /* @__PURE__ */ _jsxQ("li", null, {
          class: "pt-3"
        }, /* @__PURE__ */ _jsxQ("a", null, {
          href: "/rdv",
          class: "grid mx-4 my-2 bg-gradient-to-r from-sky-500 to-blue-800 text-white px-4 py-2 rounded-full text-center font-medium hover:shadow-lg transition-all duration-200",
          onClick$: closeMobileMenuAndSubmenus$
        }, "Prendre RDV", 3, null), 3, null)
      ], 1, null), 1, null)
    ], 1, null)
  }, 1, "Qf_12");
};
const Navbar = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_QoINhQ0SmCw, "s_QoINhQ0SmCw"));

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Dentiste Website Build by 🕊️</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", Footer, {})} </body></html>`;
}, "/mnt/data500/rr/DEV/dentistLanding/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto"> ${renderComponent($$result2, "HERO", $$Hero, {})} ${renderComponent($$result2, "ABOUTUS", $$Index$4, {})} ${renderComponent($$result2, "Specialisation", $$Index$3, {})} ${renderComponent($$result2, "ImageFixed", $$Image, {})} ${renderComponent($$result2, "How3", $$Index$1, {})} ${renderComponent($$result2, "Avis", Avis, {})} ${renderComponent($$result2, "Van", Van, {})} ${renderComponent($$result2, "Diagnostic", $$Index$2, {})} ${renderComponent($$result2, "Location", $$Index$5, {})} </div> ` })}`;
}, "/mnt/data500/rr/DEV/dentistLanding/src/pages/index.astro", void 0);

const $$file = "/mnt/data500/rr/DEV/dentistLanding/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
