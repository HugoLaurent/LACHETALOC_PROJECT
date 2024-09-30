import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('lastname')
      table.string('email').unique()
      table.string('password')
      table.integer('role_id').unsigned().references('id').inTable('roles')
      table.boolean('is_active').defaultTo(true)
      table.boolean('is_verified').defaultTo(false)
      table.boolean('is_premium').defaultTo(false)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
