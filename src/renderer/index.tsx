import React from 'react';
import * as ReactDOM from 'react-dom'

import Hello from './components/Hello/index';

const App = () => (
  <div>
    <Hello name="TypeScript" enthusiasmLevel={10} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
