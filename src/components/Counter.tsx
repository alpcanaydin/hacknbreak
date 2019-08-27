import React, { Component } from 'react';

import './Counter.scss';

interface Props {
  step: number;
  duration?: number;
}

interface State {
  count: number;
}

class Counter extends Component<Props, State> {
  private interval!: NodeJS.Timeout;

  public readonly state: State = {
    count: 0,
  };

  public componentDidMount() {
    const { duration = 1000 } = this.props;

    this.interval = setInterval(() => {
      console.log('hello');
      this.increment();
    }, duration);
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  public decrement = () => {
    const { count } = this.state;
    const { step } = this.props;

    if (count === 0) {
      return;
    }

    this.setState({ count: count - step });
  };

  public increment = () => {
    const { count } = this.state;
    const { step } = this.props;

    this.setState({ count: count + step });
  };

  public render() {
    const { count } = this.state;

    return (
      <div className="Counter">
        <h1>{count}</h1>
        <button onClick={this.decrement}>Azalt</button>{' '}
        <button onClick={this.increment}>Arttir</button>
      </div>
    );
  }
}

export default Counter;
