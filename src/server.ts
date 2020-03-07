import app from './app';
import {port} from './config';

process.on('uncaughtException', console.error);

const server = app.listen(port, () => {
  console.log(`Server run as http://127.0.0.1:${port}`);
  console.log('\nPress CTRL-C to stop\n');
});

export default server;
