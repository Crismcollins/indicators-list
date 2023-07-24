export function getLastMonthDate(currentDate) {
  const lastMonthDate = new Date(currentDate);
  lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);

  if (lastMonthDate.getMonth() === 11) {
    lastMonthDate.setFullYear(lastMonthDate.getFullYear() - 1);
  }

  const currentDay = currentDate.getDate();
  lastMonthDate.setDate(Math.min(currentDay, new Date(lastMonthDate.getFullYear(), lastMonthDate.getMonth() + 1, 0).getDate()));

  return {
    year: lastMonthDate.getFullYear(),
    month: lastMonthDate.getMonth() + 1,
    day: lastMonthDate.getDate(),
  };
}

export const getCurrentDate = () => {
    const currentDate = new Date();

    return {
        day: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear(),
        fullDate: currentDate,
        formatDate: `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`,
        timeStamp: currentDate.getTime()
    }
}