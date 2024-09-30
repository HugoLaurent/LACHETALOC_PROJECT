import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async getAllUsers({ inertia }: HttpContext) {
    const users = await User.query().preload('role')
    const usersToSend = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        password: user.password, // Pensez à ne pas envoyer le mot de passe pour des raisons de sécurité
        isActive: user.isActive,
        isVerified: user.isVerified,
        isPremium: user.isPremium,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        role: user.role?.role, // Renommer pour juste avoir la chaîne de caractères du rôle
      }
    })
    console.log(usersToSend)

    if (users) {
      return inertia.render('Home/Home', { usersToSend })
    }
    console.log('No userss found')
  }
}
