import React from 'react'
import PropTypes from 'prop-types'
import './PlaylistCard.scss'

const PlaylistCard = props => {
  return (
    <section className="playlist-card">
      <h2>{props.title}</h2>
      <p>{props.location}</p>
      <p>{props.date}</p>
      <button onClick={() => props.deleteFromPlaylist(props.id)} className="remove-from-playlist-button">Remove from Playlist</button>
      <video controls name="media" src={props.mp3} className="track-card-audio"></video>
    </section>
  )
}

PlaylistCard.propTypes = {
  title: PropTypes.string.isRequired,
  mp3: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

export default PlaylistCard