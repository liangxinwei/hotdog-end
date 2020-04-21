import {Interceptor, Action, InterceptorInterface} from 'routing-controllers';

@Interceptor()
export default class Logger implements InterceptorInterface {
  intercept(action: Action, content: any) {
    console.log('test global interceptor....');
    return content;
  }
}
