import { fluid } from "src/styles/utils/utils.ts";
import { containerGrid, textRecipe } from "@recipe";

import { media, space } from "@styles/token";
import { createVar, style, styleVariants } from "@vanilla-extract/css";

/**
 * WRAPPER DE LA PAGE INDEX
 */
export const wrapperIndex = style([
  containerGrid({ cols: 2, size: "medium" }),

  {
    // border: `${color.theme.primary} 5px solid`,
    gap: fluid(10, 50),
    "@media": {
      "(width< 846px)": {
        gridTemplateColumns: "1fr",
      },
    },
  },
]);

/**
 * Content File
 */
export const content__wrapper = style({
  //inlineSize: '100%',
  minInlineSize: 300,
  marginTop: 10,
  zIndex: 2,
  alignSelf: "center",
  display: "grid",
  gap: fluid(10, 50),
});

const liSizeMask = createVar({
  syntax: "<length>",
  inherits: true,
  initialValue: "24px",
});

export const text = styleVariants({
  ul: [
    {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(9.40rem,1fr))",
      gap: space.xs,
    },
  ],
  li: [
    textRecipe({ font: "highLight" }),
    {
      display: "flex",
      alignItems: "center",
      listStyle: "none",
      // ":before": {
      // 	width: liSizeMask,
      // 	height: liSizeMask,
      // 	marginInlineEnd: "min(5px + 1vw, 10px)",
      // 	display: "inline",
      // 	backgroundSize: "cover",
      // 	fill: "darkgreen",
      // 	content: "",
      // 	backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="red" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="%231C274C" stroke-width="1.5"/><path stroke="%231C274C" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.5 12.5 2 2 5-5"/></svg>')`,
      // 	//
      // 	//
      // 	//
      // 	//
      // 	//
      // 	// maskImage: 'public/check.svg',
      // 	maskSize: "contain",
      // 	maskRepeat: "no-repeat",
      // 	maskPosition: "center", // Utilisera la couleur du texte (rouge)
      // },
    },
  ],
});

/**
 * Composant de Gauche pour les images qui se
 * @MARK: IMAGES LEFT
 */

const numberOfCc = createVar({
  initialValue: "6",
  inherits: true,
  syntax: "<integer>",
});
export const newImageGrid_Wrapper = style({
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
        [numberOfCc]: "7",
      },
    },
    [media.md]: {
      vars: {
        [numberOfCc]: "9",
      },
    },
  },
});
export const carreImage = createVar({
  syntax: "<string>",
  initialValue: "",
  inherits: false,
});
export const rectangleImage = createVar({
  syntax: "<string>",
  initialValue: "",
  inherits: false,
});
const baseImageStyle = style({
  borderRadius: "20px",
  border: "10px solid white",
  backgroundPosition: "center",
});
export const newImageGrid = styleVariants({
  square: [
    baseImageStyle,
    {
      gridArea: "1 / 1 / 7 / 7",
      backgroundImage: carreImage,
    },
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
          gridArea: "6 / 4 / -1 / -1",
        },
      },
    },
  ],
});
