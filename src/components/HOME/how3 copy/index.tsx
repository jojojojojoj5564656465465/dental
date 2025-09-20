/* src/components/HOME/howItWorks/HowItWorks.tsx */
import { component$ } from '@builder.io/qwik'
import { Accordion, AccordionItem } from './accordion'
import { ItemProps } from './accordion'

export default component$(() => {
  const data: ItemProps[] = [
    {
      title: 'Prendre rendez‑vous',
      icon: 'url(/src/assets/icons/icon-how-it-work-1.svg)',
      description:
        'Prenez rendez‑vous facilement en ligne ou par téléphone. Notre équipe vous proposera un créneau adapté à votre emploi du temps.',
    },
    {
      title: 'Tiers Payant',
      icon: 'url(/src/assets/icons/icon-how-it-work-2.svg)',
      description: 'Bénéficiez du tiers payant pour la plupart des soins. Aucun débours au cabinet.',
    },
    {
      title: 'Soins experts',
      icon: 'url(/src/assets/icons/icon-how-it-work-3.svg)',
      description: 'Recevez des soins dentaires experts dans un environnement moderne et accueillant.',
    },
  ]

  return (
    <Accordion>
      {data.map((item, i) => (
        <AccordionItem key={i} index={i} title={item.title} icon={item.icon}>
          {item.description}
        </AccordionItem>
      ))}
    </Accordion>
  )
})
