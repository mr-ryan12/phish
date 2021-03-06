import React from 'react'
import NavigationShows from '../NavigationShows/NavigationShows'
import Loading from '../Loading/Loading'
import PropTypes from 'prop-types'
import './Shows.scss'

const ShowsDisplay = props => {
  const display = props.isLoading ? <Loading/> : props.allShows
  return (
    <>
      <NavigationShows isLoading={props.isLoading}/>
      <section className="main-shows-container">
        <h2 className="shows-page-heading">{props.year} Shows</h2>
        <section className="shows-container">
          {display}
        </section>
      </section>
    </>
  )
}

ShowsDisplay.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  year: PropTypes.string.isRequired,
  allShows: PropTypes.array.isRequired
}

export default ShowsDisplay