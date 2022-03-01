import React, { Component } from 'react'
import { fetchYears } from './apiCalls'
import Years from './Years/Years'
import './App.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      years: [{date: '1983-1987', show_count: 20}, {date: '1988', show_count: 10}, {date: '1989', show_count: 9}, {date:'1990', show_count: 35}, {date: '1991', show_count: 40}, {date: '1992', show_count: 24}, {date: '1993', show_count: 11}, {date: '1994', show_count: 118}, {date: '1995', show_count: 80}, {date: '1996', show_count: 44}, {date: '1997', show_count: 22}, {date: '1998', show_count: 70}, {date: '1999', show_count: 36}, {date: '2000', show_count: 90}]
    }
  }

  // componentDidMount = () => {
  //   fetchYears()
  //     .then(data => {
  //       console.log(data)
  //     })
  // }

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
