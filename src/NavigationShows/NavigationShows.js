import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationShows.scss'

const NavigationShows = () => {
  return (
    <section className="navigation-container-shows">
      <h1>PHISH</h1>
      <section className="nav-link-container-shows">
        <Link to="/">Home</Link>
        <Link to="/randomShow" className="random-show-link">Random Show</Link>
      </section>
    </section>
  )
}

export default NavigationShows