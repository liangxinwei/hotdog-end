import 'reflect-metadata';
import 'colors';
import 'winston-daily-rotate-file';
import path from 'path';
import {createKoaServer} from 'routing-controllers';
import {Sequelize} from 'sequelize-typescript';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';
import {MysqlConfig} from 'config';
import Logger, {logSql} from './utils/logger';
import {configs} from './config';

const app = createKoaServer({
  cors: {
    origin: process.env.NODE_ENV === 'production' ? 'https://hotdog.liangxinwei.cn/' : 'http://localhost:7000',
    credentials: true
  },
  controllers: [path.resolve(__dirname, './controllers/**/*.js')],
  interceptors: [path.resolve(__dirname, './interceptors/global/*.js')],
  middlewares: [path.resolve(__dirname, './middlewares/global/*.js')],
});

app.use(serve(path.join(__dirname, '../static')));
app.use(bodyParser());
app.proxy = true;

const mysqlConfig = configs.mysql as MysqlConfig;

const sequelize = new Sequelize({
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
    freezeTableName: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  },
  // operatorsAliases: true,
  logging: logSql,
});

sequelize.authenticate().then(() => {
  Logger.info('mysql connection has been established successfully.');
}).catch((err) => {
  Logger.error('Unable to connect to the database:', err);
  process.exit(0);
});

export {
  sequelize
};

export default app;
