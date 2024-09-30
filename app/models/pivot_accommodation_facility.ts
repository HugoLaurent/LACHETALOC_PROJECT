import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class AccommodationFacility extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare accommodationId: number

  @column()
  declare facilityId: number
}
