import { Head } from '@inertiajs/react'
import Hero from '~/pages/Home/components/Hero/Hero'
import LayoutUser from '~/Layout/LayoutUser'
import ButtonsContainer from './components/ButtonsContainer/ButtonsContainer'

export default function Home() {
  return (
    <LayoutUser>
      <Head title="Homepage" />
      <Hero />
      <ButtonsContainer />
    </LayoutUser>
  )
}
