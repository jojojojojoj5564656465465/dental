import { createVar, style } from '@vanilla-extract/css'

export const imgUrl = createVar()

export const photoPortraitDoctor = style({
  // objectFit: 'contain', // Cette propriété est pour les <img>, pas pour les background-image
  borderRadius: '50%', // Assure que le conteneur est un cercle parfait
  backgroundImage: imgUrl,
  backgroundPosition: 'center', // Centre l'image horizontalement et verticalement
  backgroundSize: 'cover', // Redimensionne l'image pour qu'elle soit entièrement visible dans le conteneur
  backgroundRepeat: 'no-repeat', // Empêche la répétition de l'image si elle est plus petite que le conteneur
})
