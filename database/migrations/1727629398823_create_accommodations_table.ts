import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'accommodations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('city_id').unsigned().references('id').inTable('cities').onDelete('CASCADE')
      table.string('type_location')
      table.string('type')
      table.integer('nombre_de_pieces')
      table.text('description')
      table.decimal('prix', 10, 2)
      table.date('date_disponibilite')
      table.string('adresse')
      table.string('image')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
