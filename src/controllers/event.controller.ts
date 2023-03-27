import * as fs from 'fs'
import { Request, ResponseToolkit } from '@hapi/hapi'

import eventModel from '../models/event.model'
import attachementModel from '../models/attachement.model'
import EventInterface from '../interface/event.interface'
import AttachementInterface from '../interface/attachement.interface'

const index = async (request: Request, h: ResponseToolkit) => {
  const paramId = request.query?.id
  // console.log(param)

  if (!paramId) {
    const events = await eventModel.getEvents()
    return h.response(events).code(events.status_code)
  }
  
  const event = await eventModel.getEventDetails(paramId)
  // console.log(events.status_code)
  return h.response(event).code(event.status_code)

}

const store = async (request: Request, h: ResponseToolkit) => {
  const payload: any = request.payload

  const data: EventInterface = {
    name: payload.name,
    city_id: payload.city_id,
    address: payload.address,
    description: payload.description,
    start_date: payload.start_date,
    end_date: payload.end_date,
    start_hour: payload.start_hour,
    end_hour: payload.end_hour,
    price: payload.price,
  }

  // console.log(data)
  const event = await eventModel.storeEvent(data)
  // console.log(event)

  const dataEvent: any = event?.data
  const { id: idEvent } = dataEvent

  const attachements = Array.isArray(payload?.attachements) ? payload?.attachements : [payload?.attachements]
  for (const file of attachements) {
    const { filename } = file.hapi
    // console.log(filename)
    const ext: Array<string> = filename.split('.')
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9) + '.' + ext[ext.length - 1]
    const path: string = `public/images/${uniqueSuffix}`

    if (!fs.existsSync('public/images')) fs.mkdirSync('public/images', { recursive: true })

    const fileStream: fs.WriteStream = fs.createWriteStream(path)
    await new Promise<void>((resolve, reject) => {
      file.on('error', (err: Error) => {
        reject(err)
      })

      file.pipe(fileStream)
      file.on('end', async () => resolve())
    })

    const attach: AttachementInterface = {
      event_id: idEvent,
      name: uniqueSuffix
    }

    await attachementModel.storeAttach(attach)
  }

  return h.response(event).code(event.status_code)
}

const eventController = { index, store }
export default eventController
