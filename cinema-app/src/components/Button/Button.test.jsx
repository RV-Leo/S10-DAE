import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './Button.jsx'

describe('Button', () => {
  it('renders its content, variants, and native button props', () => {
    const { rerender } = render(<Button variant="primary" aria-label="Acción">Ver</Button>)
    expect(screen.getByRole('button', { name: 'Acción' })).toHaveClass('button--primary')
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    rerender(<Button variant="secondary">Guardar</Button>)
    expect(screen.getByRole('button')).toHaveClass('button--secondary')
    rerender(<Button variant="ghost" disabled>Cancelar</Button>)
    expect(screen.getByRole('button')).toHaveClass('button--ghost')
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
