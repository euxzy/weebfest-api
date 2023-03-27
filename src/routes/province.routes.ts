import { Server } from '@hapi/hapi'
import provinceController from '../controllers/province.controller'

const provinceRoutes = (server: Server) => {
  server.route({
    method: 'GET',
    path: '/api/province/list',
    handler: provinceController.index,
  })

  server.route({
    method: 'POST',
    path: '/api/province/add',
    handler: provinceController.store
  })
}

export default provinceRoutes
