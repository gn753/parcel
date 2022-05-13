import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import App from './App';

render(
  <StrictMode>
    <h1>Hello Parcel Bundler</h1>
    < App/>
  </StrictMode>,
  document.getElementById('root')
)