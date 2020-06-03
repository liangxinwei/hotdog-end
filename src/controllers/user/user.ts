import {Ctx, Param, Get, Post, JsonController, UseInterceptor, Body} from 'routing-controllers';
import {UserData} from 'db/user';
import {Context} from 'koa';
import {Response} from '../../utils';
import LoggerInterceptor from '../../interceptors/logger';
import User from '../../models/user/user';

/**
 * 获取列表数据
 */
async function filterList({gender}: { gender?: number } = {}) {
  return User.findAll({
    raw: true,
    attributes: ['uid', 'name', 'age', 'gender'],
    where: gender && {
      gender,
    },
  });
}

async function addUser(user: UserData) {
  return (await User.create(user)).save();
}

@JsonController('/v1/users')
export default class {
  @Get('/')
  @UseInterceptor(LoggerInterceptor)
  async getAll(@Ctx() ctx: Context) {
    try {
      const res = await filterList();
      return Response.success(res);
    } catch (e) {
      return Response.error({ctx, e});
    }
  }

  @Get('/filter/:gender')
  async getAllByGender(@Ctx() ctx: Context, @Param('gender') gender: number) {
    try {
      if (!gender) {
        return Response.failed('缺少参数: gender');
      }
      const res = await filterList({gender});
      return Response.success(res);
    } catch (e) {
      return Response.error({ctx, e});
    }
  }

  @Post('/add')
  async addOne(@Ctx() ctx: Context, @Body() user: UserData) {
    try {
      user.age = +user.age;
      user.gender = +user.gender;
      // const existedUser = findOneUser(user.name);
      // console.log(existedUser);
      // return {
      //   code: 200,
      // };
      addUser(user).catch(e => {
        console.error(ctx, e, {
          type: 'insert',
          ...user,
        });
      });
      return Response.success();
    } catch (e) {
      return Response.error({ctx, e});
    }
  }
}
