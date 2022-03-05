import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationPlaylist.scss'

const NavigationPlaylist = () => {
  return (
    <section className="navigation-container-playlist">
      <h1>PHISH</h1>
      <section className="nav-link-container-playlist">
        <Link to="/" className="playlist-link-home">Home</Link>
        <Link to="/randomShow" className="random-show-link-playlist">Random Show</Link>
      </section>
    </section>
  )
}

export default NavigationPlaylist