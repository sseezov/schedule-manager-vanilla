import { handlers } from '../../core/init'
import Router from '../../core/router'
import render from '../../render'

export default function SidebarCategory(category) {
  const content = Router.getRoute(category)

  const onClick = () => {
    render(document.querySelector('.main'), content)
  }
  const id = handlers.getId()
  handlers[id] = onClick
  return `<li data-id=${id} class='sidebar-category'>${category}</li>`
}
