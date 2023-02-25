import WebSocket from 'ws'
import http from 'http'

const sockets: Set<WebSocket> = new Set()

class WSocket {
  private server: WebSocket.Server

  constructor(httpServer: http.Server) {
    this.server = new WebSocket.Server({ server: httpServer })
    this.server.on('connection', this.handleConnection)
  }

  handleConnection = (socket: WebSocket) => {
    sockets.add(socket)
    console.log(`New connection: ${socket}`)

    socket.on('close', () => {
      sockets.delete(socket)
    })
  }

  listen(): void {
    console.log('WebSocket server started')
  }
}

const emitToAll = (payload: any) => {
  sockets.forEach((socket) => {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(payload))
    }
  })
}

export { WSocket, emitToAll }
