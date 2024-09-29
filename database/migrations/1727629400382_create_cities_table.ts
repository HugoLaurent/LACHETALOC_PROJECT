import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cities'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nom_ville').notNullable()
      table.string('code_postal').notNullable()
      table.string('region').notNullable()
      table.string('pays').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
