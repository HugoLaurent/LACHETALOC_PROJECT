import './buttons-style.css'

export default function ButtonIconText({
  icon,
  text,
  onClick,
}: {
  icon: string
  text: string
  onClick: () => void
}) {
  return (
    <button onClick={onClick} className="button-icon-text">
      <img src={icon} alt={text} className="button-icon-text__image" />
      <p className="button-icon-text__paragraph">{text}</p>
    </button>
  )
}
