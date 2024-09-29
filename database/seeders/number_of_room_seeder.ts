import NumberOfRoom from '#models/number_of_room'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  async run() {
    const durationTypes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (let i = 0; i < 10; i++) {
      await NumberOfRoom.create({
        count: faker.helpers.arrayElement(durationTypes),
      })
    }
  }
}
