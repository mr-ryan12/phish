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
      years: []
    }
  }

  componentDidMount = () => {
    fetchYears()
      .then(data => {
        this.setState({
          years: data.data
        })
      })
      .catch(error => console.log(error.message))
  }

  checkYear = year => {
    const allYears = this.state.years.map(year => year.date)

    if (!allYears.includes(year)) {
      return <ErrorComponent message="So sorry, that page is not found."/>
    } else {
      return <Shows year={year}/>
    }
  }

  checkId = id => {

  }

  render() {
    return (
      <main className="App">
        <Switch>
          <Route exact path="/" render={() => <Years years={this.state.years}/>}/>
          <Route exact path="/randomShow" render={() => <RandomShow/>}/>
          {/* <Route exact path="/:year" render={({ match }) => <Shows year={match.params.year}/>}/> */}
          <Route exact path="/:year" render={({ match }) => this.checkYear(match.params.year)}/>
          <Route exact path="/:year/:id" render={({ match }) => <ShowDetails showId={match.params.id} showYear={match.params.year} allYears={this.state.years}/>}/>
        </Switch>
      </main>
    )
  }
}

export default App
