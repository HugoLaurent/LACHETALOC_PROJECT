import Facilities from '#models/facility'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  async run() {
    const nameFacilities = [
      'Wi-Fi',
      'Parking',
      'Piscine',
      'Salle de sport',
      'Sécurité',
      'Jardin',
      'Balcon',
      'Terrasse',
      'Climatisation',
      'Chauffage',
      'Lave-linge',
      'Sèche-linge',
      'Télévision',
      'Cuisine équipée',
      'Accès handicapé',
      'Animaux acceptés',
      'Service de nettoyage',
      'Transfert aéroport',
      'Café',
      'Petit déjeuner inclus',
    ]
    for (let i = 0; i < 10; i++) {
      await Facilities.create({
        name: faker.helpers.arrayElement(nameFacilities),
        description: faker.lorem.sentence(),
      })
    }
  }
}
