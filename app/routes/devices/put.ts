import { FastifyReply, FastifyRequest } from 'fastify'
import updateDeviceUseCase from '../../useCases/UpdateDeviceUseCase'
import { z } from 'zod'

export default async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply,
) => {
  const deviceSchema = z.object({
    name: z.string().optional(),
    info: z
      .array(
        z.object({
          name: z.string(),
          value: z.string(),
          unit: z.string(),
        }),
      )
      .optional(),
  })

  const safeDevice = deviceSchema.safeParse(request.body)

  if (!safeDevice.success) {
    reply.status(400)
    return { error: safeDevice.error }
  }

  const { id } = request.params

  const parsedData = safeDevice.data

  const infos = parsedData.info
    ? parsedData.info.map((info) => {
        return {
          name: info.name,
          value: info.value,
          unit: info.unit,
          createdAt: new Date(),
        }
      })
    : undefined

  const device = {
    id,
    name: parsedData.name,
    info: infos,
  }

  return await updateDeviceUseCase.execute(device)
}
