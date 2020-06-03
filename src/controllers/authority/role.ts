import {Ctx, JsonController, Get, Post, Param, Body, Delete} from 'routing-controllers';
import {Context} from 'koa';
import {RoleInfo, RoleData} from 'db/role';
import {Response} from '../../utils';
import Role from '../../models/authority/role';


@JsonController('/v1/authority/roles')
export default class {

  @Get()
  async getRoles(@Ctx() ctx: Context) {
    try {
      const res = await Role.findAll({
        raw: true,
        attributes: {
          exclude: ['status']
        },
        where: {
          status: 1
        }
      });
      return Response.success(res);
    } catch (e) {
      return Response.error({ctx, e});
    }
  }

  @Get('/:id')
  async getRole(@Ctx() ctx: Context, @Param('id') id: number) {
    try {
      if (id == null) {
        return Response.failed('缺少参数：role_id');
      }
      const role: RoleInfo = await Role.findOne({raw: true, where: {id}});
      if (role) {
        return Response.success(role);
      } else {
        return Response.failed(`未查询到 ID 为 ${id} 的角色信息`);
      }
    } catch (e) {
      return Response.error({ctx, e});
    }
  }

  @Delete('/:id')
  async deleteRole(@Ctx() ctx: Context, @Param('id') id: number) {
    try {
      if (id == null) {
        return Response.failed('缺少参数：role_id');
      }
      const role: RoleInfo = await Role.findOne({raw: true, where: {id}});
      if (role) {
        await Role.update({status: 0}, {where: {id: role.id}});
        return Response.success('删除成功');
      } else {
        return Response.failed(`删除失败：未查询到 ID 为 ${id} 的角色信息`);
      }
    } catch (e) {
      return Response.error({ctx, e});
    }
  }

  @Post()
  async addRole(@Ctx() ctx: Context, @Body() role: RoleData) {
    try {
      const existedRole: Role = await Role.findOne({
        raw: true,
        where: {
          name: role.name
        }
      });
      if (existedRole) {
        return Response.failed('要创建的角色已经存在');
      }
      const newRole = await Role.create(role);
      // const newRole = new Role(role);
      newRole.save();
      return Response.success(newRole);
    } catch (e) {
      return Response.error({ctx, e});
    }
  }
}
