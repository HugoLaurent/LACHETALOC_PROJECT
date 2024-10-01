import { useState } from 'react'
import './popular-container-style.css'
import AccommodationCard from '~/components/AccommodationCard/AccommodationCard'
import { usePage } from '@inertiajs/react'

const optionTime = [
  { id: 1, name: 'Tout le temps' },
  { id: 2, name: 'Cette semaine' },
  { id: 3, name: 'Ce mois-ci' },
  { id: 4, name: 'Ce trimestre' },
  { id: 5, name: 'Cette année' },
]

export default function PopularContainer() {
  const [activeTimeId, setActiveTimeId] = useState<number | null>(1)
  const [selectedCity, setSelectedCity] = useState<string>('France') // Valeur par défaut
  const { accommodations, cities } = usePage<{ accommodations: any[]; cities: any[] }>().props

  // Filtrer les accommodations en fonction de la ville sélectionnée
  const filteredAccommodations = accommodations.filter((item) => {
    return selectedCity === 'France' || item.city === selectedCity // Afficher toutes les accommodations si "France" est sélectionnée
  })

  return (
    <div className="popular-container">
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
              onClick={() => setActiveTimeId(time.id)}
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
