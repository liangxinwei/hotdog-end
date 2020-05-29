import {Model, Table, Column, DataType, ForeignKey} from 'sequelize-typescript';
import AdminUser from './admin-user';
import Role from './role';

@Table({
  tableName: 'admin_user_role_relations',
})
export default class AdminUserRoleRelation extends Model<AdminUserRoleRelation> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => AdminUser)
  @Column
  userId: number;

  @ForeignKey(() => Role)
  @Column
  roleId: number;

  @Column(DataType.DATE)
  createdAt: string;

  @Column(DataType.DATE)
  updatedAt: string;
}
