import addListener from "../lib/addListener.js";
import render, {router} from "../render.js";
import SidebarCategory from "./ui/SidebarCategory.js";

export default function Sidebar(){
  addListener('li', (element)=>{
    const main = document.querySelector('.main')
    render(main, (router[element.textContent])())
  })

  return `<ol class="sidebar">
      ${SidebarCategory('Звонки')}
      ${SidebarCategory('Группы')}
      ${SidebarCategory('Предметы')}
      ${SidebarCategory('Преподаватели')}
      ${SidebarCategory('Аудитории')}
    </ol>`
}