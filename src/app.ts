import 'reflect-metadata';
import path from 'path';
import {createKoaServer} from 'routing-controllers';
import {Sequelize} from 'sequelize-typescript';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';
import {MysqlConfig} from 'config';
import {distPath, configs} from './config';

const app = createKoaServer({
  controllers: [`${__dirname}/controllers/**/*{.js,.ts}`],
});

app.use(serve(distPath));
app.use(bodyParser());

const mysqlConfig = configs.mysql as MysqlConfig;

new Sequelize({
  host: mysqlConfig.host[0],
  database: mysqlConfig.database,
  username: mysqlConfig.user,
  password: mysqlConfig.password,
  dialect: 'mysql',
  modelPaths: [path.resolve(__dirname, `./models/${mysqlConfig.modelPath}`)],
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorsAliases: false,
  logging: true,
});

export default app;
