import MainCard from './components/MainCard.js'
import styles from './App.module.css'

export default function App() {
  return `
    <div class="${styles.main}">
      <h1 class="${styles.header}">Расписание занятий</h1>
      <h2 class="${styles.subheader}">Выберите категорию для просмотра</h2>
      <div class="${styles.cardsContainer}">
        ${MainCard({ name: 'Преподаватели', description: 'Расписание по преподавателям', href: 'teachers' })}
        ${MainCard({ name: 'Группы', description: 'Расписание по группам', href: 'groups' })}
      </div>
    </div>
  `
}
