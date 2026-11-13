export const FAVORITES_KEY = 'aurora:favorites:v1'

export function readFavorites() {
  try {
    const value = JSON.parse(window.localStorage.getItem(FAVORITES_KEY) ?? '[]')
    return Array.isArray(value) && value.every((id) => typeof id === 'string') ? value : []
  } catch {
    return []
  }
}

export function writeFavorites(ids) {
  try {
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids))
  } catch {
    // Favorites remain available for the current session when storage is blocked.
  }
}
