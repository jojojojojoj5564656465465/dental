// dans votre page
import BeforeAfterSlider from './BeforeAfterSlider'
import { component$ } from '@builder.io/qwik'
export default component$(() => {
  return (
    <section class='results-section mx-auto'>
      <h2>Résultats de nos traitements</h2>
      <BeforeAfterSlider beforeImage={'src/assets/men.jpg'} afterImage={'src/assets/istockphoto.jpg'} />
    </section>
  )
})
