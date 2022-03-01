import React from 'react'
import phishLogo from '../assets/phish-logo.png'
import './Years.scss'

const Years = props => {
  const allYears = props.years.map(year => {
    return (
      <section className="year-card" key={year}>
        <img src={phishLogo} alt="circular-phish-logo"/>
        <h2>{year}</h2>
        <p>Total Shows: 20</p>
      </section>
    )
  })
  return (
    <section className="years-container">
      {allYears}
    </section>
  )
}

export default Years