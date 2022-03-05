import React, { Component } from 'react'
import { fetchData } from '../apiCalls'
import { cleanDate, cleanTrackNames } from '../utils'
import PropTypes from 'prop-types'
import Tracks from '../Tracks/Tracks'
import Loading from '../Loading/Loading'
import ShowDetailsDisplay from './ShowDetailsDisplay'
import './ShowDetails.scss'
import ErrorComponent from '../ErrorComponent/ErrorComponent'

class ShowDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: '',
      isLoading: true,
      error: false,
      years: []
    }
  }

  componentDidMount = () => {
    Promise.all([fetchData('years.json?include_show_counts=true'), fetchData(`shows/${this.props.showId}.json`)])
      .then(data => {
        this.checkUrl(data[0].data, data[1].data)
      })
      .catch(() => this.setState({error: true, isLoading: false}))
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
            />
          )
        })
      )
    }
  }

  checkUrl = (years, show) => {
    const yearInUrl = this.props.showYear
    const allYears = years.map(year => year.date)
    const isShowIdANumber = /^\d+$/.test(this.props.showId)

    if (!allYears.includes(yearInUrl) || !isShowIdANumber) {
      this.setState({error: true, isLoading: false})
    } else {
      this.setState({
        show: cleanTrackNames(show),
        isLoading: false,
        error: false
      })
    }
  }

  render() {
    const componentForDisplay = this.state.error ? <ErrorComponent message="So sorry, that page is not found."/>
      : <ShowDetailsDisplay
          year={this.props.showYear}
          isLoading={this.state.isLoading}
          venueName={this.state.show.venue_name}
          date={this.state.show.date}
          renderTracks={this.renderTracks}
        />
    return (
      <>
        {componentForDisplay}
      </>
    )
  }
}

ShowDetails.propTypes = {
  showId: PropTypes.string.isRequired,
  showYear: PropTypes.string.isRequired,
  addToPlaylist: PropTypes.func.isRequired
}

export default ShowDetails