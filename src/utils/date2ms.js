export const date2ms = (d) => {
  let date = new Date(Math.round((d - 25569) * 864e5));
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const day = date.getDay();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return { month, day, year };
};
