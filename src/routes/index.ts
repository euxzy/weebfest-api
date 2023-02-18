import { Server } from '@hapi/hapi'
import eventRoutes from './event.routes'

const routes = (server: Server) => {
  eventRoutes(server)
}

export default routes
