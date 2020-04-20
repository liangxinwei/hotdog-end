import {Model, Table, Column, ForeignKey, BelongsTo, AllowNull, HasMany, DataType} from 'sequelize-typescript';
import Province from './province';
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
  @ForeignKey(() => Province)
  @Column({
    comment: '所属省份',
    type: DataType.STRING(16),
    field: 'province_code',
  })
  provinceCode: string;

  @AllowNull(false)
  @ForeignKey(() => City)
  @Column({
    comment: '所属城市',
    type: DataType.STRING(16),
    field: 'city_code',
  })
  cityCode: string;

  @AllowNull(false)
  @Column({
    comment: '区县',
    type: DataType.STRING,
  })
  name: string;

  @BelongsTo(() => Province)
  province: Province;

  @BelongsTo(() => City)
  city: City;

  @HasMany(() => Street)
  streets: Street[];
}
