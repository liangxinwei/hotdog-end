import {Model, Table, Column, ForeignKey} from 'sequelize-typescript';
import Role from './role';
import Permission from './permission';

@Table({
  tableName: 'role_permission_relations',
  timestamps: true,
})
export default class RolePermissionRelation extends Model<RolePermissionRelation> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Role)
  @Column
  roleId: number;

  @ForeignKey(() => Permission)
  @Column
  permissionId: number;
}
