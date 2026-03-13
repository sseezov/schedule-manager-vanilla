export default function Lesson(lesson) {
  return `<tr>
    <td>
      <td class="time-cell">
        <div>${lesson.startTime}</div>
        <div>${lesson.endTime}</div>
      </td>  
      <td class="info-cell">
        <div class="subject">${lesson.subject.name}</div>
        <div class="groups">${lesson.unionGroups.map(({ group }) => group.name).join(', ')}</div>
      </td>
    </td>
  </tr>`
}
