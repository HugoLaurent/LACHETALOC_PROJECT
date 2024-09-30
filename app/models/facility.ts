import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Accommodation from '#models/accommodation'

export default class Facility extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @manyToMany(() => Accommodation, {
    pivotTable: 'accommodation_facilities',
  })
  declare accommodations: ManyToMany<typeof Accommodation>
}
