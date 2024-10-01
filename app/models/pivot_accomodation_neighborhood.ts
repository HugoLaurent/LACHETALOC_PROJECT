import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class AccommodationNeighborhood extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare accommodationId: number

  @column()
  declare neighborhoodId: number
}
