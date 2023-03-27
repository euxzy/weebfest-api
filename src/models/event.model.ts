import prisma from '../helpers/connection'
import excludeFields from '../helpers/excludefields'
import EventInterface from '../interface/event.interface'
import response from '../helpers/response'

const getEvents = async () => {
  const events = await prisma.events.findMany({
    include: {
      attachements: { select: { name: true } },
      city: { select: { name:true } }
    }
  })

  if (events.length == 0) return response.error(404, 'No data found!')
  // console.log(events)
  
  events.map(item => excludeFields(item, ['city_id']))
  return response.success(events)
}

const getEventDetails = async (id: number) => {
  const event = await prisma.events.findUnique({
    where: { id: Number(id) },
    include: {
      attachements: {
        select: {
          name: true
        }
      },
      city: {
        select: {
          name: true,
          province: true
        }
      }
    }
  })
  // console.log(event)

  if (!event) return response.error(404, 'No data found!')

  const data = excludeFields(event, ['city_id'])
  return response.success(data)
}

const storeEvent = async (data: EventInterface) => {
  try {
    const event = await prisma.events.create({
      data: {
        id: undefined,
        name: data.name,
        city_id: +data.city_id,
        address: data.address,
        description: data.description,
        start_date: new Date(data.start_date),
        end_date: new Date(data.end_date),
        start_hour: new Date(data.start_hour),
        end_hour: new Date(data.end_hour),
        price: +data.price,
      },
    })

    // console.log(event)
    return response.success(event, 201, 'Add Event Success')
  } catch (err) {
    console.log(err)
    return response.error(500, 'Internal Server Error. Please Try Again Later!')
  }
}

const eventModel = { getEvents, storeEvent, getEventDetails }
export default eventModel
