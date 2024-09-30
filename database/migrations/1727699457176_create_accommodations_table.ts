import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'accommodations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('title').notNullable()
      table.text('description').notNullable()
      table.integer('price').notNullable()
      table.integer('surface').notNullable()
      table.integer('floor').notNullable()
      table.string('address').notNullable()
      table.string('postal_code').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('SET NULL') // Met user_id à NULL si l'utilisateur est supprimé
      table.integer('type_id').unsigned().references('id').inTable('types')
      table.integer('duration_id').unsigned().references('id').inTable('durations')
      table.integer('nmb_room_id').unsigned().references('id').inTable('rooms')
      table.integer('nmb_bedroom_id').unsigned().references('id').inTable('bedrooms')
      table.integer('environment_id').unsigned().references('id').inTable('environments')
      table.integer('neighborhood_id').unsigned().references('id').inTable('neighborhoods')
      table.integer('city_id').unsigned().references('id').inTable('cities')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
