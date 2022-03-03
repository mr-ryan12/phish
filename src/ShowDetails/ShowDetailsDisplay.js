import React from 'react'
import NavigationTracks from '../NavigationTracks/NavigationTracks'
import PropTypes from 'prop-types'
import './ShowDetails.scss'

const ShowDetailsDisplay = props => {
  return (
    <>
      <NavigationTracks year={props.year} isLoading={props.isLoading}/>
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

ShowDetailsDisplay.propTypes = {
  year: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  venueName: PropTypes.string,
  date: PropTypes.string,
  renderTracks: PropTypes.func.isRequired
}

export default ShowDetailsDisplay