import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nom').notNullable()
      table.string('prenom').notNullable()
      table.string('email').notNullable().unique()
      table.string('mot_de_passe').notNullable()
      table
        .integer('type_utilisateur_id')
        .unsigned()
        .references('id')
        .inTable('user_types')
        .onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
