import React from 'react'
import PropTypes from 'prop-types'
import './Tracks.scss'

const checkPlaylist = (playlistIds, id, addToPlaylist) => {
  if (playlistIds.includes(id)) {
    return <p>Added to Playlist</p>
  } else {
    return <button onClick={() => addToPlaylist(id)}>Add to Playlist</button>
  }
}

const Tracks = props => {
  return (
    <section className="track-card">
      <h2 className="track-card-song-title">{props.title}</h2>
      {checkPlaylist(props.playlistIds, props.id, props.addToPlaylist)}
      <video controls name="media" src={props.mp3} className="track-card-audio"></video>
    </section>
  )
}

Tracks.propTypes = {
  title: PropTypes.string.isRequired,
  mp3: PropTypes.string.isRequired,
  addToPlaylist: PropTypes.func.isRequired,
  playlistIds: PropTypes.array.isRequired
}

export default Tracks 