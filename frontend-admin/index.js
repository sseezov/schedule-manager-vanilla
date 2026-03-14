import App from './src/App.js'
import { init } from './src/core/init.js'
import render from './src/render.js'

const app = document.querySelector('#app')
render(app, App())
init()
