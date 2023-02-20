import prisma from '../database/connection'
import response from '../response/response'

const getProvince = async () => {
  const provincies = await prisma.provincies.findMany()

  if (provincies.length == 0) return response.error(404, 'No data found!')
  return response.success(provincies)
}

const provinceModel = { getProvince }
export default provinceModel
