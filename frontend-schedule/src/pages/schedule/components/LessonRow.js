import styles from './LessonRow.module.css'

export default function Lesson(lesson) {
  return `
  <tr>
    <td>
      <td class="${styles.time}">
        <div>${lesson.startTime}</div>
        <div>${lesson.endTime}</div>
      </td>  
      <td class="${styles.info}">
        <div class="${styles.subject}">${lesson.subject.name}</div>
        <div class="${styles.groups}">${lesson.unionGroups.map(({ group }) => group.name).join(', ')}</div>
      </td>
    </td>
  </tr>`
}
