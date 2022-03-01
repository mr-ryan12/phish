import React, { Component } from 'react'
import Years from './Years/Years'
import './App.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      years: ['1983-1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000']
    }
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
