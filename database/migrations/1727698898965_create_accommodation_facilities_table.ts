import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'accommodation_facilities'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // Identifiant unique pour la table pivot
      table
        .integer('accommodation_id')
        .unsigned()
        .references('id')
        .inTable('accommodations')
        .onDelete('CASCADE') // Référence vers la table accommodations
      table
        .integer('facility_id')
        .unsigned()
        .references('id')
        .inTable('facilities')
        .onDelete('CASCADE') // Référence vers la table facilities
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
