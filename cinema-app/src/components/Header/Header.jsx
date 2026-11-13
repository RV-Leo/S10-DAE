import { Clapperboard } from 'lucide-react'
import './Header.css'

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <a className="site-header__brand" href="#inicio" aria-label="Aurora Cinemas, inicio">
          <Clapperboard aria-hidden="true" />
          <span>Aurora <em>Cinemas</em></span>
        </a>
        <nav className="site-header__nav" aria-label="Navegación principal">
          <a href="#cartelera">Cartelera</a>
          <a href="#estrenos">Estrenos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
