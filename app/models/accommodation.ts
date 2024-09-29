import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import City from './city.js'
import NumberOfRoom from './number_of_room.js'
import RentalDuration from './rental_duration.js'
import CityType from './city_type.js'

export default class Accommodation extends BaseModel {
  declare id: number

  @column()
  declare city_id: number

  @column()
  declare user_id: number

  @column()
  declare type: string

  @column()
  declare nombre_de_pieces: number

  @column()
  declare nombre_de_chambres_id: number

  @column()
  declare titre: string

  @column()
  declare description: string

  @column()
  declare prix: number

  @column.dateTime()
  declare date_disponibilite: DateTime

  @column()
  declare adresse: string

  @column()
  declare image: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => City)
  declare city: BelongsTo<typeof City>

  @belongsTo(() => NumberOfRoom)
  declare numberOfRoom: BelongsTo<typeof NumberOfRoom>

  @belongsTo(() => RentalDuration)
  declare rentalDuration: BelongsTo<typeof RentalDuration>

  @hasMany(() => CityType)
  declare cityType: HasMany<typeof CityType>
}
