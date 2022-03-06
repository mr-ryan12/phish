import React, { Component } from 'react'
import { fetchData } from '../apiCalls'
import { cleanShows } from '../utils.js'
import PropTypes from 'prop-types'
import ShowsCard from '../ShowsCard/ShowsCard'
import ShowsDisplay from './ShowsDisplay'
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
    this._isMounted = true;
    fetchData(`years/${this.props.year}.json`)
      .then(data => {
        if (this._isMounted) {
          this.setState({
            shows: cleanShows(data.data),
            isLoading: false
          })
        }
      })
      .catch(() => this.setState({ error: true }))
  }

  componentWillUnmount = () => {
    this._isMounted = false;
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

    const componentForDisplay = this.state.error ? <h2 className="shows-page-error-message">Something went wrong</h2>
      : <ShowsDisplay
          isLoading={this.state.isLoading}
          year={this.props.year}
          allShows={allShows}
        />
    return (
      <>
        {componentForDisplay}
      </>
    )
  }
}

Shows.propTypes = {
  year: PropTypes.string.isRequired
}

export default Shows