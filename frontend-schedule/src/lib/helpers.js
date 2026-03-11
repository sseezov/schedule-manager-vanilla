export function getMondayDate(offset = 0) {
  const today = new Date();
  const day = today.getDay();
  const diff = day === 0 ? 6 : day - 1;

  today.setDate(today.getDate() - diff + (offset * 7));

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const dayOfMonth = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${dayOfMonth}`;
}

export const sortLessonsByDays = (lessons) => {
  // console.log('lessons: ', lessons);
  const weekdays = Array.from(new Set(lessons.map((lesson) => lesson.weekday))).sort();
  return weekdays.reduce((acc, day) => {
    const lessonsByDay = lessons.filter(lesson => lesson.weekday === day).sort((a, b) =>
      a['lesson'] > b['lesson'] ? 1 : -1
    );
    return { ...acc, [day]: lessonsByDay }
  }, {})
}