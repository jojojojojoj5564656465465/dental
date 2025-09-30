import { component$, useStylesScoped$ } from '@builder.io/qwik'
import { containerGridMaxColumn } from '@recipe'

import { assignInlineVars } from '@vanilla-extract/dynamic'
import Couverture_doc1 from 'src/assets/Doctors/cov-doc1.webp?jsx'
import Couverture_doc2 from 'src/assets/Doctors/cov-doc2.jpg?jsx'
import Couverture_doc3 from 'src/assets/Doctors/cov-doc3.webp?jsx'

import img_doc1 from 'src/assets/Doctors/doc1.webp?jsx'
import img_doc2 from 'src/assets/Doctors/doc2.webp?jsx'
import img_doc3 from 'src/assets/Doctors/doc3.webp?jsx'

import { overlay } from 'src/components/HOME/4-imageFilter/image.css.ts'
import { imgUrl, photoPortraitDoctor } from './index.css.ts'

interface DentistCardProps {
  name: string
  specialty: string
  description: string
  imageUrl: any
  appointmentLink: string
  buttonText?: string
  imagePortrait: any
}
const dentists: DentistCardProps[] = [
  {
    name: 'Hawa TIMERA',
    specialty: 'Endodontiste',
    description:
      'Spécialiste des traitements de canal et de la préservation dentaire. Technologies de pointe pour votre confort.',
    imageUrl: Couverture_doc1,
    appointmentLink: 'https://www.doctolib.fr/dentiste/courbevoie/hawa-timera-paris',

    imagePortrait: img_doc1,
  },
  {
    name: 'Alexandra Bartoli',
    specialty: 'Dentiste Esthétique',
    description:
      "Passionnée par l'esthétique dentaire : facettes, blanchiment, smile design. Révélez votre plus beau sourire.",
    imageUrl: Couverture_doc2,
    appointmentLink:
      'https://www.doctolib.fr/dentiste/courbevoie/alexandra-bartoli?utm_campaign=google-maps&utm_content=courbevoie&utm_medium=organic&utm_source=google&utm_term=dentiste',

    imagePortrait: img_doc2,
  },
  {
    name: 'Stéphane Hayat',
    specialty: 'Dentiste Généraliste',
    description:
      'Soins dentaires complets pour toute la famille. Prévention, soins et urgences avec une approche bienveillante.',
    imageUrl: Couverture_doc3,
    appointmentLink: 'https://www.doctolib.fr/dentiste/courbevoie/stephane-hayat',

    imagePortrait: img_doc3,
  },
]
const ItemDentistsCard = component$<DentistCardProps>(props => {
  useStylesScoped$(`
    .overlays {
  border-image: fill 0 linear-gradient(#0003,#000); 
  }

    .clippy {
      clip-path: polygon(0 0, 100% 0, 100% 70%, 0% 100%);
    }
    
    .plus-button {
      position: absolute;
      bottom: 1.5rem;
      right: 1.5rem;
      width: 4rem;
      height: 4rem;
      
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 2.25rem;
      font-weight: 100;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      transition: all 0.3s ease;
    }
    
    .plus-button:hover {
      transform: scale(1.1);
      box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.6);
    }
  `)

  return (
    <div class={['rounded overflow-hidden shadow-lg font-sans h-full flex flex-col w-full ']}>
      <div class='relative flex-shrink-0 '>
        <img
          class={[overlay, 'w-full clippy h-48 object-cover ']}
          src={props.imageUrl}
          alt={`img de ${props.name}`}
          width={400}
          height={300}
          loading='lazy'
        />
        <div class='clippy absolute inset-0   bg-opacity-10 p-4 text-white flex flex-col justify-end items-center'>
          {/* Zone pour un badge ou un texte personnalisé */}
        </div>
        <div
          class={[photoPortraitDoctor, 'plus-button']}
          style={assignInlineVars({
            [imgUrl]: `url(${props.imagePortrait})`,
          })}
        ></div>
      </div>

      <div class='pt-3 pb-5 px-5 flex flex-col items-center flex-grow justify-between'>
        <div class='flex flex-col items-center text-center'>
          <p class='font-bold text-3xl'>{props.name}</p>
          <p class='text-gray-500 mb-8 pb-3 md:pb-9'>{props.specialty}</p>
          <p class='text-center mb-4 flex-grow'>{props.description}</p>
        </div>

        {/* Bouton avec balise <a> standard */}
        <a
          href={props.appointmentLink}
          target='_blank'
          rel='noopener noreferrer'
          class='my-5 bg-green-900 hover:bg-green-500 text-white font-bold py-2 md:py-3 px-6 rounded-full transition duration-300 no-underline'
        >
          Doctolib
        </a>
      </div>
    </div>
  )
})

export default component$(() => {
  return (
    <section
      class={containerGridMaxColumn({
        size: 'medium',
        maxColumn: 4,
        background: true,
        gap: 'sm',
        paddingBlock: 'md',
      })}
    >
      {dentists.map((dentist, index) => (
        <ItemDentistsCard key={index} {...dentist} />
      ))}
    </section>
  )
})
