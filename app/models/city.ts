import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Accommodation from './accommodation.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class City extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nom_ville: string

  @column()
  declare code_postal: string

  @column()
  declare region: string

  @column()
  declare pays: string

  @column()
  declare type_ville_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Accommodation)
  declare accommodations: HasMany<typeof Accommodation>
}
