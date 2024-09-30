import CityType from '#models/city_type'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  async run() {
    const userTypes = ['ville', 'banlieue', 'campagne']
    for (let i = 0; i < 10; i++) {
      await CityType.create({
        type_city: faker.helpers.arrayElement(userTypes),
      })
    }
  }
}
