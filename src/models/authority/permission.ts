import {Model, Table, Column, DataType, AllowNull, BelongsToMany} from 'sequelize-typescript';
import Role from './admin-user';
import AdminUser from './admin-user';
import AdminUserPermissionRelation from './admin-user-permission-relation';
import RolePermissionRelation from './role-permission-relation';

@Table({
  tableName: 'permissions',
  timestamps: true,
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

  @BelongsToMany(() => AdminUser, () => AdminUserPermissionRelation)
  users: AdminUser[];

  @BelongsToMany(() => Role, () => RolePermissionRelation)
  roles: Role[];
}
