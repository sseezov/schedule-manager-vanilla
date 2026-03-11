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

const findRoute = (routes) => {
  if (router[routes.at(-1)]) {
    return router[routes.at(-1)]()
  }
  return router['error']()
}

export const init = async () => {
  const href = new URL(window.location.href);

  const app = document.querySelector('#app');
  const routes = href.pathname.split('/');
  console.log('routes ', routes);

  app.innerHTML = await findRoute(routes);
}

document.addEventListener('click', async (event) => {
  const link = event.target.closest('a');
  if (link) {
    event.preventDefault()
    const href = new URL(link.href);
    history.pushState(undefined, undefined, href)

    const app = document.querySelector('#app');
    app.innerHTML = await router[href.pathname.split('/').at(-1)]();
  }
});

window.addEventListener('popstate', async () => {
  const href = new URL(window.location.href);

  const app = document.querySelector('#app');
  app.innerHTML = await router[href.pathname.split('/')[1]]();
});
