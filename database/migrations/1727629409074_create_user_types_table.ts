import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user_types'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('type').notNullable()
      table.text('description')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
