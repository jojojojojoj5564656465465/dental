import { component$, useComputed$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import D from './data.ts'
import { Card, Card_content, wrapper } from './vanity.css.ts'
interface Props {
  title: number
  symbol: string
  subtitle: string
  text: string
}

const CardEl = component$<Props>(({ title, symbol, subtitle, text }) => {
  const numberSignal = useSignal<number>(0)
  const duration = 2000 // Durée totale de l'animation en ms
  const startValue = 0
  const endValue = title
  const startTime = useSignal<number | null>(null)
  const formattedValue = useComputed$(() => {
    return numberSignal.value.toLocaleString()
  })

  useVisibleTask$(({ cleanup }) => {
    let animationFrameId: number

    const animate = (timestamp: number) => {
      if (!startTime.value) startTime.value = timestamp
      const progress = timestamp - startTime.value
      const progressRatio = Math.min(progress / duration, 1) // Limite à 1
      numberSignal.value = Math.floor(progressRatio * (endValue - startValue) + startValue)

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    cleanup(() => {
      cancelAnimationFrame(animationFrameId)
    })
  })

  return (
    <div class={Card}>
      <h3 class={Card_content.title}>
        {formattedValue.value}
        {symbol}
      </h3>
      <h6 class={Card_content.subtitle}>{subtitle}</h6>
      <hr class={Card_content.hr} />
      <p class={Card_content.text}>{text}</p>
    </div>
  )
})

export default component$(() => {
  return (
    <section class={wrapper}>
      {D.map((e, index) => (
        <CardEl key={index} text={e.text} symbol={e.symbol} subtitle={e.subtitle} title={e.title} />
      ))}
    </section>
  )
})
