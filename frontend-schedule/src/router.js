import Teachers from "./pages/Teachers.js";
import Schedule from "./pages/Schedule.js";
import App from "./App.js"
import ErrorComponent from "./components/ErrorComponent.js";

console.log('load');

const router = {
  'teachers': Teachers,
  'lessons': Schedule,
  'publications': App,
  'error': ErrorComponent
}

export const mountRoute = async () => {
  const href = (window.location.href).replace(/\/+$/, '');
  if (window.location.href.at(-1) === '/') history.replaceState(undefined, undefined, href);

  const app = document.querySelector('#app');
  const routes = href.split('/');

  if (router[routes.at(-1)]) {
    app.innerHTML = await router[routes.at(-1)]();
    return;
  }
  app.innerHTML = router['error']();
  return;
}

document.addEventListener('click', async (event) => {
  const baseUrl = window.location.href;
  const link = event.target.closest('a');
  const href = link.getAttribute('href');
  if (link) {
    event.preventDefault()
    history.pushState(undefined, undefined, `${baseUrl}/${href}`)
    mountRoute()
  }
});

window.addEventListener('popstate', () => mountRoute());
