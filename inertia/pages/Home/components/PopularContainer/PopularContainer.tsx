import { useState } from 'react'
import './popular-container-style.css'
import AccommodationCard from '~/components/AccommodationCard/AccommodationCard'

const cityFrance = [
  { id: 1, name: 'Paris' },
  { id: 2, name: 'Marseille' },
  { id: 3, name: 'Lyon' },
  { id: 4, name: 'Toulouse' },
  { id: 5, name: 'Nice' },
  { id: 6, name: 'Nantes' },
  { id: 7, name: 'Strasbourg' },
  { id: 8, name: 'Montpellier' },
  { id: 9, name: 'Bordeaux' },
  { id: 10, name: 'Lille' },
]

const optionTime = [
  { id: 1, name: 'Tout le temps' },
  { id: 2, name: 'Cette semaine' },
  { id: 3, name: 'Ce mois-ci' },
  { id: 4, name: 'Ce trimestre' },
  { id: 5, name: 'Cette année' },
]

export default function PopularContainer() {
  const [activeTimeId, setActiveTimeId] = useState<number | null>(1)

  return (
    <div className="popular-container">
      <section className="popular-container__header-wrapper">
        <h2 className="popular-title">Popular in</h2>
        <select className="popular-select" name="city-choices" id="city-choices">
          {cityFrance.map((city) => (
            <option className="popular-option" key={city.id} value={city.id}>
              {city.name}
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
          {Array.from({ length: 6 }, (_, i) => (
            <AccommodationCard key={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
