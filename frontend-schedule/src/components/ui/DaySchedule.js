import { calcDate, getMondayDate } from "../../lib/helpers/dateHelpers";
import Lesson from "./Lesson";

export default function LessonsTable(dayLessons) {
  const weekdays = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
  }

  const {lessons, startDate} = dayLessons;
  const weekdayIndex = lessons[0].weekday

  return `
  <div class="schedule-card"> 
    <div class="card-header">
      <h3>${weekdays[weekdayIndex]}</h3>
      <span class="card-date">${calcDate(startDate, weekdayIndex)}</span>
    </div>
    <table class="schedule-table">
      <tbody>
        ${lessons.map((lesson) => Lesson(lesson)).join('\n')}
      </tbody>
    </table>
  </div>
  `
}