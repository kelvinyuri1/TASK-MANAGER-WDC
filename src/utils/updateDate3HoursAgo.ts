export function updateDate3HoursAgo(date: Date) {
  const updateDate = new Date(new Date(date).getTime() - 1000 * 60 * 60 * 3);
  return updateDate;
}
