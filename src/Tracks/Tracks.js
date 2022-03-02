import React from 'react'
import PropTypes from 'prop-types'
import './Tracks.scss'

const Tracks = props => {
  // console.log(props)
  // const allTracks = props.tracks.map(track => {
  //   return (
  //     <section className="track-card">
  //       <h2>{track.title}</h2>
  //       <video controls name="media" src={track.mp3}></video>
  //     </section>
  //   )
  // })
  return (
    <section className="track-card">
      <h2>{props.title}</h2>
      <video controls name="media" src={props.mp3}></video>
    </section>
  )
}

Tracks.propTypes = {

}

export default Tracks 