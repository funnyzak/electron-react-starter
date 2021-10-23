import React from 'react'
import * as ReactDOM from 'react-dom'

import { Hello, Version, Image } from './components'
import avatarImg from './assets/img/avatar.png'
import txtExample from './assets/source/example.txt'
import hbsExample from './assets/source/example.hbs'

const App = () => (
  <div>
    <img src="./icon/application.png" alt="appliction icon" />
    <Image src={avatarImg} />
    <Version />
    <div>
      NODE_ENV:
      {process.env.NODE_ENV}
    </div>
    <Hello name="TypeScript" enthusiasmLevel={3} />
    <div>{txtExample}</div>
    <div dangerouslySetInnerHTML={{ __html: hbsExample }} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
