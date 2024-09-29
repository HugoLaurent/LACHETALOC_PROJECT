import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    for (let i = 0; i < 10; i++) {
      await User.create({
        nom: faker.person.lastName(),
        prenom: faker.person.firstName(),
        email: faker.internet.email(),
        mot_de_passe: faker.internet.password(), // Hash the password before saving
        type_utilisateur_id: faker.number.int({ min: 1, max: 3 }),
        createdAt: DateTime.fromJSDate(faker.date.past()),
      })
    }
  }
}
