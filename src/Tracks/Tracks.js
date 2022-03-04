import React from 'react'
import PropTypes from 'prop-types'
import './Tracks.scss'

const Tracks = props => {
  return (
    <section className="track-card">
      <h2 className="track-card-song-title">{props.title}</h2>
      <video controls name="media" src={props.mp3} className="track-card-audio"></video>
    </section>
  )
}

Tracks.propTypes = {
  title: PropTypes.string.isRequired,
  mp3: PropTypes.string.isRequired
}

export default Tracks 