import {Action, InterceptorInterface} from 'routing-controllers';

export default class LoggerInterceptor implements InterceptorInterface {
  intercept(action: Action, content: any) {
    console.log('loggerInterceptor....');
    return content;
  }
}
