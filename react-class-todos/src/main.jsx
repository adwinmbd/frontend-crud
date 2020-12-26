import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import './assets/index.css'
import App from './components/App'
import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
