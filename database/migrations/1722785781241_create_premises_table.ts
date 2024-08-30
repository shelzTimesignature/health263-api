import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'premises'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text('address').nullable()
      table.text('phone').nullable()
      table.text('lat').nullable()
      table.text('lng').nullable()
      table.integer('user_id').references('id').inTable('users').onDelete('cascade')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
