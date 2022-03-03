import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { fetchYears } from './apiCalls'
import Years from './Years/Years'
import Shows from './Shows/Shows'
import ShowDetails from './ShowDetails/ShowDetails'
import RandomShow from './RandomShow/RandomShow'
import ErrorComponent from './ErrorComponent/ErrorComponent'
import './App.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      years: [],
      error: false
    }
  }

  componentDidMount = () => {
    fetchYears()
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

  render() {
    return (
      <main className="App">
        <Switch>
          <Route exact path="/" render={() => this.checkFetch(this.state.years)}/>
          <Route exact path="/randomShow" render={() => <RandomShow/>}/>
          <Route exact path="/:year" render={({ match }) => this.checkYear(match.params.year)}/>
          <Route exact path="/:year/:id" render={({ match }) => <ShowDetails showId={match.params.id} showYear={match.params.year}/>}/>
          <Route render={() => <ErrorComponent message="So sorry, that page is not found."/>}/>
        </Switch>
      </main>
    )
  }
}

export default App
