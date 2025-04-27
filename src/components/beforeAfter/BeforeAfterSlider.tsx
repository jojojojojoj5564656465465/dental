// components/BeforeAfterSlider.tsx
import { $, component$, useOn, useSignal, useStylesScoped$, useVisibleTask$ } from '@builder.io/qwik'
import styles from './BeforeAfterSlider.css?inline'
import * as v from 'valibot'

interface Props {
  beforeImage: string
  afterImage: string
}
export const beforeAfterSliderSchema = v.object({
  beforeImage: v.string(),
  afterImage: v.string(),
})
export default component$<Props>(Props => {
  const PropsValidated = v.parse(beforeAfterSliderSchema, Props)
  const sliderPosition = useSignal(20)
  const containerRef = useSignal<HTMLDivElement>()
  const isDragging = useSignal(false)

  // Gestion du mouvement du slider
  const handleMove = $((e: MouseEvent | TouchEvent) => {
    if (!isDragging.value || !containerRef.value) return

    const rect = containerRef.value.getBoundingClientRect()
    const x = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX
    const position = ((x - rect.left) / rect.width) * 100

    sliderPosition.value = Math.max(0, Math.min(100, position))
  })

  // Début du drag
  const startMove = $(() => {
    isDragging.value = true
  })

  // Fin du drag
  const stopMove = $(() => {
    isDragging.value = false
  })

  useStylesScoped$(styles)

  // Écouteurs d'événements seulement sur le composant
  useOn('mousemove', handleMove)
  useOn('touchmove', handleMove)
  useOn('mouseup', stopMove)
  useOn('touchend', stopMove)

  // Initialisation
  useVisibleTask$(({ cleanup }) => {
    if (!containerRef.value) return

    const container = containerRef.value

    container.addEventListener('mousedown', startMove)
    container.addEventListener('touchstart', startMove)

    cleanup(() => {
      container.removeEventListener('mousedown', startMove)
      container.removeEventListener('touchstart', startMove)
    })
  })

  return (
    <div class='before-after-container' ref={containerRef}>
      <div class='before-image'>
        <img
          src={PropsValidated.beforeImage}
          alt='Sourire avant traitement dentaire'
          width={600}
          height={400}
          loading='lazy'
        />
      </div>

      <div class='after-image' style={{ width: `${sliderPosition.value}%` }}>
        <img
          src={PropsValidated.afterImage}
          alt='Sourire après traitement dentaire'
          width={600}
          height={400}
          loading='lazy'
        />
      </div>

      {/** biome-ignore lint/a11y/useFocusableInteractive: <explanation> */}
      <div
        class='slider-handle'
        style={{ left: `${sliderPosition.value}%` }}
        aria-valuenow={sliderPosition.value}
        aria-valuemin={0}
        aria-valuemax={100}
        role='slider'
      >
        <div class='slider-arrow left'>◀</div>
        <div class='slider-arrow right'>▶</div>
      </div>
    </div>
  )
})
