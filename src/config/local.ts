import { ConfigMap } from 'config';

export const configs: ConfigMap = {
  mysql: {
    host: ['127.0.0.1'],
    user: 'root',
    password: '12345678',
    database: 'hotdog',
    key: 'mysql',
    modelPath: 'user',
  },
};
