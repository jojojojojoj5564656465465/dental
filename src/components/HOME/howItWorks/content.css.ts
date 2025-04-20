import { keyframes, style, styleVariants } from "@vanilla-extract/css";
import { container, textRecipe as R } from "../../../../../qwikDentist/src/styles/recipe";
import { color } from "../../../../../qwikDentist/src/styles/utils/themeNew.css";

const changeColor = keyframes"0%" "0%": {
    backgro"linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 0%)"5, 1) 0%)",
  },
  "5%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 5%)",
  },
  "10%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 10%)",
  },
  "15%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 15%)",
  },
  "20%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 20%)",
  },
  "25%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 25%)",
  },
  "30%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 30%)",
  },
  "35%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 35%)",
  },
  "40%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 40%)",
  },
  "45%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 45%)",
  },
  "50%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 50%)",
  },
  "55%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 55%)",
  },
  "60%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 60%)",
  },
  "65%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 65%)",
  },
  "70%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 70%)",
  },
  "75%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 75%)",
  },
  "80%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 80%)",
  },
  "85%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 85%)",
  },
  "90%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 90%)",
  },
  "95%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 95%)",
  },
  "100%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 100%)",
  },
});

export const liWrapper = style([
  container({ theme: "whiteBg", background: true }),
  {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto", // Remplacez par ces proportions plus logiques
    gridTemplateRows: "auto auto", // Définissez explicitement les rangées
    gap: "10px",
    padding: "15px",
    border: "2px solid oklch(0.8 0.0345 261.53)",
    borderRadius: "5px",
    width: "100%", // Utilisez width au lieu de minInlineSize pour plus de compatibilité
    cursor: "pointer",

    selectors: {
      "&:has(+li):before": {
        content: "",
        width: "100%", // Utilisez width au lieu de inlineSize
        backgroundColor: color.theme.accent,
        bottom: "-25px",
        height: "5px", // Utilisez height au lieu de blockSize
        position: "absolute",
        left: 0,
      },
      "&:hover:has(+li):before": {
        animationName: changeColor,
        animationDuration: "4s",
        animationIterationCount: "infinite",

        animationDirection: "alternate",
      },
    },
  },
]);
export const bgImage = style({
  backgroundImage: "url(/src/assets/istockphoto.jpg)",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "repeat-x",
});
export const ul = style({
  paddingInline: 0,
  marginInline: 20,
  display: "flex",
  flexDirection: "column",
  gap: 35,
  justifyItems: "stretch",
});

export const liHeader = style({
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  gridColumn: "1 / -1", // Couvre toutes les colonnes du parent
  gridRow: "1 / 2",
  gap: "10px",
  alignItems: "center",
});

export const li_content = styleVariants({
  ico: {
    gridColumn: "1 / 2",
    //backgroundColor: 'pink',
    padding: "10px",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
  txt1: [
    R({ font: "highLight" }),
    {
      gridColumn: "2 / 3",

      marginInlineStart: "1rem",
    },
  ],
  notification: [
    {
      gridColumn: "3 / 4",
      ":after": {
        content: "+",
      },
      selectors: {
        [`${liWrapper}:hover &:after`]: {
          content: "-",
        },
        [`${liWrapper}:active &:after`]: {
          content: "-",
        },
        [`${liWrapper}:focus &:after`]: {
          content: "-",
        },
      },
    },
  ],
  notificationOpen: [
    {
      gridColumn: "3 / 4",
      ":after": {
        content: "-",
      },
    },
  ],
  txt2: [
    R({ font: "text" }),
    {
      gridColumn: "1 / -1", // Couvre toutes les colonnes
      gridRow: "2 / 3",
      transition: "max-height 0.5s ease, opacity 0.5s ease",
      maxHeight: "0",
      opacity: "0",
      overflow: "hidden",
      selectors: {
        [`${liWrapper}:hover &`]: {
          maxHeight: "1200px",
          opacity: "1",
        },
        [`${liWrapper}:active &`]: {
          maxHeight: "600px",
          opacity: "1",
        },
      },
    },
  ],
  txt2Open: [
    R({ font: "text" }),
    {
      gridColumn: "1 / -1", // Couvre toutes les colonnes
      gridRow: "2 / 3",
      transition: "max-height 0.5s ease, opacity 0.5s ease",
      overflow: "hidden",
      maxHeight: "300px",
      opacity: "1",
    },
  ],
});

export const iconBase = style({
  gridColumn: "1 / 2",
  padding: "10px",
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
});
