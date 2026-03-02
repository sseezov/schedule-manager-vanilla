import MainCard from "./components/MainCard.js"
import Teachers from "./pages/Teachers.js"

export default function App() {
  
  return `
    <div class="main">
      <h1>Расписание занятий</h1>
      <h2>Выберите категорию для просмотра</h2>
      <div class="mainCardsContainer">
        ${MainCard({ name: 'Преподаватели', description: 'Расписание по преподавателям', href: '/teachers', component: Teachers })}
        ${MainCard({ name: 'Группы', description: 'Расписание по группам', href: '/groups' })}
      </div>
    </div>
  `
}