import React, { Component } from 'react'
import { fetchRandomShow } from '../apiCalls'
import { cleanDate } from '../utils'
import NavigationRandomShow from '../NavigationRandomShow/NavigationRandomShow'
import Loading from '../Loading/Loading'
import Tracks from '../Tracks/Tracks'
import '../ShowDetails/ShowDetails.scss'

class RandomShow extends Component {
  constructor() {
    super()
    this.state = {
      show: '',
      isLoading: true
    }
  }

  componentDidMount = () => {
    fetchRandomShow()
      .then(data => {
        this.setState({
          show: cleanDate(data.data),
          isLoading: false
        })
      })
      .catch(error => console.log(error.message))
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
    return(
      <>
        <NavigationRandomShow isLoading={this.state.isLoading} />
        <section className="show-details-container">
          <h2 style={{color: 'white'}}>{this.state.show.venue_name}</h2>
          <p style={{color: 'white'}}>{this.state.show.date}</p>
          <section className="tracks-container">
            {this.renderTracks()}
          </section>
        </section>
      </>
    )
  }
}

export default RandomShow