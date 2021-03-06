import DayJS from 'dayjs';

DayJS.prototype.$$formatTime = function () {
  return this.format('YYYY-MM-DD HH:mm:ss');
};

DayJS.prototype.$$formatDate = function () {
  return this.format('YYYY-MM-DD');
};

DayJS.prototype.$$formatMonth = function () {
  return this.format('YYYY-MM');
};

declare namespace DayJS {
  export function $$formatTime(): string;

  export function $$formatDate(): string;

  export function $$formatMonth(): string;
}
