// @flow
import React      from 'react'
import { render } from 'react-dom'
import App        from './Components/App.jsx'

const meta: Meta = {
  title: '琵琶湖のいきもの'
}

render(
  <div>
    {/* <Hello /> */}
    <App meta={ meta } />
  </div>,
  document.getElementById('app')
)
