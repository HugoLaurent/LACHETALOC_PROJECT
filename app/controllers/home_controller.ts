import Accommodation from '#models/accommodation'
import City from '#models/city'
import type { HttpContext } from '@adonisjs/core/http'

// DEFINE THE HOME CONTROLLER CLASS
export default class HomeController {
  // ASYNC METHOD TO GET ALL DATA FOR THE HOME PAGE
  async getAllDatas({ inertia }: HttpContext) {
    // QUERY ALL ACCOMMODATIONS AND PRELOAD RELATED CITY DATA
    const accommodations = await Accommodation.query().preload('city').exec()

    // FETCH ALL CITIES FROM THE DATABASE
    const cities = await City.all()
    // SORT CITIES ALPHABETICALLY BY CITY NAME
    const citiesSorted = cities.sort((a, b) => a.city.localeCompare(b.city))

    // CHECK IF THERE ARE ANY ACCOMMODATIONS
    if (accommodations.length > 0) {
      // FORMAT ACCOMMODATIONS FOR THE RESPONSE
      const formattedAccommodations = accommodations.map((accommodation) =>
        this.formatAccommodation(accommodation)
      )
      // RENDER THE HOME VIEW WITH ACCOMMODATIONS AND CITIES
      return inertia.render('Home/Home', {
        accommodations: formattedAccommodations,
        cities: citiesSorted,
      })
    }
    // RENDER THE HOME VIEW WITH AN EMPTY ACCOMMODATIONS ARRAY IF NONE FOUND
    return inertia.render('Home/Home', { accommodations: [] })
  }

  /**
   * STATIC METHOD TO FORMAT ACCOMMODATION DATA
   * @param {Accommodation} accommodation - The accommodation object to format.
   * @returns {Object} - The formatted accommodation data.
   */
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
