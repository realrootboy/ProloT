import { Schema, model, Document } from 'mongoose'
import { deviceInfo } from '../interfaces/deviceInfo'

export interface Device extends Document {
  name: string
  info: deviceInfo[]
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

export default model<Device>('Device', deviceSchema)
