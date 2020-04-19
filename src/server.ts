import app, {sequelize} from './app';
import {port} from './config';
import logger from './utils/logger';

process.on('uncaughtException', logger.error);

const server = app.listen(port, async () => {
  await sequelize.sync().catch((e) => {
    logger.error('sequelize.sync error:', e);
    process.exit(0);
  });
  console.log(`\nServer run as http://127.0.0.1:${port}`);
  console.log('Press CTRL-C to stop\n');
  logger.info('db sync successfully.');
});

app.on('error', (err: any) => {
  logger.error('app error:', new Date(), ':', err);
});

export default server;
