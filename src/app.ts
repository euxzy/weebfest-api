'use strict'

import Hapi, { Server } from '@hapi/hapi'
import config from './config/config'
import routes from './routes'

const init = async () => {
  const server: Server = Hapi.server({
    port: config.SERVER_PORT,
    host: config.SERVER_HOST,
    routes: {
      cors: {
        origin: ['*'],
        headers: ['Accept', 'Content-Type'],
      },
    },
  })

  routes(server)

  await server.start()
  console.log(`Server is running on ${server.info.uri}`)
}

init()
