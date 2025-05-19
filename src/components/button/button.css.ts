import { color } from "@theme";
import { fontSize, media } from "@styles/token";
import { fluid } from "src/styles/utils/utils.ts";
import {
  createContainer,
  createVar,
  globalStyle,
  style,
} from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const heightButton = createVar({
  syntax: "<length>",
  inherits: false,
  initialValue: "65px",
});

export const marginInlineCustom = createVar({
  syntax: "<length>",
  inherits: false,
  initialValue: "50px",
});

/**
 * MARK: BUTTON
 */
const buttonContainer = createContainer();

export const buttonCallToAction = style([
  // container({ theme: 'accent', background: true, hover: true }),
  color.theme.accent,
  {
    "@container": {
      [`${buttonContainer} (width < 11rem)`]: {
        display: "grid",
        justifyContent: "center",
        placeItems: "center",
        //backgroundColor: color.theme.accent,
      },
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
      content: "",
    },
    backgroundColor: color.variable.accent,
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
    cursor: "pointer", // ou une autre valeur appropriée
    overflow: "hidden",
    verticalAlign: "center",
    color: color.theme.text,
    selectors: {
      "&:hover::before": {
        left: 0,
        color: color.variable.accent,
      },
    },
    ":hover": {
      zIndex: "23",
      color: color.variable.accent,
    },
    containerName: buttonContainer,
    containerType: "inline-size",
  },
]);

const sizeFontSize = createVar({
  inherits: true,
  syntax: "<length>",
  initialValue: "1.6rem",
});

export const buttonCallToAction_icon = style({
  "@container": {
    [`${buttonContainer} (width < 11rem)`]: {
      display: "none",
    },
  },
  "@media": {
    [media.md]: {
      vars: {
        [sizeFontSize]: "2.5rem",
      },
    },
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
  backgroundColor: color.theme.background,
  color: color.theme.textHover,
  ":hover": {
    transform: "rotate(85deg)",
  },
});
globalStyle(`${buttonCallToAction} > a`, {
  textDecoration: "none",
});
