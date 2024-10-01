import Accommodation from '#models/accommodation'
import Neighborhood from '#models/neighborhood'
import AccommodationNeighborhood from '#models/pivot_accomodation_neighborhood'

import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  async run() {
    // Récupérer tous les IDs existants pour accommodations et facilities
    const accommodations = await Accommodation.query().select('id')
    const neighborhoods = await Neighborhood.query().select('id')

    // Extraire les IDs dans des tableaux
    const accommodationIds = accommodations.map((accommodation) => accommodation.id)
    const neighborhoodsId = neighborhoods.map((neighborhood) => neighborhood.id)

    for (let i = 0; i < 30; i++) {
      await AccommodationNeighborhood.create({
        accommodationId: faker.helpers.arrayElement(accommodationIds), // Sélectionnez un ID existant
        neighborhoodId: faker.helpers.arrayElement(neighborhoodsId), // Sélectionnez un ID existant
      })
    }
  }
}
