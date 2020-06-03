import {Context} from 'koa';
import {Logger} from '../utils';
import {ResponseCode} from '../config';

interface ErrorParam {
  ctx?: Context;
  msg?: string;
  e?: Error;
}

/**
 * 统一返回类
 * code:
 *    200     成功
 *    201     失败
 *    500     服务器出错
 */
export default class {
  /**
   * 正常的返回
   * @param data
   * @return object
   */
  static success(data?: any) {
    return {
      code: ResponseCode.Success,
      data: data == null ? {} : data
    };
  }

  /**
   * 返回额外的数据
   * @param data
   * @param extraData   比如分页时的 count，page
   * @return object
   */
  static successWithExtraData(data: object, extraData: object) {
    return {
      code: ResponseCode.Success,
      data: data,
      ...extraData
    };
  }

  /**
   * 失败，但是未出错
   * @param msg
   * @return object
   */
  static failed(msg: string) {
    return {
      code: ResponseCode.Failure,
      msg: msg
    };
  }

  /**
   * 服务器出错
   * @param param
   * @return object
   */
  static error(param: ErrorParam) {
    console.error(param.ctx, param.e);
    Logger.error(param.e);
    return {
      code: ResponseCode.Error,
      msg: param.msg || '服务器错误'
    };
  }
}
