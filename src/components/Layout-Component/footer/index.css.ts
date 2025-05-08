import { ContainerQuery } from "./SocialNetwork/containerQuerry.css";
import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { media, space } from "@styles/token";

export const base = style({
  backgroundColor: "purple",
});
export const eachDiv = styleVariants({
  first: [
    base,
    {
      gridColumn: "1 / 2",
      "@media": {
        [media.tablet]: {
          gridColumn: "1 / 3",
        },
      },
    },
  ],
  third: [base, ContainerQuery, { placeContent: "center" }],
});

export const Footer = style({
  marginTop: "auto",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: space.xxxs,
  color: "white",
  "@media": {
    [media.lg]: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: space.sm,
    },
    [media.tablet]: {
      gridTemplateColumns: "repeat(2,1fr)",
    },
  },
});

export const footerDescription = style({
  gridColumn: "1 / 2",
  backgroundColor: "orangered",
  "@media": {
    [media.tablet]: {
      gridColumn: "1 / 3",
    },
  },
});

globalStyle(`${Footer} h4`, {
  marginBlockEnd: space.xs,
  textDecoration: "underline",
  "@media": {
    [media.mobile]: {
      marginBlockEnd: "0.1em",
    },
    [media.tablet]: {
      marginBlockEnd: "0.5em",
    },
  },
});

globalStyle(`${eachDiv.third} span`, {
  paddingBlock: space.xxs,
  "@media": {
    [media.md]: {
      paddingBlock: space.xxs,
    },
  },
});

export const address = style({
  backgroundColor: "orange",
  selectors: {
    "&:before": {
      marginInlineEnd: 10,
      content: "📍",
      "@media": {
        [media.mobile]: {
          marginInlineEnd: 4,
        },
      },
    },
  },
});
