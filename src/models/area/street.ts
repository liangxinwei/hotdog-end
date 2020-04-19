import {Model, Table, Column, ForeignKey, AllowNull, BelongsTo, DataType, HasMany} from 'sequelize-typescript';
import District from './district';
import Village from './village';

// @ts-ignore
@Table({
  tableName: 'street'
})
export default class Street extends Model<Street> {
  @AllowNull(false)
  @Column({
    comment: '街道 code',
    type: DataType.STRING(16),
    primaryKey: true,
  })
  code: string;

  @AllowNull(false)
  @ForeignKey(() => District)
  @Column({
    comment: '区县 code',
    type: DataType.STRING(16),
  })
  parent_code: string;

  @AllowNull(false)
  @Column({
    comment: '街道',
    type: DataType.STRING,
  })
  name: string;

  @BelongsTo(() => District)
  district: District;

  @HasMany(() => Village)
  villages: Village[];
}
