import {Ctx, JsonController, Get, QueryParam} from 'routing-controllers';
import {Context} from 'koa';
import {Response} from '../../utils';

@JsonController('/v1/authority/admin_users')
export default class {

  @Get()
  async getAdminUsers(@Ctx() ctx: Context) {
    try {
      return Response.success([]);
    } catch (e) {
      return Response.error({ctx, e});
    }
  }

}
