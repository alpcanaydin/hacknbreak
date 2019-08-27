import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';

import './App.scss';

import CounterSwitch from './components/CounterSwitch';

const App: FC = () => {
  return (
    <div>
      <CounterSwitch />
    </div>
  );
};

export default hot(App);
