import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationTracks.scss'

const NavigationTracks = () => {
  return (
    <section className="navigation-container-tracks">
      <h1>PHISH</h1>
      <section className="nav-link-container-tracks">
        <Link to="/">Home</Link>
        <Link className="back-to-shows-link">Back to Shows</Link>
        <Link className="random-show-link">Random Show</Link>
      </section>
    </section>
  )
}

export default NavigationTracks