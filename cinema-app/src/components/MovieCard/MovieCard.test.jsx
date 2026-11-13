import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { MovieCard } from './MovieCard.jsx'

describe('MovieCard', () => {
  it('shows a poster, title, rating, and ticket-shaped showtime chips from props', () => {
    const movie = {
      title: 'Una película de prueba',
      poster: '/posters/test.svg',
      rating: 8.4,
      showtimes: ['14:00', '17:30'],
    }

    render(<MovieCard movie={movie} />)

    expect(screen.getByRole('img', { name: 'Póster de Una película de prueba' })).toHaveAttribute('src', movie.poster)
    expect(screen.getByRole('heading', { name: movie.title })).toBeInTheDocument()
    expect(screen.getByLabelText('Valoración 8.4 de 10')).toBeInTheDocument()
    expect(screen.getByLabelText(`Horarios de ${movie.title}`).children).toHaveLength(2)
  })

  it('reports favorite changes to its parent', () => {
    const onToggleFavorite = vi.fn()
    render(<MovieCard movie={{ id: 'moon', title: 'Luna', poster: '/luna.svg', rating: 8, showtimes: [] }} onToggleFavorite={onToggleFavorite} />)
    fireEvent.click(screen.getByRole('button', { name: 'Agregar a favoritas: Luna' }))
    expect(onToggleFavorite).toHaveBeenCalledWith('moon')
  })
})
