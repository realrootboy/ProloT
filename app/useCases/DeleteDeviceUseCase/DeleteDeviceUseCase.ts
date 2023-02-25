import { Device } from '../../models/device'
import { IDeviceRepository } from '../../repositories/IDeviceRepository'

export default class DeleteDeviceUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly deviceRepository: IDeviceRepository) {}

  async execute(id: string): Promise<Device | null> {
    const deviceFound = await this.deviceRepository.getDeviceById(id)

    if (deviceFound && deviceFound._id) {
      const deviceDeleted = await this.deviceRepository.delete(deviceFound._id)
      return deviceDeleted
    }

    throw new Error('Device not found')
  }
}
