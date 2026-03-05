import Main from "./components/Main.js";
import Sidebar from "./components/Sidebar.js";

export default function App (){
  return `<div class="main-container">
      ${Sidebar()}
      ${Main()}
  </div>`
}