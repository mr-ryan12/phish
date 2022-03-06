import React, { Component } from 'react'
import { fetchData } from '../apiCalls'
import { cleanShowName } from '../utils'
import Loading from '../Loading/Loading'
import Tracks from '../Tracks/Tracks'
import RandomShowDisplay from './RandomShowDisplay'
import PropTypes from 'prop-types'
import '../ShowDetails/ShowDetails.scss'

class RandomShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: '',
      isLoading: true,
      error: false
    }
  }

  componentDidMount = () => {
    fetchData('random-show')
      .then(data => {
        this.setState({
          show: cleanShowName(data.data),
          isLoading: false
        })
      })
      .catch(() => this.setState({ error: true }))
  }

  renderTracks = () => {
    if (this.state.isLoading) {
      return <Loading/>
    } else {
      return (
        this.state.show.tracks.map(track => {
          return (
            <Tracks
              key={track.id}
              id={track.id}
              title={track.title}
              mp3={track.mp3}
              addToPlaylist={this.props.addToPlaylist}
              playlistIds={this.props.playlistIds}
              playlistError={this.props.playlistError}
              isClicked={this.props.isClicked}
              isClickedId={this.props.isClickedId}
            />
          )
        })
      )
    }
  }

  render() {
    const componentForDisplay = this.state.error ? <h2 style={{color: 'white'}}>So sorry, something went wrong.</h2>
      : <RandomShowDisplay 
          isLoading={this.state.isLoading}
          venueName={this.state.show.venue_name}
          date={this.state.show.date}
          renderTracks={this.renderTracks}
        />
    return(
      <>
        {componentForDisplay}
      </>
    )
  }
}

RandomShow.propTypes = {
  addToPlaylist: PropTypes.func.isRequired,
  playlistIds: PropTypes.array.isRequired,
  playlistError: PropTypes.bool.isRequired,
  isClicked: PropTypes.bool.isRequired,
  isClickedId: PropTypes.number.isRequired
}

export default RandomShow