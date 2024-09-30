import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Role from '#models/role'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare lastname: string

  @column()
  declare email: string

  @column()
  declare password: string

  @column({ serializeAs: null })
  declare roleId: number

  @column()
  declare isActive: boolean

  @column()
  declare isVerified: boolean

  @column()
  declare isPremium: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relation avec le modèle Role
  @hasOne(() => Role, {
    foreignKey: 'id', // clé primaire de la table roles
    localKey: 'roleId', // clé étrangère dans la table users
  })
  declare role: HasOne<typeof Role>
}
