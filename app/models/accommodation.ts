import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Neighborhood from '#models/neighborhood'
import Facility from '#models/facility'
import City from '#models/city'
import Duration from '#models/duration'
import User from '#models/user'
import Bedroom from '#models/bedroom'
import Room from '#models/room'
import Type from '#models/type'
import Environment from '#models/environment'

export default class Accommodation extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string // Titre de l'annonce

  @column()
  declare description: string // Description de l'annonce

  @column()
  declare endLease: Date // Date

  @column()
  declare price: number // Prix de l'accommodation

  @column()
  declare surface: number // Surface de l'accommodation

  @column()
  declare floor: number // Étage de l'accommodation

  @column()
  declare address: string // Adresse de l'accommodation

  @column()
  declare postalCode: string // Code postal de l'accommodation

  @column()
  declare image: string // Image de l'accommodation

  @column()
  declare userId: number // Référence à User

  @column()
  declare typeId: number // Type d'accommodation (studio, appartement, etc.)

  @column()
  declare durationId: number // Durée de location

  @column()
  declare roomId: number // Nombre de pièces

  @column()
  declare bedroomId: number // Nombre de chambres

  @column()
  declare environmentId: number // Type d'environnement (ville, banlieue, campagne)

  @column()
  declare cityId: number // Référence à City

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Type)
  declare type: BelongsTo<typeof Type>

  @belongsTo(() => Duration)
  declare duration: BelongsTo<typeof Duration>

  @belongsTo(() => Room)
  declare room: BelongsTo<typeof Room>

  @belongsTo(() => Bedroom)
  declare bedroom: BelongsTo<typeof Bedroom>

  @belongsTo(() => Environment)
  declare environment: BelongsTo<typeof Environment>

  @belongsTo(() => City)
  declare city: BelongsTo<typeof City>

  @manyToMany(() => Facility, {
    pivotTable: 'accommodation_facilities',
  })
  declare facilities: ManyToMany<typeof Facility>

  @manyToMany(() => Neighborhood, {
    pivotTable: 'accommodation_neighborhoods',
  })
  declare neighborhoods: ManyToMany<typeof Neighborhood>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
