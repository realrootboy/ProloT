import { FastifyInstance, RouteShorthandOptions } from 'fastify'

import get from './get'
import post from './post'
import put from './put'
import del from './delete'
import postInfo from './postInfo'

export async function devicesRoutes(
  fastify: FastifyInstance,
  options: RouteShorthandOptions,
) {
  fastify.get('/devices', get)

  fastify.post('/devices', post)

  fastify.post<{
    Params: { id: string }
  }>('/devices/info/:id', postInfo)

  fastify.put<{ Params: { id: string } }>('/devices/:id', put)

  fastify.delete<{ Params: { id: string } }>('/devices/:id', del)
}
