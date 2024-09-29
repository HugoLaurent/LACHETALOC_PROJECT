import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  async run() {
    const City = (await import('#models/city')).default

    const cities = [
      { nom: 'Paris', region: 'Île-de-France', codePostal: '75000' },
      { nom: 'Marseille', region: "Provence-Alpes-Côte d'Azur", codePostal: '13000' },
      { nom: 'Lyon', region: 'Auvergne-Rhône-Alpes', codePostal: '69000' },
      { nom: 'Toulouse', region: 'Occitanie', codePostal: '31000' },
      { nom: 'Nice', region: "Provence-Alpes-Côte d'Azur", codePostal: '06000' },
      { nom: 'Nantes', region: 'Pays de la Loire', codePostal: '44000' },
      { nom: 'Strasbourg', region: 'Grand Est', codePostal: '67000' },
      { nom: 'Montpellier', region: 'Occitanie', codePostal: '34000' },
      { nom: 'Bordeaux', region: 'Nouvelle-Aquitaine', codePostal: '33000' },
      { nom: 'Lille', region: 'Hauts-de-France', codePostal: '59000' },
      { nom: 'Rennes', region: 'Bretagne', codePostal: '35000' },
      { nom: 'Reims', region: 'Grand Est', codePostal: '51100' },
      { nom: 'Le Havre', region: 'Normandie', codePostal: '76600' },
      { nom: 'Saint-Étienne', region: 'Auvergne-Rhône-Alpes', codePostal: '42000' },
      { nom: 'Toulon', region: "Provence-Alpes-Côte d'Azur", codePostal: '83000' },
      { nom: 'Grenoble', region: 'Auvergne-Rhône-Alpes', codePostal: '38000' },
      { nom: 'Dijon', region: 'Bourgogne-Franche-Comté', codePostal: '21000' },
      { nom: 'Angers', region: 'Pays de la Loire', codePostal: '49000' },
      { nom: 'Nîmes', region: 'Occitanie', codePostal: '30000' },
      { nom: 'Villeurbanne', region: 'Auvergne-Rhône-Alpes', codePostal: '69100' },
      // Villes d'outre-mer
      { nom: 'Fort-de-France', region: 'Martinique', codePostal: '97200' },
      { nom: 'Pointe-à-Pitre', region: 'Guadeloupe', codePostal: '97110' },
      { nom: 'Saint-Denis', region: 'La Réunion', codePostal: '97400' },
      { nom: 'Cayenne', region: 'Guyane', codePostal: '97300' },
      { nom: 'Mamoudzou', region: 'Mayotte', codePostal: '97600' },
    ]

    for (const city of cities) {
      await City.create({
        nom_ville: city.nom,
        code_postal: city.codePostal,
        region: city.region,
        pays: ['Martinique', 'Guadeloupe', 'La Réunion', 'Guyane', 'Mayotte'].includes(city.region)
          ? 'France (Outre-mer)'
          : 'France',
        type_ville_id: faker.number.int({ min: 1, max: 3 }),
      })
    }
  }
}
