import mongo from '../repositories/mongodb'
import { deviceInfo } from '../interfaces/deviceInfo'
import { Schema } from 'mongoose'

export interface Device {
  _id?: string
  name: string
  info: deviceInfo[]
  createdAt?: Date
  updatedAt?: Date
}

const deviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  info: {
    type: Array,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongo.connection.model<Device>('Device', deviceSchema)
