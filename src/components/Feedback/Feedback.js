import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Please leave feedback</p>
        <div>
          <button type="button" onClick={() => this.handleClick('good')}>
            Good
          </button>
          <button type="button" onClick={() => this.handleClick('neutral')}>
            Neutral
          </button>
          <button type="button" onClick={() => this.handleClick('bad')}>
            Bad
          </button>
        </div>

        <h3>Statistics</h3>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
