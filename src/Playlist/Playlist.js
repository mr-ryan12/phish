import React from 'react'
import PropTypes from 'prop-types'
import PlaylistCard from '../PlaylistCard/PlaylistCard'
import NavigationPlaylist from '../NavigationPlaylist/NavigationPlaylist'
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
        date={track.show_date}
        location={track.venue_location}
        deleteFromPlaylist={props.deleteFromPlaylist}
      />
    )
  })
  const checkPlaylistMessage = allPlaylistTracks.length === 0 ? <h2 className="empty-playlist-message">No tracks yet! Please add some!</h2> : null
  const checkPlaylistContainer = allPlaylistTracks.length !== 0 ? allPlaylistTracks : null
  return (
    <>
      <NavigationPlaylist/>
      <h2 className="playlist-header">Playlist</h2>
      {checkPlaylistMessage}
      <section className="playlist-container">
        {checkPlaylistContainer}
      </section>
    </>
  )
}

Playlist.propTypes = {
  playlist: PropTypes.array.isRequired,
}

export default Playlist