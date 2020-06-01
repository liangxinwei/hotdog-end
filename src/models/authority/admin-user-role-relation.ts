import {Model, Table, Column, ForeignKey} from 'sequelize-typescript';
import AdminUser from './admin-user';
import Role from './role';

@Table({
  tableName: 'admin_user_role_relations',
  timestamps: true,
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
}
