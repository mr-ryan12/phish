import React from 'react'
import PropTypes from 'prop-types'
import YearCard from '../YearCard/YearCard'
import NavigationHomepage from '../NavigationHomepage/NavigationHomepage'
import './Years.scss'

const Years = props => {
  const allYears = props.years.map(year => {
    return (
      <YearCard
        key={year.date}
        id={year.date}
        date={year.date}
        show_count={year.show_count}
      />
    )
  })
  return (
    <>
      <NavigationHomepage/>
      <section className="years-container">
        {allYears}
      </section>
    </>
  )
}

Years.propTypes = {
  years: PropTypes.array.isRequired,
}

export default Years