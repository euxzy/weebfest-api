import { Server } from '@hapi/hapi'
import eventController from '../controllers/event.controller'

const eventRoutes = (server: Server) => {
  server.route({
    method: 'GET',
    path: '/api/events',
    handler: eventController.index,
  })

  const multipart: any = true
  server.route({
    method: 'POST',
    path: '/api/event/add',
    handler: eventController.store,
    options: {
      payload: {
        multipart,
      },
    },
  })
}

export default eventRoutes
