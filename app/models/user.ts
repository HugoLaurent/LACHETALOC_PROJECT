import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Accommodation from './accommodation.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nom: string | null

  @column()
  declare prenom: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare mot_de_passe: string

  @column()
  declare type_utilisateur_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @hasMany(() => Accommodation)
  declare accommodations: HasMany<typeof Accommodation>
}
