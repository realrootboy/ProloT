import { Device } from '../../models/device'
import { IDeviceRepository } from '../../repositories/IDeviceRepository'
import { IUpdateDeviceDTO } from './IUpdateDeviceDTO'

export default class UpdateDeviceUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly deviceRepository: IDeviceRepository) {}

  async execute(device: IUpdateDeviceDTO): Promise<Device | null> {
    const deviceFound = await this.deviceRepository.getDeviceById(device.id)

    if (deviceFound) {
      deviceFound.name = device.name || deviceFound.name
      deviceFound.info = device.info || deviceFound.info
      const deviceUpdated = await this.deviceRepository.update(deviceFound)
      return deviceUpdated
    }

    throw new Error('Device not found')
  }
}
