import { config } from 'dotenv'
import { z } from 'zod'

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' })
} else {
  config()
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PORT: z.string(),
  DB_HOST: z.string(),
  DB_PORT: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error(
    'Invalid environment variables. Consider setup dotenv files.',
    _env.error.format,
  )
  throw new Error('Invalid environment variables. Consider setup dotenv files.')
}

export const env = _env.data
