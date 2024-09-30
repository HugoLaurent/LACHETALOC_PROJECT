import Role from '#models/role'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const roles = ['locataire', 'chercheur', 'propriétaire', 'administrateur']
    // Utilisation du modèle pour créer les roles
    for (const role of roles) {
      await Role.create({ role: role })
    }
  }
}
