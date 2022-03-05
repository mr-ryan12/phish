import React from 'react'
import PropTypes from 'prop-types'
import PlaylistCard from '../PlaylistCard/PlaylistCard'
import './Playlist.scss'
import '../Tracks/Tracks.scss'

const Playlist = props => {
  const allPlaylistTracks = props.playlist.map(track => {
    <section className="track-card">
      <h2>{track.title}</h2>
      <button>Delete</button>
      <video controls name="media" src={track.mp3} className="track-card-audio"></video>
    </section>
  })
  return (
    <section className="playlist-container">
      <h2 className="playlist-header">Playlist</h2>
      {allPlaylistTracks.length === 0 ? <p>No tracks yet! Please add some!</p> : allPlaylistTracks}
    </section>
  )
}

Playlist.propTypes = {
  playlist: PropTypes.array.isRequired,
}

export default Playlist