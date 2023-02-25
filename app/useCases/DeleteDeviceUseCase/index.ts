import DeleteDeviceUseCase from './DeleteDeviceUseCase'
import MongoDeviceRepository from '../../repositories/mongodb/MongoDeviceRepository'

const mongoDeviceRepository = new MongoDeviceRepository()

const deleteDeviceUseCase = new DeleteDeviceUseCase(mongoDeviceRepository)

export default deleteDeviceUseCase
