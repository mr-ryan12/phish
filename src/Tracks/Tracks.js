import React from 'react'
import PropTypes from 'prop-types'
import './Tracks.scss'

const checkPlaylist = (playlistIds, id, addToPlaylist, playlistError, isClicked, isClickedId) => {
  if (playlistError) {
    return <p>Something went wrong</p>
  } else if (isClicked && isClickedId === id) {
    return <p></p>
  } else if (playlistIds.includes(id)) {
    return <p>Added to Playlist</p>
  } else {
    return <button onClick={() => addToPlaylist(id)} className="add-to-playlist-button">Add to Playlist</button>
  }
}

const Tracks = props => {
  return (
    <section className="track-card">
      <h2 className="track-card-song-title">{props.title}</h2>
      {checkPlaylist(props.playlistIds, props.id, props.addToPlaylist, props.playlistError, props.isClicked, props.isClickedId)}
      <video controls name="media" src={props.mp3} className="track-card-audio"></video>
    </section>
  )
}

Tracks.propTypes = {
  title: PropTypes.string.isRequired,
  mp3: PropTypes.string.isRequired,
  addToPlaylist: PropTypes.func.isRequired,
  playlistIds: PropTypes.array.isRequired,
  playlistError: PropTypes.bool.isRequired,
  isClicked: PropTypes.bool.isRequired,
  isClickedId: PropTypes.number.isRequired
}

export default Tracks 