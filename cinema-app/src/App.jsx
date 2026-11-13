import { useEffect, useState } from 'react'
import { movies } from './data/movies.js'
import { Header } from './components/Header/Header.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Hero } from './components/Hero/Hero.jsx'
import { MovieSearch } from './components/MovieSearch/MovieSearch.jsx'
import { MovieList } from './components/MovieList/MovieList.jsx'
import { readFavorites, writeFavorites } from './utils/favoritesStorage.js'

export default function App() {
  const featuredMovie = movies.find((movie) => movie.featured)
  const [favoriteIds, setFavoriteIds] = useState(() => readFavorites())
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedQuery(query), 300)
    return () => window.clearTimeout(timer)
  }, [query])

  useEffect(() => writeFavorites(favoriteIds), [favoriteIds])

  function toggleFavorite(id) {
    setFavoriteIds((currentIds) => currentIds.includes(id)
      ? currentIds.filter((favoriteId) => favoriteId !== id)
      : [...currentIds, id])
  }

  return (
    <>
      <Header />
      <main>
        <Hero movie={featuredMovie}>
          <MovieSearch value={query} onChange={setQuery} />
        </Hero>
        <MovieList movies={movies} query={debouncedQuery} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />
      </main>
      <Footer />
    </>
  )
}
