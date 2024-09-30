import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Bedroom extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare bedroom: number
}
