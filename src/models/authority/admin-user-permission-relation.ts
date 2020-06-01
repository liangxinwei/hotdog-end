import {Model, Table, Column, ForeignKey} from 'sequelize-typescript';
import AdminUser from './admin-user';
import Permission from './permission';

@Table({
  tableName: 'admin_user_permission_relations',
  timestamps: true,
})
export default class AdminUserPermissionRelation extends Model<AdminUserPermissionRelation> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => AdminUser)
  @Column
  userId: number;

  @ForeignKey(() => Permission)
  @Column
  permissionId: number;
}
