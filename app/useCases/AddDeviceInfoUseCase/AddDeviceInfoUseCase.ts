import Subject from '../../event/Subject'
import { SocketAddInfoDTO } from '../../interfaces/socketAddInfoDTO'
import { Device } from '../../models/device'
import { IDeviceRepository } from '../../repositories/IDeviceRepository'
import { IAddDeviceInfoDTO } from './IAddDeviceInfoDTO'

export default class AddDeviceInfoUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private deviceRepository: IDeviceRepository,
    private subject: Subject<SocketAddInfoDTO>,
  ) {}

  async execute({ deviceId, info }: IAddDeviceInfoDTO): Promise<Device | null> {
    const device = await this.deviceRepository.getDeviceById(deviceId)

    if (!device) {
      throw new Error('Device not found')
    }

    const deviceUpdated = await this.deviceRepository.addDeviceInfo(
      device,
      info,
    )

    if (!deviceUpdated._id) {
      throw new Error('Error updating device')
    }

    this.subject.notify({
      id: deviceUpdated._id,
      name: deviceUpdated.name,
      newInfo: info,
    })

    return deviceUpdated
  }
}
