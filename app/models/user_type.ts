import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class UserType extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare type: string // e.g., tenant, landlord, admin

  @hasMany(() => User)
  declare users: HasMany<typeof User>
}
