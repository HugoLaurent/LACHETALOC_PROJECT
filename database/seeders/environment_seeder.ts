import Environment from '#models/environment'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const environments = ['ville', 'banlieue', 'campagne']

    // Utilisation du modèle pour créer les villes
    for (const environment of environments) {
      await Environment.create({ environment: environment })
    }
  }
}
