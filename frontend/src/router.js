import App from "./app.js";
import Teachers from "./pages/Teachers.js";

document.addEventListener('click', function(event) {
  const router = {
    '/teachers': Teachers
  }


    const link = event.target.closest('a');
    if (link) {
        event.preventDefault();
        const href = new URL(link.href);

        const app = document.querySelector('#app');
        app.innerHTML = router[href.pathname]();
        document.href = href;
    }
});
