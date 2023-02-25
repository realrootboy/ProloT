import fastify from 'fastify'
import { devicesRoutes } from './routes/devices'

const app = fastify()

app.register(devicesRoutes)

export { app }
