import React, { Component } from 'react'
import { fetchShowData } from '../apiCalls'
import { cleanDate } from '../utils'
import PropTypes from 'prop-types'
import Tracks from '../Tracks/Tracks'
import './ShowDetails.scss'

class ShowDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: '',
      isLoading: true
    }
  }

  componentDidMount = () => {
    fetchShowData(this.props.showId)
      .then(data => {
        this.setState({
          show: cleanDate(data.data),
          isLoading: false
        })
        console.log(this.state.show)
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <section className="show-details-container">
        <h2 style={{color: 'white'}}>{this.state.show.venue_name}</h2>
        <p style={{color: 'white'}}>{this.state.show.date}</p>
        {this.state.isLoading ? <h2>loading...</h2> : <Tracks tracks={this.state.show.tracks}/>}
      </section>
    )
  }
}

ShowDetails.propTypes = {
  showId: PropTypes.string.isRequired,
}

export default ShowDetails