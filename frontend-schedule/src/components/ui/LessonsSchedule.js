export default function LessonSchedule(lesson) {
  return `<td>
    <div class="lesson-info">
      <div class="time">${lesson.startTime}-${lesson.endTime}</div>
      <div class="subject">${lesson.subject.name}</div>
      <div class="groups">${lesson.unionGroups}</div>
      <div class="teacher">${lesson.teachers[0].fio}</div>
    </div>
  </td>`
}
