// components/BeforeAfterSlider.tsx
import { component$, useSignal, useVisibleTask$, useStylesScoped$ } from '@builder.io/qwik'
import styles from './BeforeAfterSlider.css?inline'

export default component$(() => {
  const sliderPosition = useSignal(50)
  const containerRef = useSignal<HTMLDivElement>()

  useStylesScoped$(styles)

  useVisibleTask$(({ cleanup }) => {
    if (!containerRef.value) return

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!containerRef.value) return

      const rect = containerRef.value.getBoundingClientRect()
      const x = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX
      const position = ((x - rect.left) / rect.width) * 100

      sliderPosition.value = Math.max(0, Math.min(100, position))
    }

    const startMove = (e: MouseEvent | TouchEvent) => {
      e.preventDefault()
      document.addEventListener('mousemove', handleMove)
      document.addEventListener('touchmove', handleMove)
      document.addEventListener('mouseup', stopMove)
      document.addEventListener('touchend', stopMove)
    }

    const stopMove = () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('touchmove', handleMove)
      document.removeEventListener('mouseup', stopMove)
      document.removeEventListener('touchend', stopMove)
    }

    containerRef.value.addEventListener('mousedown', startMove)
    containerRef.value.addEventListener('touchstart', startMove)

    cleanup(() => {
      if (containerRef.value) {
        containerRef.value.removeEventListener('mousedown', startMove)
        containerRef.value.removeEventListener('touchstart', startMove)
      }
      stopMove()
    })
  })

  return (
    <div class='before-after-container' ref={containerRef}>
      <div class='before-image'>
        <img src='src/assets/men.jpg' alt='Sourire avant traitement dentaire' width='600' height='400' />
      </div>

      <div class='after-image' style={{ width: `${sliderPosition.value}%` }}>
        <img src='src/assets/istockphoto.jpg' alt='Sourire après traitement dentaire' width='600' height='400' />
      </div>

      <div class='slider-handle' style={{ left: `${sliderPosition.value}%` }}>
        <div class='slider-arrow left'>◀</div>
        <div class='slider-arrow right'>▶</div>
      </div>
    </div>
  )
})
