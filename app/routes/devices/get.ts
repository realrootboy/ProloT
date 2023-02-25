import { FastifyReply, FastifyRequest } from 'fastify'
import listDevicesUseCase from '../../useCases/ListDevicesUseCase'

export default async (request: FastifyRequest, reply: FastifyReply) => {
  const devices = await listDevicesUseCase.execute()
  return devices
}
