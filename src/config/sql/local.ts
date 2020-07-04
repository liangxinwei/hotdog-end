import { ConfigMap } from 'config';

export const configs: ConfigMap = {
  mysql: {
    host: ['127.0.0.1'],
    user: 'root',
    password: '123456',
    database: 'hotdog',
    key: 'mysql',
  },
};
