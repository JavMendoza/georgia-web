export function format_date(date_string) {
  if (!date_string) return date_string;
  let date = new Date(date_string);
  let month = date.getMonth() + 1;

  let dd = date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate();
  let mm = month < 10 ? `0${month}` : month;
  let yyyy = date.getFullYear();

  return `${dd}/${mm}/${yyyy}`;
};
