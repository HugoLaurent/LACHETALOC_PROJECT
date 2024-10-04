import Accommodation from '#models/accommodation'
import City from '#models/city'
import type { HttpContext } from '@adonisjs/core/http'

export default class SearchController {
  async search({ inertia, request }: HttpContext) {
    console.log('coucou')

    const query = request.input('query')

    const cities = await City.query().where('city', 'LIKE', `%${query}%`).exec()
    console.log(cities)

    console.log(typeof cities[0].id)

    // Utilisez .where pour rechercher sur le champ title, description, ou tout autre champ pertinent
    const accommodations = await Accommodation.query()
      .where('city_id', +cities[0].id) // Utiliser city_id pour filtrer les accommodations
      .preload('city') // Assurez-vous que la relation est définie dans votre modèle Accommodation
      .exec()
    // CHECK IF THERE ARE ANY ACCOMMODATIONS
    if (accommodations.length > 0) {
      // FORMAT ACCOMMODATIONS FOR THE RESPONSE
      const formattedAccommodations = accommodations.map((accommodation) =>
        this.formatAccommodation(accommodation)
      )
      // RENDER THE HOME VIEW WITH ACCOMMODATIONS AND CITIES
      return inertia.render('Home/Home', {
        accommodations: formattedAccommodations,
        cities: cities,
      })
    }
    // RENDER THE HOME VIEW WITH AN EMPTY ACCOMMODATIONS ARRAY IF NONE FOUND
    return inertia.render('Home/Home', { accommodations: [] })
  }
  formatAccommodation(accommodation: Accommodation): object {
    return {
      id: accommodation.id, // ACCOMMODATION ID
      city: accommodation.city.city, // CITY NAME OF THE ACCOMMODATION
      endLease: accommodation.endLease, // END LEASE DATE
      createdAt: accommodation.createdAt, // CREATION DATE OF THE ACCOMMODATION
      description: accommodation.description, // DESCRIPTION OF THE ACCOMMODATION
      image: accommodation.image, // IMAGE URL OF THE ACCOMMODATION
      price: accommodation.price, // PRICE OF THE ACCOMMODATION
      title: accommodation.title, // TITLE OF THE ACCOMMODATION
    }
  }
}
