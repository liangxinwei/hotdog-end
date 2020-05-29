import app, {sequelize} from './app';
import {Logger} from './utils';

process.on('uncaughtException', Logger.error);

const port = 5000;

const server = app.listen(port, async () => {
  await sequelize.sync().catch((e) => {
    Logger.error('sequelize.sync error:', e);
    process.exit(0);
  });
  console.log(`\nServer run as http://127.0.0.1:${port}`);
  console.log('Press CTRL-C to stop\n');
  Logger.info('db sync successfully.');
});

app.on('error', (err: any) => {
  Logger.error('app error:', new Date(), ':', err);
});

export default server;
