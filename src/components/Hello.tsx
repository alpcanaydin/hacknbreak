import React, { FC } from 'react';

interface Props {
  name: string;
}

const Hello: FC<Props> = ({ name }) => <h1>Hello {name}!</h1>;

export default Hello;
