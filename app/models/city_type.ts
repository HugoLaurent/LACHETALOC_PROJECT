import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Accommodation from '#models/accommodation'

export default class CityType extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare accommodation_id: number

  @column()
  declare type_city: string

  @belongsTo(() => Accommodation)
  declare accommodation: BelongsTo<typeof Accommodation>
}
