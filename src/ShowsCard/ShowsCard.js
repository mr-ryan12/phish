import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './ShowsCard.scss'

const ShowsCard = props => {
  return (
    <Link to={`/${props.year}/${props.id}`} className="show-card">
      <h2>{props.venueName}</h2>
      <p>{props.date}</p>
      <p>{props.location}</p>
      <p>Number of Tracks: {props.numOfTracks}</p>
    </Link>
  )
}

ShowsCard.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  venueName: PropTypes.string.isRequired,
  numOfTracks: PropTypes.number.isRequired
}

export default ShowsCard