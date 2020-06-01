import {Model, Table, Column, ForeignKey, AllowNull, BelongsTo, DataType, HasMany} from 'sequelize-typescript';
import Province from './province';
import City from './city';
import District from './district';
import Village from './village';

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
  @ForeignKey(() => District)
  @Column({
    comment: '所属区县',
    type: DataType.STRING(16),
  })
  districtCode: string;

  @AllowNull(false)
  @Column({
    comment: '街道',
    type: DataType.STRING,
  })
  name: string;

  @BelongsTo(() => Province)
  province: Province;

  @BelongsTo(() => City)
  city: City;

  @BelongsTo(() => District)
  district: District;

  @HasMany(() => Village)
  villages: Village[];
}
