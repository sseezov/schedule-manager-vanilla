import { handlers } from "../../core/init"
import render from "../../render"

export default function SidebarCategory(category) {
  const onClick = () => {
    render(document.querySelector('.main'), category)
  }
  const id = handlers.getId();
  handlers[id] = onClick
  return `<li data-id=${id} class='sidebar-category'>${category}</li>`
}