import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Accommodation from './accommodation.js'

export default class RentalDuration extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare duration: string // e.g., short-term, long-term

  @column()
  declare accommodation_id: number

  @hasMany(() => Accommodation)
  declare accommodations: HasMany<typeof Accommodation>
}
