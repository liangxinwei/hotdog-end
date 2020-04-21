import {Middleware, KoaMiddlewareInterface} from 'routing-controllers';
import {Context} from 'koa';
import {Logger} from '../../utils';

@Middleware({type: 'before'})
export default class ControllerLoggerMiddleware implements KoaMiddlewareInterface {
  use(ctx: Context, next: (err?: any) => Promise<any>): Promise<any> {
    const startTime = Date.now();
    Logger.info(
      'request start. url:' +
      ctx.request.url +
      ', method:' +
      ctx.request.method +
      ', ip: ' +
      // 判断是否有反向代理 IP
      ctx.ip
      // ctx.request.headers['x-forwarded-for'] || ctx.request.headers['x-real-ip'] || ctx.request.headers['host'],
    );
    return next().then(() => {
      Logger.info(
        'request end.   url:' +
        ctx.request.url +
        ', used time:' +
        `${Date.now() - startTime}ms`
      );
    }).catch(e => {
      Logger.error('request error:', e);
    });
  }
}
