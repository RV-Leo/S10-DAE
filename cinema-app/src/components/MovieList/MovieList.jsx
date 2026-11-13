import { Film } from 'lucide-react'
import { MovieCard } from '../MovieCard/MovieCard.jsx'
import './MovieList.css'

export function MovieList({ movies, query = '', favoriteIds = [], onToggleFavorite = () => {} }) {
  const normalizedQuery = query.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase()
  const filteredMovies = movies.filter((movie) => movie.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase().includes(normalizedQuery))
  return (
    <section className="movie-list section-space" id="cartelera" aria-labelledby="movie-list-title">
      <div className="movie-list__intro container" id="estrenos">
        <div><p className="movie-list__eyebrow"><Film size={15} aria-hidden="true" /> En pantalla</p><h2 id="movie-list-title">La cartelera</h2></div>
        <p className="movie-list__note" aria-live="polite">{filteredMovies.length} {filteredMovies.length === 1 ? 'historia' : 'historias'} para elegir tu próxima función.</p>
      </div>
      {filteredMovies.length > 0 ? <div className="movie-list__grid container">{filteredMovies.map((movie) => <MovieCard movie={movie} key={movie.id} isFavorite={favoriteIds.includes(movie.id)} onToggleFavorite={onToggleFavorite} />)}</div> : <div className="movie-list__empty container" aria-live="polite"><Film size={34} aria-hidden="true" /><p>Sin resultados para «{query}»</p></div>}
    </section>
  )
}
