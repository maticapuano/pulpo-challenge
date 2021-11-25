export const isDate = (value: any): boolean => {
  return value instanceof Date;
};

export const dateToString = (date: Date): string => {
  const newDate = new Date(date);
  return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
};
