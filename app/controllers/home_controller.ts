import Accommodation from '#models/accommodation'
import City from '#models/city'
import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async getAllDatas({ inertia }: HttpContext) {
    const accommodations = await Accommodation.query()
      .preload('room')
      .preload('facilities')
      .preload('type')
      .preload('duration')
      .preload('environment')
      .preload('neighborhoods')
      .preload('city')
      .preload('user')
      .exec()

    const cities = await City.all()
    const citiesSorted = cities.sort((a, b) => a.city.localeCompare(b.city)) // Trie les villes par ordre alphabétique

    if (accommodations.length > 0) {
      const formattedAccommodations = accommodations.map((accommodation) =>
        this.formatAccommodation(accommodation)
      )
      return inertia.render('Home/Home', {
        accommodations: formattedAccommodations,
        cities: citiesSorted,
      })
    }

    console.log('No accommodations found')
    return inertia.render('Home/Home', { accommodations: [] }) // Retourne un tableau vide si aucune accommodation n'est trouvée
  }

  formatAccommodation(accommodation: Accommodation) {
    return {
      id: accommodation.id,
      address: accommodation.address,
      city: accommodation.city.city, // Garde seulement le nom de la ville
      endLease: accommodation.endLease,
      createdAt: accommodation.createdAt,
      description: accommodation.description,
      duration: accommodation.duration.duration, // Garde seulement la durée
      environment: accommodation.environment.environment, // Garde seulement l'environnement
      floor: accommodation.floor,
      neighborhoods: accommodation.neighborhoods.map((neighborhood) => neighborhood.name), // Exclut l'ID et garde seulement le nom
      postalCode: accommodation.postalCode,
      image: accommodation.image,
      price: accommodation.price,
      facilities: accommodation.facilities.map((facility) => facility.name), // Exclut l'ID et garde seulement le nom
      surface: accommodation.surface,
      title: accommodation.title,
      type: accommodation.type.type, // Garde seulement le type
      updatedAt: accommodation.updatedAt,
      room: accommodation.room.room, // Garde seulement le nom de la chambre
      user: {
        id: accommodation.user.id,
        name: accommodation.user.name,
        lastname: accommodation.user.lastname,
        email: accommodation.user.email,
      },
    }
  }
}
