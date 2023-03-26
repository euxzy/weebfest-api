interface BaseResponse {
  status: boolean
  status_code: number
  message: string
  data?: Object | null
}

const success = (
  data: Object | null = null,
  status_code: number = 200,
  message: string = 'Data Successfully Fetched',
  status: boolean = true
): BaseResponse => {
  const response: BaseResponse = {
    status,
    status_code,
    message,
    data,
  }
  return response
}

const error = (
  status_code: number = 400,
  message: string = 'Bad Request',
  status: boolean = false
): BaseResponse => {
  const response: BaseResponse = {
    status,
    status_code,
    message,
  }
  return response
}

const response = { success, error }

export default response
