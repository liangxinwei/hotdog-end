import * as winston from 'winston';
import DayJS from 'dayjs';

class Logger {
  private readonly consoleLevel: string;
  private readonly fileLevel: string;

  constructor() {
    // this.consoleLevel = logConfig.consoleLevel;
    // this.fileLevel = logConfig.fileLevel;
    this.consoleLevel = 'debug';
    this.fileLevel = 'info';

    this.addLogger('controller');
    this.addLogger('service');
  }

  public getLogger(category: string): winston.Logger {
    return winston.loggers.get(category);
  }

  private addLogger(category: string) {
    winston.loggers.add(category, {
      format: winston.format.combine(
        winston.format.label({ label: category}),
        winston.format.timestamp(),
        winston.format.printf((info) => {
          return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
        })
      ),

      transports: [
        // level设置打印的最低级别
        new winston.transports.Console({ level: this.consoleLevel }),
        new winston.transports.File({
          level: this.fileLevel,
          filename: `logs/${category}.log`,
          maxsize: 5242880,
          maxFiles: 20
        })
      ]
    });
  }
}

// const LogFactory = new Logger();

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
      level: process.env.NODE_ENV === 'production' ? 'error' : 'debug'
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


