import Teachers from "./pages/Teachers.js";
import Schedule from "./pages/Schedule.js";
import App from "./App.js"
import ErrorComponent from "./components/ErrorComponent.js";

const router = {
  'teachers': Teachers,
  'lessons': Schedule,
  'publications': App,
  'error': ErrorComponent
}

export const mountRoute = async (url) => {
  const app = document.querySelector('#app');
  const href = new URL(url || window.location.href);
  const routes = href.pathname.split('/');

  let step = -1;
  if (routes.at(step) === '') {
    step -= 1;
  }
  if (router[routes.at(step)]) {
    app.innerHTML = await router[routes.at(step)]();
    return; 
  }
  app.innerHTML = router['error']();
  return;
}

document.addEventListener('click', async (event) => {
  const link = event.target.closest('a');
  if (link) {
    event.preventDefault()
    history.pushState(undefined, undefined, link.href)
    mountRoute(link.href)
  }
});

window.addEventListener('popstate', async () => {
  mountRoute()
});
