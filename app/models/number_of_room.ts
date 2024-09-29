import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Accommodation from './accommodation.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'

export default class NumberOfRoom extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare count: number // e.g., 1, 2, 3, etc.

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @hasMany(() => Accommodation)
  declare accommodations: HasMany<typeof Accommodation>
}
