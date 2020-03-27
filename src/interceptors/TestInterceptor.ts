import {Interceptor, InterceptorInterface, Action} from 'routing-controllers';

@Interceptor()
export default class TestInterceptor implements InterceptorInterface {

  intercept(action: Action, content: any) {
    console.log('TestInterceptor....');
    return content;
  }

}
