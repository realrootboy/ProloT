import AddDeviceInfoUseCase from './AddDeviceInfoUseCase'
import MongoDeviceRepository from '../../repositories/mongodb/MongoDeviceRepository'
import Subject from '../../event/Subject'
import { addInfoObserver } from '../../services/DeviceObserver'
import { SocketAddInfoDTO } from '../../interfaces/socketAddInfoDTO'

export const subject = new Subject<SocketAddInfoDTO>()

addInfoObserver(subject)

const mongoDeviceRepository = new MongoDeviceRepository()

const addDeviceInfoUseCase = new AddDeviceInfoUseCase(
  mongoDeviceRepository,
  subject,
)

export default addDeviceInfoUseCase
