import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { fetchYears } from './apiCalls'
import Years from './Years/Years'
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
      .catch(error => console.log(error))
  }

  render() {
    return (
      <main className="App">
        <h1>PHISH</h1>
        <Switch>
          <Route exact path="/" render={() => <Years years={this.state.years}/>}/>
        </Switch>
      </main>
    )
  }
}

export default App
