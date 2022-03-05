import React from 'react'
import PropTypes from 'prop-types'
import PlaylistCard from '../PlaylistCard/PlaylistCard'
import './Playlist.scss'
import '../Tracks/Tracks.scss'

const Playlist = props => {
  const allPlaylistTracks = props.playlist.map(track => {
    return (
      <PlaylistCard
        key={track.id}
        id={track.id}
        title={track.title}
        mp3={track.mp3}
      />
    )
  })
  return (
    <>
      <h2 className="playlist-header">Playlist</h2>
      {allPlaylistTracks.length === 0 && <p className="empty-playlist-message">No tracks yet! Please add some!</p>}
      <section className="playlist-container">
        {allPlaylistTracks.length !== 0 ? allPlaylistTracks : null}
      </section>
    </>
  )
}

Playlist.propTypes = {
  playlist: PropTypes.array.isRequired,
}

export default Playlist