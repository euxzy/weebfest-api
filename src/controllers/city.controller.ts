import { Request, ResponseToolkit } from '@hapi/hapi'
import cityModel from '../models/city.model'

const index = async (request: Request, h: ResponseToolkit) => {
  const cities = await cityModel.getCity()

  return h.response(cities).code(cities.status_code)
}

const cityController = { index }
export default cityController
