import Teachers from "./pages/Teachers.js";
import Schedule from "./pages/Schedule.js";
import App from "./App.js"

const router = {
  'teachers': Teachers,
  'lessons': Schedule,
  'publications': App
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
  const href = new URL(this.window.location.href);

  const app = document.querySelector('#app');
  app.innerHTML = await router[href.pathname.split('/')[1]]();
});
