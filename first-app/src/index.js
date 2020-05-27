import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { register } from './serviceWorker'

if (document.querySelector('#root')) {

    ReactDOM.render(
        <App/>, document.querySelector('#root')
    )
}
register()