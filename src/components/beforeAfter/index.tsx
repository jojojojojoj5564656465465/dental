// dans votre page
import BeforeAfterSlider from './BeforeAfterSlider'
import { component$ } from '@builder.io/qwik'
export default component$(() => {
  return (
    <section class='results-section'>
      <h2>Résultats de nos traitements</h2>
      <BeforeAfterSlider />
    </section>
  )
})
