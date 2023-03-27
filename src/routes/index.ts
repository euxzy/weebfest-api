import { Server } from '@hapi/hapi'
import eventRoutes from './event.routes'
import cityRoutes from './city.routes'
import provinceRoutes from './province.routes'
import staticRoutes from './static.routes'

const routes = (server: Server) => {
  eventRoutes(server)
  provinceRoutes(server)
  cityRoutes(server)
  staticRoutes(server)
}

export default routes
