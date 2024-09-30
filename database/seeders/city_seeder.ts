import { BaseSeeder } from '@adonisjs/lucid/seeders'
import City from '#models/city' // Assurez-vous d'importer le modèle City

export default class CitySeeder extends BaseSeeder {
  public async run() {
    const cities = [
      'Paris',
      'Marseille',
      'Lyon',
      'Toulouse',
      'Nice',
      'Nantes',
      'Strasbourg',
      'Montpellier',
      'Bordeaux',
      'Lille',
      'Rennes',
      'Reims',
      'Le Havre',
      'Saint-Étienne',
      'Toulon',
      'Grenoble',
      'Dijon',
      'Angers',
      'Nîmes',
      'Villeurbanne',
      'Clermont-Ferrand',
      'Le Mans',
      'Aix-en-Provence',
      'Brest',
      'Tours',
      'Amiens',
      'Limoges',
      'Annecy',
      'Perpignan',
      'Boulogne-Billancourt',
    ]

    // Utilisation du modèle pour créer les villes
    for (const city of cities) {
      await City.create({ city: city })
    }
  }
}
