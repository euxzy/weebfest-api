import { Server } from '@hapi/hapi'
import cityController from '../controllers/city.controller'

const cityRoutes = (server: Server) => {
  server.route({
    method: 'GET',
    path: '/api/city/list',
    handler: cityController.index,
  })

  server.route({
    method: 'POST',
    path: '/api/city/add',
    handler: cityController.store
  })
}

export default cityRoutes
