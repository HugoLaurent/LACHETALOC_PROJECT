import Accommodation from '#models/accommodation'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    for (let i = 0; i < 10; i++) {
      await Accommodation.create({
        city_id: faker.number.int({ min: 1, max: 25 }),
        user_id: faker.number.int({ min: 1, max: 10 }),
        type: faker.helpers.arrayElement(['Maison', 'Appartement', 'Studio', 'Chambre']),
        nombre_de_pieces: faker.number.int({ min: 1, max: 10 }),
        nombre_de_chambres_id: faker.number.int({ min: 1, max: 10 }),
        titre: faker.lorem.words(3),
        description: faker.lorem.sentence(),
        prix: faker.number.int({ min: 100, max: 2500 }),
        date_disponibilite: DateTime.fromJSDate(faker.date.future())
          .toSQL({ includeOffset: false })
          .slice(0, 19)
          .toString(), // Extrait les premiers 19 caractères (YYYY-MM-DD HH:MM)

        adresse: faker.location.streetAddress(),
        image: faker.image.urlLoremFlickr(),
      })
    }
  }
}
