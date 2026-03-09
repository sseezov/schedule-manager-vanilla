export function getMondayDate(offset = 0) {
  const today = new Date();
  const day = today.getDay();
  const diff = day === 0 ? 6 : day - 1;
  
  const monday = new Date(today);
  monday.setDate(today.getDate() - diff + (offset * 7));
  
  const year = monday.getFullYear();
  const month = String(monday.getMonth() + 1).padStart(2, '0');
  const dayOfMonth = String(monday.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${dayOfMonth}`;
}