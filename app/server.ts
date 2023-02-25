import { app } from './app'
import { env } from './env'
import { WSocket } from './services/WebSocket'

app
  .listen({
    port: Number(env.PORT),
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('Server is running')
  })

const wsocket = new WSocket(app.server)

wsocket.listen()
