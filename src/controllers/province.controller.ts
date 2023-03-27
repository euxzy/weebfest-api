import { Request, ResponseToolkit } from '@hapi/hapi'
import ProvinceInterface from '../interface/province.interface'
import provinceModel from '../models/province.model'

const index = async (request: Request, h: ResponseToolkit) => {
  const provincies = await provinceModel.getProvince()

  return h.response(provincies).code(provincies.status_code)
}

const store = async (request: Request, h: ResponseToolkit) => {
  const payload: any = request.payload

  const data: ProvinceInterface = {
    name: payload.name
  }

  // console.log(data)
  const province = await provinceModel.storeProvince(data)

  return h.response(province).code(province.status_code)
}

const provinceController = { index, store }
export default provinceController
