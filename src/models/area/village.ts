import {Model, Table, Column, ForeignKey, AllowNull, BelongsTo, DataType} from 'sequelize-typescript';
import Province from './province';
import City from './city';
import District from './district';
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
  @ForeignKey(() => District)
  @Column({
    comment: '所属区县',
    type: DataType.STRING(16),
    field: 'district_code',
  })
  districtCode: string;

  @AllowNull(false)
  @ForeignKey(() => Street)
  @Column({
    comment: '所属街道',
    type: DataType.STRING(16),
    field: 'street_code',
  })
  streetCode: string;

  @AllowNull(false)
  @Column({
    comment: '村、小区',
    type: DataType.STRING,
  })
  name: string;

  @BelongsTo(() => Province)
  province: Province;

  @BelongsTo(() => City)
  city: City;

  @BelongsTo(() => District)
  district: District;

  @BelongsTo(() => Street)
  street: Street;
}
