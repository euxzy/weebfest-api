import { Request, ResponseToolkit } from '@hapi/hapi'
import eventModel from '../models/event.model'
import EventInterface from '../interface/event.interface'

const index = async (request: Request, h: ResponseToolkit) => {
  const events = await eventModel.getEvents()

  console.log(events.status_code)
  return h.response(events).code(events.status_code)
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
  return h.response(event).code(event.status_code)
}

const eventController = { index, store }
export default eventController
