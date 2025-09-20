import {
  $,
  component$,
  createContextId,
  type Signal,
  useContext,
  useContextProvider,
  useSignal,
} from '@builder.io/qwik'
import { exampleContextStyle } from './content.css'
// Contexte pour gérer le thème (clair/sombre)
export const IDContext = createContextId<Signal<number | null>>('ID of Element')

export const Container = component$(() => {
  return (
    <section>
      <h1>The current ID is: {useContext(IDContext).value}</h1>
      <Item id={1} title='Title 1' icon='icon1' descrption='Description 1' />
      <Item id={2} title='Title 2' icon='icon2' descrption='Description 2' />
      <Item id={3} title='Title 3' icon='icon3' descrption='Description 3' />
      <Item id={4} title='Title 4' icon='icon4' descrption='Description 4' />
      <Item id={5} title='Title 5' icon='icon5' descrption='Description 5' />
      <Item id={6} title='Title 6' icon='icon6' descrption='Description 6' />
    </section>
  )
})

const Item = component$<{
  id: number | null
  title: string
  icon: string
  descrption: string
}>(props => {
  const localId = useSignal<number | null>(props.id)
  useContextProvider(IDContext, localId)

  const updateContext = $((): void => {
    useContextProvider(IDContext, localId)
  })
  const isOpen: boolean = useContext(IDContext) === localId
  return (
    <button
      class={isOpen ? exampleContextStyle.Open : exampleContextStyle.Close}
      type='button'
      onClick$={updateContext}
    >
      Theme is {props.id}
    </button>
  )
})
