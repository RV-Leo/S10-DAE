import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App.jsx'

describe('App favorites', () => {
  it('adds and removes a favorite through the child callback', () => {
    render(<App />)
    const favorite = screen.getByRole('button', { name: 'Agregar a favoritas: La última linterna' })
    fireEvent.click(favorite)
    expect(screen.getByRole('button', { name: 'Quitar de favoritas: La última linterna' })).toHaveAttribute('aria-pressed', 'true')
    fireEvent.click(screen.getByRole('button', { name: 'Quitar de favoritas: La última linterna' }))
    expect(screen.getByRole('button', { name: 'Agregar a favoritas: La última linterna' })).toHaveAttribute('aria-pressed', 'false')
  })
})
