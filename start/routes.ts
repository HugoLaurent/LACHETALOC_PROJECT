import router from '@adonisjs/core/services/router'
import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'
import { middleware } from './kernel.js'
const HomeController = () => import('#controllers/home_controller')
const SearchController = () => import('#controllers/search_controller')
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
router.get('/', [HomeController, 'getAllDatas']).use(middleware.auth())
router.on('/login').renderInertia('Login/Login', { title: 'Login' }).use(middleware.guest())
router.post('/login-user', [UsersController, 'loginUser'])
router.post('/search', [SearchController, 'search'])

// ROUTE POUR API
router
  .group(() => {
    router.get('/accommodations', [HomeController, 'getDatasApi'])
  })
  .prefix('api')
