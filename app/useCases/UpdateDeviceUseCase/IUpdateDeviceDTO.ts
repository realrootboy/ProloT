import { deviceInfo } from '../../interfaces/deviceInfo'

export interface IUpdateDeviceDTO {
  id: string
  name?: string
  info?: deviceInfo[]
}
