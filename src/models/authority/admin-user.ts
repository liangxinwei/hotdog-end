import {Model, Table, Column, DataType, Default, AllowNull, BelongsToMany, IsDate} from 'sequelize-typescript';
import Role from './role';
import Permission from './permission';
import AdminUserRoleRelation from './admin-user-role-relation';
import AdminUserPermissionRelation from './admin-user-permission-relation';

@Table({
  tableName: 'admin_users',
  timestamps: true,
})
export default class AdminUser extends Model<AdminUser> {
  @Column({
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(10))
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password: string;

  @Column(DataType.STRING(20))
  telephone: string;

  @Column({
    type: DataType.DATE,
    field: 'last_login_time',
  })
  lastLoginTime: string;

  @Default(1)
  @Column({
    type: DataType.TINYINT,
    comment: '账号是否有效',
  })
  enabled: number;                   // 0 无效；1 有效

  @Column({
    type: DataType.DATE,
    field: 'created_at',
    defaultValue: DataType.NOW,
  })
  createdAt: string;

  @Column({
    type: DataType.DATE,
    field: 'updated_at',
    defaultValue: DataType.NOW,
  })
  updatedAt: string;

  @BelongsToMany(() => Role, () => AdminUserRoleRelation)
  roles: Role[];

  @BelongsToMany(() => Permission, () => AdminUserPermissionRelation)
  permissions: Permission[];
}
