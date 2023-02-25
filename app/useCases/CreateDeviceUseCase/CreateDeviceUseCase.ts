import { Device } from '../../models/device'
import { IDeviceRepository } from '../../repositories/IDeviceRepository'
import { ICreateDeviceDTO } from './ICreateDeviceDTO'

export default class CreateDeviceUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly deviceRepository: IDeviceRepository) {}

  async execute(device: ICreateDeviceDTO): Promise<Device> {
    const deviceCreated = await this.deviceRepository.create(device)
    return deviceCreated
  }
}
