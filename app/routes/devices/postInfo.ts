import { FastifyReply, FastifyRequest } from 'fastify'
import addDeviceInfoUseCase from '../../useCases/AddDeviceInfoUseCase'
import { z } from 'zod'

export default async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply,
) => {
  const deviceSchema = z.object({
    info: z.array(
      z.object({
        name: z.string(),
        value: z.string(),
        unit: z.string(),
      }),
    ),
  })

  const safeInfo = deviceSchema.safeParse(request.body)

  if (!safeInfo.success) {
    reply.status(400)
    return { error: safeInfo.error }
  }

  const { id } = request.params

  const parsedData = safeInfo.data

  const infos = parsedData.info.map((info) => {
    return {
      name: info.name,
      value: info.value,
      unit: info.unit,
      createdAt: new Date(),
    }
  })

  const deviceInfo = {
    deviceId: id,
    info: infos,
  }

  return await addDeviceInfoUseCase.execute(deviceInfo)
}
