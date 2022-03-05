import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationHomepage.scss'

const NavigationHomepage = () => {
  return (
    <section className="navigation-container-home">
      <h1>PHISH</h1>
      <section className="nav-link-container-home">
        <Link to="/randomShow" className="random-show-link-home">Random Show</Link>
        <Link to="/playlist" className="random-show-link-home">Playlist</Link>
      </section>
    </section>
  )
}

export default NavigationHomepage