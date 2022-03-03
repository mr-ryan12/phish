import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './ErrorComponent.scss'

const ErrorComponent = props => {
  return (
    <section className="error-container">
      <h2 className="error-message">{props.message}</h2>
      <Link to="/">Home</Link>
    </section>
  )
}

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired
}

export default ErrorComponent