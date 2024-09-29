import './hero-style.css'
import video from '~/assets/video/hero_video.mp4'

import SearchBar from '../SearchBar/SearchBar'

export default function Hero() {
  return (
    <div className="hero">
      <video className="hero__video" autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero__text-wrapper">
        <h1 className="hero__text-title">Trouver votre future location avec nous.</h1>
        <SearchBar />
        <p>Découvrer votre prochain chez vous en avance!</p>
      </div>
    </div>
  )
}
