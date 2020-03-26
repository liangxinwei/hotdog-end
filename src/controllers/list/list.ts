import {Ctx, Param, Get, JsonController} from 'routing-controllers';
import {Context} from 'koa';
import User from '../../models/user/user';

/**
 * 获取列表数据
 */
async function filterList({gender}: { gender?: number } = {}) {
  return User.findAll({
    raw: true,
    where: gender && {
      gender,
    },
  });
}

@JsonController('/v1/list')
export default class {
  @Get('/')
  async router(@Ctx() ctx: Context) {
    try {
      return {
        code: 200,
        data: await filterList(),
      };
    } catch (e) {
      console.error(ctx, e);
      return {
        code: 500,
        message: '服务器错误',
      };
    }
  }

  @Get('/filter/:gender')
  async anotherRouter(@Ctx() ctx: Context, @Param('gender') gender: number) {
    try {
      if (!gender) {
        return {
          code: 401,
          message: '缺少参数',
        };
      }

      return {
        code: 200,
        data: await filterList({
          gender,
        }),
      };
    } catch (e) {
      console.error(ctx, e);
      return {
        code: 500,
        message: '服务器错误',
      };
    }
  }
}
