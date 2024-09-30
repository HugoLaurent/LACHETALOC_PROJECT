import Facility from '#models/facility'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const facilities = [
      'Balcon',
      'Terrasse',
      'Jardin',
      'Piscine',
      'Parking',
      'Garage',
      'Ascenseur',
      'Cave',
      'Gardien',
      'Interphone',
      'Digicode',
      'Visiophone',
      'Alarme',
      'Vidéosurveillance',
      'Climatisation',
      'Cheminée',
      'Parquet',
      'Double vitrage',
      'Stores électriques',
      'Stores manuels',
      'Volets électriques',
      'Volets manuels',
      'Porte blindée',
      'Placards',
      'Dressing',
      'Buanderie',
      'Cellier',
      'Salle de sport',
      'Sauna',
      'Jacuzzi',
      'Hammam',
      'Puits',
      'Forage',
      'Arrosage automatique',
      'Barbecue',
    ]
    // Utilisation du modèle pour créer les facilités
    for (const facility of facilities) {
      await Facility.create({ name: facility })
    }
  }
}
