import Observer from '../event/Observer'
import Subject from '../event/Subject'
import { SocketAddInfoDTO } from '../interfaces/socketAddInfoDTO'
import { Device } from '../models/device'

import { emitToAll } from './WebSocket'

export const updateDeviceObserver = (subject: Subject<Device>) =>
  new Observer(subject, (device: Device) => {
    console.log('DeviceObserver: device updated')
    emitToAll(device)
  })

export const addInfoObserver = (subject: Subject<SocketAddInfoDTO>) =>
  new Observer(subject, (device: SocketAddInfoDTO) => {
    console.log('DeviceObserver: device info added')
    emitToAll(device)
  })
