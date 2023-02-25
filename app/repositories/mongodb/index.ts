import mongoose from 'mongoose'
import { env } from '../../env'

const host = env.DB_HOST
const port = env.DB_PORT
const mongoUri = `mongodb://${host}:${port}`

export class MongoDBRepository {
  private readonly _connection: mongoose.Connection

  constructor() {
    this._connection = mongoose.createConnection(mongoUri)
  }

  get connection(): mongoose.Connection {
    return this._connection
  }

  async clear(): Promise<void> {
    const collections = await this._connection.db.collections()

    for (const collection of collections) {
      await collection.deleteMany({})
    }
  }
}

export default new MongoDBRepository()
