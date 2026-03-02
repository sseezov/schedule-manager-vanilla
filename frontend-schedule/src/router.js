import Teachers from "./pages/Teachers.js";
import Schedule from "./pages/Schedule.js";

document.addEventListener('click', async function (event) {
  const router = {
    'teachers': Teachers,
    'lessons': Schedule
  }

  const link = event.target.closest('a');
  if (link) {
    event.preventDefault();
    const href = new URL(link.href);
    console.log(`router`, href.pathname.split('/').at(-1))

    const app = document.querySelector('#app');
    app.innerHTML = await router[href.pathname.split('/').at(-1)]();
  }
});
