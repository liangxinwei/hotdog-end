import {Model, Table, Column} from 'sequelize-typescript';

// @ts-ignore
@Table({
  tableName: 'user',
})
export default class User extends Model<User> {
  @Column({
    comment: '自增ID',
    autoIncrement: true,
    primaryKey: true,
  })
  uid: number;

  @Column({
    comment: '姓名',
  })
  name: string;

  @Column({
    comment: '年龄',
    defaultValue: 0,
  })
  age: number;

  @Column({
    comment: '性别',
  })
  gender: number;
}
