import { FastifyReply, FastifyRequest } from 'fastify'
import deleteDeviceUseCase from '../../useCases/DeleteDeviceUseCase'

export default async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply,
) => {
  const { id } = request.params

  return await deleteDeviceUseCase.execute(id)
}
