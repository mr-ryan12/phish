import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationRandomShow.scss'

const NavigationRandomShow = () => {
  return (
    <section className="navigation-container-random-show">
    <h1>PHISH</h1>
    <section className="nav-link-container-random-show">
      <Link to="/">Home</Link>
    </section>
  </section>
  )
}

export default NavigationRandomShow