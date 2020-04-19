import {Model, Table, Column, ForeignKey, AllowNull, BelongsTo, DataType} from 'sequelize-typescript';
import Street from './street';

// @ts-ignore
@Table({
  tableName: 'village'
})
export default class Village extends Model<Village> {
  @AllowNull(false)
  @Column({
    comment: '村、小区 code',
    type: DataType.STRING(16),
    primaryKey: true,
  })
  code: string;

  @AllowNull(false)
  @ForeignKey(() => Street)
  @Column({
    comment: '街道 code',
    type: DataType.STRING(16),
  })
  parent_code: string;

  @AllowNull(false)
  @Column({
    comment: '村、小区',
    type: DataType.STRING,
  })
  name: string;

  @BelongsTo(() => Street)
  street: Street;
}
