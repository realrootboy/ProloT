import { Device } from '../../models/device'
import { IDeviceRepository } from '../../repositories/IDeviceRepository'

export default class ListDevicesUseCase {
  private readonly _deviceRepository: IDeviceRepository

  constructor(deviceRepository: IDeviceRepository) {
    this._deviceRepository = deviceRepository
  }

  async execute(): Promise<Device[]> {
    const devices = await this._deviceRepository.getDevices()
    return devices
  }
}
