import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchYearData } from '../apiCalls'
import './Shows.scss'

class Shows extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shows: []
    }
  }

  componentDidMount = () => {
    fetchYearData(this.props.year)
      .then(data => {
        console.log(data)
        this.setState({
          shows: data.data
        })
      })
      .catch(error => console.log(error.message))
  }
// date: "2022-02-24"
// duration: 8153052
// id: 2075
// incomplete: false
// likes_count: 2
// remastered: false
// sbd: false
// tags: []
// taper_notes: "Phish\r\nMoon Palace\r\nCancun, Quintana Roo, Mexico\r\n02/24/2022\r\n\r\n\r\nSource: AKG CK-61 ULS (NOS) + AKG CK-63 (DIN) > Nbob actives > Naiant PFA's > Sound Devices MixPre 6 II @ 24bit/48kHz\r\nLocation: FOB/DFC 6ft up\r\nTransfer: SD > WaveLab 6 (Gain, Fades, Convert to 16bit/48kHz with Apogee UV22HR Dither) > CDWave (Tracking) > Traders Little Helper (FLAC6)\r\nTagging: FLACs Tagged With Mp3tag v3.01\r\n\r\nRecorded by Ryan Stearns\r\n\r\n\r\nSet 1:\r\n\r\n01 Intro\r\n02 The Lizards\r\n03 The Moma Dance > \r\n04 Peaches en Regalia\r\n05 I Never Needed You Like This Before\r\n06 Funky Bitch > \r\n07 Tweezer > \r\n08 Piper > \r\n09 Soul Planet > \r\n10 Meat > \r\n11 The Howling > \r\n12 Shade\r\n13 Evolve\r\n14 Tube > \r\n15 Sigma Oasis\r\n16 Sand\r\nEncore:\r\n17 So Damn Lucky*\r\n18 The Maker*\r\n19 Tweezer Reprise*\r\n\r\n\r\n*w/ Dave Matthews on guitar/vocals"
// tour_id: 113
// tracks: (18) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// updated_at: "2022-02-26T03:43:26Z"
// venue: {id: 823, slug: 'moon-palace', name: 'Moon Palace', other_names: Array(0), latitude: 20.986885, …}
// venue_name: "Moon Palace"
  
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
    return (
      <section className="main-shows-container">
        <h2>{this.props.year} Shows</h2>
        <section className="shows-container">

        </section>
      </section>
    )
  }
}

Shows.propTypes = {

}

export default Shows