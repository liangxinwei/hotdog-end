import {Model, Table, Column, ForeignKey, BelongsTo, AllowNull, HasMany, DataType} from 'sequelize-typescript';
import City from './city';
import Street from './street';

// @ts-ignore
@Table({
  tableName: 'district'
})
export default class District extends Model<District> {
  @AllowNull(false)
  @Column({
    comment: '区县 code',
    type: DataType.STRING(16),
    primaryKey: true,
  })
  code: string;

  @AllowNull(false)
  @ForeignKey(() => City)
  @Column({
    comment: '城市 code',
    type: DataType.STRING(16),
  })
  parent_code: string;

  @AllowNull(false)
  @Column({
    comment: '区县',
    type: DataType.STRING,
  })
  name: string;

  @BelongsTo(() => City)
  city: City;

  @HasMany(() => Street)
  streets: Street[];
}
