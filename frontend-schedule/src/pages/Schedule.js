import DaySchedule from "../components/ui/DaySchedule";
import { getMondayDate } from "../lib/helpers/dateHelpers";
import { sortLessonsByDays } from "../lib/helpers/sortHelpers";

export default async function Schedule() {

  const teacherId = new URL(window.location.href).pathname.split('/')[2];
  const date = getMondayDate();

  async function fetchSchedule() {
    try {
      const response = await fetch(`/apiv1/teachers/lessons?teacher=${teacherId}&date=${date}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  const { startDate, lessons } = await fetchSchedule();
  const sortedLessons = sortLessonsByDays(lessons);
  const days = Object.keys(sortedLessons);

  return `
    <div class="schedule-dashboard">
      <h1>${'Страница с расписанием'}</h1>
      <div class="schedule-grid">
        ${days.map((day) => DaySchedule({ lessons: sortedLessons[day], startDate })).join('\n')}
      </div>
    </div>
  `
}