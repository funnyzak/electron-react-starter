import React from 'react';
import * as ReactDOM from 'react-dom'

import { Hello, Version } from './components';

const App = () => (
  <div>
    <Hello name="TypeScript" enthusiasmLevel={3} />
    <Version />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
