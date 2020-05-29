import {Model, Table, Column, AllowNull, HasMany, DataType} from 'sequelize-typescript';
import City from './city';

@Table({
  tableName: 'province'
})
export default class Province extends Model<Province> {
  @AllowNull(false)
  @Column({
    comment: '省份 code',
    type: DataType.STRING(16),
    primaryKey: true,
  })
  code: string;

  @AllowNull(false)
  @Column({
    comment: '省份',
    type: DataType.STRING(16),
  })
  name: string;

  @HasMany(() => City)
  cities: City[];
}
