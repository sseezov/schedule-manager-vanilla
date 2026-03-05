import SidebarCategory from "./ui/SidebarCategory.js";

export default function Sidebar(){

  return `<ol class="sidebar">
      ${SidebarCategory('Звонки')}
      ${SidebarCategory('Группы')}
      ${SidebarCategory('Предметы')}
      ${SidebarCategory('Преподаватели')}
      ${SidebarCategory('Аудитории')}
    </ol>`
}