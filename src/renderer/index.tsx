import React from 'react';
import * as ReactDOM from 'react-dom'

import { Hello, Version } from './components';

const txtExample = require('./assets/source/example.txt')

const App = () => (
  <div>
    <Version />
    <div>
      NODE_ENV:
      {process.env.NODE_ENV}
    </div>
    <Hello name="TypeScript" enthusiasmLevel={3} />
    <div>{txtExample}</div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
