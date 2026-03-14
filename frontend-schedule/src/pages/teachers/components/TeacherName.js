export default function TeacherName(teacher) {
  return `<a href="${`${teacher.id}/lessons`}"><h5 class="teacherName">${teacher.name}</h5></a>`
}
