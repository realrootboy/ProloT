import { deviceInfo } from '../../interfaces/deviceInfo'
import DeviceModel, { Device } from '../../models/device'
import { IDeviceRepository } from '../IDeviceRepository'

export default class MongoDeviceRepository implements IDeviceRepository {
  async getDevices(): Promise<Device[]> {
    const devices = await DeviceModel.find()
    return devices
  }

  async getDeviceById(id: string): Promise<Device | null> {
    const device = await DeviceModel.findById(id)
    return device
  }

  async create(device: Device): Promise<Device> {
    const deviceModel = new DeviceModel(device)
    const deviceCreated = await deviceModel.save()
    return deviceCreated
  }

  async update(device: Device): Promise<Device | null> {
    const deviceToUpdate = { ...device, updatedAt: new Date() }

    const deviceUpdated = await DeviceModel.findByIdAndUpdate(
      device._id,
      deviceToUpdate,
      {
        new: true,
      },
    )
    return deviceUpdated
  }

  async delete(id: string): Promise<Device | null> {
    const deviceDeleted = await DeviceModel.findByIdAndDelete(id)
    return deviceDeleted
  }

  async addDeviceInfo(
    device: Device,
    deviceInfo: deviceInfo[],
  ): Promise<Device> {
    const _device = device
    _device.info = [..._device.info, ...deviceInfo]
    const deviceUpdated = await this.update(_device)
    if (!deviceUpdated) {
      throw new Error('Device not found')
    }

    return deviceUpdated
  }
}
