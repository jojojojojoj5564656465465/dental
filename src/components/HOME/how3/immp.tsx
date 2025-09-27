import { type Component, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'

// Vérifiez bien la configuration de Vite pour transformer les SVG en composants
const metaGlobComponents = await import.meta.glob('/src/assets/icons/*?component', {
  import: 'default',
})

export default component$(() => {
  return (
    <div>
      <MetaGlobExample name='icon-how-it-work-1' />
      <MetaGlobExample name='icon-how-it-work-2' />
      <MetaGlobExample name='icon-how-it-work-3' />
    </div>
  )
})

export const MetaGlobExample = component$<{ name: string }>(({ name }) => {
  const MetaGlobComponent = useSignal<Component<any> | null>(null)
  const componentPath = `/src/assets/icons/${name}.svg?component`

  useVisibleTask$(async () => {
    try {
      const comp = await metaGlobComponents[componentPath]()
      MetaGlobComponent.value = comp as Component<any>
    } catch (error) {
      console.error(`Failed to load icon: ${name}`, error)
    }
  })

  return (
    <>
      <h1 class='text-red-600 bg-green-200'>TESTTTTT</h1>
      {MetaGlobComponent.value ? <MetaGlobComponent.value /> : <div>Loading icon...</div>}
    </>
  )
})
