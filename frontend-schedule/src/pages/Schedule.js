import { getMondayDate } from "../lib/helpers";

export default function Schedule(){
  const teacherId = new URL(window.location.href).pathname.split('/')[2];
  const date = getMondayDate()
  console.log(teacherId, date);
  // {teacherId: "170", date: "2026-03-09", publicationId: "cdb2a14c-a891-4f9f-b56c-7e8eb559c766"}
  return `<h1>${'Страница с расписанием'}</h1>`
}