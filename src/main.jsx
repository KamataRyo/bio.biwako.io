// @flow

import React      from 'react'
import { render } from 'react-dom'
import Hello      from './Hello.jsx'

render(
  <div>
    {/* <Hello /> */}
    <Hello name={ 'aaa' } />
  </div>,
  document.getElementById('app')
)
