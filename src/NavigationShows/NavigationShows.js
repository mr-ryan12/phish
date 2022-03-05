import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './NavigationShows.scss'

const checkButtons = loading => {
  if (!loading) {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/randomShow" className="random-show-link">Random Show</Link>
        <Link to="/playlist" className="random-show-link">Playlist</Link>
      </>
    )
  }
  return null
}

const NavigationShows = props => {
  return (
    <section className="navigation-container-shows">
      <h1>PHISH</h1>
      <section className="nav-link-container-shows">
        {checkButtons(props.isLoading)}
      </section>
    </section>
  )
}

NavigationShows.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default NavigationShows