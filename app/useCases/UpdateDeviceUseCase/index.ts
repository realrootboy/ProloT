import UpdateDeviceUseCase from './UpdateDeviceUseCase'
import MongoDeviceRepository from '../../repositories/mongodb/MongoDeviceRepository'
import Subject from '../../event/Subject'
import { updateDeviceObserver } from '../../services/DeviceObserver'
import { Device } from '../../models/device'

export const subject = new Subject<Device>()

updateDeviceObserver(subject)

const mongoDeviceRepository = new MongoDeviceRepository()

const updateDeviceUseCase = new UpdateDeviceUseCase(
  mongoDeviceRepository,
  subject,
)

export default updateDeviceUseCase
