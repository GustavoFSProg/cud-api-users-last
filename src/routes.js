import { Router } from 'express'
import usersController from './controllers/usersController'

const routes = new Router()

routes.get('/', usersController.getAll)
routes.post('/register', usersController.create)

export default routes
