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

export function calcDate(startOfWeek, dayOfWeek) {
  const result = new Date(startOfWeek);
  
  result.setDate(result.getDate() + (dayOfWeek - 1));
  
  const day = String(result.getDate()).padStart(2, '0');
  const month = String(result.getMonth() + 1).padStart(2, '0');
  const year = result.getFullYear();
  
  return `${day}.${month}.${year}`;
}