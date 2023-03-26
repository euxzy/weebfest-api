import prisma from '../helpers/connection'
import ProvinceInterface from '../interface/province.interface'
import response from '../helpers/response'

const getProvince = async () => {
  const provincies = await prisma.provincies.findMany()

  if (provincies.length == 0) return response.error(404, 'No data found!')
  return response.success(provincies)
}

const storeProvince = async (data: ProvinceInterface) => {
  try {
    const province = await prisma.provincies.create({
      data: {
        id: undefined,
        name: data.name
      }
    })

    return response.success(province, 201, 'Add Province Success!')
  } catch (err) {
    console.log(err)
    return response.error(500, 'Internal Server Error. Please Try Again Later!')
  }
}

const provinceModel = { getProvince, storeProvince }
export default provinceModel
