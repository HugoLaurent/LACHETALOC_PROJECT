import Accommodation from '#models/accommodation'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  async run() {
    for (let i = 0; i < 30; i++) {
      await Accommodation.create({
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        price: faker.number.int({ min: 500, max: 5000 }),
        surface: faker.number.int({ min: 20, max: 200 }),
        floor: faker.number.int({ min: 0, max: 100 }),
        address: faker.location.streetAddress(),
        postalCode: faker.location.zipCode(),
        userId: faker.number.int({ min: 1, max: 30 }),
        typeId: faker.number.int({ min: 1, max: 6 }),
        durationId: faker.number.int({ min: 1, max: 2 }),
        nmbRoomId: faker.number.int({ min: 1, max: 5 }),
        nmbBedroomId: faker.number.int({ min: 1, max: 5 }),
        environmentId: faker.number.int({ min: 1, max: 3 }),
        neighborhoodId: faker.number.int({ min: 1, max: 29 }),
        cityId: faker.number.int({ min: 1, max: 29 }),
      })
    }
  }
}
