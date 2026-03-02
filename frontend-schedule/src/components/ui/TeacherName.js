export default function TeacherName(teacher) {
  return `<a href=${`/teachers/${teacher.id}/lessons`}>
    <h5 class="teacherName">${teacher.name}</h5>
  </a>`
}