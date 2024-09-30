import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Room extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare room: number
}
