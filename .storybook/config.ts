import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import '../src/App.scss';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/components', true, /.stories.tsx$/);

function loadStories() {
  addDecorator(withInfo);
  req.keys().forEach(req);
}

configure(loadStories, module);
