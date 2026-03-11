import LessonSchedule from "./LessonsSchedule";

export default function DaySchedule(dayLessons) {
  return `<table>
      ${dayLessons.map((lesson) => LessonSchedule(lesson))}
  </table>`
}