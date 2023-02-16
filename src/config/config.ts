import dotenv from 'dotenv'

dotenv.config()

const config = {
  SERVER_HOST: process.env.SERVER_HOST,
  SERVER_PORT: process.env.SERVER_PORT,
}

export default config
