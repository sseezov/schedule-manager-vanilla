export default function LessonSchedule(lesson) {
  return `<tr>
    <td>
      <td class="time-cell">${lesson.startTime}-${lesson.endTime}</td>  
      <td class="info-cell">
        <div class="subject">${lesson.subject.name}</div>
        <div class="groups">${lesson.unionGroups.map(({ group }) => group.name).join(', ')}</div>
      </td>
    </td>
  </tr>`
}
