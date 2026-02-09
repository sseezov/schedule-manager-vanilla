import App from "./app.js";
import Teachers from "./pages/Teachers.js";

document.addEventListener('click', async function (event) {
  const router = {
    '/teachers': Teachers
  }

  const link = event.target.closest('a');
  if (link) {
    event.preventDefault();
    const href = new URL(link.href);

    const app = document.querySelector('#app');
    app.innerHTML = await router[href.pathname]();
  }
});
