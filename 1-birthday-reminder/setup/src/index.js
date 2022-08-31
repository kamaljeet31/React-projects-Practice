import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Birthday from './Birthday'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Birthday />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
