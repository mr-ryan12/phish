import React from 'react'
import PropTypes from 'prop-types'
import phishLogo from '../assets/phish-logo.png'
import './YearCard.scss'

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

}

export default YearCard