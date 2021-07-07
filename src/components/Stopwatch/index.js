// Write your code here
import './index.css'
import {Component} from 'react'

class Stopwatch extends Component {
  state = {
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    this.setState({timeElapsedInSeconds: 0})
    clearInterval(this.timeInterval)
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="bg-container">
        <h1 className="stop-watch-heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="center-container">
            <div>
              <div className="timer-image-container">
                <img
                  className="img-style"
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="timer"
                />
                <p className="timer-paragraph">Timer</p>
              </div>
              <h1 className="timer-heading" testid="timer">
                {time}
              </h1>
            </div>
          </div>
          <div className="btn-container">
            <button
              type="button"
              className="btn-style btn-1"
              onClick={this.onStartTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="btn-style btn-2"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn-style btn-3"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
