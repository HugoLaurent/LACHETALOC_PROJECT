import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bedrooms'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('bedroom').notNullable().unique()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
