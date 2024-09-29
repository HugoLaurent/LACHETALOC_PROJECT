import { Head } from '@inertiajs/react'
import Hero from '~/pages/Home/components/Hero/Hero'
import LayoutUser from '~/Layout/LayoutUser'
import ButtonsContainer from './components/ButtonsContainer/ButtonsContainer'
import PopularContainer from './components/PopularContainer/PopularContainer'

export default function Home() {
  return (
    <LayoutUser>
      <Head title="Homepage" />
      <Hero />
      <ButtonsContainer />
      <PopularContainer />
    </LayoutUser>
  )
}
