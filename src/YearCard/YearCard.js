import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import phishLogo from '../assets/phish-logo.png'
import './YearCard.scss'

const YearCard = props => {
  return (
    <Link to={`/${props.date}`} className="year-card">
      {/* <img src={phishLogo} alt="circular-phish-logo" className="year-card-logo"/> */}
      <h2 className="year-card-date">{props.date}</h2>
      <p className="year-card-total-shows">Total Shows: {props.show_count}</p>
    </Link>
  )
}

YearCard.propTypes = {
  date: PropTypes.string.isRequired,
  show_count: PropTypes.number.isRequired
}

export default YearCard