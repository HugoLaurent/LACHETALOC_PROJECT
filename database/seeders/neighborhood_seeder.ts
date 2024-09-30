import Neighborhood from '#models/neighborhood'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const neighborhoods = [
      'Stations de métro',
      'Lignes de bus',
      'Gare ferroviaire',
      'Accès autoroute',
      'Stations de tramway',
      'Parking public',
      'Pistes cyclables',
      'Disponibilité de taxis',
      'Stations de vélos en libre-service',
      'Supermarchés',
      'Commerces de proximité',
      'Centres commerciaux',
      'Pharmacies',
      'Bureaux de poste',
      'Banques/Guichets automatiques',
      'Marchés locaux',
      'Écoles maternelles/primaires',
      'Collèges/Lycées',
      'Universités/Facultés',
      'Bibliothèques publiques',
      'Crèches/Garderies',
      'Cinémas',
      'Théâtres',
      'Musées',
      'Galeries d’art',
      'Salles de concert',
      'Parcs d’attractions',
      'Parcs publics',
      'Jardins botaniques',
      'Zones boisées',
      'Bords de rivières ou lacs',
      'Aires de jeux pour enfants',
      'Salles de sport',
      'Piscines publiques',
      'Terrains de football, basketball, tennis',
      'Centres de yoga ou pilates',
      'Pistes de jogging',
      'Clubs de fitness',
      'Commissariats de police',
      'Casernes de pompiers',
      'Hôpitaux',
      'Cliniques médicales',
      'Pharmacies de garde',
      'Services d’urgence',
      'Restaurants',
      'Bars',
      'Cafés',
      'Pubs',
      'Discothèques',
      'Fast-foods',
      'Bruit ambiant (calme ou animé)',
      'Propreté des rues',
      'Sécurité du quartier',
      'Quartiers résidentiels ou commerçants',
      'Architecture (historique ou moderne)',
      'Population jeune, étudiante, ou retraitée',
      'Présence de festivals, événements locaux',
      'Quartiers cosmopolites ou multiculturels',
    ]

    // Utilisation du modèle pour créer les quartiers
    for (const neighborhood of neighborhoods) {
      await Neighborhood.create({ name: neighborhood })
    }
  }
}
