import UpdateDeviceUseCase from './UpdateDeviceUseCase'
import MongoDeviceRepository from '../../repositories/mongodb/MongoDeviceRepository'

const mongoDeviceRepository = new MongoDeviceRepository()

const updateDeviceUseCase = new UpdateDeviceUseCase(mongoDeviceRepository)

export default updateDeviceUseCase
