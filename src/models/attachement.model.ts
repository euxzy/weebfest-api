import prisma from "../helpers/connection"
import AttachementInterface from "../interface/attachement.interface"
import response from "../helpers/response"

const storeAttach = async (data: AttachementInterface) => {
  try {
    const attach = await prisma.attachements.create({
      data: {
        event_id: data.event_id,
        name: data.name
      }
    })

    return response.success(attach, 201, 'Add Attachement Success!')
  } catch (err) {
    console.log(err)
    return response.error(500, 'Internal Server Error. Please Try Again Later!')
  }
}

const attachementModel = { storeAttach }
export default attachementModel