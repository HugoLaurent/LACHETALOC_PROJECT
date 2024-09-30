import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Duration from '#models/duration'

export default class extends BaseSeeder {
  async run() {
    const durations = ['short-term', 'long-term']

    // Utilisation du modèle pour créer les villes
    for (const duration of durations) {
      await Duration.create({ duration: duration })
    }
  }
}
