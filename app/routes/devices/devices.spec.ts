import { expect, test, beforeAll, afterAll, beforeEach, describe } from 'vitest'
import request from 'supertest'
import { app } from '../../app'
import MongoDBRepository from '../../repositories/mongodb'

describe('POST /devices', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  beforeEach(async () => {
    await MongoDBRepository.clear()
  })

  test('should return 201', async () => {
    const response = await request(app.server)
      .post('/devices')
      .send({
        name: 'device',
        info: [
          {
            name: 'info',
            value: 'value',
            unit: 'unit',
          },
        ],
      })

    expect(response.status).toBe(201)
  })

  test('should return 400', async () => {
    const response = await request(app.server)
      .post('/devices')
      .send({
        name: 'device',
        info: [
          {
            name: 'info',
            value: 'value',
          },
        ],
      })

    expect(response.status).toBe(400)
  })

  test('should return 200', async () => {
    const response = await request(app.server)
      .post('/devices')
      .send({
        name: 'device',
        info: [
          {
            name: 'info',
            value: 'value',
            unit: 'unit',
          },
        ],
      })

    const { _id } = response.body

    const response2 = await request(app.server)
      .put(`/devices/${_id}`)
      .send({
        name: 'device_A',
        info: [
          {
            name: 'info_B',
            value: 'value_C',
            unit: 'unit_D',
          },
        ],
      })

    expect(response2.status).toBe(200)
    expect(response2.body).toEqual(
      expect.objectContaining({
        name: 'device_A',
        info: [
          {
            name: 'info_B',
            value: 'value_C',
            unit: 'unit_D',
            createdAt: expect.any(String),
          },
        ],
      }),
    )
  })

  test('should return 400', async () => {
    const response = await request(app.server)
      .post('/devices')
      .send({
        name: 'device',
        info: [
          {
            name: 'info',
            value: 'value',
            unit: 'unit',
          },
        ],
      })

    const { _id } = response.body

    const response2 = await request(app.server)
      .put(`/devices/${_id}`)
      .send({
        name: 'device_A',
        info: [
          {
            name: 'info_B',
            value: 'value_C',
          },
        ],
      })

    expect(response2.status).toBe(400)
    expect(response2.body).toEqual(
      expect.objectContaining({
        error: expect.any(Object),
      }),
    )
  })
})
