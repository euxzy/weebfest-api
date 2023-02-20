import prisma from '../database/connection'
import response from '../response/response'

const getCity = async () => {
  const cities = await prisma.cities.findMany()

  if (cities.length == 0) return response.error(404, 'No data found!')
  return response.success(cities)
}

const cityModel = { getCity }
export default cityModel
