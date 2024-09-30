import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Neighborhood extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string
}
