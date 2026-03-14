import { calcDate } from '../../../lib/helpers/dateHelpers'
import styles from './DayTable.module.css'
import Lesson from './LessonRow'

export default function LessonsTable(dayLessons) {
  const weekdays = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье',
  }

  const { lessons, startDate } = dayLessons
  const weekdayIndex = lessons[0].weekday

  return `
  <div class="${styles.card}">
    <div class="${styles.header}">
      <h3 class="${styles.subheader}">${weekdays[weekdayIndex]}</h3>
      <span class="${styles.date}">${calcDate(startDate, weekdayIndex)}</span>
    </div>
    <table class="${styles.table}">
      <tbody>
        ${lessons.map(lesson => Lesson(lesson)).join('\n')}
      </tbody>
    </table>
  </div>
  `
}
