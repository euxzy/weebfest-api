import { Server } from '@hapi/hapi'
import eventRoutes from './event.routes'
import cityRoutes from './city.routes'

const routes = (server: Server) => {
  eventRoutes(server)
  cityRoutes(server)
}

export default routes
