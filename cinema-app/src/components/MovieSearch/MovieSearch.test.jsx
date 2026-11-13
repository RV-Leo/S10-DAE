import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { MovieSearch } from './MovieSearch.jsx'

describe('MovieSearch', () => {
  it('sends controlled input changes to its parent', () => {
    const onChange = vi.fn()
    render(<MovieSearch value="" onChange={onChange} />)
    fireEvent.change(screen.getByRole('searchbox', { name: 'Buscar película' }), { target: { value: 'luna' } })
    expect(onChange).toHaveBeenCalledWith('luna')
  })
})
