import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import City from './city.js'
import NumberOfRoom from './number_of_room.js'
import RentalDuration from './rental_duration.js'

export default class Accommodation extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare address: string

  @column()
  declare cityId: number

  @column()
  declare numberOfRoomsId: number

  @column()
  declare rentalDurationId: number

  @column()
  declare userId: number

  @column()
  declare facilitiesId: number

  @column()
  declare isShortTerm: boolean

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
}
