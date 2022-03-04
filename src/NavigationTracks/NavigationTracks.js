import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './NavigationTracks.scss'

const checkButtons = (loading, year) => {
  if (!loading) {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to={`/${year}`} className="back-to-shows-link">{`Back to ${year} Shows`}</Link>
        <Link to="/randomShow" className="random-show-link-tracks">Random Show</Link>
      </>
    )
  }
}

const NavigationTracks = props => {
  return (
    <section className="navigation-container-tracks">
      <h1>PHISH</h1>
      <section className="nav-link-container-tracks">
        {checkButtons(props.isLoading, props.year)}
      </section>
    </section>
  )
}

NavigationTracks.propTypes = {
  year: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default NavigationTracks