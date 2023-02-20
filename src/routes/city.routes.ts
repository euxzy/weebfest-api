import { Server } from '@hapi/hapi'
import cityController from '../controllers/city.controller'

const cityRoutes = (server: Server) => {
  server.route({
    method: 'GET',
    path: '/api/cities',
    handler: cityController.index,
  })
}

export default cityRoutes
