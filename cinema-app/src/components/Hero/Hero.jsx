import { ArrowRight, Star } from 'lucide-react'
import { Button } from '../Button/Button.jsx'
import './Hero.css'

export function Hero({ movie, children }) {
  return (
    <section className="hero container" id="inicio" aria-labelledby="hero-title" style={{ '--hero-poster': `url("${movie.poster}")` }}>
      <div className="hero__content">
        <p className="hero__eyebrow">Esta semana en Aurora</p>
        <h1 id="hero-title">{movie.title}</h1>
        <p className="hero__synopsis line-clamp-3">{movie.synopsis}</p>
        <div className="hero__meta"><span className="hero__rating"><Star size={17} fill="currentColor" aria-hidden="true" /> {movie.rating.toFixed(1)} <span>/ 10</span></span><span className="hero__age">{movie.ageRating}</span></div>
        {children}
        <Button className="hero__cta" onClick={() => document.getElementById('cartelera')?.scrollIntoView({ behavior: 'smooth' })}>Ver cartelera <ArrowRight size={18} aria-hidden="true" /></Button>
      </div>
      <div className="hero__art"><img src={movie.poster} alt={`Póster de ${movie.title}`} /></div>
      <div className="hero__index" aria-hidden="true">01 <span /> 08</div>
    </section>
  )
}
