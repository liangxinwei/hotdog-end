import {Middleware, KoaMiddlewareInterface} from 'routing-controllers';

@Middleware({type: 'before'})
export default class LoggerMiddleware implements KoaMiddlewareInterface {
  use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
    console.log('start request:', context);
    return next().then(() => {
      console.log('after request:');
    }).catch(e => {
      console.log('request error:', e);
    });
  }
}
