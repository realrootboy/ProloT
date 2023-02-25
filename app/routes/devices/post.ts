import { FastifyReply, FastifyRequest } from 'fastify'
import createDeviceUseCase from '../../useCases/CreateDeviceUseCase'
import { z } from 'zod'

export default async (request: FastifyRequest, reply: FastifyReply) => {
  const deviceSchema = z.object({
    name: z.string(),
    info: z.array(
      z.object({
        name: z.string(),
        value: z.string(),
        unit: z.string(),
      }),
    ),
  })

  const safeDevice = deviceSchema.safeParse(request.body)

  if (!safeDevice.success) {
    reply.status(400)
    return { error: safeDevice.error }
  }

  const parsedData = safeDevice.data

  const infos = parsedData.info.map((info) => {
    return {
      name: info.name,
      value: info.value,
      unit: info.unit,
      createdAt: new Date(),
    }
  })

  const device = {
    name: parsedData.name,
    info: infos,
  }

  return await createDeviceUseCase.execute(device)
}
