import Accommodation from '#models/accommodation'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    for (let i = 0; i < 30; i++) {
      await Accommodation.create({
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        endLease: DateTime.now()
          .plus({ days: Math.floor(Math.random() * 30) })
          .toJSDate(),
        price: faker.number.int({ min: 500, max: 5000 }),
        surface: faker.number.int({ min: 20, max: 200 }),
        floor: faker.number.int({ min: 0, max: 100 }),
        address: faker.location.streetAddress(),
        postalCode: faker.location.zipCode(),
        image: faker.image.urlLoremFlickr(),
        userId: faker.number.int({ min: 1, max: 30 }),
        typeId: faker.number.int({ min: 1, max: 6 }),
        durationId: faker.number.int({ min: 1, max: 2 }),
        roomId: faker.number.int({ min: 1, max: 5 }),
        bedroomId: faker.number.int({ min: 1, max: 5 }),
        environmentId: faker.number.int({ min: 1, max: 3 }),
        cityId: faker.number.int({ min: 1, max: 29 }),
        createdAt: DateTime.now().minus({ days: Math.floor(Math.random() * 30) }),
        updatedAt: DateTime.now(),
      })
    }
  }
}
