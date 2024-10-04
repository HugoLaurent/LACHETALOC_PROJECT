import { useState } from 'react'
import './popular-container-style.css'
import AccommodationCard from '~/components/AccommodationCard/AccommodationCard'
import { usePage } from '@inertiajs/react'
import {
  startOfWeek,
  startOfMonth,
  startOfQuarter,
  startOfYear,
  endOfWeek,
  endOfMonth,
  endOfQuarter,
  endOfYear,
  isWithinInterval,
} from 'date-fns'

const optionTime = [
  { id: 1, name: 'Tout le temps', range: null },
  { id: 2, name: 'Cette semaine', range: 'week' },
  { id: 3, name: 'Ce mois-ci', range: 'month' },
  { id: 4, name: 'Ce trimestre', range: 'quarter' },
  { id: 5, name: 'Cette année', range: 'year' },
]

// Fonction pour obtenir l'intervalle de temps en fonction de l'option sélectionnée
const getTimeInterval = (timeRange: string | null) => {
  const now = new Date()
  switch (timeRange) {
    case 'week':
      return { start: startOfWeek(now), end: endOfWeek(now) }
    case 'month':
      return { start: startOfMonth(now), end: endOfMonth(now) }
    case 'quarter':
      return { start: startOfQuarter(now), end: endOfQuarter(now) }
    case 'year':
      return { start: startOfYear(now), end: endOfYear(now) }
    default:
      return null // 'Tout le temps', pas de limite de temps
  }
}

export default function PopularContainer() {
  const [activeTimeId, setActiveTimeId] = useState<number | null>(1)
  const [selectedCity, setSelectedCity] = useState<string>('France')
  const { accommodations, cities } = usePage<{ accommodations: any[]; cities: any[] }>().props
  console.log(accommodations)

  const selectedTimeRange = optionTime.find((time) => time.id === activeTimeId)?.range
  const timeInterval = getTimeInterval(selectedTimeRange ?? null)

  const filteredAccommodations = accommodations.filter((item) => {
    const endLeaseDate = new Date(item.endLease)
    const isInTimeRange = !timeInterval || isWithinInterval(endLeaseDate, timeInterval)
    const isInCity = selectedCity === 'France' || item.city === selectedCity
    return isInTimeRange && isInCity
  })

  return (
    <div className="popular-container">
      {/* {accommodations && (
        <section>
          <div className="popular-container__card-wrapper">
            {accommodations.map((item: any, index: number) => (
              <AccommodationCard key={index} accommodation={item} />
            ))}
          </div>
        </section>
      )} */}
      <section className="popular-container__header-wrapper">
        <h2 className="popular-title">Popular in</h2>
        <select
          className="popular-select"
          name="city-choices"
          id="city-choices"
          onChange={(e) => setSelectedCity(e.target.value)} // Met à jour l'état de la ville sélectionnée
        >
          <option className="popular-option" value="France">
            France
          </option>
          {cities.map((city) => (
            <option className="popular-option" key={city.id} value={city.city}>
              {city.city}
            </option>
          ))}
        </select>
      </section>
      <section>
        <div className="popular-container__time-wrapper">
          {optionTime.map((time) => (
            <button
              className={`popular-time ${activeTimeId === time.id ? 'active' : ''}`}
              key={time.id}
              aria-pressed={activeTimeId === time.id}
              onClick={() => setActiveTimeId(time.id)} // Met à jour l'état de l'option temps sélectionnée
            >
              {time.name}
            </button>
          ))}
        </div>
        <div className="popular-container__card-wrapper">
          {filteredAccommodations.map((item: any, index: number) => (
            <AccommodationCard key={index} accommodation={item} />
          ))}
        </div>
      </section>
    </div>
  )
}
