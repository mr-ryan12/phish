import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationShows.scss'

const NavigationShows = () => {
  return (
    <section className="navigation-container">
      <h1>PHISH</h1>
      <section className="nav-link-container">
        <Link to="/">Home</Link>
        <button className="random-show-link">Random Show</button>
      </section>
    </section>
  )
}

export default NavigationShows