import { component$ } from '@builder.io/qwik'
import Navbar from './Navbar'

export default component$(() => {
  return (
    <>
      <Navbar />
      <main class='p-4'>
        <h1 class='text-2xl font-bold'>Bienvenue sur mon site</h1>
      </main>
    </>
  )
})
