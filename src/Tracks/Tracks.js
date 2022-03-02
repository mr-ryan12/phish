import React from 'react'
import PropTypes from 'prop-types'
import './Tracks.scss'

const Tracks = props => {
  console.log(props)
  const allTracks = props.tracks.map(track => {
    return (
      <section className="track-card">
        <h2>{track.title}</h2>
        <video controls name="media" src={track.mp3}></video>
      </section>
    )
  })
  return (
    <section className="track-container">
      {allTracks}
    </section>
  )
}

Tracks.propTypes = {

}

export default Tracks