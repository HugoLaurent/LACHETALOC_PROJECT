import './accommodation-card-style.css'

export default function AccommodationCard({ accommodation }: { accommodation: any }) {
  return (
    <div className="accommodation-card__container">
      <section className="accommodation-card__header">
        <div className="image-container">
          <img className="accommodation-card__image" src={accommodation.image} alt="" />
        </div>
        <span className="accommodation-card__location">{accommodation.city}</span>
        {new Date(accommodation.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) && (
          <span className="accommodation-card__status">Récent</span>
        )}
      </section>
      <section className="accommodation-card__content">
        <h3 className="accommodation-card__title">{accommodation.title}</h3>
        <p className="accommodation-card__description">{accommodation.description}</p>
        <div className="accommodation-card__footer">
          <span className="accommodation-card__price">{accommodation.price} €</span>
          <button className="accommodation-card__button">Regarder</button>
        </div>
      </section>
    </div>
  )
}
