'use strict'

import Hapi, { Server } from '@hapi/hapi'
import config from './config/config'

const init = async () => {
  const server: Server = Hapi.server({
    port: config.SERVER_PORT,
    host: config.SERVER_HOST,
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello'
    },
  })

  await server.start()
  console.log(`Server is running on ${server.info.uri}`)
}

init()
