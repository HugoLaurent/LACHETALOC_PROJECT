import Accommodation from '#models/accommodation'
import Facility from '#models/facility'
import AccomodationFacility from '#models/pivot_accommodation_facility'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  async run() {
    // Récupérer tous les IDs existants pour accommodations et facilities
    const accommodations = await Accommodation.query().select('id')
    const facilities = await Facility.query().select('id')

    // Extraire les IDs dans des tableaux
    const accommodationIds = accommodations.map((accommodation) => accommodation.id)
    const facilityIds = facilities.map((facility) => facility.id)

    for (let i = 0; i < 30; i++) {
      await AccomodationFacility.create({
        accommodationId: faker.helpers.arrayElement(accommodationIds), // Sélectionnez un ID existant
        facilityId: faker.helpers.arrayElement(facilityIds), // Sélectionnez un ID existant
      })
    }
  }
}
