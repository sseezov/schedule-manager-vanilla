import TeacherName from "./components/TeacherName";

export default async function Teachers() {
  async function fetchTeachers() {
    try {
      const response = await fetch('/apiv1/teachers');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  const teachers = await fetchTeachers();
  
  const teachersElements = teachers.map((teacher) => TeacherName(teacher)).join('\n')
  console.log(teachersElements);
  return `<div>${teachersElements}</div>`
}