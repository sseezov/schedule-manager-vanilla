import { handlers } from '../core/init'
import Modal from './ui/Modal'

export default function Teachers() {
  const onClick = () => {
    const modal = document.querySelector('.modal-teachers')
    modal.classList.remove('hidden')
  }
  const id = handlers.getId()
  handlers[id] = onClick

  return `
  <h1 class="page-title">Преподаватели</h1>
    <table class="teachers-table">
      <thead>
        <tr>
          <th>Преподаватель</th>
          <th>Сокращение</th>
          <th>Должность</th>
          <th>Цвет</th>
        </tr>  
      </thead>
      <tbody>
        <tr>
          <td>Сизов Сергей Евгеньевич</td>
          <td>Сизов С.Е.</td>
          <td>Старший преподаватель</td>
          <td>Зеленый</td>
        </tr>  
      </tbody>
    </table>
    <button data-id=${id}>Добавить преподавателя</button>
  ${Modal('modal-teachers')}
    `
}
