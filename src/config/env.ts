import {Logger} from '../utils';

const env = process.env.NODE_ENV;
export const isPro = env === 'production';
export const isDev = env === 'development';
export const isLocal = env === 'local' || env === 'local_dev';
Logger.info('env:', env);
