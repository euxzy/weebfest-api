import { Request, ResponseToolkit } from '@hapi/hapi'
import provinceModel from '../models/province.model'

const index = async (request: Request, h: ResponseToolkit) => {
  const provincies = await provinceModel.getProvince()

  return h.response(provincies).code(provincies.status_code)
}

const provinceController = { index }
export default provinceController
