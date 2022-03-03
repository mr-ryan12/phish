import React, { Component } from 'react'
import { fetchRandomShow } from '../apiCalls'
import PropTypes from 'prop-types'
import NavigationRandomShow from '../NavigationRandomShow/NavigationRandomShow'
import './RandomShow.scss'

class RandomShow extends Component {
  constructor() {
    super()
    this.state = {
      show: '',
    }
  }

  componentDidMount = () => {
    fetchRandomShow()
      .then(data => {
        console.log(data.data)
        this.setState({
          show: data.data
        })
      })
      .catch(error => console.log(error.message))
  }

  render() {
    return(
      <>
        <NavigationRandomShow/>
      </>
    )
  }
}

RandomShow.propTypes = {

}

export default RandomShow