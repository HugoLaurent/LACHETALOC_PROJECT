import Bedroom from '#models/bedroom'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const bedrooms = [1, 2, 3, 4, 5]

    // Utilisation du modèle pour créer les villes
    for (const bedroom of bedrooms) {
      await Bedroom.create({ bedroom: bedroom })
    }
  }
}
