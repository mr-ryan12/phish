import React, { Component } from 'react'
import { fetchData } from '../apiCalls'
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
            />
          )
        })
      )
    }
  }

  checkUrl = (years, shows) => {
    const yearInUrl = this.props.showYear
    const allYears = years.map(year => year.date)
    const isShowIdANumber = /^\d+$/.test(this.props.showId)

    if (!allYears.includes(yearInUrl) || !isShowIdANumber) {
      this.setState({error: true, isLoading: false})
    } else {
      this.setState({
        show: cleanDate(shows),
        isLoading: false,
        error: false
      })
    }
  }

  render() {
    return (
      <>
       { this.state.error ? <ErrorComponent message="So sorry, that page is not found."/> : <><NavigationTracks year={this.props.showYear} isLoading={this.state.isLoading}/>
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