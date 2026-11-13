import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero.jsx'

const firstMovie = {
  title: 'La última linterna',
  poster: '/posters/last-lantern.svg',
  synopsis: 'Una farera descubre señales desde el mar.',
  ageRating: '12+',
  rating: 8.7,
}

describe('Hero', () => {
  it('renders the movie passed through props and responds to a new movie', () => {
    const { rerender } = render(<Hero movie={firstMovie} />)
    expect(screen.getByRole('heading', { level: 1, name: firstMovie.title })).toBeInTheDocument()

    const nextMovie = { ...firstMovie, title: 'El huerto de cristal' }
    rerender(<Hero movie={nextMovie} />)
    expect(screen.getByRole('heading', { level: 1, name: nextMovie.title })).toBeInTheDocument()
  })
})
