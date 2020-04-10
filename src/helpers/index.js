import { format, endOfYesterday } from 'date-fns';

export const getTheLastDay = () => {
  const yesterday = endOfYesterday();
  const formatedYesterday = format(yesterday, 'M/d/yy');

  return formatedYesterday;
};