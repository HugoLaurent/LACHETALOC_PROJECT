import { fb, ins, lk } from '~/assets/icons'
import './footer-style.css'
export default function Footer() {
  return (
    <section className="footer-container">
      <div className="footer-top-wrapper">
        <article className="footer-contact">
          <h3>Contact</h3>
          <div className="footer-contact__input">
            <input type="text" placeholder="Rentrer votre adresse email" />
            <button>Envoyer</button>
          </div>
          <div className="footer-contact__social">
            <img src={fb} alt="Logo de facebook" />
            <img src={lk} alt="Logo de linkedin" />
            <img src={ins} alt="Logo d'instagram" />
          </div>
        </article>
        <article className="footer-lists">
          <div className="footer-lists__info">
            <h3>Informations</h3>
            <ul>
              <li>
                <a href="/about">À propos</a>
              </li>
              <li>
                <a href="/terms">CGU</a>
              </li>
              <li>
                <a href="/privacy">Politique de confidentialité</a>
              </li>
            </ul>
          </div>

          <div className="footer-lists__follow">
            <h3>Suivez-nous</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-lists__legal">
            <h3>Légal</h3>
            <ul>
              <li>
                <a href="/legal-notices">Mentions légales</a>
              </li>
              <li>
                <a href="/cookies-policy">Politique des cookies</a>
              </li>
              <li>
                <a href="/data-protection">Protection des données</a>
              </li>
            </ul>
          </div>
        </article>
      </div>
      <article>
        <hr />
        <h2>Lache Ta Loc'</h2>
      </article>
    </section>
  )
}
