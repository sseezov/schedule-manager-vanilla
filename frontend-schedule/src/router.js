import Teachers from "./pages/Teachers.js";
import Schedule from "./pages/Schedule.js";
import App from "./App.js"
import ErrorComponent from "./components/ErrorComponent.js";

console.log('load');

const router = {
  'publications': {
    'component': App,
    'teachers': {
      'component': Teachers,
      'dynamicRoute': {
        'lessons': {
          'component': Schedule
        }
      }
    }
  },
  'error': ErrorComponent
}

const navigate = (routes) => {
  let current = router;

  for (const segment of routes) {
    if (current[segment]) {
      current = current[segment];
    }
    else if (current['dynamicRoute']) {
      current = current['dynamicRoute'];
    }
  }
  return current.component || router.error;
}

export const mountRoute = async () => {
  const href = (window.location.href).replace(/\/+$/, '');
  if (window.location.href.at(-1) === '/') history.replaceState(undefined, undefined, href);
  const routes = href.split('/').slice(3);

  const element = navigate(routes);
  const app = document.querySelector('#app');
  app.innerHTML = await element();
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
