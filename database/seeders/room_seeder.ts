import Room from '#models/room'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const rooms = [1, 2, 3, 4, 5]

    // Utilisation du modèle pour créer les pièces
    for (const room of rooms) {
      await Room.create({ room: room })
    }
  }
}
