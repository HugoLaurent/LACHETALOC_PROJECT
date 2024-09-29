import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Accommodation from './accommodation.js'
import { DateTime } from 'luxon'

export default class RentalDuration extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare duration: string // e.g., short-term, long-term

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @hasMany(() => Accommodation)
  declare accommodations: HasMany<typeof Accommodation>
}
