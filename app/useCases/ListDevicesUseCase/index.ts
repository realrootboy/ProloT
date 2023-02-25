import ListDevicesUseCase from './ListDeviceUseCase'
import MongoDeviceRepository from '../../repositories/mongodb/MongoDeviceRepository'

const mongoDeviceRepository = new MongoDeviceRepository()

const listDevicesUseCase = new ListDevicesUseCase(mongoDeviceRepository)

export default listDevicesUseCase
