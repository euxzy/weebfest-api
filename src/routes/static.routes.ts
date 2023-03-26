import { Server } from "@hapi/hapi";

const staticRoutes = (server: Server) => {
  server.route({
    method: 'GET',
    path: '/static/image/{param*}',
    handler: {
      directory: {
        path: 'public/images'
      }
    }
  })
}

export default staticRoutes