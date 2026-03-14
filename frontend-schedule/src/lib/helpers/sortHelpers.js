export const sortLessonsByDays = (lessons) => {
  console.log('lessons: ', lessons)
  const weekdays = Array.from(new Set(lessons.map(lesson => lesson.weekday))).sort()
  return weekdays.reduce((acc, day) => {
    const lessonsByDay = lessons.filter(lesson => lesson.weekday === day).sort((a, b) =>
      a['lesson'] > b['lesson'] ? 1 : -1,
    )
    return { ...acc, [day]: lessonsByDay }
  }, {})
}
