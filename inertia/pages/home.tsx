import { Head } from '@inertiajs/react'
import Hero from '~/components/Hero/Hero'
import LayoutUser from '~/Layout/LayoutUser'

export default function Home() {
  return (
    <LayoutUser>
      <Head title="Homepage" />
      <Hero />
    </LayoutUser>
  )
}
