import AddDeviceInfoUseCase from './AddDeviceInfoUseCase'
import MongoDeviceRepository from '../../repositories/mongodb/MongoDeviceRepository'

const mongoDeviceRepository = new MongoDeviceRepository()

const addDeviceInfoUseCase = new AddDeviceInfoUseCase(mongoDeviceRepository)

export default addDeviceInfoUseCase
