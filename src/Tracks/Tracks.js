import React from 'react'
import PropTypes from 'prop-types'
import './Tracks.scss'

const Tracks = props => {
  return (
    <section className="track-card">
      <h2>{props.title}</h2>
      <video controls name="media" src={props.mp3}></video>
    </section>
  )
}

Tracks.propTypes = {
  title: PropTypes.string.isRequired,
  mp3: PropTypes.string.isRequired
}

export default Tracks 