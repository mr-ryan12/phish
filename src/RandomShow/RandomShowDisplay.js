import React from 'react'
import NavigationRandomShow from '../NavigationRandomShow/NavigationRandomShow'
import PropTypes from 'prop-types'
import '../ShowDetails/ShowDetails.scss'

const RandomShowDisplay = props => {
  return (
    <>
      <NavigationRandomShow isLoading={props.isLoading} />
      <section className="show-details-container">
        <h2 style={{color: 'white'}}>{props.venueName}</h2>
        <p style={{color: 'white'}}>{props.date}</p>
        <section className="tracks-container">
          {props.renderTracks()}
        </section>
      </section>
    </>
  )
}

RandomShowDisplay.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  venueName: PropTypes.any,
  date: PropTypes.any,
  renderTracks: PropTypes.func.isRequired
}

export default RandomShowDisplay