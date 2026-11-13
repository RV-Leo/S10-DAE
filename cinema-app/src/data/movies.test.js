import { describe, expect, it } from 'vitest'
import { movies } from './movies.js'

describe('movie listings', () => {
  it('contains at least eight complete movies with unique ids and one featured title', () => {
    expect(movies).toHaveLength(8)
    expect(new Set(movies.map((movie) => movie.id)).size).toBe(movies.length)
    expect(movies.filter((movie) => movie.featured)).toHaveLength(1)

    movies.forEach((movie) => {
      expect(movie).toEqual(expect.objectContaining({
        id: expect.any(String),
        title: expect.any(String),
        poster: expect.any(String),
        synopsis: expect.any(String),
        ageRating: expect.any(String),
        rating: expect.any(Number),
        showtimes: expect.any(Array),
      }))
      expect(movie.rating).toBeGreaterThanOrEqual(0)
      expect(movie.rating).toBeLessThanOrEqual(10)
      expect(movie.showtimes.length).toBeGreaterThan(0)
    })
  })
})
