import { Server } from '@hapi/hapi'
import provinceController from '../controllers/province.controller'

const provinceRoutes = (server: Server) => {
  server.route({
    method: 'GET',
    path: '/api/provincies',
    handler: provinceController.index,
  })
}

export default provinceRoutes
