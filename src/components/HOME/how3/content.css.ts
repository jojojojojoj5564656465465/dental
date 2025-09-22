// /home/tom/Documents/DEV/dentistLanding/src/components/HOME/howItWorks/content.css.ts

import { container, textRecipe as R } from '@recipe'
import { createVar, keyframes, style, styleVariants } from '@vanilla-extract/css'
import { color } from 'src/styles/utils/themeNew.css.ts'

// Animation pour le changement de couleur progressif
const changeColor = keyframes({
  '0%': {
    background: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 0%)',
  },
  '25%': {
    background: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 25%)',
  },
  '50%': {
    background: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 50%)',
  },
  '75%': {
    background: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 75%)',
  },
  '100%': {
    background: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 100%)',
  },
})

// Container principal pour la liste
export const ul = style({
  paddingInline: 0,
  marginInline: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 35,
  justifyItems: 'stretch',
})

// Background image pour la section
export const bgImage = style({
  backgroundImage: 'url(/src/assets/istockphoto.jpg)',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'repeat',
})

// Wrapper principal pour chaque élément de liste
export const liWrapper = style([
  container({ theme: 'whiteLD', background: true }),
  {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    gridTemplateRows: 'auto auto',
    gap: '10px',
    padding: '15px',
    border: '2px solid oklch(0.8 0.0345 261.53)',
    borderRadius: '5px',
    width: '100%',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.3s ease',
    height: 'auto',
    selectors: {
      '&:hover': {
        borderColor: color.theme.accent,
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      '&:has(+li):before': {
        content: '',
        width: '100%',
        backgroundColor: color.theme.accent,
        bottom: '-25px',
        height: '5px',
        position: 'absolute',
        left: 0,
      },
      '&:hover:has(+li):before': {
        animationName: changeColor,
        animationDuration: '4s',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
      },
    },
  },
])

// Header de chaque élément (titre + icône + indicateur)
export const liHeader = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  gridColumn: '1 / -1',
  gridRow: '1 / 2',
  gap: '10px',
  alignItems: 'center',
  cursor: 'pointer',
  width: '100%',
  background: color.theme.secondary,
  border: 'none',
  padding: 0,
  textAlign: 'left',
})

// Variable CSS pour l'icône dynamique
export const myContent = createVar({
  syntax: '<string>',
  initialValue: 'url(src/assets/icons/icon-how-it-work-1.svg)',
  inherits: false,
})

// Checkbox cachée pour la logique d'accordéon
export const hiddenCheckbox = style({
  position: 'absolute',
  opacity: 0,
  pointerEvents: 'none',
})
export const notificationBase = style({
  gridColumn: '3 / 4',
  fontSize: '24px',
  fontWeight: 'bold',
  color: color.theme.accent,
  transition: 'transform 0.3s ease, color 0.3s ease',

  selectors: {
    [`${liWrapper}:hover &`]: {
      transform: 'scale(1.1)',
      color: color.theme.primary,
    },
  },
})
// Variants pour les différents éléments
export const li_content = styleVariants({
  // Titre avec icône
  txt1: [
    R({ font: 'highLight' }),
    {
      gridColumn: '2 / 3',
      marginInlineStart: '0rem',
      display: 'flex',
      alignItems: 'center',
      fontWeight: 'bold',
      color: color.theme.primary,
      gap: '1rem',
      ':before': {
        content: myContent,
        marginInlineEnd: '1rem',
        width: '24px',
        height: '24px',
        display: 'inline-block',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
    },
  ],
  // Indicateur fermé (+)
  notificationClosed: [
    notificationBase,
    {
      ':after': {
        content: '+',
      },
    },
  ],

  // Indicateur ouvert (-)
  notificationOpen: [
    notificationBase,
    {
      ':after': {
        content: '-',
      },
    },
  ],

  // Contenu fermé
  txtClose: [
    {
      backgroundColor: 'pink',
      margin: '0px',
      gridColumn: '1 / -1',
      gridRow: '2 / 3',
      maxHeight: '0px',
      opacity: 0,
      overflow: 'hidden',
      padding: '0px',
      transition: 'max-height 0.4s ease-out, opacity 0.4s ease-out, padding 0.4s ease-out',
    },
  ],

  // Contenu ouvert
  txt2Open: [
    R({ font: 'text' }),
    {
      gridColumn: '1 / -1',
      gridRow: '2 / 3',
      maxHeight: '100px', // 👈 CHANGÉ DE height → maxHeight
      opacity: 1, // 👈 AJOUTÉ
      overflow: 'hidden',
      padding: '15px',
      transition: 'max-height 0.4s ease-out, opacity 0.4s ease-out, padding 0.4s ease-out',
      color: color.theme.secondary,
      lineHeight: '1.6',
      marginTop: '10px',
      borderTop: `1px solid ${color.theme.divider}`,
    },
  ],
})

// Style de base pour les icônes (si nécessaire)
export const iconBase = style({
  gridColumn: '1 / 2',
  padding: '10px',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
})
