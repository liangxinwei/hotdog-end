import {Ctx, Param, Get, Post, JsonController, UseInterceptor, Body} from 'routing-controllers';
import {UserData} from 'user-info';
import {Context} from 'koa';
import {TestInterceptor} from '../../interceptors';
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

async function findOneUser(name: string) {
  return await User.findOne({
    where: {
      name
    }
  });
}

async function addUser(user: UserData) {
  return (await User.create(user)).save();
}

@JsonController('/v1/list')
@UseInterceptor(TestInterceptor)
export default class {
  @Get('/')
  async getAll(@Ctx() ctx: Context) {
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
  async getAllByGender(@Ctx() ctx: Context, @Param('gender') gender: number) {
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
      return {
        code: 200,
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
