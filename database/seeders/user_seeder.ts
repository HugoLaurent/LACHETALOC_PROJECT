import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  async run() {
    for (let i = 0; i < 30; i++) {
      await User.create({
        name: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        roleId: faker.number.int({ min: 1, max: 3 }),
        isActive: faker.datatype.boolean(),
        isVerified: faker.datatype.boolean(),
        isPremium: faker.datatype.boolean(),
      })
    }
  }
}
