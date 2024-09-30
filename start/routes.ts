import router from '@adonisjs/core/services/router'
import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'
// const AccommodationsController = () => import('#controllers/accommodations_controller')
const UsersController = () => import('#controllers/user_controller')

// Returns swagger in YAML with the custom route `/` included
router.get('/swagger', async () => {
  // Ajouter manuellement la route /

  // Retourne la documentation Swagger
  return AutoSwagger.default.docs(router.toJSON(), swagger)
})

// Renders Swagger-UI and passes YAML-output of /swagger
router.get('/docs', async () => {
  return AutoSwagger.default.ui('/swagger', swagger)
})

// PUBLIC ROUTES
router.get('/', [UsersController, 'getAllUsers'])
