import UserType from '#models/user_type'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  async run() {
    const userTypes = ['tenant', 'landlord', 'admin']
    for (let i = 0; i < 10; i++) {
      await UserType.create({
        type: faker.helpers.arrayElement(userTypes),
      })
    }
  }
}
