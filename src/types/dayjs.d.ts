import DayJS from 'dayjs';

DayJS.boxFormatTime = function () {
  return this.format('YYYY-MM-DD HH:mm:ss');
};

DayJS.boxFormatDate = function () {
  return this.format('YYYY-MM-DD');
};

DayJS.boxFormatMonth = function () {
  return this.format('YYYY-MM');
};

declare namespace DayJS {
  export function boxFormatTime(): string;
  export function boxFormatDate(): string;
  export function boxFormatMonth(): string;
}
