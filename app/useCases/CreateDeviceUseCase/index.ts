import CreateDeviceUseCase from './CreateDeviceUseCase'
import MongoDeviceRepository from '../../repositories/mongodb/MongoDeviceRepository'

const mongoDeviceRepository = new MongoDeviceRepository()

const createDeviceUseCase = new CreateDeviceUseCase(mongoDeviceRepository)

export default createDeviceUseCase
