import { Device } from '../models/device'
import { deviceInfo } from '../interfaces/deviceInfo'

export interface IDeviceRepository {
  getDevices(): Promise<Device[]>
  getDeviceById(id: string): Promise<Device | null>
  create(device: Device): Promise<Device>
  update(device: Device): Promise<Device | null>
  delete(id: string): Promise<Device | null>
  addDeviceInfo(device: Device, deviceInfo: deviceInfo[]): Promise<Device>
}
