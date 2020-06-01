import {Model, Table, Column, DataType, AllowNull, Default, IsDate, BelongsToMany} from 'sequelize-typescript';
import AdminUser from './admin-user';
import Permission from './permission';
import AdminUserRoleRelation from './admin-user-role-relation';
import RolePermissionRelation from './role-permission-relation';

@Table({
  tableName: 'roles',
})
export default class Role extends Model<Role> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(20))
  name: string;

  @Default(1)
  @Column({
    type: DataType.TINYINT,
    comment: '是否有效',
  })
  status: number;                   // 0 无效；1 有效

  @Column(DataType.STRING(20))
  remark: string;

  @IsDate
  @Column(DataType.DATE)
  createdAt: string;

  @IsDate
  @Column(DataType.DATE)
  updatedAt: string;

  @BelongsToMany(() => AdminUser, () => AdminUserRoleRelation)
  users: AdminUser[];

  @BelongsToMany(() => Permission, () => RolePermissionRelation)
  permissions: Permission[];
}
