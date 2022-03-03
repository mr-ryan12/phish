import React, { Component } from 'react'
import { fetchData } from '../apiCalls'
import { cleanDate } from '../utils'
import Loading from '../Loading/Loading'
import Tracks from '../Tracks/Tracks'
import RandomShowDisplay from './RandomShowDisplay'
import '../ShowDetails/ShowDetails.scss'

class RandomShow extends Component {
  constructor() {
    super()
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
          show: cleanDate(data.data),
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
            />
          )
        })
      )
    }
  }

  render() {
    const componentForDisplay = this.state.error ? <h2 style={{color: 'white'}}>Something went wrong.</h2>
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

export default RandomShow