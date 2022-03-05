import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { fetchData } from './apiCalls'
import { cleanTrackData } from './utils'
import Years from './Years/Years'
import Shows from './Shows/Shows'
import ShowDetails from './ShowDetails/ShowDetails'
import RandomShow from './RandomShow/RandomShow'
import ErrorComponent from './ErrorComponent/ErrorComponent'
import Playlist from './Playlist/Playlist'
import './App.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      years: [],
      playlist: [],
      playlistIds: [],
      error: false,
      playlistError: false,
      isClicked: false,
      isClickedId: 0
    }
  }

  componentDidMount = () => {
    fetchData('years.json?include_show_counts=true')
      .then(data => {
        this.setState({
          years: data.data
        })
      })
      .catch(() => this.setState({ error: true }))
  }

  checkYear = year => {
    const allYears = this.state.years.map(year => year.date)

    if (!allYears.includes(year)) {
      return <ErrorComponent message="So sorry, that page is not found."/>
    } else {
      return <Shows year={year}/>
    }
  }

  checkFetch = years => {
    if (this.state.error) {
      return <h2 className="fetch-error-message">So sorry, something went wrong</h2>
    } else {
      return <Years years={years}/>
    }
  }

  addToPlaylist = id => {
    this.setState({ isClicked: true, isClickedId: id })
    fetchData(`tracks/${id}`)
      .then(data => {
        this.setState({
          playlistIds: [...this.state.playlistIds, data.data.id],
          playlist: [...this.state.playlist, cleanTrackData(data.data)],
          isClicked: false,
          isClickedId: 0
        })
      })
      .catch(() => this.setState({ playlistError: true }))
  }

  deleteFromPlaylist = id => {
    const filteredPlaylist = this.state.playlist.filter(track => track.id !== id)
    const filteredPlaylistIds = this.state.playlistIds.filter(playlistId => playlistId !== id)

    this.setState({
      playlist: filteredPlaylist,
      playlistIds: filteredPlaylistIds
    })
  }

  render() {
    return (
      <main className="App">
        <Switch>
          <Route exact path="/" render={() => this.checkFetch(this.state.years)}/>
          <Route exact path="/randomShow" render={() => <RandomShow addToPlaylist={this.addToPlaylist} playlistIds={this.state.playlistIds} playlistError={this.state.playlistError} isClicked={this.state.isClicked} isClickedId={this.state.isClickedId}/>}/>
          <Route exact path="/playlist" render={() => <Playlist playlist={this.state.playlist} deleteFromPlaylist={this.deleteFromPlaylist}/>}/>
          <Route exact path="/:year" render={({ match }) => this.checkYear(match.params.year)}/>
          <Route exact path="/:year/:id" render={({ match }) => <ShowDetails showId={match.params.id} showYear={match.params.year} addToPlaylist={this.addToPlaylist} playlistIds={this.state.playlistIds} playlistError={this.state.playlistError} isClicked={this.state.isClicked} isClickedId={this.state.isClickedId}/>}/>
          <Route render={() => <ErrorComponent message="So sorry, that page is not found."/>}/>
        </Switch>
      </main>
    )
  }
}

export default App
