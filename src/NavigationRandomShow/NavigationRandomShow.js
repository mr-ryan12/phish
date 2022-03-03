import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './NavigationRandomShow.scss'

const checkButtons = loading => {
  if (!loading) {
    return <Link to="/">Home</Link>
  }
  return null
}

const NavigationRandomShow = props => {
  return (
    <section className="navigation-container-random-show">
      <h1>PHISH</h1>
      <section className="nav-link-container-random-show">
        {checkButtons(props.isLoading)}
      </section>
  </section>
  )
}

NavigationRandomShow.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default NavigationRandomShow