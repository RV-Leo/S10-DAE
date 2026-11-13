import { beforeEach, describe, expect, it, vi } from 'vitest'
import { FAVORITES_KEY, readFavorites, writeFavorites } from './favoritesStorage.js'

describe('favorites storage', () => {
  beforeEach(() => localStorage.clear())

  it('reads and writes favorite ids', () => {
    writeFavorites(['blue-hour'])
    expect(localStorage.getItem(FAVORITES_KEY)).toBe('["blue-hour"]')
    expect(readFavorites()).toEqual(['blue-hour'])
  })

  it('returns an empty list for invalid or corrupt data', () => {
    localStorage.setItem(FAVORITES_KEY, '{broken')
    expect(readFavorites()).toEqual([])
    localStorage.setItem(FAVORITES_KEY, '[3]')
    expect(readFavorites()).toEqual([])
  })

  it('does not throw when storage is unavailable', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('blocked') })
    expect(() => writeFavorites(['blue-hour'])).not.toThrow()
  })
})
