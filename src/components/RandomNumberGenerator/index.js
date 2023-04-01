// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNum: 0}

  onClickGenerate = () => {
    const mathNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNum: mathNumber})
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="main-container">
        <div className="white-container">
          <h1 className="heading">Random Number</h1>
          <p className="text">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button-styling"
            onClick={this.onClickGenerate}
          >
            Generate
          </button>
          <p className="number-styling">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
