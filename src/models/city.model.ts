import prisma from '../helpers/connection'
import CityInterface from '../interface/city.interface'
import response from '../helpers/response'

const getCity = async () => {
  const cities = await prisma.cities.findMany()

  if (cities.length == 0) return response.error(404, 'No data found!')
  return response.success(cities)
}

const storeCity = async (data: CityInterface) => {
  try {
    const city = await prisma.cities.create({
      data: {
        id: undefined,
        name: data.name,
        province_id: data.province_id
      }
    })

    return response.success(city, 201, 'Add City Success!')
  } catch (err) {
    console.log(err)
    return response.error(500, 'Internal Server Error. Please Try Again Later!')
  }
}

const cityModel = { getCity, storeCity }
export default cityModel
