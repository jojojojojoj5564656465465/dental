import { createContainer, globalStyle, style } from "@vanilla-extract/css";

export const socialNetwork = createContainer();

export const ContainerQuery = style({
  containerName: socialNetwork,
  containerType: "inline-size",
});

export const noShow = style({
  "@container": {
    [`${socialNetwork} (max-width:470px)`]: {
      display: "none",
    },
  },
});
export const DivSocialNetwork = style({
  display: "grid",
  "@container": {
    [`${socialNetwork} (min-width:400px)`]: {
      marginInline: "10",
      display: "flex",
      flexDirection: "row",
    },
  },
});
