import {Model, Table, Column, DataType, ForeignKey, IsDate} from 'sequelize-typescript';
import Role from './role';
import Permission from './permission';

@Table({
  tableName: 'role_permission_relations',
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

  @IsDate
  @Column(DataType.DATE)
  createdAt: string;

  @IsDate
  @Column(DataType.DATE)
  updatedAt: string;
}
