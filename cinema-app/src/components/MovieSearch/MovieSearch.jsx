import { Search } from 'lucide-react'
import './MovieSearch.css'

export function MovieSearch({ value, onChange }) {
  return <label className="movie-search"><span className="visually-hidden">Buscar película</span><Search size={18} aria-hidden="true" /><input type="search" value={value} onChange={(event) => onChange(event.target.value)} placeholder="Buscar en cartelera…" /></label>
}
