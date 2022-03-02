import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { fetchYears } from './apiCalls'
import NavigationHomepage from './NavigationHomepage/NavigationHomepage'
import Years from './Years/Years'
import Shows from './Shows/Shows'
import ShowDetails from './ShowDetails/ShowDetails'
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

  render() {
    return (
      <main className="App">
        <Switch>
          <Route exact path="/" render={() => <Years years={this.state.years}/>}/>
          <Route exact path="/randomShow" render={() => <h2 style={{color: 'white'}}>yaddah yaddah</h2>}/>
          <Route exact path="/:year" render={({ match }) => <Shows year={match.params.year}/>}/>
          <Route exact path="/:year/:id" render={({ match }) => <ShowDetails showId={match.params.id} showYear={match.params.year}/>}/>
        </Switch>
      </main>
    )
  }
}

export default App
