import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'facilities'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('accommodation_id')
        .unsigned()
        .references('id')
        .inTable('accommodations')
        .onDelete('CASCADE')
      table.string('type_d_equipement')
      table.boolean('est_disponible')
      table.text('description')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
