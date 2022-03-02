import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationHomepage.scss'

// add a 'to=' attribut to Link
const NavigationHomepage = () => {
  return (
    <section className="navigation-container-home">
      <h1>PHISH</h1>
      <section className="nav-link-container-home">
        <Link className="random-show-link">Random Show</Link>
      </section>
    </section>
  )
}

export default NavigationHomepage