import React, { Component } from 'react'
import { fetchYearData } from '../apiCalls'
import { cleanDates } from '../utils.js'
import PropTypes from 'prop-types'
import ShowsCard from '../ShowsCard/ShowsCard'
import Loading from '../Loading/Loading'
import NavigationShows from '../NavigationShows/NavigationShows'
import './Shows.scss'

class Shows extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shows: [],
      isLoading: true,
      error: false
    }
  }

  componentDidMount = () => {
    fetchYearData(this.props.year)
      .then(data => {
        this.setState({
          shows: cleanDates(data.data),
          isLoading: false
        })
      })
      .catch(() => this.setState({ error: true }))
  }
  
  render() {
    const allShows = this.state.shows.map(show => {
      return (
        <ShowsCard
          key={show.id}
          id={show.id}
          venueName={show.venue_name}
          date={show.date}
          location={show.venue.location}
          numOfTracks={show.tracks.length}
          year={this.props.year}
        />
      )
    })

    const shouldBeAComponent = <><NavigationShows isLoading={this.state.isLoading}/>
    <section className="main-shows-container">
      <h2 className="shows-page-heading">{this.props.year} Shows</h2>
      <section className="shows-container">
        {this.state.isLoading ? <Loading/> : allShows}
      </section>
    </section></>
    return (
      <>
      {/* <NavigationShows isLoading={this.state.isLoading}/>
      <section className="main-shows-container">
        <h2 className="shows-page-heading">{this.props.year} Shows</h2>
        <section className="shows-container">
          {this.state.isLoading ? <Loading/> : allShows}
        </section>
      </section> */}
      {this.state.error ? <h2 style={{color: 'white'}}>Something went wrong</h2> : shouldBeAComponent}
      </>
    )
  }
}

Shows.propTypes = {
  year: PropTypes.string.isRequired
}

export default Shows