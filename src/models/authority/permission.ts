import {Model, Table, Column, DataType, AllowNull, IsDate, BelongsToMany} from 'sequelize-typescript';
import Role from './admin-user';
import AdminUser from './admin-user';
import AdminUserPermissionRelation from './admin-user-permission-relation';
import AdminUserRoleRelation from './admin-user-role-relation';

@Table({
  tableName: 'permissions',
})
export default class Permission extends Model<Permission> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(20))
  name: string;

  @AllowNull(false)
  @Column
  value: string;

  @Column
  remark: string;

  @IsDate
  @Column(DataType.DATE)
  createdAt: string;

  @IsDate
  @Column(DataType.DATE)
  updatedAt: string;

  @BelongsToMany(() => AdminUser, () => AdminUserPermissionRelation)
  users: AdminUser[];

  @BelongsToMany(() => Role, () => AdminUserRoleRelation)
  roles: Role[];
}
