import RentalDuration from '#models/rental_duration'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  async run() {
    const durationTypes = ['short', 'long']
    for (let i = 0; i < 10; i++) {
      await RentalDuration.create({
        duration: faker.helpers.arrayElement(durationTypes),
        accommodation_id: faker.number.int({ min: 1, max: 10 }),
      })
    }
  }
}
