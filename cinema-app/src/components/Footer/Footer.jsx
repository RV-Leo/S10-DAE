import { Clapperboard } from 'lucide-react'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer" id="contacto">
      <div className="film-strip" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
      <div className="site-footer__grid container">
        <div className="site-footer__about">
          <a className="site-footer__brand" href="#inicio"><Clapperboard aria-hidden="true" /> Aurora Cinemas</a>
          <p>Historias que merecen verse en pantalla grande.</p>
        </div>
        <div><h2>Visítanos</h2><address>Av. de la Luz 245<br />Miraflores, Lima</address><a href="tel:+5115550148">+51 1 555 0148</a><br /><a href="mailto:hola@auroracinemas.example">hola@auroracinemas.example</a></div>
        <div><h2>Información</h2><p>Taquilla: todos los días<br />10:30 a. m. – 10:30 p. m.</p><a href="#politicas">Políticas de sala</a></div>
      </div>
      <div className="site-footer__bottom container" id="politicas"><span>© 2026 Aurora Cinemas</span><span>Una buena historia nos reúne.</span></div>
    </footer>
  )
}
