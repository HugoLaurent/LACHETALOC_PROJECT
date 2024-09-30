// import Accommodation from '#models/accommodation'
// import type { HttpContext } from '@adonisjs/core/http'

// export default class AccommodationsController {
//   async getAllAccommodations({ inertia }: HttpContext) {
//     const accommodation = await Accommodation.query().preload('numberOfRoom')
//     console.log(accommodation)

//     if (accommodation) {
//       return inertia.render('Home/Home', { accommodation })
//     }
//     console.log('No accommodations found')
//   }
// }
