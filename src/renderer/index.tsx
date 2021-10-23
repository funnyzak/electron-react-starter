import React from 'react';
import * as ReactDOM from 'react-dom'

import { Hello, Version } from './components';

const App = () => (
  <div>
    <Version />
    <div>
      NODE_ENV:
      {process.env.NODE_ENV}
    </div>
    <Hello name="TypeScript" enthusiasmLevel={3} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
