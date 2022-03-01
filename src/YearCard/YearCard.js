import React from 'react'
import PropTypes, { string } from 'prop-types'
import phishLogo from '../assets/phish-logo.png'
import './YearCard.scss'
import { number } from 'prop-types'

const YearCard = props => {
  return (
    <section className="year-card" key={props.date}>
      <img src={phishLogo} alt="circular-phish-logo"/>
      <h2>{props.date}</h2>
      <p>Total Shows: {props.show_count}</p>
    </section>
  )
}

YearCard.propTypes = {
  date: string.isRequired,
  show_count: number.isRequired
}

export default YearCard