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
    <footer class="bg-sky-500/50 text-white py-10 px-4 mt-12">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo & Description */}
        <div class="flex-1 mb-6 md:mb-0">
          <div class="flex items-center mb-3">
            <span class="bg-white rounded-full text-blue-800 font-bold text-xl w-10 h-10 flex items-center justify-center mr-2 shadow-lg">
              🦷
            </span>
            <span class="text-2xl font-bold tracking-wide">DentistePro</span>
          </div>
          <p class="text-sm opacity-80">
            Votre sourire, notre priorité. Cabinet dentaire moderne, soins
            personnalisés et équipements de pointe.
          </p>
        </div>

        {/* Liens rapides */}
        <div class="flex-1 mb-6 md:mb-0">
          <h5 class="font-semibold mb-3 text-lg">Liens rapides</h5>
          <ul class="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  class="hover:underline transition-opacity opacity-90"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div class="flex-1">
          <h5 class="font-semibold mb-3 text-lg">Contact</h5>
          <ul class="space-y-2 text-sm">
            {contactInfos.map((info, idx) => (
              <li key={idx} class="flex items-center">
                <span class="mr-2">{info.icon}</span>
                <span class="font-medium">{info.label} :</span> {info.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div class="border-t border-blue-800 mt-8 pt-6 text-center text-xs opacity-70">
        &copy; {currentYear.value} DentistePro. Tous droits réservés.
      </div>
    </footer>
  );
});
