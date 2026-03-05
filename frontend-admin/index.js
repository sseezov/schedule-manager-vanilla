import App from "./src/App.js";
import render from "./src/render.js";

const app = document.querySelector('#app')
render(app, App())
