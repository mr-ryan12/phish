import React, { Component } from 'react'
import { fetchShowData } from '../apiCalls'
import { cleanDate } from '../utils'
import PropTypes from 'prop-types'
import Tracks from '../Tracks/Tracks'
import Loading from '../Loading/Loading'
import NavigationTracks from '../NavigationTracks/NavigationTracks'
import './ShowDetails.scss'
import ErrorComponent from '../ErrorComponent/ErrorComponent'

class ShowDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: '',
      isLoading: true,
      error: false
    }
  }

  componentDidMount = () => {
    fetchShowData(this.props.showId)
      .then(data => {
        this.setState({
          show: cleanDate(data.data),
          isLoading: false,
          error: false
        })
      })
      .catch(error => this.setState({error: true, isLoading: false}))
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
    return (
      <>
       { this.state.error ? <ErrorComponent message="Something went wrong. It's okay. At least there's this to look at."/> : <><NavigationTracks year={this.props.showYear} isLoading={this.state.isLoading}/>
        <section className="show-details-container">
          <h2 style={{color: 'white'}}>{this.state.show.venue_name}</h2>
          <p style={{color: 'white'}}>{this.state.show.date}</p>
          <section className="tracks-container">
            {this.renderTracks()}
          </section>
        </section></>}
      </>
    )
  }
}

ShowDetails.propTypes = {
  showId: PropTypes.string.isRequired,
  showYear: PropTypes.string.isRequired
}

export default ShowDetails