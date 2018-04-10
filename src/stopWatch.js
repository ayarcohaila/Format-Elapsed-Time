import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import formatElapsedTime from './formatElapsedTime.js';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      lastValue: 0,
      laps: [],
      diff: 0,
      lastClearedIncrementer: null,
    };
    this.incrementer = null;
  }

  handleStartClick() {
    this.incrementer = setInterval(() =>
      this.setState({
        value: this.state.value + 10,
        diff: this.state.value - this.state.lastValue
      }), 10);
  }

  handleStopClick() {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer
    });
  }

  handleLabClick() {
    this.setState({
      laps: [this.state.value, ...this.state.laps],
      lastValue: this.state.value
    });
  }

  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      value: 0,
      lastValue: 0,
      laps: []
    });
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{formatElapsedTime(this.state.value)}</h1>
        <h3>{formatElapsedTime(this.state.diff)}</h3>

        {(this.state.value === 0 || this.incrementer === this.state.lastClearedIncrementer
          ? <button className="start-btn" onClick={this.handleStartClick.bind(this)}>start</button>
          : <button className="stop-btn" onClick={this.handleStopClick.bind(this)}>stop</button>
        )}

        {(this.state.value !== 0 && this.incrementer !== this.state.lastClearedIncrementer
          ? <button className="lab-btn" onClick={this.handleLabClick.bind(this)}>lab</button>
          : null
        )}

        {(this.state.value !== 0 && this.incrementer === this.state.lastClearedIncrementer
          ? <button className="reset-btn" onClick={this.handleResetClick.bind(this)}>reset</button>
          : null
        )}
        <center>
        <table className="stopwatch-laps">
            {
              this.state.laps.map((lap, i) =>
                    <tr className="stopwatch-lap">
                      <td><strong>{(this.state.laps.length - i - 1) < 10 ? "0" + (this.state.laps.length - i - 1)
                                    : (this.state.laps.length - i - 1)}</strong></td>
                      <td>{formatElapsedTime(lap - this.state.laps[i + 1])}</td>
                      <td>{formatElapsedTime(lap)}</td>
                    </tr>)
            }

        </table>
      </center>
      </div>
    );
  }

}

export default StopWatch;
