/** biome-ignore-all lint/a11y/noRedundantAlt: <explanation> */
import {
  component$,
  type PropFunction,
  useStylesScoped$,
} from "@builder.io/qwik";

interface DentistCardProps {
  name: string;
  specialty: string;
  description: string;
  imageUrl: string;
  appointmentLink: string;
  buttonText?: string;
  onAppointmentClick?: PropFunction<() => void>;
}

export default component$<DentistCardProps>((props) => {
  useStylesScoped$(`
    .clippy {
      clip-path: polygon(0 0, 100% 0, 100% 70%, 0% 100%);
    }
    
    .plus-button {
      position: absolute;
      bottom: 1.5rem;
      right: 1.5rem;
      width: 4rem;
      height: 4rem;
      background: #10b981;
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
  `);

  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg font-sans h-full flex flex-col">
      <div class="relative flex-shrink-0">
        <img
          class="w-full clippy h-48 object-cover"
          src={props.imageUrl}
          alt={`Photo de ${props.name}`}
          width={400}
          height={300}
          loading="lazy"
        />
        <div class="clippy absolute bottom-0 left-0 top-0 right-0 bg-blue-700 bg-opacity-50 p-4 text-white flex flex-col justify-end items-center">
          {/* Zone pour un badge ou un texte personnalisé */}
        </div>
        <div class="plus-button">+</div>
      </div>

      <div class="pt-3 pb-5 px-5 flex flex-col items-center flex-grow justify-between">
        <div class="flex flex-col items-center text-center">
          <p class="font-bold text-3xl">{props.name}</p>
          <p class="text-gray-500 mb-2">{props.specialty}</p>
          <p class="text-center mb-4 flex-grow">{props.description}</p>
        </div>

        {/* Bouton avec balise <a> standard */}
        <a
          href={props.appointmentLink}
          class="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 no-underline"
          onClick$={props.onAppointmentClick}
          preventdefault:click
        >
          {props.buttonText || "Prendre rendez-vous"}
        </a>
      </div>
    </div>
  );
});
