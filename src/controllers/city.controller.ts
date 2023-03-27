import { Request, ResponseToolkit } from '@hapi/hapi'
import CityInterface from '../interface/city.interface'
import cityModel from '../models/city.model'

const index = async (request: Request, h: ResponseToolkit) => {
  const cities = await cityModel.getCity()

  return h.response(cities).code(cities.status_code)
}

const store = async (request: Request, h: ResponseToolkit) => {
  const payload: any = request.payload

  const data: CityInterface = {
    name: payload?.name,
    province_id: payload?.province_id
  }

  // console.log(data)
  const city = await cityModel.storeCity(data)

  return h.response(city).code(city.status_code)
}

const cityController = { index, store }
export default cityController
