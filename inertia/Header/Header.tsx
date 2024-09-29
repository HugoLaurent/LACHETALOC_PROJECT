import './header-style.css'

export default function Header() {
  return (
    <nav className="nav-container">
      <h1 className="nav-container__title">LACHE TA LOC'</h1>
      <ul className="nav-container__buttons">
        <li className="nav-container__button">Accueil</li>
        <li className="nav-container__button">Trouver la Loc'</li>
        <li className="nav-container__button">Aide</li>
        <li className="nav-container__button connect-button">Se connecter</li>
      </ul>
    </nav>
  )
}
