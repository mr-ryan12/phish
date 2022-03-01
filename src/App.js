import React, { Component } from 'react'
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
        <Years years={this.state.years}/>
      </main>
    )
  }
}

export default App
