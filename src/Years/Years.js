import React from 'react'
import PropTypes from 'prop-types'
import YearCard from '../YearCard/YearCard'
import './Years.scss'

const Years = props => {
  const allYears = props.years.map(year => {
    return (
      // <section className="year-card" key={year.date}>
      //   <img src={phishLogo} alt="circular-phish-logo"/>
      //   <h2>{year.date}</h2>
      //   <p>Total Shows: {year.show_count}</p>
      // </section>
      <YearCard
        key={year.date}
        id={year.date}
        date={year.date}
        showCount={year.showCount}
      />
    )
  })
  return (
    <section className="years-container">
      {allYears}
    </section>
  )
}

Years.propTypes = {
  years: PropTypes.array.isRequired,
}

export default Years