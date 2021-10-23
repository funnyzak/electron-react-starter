import React from 'react';
import * as ReactDOM from 'react-dom'

import { Hello, Version } from './components';

const txtExample = require('./assets/source/example.txt')

const App = () => (
  <div>
    <img src="./icon/application.png" alt="appliction icon" />
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
