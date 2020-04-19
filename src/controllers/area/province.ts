import {Ctx, JsonController, Get} from 'routing-controllers';
import {Context} from 'koa';

@JsonController('/v1/area/province')
export default class {

  @Get('/')
  async getProvince(@Ctx() ctx: Context) {
    return {
      code: 200,
      data: 'success'
    };
  }
}
