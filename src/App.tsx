import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';

import './App.scss';

import BetterCounter from './components/BetterCounter';

const App: FC = () => {
  return (
    <div>
      <BetterCounter step={3} />
    </div>
  );
};

export default hot(App);
