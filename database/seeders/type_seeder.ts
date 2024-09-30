import Type from '#models/type'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const types = ['Appartement', 'Maison', 'Villa', 'Studio', 'Duplex', 'Collocation']

    // Utilisation du modèle pour créer les types
    for (const type of types) {
      await Type.create({ type: type })
    }
  }
}
