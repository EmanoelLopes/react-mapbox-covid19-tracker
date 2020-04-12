import { format, endOfYesterday } from 'date-fns';
import numeral from 'numeral';

export const getTheLastDay = () => {
  const yesterday = endOfYesterday();
  const formatedYesterday = format(yesterday, 'M/d/yy');

  return formatedYesterday;
};

export const formatNumeral = (value) => {
  const regEx = /[,]/g;
  return numeral(value).format('0,0').replace(regEx, '.');
};
