import {Model, Table, Column, ForeignKey, BelongsTo, AllowNull, HasMany, DataType} from 'sequelize-typescript';
import Province from './province';
import City from './city';
import Street from './street';

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
  })
  provinceCode: string;

  @AllowNull(false)
  @ForeignKey(() => City)
  @Column({
    comment: '所属城市',
    type: DataType.STRING(16),
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
