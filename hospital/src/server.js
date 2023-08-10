import dotenv from 'dotenv'
import http from 'http'
import { sequelize } from './database/models/index'
import app from './app'

dotenv.config()
const port = process.env.PORT || 7001
const server = http.createServer(app)

server.listen(port, () => {
  console.log(`Product App listening on ${port}!....`)
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to db established successfully.')
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error)
  })
export default app
