import './accommodation-card-style.css'

export default function AccommodationCard() {
  return (
    <div className="accommodation-card__container">
      <section className="accommodation-card__header">
        <img
          className="accommodation-card__image"
          src="https://loremflickr.com/3088/3211?lock=3028206090157864"
          alt=""
        />
        <span className="accommodation-card__location">Paris</span>
        <span className="accommodation-card__status">Récent</span>
      </section>
      <section className="accommodation-card__content">
        <h3 className="accommodation-card__title">Lorem ipsum dolor sit</h3>
        <p className="accommodation-card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in turpis nec sapien.
        </p>
        <div className="accommodation-card__footer">
          <span className="accommodation-card__price">1255€</span>
          <button className="accommodation-card__button">Regarder</button>
        </div>
      </section>
    </div>
  )
}
