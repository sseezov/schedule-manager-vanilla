import LessonSchedule from "./LessonsSchedule";

export default function LessonsTable(dayLessons) {
  return `
  <div class="schedule-card">
  <table class="schedule-table">
    <tbody>
      ${dayLessons.map((lesson) => LessonSchedule(lesson))}
    </tbody>
  </table>
  </div>
  `
}