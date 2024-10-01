import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Accommodation from './accommodation.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Neighborhood extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @manyToMany(() => Accommodation, {
    pivotTable: 'accommodation_neighborhood',
  })
  declare accommodations: ManyToMany<typeof Accommodation>
}
