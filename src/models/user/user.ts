import {Model, Table, Column, DataType} from 'sequelize-typescript';

@Table({
  tableName: 'user',
  timestamps: true,
})
export default class User extends Model<User> {
  @Column({
    comment: '自增ID',
    autoIncrement: true,
    type: DataType.INTEGER,
    primaryKey: true,
  })
  uid: number;

  @Column({
    comment: '姓名',
    type: DataType.STRING(12),
  })
  name: string;

  @Column({
    comment: '年龄',
    defaultValue: 0,
    type: DataType.TINYINT,
  })
  age: number;

  @Column({
    comment: '性别',
    type: DataType.TINYINT,
  })
  gender: number;
}
