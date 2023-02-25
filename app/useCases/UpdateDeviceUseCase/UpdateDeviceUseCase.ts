import Subject from '../../event/Subject'
import { Device } from '../../models/device'
import { IDeviceRepository } from '../../repositories/IDeviceRepository'
import { IUpdateDeviceDTO } from './IUpdateDeviceDTO'

export default class UpdateDeviceUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly deviceRepository: IDeviceRepository,
    private readonly subject: Subject<Device>,
  ) {}

  async execute(device: IUpdateDeviceDTO): Promise<Device | null> {
    const deviceFound = await this.deviceRepository.getDeviceById(device.id)

    if (deviceFound) {
      deviceFound.name = device.name || deviceFound.name
      deviceFound.info = device.info || deviceFound.info
      const deviceUpdated = await this.deviceRepository.update(deviceFound)

      if (deviceUpdated) {
        this.subject.notify(deviceUpdated)
      }
      return deviceUpdated
    }

    throw new Error('Device not found')
  }
}
