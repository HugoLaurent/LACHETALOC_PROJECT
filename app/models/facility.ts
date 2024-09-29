import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Accommodation from './accommodation.js'

export default class Facilities extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @hasMany(() => Accommodation)
  declare accommodations: HasMany<typeof Accommodation>
}
