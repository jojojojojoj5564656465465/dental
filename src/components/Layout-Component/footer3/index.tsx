import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos Services", href: "/services" },
  { label: "Notre Équipe", href: "/equipe" },
  { label: "Contact", href: "/contact" },
  { label: "Prendre rendez-vous", href: "/rdv" },
];

const contactInfos = [
  {
    label: "Adresse",
    icon: "📍",
    value: "123 Avenue du Sourire, 75000 Paris",
  },
  {
    label: "Téléphone",
    icon: "📞",
    value: (
      <a href="tel:0123456789" class="hover:underline">
        01 23 45 67 89
      </a>
    ),
  },
  {
    label: "Email",
    icon: "✉️",
    value: (
      <a href="mailto:contact@dentistepro.fr" class="hover:underline">
        contact@dentistepro.fr
      </a>
    ),
  },
  {
    label: "Horaires",
    icon: "⏰",
    value: "Lun - Ven : 9h - 19h",
  },
];

export default component$(() => {
  const currentYear = useSignal<number>(2024);

  useVisibleTask$(() => {
    currentYear.value = new Date().getFullYear();
  });

  return (
    <footer class="bg-sky-500/50 border-t border-sky-100 text-white px-4 py-5 text-sm mt-xxl">
      <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
        {/* Logo & Description */}
        <div>
          <div class="flex items-center mb-2">
            <span class="rounded-full text-sky-600 text-xl w-8 h-8 flex items-center justify-center mr-2 border border-sky-300 bg-sky-50">
              🦷
            </span>
            <span class="text-lg font-semibold tracking-wide">DentistePro</span>
          </div>
          <p class="text-xs text-sky-700/80 leading-snug">
            Votre sourire, notre priorité.
            <br />
            Soins personnalisés et équipements de pointe.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h5 class="font-semibold mb-2 text-sky-800 text-base">
            Liens rapides
          </h5>
          <ul class="space-y-1">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  class="hover:underline hover:text-sky-600 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 class="font-semibold mb-2 text-sky-800 text-base">Contact</h5>
          <ul class="space-y-1">
            {contactInfos.map((info, idx) => (
              <li key={idx} class="flex items-start gap-1">
                <span class="text-lg">{info.icon}</span>
                <span>
                  <span class="font-medium">{info.label} :</span> {info.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div class="mt-6 border-t border-sky-100 pt-4 text-center text-xs text-blue-950">
        &copy; {currentYear.value} DentistePro. Tous droits réservés.
      </div>
    </footer>
  );
});
