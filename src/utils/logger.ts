import * as winston from 'winston';
import DayJS from 'dayjs';

const options: winston.LoggerOptions = {
  format: winston.format.combine(
    winston.format.label({label: 'default'}),
    winston.format.timestamp(),
    winston.format.printf((info) => {
      return `${DayJS(info.timestamp).format('YYYY-MM-DD HH:mm:ss')} [${info.label}] ${info.level}: ${info.message}`;
    })
  ),
  transports: [
    new winston.transports.Console({
      // level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
    }),
    new winston.transports.DailyRotateFile({
      json: true,
      filename: 'logs/output-%DATE%.log',
      level: 'info',
      datePattern: 'YYYYMMDD'
    }),
    new winston.transports.DailyRotateFile({
      json: true,
      filename: 'logs/error-%DATE%.log',
      level: 'error',
      datePattern: 'YYYYMMDD'
    })
  ]
};

const logger = winston.createLogger(options);

export function logSql(sql: string) {
  logger.info(sql);
}

if (process.env.NODE_ENV !== 'production') {
  logger.debug('Logging initialized at debug level');
}

export default logger;


