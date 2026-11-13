import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { movies } from '../../data/movies.js'
import { MovieList } from './MovieList.jsx'

describe('MovieList', () => {
  it('renders one movie card for each movie passed through props', () => {
    render(<MovieList movies={movies.slice(0, 3)} />)

    expect(screen.getByRole('region', { name: 'La cartelera' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })

  it('filters without accents and announces when there are no matches', () => {
    const { rerender } = render(<MovieList movies={movies} query="orbita" />)
    expect(screen.getByRole('heading', { name: 'Órbita cero' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(1)
    rerender(<MovieList movies={movies} query="zzz" />)
    expect(screen.getByText('Sin resultados para «zzz»')).toBeInTheDocument()
    expect(screen.queryAllByRole('article')).toHaveLength(0)
  })
})
