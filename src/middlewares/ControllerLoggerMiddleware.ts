import {Middleware, KoaMiddlewareInterface} from 'routing-controllers';

@Middleware({type: 'before'})
export default class ControllerLoggerMiddleware implements KoaMiddlewareInterface {
  use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
    const startTime = Date.now();
    console.log(
      'request start. url:',
      context.request.url,
      ', method:',
      context.request.method,
      'ip:',
      // 判断是否有反向代理 IP
      context.request.headers['x-forwarded-for'] || context.request.headers['x-real-ip']
    );
    return next().then(() => {
      console.log(
        'request end.   url:',
        context.request.url, ',' +
        ' used time:',
        `${Date.now() - startTime}ms`.yellow
      );
    }).catch(e => {
      console.error('request error:', e);
    });
  }
}
