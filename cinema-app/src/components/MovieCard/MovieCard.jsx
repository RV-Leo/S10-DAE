import { Heart, Star } from 'lucide-react'
import { Button } from '../Button/Button.jsx'
import './MovieCard.css'

export function MovieCard({ movie, isFavorite = false, onToggleFavorite = () => {} }) {
  return (
    <article className="movie-card">
      <div className="movie-card__poster-wrap"><img className="movie-card__poster" src={movie.poster} alt={`Póster de ${movie.title}`} loading="lazy" /></div>
      <div className="movie-card__body">
        <div className="movie-card__heading"><h3 className="movie-card__title">{movie.title}</h3><span className="movie-card__rating" aria-label={`Valoración ${movie.rating} de 10`}><Star size={14} fill="currentColor" aria-hidden="true" />{movie.rating.toFixed(1)}</span></div>
        <Button className="movie-card__favorite" variant="ghost" aria-label={`${isFavorite ? 'Quitar de' : 'Agregar a'} favoritas: ${movie.title}`} aria-pressed={isFavorite} onClick={() => onToggleFavorite(movie.id)}><Heart size={17} fill={isFavorite ? 'currentColor' : 'none'} aria-hidden="true" />{isFavorite ? 'En favoritas' : 'Favorita'}</Button>
        <div className="movie-card__showtimes" aria-label={`Horarios de ${movie.title}`}>{movie.showtimes.map((time) => <span className="movie-card__time" key={time}>{time}</span>)}</div>
      </div>
    </article>
  )
}
