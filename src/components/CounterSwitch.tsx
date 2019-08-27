import React, { Component, Fragment } from 'react';

import Counter from './Counter';

interface State {
  show: boolean;
}

class CounterSwitch extends Component<{}, State> {
  public state = {
    show: true,
  };

  public toggleCounter = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  public render() {
    const { show } = this.state;

    return (
      <Fragment>
        <div>
          <h1>Switch counter:</h1>
          <button onClick={this.toggleCounter}>{show ? 'Gizle' : 'Goster'}</button>
        </div>
        {show && <Counter step={1} />}
      </Fragment>
    );
  }
}

export default CounterSwitch;
