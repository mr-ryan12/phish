import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './NavigationTracks.scss'

const NavigationTracks = props => {
  return (
    <section className="navigation-container-tracks">
      <h1>PHISH</h1>
      <section className="nav-link-container-tracks">
        <Link to="/">Home</Link>
        <Link to={`/${props.year}`}className="back-to-shows-link">Back to Shows</Link>
        <Link to="/randomShow" className="random-show-link">Random Show</Link>
      </section>
    </section>
  )
}

NavigationTracks.propTypes = {
  year: PropTypes.string.isRequired
}

export default NavigationTracks