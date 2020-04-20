import 'reflect-metadata';
import 'colors';
import 'winston-daily-rotate-file';
import path from 'path';
import {createKoaServer} from 'routing-controllers';
import {Sequelize} from 'sequelize-typescript';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';
import {logSql} from './utils/logger';
import {ControllerLoggerMiddleware} from './middlewares';
import {MysqlConfig} from 'config';
import {configs} from './config';

const app = createKoaServer({
  cors: {
    origin: process.env.NODE_ENV === 'production' ? 'https://hotdog.liangxinwei.cn/' : 'http://localhost:7000',
    credentials: true
  },
  controllers: [`${__dirname}/controllers/**/*{.js,.ts}`],
  middlewares: [
    ControllerLoggerMiddleware,
  ],
});

app.use(serve(path.join(__dirname, '../static')));
app.use(bodyParser());
app.proxy = true;

const mysqlConfig = configs.mysql as MysqlConfig;

export const sequelize = new Sequelize({
  host: mysqlConfig.host[0],
  database: mysqlConfig.database,
  username: mysqlConfig.user,
  password: mysqlConfig.password,
  dialect: 'mysql',
  models: [path.resolve(__dirname, './models/**/*.js')],
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    timestamps: false,
    freezeTableName: true
  },
  // operatorsAliases: true,
  logging: logSql,
});

export default app;
